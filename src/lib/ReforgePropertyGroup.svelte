<script>
    import StringProperty from './StringProperty.svelte';
    import DoubleProperty from './DoubleProperty.svelte';

    export let value;
</script>

<StringProperty name="Name" size="2" bind:value={value.name}>
    Specifies the name of the reforge.
</StringProperty>
<StringProperty name="Ability" size="2" bind:value={value.ability}>
    Specifies the name of the ability of the reforge.
</StringProperty>
<DoubleProperty name="Attack Speed" size="2" bind:value={value.attackSpeed}>
    Specifies the attack speed provided by the reforge.
</DoubleProperty>
<DoubleProperty name="Attack Damage" size="2" bind:value={value.attackDamage}>
    Specifies the attack damage provided by the reforge.
</DoubleProperty>
<DoubleProperty name="Max Health" size="2" bind:value={value.maxHealth}>
    Specifies the max health provided by the reforge.
</DoubleProperty>
<DoubleProperty name="Knockback Resistance" size="2" bind:value={value.knockbackResistance}>
    Specifies the knockback resistance provided by the reforge.
</DoubleProperty>
<DoubleProperty name="Movement Speed" size="2" bind:value={value.movementSpeed}>
    Specifies the movement speed provided by the reforge.
</DoubleProperty>
<DoubleProperty name="Armor" size="2" bind:value={value.armor}>
    Specifies the armor provided by the reforge.
</DoubleProperty>
<DoubleProperty name="Armor Toughness" size="2" bind:value={value.armorToughness}>
    Specifies the armor toughness provided by the reforge.
</DoubleProperty>
<DoubleProperty name="Attack Knockback" size="2" bind:value={value.attackKnockback}>
    Specifies the attack knockback provided by the reforge.
</DoubleProperty>
<DoubleProperty name="Weight" size="2" bind:value={value.weight}>
    Specifies the relative chance of the reforge being applied to the weapon.
</DoubleProperty>
