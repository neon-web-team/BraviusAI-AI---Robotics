import { useEffect } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";

const SuccessModal = ({ onClose, open }) => {
  const ref = useOutsideClick(onClose,open);

  useEffect(() => {
    if (!open) return;
    const modalTimer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(modalTimer);
  }, [onClose, open]);
  return createPortal(
    <div
      id="footerModal"
      className="fixed inset-0 items-center justify-center bg-black bg-opacity-50 z-50 px-3 flex"
    >
      <div
        ref={ref}
        className="bg-background-blurBg rounded-lg overflow-hidden shadow-lg w-full max-w-md p-6"
      >
        <img
          src="/Confirmation_1.gif"
          alt="submitIcon"
          className="mx-auto w-24"
        />
        <div className="flex flex-col gap-3 items-center text-center mt-4 text-white">
          <h3 className="text-lg font-semibold">Response Submitted</h3>
          <h6 className="text-sm mt-2">
            Your details have been successfully submitted. Thanks!
          </h6>
        </div>
        <button
          id="closeFooterModal"
          onClick={onClose}
          className="hover1 mt-8 mx-auto"
        >
          Close
        </button>
      </div>
    </div>,document.body
  );
};
export default SuccessModal;
