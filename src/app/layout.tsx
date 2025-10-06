import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DevLinkProvider } from '../../devlink/DevLinkProvider';
import '../../devlink/global.css';
import Script from 'next/script';

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
        <Script id="salesloft-tracking" strategy="afterInteractive">
          {`
            (function(i,s,o,g,r,a,m){i['SLScoutObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://scout-cdn.salesloft.com/sl.js','slscout');
            slscout(["init", "eyJhbGciOiJIUzI1NiJ9.eyJ0IjoxMTc3Nzl9.7fTvHDpPBTpwN5fzAvjKWjo6fh6DhUR8L_E05CCLQGk"]);
          `}
        </Script>
      </body>
    </html>
  )
}