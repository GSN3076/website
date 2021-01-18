import React from 'react';

const Features = () => {
        return (
            <section className="service-one" id="features">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">Checkout Our <span>Service</span> <br />  Below.
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-laptop"></i>
                                    <h3><a href="#">Prototype <br /> </a></h3>
                                    <p>We help you to make <br />your idea into real world  <br /> product mockup.</p>
                                    <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-presentation"></i>
                                    <h3><a href="#">MVP <br /> </a></h3>
                                    <p>Helping you to crate your <br /> First Minimum Viable<br /> Product to launch.</p>
                                    <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-target"></i>
                                    <h3><a href="#">Build<br /></a></h3>
                                    <p>We make Your Product(System)<br />accessible to   <br />your consumer.</p>
                                    <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-visualization"></i>
                                    <h3><a href="#">Marketing<br /></a></h3>
                                    <p>We help you to get <br />traction to your <br /> products and getting more sales.</p>
                                    <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Features;