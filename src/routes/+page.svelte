<script>
    export let data;
    let screenshots = data['screenshots'].map(it => {
        return {
            src: `https://raw.githubusercontent.com/Aregcraft/reforging/master/screenshots/${it}`,
            alt: it.split('.')[0].replaceAll('_', ' ').split(' ').map(it =>it.charAt(0).toUpperCase()
                + it.substring(1)).join(' ').replaceAll('On', 'on')
        };
    });
</script>

<svelte:head>
    <title>Reforging</title>
</svelte:head>
<p class="mt-5">
    Reforging plugin adds a new mechanic for enhancing weapons with various stat boosts and abilities.
    It is completely customizable with options to add custom reforges, heavily tweak existing abilities,
    and change the looks of items.
</p>
<div id="carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        {#each screenshots as {src, alt, active}, i}
            <div class="carousel-item" class:active={i === 0}>
                <img {src} {alt} class="d-block w-100">
            </div>
        {/each}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
