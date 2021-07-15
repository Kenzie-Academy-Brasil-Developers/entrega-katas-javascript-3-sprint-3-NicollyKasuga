const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(x){
const destination = document.body;
const paragrafo = document.createElement('p');
const resultado = document.createTextNode(x)
paragrafo.appendChild(resultado);
destination.appendChild(paragrafo);
}
document
function kata1() {
    let meuRetorno = []

    for(let i = 1; i <= 25; i++){
        meuRetorno.push(i)
    }
    return meuRetorno
    
}
showResults(kata1())


function kata2() {
    let meuRetorno = []
    for (let i=25; i>=1; i--){
        meuRetorno.push(i)
    }
    return meuRetorno
    // implemente o código do kata 2 aqui
}
showResults(kata2())

function kata3() {
    let meuRetorno = []
    for(let i=-1; i>=-25;i--){
        meuRetorno.push(i)
    }
    return meuRetorno
    // implemente o código do kata 3 aqui
}
showResults(kata3())

function kata4() {
    let meuRetorno = []
    for(let i=-25; i<=-1;i++){
        meuRetorno.push(i)
    }
    return meuRetorno
    // implemente o código do kata 4 aqui
}
showResults(kata4())

function kata5() {
    let meuRetorno = []
    for(let i = 25; i >= -25; i--){
        if(i%2 !== 0 ){
            meuRetorno.push(i)
        }
    }
    return meuRetorno
    // implemente o código do kata 5 aqui
}
showResults(kata5())


function kata6() {
    let meuRetorno = []
    for(let i =1; i <= 100; i++){
        if(i%3 == 0){
        meuRetorno.push(i)
        }
    }
    return meuRetorno
    // implemente o código do kata 6 aqui
}
showResults(kata6())


function kata7() {
    let meuRetorno = []
    for(let i = 1; i <= 100; i++){
        if(i%7 == 0){
            meuRetorno.push(i)
        }
    }
    return meuRetorno
    // implemente o código do kata 7 aqui
}
showResults(kata7())


function kata8() {
    let meuRetorno = []
    for(let i = 100; i >=1; i--){
    if(i%3 == 0 || i%7 == 0){
        meuRetorno.push(i)
    }
    }
    return meuRetorno
   // se 3 *i  for menor que  7 * i  entao retorne 3 * i
   // se 3 * i for maior que 7 *i entao retorne  7 * i+1
   // implemente o código do kata 8 aqui
}
showResults(kata8())

function kata9() {
    let meuRetorno = []
    for(let i = 1; i <= 100; i++){
        if(5 *i < 100 && 5*i%2 !== 0){
            meuRetorno.push(i*5)
        }
    }
    return meuRetorno
    // implemente o código do kata 9 aqui
}
showResults(kata9())


function kata10() {
    let meuRetorno = []
    for(let i=0; i <= sampleArray.length; i++){
        meuRetorno.push(sampleArray[i])
    }
    return meuRetorno
    // implemente o código do kata 10 aqui
}
showResults(kata10())

function kata11() {
    let meuRetorno =[]
    for(let i = 0; i <=sampleArray.length; i++){
        if(sampleArray[i]% 2 === 0){
            meuRetorno.push(sampleArray[i])
        }
    }
    return meuRetorno
    // implemente o código do kata 11 aqui
}
showResults(kata11())


function kata12() {
    let meuRetorno = []
    for(let i = 0; i <= sampleArray.length; i++){
        if(sampleArray[i]% 2 !==0){
            meuRetorno.push(sampleArray[i])
        }
    }
    return meuRetorno
    // implemente o código do kata 12 aqui
}
showResults(kata12())

function kata13() {
    let meuRetorno = []
    for(let i = 0; i<= sampleArray[i]; i++){
        if((sampleArray[i]% 8)% 8 === 0){
            meuRetorno.push(sampleArray[i])
        }
    }
    return meuRetorno
    // implemente o código do kata 13 aqui
}
showResults(kata13())


function kata14() {
    let meuRetorno = []
    for(let i = 0; i <= sampleArray[i]; i++){
        meuRetorno.push(sampleArray[i]**2)
    }
    return meuRetorno
    // implemente o código do kata 14 aqui
}
showResults(kata14())

function kata15() {
    let meuRetorno = 0
    for(let i = 1; i<=20; i++){
        meuRetorno += i
    }
    return meuRetorno
    // implemente o código do kata 15 aqui
}
showResults(kata15())

function kata16() {
    let meuRetorno = 0
    for(let i = 0; i <sampleArray.length; i++){
        meuRetorno +=sampleArray[i]
    }
    return meuRetorno
    // implemente o código do kata 16 aqui
}
showResults(kata16())

function kata17() {
    let meuRetorno = sampleArray[0]
    console.log(meuRetorno)
    for(let i = 0; i < sampleArray.length; i++){
        if(meuRetorno > sampleArray[i]){
            meuRetorno = sampleArray[i]
        }
    }
    console.log(meuRetorno)
    return meuRetorno
    // implemente o código do kata 17 aqui
}
showResults(kata17())

function kata18() {
    let meuRetorno = sampleArray[0]
    for(let i = 0; i <sampleArray.length; i++){
        if(meuRetorno < sampleArray[i]){
            meuRetorno = sampleArray[i]
        }
    }
    return meuRetorno
    // implemente o código do kata 18 aqui
}
console.log(kata18())
showResults(kata18())
/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
