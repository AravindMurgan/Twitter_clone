import { blue } from '@material-ui/core/colors';
import React from 'react';
import './FeedBar.css';

function FeedBar({ Icon }) {

	return (
        <div className="icon" style={{display:'flex',marginRight:'8px'}} >
            <Icon style={{ color: blue[500] }} />
    </div>

    )
    
    ;
}

export default FeedBar;
