<script>
    import SelectProperty from './SelectProperty.svelte';

    export let name;
    export let value;
    export let small = false;
</script>

<SelectProperty {name} {small} options={[
    {name: 'Speed', value: 'SPEED'},
    {name: 'Slow', value: 'SLOW'},
    {name: 'Fast Digging', value: 'FAST_DIGGING'},
    {name: 'Slow Digging', value: 'SLOW_DIGGING'},
    {name: 'Increase Damage', value: 'INCREASE_DAMAGE'},
    {name: 'Heal', value: 'HEAL'},
    {name: 'Harm', value: 'HARM'},
    {name: 'Jump', value: 'JUMP'},
    {name: 'Confusion', value: 'CONFUSION'},
    {name: 'Regeneration', value: 'REGENERATION'},
    {name: 'Damage Resistance', value: 'DAMAGE_RESISTANCE'},
    {name: 'Fire Resistance', value: 'FIRE_RESISTANCE'},
    {name: 'Water Breathing', value: 'WATER_BREATHING'},
    {name: 'Invisibility', value: 'INVISIBILITY'},
    {name: 'Blindness', value: 'BLINDNESS'},
    {name: 'Night Vision', value: 'NIGHT_VISION'},
    {name: 'Hunger', value: 'HUNGER'},
    {name: 'Weakness', value: 'WEAKNESS'},
    {name: 'Poison', value: 'POISON'},
    {name: 'Wither', value: 'WITHER'},
    {name: 'Health Boost', value: 'HEALTH_BOOST'},
    {name: 'Absorption', value: 'ABSORPTION'},
    {name: 'Saturation', value: 'SATURATION'},
    {name: 'Glowing', value: 'GLOWING'},
    {name: 'Levitation', value: 'LEVITATION'},
    {name: 'Luck', value: 'LUCK'},
    {name: 'Unluck', value: 'UNLUCK'},
    {name: 'Slow Falling', value: 'SLOW_FALLING'},
    {name: 'Conduit Power', value: 'CONDUIT_POWER'},
    {name: 'Dolphins Grace', value: 'DOLPHINS_GRACE'},
    {name: 'Bad Omen', value: 'BAD_OMEN'},
    {name: 'Hero Of The Village', value: 'HERO_OF_THE_VILLAGE'},
    {name: 'Darkness', value: 'DARKNESS'}
]} bind:value><slot/></SelectProperty>
