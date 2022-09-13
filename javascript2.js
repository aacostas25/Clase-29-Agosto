const apellido = document.getElementById("apellido");
const formulario = document.getElementById("formulario"); //sabe que es todo el formulario
const email = document.getElementById("mail");
const siboton = document.getElementById("flexRadioDefault1");
const inputs = document.querySelectorAll('#formulario input')

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Se espera una dirección de correo electronico");
    } else {
        email.setCustomValidity("");
    }
});

function mayuscula(){
    var nombre = document.getElementById("nombre").value;
    nombre = nombre.toUpperCase();
    alert(nombre)
}

function otro() {
    let respuesta = document.getElementById("respuesta");
    respuesta.innerHTML = `
    <label>
    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Modalidad 1
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
  <label class="form-check-label" for="flexCheckChecked">
    Modalidad 2
  </label>
</div></label>`;
}




const validarFormulario = (e) => {
    switch (e.target.name){
        case "nombre":
            console.log('Funciona')
        break;
        case "apellido":
            console.log('Apellido')
        break;
        case "mail":
            console.log('Funciona')
        break;
        case "contra1":
            console.log('Funciona')
        break;
        case "constra2":
            console.log('Funciona')
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup',validarFormulario); //levantan la tecla
    input.addEventListener('blur',validarFormulario); 

});


formulario.addEventListener('submit', (e) =>{
     e.preventDefault(); //evitar que la url cambie
     
})
