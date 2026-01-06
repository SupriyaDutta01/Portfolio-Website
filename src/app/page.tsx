"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/Navigation"
import ContactForm from "@/components/ContactForm"
import AnimatedBackground from "@/components/AnimatedBackground"
<<<<<<< HEAD
import { Github, Linkedin, Mail, GraduationCap, Code2, Brain, ExternalLink, MapPin, Phone, ArrowRight, Sparkles, Database, BarChart3, Cpu, BookOpen, ChevronDown, ChevronUp, Star, Award, Monitor, Zap, TrendingUp, Eye, GitBranch, Coffee, MessageSquare } from "lucide-react"
=======
import { Github, Linkedin, Mail, GraduationCap, Code2, Brain, ExternalLink, MapPin, Phone, ArrowRight, Sparkles, Database, BarChart3, Cpu, BookOpen, ChevronDown, ChevronUp, Star, Award, Monitor, Zap, TrendingUp, Eye, GitBranch, Coffee, MessageSquare} from "lucide-react"
>>>>>>> e01076c (Update contact form and UI changes)
import { SiPython, SiMysql, SiC, SiR, SiLatex, SiPytorch, SiTensorflow, SiKeras, SiScikitlearn, SiPandas, SiNumpy, SiOpencv, SiPlotly, SiStreamlit, SiLangchain, SiGit, SiGithub, SiJupyter, SiGooglecolab, SiOverleaf, SiLinux } from "react-icons/si"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedDegree, setExpandedDegree] = useState<number | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [showAllCertificates, setShowAllCertificates] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const technicalExpertise = {
    languages: {
      title: "Languages",
      icon: <Code2 className="h-5 w-5" />,
      gradient: "from-blue-500/20 via-cyan-500/10 to-blue-500/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-500",
      items: [
        { name: "Python", icon: <SiPython className="text-xl" />, gradient: "from-blue-500 via-cyan-500 to-blue-600" },
        { name: "SQL", icon: <SiMysql className="text-xl" />, gradient: "from-cyan-500 via-blue-500 to-indigo-600" },
        { name: "C", icon: <SiC className="text-xl" />, gradient: "from-slate-600 via-gray-600 to-slate-700" },
        { name: "Java", icon: <Coffee className="text-xl" />, gradient: "from-red-500 via-orange-500 to-amber-600" },
        { name: "R", icon: <SiR className="text-xl" />, gradient: "from-blue-600 via-indigo-600 to-purple-600" },
        { name: "LaTeX", icon: <SiLatex className="text-xl" />, gradient: "from-green-600 via-emerald-600 to-teal-600" },
      ]
    },
    librariesFrameworks: {
      title: "Libraries & Frameworks",
      icon: <Database className="h-5 w-5" />,
      gradient: "from-purple-500/20 via-pink-500/10 to-purple-500/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-500",
      items: [
        { name: "PyTorch", icon: <SiPytorch className="text-xl" />, gradient: "from-orange-500 via-red-500 to-pink-600" },
        { name: "TensorFlow", icon: <SiTensorflow className="text-xl" />, gradient: "from-orange-600 via-amber-600 to-yellow-600" },
        { name: "Keras", icon: <SiKeras className="text-xl" />, gradient: "from-red-500 via-pink-500 to-rose-600" },
        { name: "Scikit-learn", icon: <SiScikitlearn className="text-xl" />, gradient: "from-orange-500 via-yellow-500 to-amber-600" },
        { name: "Pandas", icon: <SiPandas className="text-xl" />, gradient: "from-blue-500 via-indigo-500 to-purple-600" },
        { name: "NumPy", icon: <SiNumpy className="text-xl" />, gradient: "from-blue-600 via-cyan-600 to-sky-600" },
        { name: "OpenCV", icon: <SiOpencv className="text-xl" />, gradient: "from-green-500 via-teal-500 to-emerald-600" },
        { name: "Matplotlib", icon: <BarChart3 className="text-xl" />, gradient: "from-blue-500 via-purple-500 to-violet-600" },
        { name: "Seaborn", icon: <TrendingUp className="text-xl" />, gradient: "from-teal-500 via-cyan-500 to-blue-600" },
        { name: "Streamlit", icon: <SiStreamlit className="text-xl" />, gradient: "from-red-500 via-pink-500 to-rose-600" },
        { name: "LangChain", icon: <SiLangchain className="text-xl" />, gradient: "from-green-600 via-emerald-600 to-teal-600" },
        { name: "LangGraph", icon: <GitBranch className="text-xl" />, gradient: "from-emerald-500 via-teal-500 to-cyan-600" },
      ]
    },
    toolsPlatforms: {
      title: "Tools & Platforms",
      icon: <Cpu className="h-5 w-5" />,
      gradient: "from-green-500/20 via-emerald-500/10 to-green-500/20",
      borderColor: "border-green-500/30",
      iconColor: "text-green-500",
      items: [
        { name: "Git", icon: <SiGit className="text-xl" />, gradient: "from-orange-500 via-red-500 to-pink-600" },
        { name: "GitHub", icon: <SiGithub className="text-xl" />, gradient: "from-gray-700 via-slate-700 to-gray-800" },
        { name: "VS Code", icon: <Code2 className="text-xl" />, gradient: "from-blue-500 via-cyan-500 to-sky-600" },
        { name: "Jupyter Notebooks", icon: <SiJupyter className="text-xl" />, gradient: "from-orange-500 via-amber-500 to-yellow-600" },
        { name: "Google Colab", icon: <SiGooglecolab className="text-xl" />, gradient: "from-yellow-500 via-orange-500 to-amber-600" },
        { name: "Overleaf", icon: <SiOverleaf className="text-xl" />, gradient: "from-green-600 via-emerald-600 to-teal-600" },
      ]
    },
    operatingSystems: {
      title: "Operating Systems",
      icon: <Monitor className="h-5 w-5" />,
      gradient: "from-orange-500/20 via-amber-500/10 to-orange-500/20",
      borderColor: "border-orange-500/30",
      iconColor: "text-orange-500",
      items: [
        { name: "Linux (Ubuntu)", icon: <SiLinux className="text-xl" />, gradient: "from-orange-500 via-red-500 to-pink-600" },
        { name: "Windows", icon: <Monitor className="text-xl" />, gradient: "from-blue-500 via-cyan-500 to-sky-600" },
      ]
    },
    areasOfExpertise: {
      title: "Areas of Expertise",
      icon: <Brain className="h-5 w-5" />,
      gradient: "from-pink-500/20 via-rose-500/10 to-pink-500/20",
      borderColor: "border-pink-500/30",
      iconColor: "text-pink-500",
      items: [
        { name: "Machine Learning", icon: <Cpu className="text-xl" />, gradient: "from-purple-500 via-pink-500 to-fuchsia-600" },
        { name: "Natural Language Processing", icon: <MessageSquare className="text-xl" />, gradient: "from-blue-600 via-indigo-600 to-violet-600" },
        { name: "Computer Vision", icon: <Eye className="text-xl" />, gradient: "from-violet-500 via-purple-500 to-indigo-600" },
        { name: "Generative AI", icon: <Sparkles className="text-xl" />, gradient: "from-pink-500 via-rose-500 to-red-600" },
        { name: "Reinforcement Learning", icon: <Zap className="text-xl" />, gradient: "from-fuchsia-500 via-pink-500 to-rose-600" },
        { name: "Statistical Analysis", icon: <BarChart3 className="text-xl" />, gradient: "from-blue-500 via-indigo-500 to-purple-600" },
      ]
    }
  }

  const education = [
    {
      degree: "Master of Science in Big Data Analytics",
      institution: "Ramakrishna Mission Vivekananda Educational and Research Institute",
      year: "Ongoing",
      description: "Specialized in Machine Learning and Artificial Intelligence",
      icon: (
      <Image 
        src="/RKM-logo.png"
        alt="Lo7o"
        width={70}
        height={70}
        className="h-6 w-6"
      />
    ),
      gradient: "from-purple-500/10 via-pink-500/5 to-purple-500/10",
      courses: [
        { name: "Machine Learning", isFoundation: true },
        { name: "Deep Learning & Natural Language Processing", isFoundation: true },
        { name: "Data Stucture and Algorithms in Python", isFoundation: true },
        { name: "Applied Machine Learning", isFoundation: true },
        { name: "Deep Reinforcement Learning", isFoundation: true },
        { name: "Statistics in R", isFoundation: true },
        { name: "Computer Vision", isFoundation: false },
        { name: "Hypothesis Testing", isFoundation: false },
        { name: "Database Management System", isFoundation: false },
        { name: "Probability and Stochastics Processes", isFoundation: false },
        { name: "Java and Hadoop", isFoundation: false },
        { name: "Survival Analysis and Time Series Forecasting", isFoundation: false },
        { name: "Multivariate Statistics", isFoundation: false },
        { name: "Deep Learning for Cybersecurity", isFoundation: false },
        { name: "Econometrics and Finance", isFoundation: false },
        { name: "Communicative English", isFoundation: false },
        { name: "Universal Human Values", isFoundation: false },
        { name: "Indian Knowledge Systems", isFoundation: false }
      ]
    },
    {
      degree: "Master of Science in Applied Mathematics",
      institution: "Rajabazar Science College (University of Calcutta)",
      year: "Completed",
      description: "Specialized in Quantum Mechanics and Quantum Computing",
      icon: (
      <Image 
        src="/cal-logo.png"
        alt="Lo7o"
        width={70}
        height={70}
        className="h-6 w-6"
      />
    ),
      gradient: "from-purple-500/10 via-pink-500/5 to-purple-500/10",
      courses: [
        { name: "Abstract and Linear Algebra", isFoundation: true },
        { name: "Real Analysis", isFoundation: true },
        { name: "Ordinary and Partial Differential Equation", isFoundation: true },
        { name: "Basics of Quantum Mechanics", isFoundation: true },
        { name: "Quantum Information and Quantum Computation", isFoundation: true },
        { name: "Discrete Mathematics and Graph Theory", isFoundation: true },
        { name: "Numerical Practical", isFoundation: true },
        { name: "Numerical Analysis", isFoundation: true },
        { name: "Complex Analysis", isFoundation: false },
        { name: "Generalised Functions and Integral Transfroms", isFoundation: false },
        { name: "Classical Mechanics", isFoundation: false },
        { name: "Continuous Mechanics", isFoundation: false },
        { name: "Rigid Dynamics", isFoundation: false },
        { name: "Theory of Relativity and Classical Electromagnetism", isFoundation: false },
        { name: "Optimization Techniques and Calculus of Variation", isFoundation: false },
        { name: "Statistical Methods", isFoundation: false },
        { name: "Stochastic Differential Equation", isFoundation: false },
        { name: "Quantum Field Thoery", isFoundation: false },
        { name: "Integral Equations & Wavelet Transforms", isFoundation: false }
      ]
    },
    {
      degree: "Bachelor of Science in Mathematics",
      institution: "Serampore College",
      year: "Completed",
      description: "Built a strong foundation in advanced mathematics, problem-solving, and analytical thinking.",
      icon: (
      <Image 
        src="/ser-logo.png"
        alt="Lo7o"
        width={70}
        height={70}
        className="h-6 w-6"
      />
    ),
      gradient: "from-blue-500/10 via-cyan-500/5 to-blue-500/10",
      courses: [
        { name: "Real Analysis and Calculus", isFoundation: true },
        { name: "Linear Algebra", isFoundation: true },
        { name: "Abstract Algebra", isFoundation: true },
        { name: "Numerical Analysis with C", isFoundation: true },
        { name: "Number Theory", isFoundation: true },
        { name: "Ordinary and Partial Differential Equation", isFoundation: true },
        { name: "Particle Dynamics", isFoundation: true },
        { name: "Probabilty and Statistics", isFoundation: true },
        { name: "Complex Analysis", isFoundation: false },
        { name: "Fluid Dynamics", isFoundation: false },
        { name: "Rigid Dynamics", isFoundation: false },
        { name: "Linear Programming Problem and Game Theory", isFoundation: false },
        { name: "Function of Several Variables", isFoundation: false }
      ]
    },
    {
      degree: "Higher Secondary",
      institution: "Serampore Malina Lahiri Boys' Academy (H.S.)",
      year: "Completed",
      //description: "Specialized in Machine Learning and Artificial Intelligence",
      icon: (
      <Image 
        src="/sera-logo.png"
        alt="Lo7o"
        width={70}
        height={70}
        className="h-6 w-6"
      />
    ),
      gradient: "from-purple-500/10 via-pink-500/5 to-purple-500/10",
      courses: [
        { name: "Mathematics", isFoundation: true },
        { name: "Physics", isFoundation: true },
        { name: "Chemistry", isFoundation: false },
        { name: "Environmental Science", isFoundation: false },
        { name: "Bengali", isFoundation: false },
        { name: "English", isFoundation: false },
      ]
    },
    
  ]

  const projects = [
    {
      title: "NexGen Logistics - Customer Experience Dashboard",
      description: "Built an ML-powered Streamlit dashboard for NexGen Logistics to identify and prevent customer churn by integrating multi-source operational data and deploying a hybrid rule-based + RandomForest model (93.3% accuracy). Includes 9 interactive pages for EDA, risk scoring, model insights, and business impact analysis with ROI forecasting.",
      tags: [
        "Python",
        "Machine Learning",
        "RandomForest",
        "Streamlit",
        "Dashboard",
        "EDA",
        "Customer Churn",
        "Data Analytics",
        "Business Intelligence",
        "Predictive Modeling",
        "Plotly"
      ],
      github: "https://github.com/SupriyaDutta01/NexGen-Logistics---Customer-Experience-Dashboard",
      gradient: "from-purple-500/20 via-pink-500/10 to-purple-500/20",
      iconColor: "text-purple-500",
    },
    {
      title: "Conditional Image Synthesis Using Gaussian GAN",
      description: "Implemented a TensorFlow-based GauGAN for conditional image generation, producing photorealistic images from segmentation maps using SPADE blocks, Gaussian latent encoding, and multi-scale PatchGAN. Trained and evaluated on PASCAL VOC datasets with FID and semantic consistency metrics (mIoU, pixel accuracy).",
      tags: [
        "Python",
        "TensorFlow",
        "GANs",
        "GauGAN",
        "SPADE",
        "Image Generation",
        "Computer Vision",
        "Deep Learning",
        "Conditional GAN",
        "PASCAL VOC",
        "Facades Dataset"
      ],
      github: "https://github.com/SupriyaDutta01/Conditional-Image-Synthesis-Using-Gaussian-GAN",
      gradient: "from-blue-500/20 via-cyan-500/10 to-blue-500/20",
      iconColor: "text-blue-500",
    },
    {
      title: "Automated Bird Species Detection",
      description: "Developed an automated bird species classification system using deep learning on the CUB-200-2011 dataset. Trained and compared CNNs (ResNet18, EfficientNet-B0) and Transformer-based models (Swin Transformer, ViT), with Swin achieving the best fine-grained recognition performance.",
      tags: [
        "Python",
        "PyTorch",
        "Deep Learning",
        "Image Classification",
        "Transformers",
        "Swin Transformer",
        "Vision Transformer",
        "CNN",
        "EfficientNet",
        "CUB-200-2011",
        "Computer Vision"
      ],
      github: "https://github.com/SupriyaDutta01/Automated-Bird-Species-Detection",
      gradient: "from-purple-500/20 via-pink-500/10 to-purple-500/20",
      iconColor: "text-purple-500",
    },
    {
      title: "Music Popularity Prediction using Spotify Track Features",
      description: "Built a two-stage ML system to predict Spotify track popularity using audio features and metadata—first classifying zero-popularity tracks, then regressing exact popularity with ensemble models (RandomForest + GradientBoosting). Includes feature engineering, scaling, target-encoding genres, and evaluating 70+ model combinations.",
      tags: [
        "Python",
        "Machine Learning",
        "Regression",
        "Classification",
        "Ensemble Learning",
        "Feature Engineering",
        "Spotify API",
        "Scikit-learn",
        "XGBoost",
        "EDA",
        "Data Preprocessing"
      ],
      github: "https://github.com/SupriyaDutta01/Music-Popularity-Prediction-using-Spotify-Track-Features",
      gradient: "from-green-500/20 via-emerald-500/10 to-green-500/20",
      iconColor: "text-green-500",
    },
    {
      title: "Imbalance Resilient Email Spam Classification Using Machine Learning Public",
      description: "Built an imbalance-resilient spam detection system using advanced augmentation (BERT, back-translation, LLM paraphrasing) and ensemble ML models, focused on minimizing false positives and achieving high precision.",
      tags: [
        "Python",
        "Machine Learning",
        "NLP",
        "TF-IDF",
        "Transformers",
        "Data Augmentation",
        "BERT",
        "XGBoost",
        "Ensemble Learning",
        "Scikit-learn"
      ],
      github: "https://github.com/SupriyaDutta01/Imbalance-Resilient-Email-Spam-Classification-Using-Machine-Learning",
      gradient: "from-orange-500/20 via-amber-500/10 to-orange-500/20",
      iconColor: "text-orange-500",
    },
  ]

  const certificates = [
    {
      title: "The Joy of Computing using Python",
      organization: "NPTEL",
      date: "2024",
      description: "Learned Python by solving practical problems—games, puzzles, algorithms, image processing, and real-world applications.",
      certificateUrl: "/certificates/The Joy of Computing using Python.pdf",
      gradient: "from-blue-500/20 via-indigo-500/10 to-blue-500/20",
      orgColor: "text-blue-500",
    },
  ]

  const stats = [
    //{ icon: <Code2 className="h-6 w-6" />, value: "50+", label: "Projects Completed", gradient: "from-blue-500/20 to-cyan-500/20" },
    //{ icon: <Database className="h-6 w-6" />, value: "15+", label: "ML Models Deployed", gradient: "from-purple-500/20 to-pink-500/20" },
    //{ icon: <BarChart3 className="h-6 w-6" />, value: "95%", label: "Accuracy Rate", gradient: "from-green-500/20 to-emerald-500/20" },
    //{ icon: <Cpu className="h-6 w-6" />, value: "3+", label: "Years Experience", gradient: "from-orange-500/20 to-amber-500/20" },
  ]

  const PROJECTS_LIMIT = 6
  const CERTIFICATES_LIMIT = 4
  
  const displayedProjects = showAllProjects ? projects : projects.slice(0, PROJECTS_LIMIT)
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, CERTIFICATES_LIMIT)

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
                    src="/profile.png"
                    alt="Supriya Dutta"
                    width={350}
                    height={350}
                    className="rounded-full border-4 border-primary/30 shadow-2xl shadow-primary/50 animate-profile-float"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 backdrop-blur-md border border-purple-500/30 mb-4 hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/20">
              <Sparkles className="h-4 w-4 text-purple-400 animate-pulse drop-shadow-glow" />
              <span className="text-lg font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">Available for opportunities</span>
            </div>

            <div className="space-y-6 bg-black/30 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/10">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight drop-shadow-2xl">
                <span className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]">Hi, I'm </span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_30px_rgba(168,85,247,0.8)] filter brightness-125">
                  Supriya Dutta
                </span>
              </h1>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <Badge className="text-lg px-5 py-2.5 font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 hover:scale-110 transition-transform duration-300 shadow-xl shadow-blue-500/50">
                  <Brain className="h-4 w-4 mr-2" />
                  Data Science
                </Badge>
                <span className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold drop-shadow-lg">×</span>
                <Badge className="text-lg px-5 py-2.5 font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 hover:scale-110 transition-transform duration-300 shadow-xl shadow-purple-500/50">
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
                  <div className="text-lg text-gray-200 font-semibold drop-shadow-md">{stat.label}</div>
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
              <a href="https://github.com/SupriyaDutta01" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:scale-125 hover:bg-blue-500/10 hover:text-blue-600 transition-all duration-300">
                  <Github className="h-6 w-6" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/supriya-dutta-221bb0353/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:scale-125 hover:bg-blue-600/10 hover:text-blue-700 transition-all duration-300">
                  <Linkedin className="h-6 w-6" />
                </Button>
              </a>
              <a href="mailto:supriyadutta.serampore@gmail.com">
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
              <Badge variant="outline" className="mb-4 border-primary/30 hover:scale-105 transition-transform text-base px-2 py-1">
                <Sparkles className="h-5 w-5 mr-2 text-primary" />
                About Me
              </Badge>
              <h2 className="text-8xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Passionate About Data & AI</h2>
              <p className="text-2xl text-muted-foreground">Turning data into intelligence</p>
            </div>
            
            <Card className="backdrop-blur-sm bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="pt-8 pb-8 px-8">
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-2xl leading-relaxed">

                    I am a <span className="text-foreground font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Data Science and AI enthusiast</span> with a strong academic foundation in machine learning,
                    deep learning, and statistical analysis. I enjoy working with data to extract meaningful
                    insights and develop intelligent models for real-world problems.
                  </p>

                  <p className="text-2xl leading-relaxed">
                    I have hands-on experience with <span className="text-foreground font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Python, TensorFlow</span>, and popular ML frameworks through academic and personal projects,
                    including predictive modeling and computer vision tasks. I am continuously learning and
                    exploring new advancements in AI and data science to strengthen my practical skills.
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2 text-foreground px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="font-semibold text-xl">Open to collaborate</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                      <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                      <span className="font-semibold text-xl">Continuous learner</span>
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
              <Badge variant="outline" className="mb-4 border-primary/30 hover:scale-105 transition-transform text-base px-2 py-1">
                <GraduationCap className="h-3 w-3 mr-1 text-primary" />
                Education
              </Badge>
              <h2 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Academic Journey</h2>
              <p className="text-2xl text-muted-foreground">Building strong foundations</p>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 backdrop-blur-sm bg-gradient-to-br ${edu.gradient} border-border/50 ${expandedDegree === index ? 'scale-[1.02]' : 'hover:scale-[1.03]'}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-primary/20">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <CardTitle className="text-3xl group-hover:text-primary transition-colors">
                            {edu.degree}
                          </CardTitle>
                          <Badge className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg">{edu.year}</Badge>
                        </div>
                        <CardDescription className="text-lg mt-1.5 text-white/90 drop-shadow-sm font-bold">
                          {edu.institution}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg text-white/80 leading-relaxed drop-shadow-sm italic">{edu.description}</p>
                    
                    <Button
                      variant="ghost"
                      className="w-full justify-between hover:bg-primary/10 transition-all group/btn"
                      onClick={() => setExpandedDegree(expandedDegree === index ? null : index)}
                    >
                      <span className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span className="text-lg font-semibold">Course Details</span>
                        <Badge variant="secondary" className="ml-2 text-lg">
                          {edu.courses.filter(c => c.isFoundation).length} Strong Foundation
                        </Badge>
                      </span>
                      {expandedDegree === index ? (
                        <ChevronUp className="h-4 w-4 group-hover/btn:text-primary transition-colors" />
                      ) : (
                        <ChevronDown className="h-4 w-4 group-hover/btn:text-primary transition-colors" />
                      )}
                    </Button>

                    {expandedDegree === index && (
                      <div className="pt-4 border-t border-border/50 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
                          <div className="relative">
                            <Star className="h-5 w-5 text-amber-500 fill-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                            <div className="absolute inset-0 animate-pulse">
                              <Star className="h-5 w-5 text-amber-400 fill-amber-400 opacity-50 blur-sm" />
                            </div>
                          </div>
                          <p className="text-lg text-muted-foreground">
                            <span className="text-amber-500 font-semibold">Strong Foundation</span>
                          </p>
                        </div>
                        
                        <h4 className="text-lg font-semibold mb-4 text-primary flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          Courses Completed:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {edu.courses.map((course, courseIndex) => (
                            <div
                              key={courseIndex}
                              className={`flex items-center gap-2 p-3 rounded-lg backdrop-blur-sm border transition-all hover:scale-105 group/course ${
                                course.isFoundation
                                  ? 'bg-gradient-to-r from-amber-500/20 to-amber-600/10 border-amber-500/40 hover:border-amber-500/60 shadow-lg shadow-amber-500/10'
                                  : 'bg-background/50 border-border/30 hover:border-primary/50'
                              }`}
                            >
                              {course.isFoundation ? (
                                <Star className="h-4 w-4 text-amber-500 fill-amber-500 flex-shrink-0 animate-pulse" />
                              ) : (
                                <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                              )}
                              <span className={`text-lg transition-colors ${
                                course.isFoundation
                                  ? 'text-foreground font-semibold'
                                  : 'text-muted-foreground group-hover/course:text-foreground'
                              }`}>
                                {course.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-primary/30 hover:scale-105 transition-transform text-base px-2 py-1">
                <Code2 className="h-3 w-3 mr-1 text-primary" />
                Skills & Technologies
              </Badge>
              <h2 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Technical Expertise</h2>
              <p className="text-2xl text-muted-foreground">Tools and technologies I master</p>
            </div>

            <div className="space-y-12">
              {Object.entries(technicalExpertise).map(([category, data]) => (
                <div key={category} className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg ${data.iconColor} bg-background/80 backdrop-blur-sm border border-border/50`}>
                      {data.icon}
                    </div>
                    <h3 className="text-3xl font-bold">{data.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {data.items.map((item, index) => (
                      <div
                        key={index}
                        className={`group inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r ${item.gradient} text-white font-semibold text-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20`}
                      >
                        <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                          {item.icon}
                        </span>
                        <span className="drop-shadow-md">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-primary/30 hover:scale-105 transition-transform text-base px-2 py-1">
                <Brain className="h-3 w-3 mr-1 text-primary" />
                Portfolio
              </Badge>
              <h2 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Featured Projects</h2>
              <p className="text-2xl text-muted-foreground">Innovative solutions in Data Science and AI</p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {displayedProjects.map((project, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] backdrop-blur-sm bg-gradient-to-br ${project.gradient} border-border/50 overflow-hidden relative`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="pb-4 relative">
                    <CardTitle className="flex items-start justify-between gap-4">
                      <span className={`flex items-center gap-3 text-2xl group-hover:${project.iconColor} transition-colors duration-300`}>
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

            {projects.length > PROJECTS_LIMIT && (
              <div className="flex justify-center mt-12">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="group border-2 bg-background/50 backdrop-blur-md hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300 shadow-lg font-bold"
                >
                  {showAllProjects ? (
                    <>
                      <ChevronUp className="mr-2 h-5 w-5" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="mr-2 h-5 w-5" />
                      Show More Projects ({projects.length - PROJECTS_LIMIT} more)
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-24 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-primary/30 hover:scale-105 transition-transform text-base px-2 py-1">
                <Award className="h-3 w-3 mr-1 text-primary" />
                Certifications
              </Badge>
              <h2 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Professional Certificates</h2>
              <p className="text-2xl text-muted-foreground">Continuous learning from top organizations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {displayedCertificates.map((cert, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] backdrop-blur-sm bg-gradient-to-br ${cert.gradient} border-border/50 overflow-hidden relative`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardHeader className="pb-1 pt-3 px-3 relative">
                    <div className="flex items-start justify-between gap-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 ${cert.orgColor} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        <Award className="h-5 w-5" />
                      </div>
                      <Badge className="font-semibold text-base bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg">
                        {cert.date}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors leading-tight mt-2">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-lg mt-1">
                      <span className={`font-bold ${cert.orgColor}`}>{cert.organization}</span>
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-2 relative px-3 pb-3">
                    <p className="text-base text-muted-foreground leading-relaxed">{cert.description}</p>
                    
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button size="sm" className="group/btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105 h-9 text-base">
                        <Award className="mr-1.5 h-4 w-4" />
                        View Certificate
                        <ExternalLink className="ml-1.5 h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {certificates.length > CERTIFICATES_LIMIT && (
              <div className="flex justify-center mt-12">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setShowAllCertificates(!showAllCertificates)}
                  className="group border-2 bg-background/50 backdrop-blur-md hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300 shadow-lg font-bold"
                >
                  {showAllCertificates ? (
                    <>
                      <ChevronUp className="mr-2 h-5 w-5" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="mr-2 h-5 w-5" />
                      Show More Certificates ({certificates.length - CERTIFICATES_LIMIT} more)
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-primary/30 hover:scale-105 transition-transform text-base px-2 py-1">
                <Mail className="h-3 w-3 mr-1 text-primary" />
                Contact
              </Badge>
              <h2 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Let's Connect</h2>
              <p className="text-2xl text-muted-foreground">Have a project in mind? Let's collaborate!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-border/50">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-blue-500/20">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="font-semibold mb-2 text-lg">Email</p>
                  <a
                    href="mailto:supriya.serampore@gmail.com"
                    className="text-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    supriyadutta.serampore@gmail.com
                  </a>
                </CardContent>
              </Card>


              <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-border/50">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-green-500/20">
                    <MapPin className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="font-semibold mb-2 text-lg">Serampore</p>
                  <p className="text-lg text-muted-foreground">West Bengal, India</p>
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
              <a href="https://github.com/SupriyaDutta01" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:scale-125 hover:bg-blue-500/10 hover:text-blue-600 transition-all duration-300">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/supriya-dutta-221bb0353/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:scale-125 hover:bg-blue-600/10 hover:text-blue-700 transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:supriyadutta.serampore@gmail.com">
                <Button variant="ghost" size="icon" className="hover:scale-125 hover:bg-purple-500/10 hover:text-purple-600 transition-all duration-300">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
            
            <div className="text-muted-foreground">
              <p className="mb-3 font-medium">
                © {new Date().getFullYear()} Supriya Dutta. All rights reserved.
              </p>
              <p className="text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                Built with passion for Data Science & Artificial Intelligence
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
