import Link from "next/link";
import Layout from "../components/layouts/Layout";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
}

NotFound.getLayout = function getLayout(NotFound) {
  return <Layout>{NotFound}</Layout>;
};
