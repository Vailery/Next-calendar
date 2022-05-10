import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { Login } from "../components/login/login";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const LoginPage: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return <Login />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};

export default LoginPage;
