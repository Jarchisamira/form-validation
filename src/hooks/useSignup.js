export function useSignup() {
  const signupInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const onSignup = (values) => {
    alert("Registration completed successfully");
  };

  return { onSignup, signupInitialValues };
}
