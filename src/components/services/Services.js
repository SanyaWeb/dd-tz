import ServicesCarousel from './servicesCarousel/ServicesCarousel';
import ServicesList from './servicesList/ServicesList';

function Services() {
    return (
        <section className="services">
            <ServicesCarousel />
            <ServicesList />
        </section>
    );
}

export default Services;