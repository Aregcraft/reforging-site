<script>
    import Property from './Property.svelte';

    export let value;
    export let size;
    let color = '';
</script>
<Property name="Color" {size}/>
<div class="row">
    <div class="col">
        <input type="text" class="form-control" bind:value={color}>
    </div>
    <div class="col">
        <button class="btn btn-primary" on:click={() => {
            value += `%${color.toUpperCase()}%`;
        }}><i class="bi bi-plus"></i> Insert</button>
    </div>
</div>
