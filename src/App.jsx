import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import { useState } from "react";
import Modal from "./components/Modal.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
// import Experience from "./sections/Experience.jsx";

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const openModal = (type) => {
        if (type === 'impressum') {
            setModalContent(
                <div>
                    <h2 className="text-lg font-bold mb-5">In Bearbeitung...</h2>
                    <p>An dieser Stelle wird das Impressum stehen.</p>
                </div>
            );
        } else if (type === 'datenschutz') {
            setModalContent(
                <PrivacyPolicy />
            );
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent('');
    };
    
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Clients />
            {/* <Experience /> */}
            <Contact />
            <Footer openModal={openModal}/>

            {isModalOpen && (<Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent}/>)}
            
        </main>
    )
};

export default App;