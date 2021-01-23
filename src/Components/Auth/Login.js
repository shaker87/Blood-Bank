import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    // const email = 'admin@example.com';
    // const password = 'admin123';
      const handleBlur = event => {
        const getData = [event.target.name] = event.target.value;
        console.log(getData);
    }
    const history = useHistory()

    const login = () => {
        history.push("/active-donor")
    }
    return (
        <div>
        <div className="container" style={{ marginTop: '70px' }}>
            <div className="row">
                <div className="col-md-12">
                    <h3 className="text-danger text-center">Admin Login</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-6 m-auto">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center text-white p-2" style={{ padding: '5px', fontSize: '16px', fontWeight: 'bold' }}> Enter Your Email and Password to Login</h3>
                        </div>
                        <div className="panel-body">
                            <form method="post">
                                <div className="form-group">
                                    <label className="control-label text-danger" for="EMAIL" >Email</label>
                                    <input onBlur={handleBlur} type="text" placeholder="Email" id="EMAIL" name="PATIENT_NAME" required class="form-control input-sm" />
                                </div>
                                <div className="form-group">
                                    <label className="control-label text-danger" for="PASSWORD" >Password</label>
                                    <input onBlur={handleBlur} type="password" placeholder="Password" id="PATIENT_NAME" name="PATIENT_NAME" required class="form-control input-sm" />
                                </div>
                                <div className="form-group">
                                    <button onClick={() => login()} className="btn btn-danger" type="submit" name="submit" >Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;