// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null;
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white-700 rounded-lg shadow-lg p-6 max-w-lg w-full max-h-[90vh] relative overflow-hidden">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2  w-8 h-8 flex items-center justify-center"
                >
                    <img src="/assets/close-btn.svg" alt="cross" className="transition ease-in-out duration-300 hover:scale-125"/>
                </button>
                <div className="overflow-y-auto max-h-[80vh] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent transform translate-x-1 my-4 pr-4">{content}</div>
            </div>
        </div>
    );
};

export default Modal;