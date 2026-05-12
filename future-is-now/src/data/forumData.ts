export const PROFILES = [
  {
    id: "arch",
    number: 1,
    emoji: "🏛️",
    title: "Архітектура і дизайн",
    color: "#F07070",
    bgColor: "#FFF0F0",
    description:
      "Просторове мислення, візуальна творчість, форма та функція. Для тих, хто бачить світ через призму краси та конструкції.",
    activities: [
      "Зустріч з KAI (НАУ)",
      "Майстер-класи з архітектурного дизайну",
      "Огляд портфоліо",
    ],
    universities: ["KAI (НАУ)"],
    universityNote: null,
    dot: "#EF233C",
  },
  {
    id: "econ",
    number: 2,
    emoji: "📊",
    title: "Економіка, бізнес та менеджмент",
    color: "#F4A623",
    bgColor: "#FFF8ED",
    description:
      "Ринки, стратегії, підприємництво та управління. Для тих, хто хоче розуміти, як влаштований бізнес, керувати командами та створювати цінність.",
    activities: [
      "Зустріч з KSE",
      "Зустріч з NAM",
      "Бізнес-кейси",
      "Зустрічі з підприємцями",
      "Соціально відповідальний бізнес",
      "Проєктний менеджмент (УСС)",
    ],
    universities: ["KSE", "NAM"],
    universityNote: null,
    dot: "#FF8C42",
  },
  {
    id: "it",
    number: 3,
    emoji: "💻",
    title: "IT",
    color: "#2A9D8F",
    bgColor: "#F0FDFB",
    description:
      "Код, алгоритми, продукти. Для тих, хто хоче будувати цифрове майбутнє та розуміти мову машин.",
    activities: [
      "Зустріч з AUK + EPAM",
      "Хакатон",
      "Воркшоп з програмування",
      "Презентація програми від EPAM",
    ],
    universities: ["AUK + EPAM"],
    universityNote: null,
    dot: "#06D6A0",
  },
  {
    id: "bio",
    number: 4,
    emoji: "🌿",
    title: "Біологія і технології",
    color: "#2D5E3C",
    bgColor: "#F0FDF4",
    description:
      "Природні системи, наукові дослідження, біотехнології. Для тих, хто цікавиться живим світом та сучасною наукою.",
    activities: [
      "Зустріч з КНУ",
      "Природничі майстер-класи",
      "Науковий квест",
      "Лабораторія досвіду",
    ],
    universities: ["КНУ"],
    universityNote: null,
    dot: "#22C55E",
  },
];

export type Stage = "all" | "1" | "2" | "3";

export const STAGES = [
  { id: "all" as Stage, label: "Всі" },
  { id: "1" as Stage, label: "Усвідомлюй" },
  { id: "2" as Stage, label: "Проєктуй" },
  { id: "3" as Stage, label: "Дій" },
];

export interface Activity {
  id: string;
  emoji: string;
  time: string;
  timeEnd: string;
  title: string;
  description: string;
  duration: string;
  audience: string;
  location: string;
  bullets: string[];
  mapColor: string;
  mapTextColor: string;
  profileDots: string[];
  stage: Stage;
  isParentTrack?: boolean;
}

