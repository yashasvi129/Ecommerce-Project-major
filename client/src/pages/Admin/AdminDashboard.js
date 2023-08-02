import React from "react";
 import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard" >
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div >
          <div className="col-md-9" style={{
        backgroundImage: `linear-gradient(rgba(255, 222, 233,0.5), 
        rgba(181, 255, 252,0.5)), url('/images/backs.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "-70px",
      }}
>
            <div className="card w-75 p-3">
              <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
// import Layout from "./../../components/Layout/Layout";
// import React from 'react'

// const AdminDashboard = () => {
//   return (
//     <Layout>
//        <h1>Dashboard</h1>
//     </Layout>
//   )
// }

// export default AdminDashboard