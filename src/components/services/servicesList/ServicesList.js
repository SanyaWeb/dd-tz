import React, { Component } from 'react';
import ServicesTextInfo from "../servicesTextInfo/ServicesTextInfo";
import './style.scss';

class ServicesList extends Component {
    state = {
        items: [
            {
                id: 1,
                title: 'Branding',
                info: 'Lorem ipsum dolor sit amet, \n' +
                    'consectetuer adipiscing elit, sed diam nonummy nibh.'
            },
            {
                id: 2,
                title: 'Design',
                info: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem  '
            },
            {
                id: 3,
                title: 'Development',
                info: 'At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium.'
            },
            {
                id: 4,
                title: 'Rocket science',
                info: 'Lorem ipsum dolor sit amet, consectetuer \n' +
                    'adipiscing elit, sed diam nonummy nibh.'
            },
        ],
    }

    render () {
        const { items } = this.state;
        return (
            <section className="services-list">
                <div className="wrapper">
                    <div className="services-list__wrapper">
                        <ServicesTextInfo/>
                        <div className="services-list__items">
                            {items.map(item =>
                                <div className="services-list__item">
                                    <div className="services-list__item-icon"/>
                                    <div className="services-list__item-desc">
                                        <h3 className="services-list__item-title">
                                            {item.title}
                                        </h3>
                                        <div className="services-list__item-info">
                                            <p>{item.info}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServicesList;