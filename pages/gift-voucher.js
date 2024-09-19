import Head from 'next/head';

export default function GiftVoucher() {
  return (
    <>
      <Head>
        <title>Gift Voucher - Food Delivery</title>
      </Head>

      <div className="container mx-auto p-8">
        {/* Page Header */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-6">Offer a Gift Voucher</h1>
          <p className="text-2xl text-gray-600">Choose the amount you&#39;d like to offer or activate a voucher.</p>
        </header>

        <main className="flex flex-col gap-16">
          {/* Offer a Gift Voucher */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6">1. Choose the amount to offer</h2>

            {/* Predefined Voucher Amounts */}
            <div className="flex justify-center gap-8 mb-10">
              {['30 €', '50 €', '80 €', '120 €'].map((amount, index) => (
                <button
                  key={index}
                  className="px-12 py-4 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 text-center font-bold text-2xl"
                >
                  {amount}
                </button>
              ))}
            </div>

            {/* Custom Amount Input */}
            <div className="mb-10 flex justify-center">
              <input
                type="number"
                placeholder="Enter custom amount"
                className="p-4 border border-gray-300 rounded-lg text-2xl max-w-xs"
                aria-label="Custom amount"
              />
            </div>

            <button className="px-16 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-semibold text-2xl">
              Continue
            </button>
          </div>

          {/* Activate a Gift Voucher */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6">Activate a Gift Voucher</h2>
            <p className="text-2xl mb-6">1. Log in to continue</p>

            <button className="px-16 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-6 text-2xl">
              Log in!
            </button>

            <p className="text-2xl mb-4">Sign in with Google</p>
            <button className="px-16 py-4 bg-gray-100 text-black rounded-lg hover:bg-gray-200 mb-8 text-2xl">
              Continue with my Google account
            </button>

            <div className="text-center text-gray-500 mb-8 text-xl">OR</div>

            {/* Email Login Form */}
            <form className="flex flex-col items-center gap-6">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                className="p-4 border border-gray-300 rounded-lg w-80 text-2xl"
                aria-label="Email address"
                required
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your password"
                className="p-4 border border-gray-300 rounded-lg w-80 text-2xl"
                aria-label="Password"
                required
              />

              <button className="px-16 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-2xl">
                Login
              </button>

              <p className="mt-6 text-blue-500 text-lg cursor-pointer">I forgot my password</p>
              <p className="mt-2 text-lg">
                I don’t have an account yet?{' '}
                <span className="text-blue-500 cursor-pointer">Sign up</span>
              </p>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

