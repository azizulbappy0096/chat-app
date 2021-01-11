import React from 'react';
import "./InfoBar.css";

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CloseIcon from '@material-ui/icons/Close';

function InfoBar({room}) {
    return (
        <div className="infoBar">
            <section className="infoBar__room">
               <FiberManualRecordIcon />
               {room}
            </section>
            <section className="infoBar__close">
                <a href="/">
                <CloseIcon />
                </a>
            </section>
        </div>
    )
}

export default InfoBar;
