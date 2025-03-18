export default function Projects() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Card 1 */}
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Project Name 1</h2>
            <p className="text-gray-600 mb-4">
              A brief description of the project and its key features.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-gray-200 rounded text-sm">React</span>
              <span className="px-2 py-1 bg-gray-200 rounded text-sm">Node.js</span>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">Project Name 2</h2>
            <p className="text-gray-600 mb-4">
              A brief description of another project and its key features.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-gray-200 rounded text-sm">Next.js</span>
              <span className="px-2 py-1 bg-gray-200 rounded text-sm">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 