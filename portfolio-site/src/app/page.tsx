import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold mb-4">
                Hi, I'm <span className="text-pink-500">John Doe</span>
              </h1>
              <h2 className="text-2xl text-gray-600 mb-6">
                Software Engineer & Web Developer
              </h2>
              <p className="text-lg mb-8 text-gray-700">
                I build exceptional digital experiences with modern technologies.
                Specializing in creating elegant solutions to complex problems.
              </p>
              <div className="flex gap-4">
                <Link href="/projects" className="btn-primary">
                  View My Work
                </Link>
                <Link href="/about" className="btn-outline">
                  About Me
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                {/* Replace with your actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-pink-500 flex items-center justify-center text-white text-6xl font-bold">
                  JD
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js', 'CSS/SCSS', 'Git', 'AWS'].map((skill) => (
              <div key={skill} className="bg-gray-50 border border-gray-100 rounded-lg p-6 text-center hover:shadow-md transition-all hover:border-pink-200">
                <span className="text-lg font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-48 bg-pink-100 flex items-center justify-center">
                <span className="text-pink-500 text-xl font-semibold">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                <p className="text-gray-600 mb-4">
                  A full-featured online store with payment processing, inventory management, and analytics dashboard.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-sm">React</span>
                  <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-sm">Node.js</span>
                  <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-sm">MongoDB</span>
                </div>
                <a href="#" className="text-pink-500 font-medium hover:text-pink-600">View Project →</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-48 bg-pink-100 flex items-center justify-center">
                <span className="text-pink-500 text-xl font-semibold">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Task Management App</h3>
                <p className="text-gray-600 mb-4">
                  A collaborative task management application with real-time updates, notifications, and team features.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-sm">Next.js</span>
                  <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-sm">TypeScript</span>
                  <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-sm">Firebase</span>
                </div>
                <a href="#" className="text-pink-500 font-medium hover:text-pink-600">View Project →</a>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link href="/projects" className="btn-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg mb-6">
                I'm currently available for freelance work or full-time positions.
                If you have a project that needs some creative work, feel free to contact me.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span>+1 (123) 456-7890</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 