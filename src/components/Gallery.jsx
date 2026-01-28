import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, Play, ChevronLeft, ChevronRight, Music } from 'lucide-react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('todos');

  const filters = ['todos', 'palenques', 'teatros', 'eventos'];

  const galleryItems = [
    { id: 1, category: 'palenques', title: 'Palenque GDL 2024', description: 'Gran noche en Guadalajara' },
    { id: 2, category: 'teatros', title: 'Teatro del Pueblo', description: 'Fiestas Patrias' },
    { id: 3, category: 'eventos', title: 'Boda Elegante', description: 'Celebración en Monterrey' },
    { id: 4, category: 'palenques', title: 'Feria de León', description: 'Palenque de la Feria' },
    { id: 5, category: 'teatros', title: 'Festival Cultural', description: 'Oaxaca 2024' },
    { id: 6, category: 'eventos', title: 'Quinceañera', description: 'Celebración familiar' },
    { id: 7, category: 'palenques', title: 'Feria de Texcoco', description: 'Estado de México' },
    { id: 8, category: 'eventos', title: 'Evento Corporativo', description: 'CDMX' },
  ];

  const filteredItems = activeFilter === 'todos'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <section id="galeria" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-pattern opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold-400 text-sm tracking-[0.3em] uppercase">
            Galería
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 font-[Playfair_Display]">
            Momentos
            <span className="text-gold-400"> Inolvidables</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Revive algunos de los momentos más especiales de mis presentaciones
            en todo México.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all capitalize ${
                activeFilter === filter
                  ? 'bg-gold-500 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl"
                onClick={() => setSelectedImage(item)}
                whileHover={{ scale: 1.02 }}
              >
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
                  <Music className="w-12 h-12 text-gold-400/50" />
                </div>

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="transform transition-all"
                  >
                    <span className="text-gold-400 text-xs uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-lg mt-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Play Icon */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-gold-500/80 flex items-center justify-center">
                    <Play className="w-6 h-6 text-black ml-1" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button
                className="absolute top-6 right-6 text-white hover:text-gold-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-8 h-8" />
              </motion.button>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
                  <div className="text-center">
                    <Music className="w-24 h-24 mx-auto text-gold-400 mb-4" />
                    <h3 className="text-white text-2xl font-bold font-[Playfair_Display]">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-400 mt-2">{selectedImage.description}</p>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Arrows */}
              <button className="absolute left-6 text-white hover:text-gold-400 transition-colors">
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button className="absolute right-6 text-white hover:text-gold-400 transition-colors">
                <ChevronRight className="w-10 h-10" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
