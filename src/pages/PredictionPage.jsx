import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { PredictionTemplate } from "../components/templates/PredictionTemplate";
import {
    initialPrediction,
    handlePredictionChange,
    validatePrediction
} from "../js/prediction";
import { submitPrediction } from "../services/predictionService";
import { SuccessCard } from "../components/molecules/SuccessCard";

export default function PredictionPage() {

    const navigate = useNavigate();
    const { state } = useLocation();

    const [form, setForm] = useState(initialPrediction);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({
        text: "",
        type: ""
    });

    useEffect(() => {
        if (!state?.code) {
            navigate("/");
        }
    }, [state, navigate]);

    const handleChange = handlePredictionChange(setForm);

    const handleSubmit = async () => {

        const error = validatePrediction(form);

        if (error) {
            setMessage({
                text: error,
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

            const response = await submitPrediction({
                code: state?.code,
                ...form
            });

            if (!response.ok) {
                setMessage({
                    text: response.message,
                    type: "danger"
                });

                return;
            } 
            setSubmitted(true);
        } catch {
            setMessage({
                text: "Error al enviar la participación.",
                type: "danger"
            });
        } finally {
            setLoading(false);
        }

    };
    if (submitted) {
        return <SuccessCard onBack={() => navigate("/")} />;
    }
    return (
        <PredictionTemplate
            code={state?.code}
            form={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
            loading={loading}
            message={message}
        />
    );

}