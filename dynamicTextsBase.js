// Definición de palabras clave de entrada y salida
const { addKeyword } = require('@bot-whatsapp/bot')
const palabrasEntrada = ['HOLA', 'Hola', 'HoLa', 'ola', 'hola', 'ole', 'alo', 'menu', 'Menu', 'MENU']
const palabrasSalida = ['finalizar','Finalizar','fin','terminar','Terminar']

const mensajeBienvenida = "Hola. Bienvenido a CEDUC UCN - Escuela de Computaci{on e Infomática"
const mensajeDespedida = "Gracias por tu contacto. Recuerda visitarnos en *www.ceduc.cl*"

const mensajeRetorno = 'Escribe *menu* para volver al menú principal';

const menu = [
    '*Que desea saber: * 🌀',  
    '👉 *1* ¿Que menciones tiene la escuela? ',
    '',
    '👉 *2* ¿Cuáles son los horarios de cada jornada? ',
    '',
    '👉 *3* ¿Cuanto tiempo dura la carrera? ',        
    '',
    '👉 *Finalizar* para terminar la conversacion'
    ];

const respuesta1 = addKeyword(['1']).addAnswer(
    ['- La escuela de Computación e Informática de CEDUC UCN, ofrece dos menciones: En jornada diurna *"Ciberseguridad"*, y en jornada vespertina *"Programación"*. '+mensajeRetorno],
    null,
    null
);

const respuesta2 = addKeyword(['2']).addAnswer(
    ['La jornada Diurna se imparte en horario de 8:30 a 18:00, mientras que la jornada vespertina se imparte desde las 19:00 a las 23:30 horas. '+mensajeRetorno ],
    null,
    null
);
const respuesta3 = addKeyword(['3']).addAnswer(
    ['La carrera en ambas menciones tiene una duración de 2 años y medio. '+mensajeRetorno], 
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