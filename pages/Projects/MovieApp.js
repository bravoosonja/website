// layouts
import Layout from "../../components/Layout";
import ProjectLayout from "../../components/ProjectLayout";

export default function MovieApp() {
  return <div>MovieApp</div>;
}

MovieApp.getLayout = function getLayout(MovieApp) {
  return (
    <Layout>
      <ProjectLayout>{MovieApp}</ProjectLayout>
    </Layout>
  );
};
