import express from "express"

const app = express()

app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*")
  next()
})

app.get("/", (request, response) => {
  response.json({ status: "Hola desde Express!" })
})

app.listen(3000, () => console.log(`Servidor en escucha por el puerto http://localhost:3000`))