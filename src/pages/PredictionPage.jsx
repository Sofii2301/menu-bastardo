import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

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

            if (response.ok) {

                alert("¡Participación registrada con éxito!");

                navigate("/");

            } else {

                alert(response.message);

            }

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