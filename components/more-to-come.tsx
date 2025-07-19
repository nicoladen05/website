"use client"

export default function MoreToCome() {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
      <div className="flex flex-col items-center space-y-2">
        <div className="text-sm text-muted-foreground font-mono">more to come</div>
        <div className="flex space-x-1">
          <div
            className="w-2 h-2 bg-muted-foreground/30 rounded-full animate-pulse"
            style={{ animationDelay: "0ms" }}
          />
          <div
            className="w-2 h-2 bg-muted-foreground/30 rounded-full animate-pulse"
            style={{ animationDelay: "200ms" }}
          />
          <div
            className="w-2 h-2 bg-muted-foreground/30 rounded-full animate-pulse"
            style={{ animationDelay: "400ms" }}
          />
        </div>
      </div>
    </div>
  )
}
