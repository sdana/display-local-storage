//Declare Global Vairables
const homeInventory = localStorage.getItem("homeInventory")
const inventoryDatabase = JSON.parse(homeInventory)
const articleElement = document.querySelector("#my-stuff")
const showItemsButton = document.getElementById("show-items")
const clearItemsButton = document.getElementById("clear")

//--------------------Functions------------------------//
const buttonClick = () => {
    let inputFieldText = document.querySelector("input").value
    listIterator(inventoryDatabase[inputFieldText])
}

const clearItems = () => {
    let sections = document.getElementsByTagName("section")
    let arrLength = sections.length
    for (let i=0; i<arrLength; i++){
        articleElement.removeChild(sections[0])
 }
    // while (articleElement.childNode){
    //     articleElement.removeChild(firstChild)
    // }
}

const addDomElement = (currentElement) => {
    
    const sectionEl = document.createElement("section")
    const keyArray = ["name","location","description"]

    for (let i=0; i<keyArray.length; i++) {
        const pEl = document.createElement("p")
        let objectKey = keyArray[i]
        pEl.innerHTML = currentElement[objectKey]
        sectionEl.appendChild(pEl)
        articleElement.appendChild(sectionEl)
    }
}

const listIterator = (listDesired) => {
    for (let i=0; i<listDesired.length; i++){
        // console.log(inventoryDatabase[items][i])
        addDomElement(listDesired[i])
    }
}
//----------------------------------------------------//

showItemsButton.addEventListener("click", buttonClick)
clearItemsButton.addEventListener("click", clearItems)


