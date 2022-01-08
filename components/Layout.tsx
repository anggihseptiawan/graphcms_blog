import Head from "next/head";
import { Header } from ".";

const Layout = ({ children }: any) => {
  return (
    <>
      <div>
        <Head>
          <title>Graph CMS Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <Header />
      {children}
    </>
  );
};

export default Layout;
