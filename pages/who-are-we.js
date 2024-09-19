import Head from 'next/head';
import Image from 'next/image';

export default function WhoAreWe() {
  return (
    <>
      <Head>
        <title>Who Are We - BonRegal</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            A Concept Born from a Transformative Life Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our founder turned his personal health journey into a positive force. Since BonRegal’s creation, our mission has been to promote a balanced diet, helping everyone enjoy healthy and delicious dishes.
          </p>
        </header>

        <main className="text-center">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Discover the Dishes on Offer</h2>
            <p className="text-lg text-gray-700 max-w-xl mx-auto">
              Explore our discovery box and sample some of the delicious meals we offer.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">It All Started with a Health Problem</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Johnny, the founder of BonRegal, faced significant weight gain due to a health problem at age 13. After trying many diets, he successfully lost nearly 50 kg through a healthy, varied diet. His experience led him to create Fresheo, with a goal to help others eat better and live better.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Fresheo: An Essential Reference</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              BonRegal allows you to select meals for the week, have them delivered, and enjoy healthy, fresh food without the hassle. We offer a range of delicious, balanced dishes that save time and effort.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Focus on Fresh and Local</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              We source fresh, local, and seasonal ingredients from regional suppliers like Van Dijk Foods and JJ Delvaux to ensure the highest quality in every meal.
            </p>
            <Image
              src="/images/chef.png"
              alt="Fresh and Local"
              width={800}
              height={500}
              className="mx-auto rounded-lg shadow-lg"
            />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Different Diets, Different Goals</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              With over 16 different meals weekly, Fresheo offers options for every dietary need: meat, fish, vegetarian, fitness, and gluten-free. Our nutritionist ensures every meal is balanced and transparent.
            </p>
            <Image
              src="/images/woman3.jpg"
              alt="Nutritionist Vali"
              width={800}
              height={500}
              className="mx-auto rounded-lg shadow-lg"
            />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Beyond the Borders...</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              From Wallonia to Flanders and beyond, Fresheo delivers healthy meals across Belgium, ensuring freshness and timely delivery by our dedicated drivers.
            </p>
            <Image
              src="/images/man2.jpg"
              alt="Fresheo Van"
              width={800}
              height={500}
              className="mx-auto rounded-lg shadow-lg"
            />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Strong Values</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Human connection, transparency, innovation, and sustainability are at the core of Fresheo’s values. We use recyclable packaging and work with local suppliers to minimize environmental impact.
            </p>
            <Image
              src="/images/woman1.jpg"
              alt="Sustainability"
              width={800}
              height={500}
              className="mx-auto rounded-lg shadow-lg"
            />
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Discover Our Meal Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Image
                src="/images/menu1.png"
                alt="Meal 1"
                width={400}
                height={300}
                className="rounded-lg shadow-lg mx-auto"
              />
              <Image
                src="/images/menu2.png"
                alt="Meal 2"
                width={400}
                height={300}
                className="rounded-lg shadow-lg mx-auto"
              />
              {/* Add more meal images as needed */}
            </div>
          </section>

          <footer className="mt-12">
            <p className="text-center text-gray-600">© 2024 BonRegal. All Rights Reserved.</p>
          </footer>
        </main>
      </div>
    </>
  );
}
