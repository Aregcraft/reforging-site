<script>
    import Property from '$lib/Property.svelte';
    import BooleanProperty from '$lib/BooleanProperty.svelte';
    import DoubleProperty from '$lib/DoubleProperty.svelte';
    import IntProperty from '$lib/IntProperty.svelte';
    import MaterialProperty from '$lib/MaterialProperty.svelte';
    import ParticleProperty from '$lib/ParticleProperty.svelte';
    import PotionEffectTypeProperty from '$lib/PotionEffectTypeProperty.svelte';
    import RecipeProperty from '$lib/RecipeProperty.svelte';
    import StringProperty from '$lib/StringProperty.svelte';
    import {generate} from '../../../lib/stores';

    export let data;
    let components = {
        boolean: BooleanProperty,
        double: DoubleProperty,
        int: IntProperty,
        Material: MaterialProperty,
        Particle: ParticleProperty,
        PotionEffectType: PotionEffectTypeProperty,
        RecipeModel: RecipeProperty,
        String: StringProperty
    }
    let abilities = [];
    let ability;
    
    function split(text) {
        return text.split(/(?=[A-Z])/).slice(0, -1).join(' ');
    }
    
    function capitalize(text) {
        return text[0].toUpperCase() + text.substring(1);
    }

    $generate = () => abilities;
</script>

<svelte:head>
    <title>Reforging | abilities.json</title>
</svelte:head>
{#each abilities as ability, i}
    {@const model = data.abilities[ability.type]}
    {#if i > 0}
        <hr>
    {/if}
    <Property name={split(ability.type)} size="1">{model.description}</Property>
    {#each Object.entries(model.external) as [external, type]}
        {@const model = data.external[type]}
        <Property name={capitalize(external)} size="2">{model.description}</Property>
        {#each Object.entries(model.properties) as [name, {type, description}]}
            <svelte:component this={components[type]} name={capitalize(name)} size="3"
                              bind:value={ability[external][name]}>
                {description}
            </svelte:component>
        {/each}
    {/each}
    {#each Object.entries(model.properties) as [name, {type, description}]}
        <svelte:component this={components[type]} name={capitalize(name)} size="2" bind:value={ability[name]}>
            {description}
        </svelte:component>
    {/each}
    <div class="mb-5"></div>
{/each}
<div class="row" class:mt-5={abilities.length === 0}>
    <div class="col">
        <select class="form-select" bind:value={ability}>
            {#each Object.entries(data.abilities) as [name]}
                <option value={name}>{split(name)}</option>
            {/each}
        </select>
    </div>
    <div class="col">
        <button class="btn btn-primary" on:click={() => {
            abilities = [...abilities, {
                ...Object.keys(data.abilities[ability].external).reduce((accumulator, value) => {
                    return {...accumulator, [value]: {}};
                    }, {}),
                type: ability
            }];
            console.log(abilities[abilities.length - 1]);
        }}><i class="bi bi-plus"></i> Add Ability</button>
    </div>
</div>
