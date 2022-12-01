export async function load({fetch}) {
    let res = await fetch('https://raw.githubusercontent.com/Aregcraft/reforging/master/models/manifest.json');
    return await res.json();
}
