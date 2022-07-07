// layouts
import Layout from "../../components/Layout";
import ProjectLayout from "../../components/ProjectLayout";

export default function Library() {
  return <div>Library</div>;
}

Library.getLayout = function getLayout(Library) {
  return (
    <Layout>
      <ProjectLayout>{Library}</ProjectLayout>
    </Layout>
  );
};
