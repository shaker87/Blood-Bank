import React from 'react';
import { useHistory } from 'react-router-dom';
import './OBBMSDetailcs.css';

const OBBMSDetails = ({mData}) => {
    const {title, description, panelHeadingClass, panelBodyClass, root} = mData;
    let history = useHistory();
    const changeRoots = (roots) => {
        history.replace(roots);
    }
    return (
        <div className="col-md-4">
            <div className="panel">
                <div className={panelHeadingClass}>
                    <h4>{title}</h4>
                </div>
                <div className={panelBodyClass}>
                    <p>{description}</p>
                    <button onClick={()=> changeRoots(root)} className="btn btn-danger">View More</button>
                </div>
            </div>
        </div>
    );
};

export default OBBMSDetails;