import React from 'react';
import { useForm } from "react-hook-form";

const AdminForm = () => {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {
        console.log("submit")

    };
    return (
        <div style={{ backgroundColor: '#F4F7FC', height: '100vh' }} className="admin-form">
        <form className="p-5 w-50" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <input type="email" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                {errors.email && <span className="text-danger">This field is required</span>}
            </div>
     

            <div className="form-group">
                <button type="submit" className="btn btn-dark">Submit</button>
            </div>
        </form>
    </div>
    );
};

export default AdminForm;