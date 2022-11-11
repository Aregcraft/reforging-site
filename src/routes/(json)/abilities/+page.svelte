<script>
    import {page} from '$app/stores';
    import PropertyGroup from '$lib/PropertyGroup.svelte';
    import BooleanProperty from '$lib/BooleanProperty.svelte';
    import DoubleProperty from '$lib/DoubleProperty.svelte';
    import IntProperty from '$lib/IntProperty.svelte';
    import TextProperty from '$lib/TextProperty.svelte';
    import ParticleProperty from '$lib/ParticleProperty.svelte';
    import PotionEffectTypeProperty from '$lib/PotionEffectTypeProperty.svelte';

    export let data;
    const propertyComponents = {
        boolean: BooleanProperty,
        double: DoubleProperty,
        int: IntProperty,
        string: TextProperty,
        particle: ParticleProperty,
        potioneffecttype: PotionEffectTypeProperty,
        expression: TextProperty
    };
    let counts = {};
    let rawProperties = {};
    Object.keys(data['abilities']).forEach(name => {
        counts[name] = 1
        rawProperties[name] = {};
        rawProperties[name]['name'] = [];
        const content = data['abilities'][name];
        Object.keys(content['properties']).forEach(it => rawProperties[name][it] = []);
        content['external'].forEach(propertyName => {
            rawProperties[name][propertyName] = {};
            Object.keys(data['external'][propertyName]['properties']).forEach(it =>
                rawProperties[name][propertyName][it] = []);
        });
    });

    page.generate = () => {
        const abilities = {};
        Object.entries(rawProperties).forEach(([ability, properties]) => {
            abilities[ability] = {};
            for (let i = 0; i < counts[ability]; i++) {
                let name = properties['name'][i];
                abilities[ability][name] = {};
                Object.entries(properties).filter(([name, _]) => name !== 'name').forEach(([key, value]) => {
                    if (data['abilities'][ability]['external'].includes(key)) {
                        abilities[ability][name][key] = {};
                        Object.entries(value).forEach(([propertyKey, value]) =>
                            abilities[ability][name][key][propertyKey] = value[i]);
                    } else {
                        abilities[ability][name][key] = value[i];
                    }
                });
            }
        });
        return abilities;
    };

    function toTitleCase(name) {
        return name.charAt(0).toUpperCase() + name.substring(1).split('')
            .map(it => it === it.toUpperCase() ? ` ${it}` : it).join('');
    }

    function getAbilityIdentifier(name) {
        return name.split(/(?=[A-Z])/).slice(0, -1).map(it => it.toLowerCase()).join('-');
    }

    function getAbilityName(name) {
        return getAbilityIdentifier(name).replaceAll('-', ' ');
    }
</script>

<svelte:head>
    <title>abilities.json</title>
</svelte:head>
<div class="navbar navbar-expand-md">
    <div class="container-fluid">
        <ul class="navbar-nav mx-auto">
            {#each Object.keys(data['abilities']) as name}
                <li class="nav-item">
                    <a role="button" class="nav-link" data-bs-toggle="collapse" href="#{getAbilityIdentifier(name)}"
                       aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        {getAbilityName(name)}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</div>
<div id="ability">
    {#each Object.entries(data['abilities']) as [name, {description, properties, external}], i}
        <div class="collapse" class:show={i === 0} id={getAbilityIdentifier(name)} data-bs-parent="#ability">
            {#each Array(counts[name]) as _, i}
                {#if i !== 0}
                    <hr>
                {/if}
                <TextProperty name="Name" bind:value={rawProperties[name]['name'][i]}>{description}</TextProperty>
                {#each external as externalProperty}
                    <PropertyGroup name={toTitleCase(externalProperty)}>
                        {data['external'][externalProperty]['description']}
                    </PropertyGroup>
                    {#each Object.entries(data['external'][externalProperty]['properties']) as
                        [property, {type, description}]}
                        <svelte:component this={propertyComponents[type]} name={toTitleCase(property)} small
                                          bind:value={rawProperties[name][externalProperty][property][i]}>
                            {description}
                        </svelte:component>
                    {/each}
                {/each}
                {#each Object.entries(properties) as [property, {type, description}]}
                    <svelte:component this={propertyComponents[type]} name={toTitleCase(property)}
                                      bind:value={rawProperties[name][property][i]}>
                        {description}
                    </svelte:component>
                {/each}
                <div class="mb-5"></div>
            {/each}
            <button class="btn btn-primary" on:click={() => {
                counts[name]++;
            }}><i class="bi bi-plus"></i> Add {toTitleCase(name)}</button>
        </div>
    {/each}
</div>
