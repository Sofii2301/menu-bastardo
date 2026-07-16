export const initialPrediction = {
    name: "",
    contact: "",
    instagram: "",
    argentina: "",
    españa: ""
};

export function handlePredictionChange(setForm) {
    return ({ target }) => {
        setForm(prev => ({
            ...prev,
            [target.name]: target.value
        }));
    };
}

export function validatePrediction(form){

    if(!form.name.trim())
        return "Ingresá tu nombre.";

    if(!form.contact.trim())
        return "Ingresá un teléfono.";

    if(form.argentina === "")
        return "Ingresá el resultado.";

    if(form.españa === "")
        return "Ingresá el resultado.";

    return null;

}