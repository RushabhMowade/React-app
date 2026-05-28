import { useState } from "react";
import {useForm} from 'react-hook-form';

export default function SignupForm() {
    // const [Email,setEmail] = useState("");
    // const [Password,setPassword] = useState("");
    const {register,handleSubmit,formState:{errors}}=useForm();
  
    function onSubmit(event) {
    //event.preventDefault(); react-hook-form already handles preventDefault() internally.
    alert(`submitted with email: ${event.email} and password: ${event.password}`);
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Email:
            <input type="email" placeholder="you@example.com"
            {...register("email",{required: "Email is required"})}
            //onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          {errors.email && ( 
            <p style = {{color:'crimson'}}>{errors.email.message}</p>
          ) }
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>
            Password:
            <input type="password" placeholder="••••••••"
            {...register("password",{required: "Password is required",
          minLength:{
            value:4,
            message: "password must be at least 4 characters"
          },
          maxLength:{
            value:12,
            message: "password must be at most 12 characters"
          }})} 
            //onChange={(q) => setPassword(q.target.value)}
            />
          </label>
          {errors.password && (
            <p style = {{color:'red'}}>{errors.password.message}</p>
          )}

        </div>
        <button type="submit">Create account</button>
      </form>
    </div>
  );
}