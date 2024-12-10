// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null;
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white-700 rounded-lg shadow-lg p-6 max-w-lg w-full relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2  w-8 h-8 flex items-center justify-center"
                >
                    <img src="/assets/close-btn.svg" alt="cross" className="transition ease-in-out duration-300 hover:scale-125"/>
                </button>
                <div>{content}</div>
            </div>
        </div>
    );
};

export default Modal;