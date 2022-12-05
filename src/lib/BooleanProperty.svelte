<script>
    import SelectProperty from './SelectProperty.svelte';

    export let value;
</script>

<SelectProperty {...$$restProps} options={{
    'Yes': true,
    'No': false
}} bind:value><slot/></SelectProperty>
