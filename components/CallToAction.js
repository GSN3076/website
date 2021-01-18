import React from 'react';

const CallToAction = () => {
        return (
            <section className="cta-one">
                <img src="/assets/images/background/cta-one-bg.png" className="cta-one__bg" alt="Awesome Image" />
                <div className="container">
                    <img src="/assets/images/mocs/cta-moc-1-1.png" className="cta-one__moc" alt="Awesome Image" />
                    <div className="row justify-content-lg-end">
                        <div className="col-lg-6">
                            <div className="cta-one__content">
                                <i className="cta-one__icon dimon-icon-data1"></i>
                                <div className="block-title text-left">
                                    <h2 className="block-title__title">Powerful <span>Tools</span> for Your Customers.
                                    </h2>
                                </div>
                                <div className="cta-one__text">
                                    <p>We Deliver customer satisfaction and trust not only Products and Service .</p>
                                </div>
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-check"></i>Modern UI/UX Design.</li>
                                    <li><i className="fa fa-check"></i>Robust and Modern Technology Stacks.</li>
                                    <li><i className="fa fa-check"></i>We create highly Scalable Applciations for your Business needs, We know how it works.</li>
                                </ul>
                                <a href="#" className="thm-btn"><span>Get Started</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default CallToAction;