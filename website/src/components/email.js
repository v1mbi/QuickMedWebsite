import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const sendEmailNotification = async (subject, code, body) => {
  const templateParams = {
    subject: subject,
    code: code,
    message: body,
    to_email: "saurombeian@gmail.com",
  };

  try {
    const response = await emailjs
      .send(
        "service_eitdvac",
        "template_kwinsr8",
        templateParams,
        "4yXC2v-FEQpC1HVoB");
    // Beautiful Success Alert
    Swal.fire({
      title: "Message Sent!",
      text: `Thanks ${subject}, we'll review your ${code} request shortly.`,
      icon: "success",
      confirmButtonColor: "#1d4ed8", // Matches your blue-700
      background: "#f8fafc",
      borderRadius: "1.5rem",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
    return response;
  } catch (err) {
    // Beautiful Error Alert
    Swal.fire({
      title: "Submission Failed",
      text: "Our servers are acting up. Please try again or call our hotline.",
      icon: "error",
      confirmButtonColor: "#dc2626", // Matches your red-600
      background: "#fff",
      borderRadius: "1.5rem",
    });
    throw err;
  }
};
