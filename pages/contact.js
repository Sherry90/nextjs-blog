import { Fragment } from "react";
import Head from "next/head";

import ContactFrom from "../components/contact/contact-from";

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your message!" />
      </Head>
      <ContactFrom />
    </Fragment>
  );
};

export default ContactPage;
