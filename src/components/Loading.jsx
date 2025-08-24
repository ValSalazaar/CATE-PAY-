import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
      />
    </motion.div>
  );
}
