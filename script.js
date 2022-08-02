
let tipoIns=99
let compra=0
let insignia=0
let insignias=[
    {código:101,nombre:"CASTORES",stock:100,precio:5,imaUrl:"./imagenes/castores.jpg"},
    {código:201,nombre:"LOBATOS",stock:250,precio:10,imaUrl:"./imagenes/lobatos.jpg"},
    {código:301,nombre:"SCOUTS",stock:300,precio:15,imaUrl:"./imagenes/scouts.jpg"},
    {código:401,nombre:"CAMINANTES",stock:380,precio:20,imaUrl:"./imagenes/caminantes.jpg"},
    {código:501,nombre:"ROVERS",stock:500,precio:25,imaUrl:"./imagenes/rovers.jpg"}
]


let contenedorInsignias =document.querySelector("#insignias")
console.dir(contenedorInsignias)  


for (const insignia of insignias){
    tarjetaInsignia = document.createElement('div')
    tarjetaInsignia.className ="insignia"
    tarjetaInsignia.innerHTML = `
    <p>${insignia.nombre}</p>
    <h3> código: ${insignia.código}</h3>
    <h4>$ ${insignia.precio}</h4>
    <p> stock: ${insignia.stock} <p>
    <img src=${insignia.imaUrl}>
    `
    contenedorInsignias.append(tarjetaInsignia)
}

let cgoProducto =document.getElementById("cgoProducto")
let codigo = document.createElement("div")
codigo.innerHTML=`
<h3> Para simular su compra presione el botón </h3>
<h4> (Ingrese 0 para finalizar la simulación) </h4>
<button id="boton"> Simular Compra </button>
`

cgoProducto.append(codigo)
console.log(cgoProducto)

let boton =document.getElementById("boton")

boton.addEventListener("click", comprar)

/*
if(compra!=0){
    alert("El total de la compra es de: $",compra)
    } 
*/
  
function comprar(){
    tipoIns=(prompt("Ingrese el código de insignia que desea comprar"))
    
    if(tipoIns!=0 && tipoIns!=101 && tipoIns!=201 && tipoIns!=301 && tipoIns!=401 && tipoIns!=501){
        alert ("Debe ingresar un código válido")
    } else {
        if(tipoIns!=0){
            const busqueda=buscar(tipoIns)
            alert ("El stock disponible es de: "+ busqueda)
        }
                
        if (tipoIns!=101 && tipoIns!=201 && tipoIns!=301 && tipoIns!=401 && tipoIns!=501) {
        
        } else {
                        
            let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar de Insignias de " +tipoIns))
                             
            let compra=calcular(tipoIns,cantidad)
               
          }
    } 
}

function calcular(tipo,cant){
            for (let i=0; i < insignias.length ; i++) {
                if(tipo==insignias[i].código) {
                    if(cant<=insignias[i].stock) {
                        insignias[i].stock=insignias[i].stock-cant
                       alert ("El monto de su compra es de: $ "+cant*insignias[i].precio)
                        
                    }else {alert ("NO hay stock disponible, quedan "+insignias[i].stock+" insignias")
                    return 0
                    } 
                }
                }
}

function buscar(cgo){
        const resultado=insignias.find((eleins)=>eleins.código==cgo)
            return resultado.stock
}

console.log("Fin de la Consulta")

