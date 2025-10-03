import express from "express";
import cors from "cors"
const app = express();
app.use(cors())
const PORT = 4000;

const cache = {};

// Simula una fuente de datos lenta (ej. BD)
function getData(id) {
  console.log(cache)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, text: `Dato número ${id}`, time: new Date().toLocaleTimeString() });
    }, 2000); // tarda 2s en responder
  });
}

// Endpoint con caché
app.get("/data/:id", async (req, res) => {
  const { id } = req.params;
  console.log(cache)

  if (cache[id]) {
    console.log("📦 Desde caché");
    return res.json({ ...cache[id], cached: true });
  }

  console.log("⚙️ Consultando fuente lenta...");
  const result = await getData(id);
  cache[id] = result;
  res.json({ ...result, cached: false });
});

app.listen(PORT, () => console.log(`✅ Backend en http://localhost:${PORT}`));
