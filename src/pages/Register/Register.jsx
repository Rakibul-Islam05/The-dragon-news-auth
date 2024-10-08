import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form.get('password','email'));
        
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className='text-3xl my-10 text-center'>Register Your Account</h2>

                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">REGISTER</button>
                    </div>
                </form>
                <p className='text-center mt-4'>Already have an account? <Link className='text-blue-600 font-semibold' to='/Login'>Login</Link> </p>

            </div>
        </div>
    );
};

export default Register;