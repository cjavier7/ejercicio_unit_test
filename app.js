// Esta es mi funcion que suma dos numeros
const suma= (a,b) =>{
    return a+b
}

// Solo un registro en consola para nosotros
console.log(suma(7,3))

// Exporta la funcion para usarla en otros archivos
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports ={sum};