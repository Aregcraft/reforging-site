<script>
    import {generate} from '$lib/stores';
    import Color from '$lib/Color.svelte';
    import StringProperty from '$lib/StringProperty.svelte';
    import Property from '$lib/Property.svelte';
    import StringListProperty from '$lib/StringListProperty.svelte';
    import RecipeProperty from '$lib/RecipeProperty.svelte';
    import DoubleProperty from '$lib/DoubleProperty.svelte';
    import IntProperty from '$lib/IntProperty.svelte';

    let item = {
        name: '',
        lore: ''
    };
    let recipe = [];
    let sound = {};
    let price = 1;

    $generate = () => {
        return {
            item: {
                name,
                lore: item.lore.split('\n')
            },
            recipe,
            sound,
            price
        };
    };
</script>

<svelte:head>
    <title>Reforging | anvil.json</title>
</svelte:head>
<Property name="Item" size="2">Configures the look of the reforging anvil.</Property>
<Color size="3" bind:value={item.name}/>
<StringProperty name="Name" size="3" bind:value={item.name}>
    Specifies the name of the reforging anvil.
</StringProperty>
<Color size="3" bind:value={item.lore}/>
<StringListProperty name="Lore" size="3" bind:value={item.lore}>
    Specifies the name of the reforging anvil.
</StringListProperty>
<RecipeProperty name="Recipe" size="2" bind:value={recipe}>
    Specifies the crafting recipe of the reforging anvil.
</RecipeProperty>
<Property name="Sound" size="2">Specifies the sound played when a player is using a reforging anvil.</Property>
<DoubleProperty name="Volume" size="3" bind:value={sound.volume}>
    Specifies the volume of the sound.
</DoubleProperty>
<DoubleProperty name="Pitch" size="3" bind:value={sound.pitch}>
    Specifies the pitch of the sound.
</DoubleProperty>
<IntProperty name="Price" size="2" bind:value={price}>
    Specifies the amount of the respective ingredient required to use a reforging anvil.
</IntProperty>
