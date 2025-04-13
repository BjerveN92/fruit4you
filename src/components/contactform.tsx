import { useState } from "react";

const Contactform = () => {
    const [formData, setFormData] = useState ({
        name: "",
        email:"",
        message:"",
    });


    // handle change , inputändringar

    const handleChange = (e: React.ChangeEvent <HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    // hantera formulär submit 

    const handleSubmit = (e: React.FormEvent ) => {
        e.preventDefault();
        console.log("Data submitted", formData );

        // nollställer formuläret när användaren skickar iväg "emailet"
        setFormData ({
            name: "",
            email:"",
            message:"",
        });
    };

    // här ska returnen vara

    return (
        <div className="form-container">
            <h2>Contact us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="text"
                    placeholder="name.."
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="e-mail.."
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="message.."
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};
export default Contactform;