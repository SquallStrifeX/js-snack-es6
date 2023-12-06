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