/*Estructura disco
Nombre- autor- codigo- pistas[]*/
let discos = []; 
//variables a utilizar
let nombreDisco;
let autorDisco;
let codigo;
let temas = [];
let duracionTema;
let nombreTema;
//Contadores y acumuladores
let contadorTema = 0;
let acumuladorDuracion = 0;


function codigoRepetido(codigo){
  for(let disco of discos){
      if(disco.codigo === codigo){
        return true}
  } 
  return false;
}    


//validacion String y number
function validarString(msg){
    let str;
    //pido string que no sea numero, sin espacios
    do { str =prompt(msg);
        if(str !== null){str = str.trim()
        if(str === ""){alert("Debe llenar la casilla")}};
     //valido el string no sea vacio
    } while (str === null || str === "");
    return str;
    }
//Valido que no se repita el codigo numerico

function validarCodigo(){
  let codigo;
    let valido; 
//pido numero no sea texto y validacion limites entre 1 y 999
do {valido = true;
     codigo = parseInt(prompt("Ingrese un codigo entre 1 y 999"));
//verifico es numerico
    if(isNaN(codigo)){ 
      valido = false;
    alert("Ingrese un codigo numérico");
  }
    //verifico fuera rango
      else if(codigo < 1 || codigo > 999)
        { valido = false; 
          alert("Ingrese numero entre 1 y 999");}
        //verifico no se repita
        else if(codigoRepetido(codigo)){
          valido = false;
        alert(" El codigo ya existe");
      }
    } while (valido === false);
    return codigo;
}



//Valido duracion numero y validacion limites entre 0 y 7200
function validarDuracion(msg){
    let num; let valido;
    //pido numero no sea texto 
    do {valido = true; 
        num = parseInt(prompt(msg));
      if(isNaN(num)){ valido = false;
    alert("Debe ingresar un número");}
    else if( num < 0 || num > 7200){valido = false;
    alert("La duracion debe estar entre 1 y 7200");}    
    else if( num > 180){valido = true;
         alert("Duracion mayor a 180seg")}
        else{  acumuladorDuracion += num;}       
       
         } while (valido === false);
    //retorno numero
    return num;
    }

  

//Pido datos al boton onclick
function cargarDisco() {
 //Pido nombre del disco
    nombreDisco = validarString("Ingrese nombre del disco");
    //carga el dato clase objetos Disco

    
    //pido nombre autor /banda
    autorDisco = validarString("Ingrese el nombre del Autor o Banda");
    //ingreso dato en objeto disco


      //Pido Codigo  sea unico
    codigo = validarCodigo();
    //let nuevoCodigo;
 
    let disco = new Disco(nombreDisco, autorDisco,codigo);
    // Pedimos datos del Array Temas   
    do{
    nombreTema = validarString("Ingrese Pistas del disco");
    //contador temas
    contadorTema++;      
    //Pedimos la duracion tema
    duracionTema = validarDuracion("Ingrese duracion del tema en segundos");
    datosTema = new Temas(nombreTema, duracionTema);
    disco.agregarTema(datosTema);
    }while (confirm("desea ingresar mas Pistas") ); 
    discos.push(disco)
    
  }
//habilito funcion mostrar en Discos
function mostrar(){
  //Armar cadena HTML
  const info = document.querySelector("#info");
  info.innerHTML = "";
  discos.forEach(disco => {
    info.append(disco.mostrar());
  });

}