<form
  action="https://formsubmit.co/bishnoibharat9610@gmail.com"
  method="POST"
  className="w-full flex flex-col gap-6"
>
  {/* Disable CAPTCHA */}
  <input type="hidden" name="_captcha" value="false" />

  {/* Optional: redirect to thank you page after submit */}
  <input type="hidden" name="_next" value="https://ibharatbishnoi.vercel.app/thankyou" />

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="contactInput"
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    required
    className="contactInput"
  />
  <input
    type="text"
    name="phone"
    placeholder="Phone Number"
    className="contactInput"
  />
  <input
    type="text"
    name="subject"
    placeholder="Subject"
    required
    className="contactInput"
  />
  <textarea
    name="message"
    placeholder="Message"
    rows="6"
    required
    className="contactInput"
  ></textarea>
  <button
    type="submit"
    className="w-fit px-6 py-3 bg-designColor text-white rounded-lg hover:bg-opacity-80 transition"
  >
    Send Message
  </button>
</form>
