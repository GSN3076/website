import React, { Component } from 'react';
import Link from 'next/link';
import { API_URL } from './config';
import moment from "moment"

export default function News({news}) {
    
        return (
            <section className="blog-one">
                <div className="container">
                    <div className="row">
                        {news.map((item,index) =>(
                            <div  className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="blog-one__single">
                                <div className="blog-one__image">
                                    <img src={`${API_URL}${item.articleImage.url}`} alt="" />
                                    <Link 
                                        href={`/[blog_slug]`}
                                        as={`/${item.id}`} 
                                        >
                                        <a className="blog-one__more-link"><i
                                            className="fa fa-link"></i>
                                        </a>
                                    </Link>
                                </div>
                                <div className="blog-one__content">
                                    <ul className="list-unstyled blog-one__meta">
                                        <li><a href="#">{moment(item.published_at).format("DD, MMM YYYY")}</a></li>
                                        <li><a href="#">2 Comments</a></li>
                                    </ul>
                                    <h3 className="blog-one__title">
                                        <Link href={`/[blog_slug]`}
                                        as={`/${item.id}`} 
                                          >
                                        <a>{item.title}</a>
                                        </Link>
                                    </h3>
                                    <Link href={`/[blog_slug]`}
                                        as={`/${item.id}`} 
                                        >
                                    <a className="blog-one__link">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        ))}
                      </div>
                    <div className="post-pagination">
                        <a href="#"><i className="fa fa-angle-double-left"></i></a>
                        <a className="active" href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#"><i className="fa fa-angle-double-right"></i></a>
                    </div>
                </div>
            </section>
        )
}

