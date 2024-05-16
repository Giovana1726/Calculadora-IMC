function calcularIMC() {
  var altura = parseFloat(document.getElementById('altura').value) / 100; // Convertendo altura para metros
  var peso = parseFloat(document.getElementById('peso').value);
  var sexo = document.getElementById('sexo').value;
  var imc = peso / (altura * altura);

  var resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  if (!isNaN(imc)) {
    var resultadoText = 'Seu IMC é ' + imc.toFixed(2) + '. ';

    if (sexo === 'homem') {
      if (imc < 20.7) {
        resultadoText += 'Abaixo do peso.';
      } else if (imc < 26.4) {
        resultadoText += 'Peso normal.';
      } else if (imc < 27.8) {
        resultadoText += 'Marginalmente acima do peso.';
      } else if (imc < 31.1) {
        resultadoText += 'Acima do peso ideal.';
      } else {
        resultadoText += 'Obeso.';
      }
    } else if (sexo === 'mulher') {
      if (imc < 19.1) {
        resultadoText += 'Abaixo do peso.';
      } else if (imc < 25.8) {
        resultadoText += 'Peso normal.';
      } else if (imc < 27.3) {
        resultadoText += 'Marginalmente acima do peso.';
      } else if (imc < 32.3) {
        resultadoText += 'Acima do peso ideal.';
      } else {
        resultadoText += 'Obesa.';
      }
    }

    resultado.innerHTML = resultadoText;
  } else {
    resultado.innerHTML = 'Por favor, insira valores válidos para altura e peso.';
  }
}