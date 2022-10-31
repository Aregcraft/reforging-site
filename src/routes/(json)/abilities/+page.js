export async function load({fetch}) {
    let res = await fetch('https://raw.githubusercontent.com/Aregcraft/reforging/master/manifest.json');
    let data = await res.json();
    let price = await fetch(`https://raw.githubusercontent.com/Aregcraft/reforging/master/abilities/price.json`);
    return {
        abilities: await Promise.all(data['abilities'].map(async it => {
            let res = await fetch(`https://raw.githubusercontent.com/Aregcraft/reforging/master/abilities/${it}`);
            return {
                name: `${it.split('.')[0].slice(0, -1)}ies`,
                content: await res.json()
            };
        })),
        price: await price.json()
    };
}
