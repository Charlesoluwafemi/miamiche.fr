// pages/business.js
import Head from 'next/head';

export default function Business() {
  return (
    <>
      <Head>
        <title>Business - Food Delivery</title>
      </Head>
      <div className="container mx-auto p-4">
        <header className="mb-6">
          <h1 className="text-4xl font-bold">Business Opportunities</h1>
          <p className="text-lg text-gray-600">Learn how to partner with us for business opportunities.</p>
        </header>
        <main>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Partner with Us</h2>
            <p className="mb-4">We offer a variety of partnership opportunities. Fill out the form below to get started.</p>
            <form>
              <label className="block text-lg font-medium mb-2" htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <label className="block text-lg font-medium mb-2" htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <label className="block text-lg font-medium mb-2" htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
