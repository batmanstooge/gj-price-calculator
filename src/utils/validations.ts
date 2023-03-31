export function validateEmail(email: any) {
  if (email?.trim().length === 0) {
    throw new Error("Email is mandatory");
  }
  if (
    email?.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    ) == null
  ) {
    throw new Error("Invalid Email");
  }
}

export function validatePassword(password: any) {
  if (password?.trim().length === 0) {
    throw new Error("Invalid Password");
  }
}

export function validateRepeatPassword(password: any, repeatPassword: any) {
  if (password !== repeatPassword) {
    throw new Error("Passwords do not match");
  }
}
