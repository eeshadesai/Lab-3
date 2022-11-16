alert("Input your budget and add items. We'll let you know if you're above the budget");

function addRow() {
    var table = document.getElementById("table");
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.classList.add("itemName");
    var td2 = document.createElement("td");
    td2.classList.add("price");
    var td3 = document.createElement("td");

    td1.innerHTML = document.getElementById("item").value;
    td2.innerHTML  = document.getElementById("price").value;

    //remove button
    let removeButton = document.createElement("button");//input type = "button" value="REMOVE" id="remove"></input>
    td3.appendChild(removeButton);
    removeButton.textContent="REMOVE";
    removeButton.style.backgroundColor = 'red';
    removeButton.style.color='white';
    removeButton.addEventListener('click',removeItem);

    //add new row to table
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    table.children[0].appendChild(row);

    arrayCost();
}



let cost = [];
//find total cost
function arrayCost() {
    let totalCost = 0;
    let priceButton = document.querySelector('#price');
    let price = priceButton.value;
    

    cost.push(price);
    console.log(cost);
    for(let i = 0; i<cost.length;i++) {
        let costDouble = parseFloat(cost[i]);
       totalCost += costDouble;
    }
    document.querySelector("#cost").textContent = "Total Cost: $" + totalCost.toFixed(2);

    let item = document.querySelector("#item");
    item.value = "";
    priceButton.value = "";

    //check budget
    if((document.querySelector('#budget').value)<(totalCost)) {
        alert('You are over the budget!');
    }
} 
//remove items
function removeItem() {
    var td = event.target.parentNode;
    var tr = td.parentNode;
    var index = tr.rowIndex-1;
    tr.parentNode.removeChild(tr);

    cost.splice(index,1);
    //find new costs
    let totalCost =0;
    for(let i = 0; i<cost.length;i++) {
        let costDouble = parseFloat(cost[i]);
       totalCost += costDouble;
    }
    document.querySelector("#cost").textContent = "Total Cost: $" + totalCost.toFixed(2);
}

//add when pressing enter
let buttonElement = document.querySelector("#add");
buttonElement.addEventListener("click",addRow);
function handleKeyUp(event) {
    if(event.key === "Enter") {
        addRow();
        newItemInputElement.focus();

    } 
}
let newPriceInputElement = document.querySelector("#price");
let newItemInputElement = document.getElementById('item');
newPriceInputElement.addEventListener("keyup",handleKeyUp);
