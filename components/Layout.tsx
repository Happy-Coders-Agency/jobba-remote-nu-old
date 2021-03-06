import Head from "next/head";
import Header from "./header";
import { FunctionComponent } from "react";
import Footer from "./footer";

type LayoutProps = {
  title?: string;
};

const layoutStyle = {
  margin: 20,
  padding: 20
};

const Layout: FunctionComponent<LayoutProps> = ({ children, title }) => (
  <div style={layoutStyle}>
      <Head>
          <title>{title || ""}</title>
      </Head>
    <Header />
    <div className="container">
      <div className="content">{children}</div>
    </div>
    <Footer />
  </div>
);

export default Layout;
