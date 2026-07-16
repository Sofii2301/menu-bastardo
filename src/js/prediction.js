export const initialPrediction = {
    name: "",
    contact: "",
    instagram: "",
    dni: "",
    argentina: "",
    rival: ""
};

export function handlePredictionChange(setForm) {
    return ({ target }) => {
        setForm(prev => ({
            ...prev,
            [target.name]: target.value
        }));
    };
}