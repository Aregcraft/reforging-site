<script>
    export let name;
    export let value;
    export let small = false;
</script>

<svelte:element this={`h${small ? 5 : 3}`} class="mt-{small ? 3 : 5}">{name}</svelte:element>
<p><slot/></p>
<div class="col">
    <textarea class="form-control" bind:value></textarea>
</div>
