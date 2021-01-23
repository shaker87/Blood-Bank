import React from 'react';
import AdminForm from '../AddAdminForm/AdminForm';
import AdminDashboardSidebar from '../AdminDashboardSidebar/AdminDashBoardSidebar';

const MakeAdmin = () => {

    return (
        <div className="dashboard">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <AdminDashboardSidebar></AdminDashboardSidebar>
                </div>
                <div className="col-md-10 mt-4">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h3>Make New Admin</h3>
                        </div>
                        <div>
                            <h2>Admin</h2>
                        </div>
                    </div>
                    <div className="">
                        <AdminForm></AdminForm>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MakeAdmin;