"use strict";
const dropArea = document.getElementById("dropArea");
const gallery = document.getElementById("gallery");
let db;
const request = indexedDB.open("db-images", 1);
request.onupgradeneeded = (e) => {
    db = e.target.result;
    db.createObjectStore("images", { keyPath: "id" });
};
request.onsuccess = e => {
    db = e.target.result;
    renderImages();
};
dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
});
dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    if (!e.dataTransfer)
        return;
    for (const file of e.dataTransfer.files) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            var _a;
            if (!((_a = e.target) === null || _a === void 0 ? void 0 : _a.result))
                return;
            const tx = db.transaction("images", "readwrite");
            tx.objectStore("images").add({ id: crypto.randomUUID(), src: e.target.result });
            tx.oncomplete = renderImages;
        };
    }
});
const renderImages = () => {
    gallery.innerHTML = "";
    const tx = db.transaction("images", "readonly");
    tx.objectStore("images").getAll().onsuccess = (e) => {
        const dataImages = e.target.result;
        dataImages.forEach(({ src }) => {
            const div = document.createElement("div");
            const img = document.createElement("img");
            img.src = src;
            div.appendChild(img);
            gallery.appendChild(div);
        });
    };
};
