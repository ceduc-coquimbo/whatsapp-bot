
const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const {
    palabrasEntrada,
    palabrasSalida,
    mensajeBienvenida,
    mensajeDespedida,
    menu,
    respuesta1,
    respuesta2,
    respuesta3
} = require('./dynamicTexts.js');

const WebPortal = require('./webPortal.js');

const flowSalida = addKeyword(palabrasSalida).addAnswer(mensajeDespedida);
const flowEntrada = addKeyword(palabrasEntrada)
    .addAnswer(mensajeBienvenida)
    .addAnswer(menu,null,null,[respuesta1, respuesta2, respuesta3, flowSalida])

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowEntrada])
    const adapterProvider = createProvider(BaileysProvider)

    // Creamos el bot normalmente
    await createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
    
    WebPortal({ port: 4000 })
}

main()