// ----- Adding plus button event handler for phone section ------
document.getElementById('minus-btn-phone').addEventListener('click', function () {
    var numberOfPhone = parseFloat(document.getElementById('piece-phone').value);
    numberOfPhone -= 1;
    if (!(numberOfPhone < 0)) {
        document.getElementById('piece-phone').value = numberOfPhone;
        const priceOfPhone = 1219;
        var totalPhonePrice = priceOfPhone * numberOfPhone;
        document.getElementById('phone-price').innerText = totalPhonePrice;
    }
})

// ----- Adding minus button event handler for phone ------
document.getElementById('plus-btn-phone').addEventListener('click', function () {
    var numberOfPhone = parseFloat(document.getElementById('piece-phone').value);
    numberOfPhone += 1;
    document.getElementById('piece-phone').value = numberOfPhone;
    const priceOfPhone = 1219;
    var totalPhonePrice = priceOfPhone * numberOfPhone;
    document.getElementById('phone-price').innerText = totalPhonePrice;
})

// ----- Adding minus button event handler for cover ------
document.getElementById('minus-btn-cover').addEventListener('click', function () {
    numberOfCover = parseFloat(document.getElementById('piece-cover').value);
    numberOfCover -= 1;
    document.getElementById('piece-cover').value = numberOfCover;
    const priceOfCover = 59;
    var totalCoverPrice = priceOfCover * numberOfCover;
    document.getElementById('cover-price').innerText = totalCoverPrice;
})

// ----- Adding plus button event handler for cover ------
document.getElementById('plus-btn-cover').addEventListener('click', function () {
    numberOfCover = parseFloat(document.getElementById('piece-cover').value);
    numberOfCover += 1;
    document.getElementById('piece-cover').value = numberOfCover;
    const priceOfCover = 59;
    var totalCoverPrice = priceOfCover * numberOfCover;
    document.getElementById('cover-price').innerText = totalCoverPrice;
})

// ----- updating payment section -----