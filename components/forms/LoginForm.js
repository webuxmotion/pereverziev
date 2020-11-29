import { useForm } from "react-hook-form";

import { Button, FormGroup } from '../shared';

const LoginForm = ({ onSubmit, loading }) => {
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

      { loading && 'Sign In...' }
      { !loading &&
        <div className="g-pt-2">
          <Button>Login</Button>
        </div>
      }
    </form>
  )
}

export default LoginForm;
