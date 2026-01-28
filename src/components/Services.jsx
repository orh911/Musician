import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Tent, Building2, PartyPopper, Mic2, Star, Users } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Tent,
      title: "Palenques",
      description: "Shows espectaculares en los palenques más importantes de México. Experiencias inolvidables con la mejor música regional.",
      features: ["Show completo de 2+ horas", "Mariachi incluido", "Repertorio personalizado"],
    },
    {
      icon: Building2,
      title: "Teatros del Pueblo",
      description: "Presentaciones íntimas y emotivas en los teatros tradicionales, conectando con la esencia de nuestra cultura.",
      features: ["Ambiente acústico", "Interacción con el público", "Canciones clásicas y nuevas"],
    },
    {
      icon: PartyPopper,
      title: "Eventos Privados",
      description: "Bodas, quinceañeras, cumpleaños y celebraciones especiales. Haz de tu evento algo extraordinario.",
      features: ["Personalización total", "Duración flexible", "Equipo profesional"],
    },
    {
      icon: Mic2,
      title: "Fiestas Patronales",
      description: "Celebra las tradiciones de tu pueblo con música que une a la comunidad y alegra el corazón.",
      features: ["Gran producción", "Repertorio tradicional", "Conexión con la comunidad"],
    },
    {
      icon: Star,
      title: "Eventos Corporativos",
      description: "Añade un toque especial a tus eventos empresariales con la calidez de la música mexicana.",
      features: ["Profesionalismo", "Puntualidad", "Adaptación al formato"],
    },
    {
      icon: Users,
      title: "Serenatas",
      description: "El regalo más romántico y tradicional. Sorprende a esa persona especial con una serenata inolvidable.",
      features: ["Servicio íntimo", "Repertorio romántico", "Momento mágico"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="servicios" className="py-24 bg-black relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-mexicano-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold-400 text-sm tracking-[0.3em] uppercase">
            Mis Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 font-[Playfair_Display]">
            Eventos que
            <span className="text-gold-400"> Inspiran</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Cada evento es único y merece una experiencia musical inolvidable.
            Descubre cómo puedo hacer especial tu celebración.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-gold-400/50 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-xl bg-gold-400/10 flex items-center justify-center mb-6 group-hover:bg-gold-400/20 transition-colors"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-8 h-8 text-gold-400" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 font-[Playfair_Display]">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-black font-bold rounded-full transition-all shadow-lg shadow-gold-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicita una Cotización
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
