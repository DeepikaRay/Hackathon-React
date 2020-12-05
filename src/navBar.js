import React from 'react';
import data from './data.json';
import TrackStatus from './trackStatus';
function NavBar() {
    return (
        <div>
            <TrackStatus data={data} />
        </div>
    );
}

export default NavBar;