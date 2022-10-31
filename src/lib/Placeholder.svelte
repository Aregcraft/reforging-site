<script>
    import Color from './Color.svelte';

    export let value;
    export let options;
    let placeholder;
</script>

<div class="row">
    <div class="col">
        <h3 class="mt-5">Placeholders</h3>
        <div class="row">
            <div class="col">
                <select class="form-select" bind:value={placeholder}>
                    {#each options as option}
                        <option value={option}>
                            {option.replaceAll('_', ' ').split(' ').map(it =>
                                it.charAt(0).toUpperCase() + it.substring(1)).join(' ')}
                        </option>
                    {/each}
                </select>
            </div>
            <div class="col">
                <button class="btn btn-primary" on:click={() => {
                value += `%${placeholder.toUpperCase()}%`;
            }}><i class="bi bi-plus"></i> Insert</button>
            </div>
        </div>
    </div>
    <Color bind:value/>
</div>
