export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h2 className="text-4xl font-bold text-blue-700">
          Building Technology for a Smarter World
        </h2>
        <p className="mt-3 text-lg text-gray-700">
          GlobalTech Innovations develops modern solutions in AI, automation,
          cloud, and cybersecurity to empower businesses worldwide.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-600">🤖 Artificial Intelligence</h3>
          <p className="mt-2 text-gray-600">Smart AI solutions for industries and governments.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-600">☁️ Cloud Computing</h3>
          <p className="mt-2 text-gray-600">Scalable and secure cloud systems for global businesses.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-600">🔐 Cybersecurity</h3>
          <p className="mt-2 text-gray-600">Protecting enterprises with next-gen cyber solutions.</p>
        </div>
      </section>
    </div>
  );
}
