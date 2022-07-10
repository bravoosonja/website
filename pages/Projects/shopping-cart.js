import Layout from "../../components/layouts/Layout";
import ProjectLayout from "../../components/layouts/ProjectLayout";

export default function shoppingCart() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>shopping cart page</p>
    </div>
  );
}

shoppingCart.getLayout = function getLayout(shoppingCart) {
  return (
    <Layout>
      <ProjectLayout>{shoppingCart}</ProjectLayout>
    </Layout>
  );
};
