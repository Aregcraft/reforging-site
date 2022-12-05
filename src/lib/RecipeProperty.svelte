<script>
    import Property from './Property.svelte';
    import ItemSelect from './MaterialSelect.svelte';

    export let value;
    let recipe = [];

    $: {
        let chars = 'abcdefhij'.split('');
        let shape = [];
        let keys = {};
        let materials = {};
        for (let material of recipe) {
            if (!(material in materials)) {
                materials[material] = chars[0];
                keys[chars.shift()] = material;
            }
            shape.push(materials[material]);
        }
        value = {
            shape: [
                shape.slice(0, 3).join(''),
                shape.slice(3, 6).join(''),
                shape.slice(6, 9).join('')
            ],
            keys
        };
    }
</script>

<Property {...$$restProps}><slot/></Property>
<div class="row">
    <div class="col">
        <ItemSelect bind:value={recipe[0]}/>
    </div>
    <div class="col">
        <ItemSelect bind:value={recipe[1]}/>
    </div>
    <div class="col">
        <ItemSelect bind:value={recipe[2]}/>
    </div>
</div>
<div class="row mt-4">
    <div class="col">
        <ItemSelect bind:value={recipe[3]}/>
    </div>
    <div class="col">
        <ItemSelect bind:value={recipe[4]}/>
    </div>
    <div class="col">
        <ItemSelect bind:value={recipe[5]}/>
    </div>
</div>
<div class="row mt-4">
    <div class="col">
        <ItemSelect bind:value={recipe[6]}/>
    </div>
    <div class="col">
        <ItemSelect bind:value={recipe[7]}/>
    </div>
    <div class="col">
        <ItemSelect bind:value={recipe[8]}/>
    </div>
</div>
