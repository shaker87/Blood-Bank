import React from 'react';
import './DonorDetails.css';
import blood from '../../../image/blood.png'
import { useHistory } from 'react-router-dom';

const DonorDetails = ({ donor }) => {
    const { name, mobile, bloodgroup, alternatemobile, email, address, religion, dateofbirth } = donor;
    const { postoffice, union, policestation, district } = address;

    const history = useHistory()

    const request = () => {
        history.replace("/need-blood")
    }
    return (
        <div className="col-md-4">
            <div className="box">
                <img src={blood} alt="img" />
                <div className="box-content">
                    <h6><strong>Name: {name}</strong></h6>
                    <h6>Blood Group: {bloodgroup}</h6>
                    <h6>Phone: {mobile}</h6>
                    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#myModal">View Full Details</button>
                    <button onClick={() => request()} className="btn btn-danger ml-2">Request for Blood</button>

                    <div class="modal fade" id="myModal" role="dialog">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Donor Full Details</h4>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div class="modal-body">
                                    <h6><strong>Name: {name}</strong></h6>
                                    <h6>Blood Group: {bloodgroup}</h6>
                                    <h6>Phone: {mobile}</h6>
                                    <h6>Alternate Phone: {alternatemobile}</h6>
                                    <h6>Email: {email}</h6>
                                    <h6>Religion: {religion}</h6>
                                    <h6>Date of Birth: {dateofbirth}</h6>
                                    <h6>Last Donation Date: { }</h6>
                                    <h6>Address: Union: {union}, Post Office: {postoffice}, Police-Station: {policestation}, District: {district}</h6>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonorDetails;