// Variables para manejar el estado de la sesión de usuario
let usuarioActual = '';
let saldoActual = 0;

// Función para validar las credenciales de usuario
function validarCredenciales() {
  // Obtener los valores de usuario y contraseña ingresados por el usuario
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

   // Verificar si el usuario y contraseña son correctos
  if (usuario === 'joel@rappi.com' && contraseña === 'RappiMaster25') {
    usuarioActual = 'Joel Lozano';
    saldoActual = 700;
    mostrarBancaVirtual();
  } 
  else if (usuario === 'memo@pandasalud.mx' && contraseña === 'PandaSalud07') {
    usuarioActual = 'Memo';
    saldoActual = 555;
    mostrarBancaVirtual();
  }
  else if (usuario === 'miguel@correofalso.com.mx' && contraseña === 'Password1234') {
    usuarioActual = 'Miguel Mogollan';
    saldoActual = 37;
    mostrarBancaVirtual();
  } 
  else {
    alert('Credenciales incorrectas, por favor intente de nuevo.');
  }
}

// Función para mostrar la banca virtual
function mostrarBancaVirtual() {
    // Ocultar el formulario de login
    document.querySelector('.login-form').classList.add('hidden');
    document.querySelector('.banca-virtual').classList.remove('hidden');
    document.getElementById('saldo').textContent = saldoActual;
}

function ingresarDinero(){
    const cantidad = parseInt(document.getElementById('cantidad-ingreso').value);

    if (isNaN(cantidad) || cantidad <= 0) {
        alert('Ingrese una cantidad válida.');
        return;
    }
    if ((saldoActual + cantidad) > 990) {
        alert('La cantidad a ingresar no es válida debido a que no puede haber menos de $990 en su cuenta. Para agrandar esta cantidad actualícese a Premium. Por favor ingrese una cantidad menor.');
        return;
    }

    saldoActual += cantidad;

    document.getElementById('saldo').textContent = saldoActual;

    document.getElementById('cantidad-ingreso').value = '';
}

// Función para retirar dinero
function retirarDinero() {
  // Obtener la cantidad ingresada por el usuario
    const cantidad = parseInt(document.getElementById('cantidad-retiro').value);

  // Verificar si la cantidad es válida
    if (isNaN(cantidad) || cantidad <= 0) {
        alert('Ingrese una cantidad válida.');
        return;
    }

  // Verificar si la cantidad es menor a 10 o mayor a 990
    if ((saldoActual - cantidad) < 10 || (saldoActual + cantidad) > 990) {
        alert('La cantidad a retirar no es válida debido a que no puede haber menos de $10 en su cuenta. Por favor ingrese una cantidad menor.');
        return;
    }

  // Actualizar el saldo actual
    saldoActual -= cantidad;

  // Actualizar el saldo en pantalla
    document.getElementById('saldo').textContent = saldoActual;

  // Limpiar el campo de cantidad
    document.getElementById('cantidad-retiro').value = '';
}
