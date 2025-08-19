// Definición de palabras clave de entrada y salida
const { addKeyword } = require('@bot-whatsapp/bot')
const palabrasEntrada = ['HOLA', 'Hola', 'HoLa', 'ola', 'hola', 'ole', 'alo', 'menu', 'Menu', 'MENU','hi', 'HI']
const palabrasSalida = ['finalizar','Finalizar','fin','terminar','Terminar', 'chao', 'chau', 'nos vemos', 'Nos vemos']

const mensajeBienvenida = "Hola!, que alegria tenerte en esta nueva version de la Expo-Ceduc 2025, seguramente estas visitando nuestro Stand en sede Coquimbo, que bacan que te interese la carrera y quieras saber de ella y para apoyarte en esta información te dare opciones para que escojas la que mas te interese y nos conozcas!!... Se me olvidaba algo, puedes preguntarles a las personas que estan detras del meson, alumnos y jefatura de área, como me crearon, seguro te lo explicaran muy bien!!, animate y disfruta tu estadia en ceduc ucn sede Coquimbo."
const mensajeDespedida = "Gracias por interactuar con nosotros, mi horario de atencion sera exclusivamente los dias 27 y 28 de agosto de 09:00 am a 17:00 pm, luego de eso me toca descansar o me actualizaran, que tengas una excelente jornada, ¡adios!"

const mensajeRetorno = 'Escribe *menu* para volver al menú principal';

const menu = [
    '*Que desea saber: * 🌀',  
    '👉 *1* ¿Cuanto tiempo dura la carrera?',
    '',
    '👉 *2* ¿Como puedo ver la malla de las carreras de informática? ',
    '',
    '👉 *3* ¿Me puedo matricular ahora mismo? ',        
    '',
    '👉 *Finalizar* para terminar la conversacion'
    ];

const respuesta1 = addKeyword(['1']).addAnswer(
    ['Todas nuestras carreras, incluida esta, tienen una duración de 2 años para cumplir con el programa de estudios y 1 semestre adicional para el proceso de práctica profesional.'+mensajeRetorno],
    null,
    null
);

const respuesta2 = addKeyword(['2']).addAnswer(
    ['Las mallas de la carrera se encuentran en nuestro sitio web www.ceduc.cl y tambien en nuestro stand y stand de matriculas en esta misma Expo-Ceduc tambien te las puedo dejar de manera digital en el siguiente link https://ceduc.cl/carreras/computacion-e-informatica-mencion-programacion/ y tambien puedes revisar nuestra carrera del ambito de ciberseguridad por si te interesa https://ceduc.cl/carreras/computacion-e-informatica-mencion-ciberseguridad/ aprovecha de consultar todo lo que puedas con las personas que estan a cargo de la carrera y sus estudiantes, seguro te ayudaran a encantarte con el área de interes.'+mensajeRetorno ],
    null,
    null
);
const respuesta3 = addKeyword(['3']).addAnswer(
    ['Siii, si puedes, solo debes acercarte al stand de matriculas que esta ubicado en esta misma carpa y el personal de admision de ceduc-ucn coquimbo te apoyaran en todo el proceso, si realizas el proceso, seguro que te encantara el área y daremos todo nuestro esfuerzo para que el aprendizaje en nuestras aulas sea significativo para ti.'+mensajeRetorno], 
    null,
    null
);

module.exports = {
    palabrasEntrada,
    palabrasSalida,
    mensajeBienvenida,
    mensajeDespedida,
    menu,
    respuesta1,
    respuesta2,
    respuesta3
};
