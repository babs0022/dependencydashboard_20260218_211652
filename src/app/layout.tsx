import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DependencyDashboard',
  description: 'This issue lists Renovate updates and detected dependencies. Read the [Dependency Dashboard](https:/',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
