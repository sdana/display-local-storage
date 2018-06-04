const homeInventory = localStorage.getItem("homeInventory")
const inventoryDatabase = JSON.parse(homeInventory)
const articleElement = document.querySelector("#my-stuff")


const addDomElement = (currentElement) => {
    
    const sectionEl = document.createElement("section")
    const keyArray = ["name","location","description"]

    for (let i=0; i<keyArray.length; i++) {
        const pEl = document.createElement("p")
        let objectKey = keyArray[i]
        console.log("objectKey", objectKey)
        console.log("element", currentElement[objectKey])
        pEl.innerHTML = currentElement[objectKey]
        sectionEl.appendChild(pEl)
        articleElement.appendChild(sectionEl)
    }  
}

for (let items in inventoryDatabase) {
    // console.log(items)
    for (let i=0; i<inventoryDatabase[items].length; i++){
        // console.log(inventoryDatabase[items][i])
        addDomElement(inventoryDatabase[items][i])
    }
}
