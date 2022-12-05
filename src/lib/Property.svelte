<script>
    export let name;
    export let size;
</script>
<svelte:element this={`h${size}`} class="mt-5">{name}</svelte:element>
<p><slot/></p>
