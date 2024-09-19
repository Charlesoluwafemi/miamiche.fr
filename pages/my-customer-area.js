import Head from 'next/head';

export default function MyCustomerArea() {
  return (
    <>
      <Head>
        <title>My Customer Area - Food Delivery</title>
      </Head>
      <div className="container mx-auto p-8 flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-bold text-blue-600">My Customer Area</h1>
          <p className="text-xl text-gray-700 mt-4">Manage your orders, preferences, and account settings with ease.</p>
        </header>

        <main className="w-full max-w-5xl">
          {/* Section 1: Order History */}
          <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-green-500 text-center">Order History</h2>
            <div className="bg-gray-100 p-6 rounded-lg mb-6 text-left">
              <h3 className="text-2xl font-bold mb-2">Order #12345</h3>
              <p className="text-gray-600">Details about the order...</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-left">
              <h3 className="text-2xl font-bold mb-2">Order #12346</h3>
              <p className="text-gray-600">Details about the order...</p>
            </div>
          </section>

          {/* Section 2: Account Settings */}
          <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-blue-500 text-center">Account Settings</h2>
            <p className="text-gray-600 text-lg">Update your personal details, such as name, email, and password.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Edit Account</button>
          </section>

          {/* Section 3: Saved Addresses */}
          <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-yellow-500 text-center">Saved Addresses</h2>
            <p className="text-gray-600 text-lg">Manage your delivery addresses for faster checkout.</p>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded mt-4">Add New Address</button>
          </section>

          {/* Section 4: Payment Methods */}
          <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-red-500 text-center">Payment Methods</h2>
            <p className="text-gray-600 text-lg">Add or remove credit cards and other payment options.</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">Manage Payments</button>
          </section>

          {/* Section 5: Preferences */}
          <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-purple-500 text-center">Preferences</h2>
            <p className="text-gray-600 text-lg">Customize your meal preferences, dietary restrictions, and delivery timings.</p>
            <button className="bg-purple-500 text-white px-4 py-2 rounded mt-4">Edit Preferences</button>
          </section>
        </main>
      </div>
    </>
  );
}
