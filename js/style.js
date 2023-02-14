//all input filed
function inputValue(id) {
    const inputValue = document.getElementById(id);
    const value = inputValue.value;
    inputValue.value = ''
    return value
}

// set the total amount price
function setElementValue(id, value) {
    document.getElementById(id).innerText = value;
}

//get the total total quantity amount
function getElementValue(id) {
    return document.getElementById(id).innerText
}


document.getElementById('kitkat-buy-btn').addEventListener('click', function () {
    const kitkatQuantity = inputValue('kitkat-quantity');
    const newValue = kitkatQuantity * 200;
    setElementValue('chocolate', newValue);
    sum()
});

document.getElementById('rose-buy-btn').addEventListener('click', function () {
    const roseQuantity = inputValue('rose-quantity');
    const newValue = roseQuantity * 100;
    setElementValue('rose', newValue);
    sum()
})

document.getElementById('diary-buy-btn').addEventListener('click', function () {
    const diaryQuantity = inputValue('diary-quantity');
    const newValue = diaryQuantity * 100;
    setElementValue('diary', newValue);
    sum()
})

//total 
function sum() {
    const chocolate = getElementValue('chocolate');
    const rose = getElementValue('rose');
    const diary = getElementValue('diary');

    const total = parseInt(chocolate) + parseInt(rose) + parseInt(diary);
    if (total > 3000) {
        return alert('apnar eto amount nai')
    }
    setElementValue('total', total);
}