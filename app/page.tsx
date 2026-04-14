import { Footer } from "@/components/home/footer"
import { HomepageShell } from "@/components/home/homepage-shell"
import { Header } from "@/components/containers/header/header"
import { MainLayout } from "@/components/containers/layout/main-layout"

export default function Page() {
  return (
    <MainLayout>
      <Header />
      <HomepageShell />
      <Footer />
    </MainLayout>
  )
}
