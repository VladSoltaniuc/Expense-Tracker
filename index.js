const buttonCreatedTable = document.getElementById("btn-createdTable");
const insertIntoTable = document.getElementById("insertIntoTable");

buttonCreatedTable.addEventListener("click", () => {
    
    const newRow = document.createElement("tr");

    const newType = document.createElement("td");
    const type = document.getElementById("type");
    if((type.value != "Cash") && (type.value != "CreditCard")) {
        alert("insert payment method");
        return;
    }
    newType.innerHTML=type.value;

    const newName = document.createElement("td");
    const name = document.getElementById("name");
    if(name.value == "") {
        alert("insert product name");
        return;
    }
    newName.innerHTML=name.value;

    const newDate = document.createElement("td");
    const date = document.getElementById("date");
    if(date.value == "") {
        alert("insert acquisition date");
        return;
    }
    newDate.innerHTML=date.value;

    const newAmount = document.createElement("td");
    const amount = document.getElementById("amount");
    if(amount.value == "") {
        alert("insert price");
        return;
    }
    if(!(/^[0-9]*$/.test(amount.value))) {
        alert("price can't contain letters or characters");
        return;
    }
    if(amount.value){newAmount.innerHTML=amount.value + "$";}

    document.getElementById("expenseTable").style.display = "inline";
    insertIntoTable.appendChild(newRow);
    newRow.appendChild(newType);
    newRow.appendChild(newName);
    newRow.appendChild(newDate);
    newRow.appendChild(newAmount);
    
    type.value="";
    name.value="";
    date.value="";
    amount.value="";
    //console.log("add");
});