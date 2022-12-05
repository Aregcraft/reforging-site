<script>
    import {generate} from '$lib/stores';
    import ReforgePropertyGroup from '$lib/ReforgePropertyGroup.svelte';
    import Property from '$lib/Property.svelte';
    import StringProperty from '$lib/StringProperty.svelte';
    import Color from '$lib/Color.svelte';
    import StringListProperty from '$lib/StringListProperty.svelte';
    import MaterialProperty from '$lib/MaterialProperty.svelte';
    import RecipeProperty from '$lib/RecipeProperty.svelte';

    let empty = {
        name: '',
        ability: 'NONE',
        stone: {
            item: {
                name: '',
                lore: ''
            },
            material: ''
        }
    };
    let reforges = [empty];

    $generate = () => reforges.map(it => {
        it.stone.item.lore = it.stone.item.lore.split('\n');
        return it;
    });
</script>

<svelte:head>
    <title>Reforging | ultimate_reforges.json</title>
</svelte:head>
{#each reforges as reforge, i}
    {#if i > 0}
        <hr>
    {/if}
    <ReforgePropertyGroup bind:value={reforge}/>
    <Property name="Stone" size="2">Configures the reforge stone of this ultimate reforge.</Property>
    <StringProperty name="Name" size="3" bind:value={reforge.stone.name}>
        Specifies the name of the reforge stone.
    </StringProperty>
    <Property name="Item" size="3">Configures the look of the reforge stone.</Property>
    <Color size="4" bind:value={reforge.stone.item.name}/>
    <StringProperty name="Name" size="4" bind:value={reforge.stone.item.name}>
        Specifies the name of the reforge stone.
    </StringProperty>
    <Color size="4" bind:value={reforge.stone.item.lore}/>
    <StringListProperty name="Lore" size="4" bind:value={reforge.stone.item.lore}>
        Specifies the lore of the reforge stone.
    </StringListProperty>
    <MaterialProperty name="Material" size="3" bind:value={reforge.stone.material}>
        Specifies the material of the reforge stone.
    </MaterialProperty>
    <RecipeProperty name="Recipe" size="3" bind:value={reforge.stone.recipe}>
        Specifies the crafting recipe of the reforge stone.
    </RecipeProperty>
    <div class="mb-5"></div>
{/each}
<button class="btn btn-primary" on:click={() => {
    reforges = [...reforges, empty];
}}><i class="bi bi-plus"></i> Add Ultimate Reforge</button>
