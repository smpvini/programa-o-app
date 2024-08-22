<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de IMC</title>
</head>
<body>
    <h1>Calculadora de IMC</h1>
    <form id="imcForm">
        <label for="altura">Altura (em metros): </label>
        <input type="number" step="0.01" id="altura" required><br><br>

        <label for="peso">Peso (em kg): </label>
        <input type="number" step="0.1" id="peso" required><br><br>

        <button type="submit">Calcular IMC</button>
    </form>

    <h2 id="resultado"></h2>

    <script>
        document.getElementById('imcForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Altura e peso do usuário
            const altura = parseFloat(document.getElementById('altura').value);
            const peso = parseFloat(document.getElementById('peso').value);

            // Calculando o IMC
            const imc = peso / (altura * altura);

            // Definindo a categoria do IMC
            let categoria;
            if (imc < 18.5) {
                categoria = 'Abaixo do peso';
            } else if (imc >= 18.5 && imc < 24.9) {
                categoria = 'Peso normal';
            } else if (imc >= 25 && imc < 29.9) {
                categoria = 'Sobrepeso';
            } else {
                categoria = 'Obesidade';
            }

            // Resultado
            document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(2)} (${categoria})`;
        });
    </script>
</body>
</html>