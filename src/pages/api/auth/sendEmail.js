export default async function handler(req, res) {
  if (req.method === "POST") {
    //console.log(req);
    const dateObject = new Date();
    const yearNow = dateObject.getFullYear();
    const monthNow = dateObject.getMonth();
    const todayNow = dateObject.getDate();
    const date = dateObject.setFullYear(yearNow, monthNow, todayNow);
    console.log(date);
    //res.status(200).json({ message: "good" });
    const { name, senderEmail } = req.body;
    try {
      fetch(
        "https://j61p6h19hd.execute-api.ap-southeast-1.amazonaws.com/sendEmail",
        {
          //mode: "no-cors",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            senderEmail,
            senderName: name,
            date,
          }),
        }
      );
      return res.status(200).send({ message: "done" });
    } catch (error) {
      return res.status(500).send({ error: error.toString() });
    }

    //console.log(name, email, req.body);
    /*
    if (name && email) {
      res.status(200).json({ message: "good" });
    }
  https://j61p6h19hd.execute-api.ap-southeast-1.amazonaws.com
    const aws = require("aws-sdk");
aws.config.update({region: "ap-southeast-1"})
const ses = new aws.SES({ apiVersion: '2010-12-01' });
const config = require('./config');
exports.handler = async function (event) {
    
const { senderEmail, senderName, date } = JSON.parse(event.body);
  let  params = {
    Destination: {
      ToAddresses: senderEmail,
    },
    Message: {
        
    Body: {
        
     Html: {
         
     Charset: "UTF-8",
     
     Data: `<h3>Hi ${senderName}!</h3><br/>
     <p>Welcome to our Virtual Reality Site </p><br/>
     <p>Regards,<br/>
     Team Virtual Reality</p>`},

     Subject: {
        Charset: 'UTF-8',
        
        Data: `noreply-confirmation-email-${date}` },
    },
    Source: config.aws.ses.from.default,
  },
  };
  const sendPromise = ses.sendEmail(params).promise();
  
  sendPromise.then(
  function(data) {
    console.log(data.MessageId);
    return {name:"fumba"};
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
};
    */
  }
}
