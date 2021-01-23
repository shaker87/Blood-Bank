import React, { useEffect, useState } from 'react';
import DonorDetails from '../DonorDetails/DonorDetails';

const Donor = () => {
    const [donors, setDonors] = useState([])
    console.log(donors)
    const url = 'https://api.jsonbin.io/b/60091505bca934583e3fa88c/'
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setDonors(data))
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
}, [])

return (
    <div className="pt-4 pb-4" style={{backgroundColor: 'lightgray'}}>
        <div className="container">
        <h3 className="text-center text-danger mb-3">Some of Donor</h3>
            <div className="row">
                
                {
                    donors.slice(0,6).map(donor => <DonorDetails donor={donor}></DonorDetails>)
                }
            </div>
        </div>
    </div>
);
};

export default Donor;