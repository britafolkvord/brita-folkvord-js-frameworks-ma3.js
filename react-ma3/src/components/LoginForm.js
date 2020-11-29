import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";



const schema = yup.object().shape({
    Username: yup.string().required("Username is required"),
    Password: yup
        .string()
        .required()
        .min(4, "Password must contain a minimum of 4 characters")
        
});

function LoginForm() {
  const { register, handleSubmit, errors } = useForm({validationSchema: schema});
  const onSubmit = data => console.log(data);
  
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Username" name="Username" ref={register({required: true})} />
      {errors.Username && <p>{errors.Username.message}</p>}
      <input type="text" placeholder="Password" name="Password" ref={register({required: true, min: 4})} />
      {errors.Password && <p>{errors.Password.message}</p>}

      <input type="submit" />
    </form>
  );
}

export default LoginForm;