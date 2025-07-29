const express = require('express')
const path = require('path')
const QRPortalWeb = require('@bot-whatsapp/portal')

function WebPortal({ port = 4000 } = {}) {
    const app = express()
    const originalConsoleLog = console.log
    const originalConsoleInfo = console.info    

    QRPortalWeb()
    console.log = () => {}
    console.info = () => {}

    setTimeout(() => {
        console.log = originalConsoleLog
        console.info = originalConsoleInfo
    }, 2000)

    app.use('/static', express.static(path.resolve('.')))

    app.get('/', (req, res) => {
        res.send(`
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <title>Conecta tu WhatsApp – CEDUC UCN</title>
                    <style>
                        :root { --color:#075e54; }
                        body { font-family: system-ui, sans-serif; margin:0; background:#f5f7f9; color:#111; }
                        header { background:var(--color); color:#fff; padding:16px 24px; display:flex; align-items:center; gap:12px; }
                        header img { height:32px; }
                        h1 { font-size:20px; margin:0; }
                        main { max-width:900px; margin:24px auto; padding:0 16px; }
                        .card { background:#fff; border:1px solid #e5e8eb; border-radius:14px; overflow:hidden; box-shadow: 0 8px 24px rgba(0,0,0,.06); }
                        .card-header { padding:16px 20px; border-bottom:1px solid #eef1f4; }
                        .card-header h2 { margin:0; font-size:18px; color:#222; }
                        .card-body { padding:24px; text-align:center; }
                        .tips { margin-top:16px; font-size:14px; color:#555; }
                        .badge { background:#e8f5f1; color:var(--color); padding:4px 8px; border-radius:999px; font-weight:600; font-size:12px; }
                    </style>
                    <script>
                        // Refresca la imagen cada 30 segundos para ver el nuevo QR
                        setInterval(() => {
                            const qrImg = document.getElementById('qr')
                            qrImg.src = '/static/bot.qr.png?ts=' + new Date().getTime()
                        }, 30000)
                    </script>
                </head>
                <body>
                    <header>
                        <img src="/static/public/logo_ceduc_blanco.png" alt="CEDUC UCN">
                        <h1>Conecta tu bot de WhatsApp – CEDUC UCN</h1>
                    </header>
                    <main>
                        <div class="card">
                            <div class="card-header">
                                <h2>Escanea el código QR <span class="badge">en vivo</span></h2>
                            </div>
                            <div class="card-body">
                                <img id="qr" src="/static/bot.qr.png" width="300" alt="Código QR">
                            </div>
                        </div>
                        <p class="tips">
                            Abre WhatsApp → Dispositivos vinculados → <b>Vincular dispositivo</b> y apunta la cámara al QR.<br>
                            Usa un número secundario cuando sea posible. Evita spam o envíos masivos.
                        </p>
                    </main>
                </body>
            </html>
        `)
    })

    app.listen(port, () => {        
        setTimeout(() => {
            console.log(`🌐 Portal ejecutanse en http://localhost:${port}`)
        }, 3000)
    })
}

module.exports = WebPortal