import React, { useEffect, useState } from 'react';
import OBBMSDetails from './OBBMSDetails';

const OBBMS = () => {

    const [managementData, setManagementData] = useState([])

    useEffect(()=>{
        fetch('https://api.jsonbin.io/b/600bf8febca934583e40923d')
        .then(response => response.json())
        .then(data => setManagementData(data))
    },[])
    
    return (
        <div style={{padding: '50px 0px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="page-header text-danger text-center mb-4">Blood Bank Management System</h3>
                    </div>
                </div>
                <div className="row">
                    {
                        managementData.map(mData => <OBBMSDetails mData={mData}></OBBMSDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OBBMS;