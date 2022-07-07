// layouts
import Layout from "../../components/Layout";
import ProjectLayout from "../../components/ProjectLayout";
// data
import { projectItems } from "../../data/projectItems";
// styles
import styles from "../../styles/components/projectLayout.module.scss";

export default function MovieApp() {
  return <></>;
}

MovieApp.getLayout = function getLayout(MovieApp) {
  return (
    <Layout>
      <ProjectLayout>{MovieApp}</ProjectLayout>
    </Layout>
  );
};
