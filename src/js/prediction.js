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
    validateCode,
    setLoading,
    setMessage
) {

    return async () => {

        if (code.trim().length !== 6) {
            setMessage({
                text: "Ingresá un código válido.",
                type: "danger"
            });
            return;
        }

        setLoading(true);
        setMessage({
            text: "",
            type: ""
        });

        try {

            const response = await validateCode(code);

            if (!response.ok) {
                setMessage({
                    text: response.message,
                    type: "danger"
                });
                return;
            }

            navigate("/prediction", {
                state: { code }
            });

        } catch {
            setMessage({
                text: "No se pudo validar el código.",
                type: "danger"
            });
        } finally {
            setLoading(false);
        }

    };

}