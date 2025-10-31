
export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'The team delivered a website that not only looks fantastic but also performs exceptionally well. Our conversion rates have skyrocketed!',
      name: "Jane Doe",
      role: "CEO, Tech Innovators",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3NFDU8edF6Ia-a3Z_OgaaaVKixEmV8R-f_ysoPy1xNA66cdXv_JUSdEIZx5GCogCUIDCQdEsZ_B646eIX2qLtkcdlCq9nYSLFaBCQsHkDWc1o7ZT1v_1-ncnbtadTGEwgqABuqthkqGITaICfF9e6Ot0NuaUABichJJMqQYwjAYpaMGLovwSBkyOzA2cAV18IgtoRR42-xaMbF7CeCgje5fkUN-WESXB1Vc0lRIsiuZ2QFQvbTAxgv30D1Ar-LnuULbP1Sb4r_EE",
    },
    {
      quote:
        "An incredibly professional and creative team. They listened to our needs and translated our vision into a digital masterpiece.",
      name: "John Smith",
      role: "Marketing Director, Creative Co.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCXd41p0dvzDapzkOmpbauokd9W0xOmSPpsw9xI3EkuapVH_sHsFrMudx0peoj_0w4cq9ymZkGEQvhUSeqihtkYX5Fo9BPZ8PNtcBwN8pTzBMHvtuVlBxOWD-OFr3k9isKqmxZ3N8UZl3oNqBrtuyglIx4rVNkHC5bv-_oooUHWgLfQM4sx-tdE-MreghkwtY7ArlNZ5MlWmb8do80-FXvbjb00977OiHrwz1GVTzLLgxs9TASSRwCfVkp2w_WeQmnTqQuw9H_qqs",
    },
    {
      quote:
        "Working with them was a breeze. The communication was excellent, and the final product exceeded all our expectations.",
      name: "Emily Johnson",
      role: "Founder, Startup Hub",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKXTa0JunDXeurewHHETIoR0sedSVGSMUmA4dbwpXXFiZACw0Mk6mIB9Zix3E6BuI2hI1pTxNq6qWJzDyqtyAD_8UtS4LOKUscfoU0HCBRFX4dD0PetdoJNy4jd3jfHJMERrh4wFmQi8zEYz5YBM9I5K0hCU4ZdvPM52AnkRZ6Ap0A_c0ARhmLE4DxzcrppEoK2hFMF0J4xlqH4WWYuMeUrc_RJ0EK0korPtf9Edux2dTNae2XhsZIHtT1A38jYdvdgtublSuquhE",
    },
  ];

  return (
    <section
      className="px-4 py-10 md:py-20 bg-background-light dark:bg-background-dark/50"
      id="testimonials"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-text-light dark:text-text-dark text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] px-4 pb-12 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-background-dark rounded-xl p-6 shadow-md"
            >
              <p className="text-text-light dark:text-text-dark/90 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center mt-4">
                <img
                  src={t.img}
                  alt={`Photo of ${t.name}`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-text-light dark:text-text-dark">
                    {t.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
