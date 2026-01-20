'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from '@posthog/react'
import { useEffect } from 'react'

export function PHProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init('YOUR_POSTHOG_API_KEY', {
      api_host: 'https://us.i.posthog.com',
      defaults: '2025-11-30',
      capture_pageview: false
    })
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}