import heroImage from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20 text-center">
      <h2 className="text-5xl font-bold mb-4">Introducing the Future</h2>
      <p className="text-lg mb-6">Sleek. Smart. Stunning.</p>
      <img src={heroImage} alt="Hero Product" className="mx-auto mb-6 rounded-lg shadow-lg" />
    </section>
  );
}
