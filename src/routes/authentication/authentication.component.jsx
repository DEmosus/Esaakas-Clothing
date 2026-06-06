import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
    AuthEyebrow,
    AuthPageTitle,
    AuthPageWrapper,
    AuthenticationContainer,
    Divider,
} from "./authentication.styles.jsx";

const Authentication = () => (
  <AuthPageWrapper>
    <AuthEyebrow>Account</AuthEyebrow>
    <AuthPageTitle>
      Welcome <strong>Back</strong>
    </AuthPageTitle>
    <AuthenticationContainer>
      <SignInForm />
      <Divider />
      <SignUpForm />
    </AuthenticationContainer>
  </AuthPageWrapper>
);

export default Authentication;
