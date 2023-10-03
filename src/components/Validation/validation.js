const validation= (userData)=>{
    const errors = {}

    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/.test(userData.email)){
        errors.email= 'El email ingresado no es valido'
    }
    if(!userData.email){
        errors.email= 'Debe ingresar su email'
    }
    if(userData.email.length > 35){
        errors.email= 'El email no debe superar los 35 caracteres'
    }
    if(!/^(?=.*\d).+$/.test(userData.password)){
        errors.password= 'La contraseña debe tener por lo menos un numero'
    }
    if(userData.password.length <6 || userData.password.lenght > 10){
        errors.password= 'La contraseña debe tener entre 6 y 10 caracteres'
    }

    return errors;
}

export default validation