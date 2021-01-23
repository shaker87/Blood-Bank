import React from 'react';
import { Link } from 'react-router-dom';


const Contact = () => {
    return (
        <div className="pt-5 pb-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className='text-danger'>Send us a Message</h3>
                        <form method="post" >
                            <div className="control-group form-group">
                                <div className="controls">
                                    <label>Full Name:</label>
                                    <input type="text" className="form-control" name="name" required />
                                </div>
                            </div>
                            <div className="control-group form-group">
                                <div className="controls">
                                    <label>Phone Number:</label>
                                    <input type="tel" className="form-control" name="phone" required />
                                </div>
                            </div>
                            <div className="control-group form-group">
                                <div className="controls">
                                    <label>Email Address:</label>
                                    <input type="email" className="form-control" name="email" />
                                </div>
                            </div>
                            <div class="control-group form-group">
                                <div className="controls">
                                    <label>Message:</label>
                                    <textarea rows="5" cols="100" className="form-control" name="message" required maxlength="999" style={{ resize: 'none' }}></textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-danger" name="submit"> Send Message</button>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <h3 className='text-danger mb-4'>Contact Details</h3>
                        <p>Blood Bank &amp; <br />Friends Society, <br />
                                35/45 ,Hossain Road,<br />
                                    Senbag, Noakhali
                        </p>
                        <p><i className="fa fa-phone"></i>
                            <span title="Phone">Phone: </span>: +8801866568978</p>
                        <p><i className="fa fa-envelope-o"></i>
                            <span title="Email">E-mail</span>: <Link to="#" >bbdms@gmail.com</Link>
                        </p>
                        <p><i className="fa fa-clock-o"></i>
                            <span title="Hours">Opening Hour</span>: 24*7</p>
                        <p><i className="fa fa-globe"></i>
                            <span title="Website">Website</span>: <Link to="#">www.bloodbankmanagementsystem.org</Link></p>
                        <ul className="list-unstyled list-inline list-social-icons">
                            <li>
                                <Link to="#"><i className="fa fa-facebook-square fa-2x"></i></Link>
                            </li>
                            <li>
                                <Link to="#"><i className="fa fa-linkedin-square fa-2x"></i></Link>
                            </li>
                            <li>
                                <Link to="#"><i className="fa fa-twitter-square fa-2x"></i></Link>
                            </li>
                            <li>
                                <Link to="#"><i className="fa fa-google-plus-square fa-2x"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};

export default Contact;