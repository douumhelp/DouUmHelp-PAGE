import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function SocialMediaSection() {
  const socialLinks = [
    {
      icon: <FaYoutube className="w-6 h-6" />,
      href: "https://youtube.com/@douumhelp",
      label: "YouTube",
      color: "hover:text-red-600"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/company/dou-um-help",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      href: "https://www.instagram.com/douumhelp/",
      label: "Instagram",
      color: "hover:text-pink-600"
    },
    {
      icon: <MdEmail className="w-6 h-6" />,
      href: "mailto:ajuda@douumhelp.com",
      label: "Email",
      color: "hover:text-gray-600"
    }
  ];

  return (
    <div className="flex justify-center space-x-6 mb-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-500 transition-colors duration-300 ${social.color}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="sr-only">{social.label}</span>
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
} 