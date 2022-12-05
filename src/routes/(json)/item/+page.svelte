<script>
    import {generate} from '$lib/stores';
    import Placeholder from '$lib/Placeholder.svelte';
    import StringProperty from '$lib/StringProperty.svelte';
    import StringListProperty from '$lib/StringListProperty.svelte';

    let name = '';
    let lore = '';

    $generate = () => {
        return {
            name,
            lore: lore.split('\n')
        };
    };
</script>

<svelte:head>
    <title>Reforging | item.json</title>
</svelte:head>
<Placeholder options={{
    'Reforge Name': 'REFORGE_NAME',
    'Name': 'NAME'
}} size="2" bind:value={name}/>
<StringProperty name="Name" size="2" bind:value={name}>Specifies the name of reforged items.</StringProperty>
<Placeholder options={{
    'Ability': 'ABILITY',
    'Base Attack Speed': 'BASE_ATTACK_SPEED',
    'Attack Speed': 'ATTACK_SPEED',
    'Base Attack Damage': 'BASE_ATTACK_DAMAGE',
    'Attack Damage': 'ATTACK_DAMAGE',
    'Max Health': 'MAX_HEALTH',
    'Knockback Resistance': 'KNOCKBACK_RESISTANCE',
    'Movement Speed': 'MOVEMENT_SPEED',
    'Armor': 'ARMOR',
    'Armor Toughness': 'ARMOR_TOUGHNESS',
    'Attack Knockback': 'ATTACK_KNOCKBACK'
}} size="2" bind:value={lore}/>
<StringListProperty name="Lore" size="2" bind:value={lore}>
    Specifies the lore attached to the end of reforged items.
</StringListProperty>
