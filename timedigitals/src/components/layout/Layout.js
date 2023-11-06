import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
// import "../layout/Layout.css";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Time Digitals",
  description:
    "Digital flex printing machine's sales & service · Overview · Digital & Social presence · Related Services · Similar Experts · Fast, FREE way to get experts · Flex Printing Machine Printer Part Repair Services · We Can Fix: Display Problem, Hardware Problem, Slow Printing, Ink Problem",
  keywords:
    "flex machine,flex machine sales, flex machine service,Flex Solvent Ink,Colorjet Cmyk Solvent Ink,printing,inks,flex media",
};
export default Layout;
