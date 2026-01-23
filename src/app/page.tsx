import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  I am a Lead Software Engineer with over 4 years of experience specializing in 
                  backend optimizations, cloud architecture, and machine learning. Currently, 
                  I am pursuing my M.S. in Computer Science at Georgia Tech.
                </p>
                <p>
                  My passion lies in solving complex problems—whether it's reducing API latency by 75%, 
                  leading global platform launches, or automating SQL generation with LLMs.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Years Exp.', value: '4+' },
                  { label: 'Georgia Tech', value: 'MS CS' },
                  { label: 'Engineering', value: 'Lead' },
                  { label: 'GPA', value: '4.0' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-sm font-semibold text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}