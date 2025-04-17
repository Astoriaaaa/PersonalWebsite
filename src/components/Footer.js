import React from 'react';
import { motion } from 'framer-motion';
import './styles/footer.css';

const Footer = () => {
  return (
    <motion.div 
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <p>404 errors were harmed in the making of this site</p>
    </motion.div>
  );
};

export default Footer; 