window.onload = function() {
    document.getElementById('calculateBtn').onclick = function() {
        const days = parseInt(document.getElementById('days').value);
        const age = parseInt(document.getElementById('age').value);
        let optionsCost = 0;

        if (document.getElementById('gps').checked) {
            optionsCost += parseInt(document.getElementById('gps').value) * days;
        }
        if (document.getElementById('childSeat').checked) {
            optionsCost += parseInt(document.getElementById('childSeat').value) * days;
        }
        if (document.getElementById('insurance').checked) {
            optionsCost += parseInt(document.getElementById('insurance').value) * days;
        }

        let basicCost = 29.99 * days;
        if (age < 25) {
            basicCost *= 1.3; // 30% surcharge
        }

        const totalCost = basicCost + optionsCost;
        document.getElementById('result').innerText = 'Total Rental Charges: $' + totalCost.toFixed(2);
    };
};