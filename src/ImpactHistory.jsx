import { motion } from 'framer-motion'

const impactData = [
  {
    certification: 'Curso de Electricidad',
    credits: 300,
    remesa: '₡300 enviados a familia en León',
    date: '23 ago 2025'
  },
  {
    certification: 'Taller de Cocina',
    credits: 500,
    remesa: '₡500 enviados a madre en Oaxaca',
    date: '20 ago 2025'
  }
]

export default function ImpactHistory() {
  return (
    <div className="mt-8">
      <h3 className="text-white text-lg font-semibold mb-4">Impacto de tus certificaciones</h3>
      {impactData.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="bg-gray-900 rounded-xl p-4 shadow-md mb-3"
        >
          <h4 className="text-white font-semibold">{item.certification}</h4>
          <p className="text-sm text-gray-400">{item.date}</p>
          <p className="text-sm text-gray-300 mt-2">{item.remesa}</p>
          <p className="text-green-400 font-bold mt-1">₡{item.credits} créditos usados</p>
        </motion.div>
      ))}
    </div>
  )
}
