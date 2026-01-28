import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, User } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Boda en Jalisco",
      content: "Contratar a El Cantor del Pueblo para nuestra boda fue la mejor decisión. Su voz y carisma hicieron que todos los invitados disfrutaran como nunca. Un profesional de primera.",
      rating: 5,
    },
    {
      id: 2,
      name: "Carlos Ramírez",
      role: "Organizador de Eventos",
      content: "He trabajado con muchos artistas y puedo decir que El Cantor es excepcional. Siempre puntual, profesional y su show es espectacular. El público siempre queda encantado.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ana López",
      role: "Quinceañera en Monterrey",
      content: "La quinceañera de mi hija fue mágica gracias a la música. Todas las generaciones disfrutaron, desde los abuelitos hasta los jóvenes. Momentos que nunca olvidaremos.",
      rating: 5,
    },
    {
      id: 4,
      name: "Roberto Hernández",
      role: "Palenque de León",
      content: "Un artista que sabe cómo conectar con el público. Su presentación en el palenque fue increíble, la gente no dejó de cantar y bailar. Ya lo queremos de regreso.",
      rating: 5,
    },
    {
      id: 5,
      name: "Laura Martínez",
      role: "Evento Corporativo CDMX",
      content: "Añadió un toque único a nuestro evento empresarial. Profesional, elegante y con un repertorio que gustó a todos. Superó nuestras expectativas.",
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-mexicano-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold-400 text-sm tracking-[0.3em] uppercase">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 font-[Playfair_Display]">
            Lo que Dicen
            <span className="text-gold-400"> de Mí</span>
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Large Quote Icon */}
          <div className="absolute -top-8 left-0 md:left-10 text-gold-400/20">
            <Quote className="w-24 h-24" />
          </div>

          {/* Testimonial Content */}
          <div className="relative min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center px-4 md:px-16"
              >
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-6 h-6 text-gold-400 fill-gold-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl md:text-2xl text-gray-200 italic leading-relaxed mb-8">
                  "{testimonials[current].content}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gold-400/20 flex items-center justify-center">
                    <User className="w-6 h-6 text-gold-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-lg">
                      {testimonials[current].name}
                    </p>
                    <p className="text-gold-400 text-sm">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gray-700 hover:border-gold-400 flex items-center justify-center text-gray-400 hover:text-gold-400 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrent(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current
                      ? 'w-8 bg-gold-400'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="w-12 h-12 rounded-full border border-gray-700 hover:border-gold-400 flex items-center justify-center text-gray-400 hover:text-gold-400 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
