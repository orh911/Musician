import { motion } from 'framer-motion';
import { Music, Heart, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const services = [
    'Palenques',
    'Teatros del Pueblo',
    'Bodas',
    'Quinceañeras',
    'Eventos Corporativos',
    'Serenatas',
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <motion.a
              href="#inicio"
              className="flex items-center gap-2 text-gold-400"
              whileHover={{ scale: 1.05 }}
            >
              <Music className="w-8 h-8" />
              <span className="text-2xl font-bold font-[Playfair_Display]">
                El Cantor
              </span>
            </motion.a>
            <p className="text-gray-400">
              Llevando la esencia de la música regional mexicana a cada rincón
              del país. Más de 15 años de trayectoria artística.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gold-400 flex items-center justify-center text-gray-400 hover:text-black transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <motion.a
                    href="#servicios"
                    className="text-gray-400 hover:text-gold-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Mantente Informado</h3>
            <p className="text-gray-400 mb-4">
              Suscríbete para recibir noticias sobre próximos eventos y presentaciones.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-gold-400 focus:outline-none transition-colors"
              />
              <motion.button
                type="submit"
                className="w-full py-3 bg-gold-500 hover:bg-gold-600 text-black font-bold rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Suscribirse
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} El Cantor del Pueblo. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-mexicano-500" /> en México
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
