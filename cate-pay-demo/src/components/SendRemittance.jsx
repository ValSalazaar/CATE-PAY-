import { motion } from "framer-motion"

export default function SendRemittance() {
  return (
    <motion.div
      className="p-6 font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-xl font-bold mb-4">Enviar remesa</h2>
      <form className="bg-white p-4 rounded-xl shadow-md space-y-4">
        <input
          type="text"
          placeholder="Nombre del destinatario"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Monto a enviar"
          className="w-full p-2 border rounded"
        />
        <button className="bg-revolutBlue text-white px-4 py-2 rounded hover:bg-cyan-600">
          Enviar
        </button>
      </form>
    </motion.div>
  )
}
