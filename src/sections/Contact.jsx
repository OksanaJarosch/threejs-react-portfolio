import {useRef, useState} from "react";
// import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value});
    };
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        alert('This form is not connected to any provider or service');
        setForm({
            name: '',
            email: '',
            message: ''
        });
        setLoading(false);

        // ToDo add .env with ID's
        // setLoading(true);
        // try {
        //     await emailjs.send('', ' ', {from_name: form.name, to_name: 'Oksana', from_email: form.email, to_email: 'ok.jarosch@gmail.com', message: form.message}, ' ');

        //     setLoading(false);
        //     setForm({
        //         name: '',
        //         email: '',
        //         message: ''
        //     });
        //     alert('Your message has been sent');
        // } catch (error) {
        //     setLoading(false);
        //     console.error(error);
        //     alert('Something went wrong');
        // }
    };

    return (
        <section id="contact" className="c-space my-20">
            {/*<h3 className="head-text">Contact Me</h3>*/}

            <div className="relative flex items-center justify-center flex-col">
                <div className="absolute inset-0 bg-black-200 rounded-lg"></div>
                {/*<img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen"/>*/}

                <div className="contact-container md:py-10 py-5">
                    <h3 className="head-text">Let&apos;s talk</h3>
                    <p className="text-lg text-white-600 mt-3">Whether you&apos;re looking to build a new website, improve your existing platform,or bring a unique project to life, I&apos;m here to help.</p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="John Doe"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="johndoe@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="This form is solely for demonstrating my skills in frontend development. It is not connected to any provider or service, so any data entered is neither processed nor forwarded."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow" className="field-btn_arrow"/>
                        </button>

                    </form>
                </div>
            </div>
        </section>
    )
};

export default Contact;
