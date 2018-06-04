const homeInventory = localStorage.getItem("homeInventory")
const inventoryDatabase = JSON.parse(homeInventory)
const articleElement = document.querySelector("#my-stuff")


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

listIterator(inventoryDatabase["furniture"])