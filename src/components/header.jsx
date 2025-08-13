export function Header() {
    return (
        <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">
              hh<span className="text-green-500">.</span>
            </span>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
              Log in
            </button>
            <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors">
              Sign up
            </button>
          </div>
        </div>
      </header>
    )
}