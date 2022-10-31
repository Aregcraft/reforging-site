<script>
    import {page} from '$app/stores';

    let json;
    let file = $page.url.pathname.substring(1) + '.json';
    let href = '';

    function generate() {
        json.innerText = JSON.stringify(page.generate(), null, 2);
        href = `data:text/json;charset=utf-8,${encodeURIComponent(json.innerText)}`;
    }

    function copy() {
        navigator.clipboard.writeText(json.innerText);
    }
</script>

<slot/>
<div class="mt-5">
    <button class="btn btn-primary" on:click={generate}><i class="bi bi-gear"></i> Generate</button>
    <button class="btn btn-primary ms-4" on:click={copy}><i class="bi bi-clipboard"></i> Copy</button>
    <a {href} class="btn btn-primary ms-4" download={file}><i class="bi bi-download"></i> Download</a>
</div>
<pre class="mt-5" bind:this={json}></pre>
