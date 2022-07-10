import Layout from "../../components/layouts/Layout";
import ProjectLayout from "../../components/layouts/ProjectLayout";

export default function movieApp() {
  return (
    <div>
      <h1>Movie App</h1>
    </div>
  );
}

movieApp.getLayout = function getLayout(movieApp) {
  return (
    <Layout>
      <ProjectLayout>{movieApp}</ProjectLayout>
    </Layout>
  );
};
