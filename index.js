const names = (["Guadalupe", "Ollie", "Aki"], "surprise");
function writeCards(names){
    const names2 = []
    let i = 0; 
    while (i < names.length){
        console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        names2.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
        i++
    }
    return names2
}

function countDown(number){
    if(number >= 0){
        console.log(number);
        number--;
        countDown(number)
    }
}
