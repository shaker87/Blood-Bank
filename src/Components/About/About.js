import React from 'react';
import bloodbankimage from '../../image/blooddonataion.jpg'

const About = () => {
    return (
        <div className="container" style={{ marginTop: '70px' }}>
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-header text-danger">About<small>Blood Bank</small>
                    </h1>

                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img className="img-responsive w-75" style={{boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '7px'}} src={bloodbankimage} alt="" />
                </div>
                <div className="col-md-6">
                    <h2 className="text-danger">About Blood Bank</h2>
                    <p><strong>Blood banking is the process that takes place in the laboratory to ensure that donated blood, or blood products, are safe before they are used in blood transfusions and other medical procedures. Blood banking includes typing the blood for transfusion and testing for infectious diseases.The term "blood bank" typically refers to a division of a hospital where the storage of blood product occurs and where proper testing is performed (to reduce the risk of transfusion related adverse events). However, it sometimes refers to a collection center, and indeed some hospitals also perform collection.</strong></p>

                </div>
            </div>
        </div>
    );
};

export default About;


