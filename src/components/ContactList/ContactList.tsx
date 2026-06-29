import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../app/store";
import { useEffect, useState } from "react";
import { fetchContact, type Contact, deleteContact } from "../../app/contactSlice";
import Modal from "../Modal/Modal";


const ContactList = () => {

  const [clickedContact, setClickedContact] = useState<Contact>();
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch<AppDispatch>();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const showContactInfo = (contact: Contact) => {
    setClickedContact(contact);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDelete = async() => {
    if (!clickedContact) return;
    await dispatch(deleteContact(clickedContact.id))
    setIsOpen(false);

  };

  return (
    <>
      {contacts.map(contact => (
        <div
          onClick={() => showContactInfo(contact)}
          key={contact.id}
          className="card mb-3 contactCard"
          style={{ maxWidth: 500 }}>
          <div className="d-flex align-items-center">
            <div className="col-md-2">
              <img
                src={contact.img}
                className="img-fluid rounded-start"
                alt="contact-img"
                style={{ height: 70, width: 70 }}
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
      {clickedContact && (
        <Modal
          name={clickedContact.name}
          number={clickedContact.number}
          mail={clickedContact.mail}
          img={clickedContact.img}
          isOpen={isOpen}
          onClose={closeModal} 
          handleDelete={handleDelete}          
        />
      )}
    </>
  )
}

export default ContactList