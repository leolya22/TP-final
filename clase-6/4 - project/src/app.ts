import {
  productos,
  Producto,
  ProductoResumen,
  ProductoSinImg,
  ProductoStock
} from "./types.js"

// --- MatchMedia ---
const mq: MediaQueryList = window.matchMedia("(max-width: 600px)")
mq.addEventListener("change", (e: MediaQueryListEvent) => {
  console.log(e.matches ? "📱 Layout móvil" : "💻 Layout escritorio")
})

// --- Render de galería con LazyLoad (usando ProductoResumen) ---
const gallery = document.getElementById("gallery") as HTMLElement
productos.forEach((p: ProductoResumen & { img?: string }) => {
  const div = document.createElement("div")
  div.className = "product"
  div.innerHTML = `
    <h3>${p.nombre}</h3>
    <img data-src="${(p as Producto).img}" alt="${p.nombre}">
    <p>Precio: $${p.precio}</p>
  `
  gallery.appendChild(div)
})

// IntersectionObserver para LazyLoad
const imgs: NodeListOf<HTMLImageElement> = document.querySelectorAll("img[data-src]")
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target as HTMLImageElement
      img.src = img.dataset.src ?? ""
      observer.unobserve(img)

      if ("Notification" in window && Notification.permission === "granted") {
        new Notification("Nuevo producto a la vista!", { body: img.alt })
      }
    }
  })
})
imgs.forEach(img => observer.observe(img))

// --- WebWorker para calcular stock ---
const worker = new Worker("./worker.js", { type: "module" })
const btn = document.getElementById("stockBtn") as HTMLButtonElement
const result = document.getElementById("result") as HTMLElement

btn.addEventListener("click", () => {
  // Enviamos solo los stocks al worker (ProductoStock)
  const stocks: ProductoStock[] = productos.map(p => ({ stock: p.stock }))
  worker.postMessage(stocks.map(s => s.stock))
})

// Recibimos el total de stock
worker.onmessage = (e: MessageEvent<number>) => {
  result.textContent = "Stock total disponible: " + e.data
}

// --- Ejemplo de uso de ProductoSinImg ---
const sinImg: ProductoSinImg[] = productos.map(({ img, ...rest }) => rest)
console.log("Productos sin imagen:", sinImg)
