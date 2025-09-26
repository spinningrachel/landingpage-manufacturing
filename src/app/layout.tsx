import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DevLinkProvider } from '../../devlink/DevLinkProvider';
import '../../devlink/global.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Visual Layer Manufacturing - AI-Powered Defect Detection',
  description: 'Achieve 90% Better Defect Detection in Days, Not Months. Visual Layer turns raw inspection data into ROI-driven models that work in live production.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <DevLinkProvider>
          {children}
        </DevLinkProvider>
      </body>
    </html>
  )
}