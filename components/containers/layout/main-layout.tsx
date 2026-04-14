import type { ReactNode } from "react"

type MainLayoutProps = {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 lg:px-6">{children}</div>
    </div>
  )
}
