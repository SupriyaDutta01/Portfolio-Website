"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    // Enhanced Particle class with colorful effects for dark theme
    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
      pulseSpeed: number
      pulsePhase: number
      color: string
      hue: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 3 + 1
        this.opacity = Math.random() * 0.8 + 0.4
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulsePhase = Math.random() * Math.PI * 2
        // Colorful hues: blues (200-240), purples (260-300), cyans (180-200)
        this.hue = Math.random() * 120 + 180
        this.color = `hsl(${this.hue}, 80%, 65%)`
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.pulsePhase += this.pulseSpeed
        this.hue += 0.15 // Slowly shift color

        // Wrap around screen
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
        
        this.color = `hsl(${this.hue}, 80%, 65%)`
      }

      draw() {
        if (!ctx) return
        const pulse = Math.sin(this.pulsePhase) * 0.5 + 0.7
        
        // Colorful glow effect - brighter for dark background
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius * 5
        )
        gradient.addColorStop(0, `hsla(${this.hue}, 90%, 70%, ${this.opacity * pulse})`)
        gradient.addColorStop(0.5, `hsla(${this.hue}, 85%, 65%, ${this.opacity * pulse * 0.6})`)
        gradient.addColorStop(1, `hsla(${this.hue}, 80%, 60%, 0)`)
        
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius * 5, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
        
        // Bright core particle
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${this.hue}, 95%, 75%, ${this.opacity * pulse})`
        ctx.shadowBlur = 15
        ctx.shadowColor = this.color
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    // Create particles
    const particles: Particle[] = []
    const particleCount = 120

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      if (!ctx) return

      // Clear canvas with subtle trail effect - darker for dark theme
      ctx.fillStyle = "rgba(20, 20, 40, 0.08)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw colorful connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 180) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            const opacity = (1 - distance / 180) * 0.4
            
            // Gradient line with color mixing
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            )
            gradient.addColorStop(0, `hsla(${particles[i].hue}, 85%, 65%, ${opacity})`)
            gradient.addColorStop(0.5, `hsla(${(particles[i].hue + particles[j].hue) / 2}, 90%, 70%, ${opacity * 1.5})`)
            gradient.addColorStop(1, `hsla(${particles[j].hue}, 85%, 65%, ${opacity})`)
            
            ctx.strokeStyle = gradient
            ctx.lineWidth = 2.5
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      {/* Multi-layered vibrant gradient backgrounds for dark theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/25 via-purple-600/20 to-cyan-600/25 animate-gradient" />
      
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-700/20 via-pink-600/15 to-blue-600/20 animate-gradient opacity-80" 
        style={{ animationDuration: '25s', animationDirection: 'reverse' }} 
      />
      
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/15 via-transparent to-purple-600/15 animate-gradient opacity-70" 
        style={{ animationDuration: '30s' }} 
      />
      
      {/* Canvas for colorful particle network */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-70"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Vibrant floating orbs with multiple colors - enhanced for dark theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-[700px] h-[700px] bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-transparent rounded-full blur-3xl animate-float-slow animate-pulse-glow" />
        
        <div className="absolute bottom-[10%] right-[15%] w-[650px] h-[650px] bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-transparent rounded-full blur-3xl animate-float-delayed animate-pulse-glow" 
          style={{ animationDelay: '1s' }}
        />
        
        <div className="absolute top-[45%] right-[25%] w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/25 via-purple-500/18 to-transparent rounded-full blur-3xl animate-float" />
        
        <div className="absolute bottom-[35%] left-[20%] w-[450px] h-[450px] bg-gradient-to-br from-cyan-500/22 via-teal-500/15 to-transparent rounded-full blur-3xl animate-float" 
          style={{ animationDuration: '18s' }}
        />
        
        <div className="absolute top-[60%] left-[45%] w-[400px] h-[400px] bg-gradient-to-br from-violet-500/20 via-fuchsia-500/15 to-transparent rounded-full blur-3xl animate-float-delayed" 
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Tech grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Diagonal accent lines */}
      <div 
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 100px,
            rgba(99, 102, 241, 0.15) 100px,
            rgba(99, 102, 241, 0.15) 101px
          )`
        }}
      />

      {/* Radial spotlight with color - adjusted for dark theme */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/30 to-background/70" />
      
      {/* Shimmer overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent animate-shimmer" />
    </>
  )
}