let lista = document.getElementById("cambios");
const dias = new Date()
let boton_componentes = document.getElementById("componentes")
let boton_ejercicios = document.getElementById("rutinas")
let componentes = {
        0:"Esp32",1:"Esp8266",2:"Esp8266 01",3:"sensor infrarrojo",
        4:"Null",5:"rele",6:"Buzzers y LDR",7:"Ultrasonicos",
        8:"NULL",9:"NULL",10:"Sensor PIR y pantalla oled 0.96",11:"Servos",
        12:"NULL",13:"NULL",14:"LEDS",15:"Sensor de agua"
    }


let rutinas = [
    //Ejercicios Lunes/Jueves
    ["24 pesas brazos normal","24 pesas brazos como paja","24 pesas brazos antebrazo", "24 pesas brazos antebrazo invertido",
    "16 pesas hombros", "16 pesas laterales","24 pesas homoplato","24 pesas triceps", "10 flexiones","10 flexiones diamante",
    "12 pesas piso", "12 pesas laterales piso"
    ],
    //Ejercicios Martes/Viernes
    ["15 abdominales","10 abdominales cruzados","10 abdominales con brazo extendido","30 sec planca","20 sec plancha laterales",
    "30 sec saltando en x",
    ],
    //Ejercicios Miercoles/Sabado
    ["15 sentadillas","10 sentadillas laterales","10 zancadas","20 sec puntitas de pie","20 sec sentadilla contra la pared",
    "20 sec rodillas arriba","20 sec pies a gluteos"
    ],
    ["Es Domingo, deja de romper los huevos"]
]
/*dias lunes/Jueves = 0/3, Martes/Viernes = 1/4 y Miercoles/Sabado=2/5*/
boton_ejercicios.addEventListener("click",function(){
        let dia_semana = dias.getDay();
        let ejercicios = ``
        const obtener = obtenerRutinas(dia_semana)
        for(let i =0; i<obtener.length;i++){
            ejercicios+=`
            <div class="ejercicios">
                <p>${obtener[i]}</p>
                <input type="checkbox">
            </div>`
        }
        lista.innerHTML = ejercicios
})
boton_componentes.addEventListener("click",function(){
    nuevos_componentes = Object.values(componentes)
    console.log(nuevos_componentes)
    let guardar_valor = ``;
    for(let i = 0; i<nuevos_componentes.length;i++){
        guardar_valor += `
        <div class="componentes">
            <p>${nuevos_componentes[i]}</p>
        </div>
            `
    }
    lista.innerHTML = guardar_valor

})
function obtenerRutinas(dia){
    switch(dia){
        case 1:
        case 4:
            return rutinas[0]
        case 2:
        case 5:
            return rutinas[1]
        case 3:
        case 6:
            return rutinas[2]
        default:
            return rutinas[3]
        }
}
