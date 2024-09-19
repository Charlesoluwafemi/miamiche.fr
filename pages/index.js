import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/outline'; // Import CheckCircleIcon from Heroicons

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - BonRegal</title>
      </Head>
      <div className="container mx-auto p-4">
        {/* Hero Section */}
        <header className="relative h-[500px] md:h-[600px] bg-gray-800 text-white flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/Restaurant.jpg" // replace with your image path
              alt="Hero Background"
              fill
              style={{ objectFit: 'cover' }}
              quality={100}
            />
          </div>
          <div className="relative text-center p-8 bg-black bg-opacity-40">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Discover Delicious Food Delivered to Your Door
            </h1>
            <p className="text-lg mb-6">
              Explore our curated menus, special offers, and more.
            </p>
            <Link href="/menu-of-the-week">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                View Menu of the Week
              </button>
            </Link>
          </div>
        </header>

        {/* Featured Offer Section */}
        <section className="relative py-12 bg-white">
  <div className="container mx-auto flex flex-col md:flex-row items-center relative">
    <div className="md:w-1/2 z-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        An offer that adapts to the needs of your employees
      </h2>
      <p className="text-lg mb-4">
        Flexibility is key in our B2B offerings. We tailor solutions to meet the unique needs of your business with no restrictions.
      </p>
      <ul className="mb-6">
        <li className="flex items-center mb-2">
          <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />
          Flexibility regarding the regularity of orders (weekly, x/month, etc.)
        </li>
        <li className="flex items-center mb-2">
          <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />
          Flexibility on billing (monthly, quarterly, annual)
        </li>
        <li className="flex items-center mb-2">
          <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />
          A solution tailored to the size of your company
        </li>
        <li className="flex items-center mb-2">
          <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />
          Delivery options: to the office or your employees’ homes
        </li>
        <li className="flex items-center mb-2">
          <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />
          A “canteen” formula for on-site dining options
        </li>
      </ul>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        I request a quote
      </button>
    </div>
    <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full overflow-hidden">
      <Image
        src="/images/homepage.png" // replace with your image
        alt="Offer for employees"
        width={900}
        height={700}
        style={{ objectFit: 'cover' }} // Cover the container while maintaining aspect ratio
        className="rounded-md"
      />
    </div>
  </div>
</section>

              

        {/* Featured Foods Section */}
        {/* Featured Foods Section */}
