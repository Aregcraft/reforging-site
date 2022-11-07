export async function load({fetch}) {
    let res = await fetch('https://raw.githubusercontent.com/Aregcraft/reforging/master/manifest.json');
    let data = await res.json();
    return {
        abilities: Object.fromEntries(await Promise.all(data['abilities'].map(async it => {
            let res = await fetch(`https://raw.githubusercontent.com/Aregcraft/reforging/master/abilities/${it}`);
            return [
                `${it.split('.')[0].slice(0, -1)}ies`,
                await res.json()
            ];
        }))),
        external: Object.fromEntries(await Promise.all(data['external'].map(async it => {
            let res = await fetch(`https://raw.githubusercontent.com/Aregcraft/reforging/master/abilities/${it}`);
            return [
                it.split('.')[0],
                await res.json()
            ];
        })))
    };
}
