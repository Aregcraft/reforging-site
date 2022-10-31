<script>
    export let value;
    let color;
</script>

<div class="col">
    <h3 class="mt-5">Color</h3>
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
</div>