export const ACTIVITIES: Activity[] = [
  /* ───── УСВІДОМЛЮЙ ───── */
  {
    id: "opening",
    emoji: "🌳",
    time: "10:00",
    timeEnd: "10:45",
    title: "Відкриття, презентація програми та експертів",
    description:
      "Відкриття форуму, презентація програми та знайомство з експертами і творцями. Перше занурення в атмосферу та спільноту форуму.",
    duration: "45 хвилин",
    audience: "Усі учасники",
    location: "Атріум",
    bullets: [
      "Привітання від організаторів",
      "Презентація програми форуму",
      "Знайомство з експертами та спікерами",
      "Перше неформальне спілкування",
    ],
    mapColor: "#7B5EA7",
    mapTextColor: "white",
    profileDots: ["#EF233C", "#FF8C42", "#06D6A0", "#22C55E", "#818CF8"],
    stage: "1",
  },

  /* ───── ПРОЄКТУЙ ───── */
  {
    id: "testing",
    emoji: "📝",
    time: "10:45",
    timeEnd: "11:15",
    title: "Профорієнтаційне тестування та психологічний профіль",
    description:
      "Науково обґрунтовані тести для визначення сильних сторін, інтересів та схильностей. Психологічні зустрічі допомагають сформувати особистий профіль.",
    duration: "30 хвилин",
    audience: "Учасники",
    location: "Кабінети",
    bullets: [
      "Профорієнтаційний тест",
      "Психологічний профіль особистості",
      "Визначення свого профілю навчання",
      "Після — перехід до університету свого профілю",
    ],
    mapColor: "#9B5DE5",
    mapTextColor: "white",
    profileDots: ["#EF233C", "#FF8C42", "#06D6A0", "#22C55E", "#818CF8"],
    stage: "2",
  },
  {
    id: "parent-resources",
    emoji: "🧑‍👩‍👧",
    time: "10:45",
    timeEnd: "11:15",
    title: "Батьківська лінійка: Ресурси для батьків",
    description:
      "Зустріч із практикуючими психологами: ресурси підтримки для батьків підлітків, що стоять перед вибором шляху.",
    duration: "30 хвилин",
    audience: "Батьки",
    location: "Конференц-зал",
    bullets: [
      "Психологічні ресурси для батьків",
      "Як підтримати підлітка без тиску",
      "Інструменти для розмови про майбутнє",
    ],
    mapColor: "#4C9BE8",
    mapTextColor: "white",
    profileDots: [],
    stage: "2",
    isParentTrack: true,
  },
  {
    id: "lab",
    emoji: "🔬",
    time: "11:20",
    timeEnd: "11:50",
    title: "Лабораторія досвіду",
    description:
      "Активні паралельні сесії де теорія стає практикою: симуляції співбесід, психологічний портрет, CV, менторство стартапів та зустрічі з бізнесами.",
    duration: "30 хвилин",
    audience: "Паралельні треки",
    location: "Кабінети",
    bullets: [
      "HR бізнесів — симуляція співбесіди",
      "Психологічний портрет та CV",
      "uBoost — менторство стартап-проєктів",
      "Klychko Foundation — можливості для молоді",
      "Домініка — кар'єрний консультант (перша робота)",
      "Мороз Віра, Корнієченко Тарас, Леся Романенко — CEO бізнесів",
      "УСС — проєктний менеджмент",
      "Андрій Ємець — work-life balance зі спортом",
    ],
    mapColor: "#F07070",
    mapTextColor: "white",
    profileDots: ["#EF233C", "#FF8C42", "#06D6A0", "#22C55E", "#818CF8"],
    stage: "2",
  },
  {
    id: "parent-qa",
    emoji: "💬",
    time: "11:20",
    timeEnd: "11:50",
    title: "Батьківська лінійка: Q&A з психологами",
    description:
      "Відкрите запитання-відповідь: батьки отримують відповіді на хвилюючі питання від практикуючих психологів.",
    duration: "30 хвилин",
    audience: "Батьки",
    location: "Конференц-зал",
    bullets: [
      "Запитання від батьків",
      "Відповіді практикуючих психологів",
      "Конкретні рекомендації для сім'ї",
    ],
    mapColor: "#4C9BE8",
    mapTextColor: "white",
    profileDots: [],
    stage: "2",
    isParentTrack: true,
  },
  {
    id: "social-business",
    emoji: "🤝",
    time: "11:55",
    timeEnd: "12:25",
    title: "Соціально відповідальний бізнес",
    description:
      "Зустріч з підприємцями, що будують бізнес з місією. Реабілітація ветеранів та підтримка тих, хто захищає Україну — як бізнес стає силою змін.",
    duration: "30 хвилин",
    audience: "Усі учасники",
    location: "Кабінети",
    bullets: [
      "Іван — реабілітація ветеранів (збір на банку)",
      "Алекс — підтримка ветеранів",
      "Як бізнес може змінювати суспільство",
      "Власний шлях соціального підприємництва",
    ],
    mapColor: "#E91E8C",
    mapTextColor: "white",
    profileDots: ["#FF8C42", "#818CF8"],
    stage: "2",
  },
  {
    id: "lunch",
    emoji: "🍽️",
    time: "12:30",
    timeEnd: "13:15",
    title: "Обідня перерва",
    description:
      "Час для переведення духу, неформального спілкування та обговорення вражень від першої половини дня.",
    duration: "45 хвилин",
    audience: "Обід включений",
    location: "Їдальня",
    bullets: [
      "Вільне спілкування",
      "Неформальні розмови з наставниками",
      "Перезавантаження енергії",
    ],
    mapColor: "#48BFD3",
    mapTextColor: "white",
    profileDots: [],
    stage: "2",
  },

  /* ───── ДІЙ ───── */
  {
    id: "alla-session",
    emoji: "🌟",
    time: "13:20",
    timeEnd: "15:30",
    title: "Зустріч з Бізнес-коучем Аллою",
    description:
      "Інтерактивна сесія з бізнес-коучем: як не боятися майбутнього і приймати рішення з упевненістю. Жива розмова про те, як рухатися вперед навіть коли невизначено.",
    duration: "Частина командних ігор",
    audience: "Усі учасники",
    location: "Актова зала",
    bullets: [
      "Як не боятися майбутнього",
      "Інтерактивні вправи та рефлексія",
      "Реальний досвід вибору від спікерки",
    ],
    mapColor: "#F4A623",
    mapTextColor: "white",
    profileDots: ["#EF233C", "#FF8C42", "#06D6A0", "#22C55E", "#818CF8"],
    stage: "3",
  },
  {
    id: "ual-game",
    emoji: "🏛️",
    time: "13:20",
    timeEnd: "15:30",
    title: "Державотворець (від УАЛ)",
    description:
      "Інтерактивна практична гра від Українського авіаційного ліцею: симуляція прийняття державних рішень, розподілу ресурсів та управління.",
    duration: "2 години 10 хвилин",
    audience: "Команди",
    location: "Спортзал",
    bullets: [
      "Рольова гра-симуляція управління державою",
      "Прийняття рішень в умовах обмежень",
      "Командна взаємодія та лідерство",
      "Презентація гранту від LIKO SCHOOL",
    ],
    mapColor: "#C0392B",
    mapTextColor: "white",
    profileDots: ["#EF233C", "#818CF8"],
    stage: "3",
  },
  {
    id: "reflection",
    emoji: "✨",
    time: "15:30",
    timeEnd: "16:00",
    title: "Заключна рефлексія",
    description:
      "Сесія осмислення всього дня: особисті висновки, подяка спікерам і номінації. Наклеюємо вирізки — символ нашого шляху.",
    duration: "30 хвилин",
    audience: "Усі учасники",
    location: "Атріум",
    bullets: [
      "Наклейки-вирізки: символи особистого шляху",
      "Вдячність та відзначення номінаціями спікерів",
      "Підсумки дня та план дій",
    ],
    mapColor: "#B39DDB",
    mapTextColor: "white",
    profileDots: ["#EF233C", "#FF8C42", "#06D6A0", "#22C55E", "#818CF8"],
    stage: "3",
  },
];

