import {
    SpinnerContainer,
    SpinnerLabel,
    SpinnerOverlay,
} from "./spinner.styles";

const Spinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
    <SpinnerLabel>Loading</SpinnerLabel>
  </SpinnerOverlay>
);

export default Spinner;
