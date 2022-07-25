import React from 'react';
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Veggie />
      <Popular />
    </motion.div>
  );
}
