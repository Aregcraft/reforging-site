<script>
    import Property from './Property.svelte';

    export let value;
</script>

<Property {...$$restProps}><slot/></Property>
<input type="number" min="0" class="form-control" bind:value>
