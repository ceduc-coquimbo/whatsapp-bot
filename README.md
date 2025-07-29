# 🤖 WhatsApp Bot con Baileys – Proyecto Educativo CEDUC UCN

Este proyecto demuestra cómo construir un bot funcional de WhatsApp utilizando JavaScript y la librería [Baileys](https://github.com/WhiskeySockets/Baileys), facilitado a través del framework `@bot-whatsapp`.

Creado como parte de un taller formativo impulsado por **CEDUC UCN Sede Coquimbo**, este proyecto busca acercar la programación moderna a estudiantes mediante el uso de herramientas reales y casos prácticos aplicables a la vida diaria, el emprendimiento y la automatización.

---

## 🚀 ¿Qué hace este bot?

- Escucha mensajes entrantes de WhatsApp.
- Detecta palabras clave definidas por el usuario.
- Responde automáticamente con mensajes, menús o acciones predefinidas.
- Permite estructurar flujos conversacionales simples y personalizados.

---

## 📁 Estructura del Proyecto

```
.
├── app.js                # Archivo principal del bot
├── dynamicTexts.js       # Palabras clave y textos personalizados
├── package.json          # Dependencias y scripts del proyecto
└── README.md             # Este archivo
```

---

## 🛠️ Requisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v18+ recomendado)
- Acceso a un número de WhatsApp real (no funciona con números virtuales)
- Editor de código (como VS Code)
- Terminal o consola

---

## ⚙️ Instalación y ejecución

1. **Clona este repositorio:**

```bash
git clone https://github.com/ceduc-ucn/whatsapp-bot.git
cd whatsapp-bot
```

2. **Instala las dependencias:**

```bash
npm install
```

3. **Ejecuta el bot:**

```bash
node app.js
```

4. **Escanea el código QR** que se abrirá automáticamente en tu navegador usando la cámara de WhatsApp Web.

---

## 🧠 Personalización rápida

Puedes editar el archivo `dynamicTexts.js` para cambiar:

- Palabras clave que activa el bot (`palabrasEntrada`, `palabrasSalida`)
- Mensajes de bienvenida y despedida
- Menú y respuestas personalizadas

---

## 🧩 Tecnologías utilizadas

- [@bot-whatsapp/bot](https://www.npmjs.com/package/@bot-whatsapp/bot)
- [Baileys](https://github.com/WhiskeySockets/Baileys)
- Node.js
- JavaScript

---

## 📚 Créditos

Este proyecto fue desarrollado como recurso educativo por:

**Sebastián Solar Cuevas** **Bastián Vera Cordero**  
Docentes de la escuela de Computación e Informática de [**CEDUC UCN Sede Coquimbo**](https://www.ceduc.cl)

---

## 🪪 Licencia

Este proyecto se distribuye bajo la licencia MIT.  
Libre para aprender, modificar y compartir con fines educativos y no comerciales.

---

## ❤️ Contribuye

¿Te gustaría proponer mejoras o nuevas funcionalidades?  
¡Estás invitado a colaborar!

Haz un fork del repositorio, crea una nueva rama y abre un *pull request*.

---