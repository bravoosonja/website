// layouts
import Layout from "../../components/Layout";
import ProjectLayout from "../../components/ProjectLayout";

export default function Calculator() {
  return <div>Calculator</div>;
}

Calculator.getLayout = function getLayout(Calculator) {
  return (
    <Layout>
      <ProjectLayout>{Calculator}</ProjectLayout>
    </Layout>
  );
};
