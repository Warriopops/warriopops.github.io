const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use("/", router);


const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log('Erreur lors de la vérification du transport de messagerie :', error);
  } else {
    console.log("Transport de messagerie prêt à envoyer des e-mails");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + ' ' + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: name,
    to: "thomas.laizepro@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log('Erreur lors de l\'envoi de l\'e-mail :', error);
      res.status(500).json({ error: 'Une erreur est survenue lors de l\'envoi de l\'e-mail' });
    } else {
      console.log('E-mail envoyé avec succès');
      res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
