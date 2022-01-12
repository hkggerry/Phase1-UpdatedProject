const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'


function fetchDrinks(){
    fetch(BASE_URL)
    .then(res => res.json())
    .then (data => {
        data.drinks.map(function(eachDrink){
            renderDrink(eachDrink)
            renderOption(eachDrink.strDrink)
        })
}) 
}

    function renderDrink(drinks){
        
        const margaritas = document.getElementById("DRANKS")
        const imageTag = document.createElement("img")
        imageTag.src = drinks.strDrinkThumb

        const pTag = document.createElement("p")
        pTag.innerText = drinks.strDrink

        margaritas.appendChild(pTag)
        margaritas.appendChild(imageTag)

        imageTag.addEventListener("mouseover",()=>{
            alert("Ingredient includes: "+drinks.strIngredient1+", "+drinks.strIngredient2+", "+drinks.strIngredient3+", "+drinks.strIngredient4)
        })
    }

    function renderOption(drinkName){
        const select = document.getElementById("names")
        const option = document.createElement("option")
        option.innerText = drinkName

        select.appendChild(option)
    }

fetchDrinks()


function createUl(){
    let ul = document.createElement("ul")
    ul.id = "DRANKS"
    document.body.appendChild(ul)
}

createUl()

function button(){
    
    let btn = document.createElement("button")
    btn.id = "Buttons"
    btn.innerHTML = "Order"
    document.body.appendChild(btn)

    document.querySelector("#buttons").addEventListener('click', function(){
        document.getElementById("DRANKS").innerHTML="~~~~~~~~~~Order complete! Thank you for your support~~~~~~~~~~"
    })
}

button()

function hiddenDiscount(){
    let emoji = document.getElementById("emoji")
    emoji.addEventListener("dblclick",function(){
        alert("Hidden 100% off discount applied")
    });
}

hiddenDiscount()