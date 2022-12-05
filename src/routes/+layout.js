export async function load({fetch}) {
    let res = await fetch('https://raw.githubusercontent.com/Aregcraft/reforging/master/models/manifest.json');
    let json = await res.json();
    return {
        manifest: json,
        download: `https://github.com/Aregcraft/reforging/releases/download/v${
            json.version.split('-')[0]}/reforging-${json.version}.jar`
    };
}
