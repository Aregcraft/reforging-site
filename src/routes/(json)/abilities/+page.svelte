<script>
    import {page} from '$app/stores';
    import PropertyGroup from '$lib/PropertyGroup.svelte';
    import BooleanProperty from '$lib/BooleanProperty.svelte';
    import DoubleProperty from '$lib/DoubleProperty.svelte';
    import IntProperty from '$lib/IntProperty.svelte';
    import TextProperty from '$lib/TextProperty.svelte';
    import ParticleProperty from '$lib/ParticleProperty.svelte';

    export let data;
    const propertyComponents = {
        boolean: BooleanProperty,
        double: DoubleProperty,
        int: IntProperty,
        string: TextProperty,
        particle: ParticleProperty
    };
    let counts = {};
    let properties = {};
    data['abilities'].forEach(({name, content}) => {
        counts[name] = 1;
        properties[name] = {};
        properties[name]['name'] = [];
        Object.keys(content['properties']).forEach(it => properties[name][it] = []);
        properties[name]['price'] = {};
        Object.keys(data['price']['properties']).forEach(it => properties[name]['price'][it] = []);
    });

    page.generate = () => {
        const abilities = {};
        Object.entries(properties).forEach(([ability, properties]) => {
            abilities[ability] = {};
            for (let i = 0; i < counts[ability]; i++) {
                let name = properties['name'][i];
                abilities[ability][name] = {};
                Object.entries(properties).filter(([name, _]) => name !== 'name').forEach(([key, value]) => {
                    if (key === 'price') {
                        abilities[ability][name]['price'] = {};
                        Object.entries(value).forEach(([key, value]) =>
                            abilities[ability][name]['price'][key] = value[i]);
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

    function getFirstWord(name) {
        return name.split(/(?=[A-Z])/)[0];
    }
</script>

<svelte:head>
    <title>abilities.json</title>
</svelte:head>
<div class="navbar navbar-expand-md">
    <div class="container-fluid">
        <ul class="navbar-nav mx-auto">
            {#each data['abilities'] as {name}}
                <li class="nav-item">
                    <a role="button" class="nav-link" data-bs-toggle="collapse" href="#{getFirstWord(name)}"
                       aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        {getFirstWord(name)}
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</div>
<div id="ability">
    {#each data['abilities'] as {name, content}, i}
        <div class="collapse" class:show={i === 0} id={getFirstWord(name)} data-bs-parent="#ability">
            {#each Array(counts[name]) as _, i}
                {#if i !== 0}
                    <hr>
                {/if}
                <TextProperty name="Name" bind:value={properties[name]['name'][i]}>
                    {content['description']}
                </TextProperty>
                <PropertyGroup name="Price">{data['price']['description']}</PropertyGroup>
                {#each Object.entries(data['price']['properties']) as [property, {type, description}]}
                    <svelte:component this={propertyComponents[type]} name={toTitleCase(property)} small
                                      bind:value={properties[name]['price'][property][i]}>
                        {description}
                    </svelte:component>
                {/each}
                {#each Object.entries(content['properties']) as [property, {type, description}]}
                    <svelte:component this={propertyComponents[type]} name={toTitleCase(property)}
                                      bind:value={properties[name][property][i]}>
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
