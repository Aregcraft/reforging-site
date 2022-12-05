<script>
    import Property from './Property.svelte';

    export let value;
</script>

<Property {...$$restProps}><slot/></Property>
<textarea class="form-control" bind:value></textarea>
