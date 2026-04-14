import { IBM_Plex_Mono, Noto_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils";

const notoSans = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-sans",
})

const fontMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", notoSans.variable)}
    >
      <body className="min-h-screen bg-[#0b0b0c] text-white">
        <ThemeProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
