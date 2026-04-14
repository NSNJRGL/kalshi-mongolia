import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { footerColumns, socialLinks } from "@/lib/mock-market-data"

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="px-4 py-12 md:px-4">
        <div className="grid gap-10 xl:grid-cols-[repeat(5,minmax(0,1fr))_224px]">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-bold text-[#e5e5e5]">{column.title}</h3>
              <ul className="mt-9 space-y-4">
                {column.items.map((item) => (
                  <li key={item} className="text-sm text-[#888]">
                    <Link href="#" className="transition-colors hover:text-[#e5e5e5]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-bold text-[#e5e5e5]">Нийгэмлэг</h3>
            <ul className="mt-9 space-y-3">
              {socialLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-[#888] transition-colors hover:text-[#e5e5e5]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#e5e5e5]">Мэдээлэл авах</h3>
            <p className="mt-9 max-w-[204px] text-sm leading-5 text-[#888]">
              Шинэ зах зээл, онцлох үйл явдлын талаар мэдээлэл авч байгаарай.
            </p>

            <div className="mt-4 space-y-2">
              <Input
                placeholder="И-мэйл хаяг"
                className="h-9 rounded-xl border-white/10 bg-[#111111] text-sm text-[#e5e5e5] placeholder:text-[#666] focus-visible:border-[#10b981]/60 focus-visible:ring-0"
              />
              <Button className="h-9 w-full rounded-xl bg-[#10b981] text-sm font-semibold text-[#0a0a0a] hover:bg-[#34d399]">
                Бүртгүүлэх
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-[#10b981] text-sm font-bold text-[#0a0a0a]">
                  М
                </div>
                <span className="text-[18px] font-bold tracking-[-0.02em] text-[#e5e5e5]">
                  МаркетХөл
                </span>
              </div>
              <p className="text-sm text-[#666]">
                © 2026 МаркетХөл. Бүх эрх хуулиар хамгаалагдсан.
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                variant="ghost"
                className="h-8 rounded-lg px-3 text-sm text-[#e5e5e5] hover:bg-[#111111]"
              >
                🇲🇳 Монгол
              </Button>
              <Button
                variant="ghost"
                className="h-8 rounded-lg px-3 text-sm text-[#e5e5e5] hover:bg-[#111111]"
              >
                🇺🇸 English
              </Button>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-[896px] text-center text-sm leading-6 text-[#666]">
            Анхааруулга: МаркетХөл нь таамаглалын зах зээлийн платформ бөгөөд зөвхөн
            мэдээллийн зориулалттай. Энэ нь санхүүгийн зөвлөгөө биш бөгөөд та арилжаа
            хийхдээ өөрийн хариуцлагаар шийдвэр гаргана.
          </p>
        </div>
      </div>
    </footer>
  )
}
