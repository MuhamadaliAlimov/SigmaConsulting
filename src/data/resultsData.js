// Natijalar sahifasi ma'lumotlari.
// Hozircha sayt ichidagi real Instagram (@sigmaconsulting.uz) videolaridan olingan.
// Yangi post qo'shish uchun massivga yangi obyekt qo'shing:
//   - image: "/images/xxx.jpg"  (yoki video: "/videos/xxx.mp4")
//   - postUrl: "https://www.instagram.com/p/XXXX/" (ixtiyoriy)
//   - region.uz: "AQSH & Kanada" | "Yevropa" | "Osiyo"
//   - grant matnida "100%" bo'lsa, "100% Grant" filtrida avtomatik chiqadi.

export const resultsData = [
  {
    id: "r-china-csc",
    name: "Javohir Toshmatov",
    video: "/videos/video_1.mp4",
    flag: "🇨🇳",
    country: { uz: "Xitoy", ru: "Китай", en: "China" },
    region: { uz: "Osiyo", ru: "Азия", en: "Asia" },
    university: "Zhejiang University",
    program: { uz: "CSC Hukumat Granti", ru: "Правительственный грант CSC", en: "CSC Government Scholarship" },
    grant: {
      uz: "100% CSC Hukumat Granti",
      ru: "100% Правительственный грант CSC",
      en: "100% CSC Government Scholarship",
    },
    status: { uz: "Grant yutildi", ru: "Грант получен", en: "Grant won" },
    year: { uz: "Instagram natijasi", ru: "Результат из Instagram", en: "Instagram result" },
  },
  {
    id: "r-italy-dsu",
    name: "Nilufar Ostonova (Ota-onalar)",
    video: "/videos/video_2.mp4",
    flag: "🇮🇹",
    country: { uz: "Italiya", ru: "Италия", en: "Italy" },
    region: { uz: "Yevropa", ru: "Европа", en: "Europe" },
    university: "Politecnico di Milano",
    program: { uz: "Bakalavr & Magistratura", ru: "Бакалавриат & Магистратура", en: "Bachelor's & Master's" },
    grant: {
      uz: "DSU granti: 100% bepul ta'lim + stipendiya",
      ru: "Грант DSU: 100% бесплатное обучение + стипендия",
      en: "DSU grant: 100% free tuition + stipend",
    },
    status: { uz: "Viza tasdiqlandi", ru: "Виза подтверждена", en: "Visa approved" },
    year: { uz: "Instagram natijasi", ru: "Результат из Instagram", en: "Instagram result" },
  },
  {
    id: "r-usa-canada-free",
    name: "100% Bepul Ta'lim Dasturlari",
    video: "/videos/video_4.mp4",
    flag: "🇺🇸",
    country: { uz: "AQSH & Kanada", ru: "США & Канада", en: "USA & Canada" },
    region: { uz: "AQSH & Kanada", ru: "США & Канада", en: "USA & Canada" },
    university: "AQSH va Kanada universitetlari",
    program: { uz: "Hukumat va universitet grantlari", ru: "Государственные и университетские гранты", en: "Government & university scholarships" },
    grant: {
      uz: "100% gacha grant + yotoqxona + oylik stipendiya",
      ru: "Грант до 100% + общежитие + ежемесячная стипендия",
      en: "Up to 100% scholarship + housing + monthly stipend",
    },
    status: { uz: "Grant dasturi", ru: "Грантовая программа", en: "Grant program" },
    year: { uz: "Instagram natijasi", ru: "Результат из Instagram", en: "Instagram result" },
  },
  {
    id: "r-korea-d2",
    name: "Janubiy Koreya talabasi",
    video: "/videos/video_7.mp4",
    flag: "🇰🇷",
    country: { uz: "Janubiy Koreya", ru: "Южная Корея", en: "South Korea" },
    region: { uz: "Osiyo", ru: "Азия", en: "Asia" },
    university: "Seoul National University",
    program: { uz: "D-2 Talaba Vizasi", ru: "Студенческая виза D-2", en: "D-2 Student Visa" },
    grant: {
      uz: "D-2 viza tasdiqlandi, Seulda kutib olish",
      ru: "Виза D-2 подтверждена, встреча в Сеуле",
      en: "D-2 visa approved, airport pickup in Seoul",
    },
    status: { uz: "Viza tasdiqlandi", ru: "Виза подтверждена", en: "Visa approved" },
    year: { uz: "Instagram natijasi", ru: "Результат из Instagram", en: "Instagram result" },
  },
  {
    id: "r-germany-grad",
    name: "Germaniya bitiruvchilari",
    video: "/videos/video_5.mp4",
    flag: "🇩🇪",
    country: { uz: "Germaniya", ru: "Германия", en: "Germany" },
    region: { uz: "Yevropa", ru: "Европа", en: "Europe" },
    university: "Munich Technical University",
    program: { uz: "Yevropa Diplomi", ru: "Европейский диплом", en: "European Degree" },
    grant: {
      uz: "Bitiruv marosimi va xalqaro diplom",
      ru: "Выпускной и международный диплом",
      en: "Graduation and international degree",
    },
    status: { uz: "Bitirdi", ru: "Выпускник", en: "Graduated" },
    year: { uz: "Instagram natijasi", ru: "Результат из Instagram", en: "Instagram result" },
  },
];

export default resultsData;
