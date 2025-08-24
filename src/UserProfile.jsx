export default function UserProfile() {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <img
        src="https://i.pravatar.cc/100?u=valeria"
        alt="Avatar"
        className="w-14 h-14 rounded-full border-2 border-purple-500"
      />
      <div>
        <h2 className="text-white font-semibold text-lg">Valeria Salazar</h2>
        <p className="text-sm text-gray-400">Fundadora de CATE</p>
      </div>
    </div>
  )
}
