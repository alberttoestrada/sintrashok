document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form3").addEventListener('submit', validarFormulario); 
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

function buttononclick () {
    const classbutton = document.getElementById("donarp");
    Swal.fire({
        title:"Tus datos han sido enviados exitosamente!",
        icon: "success",
        timer: 5000,
        confirmButtonColor:"#2fd20f",
    }); 
}

function stylus (){
    const button3 = document.getElementById("donarp").style.borderColor="black";

}

function stylus2 (){
    const button4 = document.getElementById("donarp").style.borderColor="silver";
}

function stylus3 (){
    const button3 = document.getElementById("borrar2").style.borderColor="black";

}

function stylus4 (){
    const button4 = document.getElementById("borrar2").style.borderColor="silver";
}
const expect = 2;
expect(true).toBeTruthy(true);

function limpiarFormulario (){
    document.getElementById("form3").reset();
    setInterval(limpiarFormulario(),5000)
}


