<script>
    import MaterialSelect from './MaterialSelect.svelte';
    import Property from './Property.svelte';

    export let value;
</script>

<Property {...$$restProps}><slot/></Property>
<MaterialSelect bind:value/>
