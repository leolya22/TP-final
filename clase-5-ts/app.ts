const dropArea = document.getElementById("dropArea") as HTMLDivElement
const gallery = document.getElementById("gallery") as HTMLDivElement

type ImageItem = {
  id: string,
  src: string
}

let db: IDBDatabase

const request: IDBOpenDBRequest = indexedDB.open("db-images", 1)

request.onupgradeneeded = (e) => {
  db = (e.target as IDBOpenDBRequest).result
  db.createObjectStore("images", { keyPath: "id" })
}

request.onsuccess = e => {
  db = (e.target as IDBOpenDBRequest).result
  renderImages()
}

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault()
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault()
  if (!e.dataTransfer) return

  for (const file of e.dataTransfer.files) {
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      if (!e.target?.result) return
      const tx = db.transaction("images", "readwrite")
      tx.objectStore("images").add({ id: crypto.randomUUID(), src: e.target.result as string })
      tx.oncomplete = renderImages
    }
  }
})

const renderImages = () => {
  gallery.innerHTML = ""
  const tx = db.transaction("images", "readonly")
  tx.objectStore("images").getAll().onsuccess = (e) => {
    const dataImages = (e.target as IDBRequest<ImageItem[]>).result

    dataImages.forEach(({ src }) => {
      const div = document.createElement("div");
      const img = document.createElement("img");
      img.src = src;
      div.appendChild(img);
      gallery.appendChild(div);
    })
  }
}