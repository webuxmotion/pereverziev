import { useForm } from "react-hook-form";

import { Button, FormGroup } from '../shared';

const RegisterForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup
        id="email"
        type="email"
        name="email"
        label="Email"
        refProp={register}
      />
      <FormGroup
        id="password"
        type="password"
        name="password"
        label="Password"
        refProp={register}
      />
      <FormGroup
        id="passwordConfirmation"
        type="password"
        name="passwordConfirmation"
        label="Password Confirmation"
        refProp={register}
      />
      <div className="g-pt-2">
        <Button>Register</Button>
      </div>
    </form>
  )
}

export default RegisterForm;
