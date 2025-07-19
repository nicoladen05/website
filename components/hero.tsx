import { Github, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="container flex min-h-screen max-w-screen-2xl flex-col items-center justify-center space-y-12 py-24 text-center">
      <div className="space-y-6">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          nicoladen
        </h1>
      </div>

      {/* Social Media Cards with Creative Effects */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <a
          href="https://github.com/nicoladen05"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col items-center gap-3 rounded-xl border border-border/40 bg-background/50 p-6 backdrop-blur transition-all duration-300 hover:scale-110 hover:rotate-2 hover:shadow-2xl hover:shadow-purple-500/20"
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <Github className="h-6 w-6 transition-all duration-300 group-hover:scale-125 group-hover:text-purple-400" />
          <span className="text-sm font-medium relative z-10">GitHub</span>
          <span className="text-xs text-muted-foreground font-mono relative z-10">nicoladen05</span>
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 blur transition-opacity duration-300 group-hover:opacity-30" />
        </a>

        <a
          href="mailto:hello@nicoladen.dev"
          className="group relative flex flex-col items-center gap-3 rounded-xl border border-border/40 bg-background/50 p-6 backdrop-blur transition-all duration-300 hover:scale-110 hover:-rotate-2 hover:shadow-2xl hover:shadow-emerald-500/20"
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <Mail className="h-6 w-6 transition-all duration-300 group-hover:scale-125 group-hover:text-emerald-400" />
          <span className="text-sm font-medium relative z-10">Email</span>
          <span className="text-xs text-muted-foreground font-mono relative z-10">hello@nicoladen.dev</span>
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 blur transition-opacity duration-300 group-hover:opacity-30" />
        </a>
      </div>
    </section>
  )
}
