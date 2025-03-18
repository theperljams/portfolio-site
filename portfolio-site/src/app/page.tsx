import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">John Doe</h1>
        <h2 className="text-2xl text-gray-600 mb-8">Software Engineer</h2>
        
        <p className="text-lg mb-8">
          Welcome to my portfolio! I'm a passionate software engineer specializing in 
          web development and creating meaningful digital experiences.
        </p>

        <div className="flex gap-4">
          <Link 
            href="/about" 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            About Me
          </Link>
          <Link 
            href="/projects" 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            My Projects
          </Link>
        </div>
      </div>
    </main>
  )
} 