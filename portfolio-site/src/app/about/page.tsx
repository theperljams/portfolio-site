import Image from 'next/image'

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <div className="w-20 h-1 bg-pink-500 mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              I'm a passionate software engineer with a focus on creating elegant, 
              efficient, and user-friendly applications.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="section-title">My Journey</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  With over X years of experience in software development, I've had the 
                  opportunity to work on a diverse range of projects, from small business 
                  websites to complex enterprise applications.
                </p>
                <p>
                  My passion for coding began when I was in college, where I discovered 
                  the power of creating something from nothing but lines of code. Since then, 
                  I've been on a continuous learning journey, always exploring new technologies 
                  and methodologies.
                </p>
                <p>
                  I believe in writing clean, maintainable code and creating intuitive user 
                  experiences. My goal is to build software that not only meets technical 
                  requirements but also delights users.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-4 border-white shadow-xl">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• React.js / Next.js</li>
                <li>• JavaScript / TypeScript</li>
                <li>• HTML5 / CSS3 / SASS</li>
                <li>• Responsive Design</li>
                <li>• UI/UX Principles</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Backend Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Node.js / Express</li>
                <li>• RESTful APIs</li>
                <li>• GraphQL</li>
                <li>• MongoDB / PostgreSQL</li>
                <li>• Authentication & Security</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Other Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Git / GitHub</li>
                <li>• CI/CD Pipelines</li>
                <li>• AWS / Cloud Services</li>
                <li>• Docker / Containerization</li>
                <li>• Testing (Jest, Cypress)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Experience</h2>
          
          <div className="space-y-12 mt-12">
            <div className="border-l-4 border-pink-500 pl-6 relative">
              <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-[10px] top-1"></div>
              <h3 className="text-xl font-bold">Senior Software Engineer</h3>
              <p className="text-pink-500 mb-2">Company Name • 2020 - Present</p>
              <p className="text-gray-700">
                Led the development of a customer-facing web application that increased user engagement by 40%. 
                Collaborated with cross-functional teams to implement new features and improve existing functionality.
                Mentored junior developers and conducted code reviews.
              </p>
            </div>
            
            <div className="border-l-4 border-pink-500 pl-6 relative">
              <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-[10px] top-1"></div>
              <h3 className="text-xl font-bold">Software Developer</h3>
              <p className="text-pink-500 mb-2">Previous Company • 2017 - 2020</p>
              <p className="text-gray-700">
                Developed and maintained multiple web applications using React and Node.js.
                Implemented responsive designs and ensured cross-browser compatibility.
                Participated in agile development processes and sprint planning.
              </p>
            </div>
            
            <div className="border-l-4 border-pink-500 pl-6 relative">
              <div className="absolute w-4 h-4 bg-pink-500 rounded-full -left-[10px] top-1"></div>
              <h3 className="text-xl font-bold">Junior Developer</h3>
              <p className="text-pink-500 mb-2">First Company • 2015 - 2017</p>
              <p className="text-gray-700">
                Assisted in the development of web applications and websites.
                Gained experience with JavaScript, HTML, and CSS.
                Participated in code reviews and bug fixing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Education</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md mt-12">
            <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
            <p className="text-pink-500 mb-4">University Name • 2011 - 2015</p>
            <p className="text-gray-700">
              Graduated with honors. Coursework included Data Structures, Algorithms, 
              Database Systems, Web Development, and Software Engineering.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 