import Image from 'next/image'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-pink-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in">
          <h1 className="text-5xl font-bold mb-4 gradient-text">My Projects</h1>
          <p className="text-xl text-gray-600 mb-12">A collection of my recent work and experiments</p>
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* EasySpeak Product */}
            <div className="hover-card bg-white border border-pink-100 rounded-2xl overflow-hidden">
              <div className="relative h-56 bg-gradient-to-br from-pink-50 to-pink-100">
                <Image
                  src="/es.jpg"
                  alt="EasySpeak Product"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-semibold mb-3 text-[#FF69B4]">EasySpeak</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A communication app that helps nonverbal individuals have easy face-to-face conversations.
                </p>
                <div className="flex gap-6">
                  <a href="https://youtu.be/_LJFKlCikJM?si=ksm1XF0DM0GBLwe6" className="flex items-center gap-2 text-gray-600 hover:text-[#FF69B4] transition-colors">
                    <FiExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                  <a href="https://github.com/theperljams/easyspeak-official" className="flex items-center gap-2 text-gray-600 hover:text-[#FF69B4] transition-colors">
                    <FiGithub className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>

            {/* EasySpeak Overengineered Backend */}
            <div className="hover-card bg-white border border-pink-100 rounded-2xl overflow-hidden">
              <div className="relative h-56 bg-gradient-to-br from-pink-50 to-pink-100">
                <Image
                  src="/overengineered.png"
                  alt="EasySpeak Overengineered Backend"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-semibold mb-3 text-[#FF69B4]">EasySpeak Backend For Local Models</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Built a pipeline for real-time transcription using local models. I abandoned it because it was more complex than what we needed to get in front of customers. This project helped me understand websockets and threading in Python.
                </p>
                <div className="flex gap-6">
                  <a href="https://github.com/theperljams/easyspeak-official/tree/dae48c23cc6d6f128ee3c67ba8a7c3f988cf0f16" className="flex items-center gap-2 text-gray-600 hover:text-[#FF69B4] transition-colors">
                    <FiGithub className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Superhuman for Instant Messaging */}
            <div className="hover-card bg-white border border-pink-100 rounded-2xl overflow-hidden">
              <div className="relative h-56 bg-gradient-to-br from-pink-50 to-pink-100">
                <Image
                  src="/superhuman.png"
                  alt="Superhuman for Instant Messaging"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-semibold mb-3 text-[#FF69B4]">Superhuman for Instant Messaging</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Built as a way to dogfood EasySpeak.
                </p>
                <div className="flex gap-6">
                  <a href="https://www.loom.com/share/6fab9e5004cf48f2bd0524693f192105?sid=f605ce95-fc12-4c76-a63a-07a335f5f8e0" className="flex items-center gap-2 text-gray-600 hover:text-[#FF69B4] transition-colors">
                    <FiExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                  <a href="https://github.com/theperljams/influencer-superhuman" className="flex items-center gap-2 text-gray-600 hover:text-[#FF69B4] transition-colors">
                    <FiGithub className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Derek the AI SRE */}
            <div className="hover-card bg-white border border-pink-100 rounded-2xl overflow-hidden">
              <div className="relative h-56 bg-gradient-to-br from-pink-50 to-pink-100">
                <Image
                  src="/derek.jpg"
                  alt="Derek the AI SRE"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-semibold mb-3 text-[#FF69B4]">Derek the AI SRE</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Built for Craft Ventures HackAIthon.
                </p>
                <div className="flex gap-6">
                  <a href="https://youtu.be/YQsyDDlkGmQ" className="flex items-center gap-2 text-gray-600 hover:text-[#FF69B4] transition-colors">
                    <FiExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                  <a href="https://github.com/jaredeh/hackaithon2" className="flex items-center gap-2 text-gray-600 hover:text-[#FF69B4] transition-colors">
                    <FiGithub className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}