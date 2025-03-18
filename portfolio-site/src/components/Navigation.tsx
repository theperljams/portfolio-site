import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname();
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-pink-500">JD</span>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-8">
            <Link 
              href="/" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                pathname === '/' 
                  ? 'border-pink-500 text-gray-900' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Home
            </Link>
            
            <Link 
              href="/about" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                pathname === '/about' 
                  ? 'border-pink-500 text-gray-900' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              About
            </Link>
            
            <Link 
              href="/projects" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                pathname === '/projects' 
                  ? 'border-pink-500 text-gray-900' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Projects
            </Link>
            
            <a 
              href="#contact" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600"
            >
              Contact Me
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
} 