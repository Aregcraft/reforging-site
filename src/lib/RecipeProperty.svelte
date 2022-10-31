<script>
    import ItemSelect from './ItemSelect.svelte';

    export let name;
    export let value;
    export let small = false;
</script>

<svelte:element this="h{small ? 5 : 3}" class="mt-{small ? 3 : 5}">{name}</svelte:element>
<p><slot/></p>
<div class="row">
    <div class="col">
        <ItemSelect bind:value={value[0]}/>
    </div>
    <div class="col">
        <ItemSelect bind:value={value[1]}/>
    </div>
    <div class="col">
        <ItemSelect bind:value={value[2]}/>
    </div>
</div>
<div class="row mt-4">
    <div class="col">
        <ItemSelect bind:value={value[3]}/>
    </div>
    <div class="col">
        <ItemSelect bind:value={value[4]}/>
    </div>
    <div class="col">
        <ItemSelect bind:value={value[5]}/>
    </div>
</div>
<div class="row mt-4">
    <div class="col">
        <ItemSelect bind:value={value[6]}/>
    </div>
    <div class="col">
        <ItemSelect bind:value={value[7]}/>
    </div>
    <div class="col">
        <ItemSelect bind:value={value[8]}/>
    </div>
</div>
