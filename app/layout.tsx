import { IBM_Plex_Mono, Manrope } from "next/font/google"
import { cookies } from "next/headers"

import "./globals.css"
import { LanguageProvider } from "@/components/providers/language-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { getLanguageOrDefault, LANGUAGE_COOKIE_KEY } from "@/lib/language"
import { cn } from "@/lib/utils"

const manrope = Manrope({
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const languageCookie = cookieStore.get(LANGUAGE_COOKIE_KEY)?.value
  const initialLanguage = getLanguageOrDefault(languageCookie)

  return (
    <html
      lang={initialLanguage}
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", manrope.variable)}
    >
      <body className="min-h-screen bg-[#0b0b0c] text-white">
        <LanguageProvider
          initialLanguage={initialLanguage}
        >
          <ThemeProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
