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

export function handlePredictionCode(
    code,
    navigate,
    validateCode
) {

    return async () => {

        if (code.trim().length !== 6) {
            alert("Ingresá un código válido.");
            return;
        }

        try {

            const response = await validateCode(code);

            if (!response.ok) {
                alert(response.message);
                return;
            }

            navigate("/prediction", {
                state: { code }
            });

        } catch {

            alert("No se pudo validar el código.");

        }

    };

}