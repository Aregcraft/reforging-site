<script>
    export let name;
    export let value;
    export let small = false;
    export let options;
</script>

<svelte:element this={`h${small ? 5 : 3}`} class="mt-{small ? 3 : 5}">{name}</svelte:element>
<p><slot/></p>
<div class="col">
    <select class="form-select" bind:value>
        {#each options as {name, value}}
            <option {value}>{name}</option>
        {/each}
    </select>
</div>
