import PropTypes from "prop-types";

import {
    FormInputContainer,
    FormInputLabel,
    GroupContainer,
} from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer {...otherProps} />
      {label && (
        <FormInputLabel className={otherProps.value?.length ? "shrink" : ""}>
          {label}
        </FormInputLabel>
      )}
    </GroupContainer>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormInput;
