
const ResumeForm = () => {
  return (
    <div className="w-full bg-[#fafafa]">
      <div className="w-10/12 mx-auto py-20 flex flex-col md:flex-row items-center gap-20 justify-between">
      <div className="w-full md:w-1/2">
        <div className='bg-[#BDD530] py-1 w-24 mb-4'></div>
        <h1 className="text-5xl font-bold">Connect with Talent <br /> Track Services - A <br /> Leading Recruitment <br /> Consultancy</h1>
        <p className="mt-8 leading-7">
           Provide your candidate information to be considered for top job opportunities across various industries. As a Top Manpower Consultancy, we leverage our extensive network to match you with roles that align with your career aspirations
        </p>
      </div>

      {/*form section */}
      <div className="w-full md:w-1/2 bg-white p-5">
        <h2 className="text-3xl font-bold mb-6 border-l-4 border-green-500 pl-2">
        Submit Resume
      </h2>

      <form className="space-y-5">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-green-500"
            />
          </div>
        </div>

        <div>
          <input
            type="text"
            placeholder="Phone Number"
            className="mt-1 block w-full border-b border-gray-300 focus:outline-none focus:border-green-500"
          />
        </div>

        <div>
          <textarea
          placeholder="Additional Details"
            rows="3"
            className="mt-1 block w-full border-b border-gray-300 rounded-md focus:outline-none focus:border-green-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
          <input type="file" className="block w-full text-sm text-gray-500" />
        </div>

        <div className="my-4">
          {/* Google reCAPTCHA placeholder */}
          <label className="block text-sm font-medium text-gray-700 mb-2">Recaptcha</label>
          <div className="bg-white border p-3 inline-block shadow-sm">
            <div className="w-[304px] h-[60px] bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
              reCAPTCHA placeholder
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold py-2 px-6 rounded"
        >
          Submit Now
        </button>
      </form>
      </div>
      </div>

      <p className="mx-20 mb-10 font-bold">As Leading Headhunters, we ensure that your journey towards landing your dream job is smooth and efficient. Submit your details today and take the first step towards your next career milestone with a Top Placement Agency.</p>
    </div>
  )
}

export default ResumeForm
