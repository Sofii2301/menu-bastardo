import { PredictionForm } from "../organisms/PredictionForm";

export function PredictionTemplate({ code }) {
    return (
        <div className="container py-5 d-flex justify-content-center">
            <PredictionForm code={code}/>
        </div>
    );
}