import { useState } from "react";

const Contact = () => {
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

        // nollställer formuläret
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
            <form className="contact-form">
                <input
                    type="text"
                    name="text"
                    required
                />
                <input
                    type="email"
                    name="email"
                    required
                />
                <textarea
                    name="message"
                    required
                />
            </form>
        </div>
    );
};