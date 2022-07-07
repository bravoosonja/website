// layouts
import Layout from "../../components/Layout";
import ProjectLayout from "../../components/ProjectLayout";

export default function Huddle() {
  return <div>Huddle</div>;
}

Huddle.getLayout = function getLayout(Huddle) {
  return (
    <Layout>
      <ProjectLayout>{Huddle}</ProjectLayout>
    </Layout>
  );
};
