require("dotenv").config();
const nodemailer = require("nodemailer");
const express = require("express"),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  cors = require("cors"),
  app = express();
const path = require("path");
// ENVIRONMENT CONFIG
var env = (process.env.NODE_ENV = process.env.NODE_ENV || "development");
var port = 3001;
var router = express.Router();

// EXPRESS CONFIG
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(methodOverride());
app.use(express.static(__dirname + "/public"));
app.use(express.static("."));

// Start server
app.listen(port, function () {
  console.log("Server listening on port " + port);
});
//stripe
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

//checkout redirect

const checkout_domain = "http://localhost:3000/checkout";
app.post("/create-checkout-session", async (req, res) => {
  const items = req.body;

  let productsData = [];
  await items.forEach((element) => {
    let products = {
      name: `${element.name}`,
      images: [`${element.image}`],
    };
    element = {
      price_data: {
        currency: "PHP",
        product_data: products,
        unit_amount: `${element.price}00`,
      },
      quantity: `${element.amount}`,
    };
    productsData.push(element);
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: productsData,
    shipping_address_collection: {
      allowed_countries: ["PH"],
    },
    mode: "payment",
    success_url:
      "http://localhost:3001/order/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: `http://localhost:3001/order/cancel?session_id={CHECKOUT_SESSION_ID}`,
  });

  res.json({ id: session.id });
});
app.get("/order/success", async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  const customer = await stripe.customers.retrieve(session.customer);

  res.sendFile(path.join(__dirname + "/static/success.html"));
});
app.get("/order/cancel", async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  const customer = await stripe.customers.retrieve(session.customer);

  res.sendFile(path.join(__dirname + "/static/cancel.html"));
});

app.use("/", router);
//nodemailer
//TODO adjust node mailer
async function main() {
  // Generate test SMTP service account from ethereal.email

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",

    auth: {
      user: "yourmail@gmail.com", // generated ethereal user
      pass: "yourpassword", // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: "ivankhoda@gmail.com", // sender address
    to: "ivankhoda@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Test email", // plain text body
    html: `<b>Hello world?</b> <b>$</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
