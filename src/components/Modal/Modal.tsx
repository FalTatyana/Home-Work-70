import { useNavigate } from "react-router-dom";

interface Props {
    name: string
    number: string
    mail: string
    img: string
    isOpen: boolean
    onClose: () => void
    handleDelete: () => void
    id: string
};

const Modal = ({ name, number, mail, img, isOpen, onClose, handleDelete, id }: Props) => {

    const navigate = useNavigate();

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
                                        <p className="mt-2 mb-0"><i className="bi bi-telephone text-success me-2"></i> {number}</p>
                                        <p className="m-0"><i className="bi bi-envelope text-success me-2"></i> {mail}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary"
                                    data-bs-dismiss="modal"
                                    onClick={() => {
                                        onClose();
                                        navigate(`/edit-contact/${id}`);
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={handleDelete}
                                    type="button"
                                    className="btn btn-outline-danger">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
};

export default Modal;