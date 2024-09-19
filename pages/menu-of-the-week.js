import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

const menuItems = [
  { id: 1, name: "Spaghetti Carbonara", description: "Classic Italian pasta with creamy sauce, pancetta, and Parmesan cheese.", price: 12.99, image: "/images/menu1.png" },
  { id: 2, name: "Chicken Caesar Salad", description: "Fresh romaine lettuce, grilled chicken, croutons, and Caesar dressing.", price: 14.99, image: "/images/menu2.png" },
  { id: 3, name: "Beef Stroganoff", description: "Tender beef strips in a rich mushroom sauce served over egg noodles.", price: 11.99, image: "/images/menu3.png" },
  { id: 4, name: "Vegetable Stir-Fry", description: "A colorful mix of vegetables stir-fried in a savory sauce, served with rice.", price: 13.99, image: "/images/menu4.png" },
  { id: 5, name: "Margherita Pizza", description: "Classic pizza with tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.", price: 15.99, image: "/images/menu5.png" },
  { id: 6, name: "Salmon Teriyaki", description: "Grilled salmon fillet glazed with teriyaki sauce, served with steamed vegetables and rice.", price: 16.99, image: "/images/menu6.png" },
  { id: 7, name: "Beef Tacos", description: "Soft tacos filled with seasoned ground beef, lettuce, cheese, and salsa.", price: 12.99, image: "/images/menu7.png" },
  { id: 8, name: "Greek Salad", description: "A refreshing salad with cucumbers, tomatoes, olives, feta cheese, and a lemon-oregano dressing.", price: 14.99, image: "/images/menu8.png" },
  { id: 9, name: "Chicken Alfredo", description: "Creamy Alfredo sauce over fettuccine pasta with grilled chicken and Parmesan cheese.", price: 11.99, image: "/images/menu9.png" },
  { id: 10, name: "BBQ Ribs", description: "Tender pork ribs smothered in barbecue sauce, served with coleslaw and cornbread.", price: 13.99, image: "/images/menu10.png" },
  { id: 11, name: "Falafel Wrap", description: "Crispy falafel balls wrapped in pita with hummus, veggies, and tahini sauce.", price: 15.99, image: "/images/menu11.png" },
  { id: 12, name: "Shrimp Scampi", description: "Succulent shrimp sautéed in garlic butter and white wine, served over linguine.", price: 16.99, image: "/images/menu12.png" },
  { id: 13, name: "Vegetarian Chili", description: "Hearty chili made with beans, tomatoes, and a blend of spices, served with cornbread.", price: 12.99, image: "/images/menu13.png" },
  { id: 14, name: "Chicken Parmesan", description: "Breaded chicken cutlet topped with marinara sauce and melted mozzarella cheese, served with pasta.", price: 14.99, image: "/images/menu14.png" },
  { id: 15, name: "Quinoa Salad", description: "Nutritious quinoa salad with mixed greens, cherry tomatoes, avocado, and a lemon vinaigrette.", price: 13.99, image: "/images/menu15.png" }
];

export default function MenuOfTheWeek() {
  const router = useRouter();

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemInCart = cart.find(cartItem => cartItem.id === item.id);

    if (itemInCart) {
      itemInCart.quantity += 1; // Update quantity if item is already in the cart
    } else {
      cart.push({ ...item, quantity: 1 }); // Add new item to the cart
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart
    router.push('/cart'); // Redirect to cart page
  };

  return (
    <>
      <Head>
        <title>Menu of the Week - Food Delivery</title>
      </Head>
      <div className="container mx-auto p-4">
        <header className="mb-6">
          <h1 className="text-4xl font-bold">Menu of the Week</h1>
          <p className="text-lg text-gray-600">Explore our specially curated menu items available this week.</p>
        </header>
        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {menuItems.map(item => (
              <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={200}
                  objectFit="cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-lg font-semibold">${item.price.toFixed(2)}</p>
                  <button
                    className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
