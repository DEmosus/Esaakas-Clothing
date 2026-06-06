import PropTypes from "prop-types";
import { BUTTON_TYPES_CLASSES } from "./button-classes";
import {
  BaseButton,
  ButtonSpinner,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

const BUTTON_MAP = {
  [BUTTON_TYPES_CLASSES.base]: BaseButton,
  [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
  [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
};

const Button = ({
  children,
  buttonType = BUTTON_TYPES_CLASSES.base,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = BUTTON_MAP[buttonType] ?? BaseButton;

  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.oneOf(Object.values(BUTTON_TYPES_CLASSES)),
  isLoading: PropTypes.bool,
};

export default Button;
