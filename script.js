
let tipoIns=99
let compra=0
let insignia=0
let insxAgregar=0
let insignias=[
    {código:101,nombre:"CASTORES",stock:100,precio:5,imaUrl:"./imagenes/castores.jpg"},
    {código:201,nombre:"LOBATOS",stock:250,precio:10,imaUrl:"./imagenes/lobatos.jpg"},
    {código:301,nombre:"SCOUTS",stock:300,precio:15,imaUrl:"./imagenes/scouts.jpg"},
    {código:401,nombre:"CAMINANTES",stock:380,precio:20,imaUrl:"./imagenes/caminantes.jpg"},
    {código:501,nombre:"ROVERS",stock:500,precio:25,imaUrl:"./imagenes/rovers.jpg"}
]

insigniaJSON=JSON.stringify(insignias)
localStorage.setItem("insignias",insigniaJSON)

let variables=JSON.parse(localStorage.getItem("insignias"))
console.log(variables)

let contenedorInsignias =document.querySelector("#insignias")
/*console.dir(contenedorInsignias)  */

for(const insignia of variables){
    tarjetaInsignia = document.createElement('div')
    tarjetaInsignia.className ="insignia"
    tarjetaInsignia.innerHTML = `
    <p> Insignias "${insignia.nombre}"</p>
    <h3> código: ${insignia.código}</h3>
    <h4> $ ${insignia.precio} </h4>
    <p> Stock inicial: ${insignia.stock}u. <p>
    <img src=${insignia.imaUrl}>
    <input type=number id=input${insignia.código}>
    <button class="agregar" id=${insignia.código}>Agregar al Carrito</button>
    `
    contenedorInsignias.append(tarjetaInsignia)
}

let botonag=document.getElementsByClassName("agregar")
for(let i=0;i<botonag.length;i++){
    botonag[i].addEventListener("click",sumaralCarrito)
}


/*FUNCIONES*/


function calcular(tipo,cant){
            for (let i=0; i < insignias.length ; i++) {
                if(tipo==insignias[i].código) {
                    if(cant<insignias[i].stock) {
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


function sumaralCarrito(e){
        
    let micarrito=document.getElementById("micarrito")
    let insxAgregar=insignias.find(insignia=>insignia.código == e.target.id)
    let cantins=document.getElementById("input"+insxAgregar.código).value 
    console.log(insxAgregar)
    if(cantins <=insxAgregar.stock && cantins>0){
        let tbody =document.createElement("tbody")
        tbody.innerHTML=`
            <td>${insxAgregar.nombre}</td>
            <td>${insxAgregar.stock}</td>
            <td>${cantins} insig.</td>
            <td>$ ${insxAgregar.precio*cantins}</td>
            <td>${insxAgregar.stock-cantins}</td>
            `
        micarrito.append(tbody)
    } else {
        console.error("No existe esa disponibilidad")
    }
    console.log("Cantidad de Insignias:",insxAgregar.stock)
    insxAgregar.stock=insxAgregar.stock-cantins
    console.log("Compra:",cantins)
    console.log("Quedan disponibles:",insxAgregar.stock)
        
    }

console.log("Fin")

