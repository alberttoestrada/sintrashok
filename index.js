document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var email = document.getElementById('mail').value;
    if(email.length == 0) {
      alert('llenar campo');
      return;
    }
    var usuario = document.getElementById('nombre1').value;
    if (usuario.length < 4) {
      alert('Llenar campo');
      return;
    }
    var telefono = document.getElementById('telefono').value;
    if (telefono.length < 10) {
      alert('Llenar campo');
      return;
    }
    
    this.submit();
  }


function buttononclick2 () {
    const classbutton = document.getElementById("send2");
    Swal.fire({
        title:"Tus datos han sido enviados exitosamente!",
        icon: "success",
        confirmButtonColor:"#2fd20f",
    });  
}

function stylus3 (){
    const button3 = document.getElementById("send2").style.borderColor="black";

}

function stylus4 (){
    const button4 = document.getElementById("send2").style.borderColor="silver";
}

function stylus (){
    const button3 = document.getElementById("delete2").style.borderColor="black";

}

function stylus2 (){
    const button4 = document.getElementById("delete2").style.borderColor="silver";
}

var ran
ran = Math.round(Math.random()*50000)
document.write("Usted es el visitante " + ran + " de esta página.")


const expect = 2;
expect(true).toBeTruthy(true);

function limpiarFormulario (){
    document.getElementById("formulario").reset();
    setInterval(limpiarFormulario(),5000)
}

