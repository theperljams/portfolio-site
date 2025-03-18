import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-4xl mx-auto flex gap-6">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/about" className="hover:text-gray-300">About</Link>
        <Link href="/projects" className="hover:text-gray-300">Projects</Link>
      </div>
    </nav>
  )
} 