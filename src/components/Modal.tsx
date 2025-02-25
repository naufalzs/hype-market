import { AnimatePresence } from "motion/react";
import Backdrop from "./Backdrop";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (isShow: boolean) => void;
} & React.ComponentPropsWithoutRef<"div">;

const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <Backdrop isShow={isOpen} onClick={() => setIsOpen(false)}>
          {children}
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;
