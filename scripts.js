const form = document.querySelector(".formulario")  /* Acessando  formulário através da classe no arquivo html */ 
const mascara = document.querySelector(".mascara-formulario")

/* Função para mudar o formulário ao clicar no botão */
function MostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function EsconderForm() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}
