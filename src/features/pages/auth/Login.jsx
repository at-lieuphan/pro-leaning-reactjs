import React, { useState } from "react";
import { useForm } from 'react-hook-form';
export default function Login() {

  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <div className="page-login">
      <div className="container">
        <h2 className="text-center mg-t-10 mg-b-5">LOGIN</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mg-b-6">
            <label htmlFor="email" className="mg-b-3">Email:</label>
            <input className="form-control" name="email" ref={register({pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} /> {/* register an input className="form-control" */}
            {errors.email && 'Please enter email to format ex: abc@gmail.com '}
          </div>
          <div className="form-group mg-b-6">
            <label htmlFor="password" className="mg-b-3">Password:</label>
            <input className="form-control" name="password" type="password" ref={register({ maxLength: 8})} />
            {errors.password && 'Please enter 8 character for password.'}
          </div>
          <input className="btn btn-primary mg-b-6" type="submit" />
        </form>
      </div>
    </div>
  );
}
 