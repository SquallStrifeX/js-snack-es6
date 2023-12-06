let bici_da_corsa = [
    {
        nome: 'Ifrit',
        peso: 15
    },
    {
        nome: 'Shiva',
        peso: 14
    },
    {
        nome: 'Ramuh',
        peso: 16
    },
    {
        nome: 'Bahamut',
        peso: 22
    },
]

let pesominore = 9999
bici_da_corsa.forEach(({peso}) => {
    if(peso<pesominore){
        pesominore = peso
    
    }

})

console.log(pesominore)


let squadre_di_calcio = [
    {
        nome: 'Besaid Aurochs',
        punti_fatti: 0,
        falli_subiti: 0

    },
    {
        nome: 'Ronso Fang',
        punti_fatti: 0,
        falli_subiti: 0

    },
    {
        nome: 'Luka Goers',
        punti_fatti: 0,
        falli_subiti: 0

    },
    {
        nome: 'Kilika Beasts',
        punti_fatti: 0,
        falli_subiti: 0

    },
]

function RNG() {
    return Math.floor(Math.random() * 100) + 1;}

    squadre_di_calcio.forEach((squadra) => {
        squadra.punti_fatti = RNG();
        squadra.falli_subiti = RNG();
    });


    const squadre_di_calcio_2 = squadre_di_calcio.map(({ nome, falli_subiti }) => ({ nome, falli_subiti }));

    console.log(squadre_di_calcio);
    console.log(squadre_di_calcio_2)


let articoli_di_moda = [
    {
        name: 'Poppy',
        type: 'tshirt',
        color: 'red',
    },
    {
        name: 'Jumping',
        type: 'occhiali',
        color: 'blue',
    },
    {
        name: 'CrissCross',
        type: 'scarpe',
        color: 'black',
    },
    {
        name: 'Jenny',
        type: 'borsa',
        color: 'pink',
    },

]

function RNG_Char() {
    const char = 'abcdefghijklmnopqrstuvwxyz'
    return char[Math.floor(Math.random() * char.length )]
}

let articoli_di_moda_2 = articoli_di_moda.map((oggetto) => {
    return {
        name: oggetto.name,
        type: oggetto.type,
        color: oggetto.color,
        char: RNG_Char()
    };
});

console.log(articoli_di_moda_2)