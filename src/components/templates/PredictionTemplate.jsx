import { PredictionForm } from "../organisms/PredictionForm";

export function PredictionTemplate(props) {

    return (
        <div className="container py-5 d-flex justify-content-center">
            <PredictionForm {...props} />
        </div>
    );

}