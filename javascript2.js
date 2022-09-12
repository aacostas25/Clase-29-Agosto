const apellido = document.getElementById("mail");
const email = document.getElementById("mail");
const siboton = document.getElementById("flexRadioDefault1");

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



