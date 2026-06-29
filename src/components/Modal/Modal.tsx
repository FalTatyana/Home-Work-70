interface Props {
    name: string
    number: number
    mail: string
    img: string
    isOpen: boolean
    onClose: () => void
    handleDelete: () => void
}

const Modal = ({ name, number, mail, img, isOpen, onClose, handleDelete }: Props) => {



    return (
        <>
            {isOpen && <div className="modal-backdrop fade show"></div>}
            {isOpen && (
                <div className="modal show d-block" tabIndex={-1}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Contact</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={onClose}
                                >
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="d-flex align-items-center">
                                    <div className="col-md-2">
                                        <img
                                            src={img}
                                            className="img-fluid rounded-start"
                                            alt="contact-img"
                                            style={{ height: 70, width: 70 }}
                                        />
                                    </div>
                                    <div className="col-md-10 ms-3">
                                        <p className="modal-title">Name: <b>{name}</b></p>
                                        <p className="mt-2 mb-0"><i className="bi bi-telephone-fill me-2"></i> {number}</p>
                                        <p className="m-0"><i className="bi bi-envelope-fill me-2"></i> {mail}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Edit</button>
                                <button onClick={handleDelete} type="button" className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal