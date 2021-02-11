import React from "react";
import './style.scss';

function ServicesTextInfo() {
    return (
        <React.Fragment>
            <h2 className="services__title">Services we provide</h2>
            <p className="services__description">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.<br />
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit.</p>
        </React.Fragment>
    );
}

export default ServicesTextInfo;