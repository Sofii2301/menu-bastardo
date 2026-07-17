export function WorldCupModal({ 
    show,
    onClose,
    onContinue,
    code,
    setCode,
    loading,
    message
}) {

    if (!show) return null;

    return (
        <>
            <div
                className="modal fade show"
                style={{
                    display: "block",
                    backgroundColor: "rgba(0,0,0,.6)"
                }}
            >
                <div className="modal-dialog modal-dialog-centered">

                    <div className="modal-content rounded-4 text-center">

                        <div className="modal-header border-0 d-flex justify-content-between">

                            <div className="w-100">
                                <h2 className="modal-title bebas-neue-regular">
                                    ¡Participá por una cena para el Día del Amigo!
                                </h2>
                            </div>

                            <button
                                className="btn-close"
                                onClick={onClose}
                            />

                        </div>

                        <div className="modal-body p-1">

                            <p className="text-muted tenor-sans-regular">
                                Ganá una cena para el día del amigo con tu compra en PedidosYa o en BASTARDO
                            </p>

                            <p className="text-muted tenor-sans-regular-options">
                                Ingresá el código de 6 caracteres y pronosticá el resultado de la final del Mundial. Si acertás, participás por el sorteo de una cena
                            </p>

                            <div className="px-5">
                                <input
                                    type="text"
                                    maxLength={6}
                                    className="form-control text-center text-uppercase"
                                    placeholder="ABC123"
                                    value={code}
                                    onChange={(e) =>
                                        setCode(
                                            e.target.value
                                                .toUpperCase()
                                                .replace(/[^A-Z0-9]/g, "")
                                        )
                                    }
                                />
                                {message.text && (
                                    <div className={`alert alert-${message.type} rounded-4 mx-4`}>
                                        {message.text}
                                    </div>
                                )}
                            </div>
                            

                        </div>

                        <div className="modal-footer border-0">

                            <button
                                className="btn btn-dark w-100"
                                onClick={onContinue}
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span
                                            className="spinner-border spinner-border-sm me-2"
                                            role="status"
                                        />
                                        Validando...
                                    </>
                                ) : (
                                    "Continuar"
                                )}
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}