<main className="mt-8 bg-yellow-50 py-12">
  <section className="mb-12">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
      Featured Foods
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Food 1 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src="/images/menu1.png" // replace with food image
          alt="Food 1"
          width={300} // reduced width
          height={200} // reduced height
          style={{ objectFit: 'cover' }}
          className="rounded-md"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold">Pizza Margherita</h3>
          <p className="text-gray-600 mb-4">Classic Italian pizza with fresh basil and mozzarella.</p>
          <Link href="/food/1">
            <button className="text-blue-500 hover:underline">View Details</button>
          </Link>
        </div>
      </div>

      {/* Food 2 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src="/images/menu2.png" // replace with food image
          alt="Food 2"
          width={300} // reduced width
          height={200} // reduced height
          style={{ objectFit: 'cover' }}
          className="rounded-md"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold">Sushi Platter</h3>
          <p className="text-gray-600 mb-4">A delicious assortment of fresh sushi rolls.</p>
          <Link href="/food/2">
            <button className="text-blue-500 hover:underline">View Details</button>
          </Link>
        </div>
      </div>

      {/* Food 3 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src="/images/menu3.png" // replace with food image
          alt="Food 3"
          width={300} // reduced width
          height={200} // reduced height
          style={{ objectFit: 'cover' }}
          className="rounded-md"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold">Grilled Steak</h3>
          <p className="text-gray-600 mb-4">Juicy steak cooked to perfection with garlic butter.</p>
          <Link href="/food/3">
            <button className="text-blue-500 hover:underline">View Details</button>
          </Link>
        </div>
      </div>

      {/* Food 4 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src="/images/menu5.png" // replace with food image
          alt="Food 4"
          width={300} // reduced width
          height={200} // reduced height
          style={{ objectFit: 'cover' }}
          className="rounded-md"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold">Pasta Carbonara</h3>
          <p className="text-gray-600 mb-4">Creamy pasta with pancetta, parmesan, and egg.</p>
          <Link href="/food/4">
            <button className="text-blue-500 hover:underline">View Details</button>
          </Link>
        </div>
      </div>

      {/* Food 5 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src="/images/menu6.png" // replace with food image
          alt="Food 5"
          width={300} // reduced width
          height={200} // reduced height
          style={{ objectFit: 'cover' }}
          className="rounded-md"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold">Vegan Salad Bowl</h3>
          <p className="text-gray-600 mb-4">Fresh greens, quinoa, and avocado for a healthy meal.</p>
          <Link href="/food/5">
            <button className="text-blue-500 hover:underline">View Details</button>
          </Link>
        </div>
      </div>

      {/* Food 6 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src="/images/menu7.png" // replace with food image
          alt="Food 6"
          width={300} // reduced width
          height={200} // reduced height
          style={{ objectFit: 'cover' }}
          className="rounded-md"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold">Cheeseburger</h3>
          <p className="text-gray-600 mb-4">Classic cheeseburger with cheddar, lettuce, and tomato.</p>
          <Link href="/food/6">
            <button className="text-blue-500 hover:underline">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  </section>


          {/* How It Works Section */}
        
          <section className="bg-white py-12">
            <div className="container mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
              How it works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4">
                  I choose my dishes
                </h3>
                <p>
                  Every week I discover new and varied recipes (classic,
                  vegetarian, fish, gluten-free and fitness), cooked with
                  fresh products and without preservatives.
                </p>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4">
                  My chef cooks for me
                </h3>
                <p>
                  Accompanied by his assistants, the chef takes care of
                  everything. The meals are cooked here in Belgium with
                  attention and products from local producers.
                </p>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4">
                  Delivery where I want
                </h3>
                <p>
                  Delivery to work? At home? Different delivery slots are
                  offered to meet my expectations.
                </p>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-4">
                  I heat it up and it&#39;s ready
                </h3>
                <p>
                  Eating healthy without constraints is quick! In 3 minutes in
                  the microwave or 12 minutes in the conventional oven, my
                  dish is ready to be enjoyed!
                </p>
                </div>
              </div>
            </div>
          </section>
        </main>


         {/* Meals Preview Section */}
