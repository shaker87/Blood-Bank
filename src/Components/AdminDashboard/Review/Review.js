import React from 'react';
import AdminDashboardSidebar from '../AdminDashboardSidebar/AdminDashBoardSidebar';
import ReviewForm from '../ReviewForm/ReviewForm';

const Review = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <AdminDashboardSidebar></AdminDashboardSidebar>
                </div>
                <div className="col-md-10 mt-4">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h3>Review</h3>
                            </div>
                            <div>
                                <h2>Admin</h2>
                            </div>
                        </div>
                        <div className="">
                            <ReviewForm></ReviewForm>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Review;