// declara clase temas y propiedades
class Temas{
    constructor(nombreTema,duracionTema){
        this.nombreTema = nombreTema;
        this.duracionTema = duracionTema;
         }  
 //Continuacion funcion mostrar cadena en HTML  
    mostrar(){
        //creo  texto dentro del div 
    const ul = document.createElement("ul");
   const liNombre  = document.createElement("li");
   liNombre.innerText = `Nombre de la pista es ${this.nombreTema}.`;
   const liDuracion = document.createElement("li");
   liDuracion.innerText = `Duracion :`
   const span = document.createElement("span");
    //crear condicion Span para marcar 
    span.innerText = this.duracionTema;
    //condicion duracion > 180 remarcar rojo
    if(this.duracionTema > 180){
        span.setAttribute("class","rojo")
    }
    liDuracion.append(span);
    //pDuracion.append(span);
ul.append(liNombre,liDuracion);
     return ul;
        }}