"use client"

import { useState, useEffect } from "react"
import { Music, MessageCircle, GitCommit, Calendar } from "lucide-react"

interface Activity {
  id: string
  type: "spotify" | "twitter" | "github" | "general"
  content: string
  timestamp: string
  live?: boolean
}

export default function ActivityCard() {
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: "1",
      type: "spotify",
      content: 'Listening to "Bohemian Rhapsody" by Queen',
      timestamp: "now",
      live: true,
    },
    {
      id: "2",
      type: "twitter",
      content: "Just shipped a new feature! 🚀",
      timestamp: "2h ago",
    },
    {
      id: "3",
      type: "github",
      content: "Pushed 3 commits to portfolio-site",
      timestamp: "4h ago",
    },
    {
      id: "4",
      type: "general",
      content: "Updated portfolio design",
      timestamp: "1d ago",
    },
  ])

  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "spotify":
        return <Music className="h-4 w-4 text-green-500" />
      case "twitter":
        return <MessageCircle className="h-4 w-4 text-blue-500" />
      case "github":
        return <GitCommit className="h-4 w-4 text-purple-500" />
      default:
        return <Calendar className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="w-full max-w-sm rounded-xl border border-border/40 bg-background/50 p-6 backdrop-blur shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Activity</h3>
        <div className="text-xs text-muted-foreground font-mono">{currentTime.toLocaleTimeString()}</div>
      </div>

      <div className="space-y-3">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className="mt-0.5">{getActivityIcon(activity.type)}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm text-foreground truncate">{activity.content}</p>
                {activity.live && (
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-green-500 font-mono">LIVE</span>
                  </div>
                )}
              </div>
              <p className="text-xs text-muted-foreground font-mono">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border/40">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-mono">Status: Online</span>
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="font-mono">Active</span>
          </div>
        </div>
      </div>
    </div>
  )
}
