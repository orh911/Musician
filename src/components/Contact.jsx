import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, Music, CheckCircle } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const eventTypes = [
    'Palenque',
    'Teatro del Pueblo',
    'Boda',
    'Quinceañera',
    'Evento Corporativo',
    'Fiesta Patronal',
    'Serenata',
    'Otro',
  ];

  const contactInfo = [
    { icon: Phone, label: 'Teléfono', value: '+52 (555) 123-4567' },
    { icon: Mail, label: 'Email', value: 'contacto@elcantordelpueblo.mx' },
    { icon: MapPin, label: 'Ubicación', value: 'Guadalajara, Jalisco, México' },
    { icon: Clock, label: 'Horario', value: 'Lun - Sáb: 9:00 - 18:00' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contacto" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mexicano-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold-400 text-sm tracking-[0.3em] uppercase">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 font-[Playfair_Display]">
            Hagamos tu Evento
            <span className="text-gold-400"> Inolvidable</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Cuéntame sobre tu evento y juntos crearemos una experiencia musical
            que tus invitados nunca olvidarán.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-4 rounded-xl bg-black/30 border border-gray-800 hover:border-gold-400/30 transition-all"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gold-400/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Proof */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl bg-gradient-to-br from-gold-400/10 to-transparent border border-gold-400/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Music className="w-6 h-6 text-gold-400" />
                <span className="text-white font-semibold">Respuesta Rápida</span>
              </div>
              <p className="text-gray-400 text-sm">
                Respondo todas las solicitudes en menos de 24 horas.
                ¡Tu evento es importante para mí!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-black/50 backdrop-blur-sm border border-gray-800"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-gold-400 focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-gold-400 focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-gold-400 focus:outline-none transition-colors"
                    placeholder="+52 (555) 000-0000"
                  />
                </div>

                {/* Event Type */}
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    Tipo de Evento *
                  </label>
                  <select
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-gold-400 focus:outline-none transition-colors"
                  >
                    <option value="">Selecciona un tipo</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Event Date */}
                <div className="md:col-span-2">
                  <label className="block text-gray-300 text-sm mb-2">
                    Fecha del Evento *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-gold-400 focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="block text-gray-300 text-sm mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-gold-400 focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntame más sobre tu evento..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitted}
                className={`w-full mt-6 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-gold-500 hover:bg-gold-600 text-black'
                }`}
                whileHover={!isSubmitted ? { scale: 1.02 } : {}}
                whileTap={!isSubmitted ? { scale: 0.98 } : {}}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    ¡Mensaje Enviado!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Solicitud
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
