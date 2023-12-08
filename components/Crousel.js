<div className='bg-gray-50' onMouseEnter={() => setHeader(true)}>
  <div className='container mx-auto sm:px-3 flex flex-col items-center justify-center'>
  <div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">
          20,000+ growing companies use greytHR
          <br /> Take a demo and find out why.
        </h2>
        <div className="flex flex-col">
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Full name*"
                name="name"
                required
                maxLength="100"
                id="demo-form-first-field"
                className="border p-2"
                value=""
              />
              <input
                type="text"
                placeholder="Mobile number*"
                name="mobileNumber"
                required
                minLength="10"
                maxLength="10"
                pattern="^[6789][0-9]{9}$"
                id="home_page_demo_phone_input"
                className="border p-2"
                value=""
              />
              <input
                type="email"
                placeholder="Business email*"
                name="email"
                required
                maxLength="100"
                className="border p-2"
                value=""
              />
              <input
                type="text"
                placeholder="Company name*"
                name="company"
                required
                maxLength="200"
                className="border p-2"
                value=""
              />
            </div>
            <button className="bg-blue-500 text-white p-2 rounded">
              Request a demo
            </button>
          </form>
          
        </div>
      </div>
    </div>
</div>

</div>