let baseValues =[];


function loadData(){
    let amountArray = document.getElementsByClassName("amount");
    let portions = document.getElementById("persons").value;

    console.log("Hallo");

    for (let i = 0; i < amountArray.length; i++) {
        baseValues.push(amountArray[i].innerHTML / portions)
    }
}

function calculatePortions(){
    let persons = document.getElementById("persons").value;
    let newAmount = [];

    for (let i = 0; i < baseValues.length-2; i++) {
        newAmount.push(baseValues[i] * persons)
        }
        for (let i = 0; i < newAmount.length; i++) {
            document.getElementsByClassName("amount")[i].innerHTML = newAmount[i];
            
        }
        
    
}
