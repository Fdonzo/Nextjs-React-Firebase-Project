import axios from "axios";

const sendEmailToApi = async (senderEmail, name) => {
  const response = await axios({
    method: "POST",
    url: "/api/auth/sendEmail",
    data: {
      name,
      senderEmail,
    },
    headers: { "Content-Type": "application/json" },
  });
  const { data } = response;
  if (data.message === "done") {
    console.log(data.message);
  }

  console.log(data.error);
};
export default sendEmailToApi;
