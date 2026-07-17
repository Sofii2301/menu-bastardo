import { TextLabel } from '../atoms/TextLabel';
import { PriceTag } from '../atoms/PriceTag'
import { OptionCard } from './OptionCard';

export function SuccessCard({ onBack }) {
    return (
        <div className="card border-0 shadow rounded-4 p-5 text-center">

            <div className="display-1 mb-3">
                ✅
            </div>

            <h2 className="bebas-neue-regular">
                ¡Participación registrada!
            </h2>

            <p className="tenor-sans-regular mt-3">
                Ya estás participando por una cena para el Día del Amigo.
                ¡Mucha suerte!
            </p>

            <button
                className="btn btn-dark mt-4"
                onClick={onBack}
            >
                Volver al menú
            </button>

        </div>
    );
}