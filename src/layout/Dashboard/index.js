import { Layout } from "antd";
import NavAdmin from "../../components/NavAmin";
import HeaderAdmin from "../../components/HeaderAdmin";

function DashboardLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <NavAdmin />

      <Layout style={{ paddingTop: 20 }}>
        <HeaderAdmin />
        <div>{children}</div>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
