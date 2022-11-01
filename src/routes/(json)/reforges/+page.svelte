<script>
    import {page} from '$app/stores';
    import PropertyGroup from '$lib/PropertyGroup.svelte';
    import TextProperty from '$lib/TextProperty.svelte';
    import DoubleProperty from '$lib/DoubleProperty.svelte';
    import IntProperty from '$lib/IntProperty.svelte';

    let count = 1;
    let name = [];
    let ability = [];
    let attackSpeed = [];
    let attackDamage = [];
    let maxHealth = [];
    let knockbackResistance = [];
    let movementSpeed = [];
    let armor = [];
    let armorToughness = [];
    let attackKnockback = [];
    let weight = [];

    page.generate = () => {
        const reforges = [];
        for (let i = 0; i < name.length; i++) {
            reforges[i] = {
                name: name[i],
                ability: ability[i],
                attackSpeed: attackSpeed[i],
                attackDamage: attackDamage[i],
                maxHealth: maxHealth[i],
                knockbackResistance: knockbackResistance[i],
                movementSpeed: movementSpeed[i],
                armor: armor[i],
                armorToughness: armorToughness[i],
                attackKnockback: attackKnockback[i],
                weight: weight[i],
            };
        }
        return reforges;
    };
</script>

<svelte:head>
    <title>reforges.json</title>
</svelte:head>
{#each Array(count) as _, i}
    {#if i !== 0}
        <hr>
    {/if}
    <TextProperty name="Name" bind:value={name[i]}>The name of the reforge.</TextProperty>
    <TextProperty name="Ability" bind:value={ability[i]}>
        The name of the ability of the reforge as per <code>abilities.json.</code>
    </TextProperty>
    <PropertyGroup name="Attributes">
        These are all the attributes, each corresponding to their respective stat.
    </PropertyGroup>
    <DoubleProperty name="Attack Speed" small bind:value={attackSpeed[i]}/>
    <DoubleProperty name="Attack Damage" small bind:value={attackDamage[i]}/>
    <DoubleProperty name="Max Health" small bind:value={maxHealth[i]}/>
    <DoubleProperty name="Knockback Resistance" small bind:value={knockbackResistance[i]}/>
    <DoubleProperty name="Movement Speed" small bind:value={movementSpeed[i]}/>
    <DoubleProperty name="Armor" small bind:value={armor[i]}/>
    <DoubleProperty name="Armor Toughness" small bind:value={armorToughness[i]}/>
    <DoubleProperty name="Attack Knockback" small bind:value={attackKnockback[i]}/>
    <IntProperty name="Weight" bind:value={weight[i]}>
        Represents the chance of this particular reforge being applied to the weapon. This is not a percentage, but
        rather relative weight, which means that there are no restrictions on the upper bound of the number.
    </IntProperty>
    <div class="mb-5"></div>
{/each}
<button class="btn btn-primary" on:click={() => {
    count++;
}}><i class="bi bi-plus"></i> Add Reforge</button>
