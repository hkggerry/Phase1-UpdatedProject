const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'

function fetchDrinks(){
    fetch(BASE_URL)
    .then(res => res.json())
    .then (data => {
        for (i=0; i<data.drinks.length; i++){
            renderDrinks(data.drinks[i])
        }
}
)}

    function renderDrinks(drinks){
        
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