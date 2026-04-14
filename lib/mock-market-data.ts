export type Language = "en" | "mn"

type LocalizedText = Record<Language, string>

type CategoryKey =
  | "all"
  | "economy"
  | "mining"
  | "crypto"
  | "weather"
  | "sports"
  | "company"
  | "politics"
  | "culture"
  | "trends"
  | "election"
  | "climate"
  | "companies"
  | "finance"
  | "technology"

export type TrendDirection = "up" | "down"

export type MarketItem = {
  id: string
  slug: string
  question: string
  category: string
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

type MarketItemRaw = {
  id: string
  slug: string
  question: LocalizedText
  category: CategoryKey
  icon: string
  iconClassName: string
  probability: number
  volume: LocalizedText
  trendValue: string
  trendDirection: TrendDirection
}

type AllMarketItemRaw = MarketItemRaw & {
  yes: number
  no: number
}

type TopicItemRaw = {
  id: string
  label: LocalizedText
  icon: string
  volume: LocalizedText
  trendDirection: TrendDirection
}

const brandName: LocalizedText = {
  en: "MarketKhul",
  mn: "МаркетХөл",
}

const categoryLabels: Record<CategoryKey, LocalizedText> = {
  all: { en: "All", mn: "Бүгд" },
  economy: { en: "Economy", mn: "Эдийн засаг" },
  mining: { en: "Mining", mn: "Уул уурхай" },
  crypto: { en: "Crypto", mn: "Крипто" },
  weather: { en: "Weather", mn: "Цаг агаар" },
  sports: { en: "Sports", mn: "Спорт" },
  company: { en: "Company", mn: "Компани" },
  politics: { en: "Politics", mn: "Улс төр" },
  culture: { en: "Culture", mn: "Соёл" },
  trends: { en: "Trends", mn: "Чиг хандлага" },
  election: { en: "Election", mn: "Сонгууль" },
  climate: { en: "Climate", mn: "Уур амьсгал" },
  companies: { en: "Companies", mn: "Компаниуд" },
  finance: { en: "Finance", mn: "Санхүү" },
  technology: { en: "Technology", mn: "Технологи" },
}

const primaryNavigationRaw: ReadonlyArray<{
  label: LocalizedText
  href: string
  count?: number
}> = [
  {
    label: { en: "MARKETS", mn: "ЗАХ ЗЭЭЛҮҮД" },
    href: "#markets",
  },
  {
    label: { en: "LIVE", mn: "ШУУД" },
    href: "#live",
    count: 41,
  },
  {
    label: { en: "COMMUNITY", mn: "НИЙГЭМ" },
    href: "#community",
  },
  {
    label: { en: "RESEARCH", mn: "СУДАЛГАА" },
    href: "#research",
  },
]

const categoryNavigationKeys: CategoryKey[] = [
  "trends",
  "election",
  "politics",
  "sports",
  "culture",
  "crypto",
  "climate",
  "economy",
  "companies",
  "finance",
  "technology",
]

const marketFilterKeys: CategoryKey[] = [
  "all",
  "sports",
  "economy",
  "crypto",
  "politics",
  "weather",
  "mining",
  "culture",
]

const featuredMarketsRaw: MarketItemRaw[] = [
  {
    id: "gdp-growth",
    slug: "mongolia-gdp-q4-2026-above-8",
    question: {
      en: "Will Mongolia's GDP grow above 8% in Q4 2026?",
      mn: "Монгол Улсын ДНБ 2026 оны 4-р улиралд 8%-аас дээш өсөх үү?",
    },
    category: "economy",
    icon: "🏆",
    iconClassName: "from-[#f0b100] to-[#ff6900]",
    probability: 67,
    volume: { en: "₮842K", mn: "₮842K" },
    trendValue: "+5%",
    trendDirection: "up",
  },
  {
    id: "oyu-tolgoi",
    slug: "oyu-tolgoi-500k-tons-2026",
    question: {
      en: "Will Oyu Tolgoi mine 500K tons of copper in 2026?",
      mn: "Оюу толгой 2026 онд 500К тонн зэс олборлох уу?",
    },
    category: "mining",
    icon: "⛏️",
    iconClassName: "from-[#ff6900] to-[#fb2c36]",
    probability: 73,
    volume: { en: "₮956K", mn: "₮956K" },
    trendValue: "+4%",
    trendDirection: "up",
  },
  {
    id: "bitcoin-summer",
    slug: "bitcoin-120k-summer-2026",
    question: {
      en: "Will Bitcoin reach $120K by summer 2026?",
      mn: "Bitcoin $120K-д 2026 оны зун хүрэх үү?",
    },
    category: "crypto",
    icon: "₿",
    iconClassName: "from-[#2b7fff] to-[#00b8db]",
    probability: 41,
    volume: { en: "₮1.2M", mn: "₮1.2M" },
    trendValue: "-2%",
    trendDirection: "down",
  },
  {
    id: "ub-35c",
    slug: "ulaanbaatar-35c-summer-2026",
    question: {
      en: "Will Ulaanbaatar see a day above 35°C?",
      mn: "УБ хотод 35°C-аас дээш өдөр байх уу?",
    },
    category: "weather",
    icon: "🌡️",
    iconClassName: "from-[#fb2c36] to-[#f6339a]",
    probability: 62,
    volume: { en: "₮315K", mn: "₮315K" },
    trendValue: "+7%",
    trendDirection: "up",
  },
  {
    id: "mse-index",
    slug: "mse-index-1800-end-2026",
    question: {
      en: "Will the MSE index reach 1,800 by the end of 2026?",
      mn: "МСХ индекс 2026 оны эцэст 1,800 цэгт хүрэх үү?",
    },
    category: "economy",
    icon: "📈",
    iconClassName: "from-[#10b981] to-[#86efac]",
    probability: 52,
    volume: { en: "₮687K", mn: "₮687K" },
    trendValue: "+2%",
    trendDirection: "up",
  },
]

const allMarketsRaw: AllMarketItemRaw[] = [
  {
    id: "erchim",
    slug: "erchim-league-top-3-2026",
    question: {
      en: "Will FC Erchim finish top 3 in the 2026 league season?",
      mn: "ФК Эрчим 2026 оны МҮЛ-д эхний 3-т багтах уу?",
    },
    category: "sports",
    icon: "⚽",
    iconClassName: "from-[#4b5563] to-[#9ca3af]",
    probability: 58,
    yes: 58,
    no: 42,
    volume: { en: "₮524K volume", mn: "₮524K эргэлт" },
    trendValue: "+3%",
    trendDirection: "up",
  },
  {
    id: "btc-midyear",
    slug: "bitcoin-above-120k-june-2026",
    question: {
      en: "Will Bitcoin trade above $120,000 on June 30, 2026?",
      mn: "Bitcoin үнэ 2026 оны 6 сарын 30-нд $120,000 давах уу?",
    },
    category: "crypto",
    icon: "₿",
    iconClassName: "from-[#2b7fff] to-[#00b8db]",
    probability: 41,
    yes: 41,
    no: 59,
    volume: { en: "₮1.2M volume", mn: "₮1.2M эргэлт" },
    trendValue: "-2%",
    trendDirection: "down",
  },
  {
    id: "warmest-day",
    slug: "ulaanbaatar-hottest-day-over-35-2026",
    question: {
      en: "Will Ulaanbaatar's hottest day in summer 2026 exceed 35°C?",
      mn: "Улаанбаатар хотын хамгийн дулаан өдөр 2026 оны зун 35°C-аас дээш болох уу?",
    },
    category: "weather",
    icon: "🌡️",
    iconClassName: "from-[#fb2c36] to-[#f6339a]",
    probability: 62,
    yes: 62,
    no: 38,
    volume: { en: "₮315K volume", mn: "₮315K эргэлт" },
    trendValue: "+7%",
    trendDirection: "up",
  },
  {
    id: "mse-all",
    slug: "mse-index-above-1800-dec-2026",
    question: {
      en: "Will the MSE index hit 1,800 on December 31, 2026?",
      mn: "МСХ индекс 2026 оны 12 сарын 31-нд 1,800 цэгт хүрэх үү?",
    },
    category: "economy",
    icon: "📈",
    iconClassName: "from-[#10b981] to-[#86efac]",
    probability: 52,
    yes: 52,
    no: 48,
    volume: { en: "₮687K volume", mn: "₮687K эргэлт" },
    trendValue: "+2%",
    trendDirection: "up",
  },
  {
    id: "oyu-all",
    slug: "oyu-tolgoi-copper-500k-2026",
    question: {
      en: "Will Oyu Tolgoi mine 500,000 tons of copper in 2026?",
      mn: "Оюу толгой 2026 онд 500,000 тонн зэс олборлох уу?",
    },
    category: "mining",
    icon: "⛏️",
    iconClassName: "from-[#ff6900] to-[#fb2c36]",
    probability: 73,
    yes: 73,
    no: 27,
    volume: { en: "₮956K volume", mn: "₮956K эргэлт" },
    trendValue: "+4%",
    trendDirection: "up",
  },
  {
    id: "usd-mnt",
    slug: "usd-mnt-above-3500-2026",
    question: {
      en: "Will USD/MNT close above 3,500 by the end of 2026?",
      mn: "USD/MNT ханш 2026 оны эцэст 3,500₮-өөс дээш байх уу?",
    },
    category: "economy",
    icon: "💹",
    iconClassName: "from-[#15803d] to-[#4ade80]",
    probability: 45,
    yes: 45,
    no: 55,
    volume: { en: "₮1.1M volume", mn: "₮1.1M эргэлт" },
    trendValue: "-1%",
    trendDirection: "down",
  },
  {
    id: "mongolz",
    slug: "mongolz-fifa-qualifier-2026",
    question: {
      en: "Will Mongolia qualify for the 2026 FIFA World Cup preliminary round?",
      mn: "Монгол Улс 2026 оны FIFA дэлхийн цомын урьдчилсан шатанд шалгарах уу?",
    },
    category: "sports",
    icon: "⚽",
    iconClassName: "from-[#4b5563] to-[#9ca3af]",
    probability: 18,
    yes: 18,
    no: 82,
    volume: { en: "₮423K volume", mn: "₮423K эргэлт" },
    trendValue: "-3%",
    trendDirection: "down",
  },
  {
    id: "ipo",
    slug: "mongolian-tech-ipo-2026",
    question: {
      en: "Will a new Mongolian tech company launch an IPO in 2026?",
      mn: "Монголын шинэ технологийн компани 2026 онд IPO хийх үү?",
    },
    category: "company",
    icon: "🏢",
    iconClassName: "from-[#9ca3af] to-[#e5e7eb]",
    probability: 35,
    yes: 35,
    no: 65,
    volume: { en: "₮289K volume", mn: "₮289K эргэлт" },
    trendValue: "+1%",
    trendDirection: "up",
  },
]

const hotTopicsRaw: TopicItemRaw[] = [
  {
    id: "topic-crypto",
    label: { en: "Crypto", mn: "Крипто" },
    icon: "₿",
    volume: { en: "₮1.2M today", mn: "₮1.2M өнөөдөр" },
    trendDirection: "up",
  },
  {
    id: "topic-mining",
    label: { en: "Mining", mn: "Уул уурхай" },
    icon: "⛏️",
    volume: { en: "₮956K today", mn: "₮956K өнөөдөр" },
    trendDirection: "up",
  },
  {
    id: "topic-mse",
    label: { en: "MSE", mn: "МСХ" },
    icon: "📈",
    volume: { en: "₮687K today", mn: "₮687K өнөөдөр" },
    trendDirection: "up",
  },
  {
    id: "topic-football",
    label: { en: "Football", mn: "Хөлбөмбөг" },
    icon: "⚽",
    volume: { en: "₮524K today", mn: "₮524K өнөөдөр" },
    trendDirection: "down",
  },
]

const footerColumnsRaw = [
  {
    title: { en: "Company", mn: "Компани" },
    items: [
      { en: "About us", mn: "Бидний тухай" },
      { en: "Careers", mn: "Ажлын байр" },
      { en: "Contact", mn: "Холбоо барих" },
      { en: "Partners", mn: "Хамтрагчид" },
    ],
  },
  {
    title: { en: "Markets", mn: "Зах зээлүүд" },
    items: [
      categoryLabels.sports,
      categoryLabels.economy,
      categoryLabels.crypto,
      categoryLabels.politics,
      categoryLabels.weather,
    ],
  },
  {
    title: { en: "Resources", mn: "Нөөцүүд" },
    items: [
      { en: "How it works", mn: "Хэрхэн ажилладаг" },
      { en: "FAQ", mn: "Түгээмэл асуулт" },
      { en: "Learning", mn: "Сургалт" },
      { en: "API docs", mn: "API баримт бичиг" },
      { en: "Blog", mn: "Блог" },
    ],
  },
  {
    title: { en: "Legal", mn: "Хууль эрх зүй" },
    items: [
      { en: "Terms of service", mn: "Үйлчилгээний нөхцөл" },
      { en: "Privacy policy", mn: "Нууцлалын бодлого" },
      { en: "Cookie policy", mn: "Cookie бодлого" },
      { en: "Risk disclaimer", mn: "Хариуцлагын татгалзал" },
    ],
  },
] as const

const socialLinksRaw = [
  { en: "Twitter", mn: "Twitter" },
  { en: "Telegram", mn: "Telegram" },
  { en: "GitHub", mn: "GitHub" },
  { en: "Discord", mn: "Discord" },
] as const

export function getHomepageContent(language: Language) {
  const featuredMarkets = featuredMarketsRaw.map<MarketItem>((item) => ({
    id: item.id,
    slug: item.slug,
    question: item.question[language],
    category: categoryLabels[item.category][language],
    icon: item.icon,
    iconClassName: item.iconClassName,
    probability: item.probability,
    volume: item.volume[language],
    trendValue: item.trendValue,
    trendDirection: item.trendDirection,
  }))

  const allMarkets = allMarketsRaw.map<AllMarketItem>((item) => ({
    id: item.id,
    slug: item.slug,
    question: item.question[language],
    category: categoryLabels[item.category][language],
    icon: item.icon,
    iconClassName: item.iconClassName,
    probability: item.probability,
    volume: item.volume[language],
    trendValue: item.trendValue,
    trendDirection: item.trendDirection,
    yes: item.yes,
    no: item.no,
  }))

  const urgentNews = featuredMarkets.slice(1, 4)

  const hotTopics = hotTopicsRaw.map<TopicItem>((topic) => ({
    id: topic.id,
    label: topic.label[language],
    icon: topic.icon,
    volume: topic.volume[language],
    trendDirection: topic.trendDirection,
  }))

  return {
    language,
    brandName: brandName[language],
    primaryNavigation: primaryNavigationRaw.map((item) => ({
      label: item.label[language],
      href: item.href,
      count: item.count,
    })),
    categoryNavigation: categoryNavigationKeys.map((key) => categoryLabels[key][language]),
    activeCategoryNavigation: categoryLabels.sports[language],
    marketFilters: marketFilterKeys.map((key) => categoryLabels[key][language]),
    allFilterLabel: categoryLabels.all[language],
    featuredMarkets,
    urgentNews,
    hotTopics,
    allMarkets,
    labels: {
      headerSearchPlaceholder:
        language === "en" ? "Search markets..." : "Хайлт хийх...",
      depositCta: language === "en" ? "Deposit funds" : "Мөнгө оруулах",
      featuredTitle: language === "en" ? "Top 5 Events" : "Top 5 үйл явдал",
      featuredDescription:
        language === "en"
          ? "Most active prediction markets across Mongolia"
          : "Монгол дахь хамгийн идэвхтэй зах зээлүүд",
      probability: language === "en" ? "probability" : "магадлал",
      volume: language === "en" ? "Volume" : "Эргэлт",
      urgentNews: language === "en" ? "Breaking News" : "Яаралтай мэдээ",
      hotTopics: language === "en" ? "Hot Topics" : "Халуун сэдвүүд",
      allMarkets: language === "en" ? "All Markets" : "Бүх зах зээлүүд",
      marketSearchPlaceholder:
        language === "en" ? "Search markets..." : "Зах зээл хайх...",
      matchingMarkets:
        language === "en" ? "markets found" : "зах зээл олдлоо",
      yes: language === "en" ? "Yes" : "Тийм",
      no: language === "en" ? "No" : "Үгүй",
      loadMore: language === "en" ? "Load more" : "Цааш ачаалах",
      noMarketsTitle:
        language === "en" ? "No matching markets found" : "Тохирох зах зээл олдсонгүй",
      noMarketsDescription:
        language === "en"
          ? "Try a different search term or clear the active filters."
          : "Өөр хайлтын үг ашиглах эсвэл шүүлтүүрээ цэвэрлээд дахин оролдоно уу.",
      clearFilters: language === "en" ? "Clear filters" : "Шүүлтүүр цэвэрлэх",
      community: language === "en" ? "Community" : "Нийгэмлэг",
      newsletter: language === "en" ? "Get updates" : "Мэдээлэл авах",
      newsletterDescription:
        language === "en"
          ? "Stay up to date on new markets and featured events."
          : "Шинэ зах зээл, онцлох үйл явдлын талаар мэдээлэл авч байгаарай.",
      emailPlaceholder: language === "en" ? "Email address" : "И-мэйл хаяг",
      subscribe: language === "en" ? "Subscribe" : "Бүртгүүлэх",
      copyright:
        language === "en"
          ? "© 2026 MarketKhul. All rights reserved."
          : "© 2026 МаркетХөл. Бүх эрх хуулиар хамгаалагдсан.",
      disclaimer:
        language === "en"
          ? "Disclaimer: MarketKhul is a prediction market platform for informational purposes only. This is not financial advice, and you are solely responsible for your own decisions."
          : "Анхааруулга: МаркетХөл нь таамаглалын зах зээлийн платформ бөгөөд зөвхөн мэдээллийн зориулалттай. Энэ нь санхүүгийн зөвлөгөө биш бөгөөд та арилжаа хийхдээ өөрийн хариуцлагаар шийдвэр гаргана.",
      mongolian: language === "en" ? "Монгол" : "Монгол",
      english: language === "en" ? "English" : "English",
    },
    footerColumns: footerColumnsRaw.map((column) => ({
      title: column.title[language],
      items: column.items.map((item) => item[language]),
    })),
    socialLinks: socialLinksRaw.map((item) => item[language]),
  }
}
