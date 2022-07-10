import { useRouter } from "next/router";
// components
import Layout from "../../components/layouts/Layout";
import ProjectLayout from "../../components/layouts/ProjectLayout";

export default function ProjectPage() {
  const router = useRouter();
  const { uid } = router.query;

  return <h1>{uid}</h1>;
}

ProjectPage.getLayout = function getLayout(ProjectPage) {
  return (
    <Layout>
      <ProjectLayout>{ProjectPage}</ProjectLayout>
    </Layout>
  );
};
