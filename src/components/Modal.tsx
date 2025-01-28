import React, { useEffect } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  children: React.ReactNode;
  actionBar: React.ReactNode;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, actionBar, onClose }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed inset-0 bg-zinc-900 opacity-90"
        onClick={() => onClose()}
      />
      <div className="fixed inset-[20%] flex max-h-80 flex-col justify-between overflow-auto rounded-xl bg-zinc-100 px-5 pt-5 shadow-md shadow-slate-600">
        <div>{children}</div>
        <div className="sticky bottom-0 flex w-full justify-end bg-zinc-100 py-3">
          {actionBar}
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")!,
  );
};

export default Modal;
