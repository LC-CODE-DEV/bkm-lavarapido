import React from "react"

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: "secondary"
}

export function Badge({ children, className = "", variant }: BadgeProps) {
  const baseStyle =
    "inline-block text-xs font-medium px-3 py-1 rounded-full transition-colors"

  const variants = {
    default: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-200 text-gray-800",
  }

  const selected = variant === "secondary" ? variants.secondary : variants.default

  return <span className={`${baseStyle} ${selected} ${className}`}>{children}</span>
}

