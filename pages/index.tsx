import Layout from "../components/layout";
import SearchForm from "../components/search-form";
import JobListings from "../components/job-listings";
import NewsListings from "../components/news-listings";
import { NextPage, NextPageContext } from "next";
import { JobListing } from "../models/job-listing";
import fetch from "isomorphic-unfetch";

interface Props {
    jobs: JobListing[];
};

const Home: NextPage<Props> = (props: Props) => (
  <Layout title="jobbaremote.nu">
    <section className="section">
      <div className="container">
        <SearchForm />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-4 is-offset-1">
            <JobListings jobs={props.jobs}/>
          </div>
          <div className="column is-4 is-offset-1">
              <NewsListings/>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

Home.getInitialProps = async (ctx: NextPageContext) => {
    const res = await fetch("https://us-central1-hca-web-static.cloudfunctions.net/fn-jrn-latest-jobs");
    const data = await res.json();

    return {
        jobs: data
    };
};

export default Home;
