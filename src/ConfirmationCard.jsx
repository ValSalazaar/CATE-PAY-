import { motion } from 'framer-motion'

export default function ConfirmationCard({ amount }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-xl shadow-xl text-white text-center mt-6"
    >
      <h2 className="text-2xl font-bold mb-2">Remesa enviada</h2>
      <p className="text-lg">₡{amount} han sido transferidos con propósito</p>
      <p className="text-sm text-gray-200 mt-2">Gracias por confiar en CATE PAY</p>
    </motion.div>
  )
}
