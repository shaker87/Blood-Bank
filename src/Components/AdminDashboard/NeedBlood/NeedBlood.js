import React from 'react';
import { Table } from 'react-bootstrap';
import AdminDashboardSidebar from '../AdminDashboardSidebar/AdminDashBoardSidebar';
// import AdminServiceListDetails from '../ActiveDonorDetails/ActiveDonorDetails';




const NeedBlood = () => {
   
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <AdminDashboardSidebar></AdminDashboardSidebar>
                </div>
                <div className="col-md-10 mt-4">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h3>Need Blood</h3>
                        </div>
                        <div>
                            <h2>Admin</h2>
                        </div>
                    </div>
                    <div style={{backgroundColor:'#F4F7FC', height:'100vh'}} className="row p-5">
                        <Table>
                            <thead>
                                <tr className="text-center">
                                    <th style={{width:'10%'}}>S.No</th>
                                    <th style={{width:'20%'}}>Name</th>
                                    <th style={{width:'10%'}}>Blood Group</th>
                                    <th style={{width:'20%'}}>Unit</th>
                                    <th style={{width:'20%'}}>Hospital</th>
                                    <th style={{width:'10%'}}>R.Date</th>
                                </tr>
                            </thead>
                            <tbody>
                           
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default  NeedBlood;