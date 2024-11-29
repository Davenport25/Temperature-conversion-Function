// Temperature conversion Function

const readline = require('readline');


// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Function to ask user for input
function getTemperature() {
    rl.question("Enter the temperature value: ", (value) => {
        const temperature = parseFloat(value);
        
        // Prompt for the scale, regardless of whether the value is valid
        rl.question("Enter the scale (Celsius or Fahrenheit): ", (scale) => {
            
                convertTemperature(temperature, scale);
            rl.close();  // Close the interface after processing
        });
    });
}

// Function to convert temperatures
function convertTemperature(value, scale) {
    let convertedTemp;

    if (scale === "celsius") {
        // Convert Celsius to Fahrenheit
        convertedTemp = (value * 9/5) + 32;
        console.log(`${value}°C is equal to ${convertedTemp}°F.`);
    } else if (scale === "fahrenheit") {
        // Convert Fahrenheit to Celsius
        convertedTemp = (value - 32) * 5/9;
        console.log(`${value}°F is equal to ${convertedTemp}°C.`);
    } else {
        console.log("Invalid scale. Please specify either 'Celsius' or 'Fahrenheit'.");
    }
    rl.close();
}

// Call the function to start the process
getTemperature();
