// backend/config/invoiceGenerator.js

import PDFDocument from "pdfkit";

const generateInvoice = async (order) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const buffers = [];

    doc.on("data", (chunk) => buffers.push(chunk));
    doc.on("end", () => {
      const pdfBuffer = Buffer.concat(buffers);
      resolve(pdfBuffer);
    });

    doc.on("error", (err) => {
      reject(err);
    });

    // 📄 Start writing invoice
    doc.fontSize(20).text("Invoice", { align: "center" });
    doc.moveDown();

    doc.fontSize(12).text(`Order ID: ${order._id}`);
    doc.text(`Customer Email: ${order.user.email}`);
    doc.text(`Order Date: ${new Date(order.createdAt).toLocaleString()}`);
    doc.moveDown();

    doc.text("Products:");
    order.items.forEach((item, index) => {
      doc.text(`${index + 1}. ${item.name} x ${item.quantity} = ₹${item.price}`);
    });

    doc.moveDown();
    doc.font("Helvetica-Bold").text(`Total: ₹${order.amount}`, { align: "right" });

    doc.end(); // 🚨 IMPORTANT: This finalizes the PDF
  });
};

export { generateInvoice };
