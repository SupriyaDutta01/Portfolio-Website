"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/Navigation"
import ContactForm from "@/components/ContactForm"
import AnimatedBackground from "@/components/AnimatedBackground"
import { Github, Linkedin, Mail, GraduationCap, Code2, Brain, ExternalLink, MapPin, Phone, ArrowRight, Sparkles, Database, BarChart3, Cpu } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = [
    { name: "Python", icon: "🐍", color: "from-blue-500 to-cyan-500" },
    { name: "Machine Learning", icon: "🤖", color: "from-purple-500 to-pink-500" },
    { name: "Deep Learning", icon: "🧠", color: "from-indigo-500 to-purple-500" },
    { name: "TensorFlow", icon: "🔥", color: "from-orange-500 to-red-500" },
    { name: "PyTorch", icon: "⚡", color: "from-yellow-500 to-orange-500" },
    { name: "Scikit-learn", icon: "📊", color: "from-green-500 to-teal-500" },
    { name: "Data Analysis", icon: "📈", color: "from-cyan-500 to-blue-500" },
    { name: "Pandas", icon: "🐼", color: "from-slate-500 to-gray-500" },
    { name: "NumPy", icon: "🔢", color: "from-blue-600 to-indigo-600" },
    { name: "NLP", icon: "💬", color: "from-pink-500 to-rose-500" },
    { name: "Computer Vision", icon: "👁️", color: "from-violet-500 to-purple-500" },
    { name: "SQL", icon: "🗄️", color: "from-emerald-500 to-green-500" },
    { name: "Data Visualization", icon: "📉", color: "from-fuchsia-500 to-pink-500" },
    { name: "Jupyter", icon: "📓", color: "from-amber-500 to-yellow-500" },
    { name: "Git", icon: "🔧", color: "from-red-500 to-pink-500" },
    { name: "Statistics", icon: "📐", color: "from-teal-500 to-cyan-500" },
  ]

  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "University Name",
      year: "2021 - 2023",
      description: "Specialized in Machine Learning and Artificial Intelligence",
      icon: <Brain className="h-6 w-6" />,
      gradient: "from-purple-500/10 via-pink-500/5 to-purple-500/10",
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "University Name",
      year: "2017 - 2021",
      description: "Foundation in Computer Science and Programming",
      icon: <Code2 className="h-6 w-6" />,
      gradient: "from-blue-500/10 via-cyan-500/5 to-blue-500/10",
    },
  ]

  const projects = [
    {
      title: "Machine Learning Model for Prediction",
      description: "Developed a comprehensive ML model using Python and scikit-learn to predict outcomes with 95% accuracy. Implemented feature engineering and hyperparameter tuning.",
      tags: ["Python", "Scikit-learn", "Pandas", "ML"],
      github: "https://github.com/sanjoydhara",
      gradient: "from-blue-500/20 via-cyan-500/10 to-blue-500/20",
      iconColor: "text-blue-500",
    },
    {
      title: "Deep Learning Image Classification",
      description: "Built a CNN-based image classification system using TensorFlow. Achieved state-of-the-art results on custom dataset with data augmentation techniques.",
      tags: ["TensorFlow", "Deep Learning", "Python", "CNN"],
      github: "https://github.com/sanjoydhara",
      gradient: "from-purple-500/20 via-pink-500/10 to-purple-500/20",
      iconColor: "text-purple-500",
    },
    {
      title: "NLP Sentiment Analysis Tool",
      description: "Created an NLP-based sentiment analysis tool for social media data. Utilized transformers and BERT for accurate sentiment classification.",
      tags: ["NLP", "BERT", "Python", "Transformers"],
      github: "https://github.com/sanjoydhara",
      gradient: "from-green-500/20 via-emerald-500/10 to-green-500/20",
      iconColor: "text-green-500",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Designed interactive data visualization dashboard for business intelligence. Integrated multiple data sources with real-time updates.",
      tags: ["Python", "Plotly", "Dash", "Pandas"],
      github: "https://github.com/sanjoydhara",
      gradient: "from-orange-500/20 via-amber-500/10 to-orange-500/20",
      iconColor: "text-orange-500",
    },
  ]

  const stats = [
    { icon: <Code2 className="h-6 w-6" />, value: "50+", label: "Projects Completed", gradient: "from-blue-500/20 to-cyan-500/20" },
    { icon: <Database className="h-6 w-6" />, value: "15+", label: "ML Models Deployed", gradient: "from-purple-500/20 to-pink-500/20" },
    { icon: <BarChart3 className="h-6 w-6" />, value: "95%", label: "Accuracy Rate", gradient: "from-green-500/20 to-emerald-500/20" },
    { icon: <Cpu className="h-6 w-6" />, value: "3+", label: "Years Experience", gradient: "from-orange-500/20 to-amber-500/20" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      >
        <AnimatedBackground />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`max-w-5xl mx-auto text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Profile Photo */}
            <div className="flex justify-center mb-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>
                <div className="relative">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ad5dc48c-271e-49df-84b3-508189d7df91/generated_images/professional-headshot-portrait-of-a-youn-81d6bb61-20251130024830.jpg"
                    alt="Sanjoy Dhara"
                    width={200}
                    height={200}
                    className="rounded-full border-4 border-primary/30 shadow-2xl shadow-primary/50 animate-profile-float"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 backdrop-blur-md border border-purple-500/30 mb-4 hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/20">
              <Sparkles className="h-4 w-4 text-purple-400 animate-pulse drop-shadow-glow" />
              <span className="text-sm font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">Available for opportunities</span>
            </div>

            <div className="space-y-6 bg-black/30 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/10">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight drop-shadow-2xl">
                <span className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]">Hi, I'm </span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_30px_rgba(168,85,247,0.8)] filter brightness-125">
                  Sanjoy Dhara
                </span>
              </h1>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <Badge className="text-base px-5 py-2.5 font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 hover:scale-110 transition-transform duration-300 shadow-xl shadow-blue-500/50">
                  <Brain className="h-4 w-4 mr-2" />
                  Data Science
                </Badge>
                <span className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold drop-shadow-lg">×</span>
                <Badge className="text-base px-5 py-2.5 font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 hover:scale-110 transition-transform duration-300 shadow-xl shadow-purple-500/50">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Artificial Intelligence
                </Badge>
              </div>
            </div>

            <p className="text-xl sm:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed bg-black/40 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/10 drop-shadow-lg">
              Transforming complex data into actionable insights and building intelligent systems that drive innovation and create real-world impact.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`group p-6 rounded-2xl bg-black/50 backdrop-blur-md border border-white/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 shadow-lg`}
                >
                  <div className="text-primary mb-2 group-hover:scale-125 transition-transform duration-300 drop-shadow-glow">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-1 text-white drop-shadow-lg">{stat.value}</div>
                  <div className="text-sm text-gray-200 font-semibold drop-shadow-md">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button size="lg" className="group shadow-xl hover:shadow-2xl transition-all bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 font-bold" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group border-2 bg-black/40 backdrop-blur-md text-white hover:bg-primary/20 hover:border-primary hover:scale-105 transition-all duration-300 shadow-lg font-bold" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                <Code2 className="mr-2 h-5 w-5" />
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 pt-6">
              <a href="https://github.com/sanjoydhara" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:scale-125 hover:bg-blue-500/10 hover:text-blue-600 transition-all duration-300">
                  <Github className="h-6 w-6" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/sanjoydhara" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:scale-125 hover:bg-blue-600/10 hover:text-blue-700 transition-all duration-300">
                  <Linkedin className="h-6 w-6" />
                </Button>
              </a>
              <a href="mailto:sanjoy@example.com">
                <Button variant="ghost" size="icon" className="hover:scale-125 hover:bg-purple-500/10 hover:text-purple-600 transition-all duration-300">
                  <Mail className="h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2 bg-gradient-to-b from-primary/5 to-transparent">
            <div className="w-1.5 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-primary/30 hover:scale-105 transition-transform">
                <Sparkles className="h-3 w-3 mr-1 text-primary" />
                About Me
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Passionate About Data & AI</h2>
              <p className="text-lg text-muted-foreground">Turning data into intelligence</p>
            </div>
            
            <Card className="backdrop-blur-sm bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="pt-8 pb-8 px-8">
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    I am a <span className="text-foreground font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Data Science and AI professional</span> with a strong foundation in machine
                    learning, deep learning, and statistical analysis. My passion lies in
                    transforming complex data into actionable insights and building intelligent
                    systems that make a real-world impact.
                  </p>
                  <p className="text-lg leading-relaxed">
                    With expertise in <span className="text-foreground font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Python, TensorFlow</span>, and various ML frameworks, I have
                    successfully delivered multiple projects ranging from predictive modeling to
                    computer vision applications. I continuously strive to stay updated with the
                    latest advancements in AI and data science.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2 text-foreground px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="font-semibold text-sm">Open to collaborate</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                      <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                      <span className="font-semibold text-sm">Continuous learner</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-primary/30 hover:scale-105 transition-transform">
                <GraduationCap className="h-3 w-3 mr-1 text-primary" />
                Education
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Academic Journey</h2>
              <p className="text-lg text-muted-foreground">Building strong foundations</p>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] backdrop-blur-sm bg-gradient-to-br ${edu.gradient} border-border/50`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-primary/20">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {edu.degree}
                          </CardTitle>
                          <Badge className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg">{edu.year}</Badge>
                        </div>
                        <CardDescription className="text-base mt-2">
                          {edu.institution}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-primary/30 hover:scale-105 transition-transform">
                <Code2 className="h-3 w-3 mr-1 text-primary" />
                Skills & Technologies
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Technical Expertise</h2>
              <p className="text-lg text-muted-foreground">Tools and technologies I master</p>
            </div>

            <Card className="backdrop-blur-sm bg-card/50 border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="pt-10 pb-10 px-8">
                <div className="flex flex-wrap gap-4 justify-center">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className={`group text-base px-6 py-3 bg-gradient-to-r ${skill.color} text-white border-0 hover:scale-125 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl font-semibold`}
                    >
                      <span className="mr-2 group-hover:scale-125 transition-transform duration-300 inline-block">
                        {skill.icon}
                      </span>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-primary/30 hover:scale-105 transition-transform">
                <Brain className="h-3 w-3 mr-1 text-primary" />
                Portfolio
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Featured Projects</h2>
              <p className="text-lg text-muted-foreground">Innovative solutions in Data Science and AI</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] backdrop-blur-sm bg-gradient-to-br ${project.gradient} border-border/50 overflow-hidden relative`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="pb-4 relative">
                    <CardTitle className="flex items-start justify-between gap-4">
                      <span className={`flex items-center gap-3 text-xl group-hover:${project.iconColor} transition-colors duration-300`}>
                        <Brain className={`h-6 w-6 ${project.iconColor} group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`} />
                        {project.title}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6 relative">
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="font-medium hover:scale-110 transition-transform border-primary/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button className="group/btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105">
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                        <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-primary/30 hover:scale-105 transition-transform">
                <Mail className="h-3 w-3 mr-1 text-primary" />
                Contact
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Let's Connect</h2>
              <p className="text-lg text-muted-foreground">Have a project in mind? Let's collaborate!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-border/50">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-blue-500/20">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="font-semibold mb-2 text-lg">Email</p>
                  <a
                    href="mailto:sanjoy@example.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    sanjoy@example.com
                  </a>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-border/50">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-purple-500/20">
                    <Phone className="h-8 w-8 text-purple-600" />
                  </div>
                  <p className="font-semibold mb-2 text-lg">Phone</p>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-border/50">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-green-500/20">
                    <MapPin className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="font-semibold mb-2 text-lg">Location</p>
                  <p className="text-sm text-muted-foreground">City, Country</p>
                </CardContent>
              </Card>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-gradient-to-br from-primary/5 via-background to-primary/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <a href="https://github.com/sanjoydhara" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:scale-125 hover:bg-blue-500/10 hover:text-blue-600 transition-all duration-300">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/sanjoydhara" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:scale-125 hover:bg-blue-600/10 hover:text-blue-700 transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:sanjoy@example.com">
                <Button variant="ghost" size="icon" className="hover:scale-125 hover:bg-purple-500/10 hover:text-purple-600 transition-all duration-300">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
            
            <div className="text-muted-foreground">
              <p className="mb-3 font-medium">
                © {new Date().getFullYear()} Sanjoy Dhara. All rights reserved.
              </p>
              <p className="text-sm bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                Built with passion for Data Science & Artificial Intelligence
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}