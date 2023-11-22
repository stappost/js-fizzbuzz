// CICLO GENERAZIONE NUMERI DA 1 A 100 
for(let i=1; i<=100; i++){
    let li;
    // ALTERNATIVA NUMERI DIVISIBILI SIA PER 3 CHE PER 5 
    if(i%15 == 0){
        li = `<li>FizzBuzz</li>`;
        console.log("FizzBuzz");
    }
    // ALTERNATIVA DIVISIBILI PER 3 
    else if(i%3 == 0){
        console.log("Fizz");
        li = `<li>Fizz</li>`;
    }
     // ALTERNATIVA DIVISIBILI PER 5
    else if(i%5 == 0){
        console.log("Buzz");
        li = `<li>Buzz</li>`;
    }
    else{
        console.log(i);
        li = `<li>${i}</li>`;
    }
    document.getElementById("numeri").innerHTML +=li;
}