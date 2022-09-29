let clientes=[];
let productos=[];
let compras=[];
let nombre="Flor";
let apellido ="Martinez";

let nuevoCliente=new cliente(clientes.length,nombre,apellido);
clientes.push(nuevoCliente);

let velas=new producto(productos.length+1,"Velas",200);
productos.push(velas);

let aceite=new producto(productos.length+1,"Aceite Escenciales",300);
productos.push(aceite);

let lampara=new producto(productos.length+1,"Lamparas de Sal",800);
productos.push(lampara);

let jabon=new producto(productos.length+1,"Jabones",100);
productos.push(jabon);

let difusores=new producto(productos.length+1,"Difusores",1.200);
productos.push(difusores);

let fuentes=new producto(productos.length+1,"Fuentes de Agua",1.700);
productos.push(fuentes);

let inciensos=new producto(productos.length+1,"Inciensos",50);
productos.push(inciensos);

let fragancia=new producto(productos.length+1,"Fragancia",600);
productos.push(fragancia);


function calcularCostoTotal (precio,cantidad){
    return precio * cantidad * 1.22;
}

function cliente(id, nombre, apellido){
    this.id=id;
    this.nombre=nombre;
    this.apellido=apellido;
}
function producto(id,descripcion, precio){
    this.id=id;
    this.descripcion=descripcion;
    this.precio=precio;
}
function compra(cliente,producto,cantidad){
    this.cliente=cliente;
    this.producto=producto;
    this.cantidad=cantidad;
}
function buscarProducto(id){
    for (let index = 0; index < productos.length; index++) {
        if(productos[index].id==id){
            return productos[index];
        }
    }
}

const buttonVelas = document.querySelector("#btnComprarVelas");

buttonVelas.onclick= function () {
    let valor=Number(document.querySelector("#numberVelas").value);
    agregarCarrito (1,valor);
    document.querySelector("#numberVelas").value=0
}

const buttonAceites = document.querySelector("#btnComprarAceites");

buttonAceites.onclick= function () {
    let valor=Number(document.querySelector("#numberAceite").value);
    agregarCarrito (2,valor);
}

const buttonLamparas = document.querySelector("#btnComprarLampara");

buttonLamparas.onclick= function () {
    let valor=Number(document.querySelector("#numberLampara").value);
    agregarCarrito (3,valor);
}

const buttonJabones = document.querySelector("#btnComprarJabones");

buttonJabones.onclick= function () {
    let valor=Number(document.querySelector("#numberJabones").value);
    agregarCarrito (4,valor);
}

const buttonDifusores = document.querySelector("#btnComprarDifusores");

buttonDifusores.onclick= function () {
    let valor=Number(document.querySelector("#numberDifusores").value);
    agregarCarrito (5,valor);
}

const buttonFuente = document.querySelector("#btnComprarFuente");

buttonFuente.onclick= function () {
    let valor=Number(document.querySelector("#numberFuente").value);
    agregarCarrito (6,valor);
}

const buttonInciensos = document.querySelector("#btnComprarInciensos");

buttonInciensos.onclick= function () {
    let valor=Number(document.querySelector("#numberInciensos").value);
    agregarCarrito (7,valor);
}

const buttonFragancia = document.querySelector("#btnComprarFragancia");

buttonFragancia.onclick= function () {
    let valor=Number(document.querySelector("#numberFragancia").value);
    agregarCarrito (8,valor);
}


function agregarCarrito (option, cantidad) {
    let productoBuscado=buscarProducto(option); 
    if (Number(cantidad)>0 ){
        alert (nuevoCliente.nombre + " " +nuevoCliente.apellido + " el costo total de su compra es: $ "+calcularCostoTotal(productoBuscado.precio,Number(cantidad)));
        let nuevaCompra = new compra(nuevoCliente,productoBuscado,cantidad);
        compras.push(nuevaCompra);
        let cantidadCompras=compras.length;
        document.querySelector("#carrito").innerText = "Carrito ("+cantidadCompras+")";
        const comprasStr=JSON.stringify(compras);
        localStorage.setItem("Carro", comprasStr)

    } else{
        alert("Debe comprar al menos un producto")
    }
}
const carro = document.querySelector("#btnCarro");

carro.onclick= function () {
    alert(mostrarCarro());
}
function mostrarCarro(){
    let compra="";
    for (let index = 0; index < compras.length; index++) {
        compra+="Cliente: "+compras[index].cliente.nombre +" Producto: " + compras[index].producto.descripcion + " Cantidad: " + compras[index].cantidad +" | "
    }
    return compra;
}





