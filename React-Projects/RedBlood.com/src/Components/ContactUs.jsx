import contactImg from "/src/assets/ContactUs.jpg";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center bg-fuchsia-5 py-10 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center min-w_310 max-w-7xl gap-8">
        <div className="flex flex-col gap-6 flex-2 w-full bg-amber-2">
          {/* Contact Us */}
          <div className="bg-slate-800/60 p-5 rounded-2xl text-slate-200">
            <p className="text-xl sm:text-2xl font-bold text-white">
              Contact Us
            </p>
            <p>We’re Here to Help</p>
            <p>Have questions, feedback, or need urgent support?</p>
            <p>Our team is always ready to guide you.</p>
          </div>

          {/* Address */}
          <div className="bg-slate-800/60 p-5 rounded-2xl text-slate-200">
            <p className="text-xl sm:text-2xl font-bold text-white">Address</p>
            <p>123 BloodCare Street,</p>
            <p>Health City, Sindh, Pakistan.</p>
          </div>

          {/* Phone */}
          <div className="bg-slate-800/60 p-5 rounded-2xl text-slate-200">
            <p className="text-xl sm:text-2xl font-bold text-white">Phone</p>
            <p>+92 300 1234567 (Emergency Line)</p>
            <p>+92 311 9876543 (Support)</p>
          </div>

          {/* Email */}
          <div className="bg-slate-800/60 p-5 rounded-2xl text-slate-200">
            <p className="text-xl sm:text-2xl font-bold text-white">Email</p>
            <p>support@RedBlood.com</p>
            <p>donate@RedBlood.com</p>
          </div>

          {/* Working Hours */}
          <div className="bg-slate-800/60 p-5 rounded-2xl text-slate-200">
            <p className="text-xl sm:text-2xl font-bold text-white">
              Working Hours
            </p>
            <p>Monday – Saturday: 9:00 AM – 8:00 PM</p>
            <p>Emergency support: 24/7 available</p>
          </div>
        </div>

        {/* Image */}
        <div className="flex-2 w-full border rounded-2xl p-5">
          <img
            src={contactImg}
            alt="Contact Us"
            className="lg:h_175 md:h-175 rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
