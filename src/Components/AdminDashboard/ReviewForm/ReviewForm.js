import React from 'react';
import { useForm } from "react-hook-form";


const ReviewForm = () => {
    const { register, handleSubmit, errors } = useForm();
 

    const onSubmit = data => {
        console.log(data);
    
    };
    return (
        <div style={{ backgroundColor: '#F4F7FC', height: '100vh' }} className="order-form">
            <form className="p-5 w-50" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <input type="text"  ref={register({ required: true })} name="email" placeholder="Your Email" className="form-control" />
                    {errors.company && <span className="text-danger">This field is required</span>}

                </div>

                <div className="form-group">
                    <textarea  ref={register({ required: true })} name="description" className="form-control" placeholder="Description"></textarea>
                    {errors.description && <span className="text-danger">This field is required</span>}
                </div>


                <div className="form-group">
                    <button type="submit" className="btn btn-dark">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;