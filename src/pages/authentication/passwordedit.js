import UserPasswordEdit from "../../modules/userPasswordEdit";
import { getCsrfToken } from "next-auth/react";
import crypto from "crypto-js";
export default function PasswordEdit({ csrfToken, hashEmail }) {
  return <UserPasswordEdit csrfToken={csrfToken} hasEmail={hashEmail} />;
}

export async function getServerSideProps(context) {
  console.log("context", context);
  try {
    const timeQuery = context.query.keyOne;
    const emailQuery = context.query.keyTwo;
    //const bytesDate = crypto.AES.decrypt(timeQuery, emailQuery);
    //const decryptedDate = bytesdDate.toString(crypto.enc.Utf8);
    const decryptedDateJSON = crypto.enc.Base64.parse(timeQuery).toString(
      crypto.enc.Utf8
    );
    const bytesData = crypto.AES.decrypt(
      decryptedDateJSON,
      emailQuery
    ).toString(crypto.enc.Utf8);
    const decryptedDate = JSON.parse(bytesData);
    console.log("date", decryptedDate);
    const d = new Date(decryptedDate);
    const minute = 1000 * 60;
    let timeStartInMinutes = Math.round(d.getTime() / minute);
    let timeFinishInMinutes = timeStartInMinutes + 59;
    let timeNoLongerValidInMinutes = timeStartInMinutes + 60;
    if (
      timeStartInMinutes < timeFinishInMinutes &&
      timeFinishInMinutes < timeNoLongerValidInMinutes
    ) {
      return {
        props: {
          csrfToken: await getCsrfToken(context),
          //hashEmail: emailQuery,
        },
      };
    }
    return {
      redirect: {
        destination: "/authentication/passwordrecreation",
        permanent: false,
      },
    };
  } catch (error) {
    if (error) {
      return {
        redirect: {
          destination: "/authentication/passwordrecreation",
          permanent: false,
        },
      };
    }
  }
}
