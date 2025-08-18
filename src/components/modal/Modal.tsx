import { combineClasses } from "@/utils/utils";

import styles from "./styles.module.scss";

export type ModalProps = {
  children: React.ReactNode;
  className?: string;
  onBackdropClick?: () => void;
  onEscapeKeyDown?: () => void;
  onCloseClick?: () => void;
  onClose?: () => void;
  isOpen?: boolean;
};

export default function Modal({ children, className = "" }: ModalProps) {
  const classes: string = combineClasses(className, styles.modalContainer);
  return (
    //
    <div className="absolute inset-0 flex items-center justify-center z-1000 backdrop-blur-[2px]">
      <div className={classes}>{children}</div>
    </div>
  );
}
