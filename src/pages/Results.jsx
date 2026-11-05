import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Award, GraduationCap, CheckCircle2, ArrowRight, Filter, Globe2 } from "lucide-react";
import { FadeUp, SlideIn, TiltCard, Counter, FloatingElement } from "../components/Motion";
import { useLanguage } from "../contexts/LanguageContext";

import { resultsData } from "../data/resultsData";


const categories = [
  { uz: "Barchasi", ru: "Все", en: "All" },
  { uz: "AQSH & Kanada", ru: "США & Канада", en: "USA & Canada" },
  { uz: "Yevropa", ru: "Европа", en: "Europe" },
  { uz: "Osiyo", ru: "Азия", en: "Asia" },
  { uz: "100% Grant", ru: "100% Грант", en: "100% Grant" },
];

export default function Results({ onOpenModal }) {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("Barchasi");

  const filteredResults =
    useMemo(() => {
      return resultsData.filter((r) => {
        // Category filter
        const categoryMatch =
          selectedCategory === "Barchasi" ||
          r.region?.uz === selectedCategory ||
          (selectedCategory === "AQSH & Kanada" &&
            (r.country?.id === "usa" || r.country?.id === "canada" || r.country?.id === "australia")) ||
          (selectedCategory === "Yevropa" &&
            ["germany", "uk", "italy", "poland", "ireland", "turkey", "france", "spain", "netherlands", "austria", "switzerland", "czech", "hungary"].includes(r.country?.id)) ||
          (selectedCategory === "Osiyo" &&
            ["korea", "china", "malaysia", "japan", "singapore", "dubai"].includes(r.country?.id)) ||
          (selectedCategory === "100% Grant" &&
            (r.grant?.[lang]?.toLowerCase().includes("100%") ||
              r.grant?.uz?.toLowerCase().includes("100%") ||
              r.grant?.ru?.toLowerCase().includes("100%") ||
              r.grant?.en?.toLowerCase().includes("100%") ||
              r.badge?.[lang]?.toLowerCase().includes("100%") ||
              r.badge?.uz?.toLowerCase().includes("100%") ||
              r.badge?.ru?.toLowerCase().includes("100%") ||
              r.badge?.en?.toLowerCase().includes("100%")));

        return categoryMatch;
      });
    }, [resultsData, selectedCategory, lang]);

  return (
    <div className="relative mx-auto max-w-7xl 2xl:max-w-9xl 3xl:max-w-10xl 4k:max-w-4k px-4 py-8 sm:px-6 2xl:px-12 3xl:px-16 sm:py-12 overflow-hidden">
      {/* Background ambient orbs */}
      <div className="pointer-events-none absolute top-10 left-10 h-[350px] w-[350px] rounded-full bg-[#104F5A]/20 blur-[130px] -z-10" />

      {/* Header */}
      <FadeUp className="text-center">
        <div className="inline-block">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D5A45B]/40 bg-[#D5A45B]/10 px-3.5 py-1 text-xs 2xl:text-sm font-bold text-[#D5A45B] shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#D5A45B]" />
            <span>{t("results_badge")}</span>
          </div>
        </div>

        <h1 className="mt-3 text-2xl sm:text-4xl 2xl:text-5xl font-black text-white">
          Sigma Consulting{" "}
          <span className="gold-gradient-text drop-shadow-[0_2px_20px_rgba(213,164,91,0.35)]">
            {t("results_title_highlight")}
          </span>
        </h1>
        <p className="mx-auto mt-2 max-w-2xl 2xl:max-w-3xl text-xs 2xl:text-base text-slate-200 sm:text-sm">
          {t("results_desc")}
        </p>
      </FadeUp>

      {/* Numerical Stats Dashboard */}
      <div className="mt-8 grid grid-cols-2 gap-3.5 lg:grid-cols-4 sm:gap-5 2xl:gap-6">
        <TiltCard maxTilt={2} className="glass-card p-5 2xl:p-6 text-center border-t-2 border-t-[#D5A45B] shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="text-2xl sm:text-3xl 2xl:text-4xl font-black text-[#D5A45B]">
            <Counter to={5140} suffix="+" duration={1.8} />
          </div>
          <div className="mt-1 text-xs 2xl:text-sm font-bold text-white">{t("results_stat_successful")}</div>
          <div className="mt-0.5 text-[11px] 2xl:text-xs text-slate-300">{t("results_stat_since")}</div>
        </TiltCard>

        <TiltCard maxTilt={2} className="glass-card p-5 2xl:p-6 text-center border-t-2 border-t-[#D5A45B] shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="text-2xl sm:text-3xl 2xl:text-4xl font-black text-[#D5A45B]">
            <Counter prefix="$" to={14.2} decimals={1} suffix="M+" duration={2} />
          </div>
          <div className="mt-1 text-xs 2xl:text-sm font-bold text-white">{t("results_stat_grants")}</div>
          <div className="mt-0.5 text-[11px] 2xl:text-xs text-slate-300">{t("results_stat_effort")}</div>
        </TiltCard>

        <TiltCard maxTilt={2} className="glass-card p-5 2xl:p-6 text-center border-t-2 border-t-[#D5A45B] shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="text-2xl sm:text-3xl 2xl:text-4xl font-black text-[#D5A45B]">
            <Counter to={98.4} decimals={1} suffix="%" duration={1.6} />
          </div>
          <div className="mt-1 text-xs 2xl:text-sm font-bold text-white">{t("results_stat_confirmation")}</div>
          <div className="mt-0.5 text-[11px] 2xl:text-xs text-slate-300">{t("results_stat_consular")}</div>
        </TiltCard>

        <TiltCard maxTilt={2} className="glass-card p-5 2xl:p-6 text-center border-t-2 border-t-[#D5A45B] shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="text-2xl sm:text-3xl 2xl:text-4xl font-black text-[#D5A45B]">
            <Counter to={180} suffix="+" duration={1.5} />
          </div>
          <div className="mt-1 text-xs 2xl:text-sm font-bold text-white">{t("results_stat_partners")}</div>
          <div className="mt-0.5 text-[11px] 2xl:text-xs text-slate-300">{t("results_stat_contracts")}</div>
        </TiltCard>
      </div>

      {/* Filter Tabs with Animated Pill */}
      <FadeUp yOffset={15} className="mt-10 mb-4 flex flex-wrap items-center justify-center gap-2 2xl:gap-3">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.uz;
          return (
            <button
              key={cat.uz}
              onClick={() => setSelectedCategory(cat.uz)}
              className={`relative rounded-xl px-5 2xl:px-7 py-2 2xl:py-2.5 text-xs 2xl:text-sm font-bold transition-all duration-200 cursor-pointer overflow-hidden ${
                isSelected
                  ? "text-[#071F22] font-black shadow-[0_0_18px_rgba(213,164,91,0.4)]"
                  : "text-slate-200 hover:text-white border border-[#236B70]/60 bg-[#104F5A]/25 hover:border-[#D5A45B]/60"
              }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D5A45B] to-[#F3C77C] shadow-[0_0_15px_rgba(213,164,91,0.35)]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat[lang] || cat.uz}</span>
            </button>
          );
        })}
      </FadeUp>

      {/* Results Grid with 3D TiltCards and 4K Responsive Columns */}
      <motion.div
        layout
        className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 4k:grid-cols-4 2xl:gap-6"
      >
        <AnimatePresence>
          {filteredResults.map((item) => (
            <TiltCard
              key={item.id}
              maxTilt={2}
              scaleOnHover={1.015}
              className="glass-card group flex flex-col justify-between overflow-hidden p-0 h-full border border-[#236B70]/50 hover:border-[#D5A45B]/60 shadow-xl"
            >
              {/* Student Photo Header */}
              <div className="relative aspect-[16/11] 2xl:aspect-[16/10] w-full overflow-hidden bg-[#07262B]">
                {item.video ? (
                  <video
                    src={`${item.video}#t=0.5`}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80";
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071F22] via-[#071F22]/20 to-transparent" />

                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-2.5 py-0.5 backdrop-blur-md">
                  <span className="text-sm">{item.flag}</span>
                  <span className="text-[10px] 2xl:text-xs font-bold text-white">{item.country[lang] || item.country.uz}</span>
                </div>

                <div className="absolute top-2.5 right-2.5 rounded-full border border-emerald-400/40 bg-emerald-600 px-2 py-0.5 text-[9px] 2xl:text-xs font-black uppercase tracking-wider text-white shadow-md">
                  {item.status[lang] || item.status.uz}
                </div>

                <div className="absolute bottom-2.5 left-3 right-3">
                  <h3 className="text-base 2xl:text-lg font-black text-white drop-shadow-md group-hover:text-[#D5A45B] transition-colors">
                    {item.name}
                  </h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-4 2xl:p-5">
                <div>
                  <p className="text-xs 2xl:text-sm font-bold text-[#D5A45B]">{item.university}</p>
                  <p className="mt-0.5 text-xs text-slate-300">{item.program[lang] || item.program.uz}</p>

                  <div className="mt-3 rounded-xl border border-[#D5A45B]/30 bg-[#104F5A]/40 p-2.5 2xl:p-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#D5A45B]">
                      {t("results_achievement_label")}
                    </div>
                    <div className="mt-0.5 text-xs 2xl:text-sm font-bold text-white">
                      {item.grant[lang] || item.grant.uz}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-[#236B70]/40 pt-2.5 text-[11px] text-slate-300">
                  <span>{item.year[lang] || item.year.uz}</span>
                  <span className="font-bold text-[#D5A45B]">{t("results_student_sigma")}</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Bottom CTA */}
      <FadeUp yOffset={25} className="mt-10 sm:mt-12">
        <div className="glass-card p-6 sm:p-10 2xl:p-12 text-center text-white border border-[#D5A45B]/40 shadow-xl relative overflow-hidden">
          <div className="inline-block">
            <Sparkles className="h-7 w-7 2xl:h-8 2xl:w-8 text-[#D5A45B] mx-auto" />
          </div>
          <h3 className="mt-2 text-xl 2xl:text-2xl font-black text-white sm:text-2xl">
            {t("results_cta_title")}
          </h3>
          <p className="mx-auto mt-2 max-w-xl 2xl:max-w-2xl text-xs 2xl:text-base text-slate-200 sm:text-sm">
            {t("results_cta_desc")}
          </p>
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenModal}
            className="gold-btn mt-5 inline-flex items-center gap-2 rounded-xl px-7 2xl:px-9 py-3 2xl:py-3.5 text-xs 2xl:text-sm font-bold uppercase tracking-wider shadow-lg"
          >
            <span>{t("results_btn_evaluate")}</span>
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>
      </FadeUp>
    </div>
  );
}