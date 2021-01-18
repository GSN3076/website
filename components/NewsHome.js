import React from 'react';
import Link from 'next/link';
import moment from "moment"
import { API_URL } from './config';

const NewsHome = ({news}) => {
        return (

            <section className="blog-one blog-one__home thm-gray-bg" id="news">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">Checkout Our <span>Latest</span> <br /> News & Articles.
                        </h2>
                    </div>
                    <div className="row">
                        {news.map((item,index) =>{
                            return(
                                <div className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                                <div className="blog-one__single">
                                    <div className="blog-one__image">
                                        <img src={`${API_URL}${item.articleImage.url}`} alt="" />
                                        <Link  href={`/[blog_slug]`}
                                        as={`/${item.id}`} >
                                            <a className="blog-one__more-link"><i
                                                className="fa fa-link"></i>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="blog-one__content">
                                        <ul className="list-unstyled blog-one__meta">
                                            <li><a href="#">{moment(item.publishedAt).format("DD, MMM YYYY")}</a></li>
                                            <li><a href="#">2 Comments</a></li>
                                        </ul>
                                        <h3 className="blog-one__title">
                                            <Link  href={`/[blog_slug]`}
                                        as={`/${item.id}`} >
                                            <a>{item.title}</a>
                                            </Link>
                                        </h3>
                                        <Link href={`/[blog_slug]`}
                                        as={`/${item.id}`}>
                                        <a className="blog-one__link">Read More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
    
                            )
                        })}
                    </div>
                </div>
            </section>
        )
}
export default NewsHome;