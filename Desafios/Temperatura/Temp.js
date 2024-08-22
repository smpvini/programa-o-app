<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conversor de Temperatura</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 50px;
            text-align: center;
        }
        input, select, button {
            margin: 10px;
        }
    </style>
</head>
<body>
    <h1>Conversor de Temperatura</h1>
    
    <label for="temperature">Digite a temperatura:</label>
    <input type="number" id="temperature" placeholder="Ex: 25">
    
    <br>
    
    <label for="fromUnit">De:</label>
    <select id="fromUnit">
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>
    </select>
    
    <label for="toUnit">Para:</label>
    <select id="toUnit">
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>
    </select>
    
    <br>
    
    <button onclick="convertTemperature()">Converter</button>
    
    <p id="result"></p>
    
    <script>
        function convertTemperature() {
            const temperature = parseFloat(document.getElementById('temperature').value);
            const fromUnit = document.getElementById('fromUnit').value;
            const toUnit = document.getElementById('toUnit').value;

            let result;

            // Conversões
            if (fromUnit === 'Celsius') {
                if (toUnit === 'Fahrenheit') {
                    result = (temperature * 9/5) + 32;
                } else if (toUnit === 'Kelvin') {
                    result = temperature + 273.15;
                } else {
                    result = temperature;
                }
            } else if (fromUnit === 'Fahrenheit') {
                if (toUnit === 'Celsius') {
                    result = (temperature - 32) * 5/9;
                } else if (toUnit === 'Kelvin') {
                    result = (temperature - 32) * 5/9 + 273.15;
                } else {
                    result = temperature;
                }
            } else if (fromUnit === 'Kelvin') {
                if (toUnit === 'Celsius') {
                    result = temperature - 273.15;
                } else if (toUnit === 'Fahrenheit') {
                    result = (temperature - 273.15) * 9/5 + 32;
                } else {
                    result = temperature;
                }
            }

            // Resultado
            document.getElementById('result').textContent = `Resultado: ${result.toFixed(2)} ${toUnit}`;
        }
    </script>
</body>
</html>
