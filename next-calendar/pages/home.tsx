import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { Fragment } from "react";
import { Home } from "../components/home/home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const HomePage: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return (
    <Fragment>
      <Home />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};

export default HomePage;
