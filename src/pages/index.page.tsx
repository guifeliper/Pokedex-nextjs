import Head from "next/head";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? "en", ["common", "home"])),
    },
  };
};

export default function Home() {
  const { t } = useTranslation(["home", "common"]);

  return (
    <>
      <Head>
        <title>{t("common:appName")}</title>
      </Head>

      <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
        <div className="flex">Hello World!</div>
      </div>
    </>
  );
}
