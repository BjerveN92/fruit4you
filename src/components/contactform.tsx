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

    // här ska returnen vara
}