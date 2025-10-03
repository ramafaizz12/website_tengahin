import Head from "next/head";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>
          {headTitle
            ? headTitle
            : "Varantara - Menghubungkan Nilai & Mewujudkan Peluang."}
        </title>
      </Head>
    </>
  );
};

export default PageHead;
