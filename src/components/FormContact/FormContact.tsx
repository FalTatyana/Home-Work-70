import { useState, type ChangeEvent, type SubmitEvent, useEffect } from "react";
import { addContact, fetchContact, type Contact, editContact } from "../../app/contactSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../app/store";
import { toast } from "react-toastify";

interface Props {
    isEdit?: boolean
    contact?: Contact
};

const FormContact = ({ isEdit = false, contact }: Props) => {

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [form, setForm] = useState<Contact>({
        id: '',
        img: '',
        mail: '',
        number: '',
        name: ''
    });

    useEffect(() => {
        if (contact) {
            setForm(contact);
        }
    }, [contact]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isEdit) {
            await dispatch(editContact(form))
            navigate("/");
            return;
        };

        if (
            !form.img.trim() ||
            !form.mail.trim() ||
            !form.name.trim() ||
            !form.number.trim()) {
            toast.error('Enter all data')
            return;
        };

        const newContact = {
            name: form.name,
            number: form.number,
            mail: form.mail,
            img: form.img,
        };

        await dispatch(addContact(newContact));
        await dispatch(fetchContact());
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <h4>{isEdit ? "Edit contact" : "Add new contact"}</h4>
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Name</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="name"
                        id='name'
                        name="name"
                        onChange={handleChange}
                        value={form.name}
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Phone</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="+996 550 550 550"
                        id='number'
                        name="number"
                        onChange={handleChange}
                        value={form.number}
                    />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Email</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="example@gmail.com"
                    id='mail'
                    name="mail"
                    onChange={handleChange}
                    value={form.mail}
                />
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress2">Photo</label>
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="photo link"
                    id='img'
                    name="img"
                    onChange={handleChange}
                    value={form.img}
                />
            </div>
            <p>Photo Preview</p>
            <div
                style={{
                    height: 100,
                    width: 100,
                    border: "1px solid grey",
                    borderRadius: 10
                }}
                className="mb-2">
                {form.img
                    ?
                    <img
                        src={form.img}
                        alt="img"
                        style={{ height: 98, width: 98, borderRadius: 10 }} />
                    :
                    <img
                        src="https://m.media-amazon.com/images/I/71exISXLWiL.jpg"
                        alt="img"
                        style={{ height: 98, width: 98, borderRadius: 10 }} />
                }
            </div>
            <button type="submit" className="btn btn-outline-success me-3">Save</button>
            <NavLink to={'/'} type="button" className="btn btn-outline-primary">Back to contacts</NavLink>
        </form>
    )
};

export default FormContact;