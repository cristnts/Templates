

var nombre = "Cristian";
var altura = 200;

document.write(nombre)
document.write(altura)

var comc = nombre + " " + altura;


if(altura >= 190){
    datos.innerHTML += `  
    
            <h1> ERES ALTO </h1>
    `;

}

// += SUMARLE EL CONTENIDO A EL DIV

for (var i = 0 ; i<20; i++){

    //bloque de isntrucciones

    datos.innerHTML += ` 
    
        <h2> estamos en el año ${i}</h2>

    `;

}

function MuestraMiNombre(nombre, altura){
   
   var misdatos = `
    
            <h1> Hola mundo </h1>
    
            <h2> mi nombre es ${nombre} </h2>
    
            <p> mido : ${altura}</p>
    
    `;
return misdatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("cristian" , 909);

}

imprimir();

MuestraMiNombre("cristina", 199);

var nombres = ['cris' , 'cros'];

nombres.forEach(nombre) => {
    document.write(nombre + '</br>');  
});