import { motion } from 'framer-motion'

export default function TransactionCard({ name, amount, date }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-900 rounded-xl p-4 shadow-md flex justify-between items-center mb-3"
    >
      <div>
        <h3 className="text-white font-semibold">{name}</h3>
        <p className="text-sm text-gray-400">{date}</p>
      </div>
      <div className="text-right">
        <p className={`text-lg font-bold ${amount >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          ₡{Math.abs(amount)}
        </p>
      </div>
    </motion.div>
  )
}
