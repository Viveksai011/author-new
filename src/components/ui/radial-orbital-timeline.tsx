'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Link as LinkIcon, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export interface TimelineItem {
  id: number
  title: string
  date: string
  content: string
  category: string
  icon: React.ElementType
  relatedIds: number[]
  status: 'completed' | 'in-progress' | 'pending'
  energy: number
}

export interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[]
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [mounted, setMounted] = useState<boolean>(false)
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({})
  const [viewMode] = useState<'orbital'>('orbital')
  const [rotationAngle, setRotationAngle] = useState<number>(0)
  const [autoRotate, setAutoRotate] = useState<boolean>(true)
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({})
  const [centerOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null)
  const [containerWidth, setContainerWidth] = useState<number>(800)

  const containerRef = useRef<HTMLDivElement>(null)
  const orbitRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({})

  useEffect(() => {
    setMounted(true)
  }, [])

  // Measure container width for responsive radius calculation
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({})
      setActiveNodeId(null)
      setPulseEffect({})
      setAutoRotate(true)
    }
  }

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev }
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false
        }
      })

      newState[id] = !prev[id]

      if (!prev[id]) {
        setActiveNodeId(id)
        setAutoRotate(false)

        const relatedItems = getRelatedItems(id)
        const newPulseEffect: Record<number, boolean> = {}
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true
        })
        setPulseEffect(newPulseEffect)

        centerViewOnNode(id)
      } else {
        setActiveNodeId(null)
        setAutoRotate(true)
        setPulseEffect({})
      }

      return newState
    })
  }

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout

    if (autoRotate && viewMode === 'orbital') {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360
          return Number(newAngle.toFixed(3))
        })
      }, 50)
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer)
      }
    }
  }, [autoRotate, viewMode])

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== 'orbital' || !nodeRefs.current[nodeId]) return

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId)
    const totalNodes = timelineData.length
    const targetAngle = (nodeIndex / totalNodes) * 360

    setRotationAngle(270 - targetAngle)
  }

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + (mounted ? rotationAngle : 0)) % 360

    // Dynamic responsive radius based on viewport width
    const radius = !mounted
      ? 175
      : containerWidth < 480
      ? 115
      : containerWidth < 640
      ? 140
      : containerWidth < 1024
      ? 175
      : 210
    const radian = (angle * Math.PI) / 180

    const x = radius * Math.cos(radian) + centerOffset.x
    const y = radius * Math.sin(radian) + centerOffset.y

    const zIndex = Math.round(100 + 50 * Math.cos(radian))
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    )

    return { x, y, angle, zIndex, opacity }
  }

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId)
    return currentItem ? currentItem.relatedIds : []
  }

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false
    const relatedItems = getRelatedItems(activeNodeId)
    return relatedItems.includes(itemId)
  }

  const getStatusStyles = (status: TimelineItem['status']): string => {
    switch (status) {
      case 'completed':
        return 'text-white bg-black border-white'
      case 'in-progress':
        return 'text-black bg-white border-black'
      case 'pending':
        return 'text-white bg-black/40 border-white/50'
      default:
        return 'text-white bg-black/40 border-white/50'
    }
  }

  return (
    <div
      className="w-full min-h-[480px] sm:min-h-[580px] h-[520px] sm:h-[640px] flex flex-col items-center justify-center bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden relative touch-pan-y"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: '1000px',
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Glowing Orbital Center Sun */}
          <div className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#ff5125] via-orange-500 to-amber-400 animate-pulse flex items-center justify-center z-10 shadow-[0_0_40px_rgba(255,81,37,0.7)]">
            <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/30 animate-ping opacity-70"></div>
            <div
              className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/20 animate-ping opacity-50"
              style={{ animationDelay: '0.5s' }}
            ></div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-md"></div>
          </div>

          {/* Dynamic Responsive Orbit Ring */}
          <div
            className={`absolute rounded-full border border-white/10 transition-all duration-300 ${
              containerWidth < 480
                ? 'w-60 h-60'
                : containerWidth < 640
                ? 'w-72 h-72'
                : containerWidth < 1024
                ? 'w-88 h-88'
                : 'w-96 h-96'
            }`}
          ></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length)
            const isExpanded = expandedItems[item.id]
            const isRelated = isRelatedToActive(item.id)
            const isPulsing = pulseEffect[item.id]
            const Icon = item.icon

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            }

            return (
              <div
                key={item.id}
                ref={(el) => {
                  nodeRefs.current[item.id] = el
                }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                suppressHydrationWarning
                onClick={(e) => {
                  e.stopPropagation()
                  toggleItem(item.id)
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? 'animate-pulse duration-1000' : ''
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * 0.4 + 32}px`,
                    height: `${item.energy * 0.4 + 32}px`,
                    left: `-${(item.energy * 0.4 + 32 - 32) / 2}px`,
                    top: `-${(item.energy * 0.4 + 32 - 32) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? 'bg-white text-black'
                      : isRelated
                      ? 'bg-white/50 text-black'
                      : 'bg-black text-white'
                  }
                  border-2 
                  ${
                    isExpanded
                      ? 'border-white shadow-lg shadow-white/30'
                      : isRelated
                      ? 'border-white animate-pulse'
                      : 'border-white/40'
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? 'scale-125 sm:scale-150' : ''}
                `}
                >
                  <Icon className="size-3.5 sm:size-4" />
                </div>

                <div
                  className={`
                  absolute top-10 sm:top-12 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-[10px] sm:text-xs font-semibold tracking-wider
                  transition-all duration-300 max-w-[120px] truncate text-center
                  ${isExpanded ? 'text-white scale-110 sm:scale-125' : 'text-white/70'}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute top-16 sm:top-20 left-1/2 -translate-x-1/2 w-60 sm:w-72 bg-slate-900/95 backdrop-blur-lg border-white/30 shadow-xl shadow-black/50 overflow-visible text-white z-50">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50"></div>
                    <CardHeader className="pb-2 p-4 sm:p-6">
                      <div className="flex justify-between items-center">
                        <Badge
                          className={`px-2 text-[10px] sm:text-xs ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          {item.status === 'completed'
                            ? 'COMPLETE'
                            : item.status === 'in-progress'
                            ? 'IN PROGRESS'
                            : 'PENDING'}
                        </Badge>
                        <span className="text-[10px] sm:text-xs font-mono text-white/50">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-xs sm:text-sm mt-2 text-white font-bold">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-[11px] sm:text-xs text-white/80 p-4 pt-0 sm:p-6 sm:pt-0">
                      <p>{item.content}</p>

                      <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10">
                        <div className="flex justify-between items-center text-[10px] sm:text-xs mb-1">
                          <span className="flex items-center text-white/90">
                            <Zap size={10} className="mr-1 text-amber-400" />
                            Program Impact
                          </span>
                          <span className="font-mono text-amber-400">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#ff5125] to-amber-400"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10">
                          <div className="flex items-center mb-1.5 sm:mb-2">
                            <LinkIcon size={10} className="text-white/70 mr-1" />
                            <h4 className="text-[9px] sm:text-xs uppercase tracking-wider font-medium text-white/70">
                              Connected Modules
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              )
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-5 sm:h-6 px-1.5 sm:px-2 py-0 text-[9px] sm:text-xs rounded-none border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    toggleItem(relatedId)
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={8}
                                    className="ml-1 text-white/60"
                                  />
                                </Button>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
