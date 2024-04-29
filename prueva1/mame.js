//tener
const indexadDB = window.indexedDB;
let db

{
const conexion = indexedDB.open("AFILIADOSCYAN",1);
conexion.onsuccess = ()=>{
    db = conexion.result
    console.log('base de datos abierta',db)
}
conexion.onupgradeneeded = e=>{
    db = e.target.result
    console.log('base de datos creada',db)
    const coleccionObjetos = db.coleccionObjetos('tareas',{
        keyPath:'clave'
    })
}
conexion = onerror (error); {
    console.log('error',error)
}
}
   