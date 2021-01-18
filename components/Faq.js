import React from 'react';

const Faq = () => {
        return (
            <section className="faq-one">
                <img src="/assets/images/background/faq-one-bg.png" alt="Awesome Image" className="faq-one__bg" />
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">Want to Ask <span>Something</span> <br /> From Us?
                        </h2>
                    </div>
                    <div className="accrodion-grp faq-accrodion">
                        <div className="accrodion active">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Who we are ?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>We are passionate engineers, having experience of more than 5 years.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion active">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>What we do ?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>We love to make businesses grow and help them to scale by creating products for businesses.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion active">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Our Vision</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>Our Vision is very clear, We want to make products for SME's(businesses) to grow and scale business.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Faq;