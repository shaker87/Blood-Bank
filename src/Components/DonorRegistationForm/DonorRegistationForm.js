import React from 'react';
import Footer from '../Footer/Footer';

const DonorRegistationForm = () => {
    return (
        <div>
            <div className="container" style={{ marginTop: '70px' }}>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-danger text-center">New Donor Registration</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-8 col-md-6 m-auto">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center text-white p-2" style={{ padding: '5px', fontSize: '16px', fontWeight: 'bold' }}> JOIN AS BLOOD DONOR</h3>
                            </div>
                            <div className="panel-body">
                                <form method="post">
                                    <div className="form-group">
                                        <label className="control-label text-danger" for="NAME" >Name</label>
                                        <input type="text" placeholder="Full Name" id="NAME" name="NAME" required class="form-control input-sm" />
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label text-danger" for="BLOOD" >Blood Group</label>
                                        <select id="blood" name="BLOOD" required className="form-control input-sm">
                                            <option value="">Select Blood</option>
                                            <option value="A+">A+</option>
                                            <option value="B+">B+</option>
                                            <option value="O+">O+</option>
                                            <option value="AB+">AB+</option>
                                            <option value="A1+">A1+</option>
                                            <option value="A2+">A2+</option>
                                            <option value="A1B+">A1B+</option>
                                            <option value="A2B+">A2B+</option>
                                            <option value="A-">A-</option>
                                            <option value="B-">B-</option>
                                            <option value="O-">O-</option>
                                            <option value="AB-">AB-</option>
                                            <option value="A1-">A1-</option>
                                            <option value="A2-">A2-</option>
                                            <option value="A1B">A1B-</option>
                                            <option value="A2B">A2B-</option>
                                            <option value="A2B">Bombay o+</option>
                                            <option value="A2B">Bombay o-</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label text-danger" for="CONTACT_1" >Phone</label>
                                        <input type="text" required name="CONTACT_1" id="CONTACT_1" className="form-control" placeholder="Phone" />
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label text-danger" for="CONTACT_2" >Alternate Phone</label>
                                        <input type="text" required name="CONTACT_2" id="CONTACT_2" className="form-control" placeholder="Alternate Phone" />
                                    </div>



                                    <div className="form-group">
                                        <label className="control-label text-danger" for="EMAIL" >Email</label>
                                        <input type="email" required name="EMAIL" id="EMAIL" className="form-control" placeholder="Email Address" />
                                    </div>

                                    <div className="form-group">
                                        <label class="control-label text-danger" for="RELIGION" >Religion</label>
                                        <select id="religion" name="RELIGION" required class="form-control input-sm">
                                            <option value="">Religion</option>
                                            <option value="Islam">Islam</option>
                                            <option value="Hindu">Hindu</option>
                                            <option value="Buddist">Buddist</option>
                                            <option value="Chiritian">Chiritian</option>
                                        </select>
                                    </div>


                                    <div className="form-group">
                                        <label className="control-label text-danger" for="LAST_D_DATE">Last Blood Donoted Date</label>
                                        <input type="text" name="LAST_D_DATE" value="00/00/0000" id="LAST_D_DATE" placeholder="DD/MM/YYYY" class="form-control input-sm DATES" />
                                    </div>


                                    <div className="form-group">
                                        <label className="control-label text-danger" for="UNION">Union</label>
                                        <select name="UNION" id="UNION" required className="form-control">
                                            <option value="">Select Union</option>

                                        </select>

                                    </div>
                                    <div className="form-group">
                                        <label className="control-label text-danger" for="POSTOFFICE">Post Office</label>
                                        <select name="POSTOFFICE" id="POSTOFFICE" required className="form-control">
                                            <option value="">Select Post Office</option>

                                        </select>

                                    </div>

                                    <div class="form-group">
                                        <label className="control-label text-danger" for="STATION">Police Station</label>
                                        <select name="STAION" id="STATION" required className="form-control">
                                            <option value="">Select Police Station</option>

                                        </select>
                                    </div>


                                    <div className="form-group">
                                        <label className="control-label text-danger" for="DISTRICT" >District</label>
                                        <select name="DISTRICT" id="DISTRICT" required className="form-control">
                                            <option value="">Select District</option>

                                        </select>

                                    </div>

                                    <div className="form-group">
                                        <button className="btn btn-danger" type="submit" name="submit" >Registar Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DonorRegistationForm;