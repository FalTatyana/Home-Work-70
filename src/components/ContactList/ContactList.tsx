import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../app/store";
import { useEffect } from "react";
import { fetchContact } from "../../app/contactSlice";

const ContactList = () => {
  
  const dispatch = useDispatch<AppDispatch>();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  useEffect(() => {
    dispatch(fetchContact());
}, [dispatch]);
  

  return (
    <>
    {contacts.map(contact => (
        <div key={contact.id} className="card mb-3 contactCard" style={{ maxWidth: 500 }}>
        <div className="d-flex align-items-center">
            <div className="col-md-2">
                <img
                    src="https://m.media-amazon.com/images/I/71exISXLWiL.jpg"
                    className="img-fluid rounded-start"
                    alt="contact-img"
                    style={{ height: 70, width: 70}}
                />
            </div>
            <div className="col-md-10 ms-3">
                <div className="card-body p-0">
                    <h5 className="card-title">{contact.name}</h5>
                </div>
            </div>
        </div>
    </div>
    ))}
    </>
  )
}

export default ContactList