
const ContactForm = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">Get in Touch</h2>
      <p className="text-gray-700 mb-10">
        Please submit your contact details and requirements so we can assist you as quickly as possible, typically within an hour.
      </p>

      <h3 className="text-xl md:text-2xl font-bold text-black mb-6">Submit Job Requirement Details</h3>

      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            placeholder="Company Name"
            className="border-b border-gray-400 outline-none py-2"
          />
          <input
            type="text"
            placeholder="Contact Person"
            className="border-b border-gray-400 outline-none py-2"
          />
          <input
            type="email"
            placeholder="Official Email ID"
            className="border-b border-gray-400 outline-none py-2"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="border-b border-gray-400 outline-none py-2"
          />
        </div>

        <textarea
          placeholder="Requirement Details"
          rows="4"
          className="w-full border-b border-gray-400 outline-none mb-6"
        ></textarea>

        <div className="mb-4">
          <input type="file" />
        </div>

        <div className="mb-6">
          <div className="bg-gray-100 p-3 rounded-md w-fit">
            <p className="text-sm text-gray-700">Recaptcha</p>
            <div className="h-20 w-72 bg-white border border-gray-300 flex items-center justify-center mt-2">
              <input type="checkbox" className="mr-2" />
              <span>I’m not a robot</span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#77b81e] text-white font-semibold px-6 py-2 rounded hover:bg-green-600 transition"
        >
          Submit Now
        </button>
      </form>

      <div className="mt-10">
        <p className="font-semibold mb-2">
          Alternatively, HR and Companies feel free to reach out directly to discuss your recruitment needs.
        </p>

        <p className="font-bold mt-4">Contact Person: Mr. Rakesh Bysani</p>

        <div className="mt-2 space-y-1 text-[#000]">
          <p>📞 +91 98450 77652</p>
          <p>✉️ contact@talentrack.net</p>
          <p>💬 Whatsapp</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
