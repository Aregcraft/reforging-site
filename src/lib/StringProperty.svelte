<script>
    import Property from './Property.svelte';

    export let value;
</script>

<Property {...$$restProps}><slot/></Property>
<input type="text" class="form-control" bind:value>
