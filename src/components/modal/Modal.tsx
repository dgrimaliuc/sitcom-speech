import { combineClasses } from "@/utils/utils";

import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export type ModalProps = {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onBackdropClick: () => void;
  onEscapeKeyDown?: () => void;
  onCloseClick: () => void;
  onClose?: () => void;
};

export default function Modal({
  isOpen,
  children,
  className = "",
  onCloseClick = () => {},
  onEscapeKeyDown = () => {},
  onBackdropClick = () => {},
}: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onEscapeKeyDown();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!children || !isOpen) return null;
  const classes: string = combineClasses(className, styles.modalContainer);
  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-1000 backdrop-blur-[3px] backdrop-brightness-50"
      onClick={onBackdropClick}
    >
      <div className={classes} onClick={(e) => e.stopPropagation()}>
        <button onClick={onCloseClick} className="absolute top-2 right-2">
          <FontAwesomeIcon
            icon={faXmark}
            className="absolute top-2 right-2 text-xl text-gray-500 cursor-pointer hover:text-gray-400"
          />
        </button>
        {children}
      </div>
    </div>
  );
}
