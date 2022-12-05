<script>
    import {page} from '$app/stores';
    import {generate} from '$lib/stores';

    let file = `${$page.url.pathname.substring(1)}.json`;
    let text;
    let href;
</script>

<slot/>
<div class="mt-5 mb-5">
    <button class="btn btn-primary" on:click={() => {
        text.textContent = JSON.stringify($generate(), null, 2);
        href = `data:text/json;charset=utf-8,${encodeURIComponent(text.textContent)}`;
    }}><i class="bi bi-gear"></i> Generate</button>
    <button class="btn btn-primary ms-4" on:click={() => {
        navigator.clipboard.writeText(text.textContent);
    }}><i class="bi bi-clipboard"></i> Copy</button>
    <a {href} class="btn btn-primary ms-4" download={file}><i class="bi bi-download"></i> Download</a>
</div>
<pre class:mb-5={text !== undefined && text.textContent.length > 0} bind:this={text}></pre>
