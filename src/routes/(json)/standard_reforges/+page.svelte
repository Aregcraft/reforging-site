<script>
    import {generate} from '$lib/stores';
    import ReforgePropertyGroup from '$lib/ReforgePropertyGroup.svelte';

    let empty = {
        name: '',
        ability: 'NONE'
    };
    let reforges = [empty];

    $generate = () => reforges;
</script>

<svelte:head>
    <title>Reforging | standard_reforges.json</title>
</svelte:head>
{#each reforges as reforge, i}
    {#if i > 0}
        <hr>
    {/if}
    <ReforgePropertyGroup bind:value={reforge}/>
    <div class="mb-5"></div>
{/each}
<button class="btn btn-primary" on:click={() => {
    reforges = [...reforges, empty];
}}><i class="bi bi-plus"></i> Add Standard Reforge</button>
