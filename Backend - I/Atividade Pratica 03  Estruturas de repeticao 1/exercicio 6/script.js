// Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...


base = 30;


do {
    let primo = true;

    for (let index = 2; index < base; index++) {
        if(base % index === 0){
            primo = false;
            index = 70;
        }
    }

    if(primo){
        console.log(`[${base}]`)
    } else {
        console.log(`${base}`)
    }

} while(base >= 1)