//Income
function totalIncome() {
    const incomeTotal = document.getElementById("income");
    const income = parseFloat(incomeTotal.value);
    if (income > 0) {
        return income;
    }
    else {
        console.log(alert("Enter valid Amount"))
    }
}
// Expenses
function expenses() {
    // Food Amount
    const foodAmount = document.getElementById("food");
    const foodValue = parseFloat(foodAmount.value);
    if (foodValue >= 0) {
        forFood = foodValue;
    }
    else {
        console.log(alert("Enter valid Amount"))
    }

    // Rent Amount
    const rentAmount = document.getElementById("rent");
    const rentValue = parseFloat(rentAmount.value);
    if (rentValue >= 0) {
        forRent = rentValue;
    }
    else {
        console.log(alert("Enter valid Amount"))
    }

    // Cloth Amount
    const clothAmount = document.getElementById("cloth");
    const clothValue = parseFloat(clothAmount.value);
    if (clothValue >= 0) {
        forCloth = clothValue;
    }
    else {
        console.log(alert("Enter valid Amount"))
    }

    // Total Expenses
    expensesTotal = forFood + forRent + forCloth;
    return expensesTotal;
}

// Click Event
document.getElementById("btn-calculate").addEventListener("click", function () {
    // Total Expenses View
    const ammount = document.getElementById("total-spend");
    ammount.innerText = expenses();

    // Total Balance View
    const balance = document.getElementById("balance-amount");
    let incomeBalance = totalIncome() - expenses();
    if (incomeBalance >= 0) {
        balance.innerText = incomeBalance;
    }
    else {
        console.log(alert("Enter valid Amount & Try Again!"));
        location.reload();
    }
})

// Saveing Part
document.getElementById("btn-save").addEventListener("click", function () {
    const ammount = document.getElementById("parcentage");
    const parcentOf = ammount.value;
    if (parcentOf >= 0 && parcentOf <= 100) {
        parsent = (parcentOf * totalIncome()) / 100;
    }
    else {
        console.log(alert("Enter valid Amount"))
    }

    //Saving Ammount view
    const savingAmmount = document.getElementById("saving-view");
    savingAmmount.innerText = Math.round(parsent);

    //Remaining Balance
    const remainValue = totalIncome() - (expenses() + parsent);
    if (remainValue >= 0) {
        remainingValue = remainValue;
    }
    else {
        console.log(alert("Enter valid Amount"))
    }

    // Remaining Balance View
    const remaining = document.getElementById("remaining-view");
    remaining.innerText = Math.round(remainingValue);
})



