<script>
    export let name;
    export let value;
    export let small = false;
    export let max = '';
</script>

<svelte:element this="h{small ? 5 : 3}" class="mt-{small ? 3 : 5}">{name}</svelte:element>
<p><slot/></p>
<div class="col">
    <input type="number" min="0" {max} step="0.01" class="form-control" bind:value>
</div>
