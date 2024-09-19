import Head from 'next/head';
import Image from 'next/image';

export default function Blog() {
  const articles = [
    {
      title: "Quick balanced meal: How to eat healthy with BonRegal?",
      description: "Are you looking for balanced and quick meals? Fresheo delivers healthy, tasty and ready-to-heat meals directly to your home in Belgium.",
      image: "/images/Article1.png",
    },
    {
      title: "Quick healthy lunch: The solution with BonRegal",
      description: "Discover how a quick healthy lunch with Fresheo can simplify your daily life. Wide choice of healthy meals delivered everywhere in Belgium.",
      image: "/images/Article2.png",
    },
    {
      title: "Healthy and Quick Meals: Time-Saving Tips",
      description: "Discover how Fresheo simplifies your daily life with healthy and quick dishes. Plan your meals, save time and eat balanced effortlessly!",
      image: "/images/Article3.png",
    },
    {
      title: "Don’t feel like cooking? Choose BonRegal!",
      description: "Don’t feel like cooking? Discover how Fresheo helps you with healthy and varied meals, delivered to your home and ready to be reheated in 3 minutes.",
      image: "/images/Article4.png",
    },
    {
      title: "Eating healthy without cooking: How BonRegal can help you",
      description: "Discover how to eat healthy without cooking thanks to Fresheo. Enjoy healthy meals delivered to your home, without the stress of preparation and cooking!",
      image: "/images/menu9.png",
    },
    {
      title: "Save time and plan your meals for the week with BonRegal",
      description: "Discover how to plan your weekly meals with Fresheo and simplify your daily life. Save time and enjoy balanced and tasty meals!",
      image: "/images/menu10.png",
    },
    {
      title: "Eat healthy and save time with BonRegal!",
      description: "Adopt a balanced diet and eat healthily while saving time? Discover how Fresheo helps you promote a healthy lifestyle.",
      image: "/images/menu11.png",
    },
    {
      title: "Healthy Cooking Blog: Get the Keys to Eating Well",
      description: "Dive into the world of healthy cooking with my blog: tips for balanced meals, culinary discoveries and much more to transform your daily life.",
      image: "/images/menu14.png",
    },
  ];

  return (
    <>
      <Head>
        <title>Blog - Food Delivery</title>
      </Head>
      <div className="container mx-auto p-4">
        <header className="mb-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Latest Articles</h1>
          <p className="text-lg text-gray-600">Read our latest articles and updates.</p>
        </header>
        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={300} // Set appropriate width
                    height={200} // Set appropriate height
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <button className="text-blue-500 hover:underline">Learn more</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
