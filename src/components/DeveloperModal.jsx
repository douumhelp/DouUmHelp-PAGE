import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Linkedin, Mail, Globe, Instagram } from 'lucide-react';

const DeveloperModal = ({ developer, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Developer content */}
              <div className="p-8">
                <div className="flex flex-col items-center mb-8">
                  <img
                    src={developer.image}
                    alt={developer.name}
                    className="w-40 h-40 rounded-full object-cover border-4 border-yellow-douhelp mb-4"
                  />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {developer.name}
                  </h2>
                  <p className="text-xl text-yellow-douhelp font-semibold mb-4">
                    {developer.role}
                  </p>
                </div>

                {/* Bio section */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Sobre
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {developer.bio || "Desenvolvedor apaixonado por criar soluções inovadoras e impactantes."}
                  </p>
                </div>

                {/* Skills section */}
                {developer.skills && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Habilidades
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {developer.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-yellow-douhelp bg-opacity-10 text-yellow-douhelp rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Social links */}
                <div className="flex justify-center space-x-6">
                  {developer.github && (
                    <a
                      href={developer.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-yellow-douhelp transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {developer.linkedin && (
                    <a
                      href={developer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-yellow-douhelp transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  )}
                  {developer.instagram && (
                    <a
                      href={developer.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-yellow-douhelp transition-colors"
                      title="Instagram"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  )}
                  {developer.email && (
                    <a
                      href={`mailto:${developer.email}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-yellow-douhelp transition-colors"
                      title="Email"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                  )}
                  {developer.website && (
                    <a
                      href={developer.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-yellow-douhelp transition-colors"
                      title="Website"
                    >
                      <Globe className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeveloperModal; 