// La pantalla de carga (index.html) muestra el video de la animación del logo.
// Se oculta cuando el menú está listo y el video terminó, con estos límites
// (ms desde que abrió la página):
const MIN_VISIBLE_MS = 1800; // nunca antes, para que se vea la animación
const MAX_VISIBLE_MS = 4000; // nunca después, por si el video no se reproduce

function videoFinished(video) {
    return new Promise((resolve) => {
        if (!video || video.ended || video.error) return resolve();
        video.addEventListener("ended", resolve, { once: true });
        video.addEventListener("error", resolve, { once: true });
    });
}

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, Math.max(0, ms)));
}

export async function hideSplash() {
    const el = document.getElementById("splash");
    if (!el || el.dataset.hiding) return;
    el.dataset.hiding = "true";

    const now = performance.now();
    await Promise.race([
        Promise.all([
            videoFinished(el.querySelector("video")),
            wait(MIN_VISIBLE_MS - now)
        ]),
        wait(MAX_VISIBLE_MS - now)
    ]);

    el.classList.add("splash-hide");
    setTimeout(() => el.remove(), 500);
}
