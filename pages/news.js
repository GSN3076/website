import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PageHeader from "../components/PageHeader";
import News from "../components/News";
import Footer from "../components/Footer";

import axios from "axios"
import { API_URL } from "../components/config";

export async function getStaticProps(context) {

    console.log(context)
    const response = await axios.get(`${API_URL}/blogs`)
    const data = await response.data
    return {
      props: {
          blogs:data
      }, 
    }
  }


export default function NewsPage (props){
    console.log(props)
    return (
    <Layout pageTitle="Blogs | Atiniv">
        <NavTwo />
          <PageHeader title="News" />
          <News news={props.blogs} />
        <Footer />
    </Layout>

)}

