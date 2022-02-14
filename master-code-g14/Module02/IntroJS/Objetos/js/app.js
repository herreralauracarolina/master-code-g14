const animalesTundra ={
    'oso kodiak':
        {            
        color: 'café',
        peso: '200kg',
        clase: 'mamífero'},
    'búho nival':
        {
        color: 'blanco',
        peso: '3kg',
        clase: 'ovíparo'}
};

/*ejemplo de antes*/ let osoKodiahColor = animalesTundra['oso kodiak'];

let { 
'oso kodiak': {
    color: colorOso, peso: pesoOso, clase: claseOso
},
'búho nival': {
    color: colorBuho, peso: pesoBuho, clase: claseBuho
}

}= animalesTundra;

console.log(`Las características del oso kodiak son color: ${colorOso}, peso ${pesoOso} y clase ${claseOso}.`);
console.log(`Las características del búho nival son color: ${colorBuho}, peso ${pesoBuho} y clase ${claseBuho}.`);
/*ejemplo de antes*/ console.log(osoKodiahColor);