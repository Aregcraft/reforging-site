let models = 'https://raw.githubusercontent.com/Aregcraft/reforging/master/models/';

export async function load({parent, fetch}) {
    let {manifest} = await parent();
    return {
        abilities: Object.fromEntries(await Promise.all(manifest.abilities.map(async it => {
            let res = await fetch(`${models}abilities/${it}.json`);
            return [it, await res.json()];
        }))),
        external: Object.fromEntries(await Promise.all(manifest.external.map(async it => {
            let res = await fetch(`${models}external/${it}.json`);
            return [it, await res.json()];
        })))
    };
}
