export type MarketCategory =
  | "Эдийн засаг"
  | "Уул уурхай"
  | "Крипто"
  | "Цаг агаар"
  | "Спорт"
  | "Компани"

export type TrendDirection = "up" | "down"

export type MarketItem = {
  id: string
  slug: string
  question: string
  category: MarketCategory
  icon: string
  iconClassName: string
  probability: number
  volume: string
  trendValue: string
  trendDirection: TrendDirection
}

export type AllMarketItem = MarketItem & {
  yes: number
  no: number
}

export type TopicItem = {
  id: string
  label: string
  icon: string
  volume: string
  trendDirection: TrendDirection
}

export const primaryNavigation: ReadonlyArray<{
  label: string
  href: string
  count?: number
}> = [
  { label: "ЗАХ ЗЭЭЛҮҮД", href: "#markets" },
  { label: "ШУУД", href: "#live", count: 41 },
  { label: "НИЙГЭМ", href: "#community" },
  { label: "СУДАЛГАА", href: "#research" },
]

export const categoryNavigation = [
  "Чиг хандлага",
  "Сонгууль",
  "Улс төр",
  "Спорт",
  "Соёл",
  "Крипто",
  "Уур амьсгал",
  "Эдийн засаг",
  "Компаниуд",
  "Санхүү",
  "Технологи",
] as const

export const marketFilters = [
  "Бүгд",
  "Спорт",
  "Эдийн засаг",
  "Крипто",
  "Улс төр",
  "Цаг агаар",
  "Уул уурхай",
  "Соёл",
] as const

export const featuredMarkets: MarketItem[] = [
  {
    id: "gdp-growth",
    slug: "mongolia-gdp-q4-2026-above-8",
    question: "Монгол Улсын ДНБ 2026 оны 4-р улиралд 8%-аас дээш өсөх үү?",
    category: "Эдийн засаг",
    icon: "🏆",
    iconClassName: "from-[#f0b100] to-[#ff6900]",
    probability: 67,
    volume: "₮842K",
    trendValue: "+5%",
    trendDirection: "up",
  },
  {
    id: "oyu-tolgoi",
    slug: "oyu-tolgoi-500k-tons-2026",
    question: "Оюу толгой 2026 онд 500К тонн зэс олборлох уу?",
    category: "Уул уурхай",
    icon: "⛏️",
    iconClassName: "from-[#ff6900] to-[#fb2c36]",
    probability: 73,
    volume: "₮956K",
    trendValue: "+4%",
    trendDirection: "up",
  },
  {
    id: "bitcoin-summer",
    slug: "bitcoin-120k-summer-2026",
    question: "Bitcoin $120K-д 2026 оны зун хүрэх үү?",
    category: "Крипто",
    icon: "₿",
    iconClassName: "from-[#2b7fff] to-[#00b8db]",
    probability: 41,
    volume: "₮1.2M",
    trendValue: "-2%",
    trendDirection: "down",
  },
  {
    id: "ub-35c",
    slug: "ulaanbaatar-35c-summer-2026",
    question: "УБ хотод 35°C-аас дээш өдөр байх уу?",
    category: "Цаг агаар",
    icon: "🌡️",
    iconClassName: "from-[#fb2c36] to-[#f6339a]",
    probability: 62,
    volume: "₮315K",
    trendValue: "+7%",
    trendDirection: "up",
  },
  {
    id: "mse-index",
    slug: "mse-index-1800-end-2026",
    question: "МСХ индекс 2026 оны эцэст 1,800 цэгт хүрэх үү?",
    category: "Эдийн засаг",
    icon: "📈",
    iconClassName: "from-[#10b981] to-[#86efac]",
    probability: 52,
    volume: "₮687K",
    trendValue: "+2%",
    trendDirection: "up",
  },
]

export const urgentNews = featuredMarkets.slice(1, 4)

export const hotTopics: TopicItem[] = [
  {
    id: "topic-crypto",
    label: "Крипто",
    icon: "₿",
    volume: "₮1.2M өнөөдөр",
    trendDirection: "up",
  },
  {
    id: "topic-mining",
    label: "Уул уурхай",
    icon: "⛏️",
    volume: "₮956K өнөөдөр",
    trendDirection: "up",
  },
  {
    id: "topic-mse",
    label: "МСХ",
    icon: "📈",
    volume: "₮687K өнөөдөр",
    trendDirection: "up",
  },
  {
    id: "topic-football",
    label: "Хөлбөмбөг",
    icon: "⚽",
    volume: "₮524K өнөөдөр",
    trendDirection: "down",
  },
]

