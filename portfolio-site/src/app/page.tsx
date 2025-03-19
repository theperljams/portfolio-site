import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-pink-50/50">
      <div className="max-w-4xl mx-auto pt-20">
        <div className="flex flex-col items-center">
          <Image
            src="/wallpic.JPG" // Updated path to your photo
            alt="Pearl Hulbert"
            width={200} // Increased width
            height={200} // Increased height
            className="rounded-full mb-6"
          />
          <h1 className="text-5xl font-bold mb-4 gradient-text">Pearl Hulbert</h1> {/* Decreased text size */}
          <h2 className="text-xl text-gray-600 mb-8">Software Engineer</h2> {/* Decreased text size */}
        </div>
        
        <p className="text-lg mb-12 text-gray-700 max-w-2xl leading-relaxed">
          I&apos;m Pearl, founder of <a href="https://www.easyspeakaac.com/" className="text-[#FF69B4] hover:underline">EasySpeak AAC</a>—a communication app that helps nonverbal individuals have easy face-to-face conversations. I graduated from BYU with a degree in Computer Science and worked on EasySpeak full-time before deciding to gain experience in an industry role. Leading a cross-functional team and managing all aspects of development taught me how to break down complex problems, delegate engineering tasks, and prioritize effectively.
        </p>

        <p className="text-lg mb-12 text-gray-700 max-w-2xl leading-relaxed">
          Explore my About and Projects pages to see the technologies I&apos;ve worked with and what I&apos;ve built!
        </p>

        <div className="flex gap-4">
          <Link 
            href="/about" 
            className="px-8 py-3 bg-[#FF69B4] text-white rounded-full hover:bg-[#FF1493] transition-all shadow-lg hover:shadow-xl"
          >
            About Me
          </Link>
          <Link 
            href="/projects" 
            className="px-8 py-3 border-2 border-[#FF69B4] text-[#FF69B4] rounded-full hover:bg-[#FF69B4] hover:text-white transition-all"
          >
            View Projects
          </Link>
          <a 
            href="/resume.pdf" // Updated path to your resume
            className="px-8 py-3 border-2 border-[#FF69B4] text-[#FF69B4] rounded-full hover:bg-[#FF69B4] hover:text-white transition-all"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </main>
  )
}