const homeInventory = localStorage.getItem("homeInventory")
const inventoryDatabase = JSON.parse(homeInventory)
const articleElement = document.querySelector("#my-stuff")


const addDomElement = (currentElement, desiredTable) => {
    
    const sectionEl = document.createElement("section")
    const keyArray = ["name","location","description"]

    if (desiredTable === undefined){
        for (let i=0; i<keyArray.length; i++) {
            const pEl = document.createElement("p")
            let objectKey = keyArray[i]
            pEl.innerHTML = currentElement[objectKey]
            sectionEl.appendChild(pEl)
            articleElement.appendChild(sectionEl)
        }
    }
    else {
        for (let i=0; i<keyArray.length; i++) {
            const pEl = document.createElement("p")
            let objectKey = keyArray[i]
            pEl.innerHTML = currentElement[objectKey]
            sectionEl.appendChild(pEl)
            articleElement.appendChild(sectionEl)
        }
    }
}

for (let items in inventoryDatabase) {
    // console.log(items)
    for (let i=0; i<inventoryDatabase[items].length; i++){
        // console.log(inventoryDatabase[items][i])
        addDomElement(inventoryDatabase[items][i])
    }
}
