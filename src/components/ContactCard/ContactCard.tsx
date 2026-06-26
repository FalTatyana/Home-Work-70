
const ContactCard = () => {
    return (
        <div className="card mb-3 p-2" style={{maxWidth: 500}}>
            <div className="d-flex align-items-center">
                <div className="col-md-1">
                    <img 
                    src="https://m.media-amazon.com/images/I/71exISXLWiL.jpg" 
                    className="img-fluid rounded-start" 
                    alt="contact-img"
                    style={{maxHeight: 50}}
                    />
                </div>
                <div className="col-md-11 ms-3">
                    <div className="card-body p-0">
                        <h5 className="card-title">Contact Name</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard