const API = import.meta.env.VITE_API;

export async function submitPrediction(data){

    const response = await fetch(`${API}/prediction`,{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(data)

    });

    return await response.json();

}