import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="px-6 py-4 bg-gray-200 border-b">
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
          <div className="p-6">{children}</div>
          <div className="px-6 py-4 bg-gray-100 border-t">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;