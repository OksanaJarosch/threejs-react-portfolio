const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <div className="social-icon">
                    <a href="https://github.com/OksanaJarosch" className="flex justify-center items-center" target="_blank"
                       rel="noopener noreferrer">
                        <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
                    </a>
                </div>

                <div  className="social-icon">
                    <a href="https://www.linkedin.com/in/oksana-jarosch/" className="flex justify-center items-center" target="_blank"
                       rel="noopener noreferrer">
                        <img src="/assets/linkedin-icon.svg" alt="linkedin" className="w-1/2 h-1/2"/>
                    </a>
                </div>
            </div>
        </section>
    )
};

export default Footer;
