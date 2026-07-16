import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { PredictionTemplate } from "../components/templates/PredictionTemplate";
import {
    initialPrediction,
    handlePredictionChange,
    validatePrediction
} from "../js/prediction";
import { submitPrediction } from "../services/predictionService";

export default function PredictionPage() {

    const navigate = useNavigate();
    const { state } = useLocation();

    const [form, setForm] = useState(initialPrediction);

    useEffect(() => {
        if (!state?.code) {
            navigate("/");
        }
    }, [state, navigate]);

    const handleChange = handlePredictionChange(setForm);

    const handleSubmit = async () => {

        const error = validatePrediction(form);

        if (error) {
            alert(error);
            return;
        }

        try {

            const response = await submitPrediction({
                code: state?.code,
                ...form
            });

            if (!response.ok) {
                alert(response.message);
            } 
            alert("¡Participación registrada con éxito!");
            navigate("/");

        } catch {

            alert("Error al enviar la participación.");

        }

    };

    return (
        <PredictionTemplate
            code={state?.code}
            form={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    );

}