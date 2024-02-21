const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const router = express.Router();

app.use(express.json());
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

router.post("/contact", async (req, res) => {
  const { firstName, lastName, email, message, phone, recaptchaResponse } = req.body;
  try {
    const { default: fetch } = await import('node-fetch');

    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}`, {
      method: "POST"
    });
    const data = await response.json();
    console.log(recaptchaResponse)
    if (!data.success) {
      console.log("Captcha verification failed");
      return res.status(400).json({ error: "Failed captcha verification" });
    }
    const mail = {
      from: `${firstName} ${lastName}`,
      to: "thomas.laizepro@gmail.com",
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${firstName} ${lastName}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`
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
  } catch (error) {
    console.error("Error verifying captcha:", error);
    res.status(500).json({ error: "Error verifying captcha" });
  }
});

// Configuration pour servir les fichiers statiques depuis le répertoire client/build
app.use(express.static(path.join(__dirname, 'client/build')));

// Redirection de toutes les autres routes vers le fichier index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