<section className="mt-8 bg-yellow-50 py-12" >
  <div className="container mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-8">
      A little preview of the meals we will deliver to you next week
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {/* Meal 1 */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <Image
          src="/images/menu9.png"
          alt="Meal 1"
          width={256}
          height={144}
          className="rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">
          Marinated Salmon Poke Bowl
        </h3>
        <p>503 kcal - P 21 L 24 G 53</p>
      </div>

      {/* Meal 2 */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <Image
          src="/images/menu10.png"
          alt="Meal 2"
          width={256}
          height={144}
          className="rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">
          Grilled Chicken Caesar Salad
        </h3>
        <p>425 kcal - P 30 L 15 G 35</p>
      </div>

      {/* Meal 3 */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <Image
          src="/images/menu11.png"
          alt="Meal 3"
          width={256}
          height={144}
          className="rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">
          Vegan Quinoa Buddha Bowl
        </h3>
        <p>370 kcal - P 12 L 10 G 60</p>
      </div>

      {/* Meal 4 */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <Image
          src="/images/menu12.png"
          alt="Meal 4"
          width={256}
          height={144}
          className="rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">
          Beef Stir Fry with Vegetables
        </h3>
        <p>600 kcal - P 30 L 35 G 45</p>
      </div>

      {/* Meal 5 */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <Image
          src="/images/menu13.png"
          alt="Meal 5"
          width={256}
          height={144}
          className="rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">
          Shrimp Tacos with Mango Salsa
        </h3>
        <p>480 kcal - P 25 L 20 G 40</p>
      </div>

      {/* Meal 6 */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <Image
          src="/images/menu14.png"
          alt="Meal 6"
          width={256}
          height={144}
          className="rounded-md mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">
          Spaghetti Bolognese
        </h3>
        <p>550 kcal - P 25 L 22 G 70</p>
      </div>
    </div>
    <button className="bg-blue-500 text-white px-4 py-2 rounded mt-8">
      See All Meals
    </button>
  </div>
</section>

{/* Testimonials Section */}
<section className="bg-gray-100 py-16">
  <div className="container mx-auto text-center px-4">
    <h2 className="text-2xl md:text-3xl font-bold mb-8">
      What Our Clients Say
    </h2>
    <p className="text-lg mb-8">
      They tested and approved BonRegal, an unparalleled culinary experience, combining flavor and practicality.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <p className="text-gray-700 mb-4">
        &#34;BonRegal has completely transformed my meal prep routine. The flavors are amazing, and the convenience is unmatched.&#34;
        </p>
        <div className="flex items-center justify-center">
          <Image
            src="/images/man1.jpg" // replace with client photo
            alt="Client 1"
            width={64}                // set the width of the image
            height={64} 
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">John Doe</h4>
            <p className="text-gray-600">Business Owner</p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <p className="text-gray-700 mb-4">
        &#34;The quality of the meals and the ease of ordering have made BonRegal my go-to choice for healthy eating.&#34;
        </p>
        <div className="flex items-center justify-center">
          <Image
            src="/images/woman1.jpg" // replace with client photo
            alt="Client 2"
            width={64}                // set the width of the image
            height={64} 
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">Jane Smith</h4>
            <p className="text-gray-600">Marketing Specialist</p>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <p className="text-gray-700 mb-4">
        &#34;I love how BonRegal combines taste with health. It&#39;s the perfect solution for a busy lifestyle.&#39;
        </p>
        <div className="flex items-center justify-center">
          <Image
            src="/images/man2.jpg" // replace with client photo
            alt="Client 3"
            width={64}                // set the width of the image
            height={64} 
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">Alice Johnson</h4>
            <p className="text-gray-600">Freelancer</p>
          </div>
        </div>
      </div>

      {/* Testimonial 4 */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <p className="text-gray-700 mb-4">
        &#34;BonRegal offers the best meal prep services I&#39;ve ever used. The meals are delicious and the service is outstanding.&#34;
        </p>
        <div className="flex items-center justify-center">
          <Image
            src="/images/woman2.jpg" // replace with client photo
            alt="Client 4"
            width={64}                // set the width of the image
            height={64} 
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">Michael Brown</h4>
            <p className="text-gray-600">Entrepreneur</p>
          </div>
        </div>
      </div>

      {/* Testimonial 5 */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <p className="text-gray-700 mb-4">
        &#34;The variety and quality of the meals have exceeded my expectations. I can&#39;t recommend BonRegal enough!&#34;
        </p>
        <div className="flex items-center justify-center">
          <Image
            src="/images/man3.jpg" // replace with client photo
            alt="Client 5"
            width={64}                // set the width of the image
            height={64} 
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">Emily Davis</h4>
            <p className="text-gray-600">Teacher</p>
          </div>
        </div>
      </div>

      {/* Testimonial 6 */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <p className="text-gray-700 mb-4">
        &#39;I appreciate how Fresheo caters to my dietary needs while delivering mouthwatering meals.&#39;
        </p>
        <div className="flex items-center justify-center">
          <Image
            src="/images/woman3.jpg" // replace with client photo
            alt="Client 6"
            width={64}                // set the width of the image
            height={64} 
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">Sophia Lee</h4>
            <p className="text-gray-600">Fitness Trainer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



         {/* Footer Section */}
         <footer className="bg-gray-800 text-white py-6 mt-12">
  <div className="container mx-auto text-center">
    <p className="text-lg mb-4">© 2024 BonRegal. All rights reserved.</p>
    <div className="flex justify-center space-x-4">
      <Link href="/about">
        <button className="text-blue-400 hover:underline">About Us</button>
      </Link>
      <Link href="/contact">
        <button className="text-blue-400 hover:underline">Contact</button>
      </Link>
      <Link href="/privacy-policy">
        <button className="text-blue-400 hover:underline">Privacy Policy</button>
      </Link>
    </div>
  </div>
</footer>

      </div>
    </>
  );
}
