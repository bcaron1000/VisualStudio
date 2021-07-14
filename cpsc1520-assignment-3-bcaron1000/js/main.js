let formElements = document.querySelector("form");
let tableItems = document.querySelector("tbody");
let errorPlace = document.querySelector(".error");

let t,
  timeout = 120000;
  
function resetTimer() {
    console.log("reset: " + new Date().toLocaleString());
    if (t) { 
    window.clearTimeout(t); 
    }
    t = window.setTimeout(reloadRequest, timeout);
}
function reloadRequest() {
    alert("You must reload your page");
    window.location.reload();
}
resetTimer();

["click", "mousemove", "keypress"].forEach(function(name) {
    console.log(name);
    document.addEventListener(name, resetTimer);
});

formElements.addEventListener("submit", (event)=> {
    event.preventDefault();
    let description = event.target.elements["description"].value;
    let cardType = event.target.elements["type"].value;
    let price = event.target.elements["currency"].value;
    let priceUpdate = parseFloat(price).toFixed(2);
    let priceUpdateTwo = parseFloat(priceUpdate)
    let totalDebitsValue = document.querySelector(".debits").textContent;
    let debitsUpdate = totalDebitsValue.substring(1);
    let debitsUpdateTwo = parseFloat(debitsUpdate);
    
    let totalCreditsValue = document.querySelector(".credits").textContent;
    let creditsUpdate = totalCreditsValue.substring(1);
    let creditsUpdateTwo = parseFloat(creditsUpdate);
    
    errorPlace.textContent = "";
        if (description.length <= 0){
            errorPlace.textContent += "You must enter a proper description";
        }if (cardType === ""){
            errorPlace.textContent += "You must use a valid card type";
        }if (priceUpdateTwo <= 0){
            errorPlace.textContent += "You must enter a positive value";
        }
        if (description.length > 0 && cardType !== "" && priceUpdateTwo > 0){
            let newTable = createTableElement(description, cardType, priceUpdateTwo);
            if (cardType === "debit"){
                let totalNumber = (debitsUpdateTwo + priceUpdateTwo);
                let totalNumberTwo = parseFloat(totalNumber).toFixed(2);
                document.querySelector(".debits").textContent = `${"$" + totalNumberTwo}`;
                totalDebitsValue = `${totalNumberTwo}`;
            }if (cardType === "credit"){
                let totalNumber = `${creditsUpdateTwo + priceUpdateTwo}`;
                let totalNumberTwo = parseFloat(totalNumber).toFixed(2);
                document.querySelector(".credits").textContent = `${"$" + totalNumberTwo}`;
                totalCreditsValue = "$" + totalNumberTwo;
            }   
            event.target.elements["description"].value = "";
            event.target.elements["type"].value = "";
            event.target.elements["currency"].value = "";
            tableItems.appendChild(newTable);
    }
})
    tableItems.addEventListener("click", (evt)=>{
        let totalDebitsValue = document.querySelector(".debits").textContent;
        let debitsUpdate = totalDebitsValue.substring(1);
        let debitsUpdateTwo =  parseFloat(debitsUpdate);
 
        let totalCreditsValue = document.querySelector(".credits").textContent;
        let creditsUpdate = totalCreditsValue.substring(1);
        let creditsUpdateTwo = parseFloat(creditsUpdate);

        let targetRow = evt.target.parentNode.parentNode;
        let totalpriceTwo = targetRow.children[2].textContent;
        let totalPriceThree = totalpriceTwo.substring(1);
        let totalRemove = parseFloat(totalPriceThree);

        if (targetRow.classList.contains('debit')) {
                if (confirm("Are you sure you want to do that?")) {
                targetRow.remove();     
                let totalNumber = `${debitsUpdateTwo - totalRemove}`;
                let totalUnits = parseFloat(totalNumber).toFixed(2);
                document.querySelector(".debits").textContent = `${"$" + totalUnits}`;
                totaldebitsValue = "$" + totalUnits;
            };    
        };
        if (targetRow.classList.contains('credit')) {
                if (confirm("Are you sure you want to do that?")) {
                targetRow.remove();       
                let totalNumber = (creditsUpdateTwo - totalRemove);
                let totalUnits = parseFloat(totalNumber).toFixed(2);
                document.querySelector(".credits").textContent = `${"$" + totalUnits}`;
                totalCreditsValue = "$" + totalUnits;
            };  
        };
    });
        function createTableElement(description, cardType, priceUpdate) {

            let newTableItems = document.createElement("tr");
            let descriptionItem = document.createElement("td");
            let typeOfCard = document.createElement("td");
            let currencyItem = document.createElement("td");
            let finalTd = document.createElement("td");
            let trashCan = document.createElement("i");

            descriptionItem.appendChild(document.createTextNode(description));
            typeOfCard.appendChild(document.createTextNode(cardType));
            currencyItem.appendChild(document.createTextNode("$" + priceUpdatetwo));

            newTableItems.classList.add(cardType);
            currencyItem.classList.add('amount');
            finalTd.classList.add('tools');
            trashCan.classList.add('delete');
            trashCan.classList.add('fa');
            trashCan.classList.add('fa-trash-o');

            finalTd.appendChild(trashCan);
            newTableItems.appendChild(descriptionItem);
            newTableItems.appendChild(typeOfCard);
            newTableItems.appendChild(currencyItem);
            newTableItems.appendChild(finalTd);

            return newTableItems;
        }

