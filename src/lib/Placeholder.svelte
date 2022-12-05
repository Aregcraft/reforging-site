<script>
    import Property from './Property.svelte';
    import Color from './Color.svelte';

    export let value;
    export let size;
    export let options;
    let placeholder;
</script>

<div class="row">
    <div class="col">
        <Property name="Placeholder" {size}/>
        <div class="row">
            <div class="col">
                <select class="form-select" bind:value={placeholder}>
                    {#each Object.entries(options) as [name, value]}
                        <option {value}>{name}</option>
                    {/each}
                </select>
            </div>
            <div class="col">
                <button class="btn btn-primary" on:click={() => {
                    value += `%${placeholder}%`;
                }}><i class="bi bi-plus"></i> Insert</button>
            </div>
        </div>
    </div>
    <div class="col">
        <Color {size} bind:value/>
    </div>
</div>
