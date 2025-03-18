export default function Projects() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 gradient-text">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Card 1 */}
          <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3 text-[#FF69B4]">Project Name 1</h2>
            <p className="text-gray-600 mb-4">
              A brief description of the project and its key features.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-pink-100 text-[#FF69B4] rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-pink-100 text-[#FF69B4] rounded-full text-sm">Node.js</span>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3 text-[#FF69B4]">Project Name 2</h2>
            <p className="text-gray-600 mb-4">
              A brief description of another project and its key features.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-pink-100 text-[#FF69B4] rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-pink-100 text-[#FF69B4] rounded-full text-sm">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}