export const allMarkets: AllMarketItem[] = [
  {
    id: "erchim",
    slug: "erchim-league-top-3-2026",
    question: "ФК Эрчим 2026 оны МҮЛ-д эхний 3-т багтах уу?",
    category: "Спорт",
    icon: "⚽",
    iconClassName: "from-[#4b5563] to-[#9ca3af]",
    probability: 58,
    yes: 58,
    no: 42,
    volume: "₮524K эргэлт",
    trendValue: "+3%",
    trendDirection: "up",
  },
  {
    id: "btc-midyear",
    slug: "bitcoin-above-120k-june-2026",
    question: "Bitcoin үнэ 2026 оны 6 сарын 30-нд $120,000 давах уу?",
    category: "Крипто",
    icon: "₿",
    iconClassName: "from-[#2b7fff] to-[#00b8db]",
    probability: 41,
    yes: 41,
    no: 59,
    volume: "₮1.2M эргэлт",
    trendValue: "-2%",
    trendDirection: "down",
  },
  {
    id: "warmest-day",
    slug: "ulaanbaatar-hottest-day-over-35-2026",
    question: "Улаанбаатар хотын хамгийн дулаан өдөр 2026 оны зун 35°C-аас дээш болох уу?",
    category: "Цаг агаар",
    icon: "🌡️",
    iconClassName: "from-[#fb2c36] to-[#f6339a]",
    probability: 62,
    yes: 62,
    no: 38,
    volume: "₮315K эргэлт",
    trendValue: "+7%",
    trendDirection: "up",
  },
  {
    id: "mse-all",
    slug: "mse-index-above-1800-dec-2026",
    question: "МСХ индекс 2026 оны 12 сарын 31-нд 1,800 цэгт хүрэх үү?",
    category: "Эдийн засаг",
    icon: "📈",
    iconClassName: "from-[#10b981] to-[#86efac]",
    probability: 52,
    yes: 52,
    no: 48,
    volume: "₮687K эргэлт",
    trendValue: "+2%",
    trendDirection: "up",
  },
  {
    id: "oyu-all",
    slug: "oyu-tolgoi-copper-500k-2026",
    question: "Оюу толгой 2026 онд 500,000 тонн зэс олборлох уу?",
    category: "Уул уурхай",
    icon: "⛏️",
    iconClassName: "from-[#ff6900] to-[#fb2c36]",
    probability: 73,
    yes: 73,
    no: 27,
    volume: "₮956K эргэлт",
    trendValue: "+4%",
    trendDirection: "up",
  },
  {
    id: "usd-mnt",
    slug: "usd-mnt-above-3500-2026",
    question: "USD/MNT ханш 2026 оны эцэст 3,500₮-өөс дээш байх уу?",
    category: "Эдийн засаг",
    icon: "💹",
    iconClassName: "from-[#15803d] to-[#4ade80]",
    probability: 45,
    yes: 45,
    no: 55,
    volume: "₮1.1M эргэлт",
    trendValue: "-1%",
    trendDirection: "down",
  },
  {
    id: "mongolz",
    slug: "mongolz-fifa-qualifier-2026",
    question: "Монгол Улс 2026 оны FIFA дэлхийн цомын урьдчилсан шатанд шалгарах уу?",
    category: "Спорт",
    icon: "⚽",
    iconClassName: "from-[#4b5563] to-[#9ca3af]",
    probability: 18,
    yes: 18,
    no: 82,
    volume: "₮423K эргэлт",
    trendValue: "-3%",
    trendDirection: "down",
  },
  {
    id: "ipo",
    slug: "mongolian-tech-ipo-2026",
    question: "Монголын шинэ технологийн компани 2026 онд IPO хийх үү?",
    category: "Компани",
    icon: "🏢",
    iconClassName: "from-[#9ca3af] to-[#e5e7eb]",
    probability: 35,
    yes: 35,
    no: 65,
    volume: "₮289K эргэлт",
    trendValue: "+1%",
    trendDirection: "up",
  },
]

export const footerColumns = [
  {
    title: "Компани",
    items: ["Бидний тухай", "Ажлын байр", "Холбоо барих", "Хамтрагчид"],
  },
  {
    title: "Зах зээлүүд",
    items: ["Спорт", "Эдийн засаг", "Крипто", "Улс төр", "Цаг агаар"],
  },
  {
    title: "Нөөцүүд",
    items: ["Хэрхэн ажилладаг", "Түгээмэл асуулт", "Сургалт", "API баримт бичиг", "Блог"],
  },
  {
    title: "Хууль эрх зүй",
    items: ["Үйлчилгээний нөхцөл", "Нууцлалын бодлого", "Cookie бодлого", "Хариуцлагын татгалзал"],
  },
] as const

export const socialLinks = ["Twitter", "Telegram", "GitHub", "Discord"] as const
