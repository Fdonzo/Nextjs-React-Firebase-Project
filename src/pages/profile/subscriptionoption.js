import { getSession } from "next-auth/react";
import CreateSubcription from "../../components/profile/createSubscription";

export default function SubscriptionOption() {
  return <CreateSubcription />;
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
