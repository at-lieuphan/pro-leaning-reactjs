import React from 'react';
import { useForm } from 'react-hook-form';
export default function Register() {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="register-page">
      <div className="container">
        <h2 className="text-center mg-t-8 mg-b-6">REGISTER FORM</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mg-b-6">
            <label htmlFor="">Fisrt Name:</label>
            <input className="form-control" name="firstname" ref={register} /> {/* register an input className="form-control" */}
          </div>
          <div className="form-group mg-b-6">
            <label htmlFor="">Last Name:</label>
            <input className="form-control" name="lastname" ref={register({ required: true })} />
            {errors.lastname && 'Last name is required.'}
          </div>
          <div className="form-group mg-b-6">
            <label htmlFor="">Age:</label>
            <input className="form-control" name="age" ref={register({ pattern: /\d+/ })} />
            {errors.age && 'Please enter number for age.'}
          </div>
          <input className="btn btn-primary mg-b-6" type="submit" />
        </form>
      </div>
    </div>
  )
}