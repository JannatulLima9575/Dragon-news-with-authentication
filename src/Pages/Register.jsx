import React from 'react';
import { NavLink } from 'react-router';

const Register = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">Register Your Account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            
            {/* name  */}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />
            
            {/* Photo URL  */}
            <label className="label">Photo URL</label>
            <input type="email" className="input" placeholder="Photo URL" />
            
            {/* email  */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            
            {/* password  */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center pt-5">Already Have An Account ? <NavLink className="text-secondary" to="/auth/login">Login</NavLink></p>
          </fieldset>
        </div>
      </div>
    </div>
    );
};

export default Register;