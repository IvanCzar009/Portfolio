import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Briefcase, Mail, Linkedin, Github, Award, BookOpen, Users, Code, FileCode, Blocks, Smartphone, Server, Database, Brain, Cpu, Bot, Eye, GitBranch, Container, Cloud, Layers } from 'lucide-react';
import ProfileImage from '@/components/ui/Profile.jpg';

export default function Home() {
  const skills = [
    { name: "Python", icon: Code },
    { name: "JavaScript", icon: FileCode },
    { name: "TypeScript", icon: Blocks },
    { name: "React", icon: Layers },
    { name: "React Native", icon: Smartphone },
    { name: "Node.js", icon: Server },
    { name: "Machine Learning", icon: Brain },
    { name: "Deep Learning", icon: Cpu },
    { name: "TensorFlow", icon: Bot },
    { name: "PyTorch", icon: Bot },
    { name: "Natural Language Processing", icon: Brain },
    { name: "Computer Vision", icon: Eye },
    { name: "REST APIs", icon: Server },
    { name: "SQL", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "Git", icon: GitBranch },
    { name: "Docker", icon: Container },
    { name: "AWS", icon: Cloud },
    { name: "Data Structures & Algorithms", icon: Layers }
  ];

  const experiences = [
    {
      role: "Software Engineer / AI Specialist",
      company: "Current Role",
      period: "Present",
      description: "Developing web and mobile applications with AI integration, building intelligent systems and machine learning solutions."
    },
    {
      role: "Customer Service Representative",
      company: "SiriusXM",
      period: "Previous",
      description: "Handled clients in Telecommunications Accounts and Sales Account, developing strong communication and problem-solving skills."
    },
    {
      role: "Bachelor's Degree in Computer Engineering",
      company: "Batangas State University",
      period: "Graduate",
      description: "Completed comprehensive studies in computer engineering fundamentals, programming, and systems design."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Portfolio</span>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">About</a>
            <a href="#experience" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Experience</a>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">Contact</a>
          </div>
          <Button className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-lg shadow-indigo-500/25">
            <Mail className="w-4 h-4 mr-2" />
            Get in Touch
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-950 via-violet-900 to-purple-900 text-white py-24 md:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/10 text-indigo-200 border border-indigo-400/30 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse inline-block"></span>
                Available for Opportunities
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Ivan Czar P. Lumanglas
              </h1>
              <p className="text-lg text-indigo-100/80 mb-8 leading-relaxed">
                Building innovative web and mobile applications powered by artificial intelligence and machine learning solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50 shadow-xl shadow-white/10">
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-indigo-400/50 text-white hover:bg-white/10 backdrop-blur-sm">
                  Download CV
                </Button>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 p-1 relative">
                  <img 
                    src={ProfileImage}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl blur-2xl opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop" 
                alt="Working"
                className="rounded-2xl shadow-2xl relative"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-0">Who I Am</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I'm Ivan Czar P. Lumanglas, a Software Engineer and AI Specialist with a Bachelor's degree in Computer Engineering from Batangas State University.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My journey started in customer service at SiriusXM, where I honed my communication and problem-solving skills. Now, I specialize in developing web and mobile applications integrated with AI and machine learning technologies.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full border-gray-200 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-gray-200 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-gray-200 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-all">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-0">My Journey</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Professional Experience</h2>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                      <p className="text-indigo-600 font-medium">{exp.company}</p>
                    </div>
                    <Badge className="mt-2 md:mt-0 w-fit bg-gradient-to-r from-indigo-500 to-violet-500 text-white border-0">{exp.period}</Badge>
                  </div>
                  <p className="text-gray-500">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-0">Tech Stack</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Skills & Expertise</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center p-4 rounded-xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/10 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-indigo-950 via-violet-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Badge className="mb-4 bg-white/10 text-indigo-200 border border-indigo-400/30 backdrop-blur-sm">Get In Touch</Badge>
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-indigo-100/80 mb-8 text-lg">
            Ready to bring your ideas to life with cutting-edge technology? I'd love to hear about your project and discuss how I can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50 shadow-xl shadow-white/10">
                  <Mail className="w-4 h-4 mr-2" />
                  ivanczarlumanglas486@gmail.com
                </Button>
            <Button size="lg" variant="outline" className="border-indigo-400/50 text-white hover:bg-white/10 backdrop-blur-sm">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-950 text-indigo-300/60 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>© 2026 Ivan Czar P. Lumanglas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
