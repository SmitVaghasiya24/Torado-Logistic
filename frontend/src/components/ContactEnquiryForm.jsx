import { useState } from "react";
import axios from "axios";
import GlitchButton from "../components/GlitchButton";
import { toast } from "sonner";

function ContactEnquiryForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        agree_terms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.agree_terms) {
            toast.error("Please agree to Terms & Conditions");
            return;
        }

        try {
            await axios.post(
                "http://localhost:5000/api/user/contact_enquiry",
                formData
            );

            toast.success("Message sent successfully");

            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
                agree_terms: false,
            });
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="input placeholder-animate text-base"
                value={formData.name}
                onChange={handleChange}
            />

            <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="input placeholder-animate text-base"
                value={formData.email}
                onChange={handleChange}
            />

            <input
                type="text"
                name="phone"
                placeholder="Phone No"
                className="input placeholder-animate text-base"
                value={formData.phone}
                onChange={handleChange}
            />

            <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="input placeholder-animate text-base resize-none"
                value={formData.message}
                onChange={handleChange}
            />

            <label className="flex items-center gap-3 text-sm text-gray-700">
                <input
                    type="checkbox"
                    name="agree_terms"
                    checked={formData.agree_terms}
                    onChange={handleChange}
                />
                I agree to all Terms & Conditions
            </label>

            <GlitchButton
                type="submit"
                className="px-8 py-4 text-base bg-[#FB695E] text-white hover:bg-[#3CB879] shadow-[0_4px_15px_rgba(251,105,94,0.35)] transition-colors duration-300 ease-in-out"
            >
                Send Your Message
            </GlitchButton>

        </form>
    );
}

export default ContactEnquiryForm;
