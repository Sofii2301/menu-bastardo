import arg from "../../../assets/arg.png";
import esp from "../../../assets/esp.png";
import "./predictionForm.css"

export function PredictionForm({
    code,
    form,
    onChange,
    onSubmit,
    loading,
    message
}) {
    return (
        <div className="card border-0 shadow rounded-4 p-4 tenor-sans-regular col-lg-8 col-md-12">
            {message.text && (
                <div className={`alert alert-${message.type} rounded-4`}>
                    {message.text}
                </div>
            )}
            <h1 className="bebas-neue-regular text-center mb-2">
                Participá por una cena
            </h1>

            <p className="text-center mb-4">
                Completá el formulario y acertá el resultado de la final.
            </p>

            <div className="alert alert-dark text-center rounded-4">

                <small className="text-uppercase d-block">
                    Código
                </small>

                <h3 className="mb-0 bebas-neue-regular">
                    {code}
                </h3>

            </div>

            <div className="mb-3">

                <label className="form-label">
                    Nombre y apellido
                </label>

                <input
                    className="form-control"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                />

            </div>

            <div className="mb-3">

                <label className="form-label">
                    Whatsapp
                </label>

                <input
                    className="form-control"
                    name="contact"
                    value={form.contact}
                    onChange={onChange}
                />

            </div>

            <div className="mb-3">

                <label className="form-label">
                    Instagram
                </label>

                <div className="input-group">

                    <span className="input-group-text">
                        @
                    </span>

                    <input
                        className="form-control"
                        name="instagram"
                        value={form.instagram}
                        onChange={onChange}
                    />

                </div>

            </div>

            <hr />

            <h4 className="bebas-neue-regular text-center mb-4">
                ¿Cómo creés que termina la final?
            </h4>

            <div className="row text-center align-items-center">

                <div className="col">

                    <div className="selection d-flex align-items-center justify-content-center gap-2 mb-3">
                        <img
                            src={arg}
                            alt="Argentina"
                            width={30}
                        />
                        <h4 className="bebas-neue-regular text-center">
                            Argentina
                        </h4>
                    </div>

                    <input
                        type="number"
                        min="0"
                        className="form-control text-center"
                        name="argentina"
                        value={form.argentina}
                        onChange={onChange}
                    />

                </div>

                <div className="col-2">

                    <h3>-</h3>

                </div>

                <div className="col d-flex flex-column align-items-center">

                    <div className="selection d-flex align-items-center justify-content-center gap-2 mb-3">
                        <img
                            src={esp}
                            alt="España"
                            width={30}
                        />
                        <h4 className="bebas-neue-regular text-center">
                            España
                        </h4>
                    </div>
                    

                    <input
                        type="number"
                        min="0"
                        className="form-control text-center"
                        name="españa"
                        value={form.españa}
                        onChange={onChange}
                    />

                </div>

            </div>

            <button
                className="btn btn-dark w-100 mt-5"
                onClick={onSubmit}
                disabled={loading}
            >
                {loading ? (
                    <>
                        <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                        />
                        Enviando...
                    </>
                ) : (
                    "Participar"
                )}
            </button>
        </div>
    );

}