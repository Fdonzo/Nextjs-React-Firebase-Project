import { getSession } from "next-auth/react";
import React from "react";
import CreateProfile from "../../components/profile/createProfile";

export default function EditProfile() {
  return <CreateProfile />;
}

export async function getServerSideProps(ctx) {
  //const prisma = new PrismaClient();
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/authentication",
        permanent: false,
      },
    };
  }
  /*const profile = await prisma.profile.findUnique({
    where: { email: session.user.email },
  });
  */
  return {
    props: {
      session,
      //profile,
    },
  };
}
