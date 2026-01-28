import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Music, MapPin } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Music, value: "500+", label: "Eventos" },
    { icon: Users, value: "100K+", label: "Fans" },
    { icon: Award, value: "15+", label: "Años de Carrera" },
    { icon: MapPin, value: "32", label: "Estados" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="sobre-mi" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Music className="w-24 h-24 mx-auto text-gold-400 mb-4" />
                    <p className="text-gray-400 text-lg">Imagen del Artista</p>
                  </div>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold-400/50 rounded-2xl"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold-400/10 rounded-2xl -z-10"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Section Title */}
            <div>
              <motion.span
                className="text-gold-400 text-sm tracking-[0.3em] uppercase"
                variants={itemVariants}
              >
                Sobre Mí
              </motion.span>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mt-2 font-[Playfair_Display]"
                variants={itemVariants}
              >
                La Voz del
                <span className="text-gold-400"> Regional Mexicano</span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 text-gray-300 text-lg"
            >
              <p>
                Con más de 15 años de trayectoria en la música regional mexicana,
                he tenido el honor de llevar nuestra música a los escenarios más
                importantes de todo México.
              </p>
              <p>
                Desde los grandes palenques hasta los íntimos teatros del pueblo,
                cada presentación es una oportunidad de conectar con el público
                y mantener viva la tradición de nuestra música.
              </p>
              <p>
                Mi pasión por el regional mexicano nació en las fiestas de mi pueblo,
                y hoy es un privilegio compartir ese mismo sentimiento con miles
                de personas en cada evento.
              </p>
            </motion.div>

            {/* Signature */}
            <motion.div variants={itemVariants} className="pt-4">
              <p className="text-gold-400 font-[Playfair_Display] text-2xl italic">
                "La música es el lenguaje del alma"
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl bg-black/30 backdrop-blur-sm border border-gold-400/20 hover:border-gold-400/50 transition-all"
              whileHover={{ y: -5 }}
            >
              <stat.icon className="w-8 h-8 mx-auto text-gold-400 mb-3" />
              <motion.p
                className="text-3xl md:text-4xl font-bold text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
