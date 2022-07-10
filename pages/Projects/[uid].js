import { useRouter } from "next/router";
//import { createClient, linkResolver } from "../../prismicio";
//import * as prismicH from "@prismicio/helpers";
// styles
import styles from "../../styles/components/projectLayout.module.scss";

export default function ProjectPage() {
  const router = useRouter();
  const { uid } = router.query;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>{uid}</h1>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("/public/data.js");
  const data = await res;
  return {
    props: {}, // will be passed to the page component as props
  };
}

// export async function getStaticProps({ params, previewData }) {
//   const client = createClient({ previewData });

//   const page = await client.getByUID("page", params.uid);

//   return {
//     props: { page },
//   };
// }

// export async function getStaticPaths() {
//   const client = createClient();
//   const pages = await client.getAllByType("page", { lang: "*" });

//   return {
//     paths: pages.map((page) => {
//       return { params: { uid: page.uid } };
//     }),
//     fallback: false, // false or 'blocking'
//   };
// }
