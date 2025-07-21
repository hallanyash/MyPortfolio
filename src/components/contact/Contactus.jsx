import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1dhclrh", // Replace with your service ID
        "template_zc21jfo", // Replace with your template ID
        form.current,
        "3wPpfa7zH3M-i9BLW" // Replace with your public key
      )
      .then((result) => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <section id="contact">
      <div className="w-full relative">
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <div className="grid md:grid-cols-2 gap-8 bg-[#121212] rounded-2xl p-4 max-w-6xl w-full">
            {/* Left Side */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-gray-300 mb-8">
                I'm always interested in new opportunities and exciting
                projects. Let's discuss how we can create something amazing
                together!
              </p>

              {/* Contact Items */}
              <div className="space-y-4 w-full">
                <ContactItem
                  icon={<FaEnvelope />}
                  label="Email"
                  value="hallanyash@gmail.com"
                />
                <ContactItem
                  icon={<FaPhoneAlt />}
                  label="Phone"
                  value="+91 9350919310"
                />
                <ContactItem
                  icon={<FaMapMarkerAlt />}
                  label="Location"
                  value="New Delhi, 110041"
                />
                <ContactItem
                  icon={<FaLinkedin />}
                  label="LinkedIn"
                  value="https://www.linkedin.com/in/yash-hallan/"
                />
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Message</h2>
              <form className="space-y-5" onSubmit={sendEmail} ref={form}>
                <div>
                  <label className="block mb-1 font-medium">Name*</label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Enter your name"
                    required
                    className="w-full bg-[#2c2c2c] text-white p-3 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email*</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full bg-[#2c2c2c] text-white p-3 rounded-md outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Message</label>
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    required
                    className="w-full bg-[#2c2c2c] text-white p-3 rounded-md outline-none h-28 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-4 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg hover:opacity-90"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 p-4 bg-[#1e1e1e] rounded-xl overflow-hidden">
    <div className="text-xl bg-gradient-to-br from-blue-400 to-purple-500 text-white p-3 rounded-full">
      {icon}
    </div>
    <div className="flex flex-col overflow-hidden">
      <p className="font-semibold text-sm md:text-base whitespace-nowrap">
        {label}
      </p>
      <p className="text-gray-300 text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
        {value}
      </p>
    </div>
  </div>
);

export default Contactus;
