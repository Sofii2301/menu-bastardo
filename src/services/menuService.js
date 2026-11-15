const API = import.meta.env.VITE_API;

export async function getMenu() {
    const response = await fetch(`${API}/menu`);

    if (!response.ok) {
        throw new Error(`Error ${response.status} al obtener el menú`);
    }

    const data = await response.json();

    if (!data.ok || !Array.isArray(data.items)) {
        throw new Error(data.message || "Respuesta inválida del menú");
    }

    return data.items;
}
