import React from 'react'
import Layout from "../core/Layout";
import {API} from "../config";

const Signup = () => {

    const signUpForm = () =>{
        return (
            <form>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="text-muted">Name</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="text-muted">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }


    return(
        <Layout title="Signup" description="Signup to Node React E-comm app" className="container col-md-8 offset-md-2">
            
            {signUpForm()}
            
        </Layout>
    );
}


export default Signup;