export const PARENT_TRACK: { time: string; timeEnd: string; emoji: string; title: string; bullets: string[] }[] = [
  {
    time: "10:45",
    timeEnd: "11:15",
    emoji: "🧑‍👩‍👧",
    title: "Ресурси для батьків",
    bullets: [
      "Психологічні ресурси",
      "Як підтримати підлітка без тиску",
      "Інструменти для розмови про майбутнє",
    ],
  },
  {
    time: "11:20",
    timeEnd: "11:50",
    emoji: "💬",
    title: "Q&A з психологами",
    bullets: [
      "Відкриті запитання від батьків",
      "Відповіді практикуючих психологів",
      "Конкретні рекомендації",
    ],
  },
];

export const UNIVERSITIES = [
  {
    id: "kai",
    emoji: "🏛️",
    short: "KAI",
    full: "Київський авіаційний інститут (НАУ)",
    color: "#C0392B",
    profileDot: "#EF233C",
    profileLabel: "Архітектура і дизайн",
    badge: "Архітектура",
  },
  {
    id: "knu",
    emoji: "🌿",
    short: "КНУ",
    full: "Київський національний університет ім. Шевченка",
    color: "#2D5E3C",
    profileDot: "#22C55E",
    profileLabel: "Біологія і технології",
    badge: "Біологія і технології",
  },
  {
    id: "kse",
    emoji: "📈",
    short: "KSE",
    full: "Київська школа економіки",
    color: "#2E4A7C",
    profileDot: "#FF8C42",
    profileLabel: "Економіка і бізнес",
    badge: "Економіка",
  },
  {
    id: "auk",
    emoji: "💻",
    short: "AUK",
    full: "Американський Університет в Києві + EPAM",
    color: "#1E7A6E",
    profileDot: "#06D6A0",
    profileLabel: "IT",
    badge: "IT",
  },
  {
    id: "nam",
    emoji: "📋",
    short: "NAM",
    full: "Національна академія менеджменту",
    color: "#4338CA",
    profileDot: "#818CF8",
    profileLabel: "Менеджмент",
    badge: "Менеджмент",
  },
  {
    id: "nubip",
    emoji: "🌾",
    short: "НУБіП",
    full: "Національний університет біоресурсів і природокористування України",
    color: "#1A5E20",
    profileDot: "#22C55E",
    profileLabel: "Біологія і технології",
    badge: "Біологія і технології",
  },
];

