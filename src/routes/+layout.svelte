<script>
    import {page} from '$app/stores';

    export let data;
    $: path = $page.url.pathname;
</script>

<nav class="navbar navbar-expand-xl bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">
            <img src="/favicon.png" height="30" class="d-inline-block align-top" alt="">
            Reforging
        </a>
        <a href={data.download} download class="btn btn-dark me-auto"><i class="bi bi-download"></i> Download</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="https://www.spigotmc.org/resources/reforging.105707/" target="_blank"
                       rel="noreferrer">
                        spigot
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://github.com/Aregcraft/reforging" target="_blank" rel="noreferrer">
                        github
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/" class:active={path === '/'}>home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/item" class:active={path === '/item'}>item.json</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/anvil" class:active={path === '/anvil'}>anvil.json</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/standard_reforges" class:active={path === '/standard_reforges'}>standard_reforges.json</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/ultimate_reforges" class:active={path === '/ultimate_reforges'}>ultimate_reforges.json</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/abilities" class:active={path === '/abilities'}>abilities.json</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<div class="container">
    <slot/>
</div>
