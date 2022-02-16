// Expenses & Total Expenses Calculation
const calculateBtn = document.getElementById('calculate-btn');
calculateBtn.addEventListener('click', function (event) {
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
        alert("Check your input value please, Somthing is missing - 'it will me postive number please'")
    } else {
        let totalExpensesAmount = foodAmount + rentAmount + clothesAmount;
        const totalExpenseField = document.getElementById('total-expenses');
        totalExpenseField.innerText = totalExpensesAmount;
        totalExpenseField.style.fontFamily = "'Merriweather Sans' , sans-serif"

        if (incomeAmount < totalExpenseField.innerText || isNaN(incomeAmount)) {
            alert('My be your input value is string or Your income amount is Low, so you can not afford')
        } else {
            let balance = incomeAmount - totalExpenseField.innerText;
            const balanceField = document.getElementById('balance');
            balanceField.innerText = balance;
            balanceField.style.fontFamily = "'Merriweather Sans' , sans-serif"
        }

    };



    // remove value from input
    foodField.value = '';
    rentField.value = '';
    clothesField.value = '';

});



