<script>
    import {page} from '$app/stores';
    import Placeholder from '$lib/Placeholder.svelte';
    import TextProperty from '$lib/TextProperty.svelte';
    import TextareaProperty from '$lib/TextareaProperty.svelte';

    let name = '';
    let lore = '';

    page.generate = () => {
        return {
            name,
            lore: lore.split('\n')
        };
    };
</script>

<svelte:head>
    <title>item.json</title>
</svelte:head>
<Placeholder options={['name', 'reforge_name']} bind:value={name}/>
<TextProperty name="Name" bind:value={name}>The name of each reforged item.</TextProperty>
<Placeholder options={[
    'base_attack_speed',
    'attack_speed',
    'base_attack_damage',
    'attack_damage',
    'max_health',
    'knockback_resistance',
    'movement_speed',
    'armor',
    'armor_toughness',
    'attack_knockback',
    'ability'
    ]} bind:value={lore}/>
<TextareaProperty name="Lore" bind:value={lore}>The lore attached to the end of each reforged item.</TextareaProperty>
