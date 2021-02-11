import React from "react";

import ServicesCarousel from './servicesCarousel/ServicesCarousel';
import ServicesList from './servicesList/ServicesList';


function Services() {
    return (
        <React.Fragment>
            <ServicesCarousel />
            <ServicesList />
        </React.Fragment>
    );
}

export default Services;