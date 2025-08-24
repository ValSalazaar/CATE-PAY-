import { motion } from "framer-motion"

export default function Confirmation() {
  return (
    <motion.div
      className="p-6 font-sans text-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <h2 className="text-2xl font-bold text-revolutBlue mb-2">¡Remesa enviada!</h2>
      <p className="text-gray-600">Tu destinatario recibirá ₡ 500 en minutos.</p>
    </motion.div>
  )
}
