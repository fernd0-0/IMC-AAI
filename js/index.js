function calculate() {
    var altura = (document.getElementById("altura").value) / 100;
    var peso = document.getElementById("peso").value;
    var erro=""

  
    var imc = (peso / altura ** 2).toFixed(2);// toFixed Para limitar os números depois da virgula.
    var text=""
    var value= imc
    if (isNaN(altura) || isNaN(peso)) {
        erro= ("Só números Por favor!"); 
    }else if (imc < 18.5) {
        text=("Você está Magro");
    } else if (imc < 24.9) {
        text=("Você está no peso ideal");
    } else if (imc < 29.9) {
        text=("Você está com Sobrepeso");
    } else if (imc < 39.9) {
        text=("Você está com obesidade 1");
    } else if (imc >= 39.9) {
        text=("Você está com obesidade mórbida");
    }
    document.getElementById("resul").innerText=text
    document.getElementById("value").innerText=value
    document.getElementById("erro").innerText=erro
}

document.getElementById("calcular").addEventListener("click", calculate);