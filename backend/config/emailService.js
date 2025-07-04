import nodemailer from "nodemailer";

// Order Confirmation Email
export const sendOrderEmail = async (toEmail, items, amount) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const itemList = items.map((item, i) =>
    `${i + 1}. ${item.name} (Qty: ${item.quantity}) - ₹${item.price}`
  ).join('\n');

  const mailOptions = {
    from: `"ForEver" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: "🛒 Order Confirmation - Thank You for Shopping!",
    text: `Your order has been placed successfully.\n\nItems:\n${itemList}\n\nTotal Amount: ₹${amount}\n\nWe will deliver it soon. Thank you! 😊`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Order email sent to", toEmail);
  } catch (err) {
    console.error("❌ Error sending order email:", err); // log full error
  }
};

// Invoice Email with PDF Attachment
export const sendInvoiceEmail = async (toEmail, pdfBuffer) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"ForEver" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: "📦 Your Order Invoice - Delivered",
    text: `Hi there,

We're happy to let you know that your order has been successfully delivered! 🎉

Please find your invoice attached with this email for your records.

If you have any questions or need further assistance, feel free to reach out.

Thank you for shopping with ForEver. We appreciate your trust in us! 😊

Best regards,  
Team ForEver`,
    attachments: [
      {
        filename: 'invoice.pdf',
        content: pdfBuffer,
        contentType: 'application/pdf',
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Invoice email sent to", toEmail);
  } catch (err) {
    console.error("❌ Error sending invoice email:", err); // log full error
  }
};
