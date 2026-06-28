const Modal = () => {
    return (
        <div className="modal" tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Contact Name</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex align-items-center">
                            <div className="col-md-2">
                                <img
                                    src="https://m.media-amazon.com/images/I/71exISXLWiL.jpg"
                                    className="img-fluid rounded-start"
                                    alt="contact-img"
                                    style={{ height: 70, width: 70 }}
                                />
                            </div>
                            <div className="col-md-10 ms-3">
                                <p>Contact number</p>
                                <p>Contact mail</p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Edit</button>
                        <button type="button" className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal