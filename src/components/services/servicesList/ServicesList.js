import React from "react";
import ServicesTextInfo from "../servicesTextInfo/ServicesTextInfo";
import './style.scss';

function ServicesList() {
    return (
        <div className="services-list">
            <div className="wrapper">
                <div className="services-list__wrapper">
                    <ServicesTextInfo />
                </div>
            </div>
        </div>
    );
}

export default ServicesList;