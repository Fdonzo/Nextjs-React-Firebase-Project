//import { Box } from "@mui/material";
import { useState, useEffect } from "react";

//import Script from "next/script";

import { Container, CardMedia } from "@mui/material";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function DecimationPage() {
  const [dashboardRedirect, setDashboardRedirect] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    const onPageSubmit = () => {
      setDashboardRedirect(true);
    };
    const element = document.getElementsByTagName("iframe");
    const element1 = document.getElementById("mycard");
    console.log("my name", element);
    console.log("my name2", element);
    console.log("my name3", element1.contentWindow.document);
    // eslint-disable-next-line no-undef

    document
      .getElementById("mycard")
      .contentWindow.document.addEventListener("click", onPageSubmit);
  }, []);

  /*
  <CardMedia
  component="iframe"
  image="https://www.youtube.com/embed/muuK4SpRR5M"
/>
*/
  /*<iframe
    id="mycard"
    width={560}
    height={315}
    src="https://www.youtube.com/embed/_zQqN5OYCCM"
    title="YouTube video player"
    frameBorder={0}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  />;
 */
  if (dashboardRedirect) {
    push(`/dashboard`);
  }
  return (
    <Container maxWidth="xl">
      <CardMedia
        //className="card"
        id="mycard"
        component="iframe"
        height={550}
        //src="https://smartdevpreneur.com/tailoring-the-material-ui-card-component/"
        src="https://www.upwork.com/"
      />
      {/*
      <iframe
        id="mycard"
        width={860}
        height={315}
        src="https://www.upwork.com/"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
*/}
    </Container>
  );
}

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
