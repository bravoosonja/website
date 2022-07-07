// layouts
import Layout from "../../components/Layout";
import ProjectLayout from "../../components/ProjectLayout";

export default function EtchASketch() {
  return <div>EtchASketch</div>;
}

EtchASketch.getLayout = function getLayout(EtchASketch) {
  return (
    <Layout>
      <ProjectLayout>{EtchASketch}</ProjectLayout>
    </Layout>
  );
};
