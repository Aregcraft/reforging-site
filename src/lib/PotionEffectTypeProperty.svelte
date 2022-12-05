<script>
    import SelectProperty from './SelectProperty.svelte';

    export let value;
</script>

<SelectProperty {...$$restProps} options={{
    'Speed': 'SPEED',
    'Slow': 'SLOW',
    'Fast Digging': 'FAST_DIGGING',
    'Slow Digging': 'SLOW_DIGGING',
    'Increase Damage': 'INCREASE_DAMAGE',
    'Heal': 'HEAL',
    'Harm': 'HARM',
    'Jump': 'JUMP',
    'Confusion': 'CONFUSION',
    'Regeneration': 'REGENERATION',
    'Damage Resistance': 'DAMAGE_RESISTANCE',
    'Fire Resistance': 'FIRE_RESISTANCE',
    'Water Breathing': 'WATER_BREATHING',
    'Invisibility': 'INVISIBILITY',
    'Blindness': 'BLINDNESS',
    'Night Vision': 'NIGHT_VISION',
    'Hunger': 'HUNGER',
    'Weakness': 'WEAKNESS',
    'Poison': 'POISON',
    'Wither': 'WITHER',
    'Health Boost': 'HEALTH_BOOST',
    'Absorption': 'ABSORPTION',
    'Saturation': 'SATURATION',
    'Glowing': 'GLOWING',
    'Levitation': 'LEVITATION',
    'Luck': 'LUCK',
    'Unluck': 'UNLUCK',
    'Slow Falling': 'SLOW_FALLING',
    'Conduit Power': 'CONDUIT_POWER',
    'Dolphins Grace': 'DOLPHINS_GRACE',
    'Bad Omen': 'BAD_OMEN',
    'Hero Of The Village': 'HERO_OF_THE_VILLAGE',
    'Darkness': 'DARKNESS'
}} bind:value><slot/></SelectProperty>
