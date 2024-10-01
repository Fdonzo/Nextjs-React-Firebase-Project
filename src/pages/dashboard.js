import DashboardWithContent from "../modules/dashboardWithContent";
//import {useEffect, useState} from "react"
import { getSession } from "next-auth/react";
//import {useRouter} from "next/router"
//import { Box } from "@mui/material";
function Dashboard({ session }) {
  console.log(session);
  return <DashboardWithContent />;
}

export default Dashboard;

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/authentication",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
