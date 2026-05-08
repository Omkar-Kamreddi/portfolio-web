import { useState } from "react";

import {
    Mail,
    User,
    MessageSquare,
    Send
} from "lucide-react";

import toast from "react-hot-toast";

import { sendContactMessage } from "../../api/contactApi";

function Contact() {

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            await sendContactMessage(formData);

            toast.success("Message Sent Successfully");

            setFormData({
                name: "",
                email: "",
                message: "",
            });

        } catch (error) {

            toast.error("Failed To Send Message");

        } finally {

            setLoading(false);

        }

    };

    return (

        <section
            id="contact"
            className="py-28 px-6 bg-gradient-to-b from-orange-50 via-white to-sky-50 relative overflow-hidden"
        >

            {/* GLOW EFFECTS */}

            <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 blur-3xl rounded-full"></div>

            <div className="absolute bottom-20 right-10 w-72 h-72 bg-sky-200/30 blur-3xl rounded-full"></div>

            <div className="max-w-4xl mx-auto relative z-10">

                {/* TITLE */}

                <div className="text-center mb-20">

                    <p className="text-orange-500 uppercase tracking-[6px] font-semibold mb-4">
                        Contact
                    </p>

                    <h2 className="text-5xl md:text-6xl font-black text-slate-800">
                        Get In Touch
                    </h2>

                    <p className="text-slate-600 text-lg mt-6 max-w-2xl mx-auto leading-8">

                        Feel free to contact me for opportunities,
                        collaborations, or backend/full stack development work.

                    </p>

                </div>

                {/* CONTACT FORM */}

                <div className="bg-white/80 backdrop-blur-xl border border-orange-100 rounded-[40px] p-8 md:p-14 shadow-2xl shadow-orange-100/40">

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-8"
                    >

                        {/* NAME */}

                        <div>

                            <label className="text-slate-700 font-semibold mb-3 block">

                                Full Name

                            </label>

                            <div className="relative">

                                <User
                                    className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-400"
                                    size={22}
                                />

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-orange-50 border border-orange-100 rounded-2xl py-5 pl-14 pr-5 outline-none focus:border-orange-400 text-slate-700 transition duration-300"
                                />

                            </div>

                        </div>

                        {/* EMAIL */}

                        <div>

                            <label className="text-slate-700 font-semibold mb-3 block">

                                Email Address

                            </label>

                            <div className="relative">

                                <Mail
                                    className="absolute left-5 top-1/2 -translate-y-1/2 text-orange-400"
                                    size={22}
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-orange-50 border border-orange-100 rounded-2xl py-5 pl-14 pr-5 outline-none focus:border-orange-400 text-slate-700 transition duration-300"
                                />

                            </div>

                        </div>

                        {/* MESSAGE */}

                        <div>

                            <label className="text-slate-700 font-semibold mb-3 block">

                                Message

                            </label>

                            <div className="relative">

                                <MessageSquare
                                    className="absolute left-5 top-6 text-orange-400"
                                    size={22}
                                />

                                <textarea
                                    rows="6"
                                    name="message"
                                    placeholder="Write your message..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-orange-50 border border-orange-100 rounded-2xl py-5 pl-14 pr-5 outline-none focus:border-orange-400 text-slate-700 transition duration-300 resize-none"
                                />

                            </div>

                        </div>

                        {/* BUTTON */}

                        <button
                            disabled={loading}
                            className="w-full bg-[#FDBA74] hover:bg-orange-400 text-slate-800 py-5 rounded-2xl font-bold text-lg transition duration-300 flex items-center justify-center gap-3 shadow-lg shadow-orange-200 disabled:opacity-50"
                        >

                            <Send size={22} />

                            {loading ? "Sending..." : "Send Message"}

                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}

export default Contact;