

export default function Contact() {
  return (
    <section className="px-4 py-10 md:py-20 bg-[#160f35]" id="contact ">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className=" text-text-dark text-3xl text-white md:text-4xl font-bold leading-tight tracking-[-0.015em] pb-4">
          Let's Build Something Amazing Together
        </h2>
        <p className="/80 text-white text-text-dark/80 mb-8">
          Ready to start your project? Fill out the form below and we'll get
          back to you shortly.
        </p>

        <form className="space-y-6 text-left">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white text-text-dark"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 block w-full  rounded-lg border-gray-600  bg-gray-700 shadow-sm focus:border-primary focus:ring-primary sm:text-sm  text-text-dark"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-white text-sm font-medium  text-text-dark"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full rounded-lg  border-gray-600 bg-background-light bg-gray-700 shadow-sm focus:border-primary focus:ring-primary sm:text-sm  text-text-dark"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-black text-sm font-medium  text-text-dark"
            >   Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-lg  border-gray-600 bg-background-light bg-gray-700 shadow-sm focus:border-primary focus:ring-primary sm:text-sm  text-text-dark"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-black bg-black hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
