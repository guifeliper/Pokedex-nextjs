import Head from "next/head";
import Link from "next/link";
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
        <meta name="keywords" content="Pokedex" />
      </Head>

      <div className="flex">
        <Link href="/pokedex">
          <div className="cursor-pointer shadow-md bg-blue-500 py-4 px-6 rounded-lg text-blue-100 font-bold hover:bg-blue-600 hover:underline focus:ring-2 ring-offset-2 ring-blue-600">
            Pokedex
          </div>
        </Link>
      </div>
    </>
  );
}