export const TREE_NODES = [
  {
    emoji: "🌳",
    label: "Корінь",
    subtitle: "FUTURE is NOW",
    desc: "Основна ідея та цінність форуму",
  },
  {
    emoji: "👁️",
    label: "Усвідомлюй",
    subtitle: "10:00–10:45",
    desc: "Знайомство з експертами, відкриття",
  },
  {
    emoji: "💡",
    label: "Проєктуй",
    subtitle: "10:45–13:15",
    desc: "Тести, лабораторія, соціальний бізнес",
  },
  {
    emoji: "⚡",
    label: "Дій",
    subtitle: "13:20–16:00",
    desc: "Ігри, вибір, рефлексія та плани",
  },
  {
    emoji: "🎯",
    label: "Плід",
    subtitle: "Самовизначення",
    desc: "Особистий профіль та наступні кроки",
  },
  {
    emoji: "🏫",
    label: "Університети",
    subtitle: "4 профілі",
    desc: "KAI · КНУ · KSE · AUK+EPAM · NAM",
  },
];

export const JOURNEY_STEPS = [
  { emoji: "🚶", label: "Прихід" },
  { emoji: "🌳", label: "Відкриття" },
  { emoji: "📝", label: "Тестування" },
  { emoji: "🏫", label: "Університети" },
  { emoji: "🔬", label: "Лабораторія" },
  { emoji: "🤝", label: "Соц. бізнес" },
  { emoji: "🍽️", label: "Обід" },
  { emoji: "🎮", label: "Ігри" },
  { emoji: "✨", label: "Рефлексія" },
  { emoji: "🎯", label: "Самовизначення" },
];

export const METRICS = [
  {
    value: "6",
    unit: "ГОДИН",
    desc: "Від 10:00 до 16:00",
  },
  {
    value: "10+",
    unit: "АКТИВНОСТЕЙ",
    desc: "Від відкриття до рефлексії",
  },
  {
    value: "5",
    unit: "ПРОФІЛІВ",
    desc: "Архітектура · Економіка · IT · Біологія · Менеджмент",
  },
  {
    value: "5",
    unit: "УНІВЕРСИТЕТИ",
    desc: "KAI · КНУ · KSE · AUK+EPAM · NAM",
  },
  {
    value: "2",
    unit: "ПОВЕРХИ",
    desc: "Активності (1 пов.) та університети (2 пов.)",
  },
  {
    value: "100+",
    unit: "УЧАСНИКІВ",
    desc: "Старшокласники, батьки, партнери",
  },
];

export const SCHEDULE_BLOCKS = [
  {
    stage: "1" as Stage,
    stageLabel: "Усвідомлюй",
    stageColor: "#7C3AED",
    items: [
      { time: "10:00–10:45", title: "Відкриття, презентація програми та експертів", location: "Атріум", emoji: "🌳" },
    ],
  },
  {
    stage: "2" as Stage,
    stageLabel: "Проєктуй",
    stageColor: "#06B6D4",
    items: [
      { time: "10:45–11:15", title: "Профорієнтаційне тестування + психологічний профіль", location: "Кабінети", emoji: "📝" },
      { time: "11:20–11:50", title: "Лабораторія досвіду / Батьківські зустрічі", location: "Кабінети / Конференц-зал", emoji: "🔬" },
      { time: "11:55–12:25", title: "Соціально відповідальний бізнес", location: "Кабінети", emoji: "🤝" },
      { time: "12:30–13:15", title: "Обідня перерва", location: "Їдальня", emoji: "🍽️" },
    ],
  },
  {
    stage: "3" as Stage,
    stageLabel: "Дій",
    stageColor: "#E91E8C",
    items: [
      { time: "13:20–15:30", title: "Командні ігри: Чесно про вибір (Алла) + Державотворець (УАЛ)", location: "Атріум / Спортзал", emoji: "🎮" },
      { time: "15:30–16:00", title: "Заключна рефлексія та номінації спікерів", location: "Атріум", emoji: "✨" },
    ],
  },
];
