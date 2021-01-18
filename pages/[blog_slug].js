import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PageHeader from "../components/PageHeader";
import NewsDetails from "../components/NewsDetails";
import Footer from "../components/Footer";
import axios from "axios"
import moment from "moment"
import marked from "marked"
import { API_URL } from "../components/config";

export async function getStaticPaths(ctx){
    
    const response = await axios.get(`${API_URL}/blogs`)
    const data = await response.data
    console.log()
    return {
            paths:data.map((item,index) =>({
                   params: {blog_slug:JSON.stringify(item.id)}
                }))
            ,
            fallback:false,
            
    }
}

export async function  getStaticProps(props){

    const response = await axios.get(`${API_URL}/blogs/1`)
    const pageDataResponse = await axios.get(`${API_URL}/blogs`)
    const data = await response.data
    const pageData = await pageDataResponse.data

    return {
        props:{
            data:data,
            pageData:pageData
        },
        revalidate:1
    }
}

const NewsDetailsPage = ({data,pageData}) => {
    return (<Layout  pageTitle={data.title}>
        <NavTwo />
            <PageHeader title="News Details" />
            <section className="blog-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-one__single">
                                <div className="blog-one__image">
                                    <img src={`${API_URL}${data.articleImage.url}`} alt="" />
                                </div>
                                <div className="blog-one__content">
                                    <ul className="list-unstyled blog-one__meta">
                                        <li><a href="#">By Admin</a></li>
                                        <li><a href="#">{moment(data.publishesAt).format("DD, MMM YYYY")}</a></li>
                                        <li><a href="#">2 Comments</a></li>
                                    </ul>
                                    <h3 className="blog-one__title">
                                        {data.title}
                                    </h3>
                                    <div className="blog-one__text" dangerouslySetInnerHTML={{__html:marked(data.article,{sanitize:true})}} />
                                        
                                </div>
                            </div>
                            <div className="share-block">
                                <div className="left-block">
                                    <p>Tags: <a href="#">Business,</a> <a href="#">Agency,</a> <a
                                        href="#">Technology</a></p>
                                </div>

                                <div className="social-block">
                                    <a className="fa fa-facebook-square" href="#"></a>
                                    <a className="fa fa-twitter" href="#"></a>
                                    <a className="fa fa-instagram" href="#"></a>
                                    <a className="fa fa-pinterest-p" href="#"></a>
                                </div>
                            </div>
                            {/* <div className="blog-details__author">
                                <div className="blog-details__author-image">
                                    <img src="/assets/images/blog/author-1-1.jpg" alt="Awesome Image" />
                                </div>
                                <div className="blog-details__author-content">
                                    <h3>Christine Eve</h3>
                                    <p>{}</p>
                                </div>
                            </div> */}
                            <h2 className="blog-details__content-title">0
                                Comments</h2>
                            {/* <div className="comment-one">
                                <div className="comment-one__single">
                                    <div className="comment-one__image">
                                        <div className="inner-block">
                                            <img src="/assets/images/blog/comment-1-1.jpg" alt="Awesome Image" />
                                        </div>
                                    </div>
                                    <div className="comment-one__content">
                                        <div className="comment-one__content-top">
                                            <div className="comment-one__top-left">
                                                <h3 className="comment-one__author">Laquanda Bachmeier</h3>
                                                <p className="comment-one__date">20 April, 2019 <span
                                                    className="comment-one__date-sep">.</span> 4:00 pm</p>
                                                <p className="comment-one__text">Lorem Ipsum is simply dummy text of the
                                                    rinting and
                                                    typesetting been the industry standard dummy text ever sincer
                                                    condimentum purus.
                                                    In non ex at ligula fringilla lobortis et not the aliquet.</p>
                                            </div>
                                            <div className="comment-one__top-right">
                                                <a href="#"
                                                   className="thm-btn comment-one__reply"><span>Reply</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-one__single">
                                    <div className="comment-one__image">
                                        <div className="inner-block">
                                            <img src="/assets/images/blog/comment-1-2.jpg" alt="Awesome Image" />
                                        </div>
                                    </div>
                                    <div className="comment-one__content">
                                        <div className="comment-one__content-top">
                                            <div className="comment-one__top-left">
                                                <h3 className="comment-one__author">Vicente
                                                    Elmore</h3>
                                                <p className="comment-one__date">20 April, 2019 <span
                                                    className="comment-one__date-sep">.</span> 4:00 pm</p>
                                                <p className="comment-one__text">Lorem Ipsum is simply dummy text of the
                                                    rinting and
                                                    typesetting been the industry standard dummy text ever sincer
                                                    condimentum purus.
                                                    In non ex at ligula fringilla lobortis et not the aliquet.</p>
                                            </div>
                                            <div className="comment-one__top-right">
                                                <a href="#"
                                                   className="thm-btn comment-one__reply"><span>Reply</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2 className="blog-details__content-title">Leave a
                                Comment</h2>
                            <form action="#" className="reply-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Your name" className="reply-form__field" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Enter email" className="reply-form__field" />
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea placeholder="Write message" className="reply-form__field"></textarea>
                                        <button className="reply-form__btn thm-btn" type="submit">
                                            <span>Submit Comment</span></button>
                                    </div>
                                </div>
                            </form> */}
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar__single sidebar__search">
                                    <form action="#" className="sidebar__search-form">
                                        <input type="text" name="search" placeholder="Search here..." />
                                            <button type="submit"><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                                <div className="sidebar__single sidebar__post">
                                    <h3 className="sidebar__title">Latest Posts</h3>
                                    <div className="sidebar__post-wrap">
                                        {pageData.map((item,index) =>{
                                            return(<div className="sidebar__post__single">
                                            <div className="sidebar__post-image">
                                                <div className="inner-block"><img src={`${API_URL}${item.articleImage.url}`} alt={"Atiniv Article"} style={{height:60}} /></div>
                                            </div>
                                            <div className="sidebar__post-content">
                                                <h4 className="sidebar__post-title"><a href="#">{item.title}</a></h4>
                                            </div>
                                        </div>)
                                      
                                        })}
                                    </div>
                                </div>
                                {/* <div className="sidebar__single sidebar__category">
                                    <h3 className="sidebar__title">Categories</h3>
                                    <ul className="sidebar__category-list">
                                        <li className="sidebar__category-list-item"><a href="#">Business</a></li>
                                        <li className="sidebar__category-list-item"><a href="#">Introductions</a></li>
                                        <li className="sidebar__category-list-item"><a href="#">One Page Template</a>
                                        </li>
                                        <li className="sidebar__category-list-item"><a href="#">Parallax Effects</a>
                                        </li>
                                        <li className="sidebar__category-list-item"><a href="#">New Technologies</a>
                                        </li>
                                        <li className="sidebar__category-list-item"><a href="#">Video Backgrounds</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar__single sidebar__tags">
                                    <h3 className="sidebar__title">Tags</h3>
                                    <ul className="sidebar__tags-list">
                                        <li className="sidebar__tags-list-item"><a href="#">Business,</a></li>
                                        <li className="sidebar__tags-list-item"><a href="#">Agency,</a></li>
                                        <li className="sidebar__tags-list-item"><a href="#">Technology,</a></li>
                                        <li className="sidebar__tags-list-item"><a href="#">Parallax,</a></li>
                                        <li className="sidebar__tags-list-item"><a href="#">Innovative,</a></li>
                                        <li className="sidebar__tags-list-item"><a href="#">Professional,</a></li>
                                        <li className="sidebar__tags-list-item"><a href="#">Experience,</a></li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        

            {/* <NewsDetails data={data}  pageData={pageData} /> */}
        <Footer />
    </Layout>)

}

export default NewsDetailsPage;