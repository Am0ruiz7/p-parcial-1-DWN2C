//Declaro clase Objeto de Disco y sus propiedades
class Disco {
  
    constructor(nombreDisco,autorDisco,codigo){
        this.nombreDisco = nombreDisco;
        this.autorDisco = autorDisco;
        this.codigo = codigo;
        this.temas = [];
    }

// Pusheamos datos nuevoTema en array de Temas de propiedad privada
agregarTema(nuevoTema){
    this.temas.push(nuevoTema);
}
//Continua con la cadena HTML section para mostra los datos cargados
mostrar(){ 
    
const section = document.createElement("section");
 const h2 = document.createElement("h2");
 h2.innerText = "Datos del Disco:";
 const pNombre = document.createElement("p");
 pNombre.innerText = `Nombre del  disco: ${this.nombreDisco}`;
 const pAutor = document.createElement("p");
 pAutor.innerText = `Autor del disco: ${this.autorDisco}`;
 const pCodigo = document.createElement("p");
 pCodigo.innerText =`El codigo del disco es: ${this.codigo}`;
 //Busco promedio
const pPromedio = document.createElement("p");
pPromedio.innerText =`El promedio duracion es   ${(acumuladorDuracion / contadorTema).toFixed(2)}`;
//Busco Total duracion
const pDuracionTotal = document.createElement("p");
 pDuracionTotal.innerText = `La duracion Total es ${acumuladorDuracion}`;
 // Busco total Temas
 const pTotalTemas = document.createElement("p");
  pTotalTemas.innerText = `El total de pistas es ${contadorTema}`;
 //busco valor maximo, promedio, total temas
// const pMaximo = document.createElement('p');
// pMaximo.innerText = `El tema de duracion maxima es ${Math.max(duracionTema)}`; 
const h3 = document.createElement("h3");
h3.innerText = "Pistas : ";
//recorro objeto Pistas
section.append(h2,pNombre,pAutor,pCodigo,pPromedio,pDuracionTotal,pTotalTemas,h3);
for( let tema of this.temas){
   section.append(tema.mostrar());}

return section;
 }
}