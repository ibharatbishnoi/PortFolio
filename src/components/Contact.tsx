import { useState } from "react";
import ContactLeft from "./ContactLeft";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/bishnoibharat9610@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(`Thank you, ${formData.name}! Your message has been sent.`);
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-gray-700">
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="CONTACT" des="Contact With Me" />
        </div>
        <div className="w-full">
          <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
            <ContactLeft />
            <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#0B1120] to-[#0B1120] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
              >
                {success && (
                  <p className="text-green-400 text-center animate-bounce">{success}</p>
                )}
                {error && (
                  <p className="text-red-500 text-center animate-bounce">{error}</p>
                )}
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Your Name</p>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="contactInput"
                      type="text"
                    />
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="contactInput"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contactInput"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="contactInput"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="contactTextArea"
                  ></textarea>
                </div>
                <div className="w-full">
                  <button
                    type="submit"
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-gray-600 border"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;
