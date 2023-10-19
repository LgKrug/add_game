import { ButtonHTMLAttributes, HTMLProps } from "react";
import styles from "./styles.module.css";

type ButtonProps = {
  onClick: () => void;
  label?: string;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
}) => {
  return (
    <button className={styles.btn_blue}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
