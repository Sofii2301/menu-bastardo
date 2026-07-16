import { useLocation } from "react-router-dom";
import { PredictionTemplate } from "../components/templates/PredictionTemplate";

export default function PredictionPage() {

    const { state } = useLocation();

    return (
        <PredictionTemplate code={state?.code} />
    );

}