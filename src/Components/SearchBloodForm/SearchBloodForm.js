import React from 'react';


const SearchBloodForm = () => {
    return (
        <div className="search-blood-area">
            <div className="container" style={{ marginTop: '70px' }}>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-danger text-center">Search Donor Availability</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-8 col-md-6">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center text-white p-2" style={{ padding: '5px', fontSize: '16px', fontWeight: 'bold' }}>SEARCH DONOR AVAILABILITY</h3>
                            </div>
                            <div className="panel-body">
                                <form method="post">
                                    <div className="form-group">
                                        <label className="control-label text-danger" for="SEARCH_TYPE" >Search Type</label>
                                        <select id="SEARCH_TYPE" name="type" required className="form-control input-sm">
                                            <option value="city">City</option>
                                            <option value="pincode">PIN</option>
                                            <option value="area">Area</option>
                                            <option value="district">District</option>
                                        </select>
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
                                        <label className="control-label text-danger" for="SEARCH_TEXT" >Search Text</label>
                                        <input type="text" placeholder="Search Text" id="SEARCH_TEXT" required className="form-control input-sm" />
                                    </div>

                                    <div className="form-group">
                                        <button className="btn btn-danger" type="submit" name="submit" >Search Donor</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6" id="feedback">
                        <p>Please fill the correct details and search your nearest donor.<br/>For more queries contact our admin.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBloodForm;