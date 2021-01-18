import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Video from "../components/Video";
import CallToAction from "../components/CallToAction";
import CallToActionTwo from "../components/CallToActionTwo";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import Brands from "../components/Brands";
import Counter from "../components/Counter";
import Screenshots from "../components/Screenshots";
import Faq from "../components/Faq";
import NewsHome from "../components/NewsHome";
import Subscribe from "../components/Subscribe";


import axios from "axios"

export async function getStaticProps(context) {

    console.log(context)
    const response = await axios.get(`https://serene-refuge-85914.herokuapp.com/blogs`)
    const data = await response.data
    return {
      props: {
          blogs:data
      }, 
    }
  }



const HomePage = ({blogs}) => (
    <Layout pageTitle="Atiniv | Modern Software and Application Development Company from Bhilai (Durg) Chhattisgarh ">
        <NavOne />
        <Banner />
        <Features />
        <Video />
        <CallToAction />
        <CallToActionTwo />
        {/* <Pricing /> */}
        <Testimonial />
        <Brands />
        <Counter />
        {/* <Screenshots /> */}
        <Faq />
        <NewsHome news={blogs} />
        <Subscribe />
        <Footer />
    </Layout>

)

export default HomePage;