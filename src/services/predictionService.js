const API = import.meta.env.VITE_API;

export async function validatePredictionCode(code) {

    const response = await fetch(`${API}/prediction/validate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ code })
    });

    return await response.json();

}

export async function submitPrediction(data) {

    const response = await fetch(`${API}/prediction`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return await response.json();

}