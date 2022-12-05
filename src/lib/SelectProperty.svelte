<script>
    import Property from './Property.svelte';

    export let value;
    export let options;
</script>

<Property {...$$restProps}><slot/></Property>
<select class="form-select" bind:value>
    {#each Object.entries(options) as [name, value]}
        <option {value}>{name}</option>
    {/each}
</select>
