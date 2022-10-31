<script>
    import {page} from '$app/stores';
    import Color from '$lib/Color.svelte';
    import PropertyGroup from '$lib/PropertyGroup.svelte';
    import TextProperty from '$lib/TextProperty.svelte';
    import TextareaProperty from '$lib/TextareaProperty.svelte';
    import DoubleProperty from '$lib/DoubleProperty.svelte';
    import IntProperty from '$lib/IntProperty.svelte';
    import RecipeProperty from '$lib/RecipeProperty.svelte';

    const letters = 'abcdefghi'.split('');
    let name = '';
    let lore = '';
    let recipe = [];
    let soundEffect = {};
    let price;

    page.generate = () => {
        const shape = [];
        const keys = {};
        const values = {}
        for (let i = 0; i < recipe.length; i++) {
            if (!(recipe[i] in values)) {
                keys[letters[i]] = recipe[i];
                values[recipe[i]] = letters[i];
            }
            shape[i] = values[recipe[i]];
        }
        return {
            name,
            lore: lore.split('\n'),
            recipe: {
                shape: [
                    shape.slice(0, 3).join(''),
                    shape.slice(3, 6).join(''),
                    shape.slice(6, 9).join('')
                ],
                keys
            },
            soundEffect,
            price
        };
    };
</script>

<svelte:head>
    <title>anvil.json</title>
</svelte:head>
<Color bind:value={name}/>
<TextProperty name="Name" bind:value={name}>The name of the reforging anvil item.</TextProperty>
<Color bind:value={lore}/>
<TextareaProperty name="Lore" bind:value={lore}>The lore of the reforging anvil item.</TextareaProperty>
<RecipeProperty name="Recipe" bind:value={recipe}>The crafting recipe for the reforging anvil item.</RecipeProperty>
<PropertyGroup name="Sound Effect">
    Specifies the volume and pitch of the sound played whenever a player performs reforging.
</PropertyGroup>
<DoubleProperty name="Volume" small bind:value={soundEffect['volume']}/>
<DoubleProperty name="Pitch" small max={2} bind:value={soundEffect['pitch']}/>
<IntProperty name="Price" bind:value={price}>
    Specifies the amount of respective material (e.g., diamonds for diamond sword, iron ingots for iron axe) required
    to perform reforging.
</IntProperty>
