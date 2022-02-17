// get button for event handler 
const calculateBtn = document.getElementById('calculate-btn');
const saveBtn = document.getElementById('save-btn');


function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    return amountValue;
}

// calculate Button add event handler
calculateBtn.addEventListener('click', function (event) {
    // remove auto reload
    event.preventDefault();
    const incomeAmount = getInputValue('income-field');
    const foodAmount = getInputValue('food-field');
    const rentAmount = getInputValue('rent-field');
    const clothesAmount = getInputValue('clothes-field');
    let totalExpensesAmount = foodAmount + rentAmount + clothesAmount;

    if (isNaN(incomeAmount) || incomeAmount < 0 || isNaN(foodAmount, rentAmount, clothesAmount) || foodAmount < 0 || rentAmount < 0 || clothesAmount < 0) {


        alert("'CHECK YOUR INCOME INPUT' - You have given a negative or string value. Give it a positive value please Then apply");
    }

    if (typeof incomeAmount != 'string' && incomeAmount > 0) {

        if (incomeAmount > totalExpensesAmount) {
            const totalExpenseField = document.getElementById('total-expenses');
            totalExpenseField.innerText = totalExpensesAmount;
            totalExpenseField.style.fontFamily = "'Merriweather Sans' , sans-serif"
            let balance = incomeAmount - totalExpenseField.innerText;

            const balanceField = document.getElementById('balance');
            balanceField.innerText = balance;
            balanceField.style.fontFamily = "'Merriweather Sans' , sans-serif";
        }
        else if (incomeAmount < totalExpensesAmount) {
            alert('Your income amount is Low, so you can not afford');
            const totalExpenseField = document.getElementById('total-expenses');
            let balance = incomeAmount - totalExpenseField.innerText;
            const balanceField = document.getElementById('balance');
            balanceField.innerText = balance;
            balanceField.style.fontFamily = "'Merriweather Sans' , sans-serif";
        }
        else {
            alert('Your income amount is Low, so you can not afford');
        };

    };
});


// save button add event handler

saveBtn.addEventListener('click', function (event) {
    // remove auto reload
    event.preventDefault();

    const saveInputField = document.getElementById('save-field');
    let saveAmount = parseInt(saveInputField.value);

    const incomeField = document.getElementById('income-field');
    let incomeAmount = parseFloat(incomeField.value);

    const balanceField = document.getElementById('balance');
    let balanceValue = parseFloat(balanceField.innerText);

    const savingAmountField = document.getElementById('saving-amount');
    let savingAmountValue = parseFloat(savingAmountField.innerText);

    const remainingBalance = document.getElementById('remaining-balance');

    if (isNaN(saveAmount) || saveAmount < 0) {
        alert("'CHECK YOUR INCOME INPUT' - You have given a negative or string value. Give it a positive value please Then apply")
    }

    else {
        let parcentageCalculation = saveAmount / 100 * incomeAmount;
        if (balanceField.innerText > savingAmountField.innerText) {
            savingAmountField.innerText = parcentageCalculation;
            savingAmountField.style.fontFamily = "'Merriweather Sans' , sans-serif";
            const remaining = balanceValue - savingAmountField.innerText;
            remainingBalance.innerText = remaining;
            remainingBalance.style.fontFamily = "'Merriweather Sans' , sans-serif";
        }
        else {
            alert('Your balance amount is Low, so you can not save your money')
        }

    }

});

