import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboardSidebar.css'



const AdminDashboardSidebar = () => {


    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{ height: "100vh" }}>

            <ul className="list-unstyled">
                <li>
                    <h3 className="text-danger">Blood Bank</h3>
                </li>

                <li>
                    <Link to="/active-donor" className="text-dark">
                        <span>Active Donor</span>
                    </Link>
                </li>
                <li>
                    <Link to="/blood-need" className="text-dark">
                        <span>Need Blood</span>
                    </Link>
                </li>
                <li>
                    <Link to="/add-admin" className="text-dark">
                        <span>Add Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-dark">
                        <span>Review</span>
                    </Link>
                </li>

            </ul>
            <div>
                <Link to="/" className="text-dark"><span>Logout</span></Link>
            </div>
        </div>
    );
};

export default AdminDashboardSidebar;