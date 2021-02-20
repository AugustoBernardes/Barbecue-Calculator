// Meat = 400gr per person / more than 6 hours = 650
// Beer = 120ml per person / more than 6 hours = 200ml
// Soda/Water = 1000ml per person / more than 6 hours = 1500ml

//Kids are worth 0,5

// Get the Adult input
let inputAdults = document.getElementById("adults")
// Get the Kids input
let inputKids = document.getElementById("kids")
// Get the Duration input
let inputDuration = document.getElementById("duration")

// Get the Result input
let result = document.getElementById("result")

// Here is the function to calculate the data
function calculate(){
    console.log("Calculando...")

    // Here we creat the arrays to the values and make the count
    let adults = inputAdults.value
    let kids = inputKids.value
    let duration = inputDuration.value

    // Here we are calculating the datas is the (Values * peoples)
    let qdtTotalMeat = meatPP(duration) * adults + (meatPP(duration)/ 2 * kids)
    let qdtTotalBeer = beerPP(duration) * adults
    let qdtTotalDrinks = drinksPP(duration) * adults + (drinksPP(duration)/ 2 * kids)

    // Here we are adding the result at the HTML using JavaScript
    // This division was to change Grams for Kilos (dividing by 1000)
    result.innerHTML = `<p>${qdtTotalMeat / 1000} Kg of Meat <p>`
    // This division was to change in Cans of beers (1 Can have 355 ml)
    result.innerHTML += `<p>${Math.ceil(qdtTotalBeer / 355)} Beer cans<p>`
    // This division was to change in 2 lts bottle the result (Obs:We use Math ceil to round the number)
    result.innerHTML += `<p>${Math.ceil(qdtTotalDrinks / 2000)} Bottles of 2 liters <p>`
    

}

// Here is the function for Meat per person if the duration is more 
// than 6 hours return 650 else return 400
function meatPP(duration){
    if (duration >= 6){
        return 650
    }
    else{
        return 400
    }
}

// Here is the function for Beers per person if the duration is more 
// than 6 hours return 2000 else return 1200
function beerPP(duration){
    if (duration >= 6){
        return 2000
    }
    else{
        return 1200
    }
}


// Here is the function for Drinks(Soda/Water) per person if the duration is more
// than 6 hours return 1500 else return 1000
function drinksPP(duration){
    if (duration >= 6){
        return 1500
    }
    else{
        return 1000
    }
}


