function UpdateCase(product, isIncrease, cost) {
    const caseInput = document.getElementById(product + '-input');
    let caseText = caseInput.value;
    if (isIncrease == true) {
        caseText = parseInt(caseText) + 1;

    } else if (caseText > 0) {
        caseText = parseInt(caseText) - 1;
    }
    caseInput.value = caseText;

    const CaseCost = document.getElementById(product + '-cost');
    CaseCost.innerText = caseText * cost;
    CalculateTotal()
}


document.getElementById('Case-plus').addEventListener('click', function() {
    UpdateCase('Case', true, 59);

})
document.getElementById('Case-minus').addEventListener('click', function() {
    UpdateCase('Case', false, 59);

})
document.getElementById('Phone-plus').addEventListener('click', function() {
    UpdateCase('Phone', true, 1219);

})
document.getElementById('Phone-minus').addEventListener('click', function() {
    UpdateCase('Phone', false, 1219);

})

function GetInput(product) {
    const Phone = document.getElementById(product + '-input');
    const PhoneNumber = parseInt(Phone.value);
    return PhoneNumber;
}

function CalculateTotal() {
    const PhoneTotal = GetInput('Phone') * 1219;
    const caseTotal = GetInput('Case') * 59;

    const subtotal = PhoneTotal + caseTotal;
    const Tax = subtotal / 10;
    const Total = subtotal + Tax;
    document.getElementById('Subtotal').innerText = subtotal;
    document.getElementById('Tax').innerText = Tax;
    document.getElementById('Total').innerText = Total;
}