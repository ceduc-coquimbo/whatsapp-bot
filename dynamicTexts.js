// Definición de palabras clave de entrada y salida
const { addKeyword } = require('@bot-whatsapp/bot')
const palabrasEntrada = ['HOLA', 'Hola', 'HoLa', 'ola', 'hola', 'ole', 'alo', 'menu', 'Menu', 'MENU']
const palabrasSalida = ['finalizar','Finalizar','fin','terminar','Terminar']

const mensajeBienvenida = "Hola,buenas. nuestra promociones son; 2 hamburgesas x 3.500 1 papas grandes 2.000 ¿que desea pedir?"
const mensajeDespedida = "Gracias por tu contacto. Recuerda visitarnos en *www.ceduc.cl*"

const mensajeRetorno = 'Escribe *menu* para volver al menú principal';

const menu = [
    '*Que desea saber: * 🌀',  
    '👉 *1* ¿cuales son los metodos de pago?',
    '',
    '👉 *2* ¿hasta que hora atienden? ',
    '',
    '👉 *3* ¿Cuanto tiempo demorara el pedido? ',        
    '',
    '👉 *Finalizar* para terminar la conversacion'
    ];

const respuesta1 = addKeyword(['1']).addAnswer(
    ['efectivo y trasferencia. '+mensajeRetorno],
    null,
    null
);

const respuesta2 = addKeyword(['2']).addAnswer(
    ['atendemos hasta las 12:00 pm '+mensajeRetorno ],
    null,
    null
);
const respuesta3 = addKeyword(['3']).addAnswer(
    ['entre 45 minutos aprox '+mensajeRetorno], 
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