import { useParams } from "react-router-dom";
import FormContact from "../FormContact/FormContact"
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

const EditContact = () => {

  const { id } = useParams();
  const contact = useSelector((state: RootState) => state.contacts.contacts);
  const contactToEdit = contact.find(c => c.id === id);

  if (!contactToEdit) {
    return <h3>Loading...</h3>;
}
  
  return (
    <>
    <FormContact isEdit={true} contact={contactToEdit}/>
    </>
  )
}

export default EditContact