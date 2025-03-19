import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-pink-50/30">
      <div className="max-w-4xl mx-auto">
        <div className="fade-in space-y-12">
          <div>
            <h1 className="text-5xl font-bold mb-4 gradient-text">About Me</h1>
            <p className="text-xl text-gray-600">Full Stack Software Engineer</p>
          </div>
          
          <div className="prose prose-lg text-gray-700 leading-relaxed">
            <p>
              In high school, I would have insisted that I would never go into tech because it was for nerds. That was before I learned how many problems you can solve with relatively few resources as a software engineer.
              I love how quickly you can iterate and how fast the industry changes. With my background in entrepreneurship, I love working on startups and being in a fast-paced, collaborative environment where everyone has to take ownership. 
              See some of the technologies I&apos;ve worked with below, and check out my projects page to learn more!
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <Image
              src="/europe.jpg" // Update with the actual path to your new photo
              alt="Pearl Hulbert"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 border border-pink-100">
            <h2 className="text-2xl font-semibold mb-8 gradient-text">Skills & Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                'JavaScript/TypeScript',
                'React.js',
                'Node.js',
                'C/C++',
                'Java',
                'Python',
                'HTML',
                'CSS',
                'SQL',
                'Langchain',
                'AWS EC2',
                'AWS DynamoDB',
                'AWS Lambda'
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-3 group">
                  <span className="w-2 h-2 bg-[#FF69B4] rounded-full group-hover:scale-150 transition-transform"></span>
                  <span className="text-gray-700 group-hover:text-[#FF69B4] transition-colors">{skill}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800">Certifications</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>AWS Certified Cloud Practitioner</li>
                <li>AWS Solutions Architect Associate</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 border border-pink-100">
            <h2 className="text-2xl font-semibold mb-6 gradient-text">Education</h2>
            <div className="space-y-2">
              <p className="text-xl font-semibold text-gray-800">Bachelor of Science: Computer Science</p>
              <p className="text-lg text-gray-600">Brigham Young University, Provo, UT</p>
              <p className="text-gray-500">Apr 2021-Apr 2024</p>
              <p className="text-gray-700">Classes: Linear Algebra, Data Structures, Calculus, Algorithms, Systems Programming, Web Programming, Software Architecture, Computer Security</p>
            </div>
          </div>
        </div>
      </div>
      </main>
  )
}