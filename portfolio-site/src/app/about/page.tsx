export default function About() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        
        <div className="space-y-6">
          <p>
            I'm a software engineer with X years of experience in web development.
            I specialize in React, Node.js, and cloud technologies.
          </p>

          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="list-disc list-inside">
            <li>JavaScript/TypeScript</li>
            <li>React/Next.js</li>
            <li>Node.js</li>
            <li>AWS/Cloud Services</li>
            <li>Database Design</li>
          </ul>

          <h2 className="text-2xl font-semibold">Education</h2>
          <p>
            Bachelor's Degree in Computer Science<br />
            University Name, Graduation Year
          </p>
        </div>
      </div>
    </main>
  )
} 