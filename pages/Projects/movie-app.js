import Layout from "../../components/layouts/Layout";
import ProjectLayout from "../../components/layouts/ProjectLayout";

export default function movieApp() {
  return (
    <>
      <div className="title">
        <h1>Movie App</h1>
      </div>
      <h2>Overview</h2>
      <p>para</p>
    </>
  );
}

movieApp.getLayout = function getLayout(movieApp) {
  return (
    <Layout>
      <ProjectLayout>{movieApp}</ProjectLayout>
    </Layout>
  );
};
