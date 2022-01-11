document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {

        // Send a GET request to the URL
        fetch('http://api.currencylayer.com/live?access_key=83001c81d3601524291b651bc41ed913&currencies=USD,AUD,CAD,PLN,MXN&format=1')
        // Put response into json form
        .then(response => response.json())
        .then(data => {
            // Get currency from user input and convert to upper case
            const currency = 'USD'+document.querySelector('#currency').value.toUpperCase();
			//alert(currency)
            // Get rate from data
			const source = data.source;
			//alert('source '+source)
            const rate = data.quotes[currency];

			//alert(rate)
            // Check if currency is valid:
            if (rate !== undefined) {
                // Display exchange on the screen
                document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}.`;
            }
            else {
                // Display error on the screen
                document.querySelector('#result').innerHTML = 'Invalid Currency.';
            }
        })
        // Catch any errors and log them to the console
        .catch(error => {
			alert('Error:'+ error)
            //console.log('Error:', error);
        });
        // Prevent default submission
        return false;
    }
});