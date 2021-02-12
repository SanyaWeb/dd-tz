import React, { Component } from 'react';
import ServicesTextInfo from "../servicesTextInfo/ServicesTextInfo";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './style.scss';

class ServicesCarousel extends Component {
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
        navText: ['', ''],
        navClass: [
            'services-carousel-arrow services-carousel-arrow_prev',
            'services-carousel-arrow services-carousel-arrow_next'
        ],
        responsive: {
            1320: {
                items: 3
            },
            750: {
                items: 2,
                margin: 60
            },
            650: {
                items: 2,
                margin: 40
            },
            0: {
                items: 1
            },
        },
    }

    render () {
        const { items, navText, navClass, responsive  } = this.state;

        return (
            <section className="services-carousel">
                <div className="wrapper">
                    <div className="services-carousel__wrapper">
                        <ServicesTextInfo />
                        <div className="services-carousel__slider">
                            <OwlCarousel
                                loop
                                margin={100}
                                nav
                                navText={navText}
                                dots={false}
                                navElement={'div'}
                                navClass={navClass}
                                responsive={responsive}>
                                {items.map(item =>
                                    <div className="services-carousel__item" key={item.id}>
                                        <div className="services-carousel__item-icon" />
                                        <div className="services-carousel__item-desc">
                                            <h3 className="services-carousel__item-title">
                                                {item.title}
                                            </h3>
                                            <div className="services-carousel__item-info">
                                                <p>{item.info}</p>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServicesCarousel;