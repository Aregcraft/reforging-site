<script>
    import Property from './Property.svelte';

    export let value;
</script>

<Property {...$$restProps}><slot/></Property>
<input type="number" min="0" step="0.01" class="form-control" bind:value>
