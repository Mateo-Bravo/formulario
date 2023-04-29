function sayHello(name) {
    let nombre = document.getElementById('nombrecompleto')
    console.log(nombre)
    alert('Hola ' + name.value)
}

function getDataForm() {
    let nombre = document.getElementById('nombrecompleto')
    console.log(nombre.value)

    if (nombre.value == '') {
        alert('El campo nombre es obligatorio')
        nombre.setAttribute('style', 'border-color:red')
        nombre.setAttribute('placeholder', 'Escriba aqui el nombre')
        return
    }

    let email = document.getElementById('Email')
    console.log(email.value)

    if (email.value == '') {
        alert('El campo email es obligatorio')
        email.setAttribute('style', 'border-color:red')
        email.setAttribute('placeholder', 'Escriba aqui el email')
        return
    }

    let birth = document.getElementById('Bday')
    console.log(bday.value)

    if (bday.value == '') {
        alert('El campo fecha de nacimiento es obligatorio')
        bday.setAttribute('style', 'border-color:red')
        bday.setAttribute('placeholder', 'Seleccione')
        return
    }

    let sexo = document.getElementById('so')
    console.log(so.value)

    if (sexo.value == '') {
        alert('El campo sexo es obligatorio')
        so.setAttribute('style', 'border-color:red')
        so.setAttribute('placeholder', 'Seleccione su sexo')
        return
    }

    const datosFormulario = {
        name: nombre.value,
        bday: bday.value,
        email: email.value,
        sexo: so.value
    }

    console.log(datosFormulario)
}


function validateState(id) {
    const name = document.getElementById(id)
    if (name.value == '') {
        nombre.setAttribute('style', 'border-color:red')
    } else {
        nombre.setAttribute('style', 'border-color:black')
    }
}
