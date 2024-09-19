import Head from 'next/head';
import Image from 'next/image';

export default function DiscoveryBox() {
  return (
    <>
      <Head>
        <title>Discovery Box - Food Delivery</title>
      </Head>
      <div className="container mx-auto p-4">
        {/* Introduction Section */}
        <header className="text-center mb-12 relative bg-cover bg-center" style={{ backgroundImage: 'url(/images/restaurant1.jpg)' }}>
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 p-6">
            <h1 className="text-4xl font-bold text-white mb-4">Make your life easier with our dishes</h1>
            <p className="text-lg text-white mb-6">Healthy & smart. Discover Fresheo dishes. See the discovery box.</p>
            <p className="text-lg text-white">Make your organization easier. No need to cook, reheat & enjoy! Don’t waste your time in the kitchen anymore. Eat a balanced diet without having to cook.</p>
          </div>
        </header>

        {/* Discovery Box Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">The best way to discover Fresheo</h2>
          <p className="text-lg text-gray-600 text-center mb-6">Try our tasty and balanced meal boxes, meeting everyone's needs and desires. 2 boxes to choose from, all composed of 4 dishes & 4 desserts.</p>
          <div className="flex justify-center mb-6">
            <Image src="/images/homepage.png" alt="Arrow" width={50} height={50} />
          </div>
          <p className="text-lg text-gray-600 text-center">Delicately prepared ingredients, selected & local products to promote the short circuit.</p>
        </section>

        {/* How It Works Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">How does the discovery box work?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-4">
              <Image src="/images/gallery01.png" alt="Classic Box" width={300} height={200} objectFit="cover" />
              <h3 className="text-xl font-bold mt-4">Classic Box</h3>
              <p className="text-gray-600 mt-2">2 boxes to choose from: classic and vegetarian. Each box consists of 4 dishes and 4 desserts. We deliver on Saturday, Sunday, Monday, and Tuesday, wherever you want.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-4">
              <Image src="/images/gallery02.png" alt="Vegetarian Box" width={300} height={200} objectFit="cover" />
              <h3 className="text-xl font-bold mt-4">Vegetarian Box</h3>
              <p className="text-gray-600 mt-2">Make your choice! Select the desired diet and we’ll take care of the rest! Your meal boxes are delivered to your home or workplace.</p>
            </div>
          </div>
        </section>

        {/* Pricing and Promotions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Promotional Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
              <h3 className="text-xl font-bold mb-2">Classic Box</h3>
              <p className="text-gray-600 mb-2">Box made by Valentine, dietician and creator of our healthy and delicious recipes.</p>
              <p className="text-lg font-semibold mb-2">Discovery Promo: 4 meals + 4 desserts</p>
              <p className="text-lg font-semibold mb-2">Price: €49.95 (i.e. €7.33 / dish)</p>
              <p className="text-gray-600">Don't delay! Promo expires in 6 days: 05 hours: 46 minutes: 15 seconds</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">I'm hungry, I want to try!</button>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
              <h3 className="text-xl font-bold mb-2">Vegetarian Box</h3>
              <p className="text-gray-600 mb-2">Box made by Valentine, dietician and creator of our healthy and delicious recipes.</p>
              <p className="text-lg font-semibold mb-2">Discovery Promo: 4 meals + 4 desserts</p>
              <p className="text-lg font-semibold mb-2">Price: €49.95 (i.e. €7.33 / dish)</p>
              <p className="text-gray-600">Don't delay! Promo expires in 6 days: 05 hours: 46 minutes: 15 seconds</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">I'm hungry, I want to try!</button>
            </div>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Other things to know about us</h2>
          <p className="text-lg text-gray-600 text-center mb-6">Want to know more about our balanced meal boxes, made from local ingredients?</p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Origin of products</li>
            <li>Local preparation</li>
            <li>Composition of the dishes</li>
            <li>Storing dishes</li>
            <li>Flexible subscription</li>
          </ul>
          <p className="text-lg text-gray-600 text-center">More than 1000 people receive our prepared meals in Belgium every week. And you, what are you waiting for?</p>
        </section>

        {/* Press and Testimonials */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">The press is talking about it</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Add logos for press mentions */}
            <Image src="/images/logo.png" alt="Press Logo 1" width={100} height={50} />
            <Image src="/images/logo.png" alt="Press Logo 2" width={100} height={50} />
            <Image src="/images/logo.png" alt="Press Logo 3" width={100} height={50} />
            {/* Add more logos as needed */}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Find out what they think</h2>
          <p className="text-lg text-gray-600 mb-6">They tested and approved Fresheo, an unparalleled culinary experience, combining flavor and practicality.</p>
          <div className="flex justify-center">
            {/* Placeholder for testimonials */}
            <Image src="/images/man1.png" alt="Google Analytics" width={150} height={50} />
          </div>
        </section>
      </div>
    </>
  );
}
