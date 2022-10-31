<script>
    export let name;
    export let value = false;
    export let small = false;
</script>

<svelte:element this={`h${small ? 5 : 3}`} class="mt-{small ? 3 : 5}">
    {name}
    <input type="checkbox" class="form-check-input align-middle mt-0" bind:checked={value}>
</svelte:element>
<p><slot/></p>
