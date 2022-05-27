import {unlink, readFile, writeFile} from "fs/promises"

async function crearArchivo(nombre, contenido){
    try{
        await writeFile(nombre,contenido)
        console.log('archivo fue creado')

    }
    catch{
        console.error("no se pudo crear su archivo")
        console.log(error);
    }

}

async function leerArchivo(nombre){
    try{
        const contenido = await readFile(nombre,'utf8')
        console.log(contenido);
    }
    catch(error){
        console.error("no se pudo leer el archivo")
        console.log(error);
    }
}



async function borrarArchivo(nombre){
    try{
        await unlink(nombre)
        console.log('el archivo fue eliminado con exito');
    }
    catch(error){
        console.error("no se enctonro el archivo")
        console.log(error);

    }
}


//  async function test(){
//      await crearArchivo('prueba1.txt', 'hola koders')
//      await leerArchivo('prueba2.txt')
//      await borrarArchivo('prueba3.txt')
//  }

//  test();





leerArchivo('prueba2.txt')

