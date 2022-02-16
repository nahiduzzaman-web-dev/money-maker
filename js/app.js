// get button for event handler 
const calculateBtn = document.getElementById('calculate-btn');
const saveBtn = document.getElementById('save-btn');

// calculate Button add event handler
calculateBtn.addEventListener('click', function (event) {
    // remove auto reload
    event.preventDefault();

    // get input value from input field
    const incomeField = document.getElementById('income-field');
    const foodField = document.getElementById('food-field')
    const rentField = document.getElementById('rent-field')
    const clothesField = document.getElementById('clothes-field')

    let incomeAmount = parseFloat(incomeField.value);
    let foodAmount = parseFloat(foodField.value);
    let rentAmount = parseFloat(rentField.value);
    let clothesAmount = parseFloat(clothesField.value);
    if (isNaN(foodAmount, rentAmount, clothesAmount) || foodAmount < 0 || rentAmount < 0 || clothesAmount < 0) {
        foodField.value = '';
        rentField.value = '';
        clothesField.value = '';
        alert("You have given a negative or string value somewhere. Give it a positive value please Then apply")
    } else {
        //total expenses calculation
        let totalExpensesAmount = foodAmount + rentAmount + clothesAmount;
        const totalExpenseField = document.getElementById('total-expenses');
        totalExpenseField.innerText = totalExpensesAmount;
        totalExpenseField.style.fontFamily = "'Merriweather Sans' , sans-serif"

        if (isNaN(incomeAmount) || incomeAmount < 0) {
            alert('You have given a negative or string value somewhere. Give it a positive value please Then apply')
        } else if (incomeAmount < totalExpenseField.innerText) {
            alert('Your income amount is Low, so you can not afford')
        }
        else {
            //balance calculation
            let balance = incomeAmount - totalExpenseField.innerText;
            const balanceField = document.getElementById('balance');
            balanceField.innerText = balance;
            balanceField.style.fontFamily = "'Merriweather Sans' , sans-serif";
        }

    };
    // remove value from input
    foodField.value = '';
    rentField.value = '';
    clothesField.value = '';
});


// save button add event handler

saveBtn.addEventListener('click', function (event) {
    // remove auto reload
    event.preventDefault();

    const saveInputField = document.getElementById('save-field');
    let saveAmount = parseInt(saveInputField.value);

    const savingAmountField = document.getElementById('saving-amount');
    const incomeField = document.getElementById('income-field');
    let incomeAmount = parseFloat(incomeField.value);
    // savingAmountField.innerText = saveAmount;
    if (isNaN(saveAmount) || incomeAmount < 0) {
        alert('You have given a negative or string value somewhere. Give it a positive value please Then apply')
    }
    else if (isNaN(saveAmount) || saveAmount < 0) {
        alert('You have given a negative or string value somewhere. Give it a positive value please Then apply')
    }
    else if (incomeAmount > (saveAmount / 100) * incomeAmount) {
        // alert('Please Increase Your income then you will be saveing your amount')
        savingAmountField.innerText = (saveAmount / 100) * incomeAmount;
        const remainingBalance = document.getElementById('remaining-balance');
        const balanceField = document.getElementById('balance');
        let balanceValue = parseFloat(balanceField.innerText);
        let savingAmountValue = parseFloat(savingAmountField.innerText);
        if (savingAmountValue <= balanceValue) {
            let remaining = balanceValue - savingAmountValue;
            remainingBalance.innerText = remaining;
            remainingBalance.style.fontFamily = "'Merriweather Sans' , sans-serif";
            // let remaining = balanceField.innerText - savingAmountField.innerText;
            // remainingBalance.innerText = remaining;

        }
        else {
            // alert('You do not save your amount')
            // let remaining = balanceField.innerText - savingAmountField.innerText;
            alert('You do not save your amount');
            remainingBalance.innerText = '0';
        }
    }
    else {
        // savingAmountField.innerText = (saveAmount / 100) * incomeAmount;
        // const remainingBalance = document.getElementById('remaining-balance');
        // const balanceField = document.getElementById('balance');
        // if (balanceField.innerText > savingAmountField.innerText) {
        //     let remaining = balanceField.innerText - savingAmountField.innerText;
        //     remainingBalance.innerText = remaining;
        // }
        // else {
        //     alert('You do not save your amount')
        // }
        alert('Please Increase Your income then you will be saveing your amount')

    }


})
