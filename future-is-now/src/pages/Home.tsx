import { useState } from "react";
import {
  PROFILES,
  STAGES,
  ACTIVITIES,
  UNIVERSITIES,
  TREE_NODES,
  JOURNEY_STEPS,
  METRICS,
  PARENT_TRACK,
  SCHEDULE_BLOCKS,
  type Stage,
} from "@/data/forumData";

const UNI_LOGOS: Record<string, string> = {
  kai: "/logos/kai.avif",
  knu: "/logos/knu.png",
  kse: "/logos/kse.png",
  auk: "/logos/epam.png",
  nam: "/logos/nam.webp",
  nubip: "/logos/nubip.png",
};

function ProfileDot({ color }: { color: string }) {
  return (
    <div
      className="w-3 h-3 rounded-full border border-white/40 flex-shrink-0"
      style={{ backgroundColor: color }}
    />
  );
}

function DetailCard({ activity }: { activity: (typeof ACTIVITIES)[0] }) {
  return (
    <div
      className="bg-white rounded-2xl p-5 flex flex-col gap-3"
      style={{
        border: "2px solid transparent",
        backgroundImage:
          "linear-gradient(white, white), linear-gradient(135deg, #06B6D4, #7C3AED)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      }}
      data-testid={`card-detail-${activity.id}`}
    >
      <div>
        <p className="text-2xl font-black mb-0.5" style={{ color: "#F4A623" }}>
          {activity.time}
          {activity.timeEnd && (
            <span className="text-base font-semibold text-gray-400 ml-1">– {activity.timeEnd}</span>
          )}
        </p>
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-lg">{activity.emoji}</span>
          {activity.isParentTrack && (
            <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "#DBEAFE", color: "#1D4ED8" }}>
              👨‍👩‍👧 Батьки
            </span>
          )}
        </div>
        <h3 className="text-base font-black leading-tight" style={{ color: "#6B21A8" }}>
          {activity.title}
        </h3>
      </div>
      <p className="text-gray-600 text-xs leading-relaxed">{activity.description}</p>
      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium" style={{ color: "#06B6D4" }}>
        <span>⏱ {activity.duration}</span>
        <span>👥 {activity.audience}</span>
        <span>📍 {activity.location}</span>
      </div>
      <ul className="space-y-1">
        {activity.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
            <span className="mt-0.5 text-purple-400 flex-shrink-0">▸</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MapCard({ activity }: { activity: (typeof ACTIVITIES)[0] }) {
  return (
    <div
      className="rounded-2xl p-4 flex flex-col min-h-[160px] relative"
      style={{ backgroundColor: activity.mapColor }}
      data-testid={`card-map-${activity.id}`}
    >
      {activity.profileDots.length > 0 && (
        <div className="absolute top-3 right-3 flex gap-0.5 flex-wrap max-w-[60px] justify-end">
          {activity.profileDots.map((dot, i) => (
            <ProfileDot key={i} color={dot} />
          ))}
        </div>
      )}
      <div className="text-xl mb-1">{activity.emoji}</div>
      <div
        className="font-bold text-sm leading-tight mb-1 flex-1 pr-8"
        style={{ color: activity.mapTextColor }}
      >
        {activity.title}
      </div>
      <div className="text-xs font-semibold mb-3" style={{ color: "rgba(255,255,255,0.85)" }}>
        {activity.time}{activity.timeEnd ? `–${activity.timeEnd}` : ""}
      </div>
      <div className="flex items-center justify-between gap-2">
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full"
          style={{
            backgroundColor: "rgba(255,255,255,0.22)",
            color: "white",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          {activity.location}
        </span>
        {activity.isParentTrack && (
          <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.25)", color: "white" }}>
            👨‍👩‍👧
          </span>
        )}
      </div>
    </div>
  );
}

function UniversityCard({ uni }: { uni: (typeof UNIVERSITIES)[0] }) {
  const logo = UNI_LOGOS[uni.id];
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col min-h-[180px] relative"
      style={{ backgroundColor: uni.color }}
      data-testid={`card-uni-${uni.id}`}
    >
      {logo && (
        <div className="w-full h-16 flex items-center justify-center bg-white/90 p-2">
          <img src={logo} alt={uni.short} className="max-h-12 max-w-full object-contain" />
        </div>
      )}
      <div className="p-4 flex flex-col flex-1">
        <div className="font-black text-xl text-white mb-1">{uni.short}</div>
        <div className="text-white/70 text-xs leading-relaxed flex-1">{uni.full}</div>
        <div className="mt-3 flex items-center justify-between">
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: uni.profileDot }} />
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: "rgba(255,255,255,0.18)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            {uni.badge}
          </span>
        </div>
      </div>
    </div>
  );
}

function ParentTrackCard({ item }: { item: (typeof PARENT_TRACK)[0] }) {
  return (
    <div className="rounded-2xl p-5 flex flex-col gap-3" style={{ backgroundColor: "#EFF6FF", border: "2px solid #BFDBFE" }}>
      <div>
        <p className="text-xl font-black mb-0.5" style={{ color: "#1D4ED8" }}>
          {item.time}
          <span className="text-sm font-semibold text-blue-400 ml-1">– {item.timeEnd}</span>
        </p>
        <div className="flex items-center gap-1.5">
          <span className="text-lg">{item.emoji}</span>
          <h3 className="text-sm font-black" style={{ color: "#1E40AF" }}>{item.title}</h3>
        </div>
      </div>
      <ul className="space-y-1">
        {item.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-blue-800">
            <span className="mt-0.5 text-blue-400 flex-shrink-0">▸</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  const [activeFloor, setActiveFloor] = useState<1 | 2>(1);
  const [activeStage, setActiveStage] = useState<Stage>("all");
  const [showParents, setShowParents] = useState(false);
  const [showUniversities, setShowUniversities] = useState(false);

  const mainActivities = ACTIVITIES.filter((a) => !a.isParentTrack);

  const filteredActivities =
    activeStage === "all"
      ? mainActivities
      : mainActivities.filter((a) => a.stage === activeStage);

  const handleSavePDF = () => window.print();

  return (
    <div
      className="min-h-screen py-8 px-4"
      style={{ background: "linear-gradient(135deg, #6B21A8 0%, #7C3AED 50%, #5B21B6 100%)" }}
    >
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden print-container">
        <div className="p-8 space-y-10">

          {/* HEADER */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <img src="/forum-logo.png" alt="FUTURE is NOW" className="h-16 object-contain" />
                <h1 className="text-4xl font-black tracking-tight" style={{ color: "#6B21A8" }} data-testid="text-title">
                  FUTURE is NOW
                </h1>
              </div>
              <p className="text-gray-500 text-sm mb-1">Програма та картосхема форуму</p>
              <p className="text-sm font-bold tracking-wide" style={{ color: "#06B6D4" }} data-testid="text-event-info">
                16 ТРАВНЯ · 10:00–16:00 · ЛІКО-ШКОЛА · 100+ УЧАСНИКІВ
              </p>
            </div>
            <button
              onClick={handleSavePDF}
              className="no-print flex-shrink-0 flex items-center gap-2 font-bold text-sm px-5 py-3 rounded-xl text-white transition-transform hover:scale-105 active:scale-95 shadow-lg"
              style={{ background: "linear-gradient(135deg, #7C3AED, #6B21A8)" }}
              data-testid="button-save-pdf"
            >
              🖨️ Зберегти як PDF
            </button>
          </div>

          {/* QUICK TIMELINE */}
          <section>
            <h2 className="text-xl font-black mb-5 flex items-center gap-2" style={{ color: "#6B21A8" }}>
              ⏰ Програма дня
            </h2>
            <div className="space-y-3">
              {SCHEDULE_BLOCKS.map((block) => (
                <div key={block.stage} className="rounded-2xl overflow-hidden border" style={{ borderColor: `${block.stageColor}30` }}>
                  <div className="px-5 py-2.5 flex items-center gap-2" style={{ backgroundColor: `${block.stageColor}15` }}>
                    <span className="text-xs font-black tracking-widest" style={{ color: block.stageColor }}>
                      {block.stage === "1" ? "① " : block.stage === "2" ? "② " : "③ "}
                      {block.stageLabel.toUpperCase()}
                    </span>
                  </div>
                  <div style={{ borderColor: `${block.stageColor}15` }}>
                    {block.items.map((item, i) => (
                      <div key={i} className="border-b last:border-b-0" style={{ borderColor: `${block.stageColor}15` }}>
                        <div className="px-5 py-3 flex items-start gap-4">
                          <span className="text-lg flex-shrink-0">{item.emoji}</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold mb-0.5" style={{ color: block.stageColor }}>{item.time}</p>
                            <p className="text-sm font-semibold text-gray-800 leading-snug">{item.title}</p>
                            <p className="text-xs text-gray-400 mt-0.5">📍 {item.location}</p>
                          </div>
                        </div>
                        {/* Inject parent + university collapsibles after the first Проєктуй item */}
                        {block.stage === "2" && i === 0 && (
                          <div className="px-4 pb-3 space-y-2" style={{ backgroundColor: `${block.stageColor}06` }}>
                            {/* PARENT TRACK */}
                            <div className="rounded-xl overflow-hidden border-2" style={{ borderColor: "#BFDBFE" }}>
                              <button
                                onClick={() => setShowParents(!showParents)}
                                className="no-print w-full px-4 py-3 flex items-center justify-between gap-3 text-left"
                                style={{ backgroundColor: "#DBEAFE" }}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-base">👨‍👩‍👧</span>
                                  <div>
                                    <p className="text-xs font-black" style={{ color: "#1E40AF" }}>Батьківська лінійка</p>
                                    <p className="text-xs text-blue-500">10:45–11:50 · Конференц-зал</p>
                                  </div>
                                </div>
                                <span className="text-blue-500 font-bold text-xs">{showParents ? "▲" : "▼"}</span>
                              </button>
                              <div className={`p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 ${showParents ? "" : "hidden"} print:grid`}>
                                {PARENT_TRACK.map((pt, j) => (
                                  <ParentTrackCard key={j} item={pt} />
                                ))}
                              </div>
                            </div>
                            {/* UNIVERSITIES */}
                            <div className="rounded-xl overflow-hidden border-2" style={{ borderColor: "#D1FAE5" }}>
                              <button
                                onClick={() => setShowUniversities(!showUniversities)}
                                className="no-print w-full px-4 py-3 flex items-center justify-between gap-3 text-left"
                                style={{ backgroundColor: "#ECFDF5" }}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-base">🏫</span>
                                  <div>
                                    <p className="text-xs font-black" style={{ color: "#065F46" }}>Університети — 2 поверх</p>
                                    <p className="text-xs" style={{ color: "#059669" }}>10:45–11:15 · По профілях</p>
                                  </div>
                                </div>
                                <span className="font-bold text-xs" style={{ color: "#059669" }}>{showUniversities ? "▲" : "▼"}</span>
                              </button>
                              <div className={`p-4 ${showUniversities ? "" : "hidden"} print:block`}>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                                  {UNIVERSITIES.map((uni) => (
                                    <UniversityCard key={uni.id} uni={uni} />
                                  ))}
                                </div>
                                <p className="mt-3 text-center text-xs text-gray-500 italic">
                                  KAI · КНУ · НУБіП · KSE · AUK+EPAM · NAM — по профілях
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* DETAILED SCHEDULE */}
          <section>
            <h2 className="text-xl font-black mb-5 flex items-center gap-2" style={{ color: "#6B21A8" }}>
              📅 Детальний розклад
            </h2>

            <div className="flex flex-wrap gap-2 mb-5 no-print">
              {STAGES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveStage(s.id)}
                  className="px-4 py-2 rounded-full text-sm font-bold transition-all"
                  style={
                    activeStage === s.id
                      ? { background: "linear-gradient(135deg, #06B6D4, #7C3AED)", color: "white" }
                      : { background: "transparent", color: "#6B21A8", border: "2px solid #C4B5FD" }
                  }
                  data-testid={`button-stage-${s.id}`}
                >
                  {s.id === "1" ? "① " : s.id === "2" ? "② " : s.id === "3" ? "③ " : ""}
                  {s.label}
                </button>
              ))}
            </div>

            {filteredActivities.length === 0 ? (
              <p className="text-gray-400 text-sm text-center py-8">Немає активностей для цього етапу</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredActivities.map((activity) => (
                  <DetailCard key={activity.id} activity={activity} />
                ))}
              </div>
            )}

            {/* Батьківська лінійка — show in Проєктуй and All views */}
            {(activeStage === "2" || activeStage === "all") && (
              <>
                <div className="mt-6">
                  <h3 className="text-sm font-black mb-3 flex items-center gap-2" style={{ color: "#1E40AF" }}>
                    👨‍👩‍👧 Батьківська лінійка · 10:45–11:50 · Конференц-зал
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {PARENT_TRACK.map((item, i) => (
                      <ParentTrackCard key={i} item={item} />
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-black mb-3 flex items-center gap-2" style={{ color: "#065F46" }}>
                    🏫 Університети — 2 поверх · 10:45–11:15 · По профілях
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {UNIVERSITIES.map((uni) => (
                      <UniversityCard key={uni.id} uni={uni} />
                    ))}
                  </div>
                </div>
              </>
            )}
          </section>

          {/* MAP SECTION */}
          <section>
            <h2 className="text-xl font-black mb-4 flex items-center gap-2" style={{ color: "#6B21A8" }}>
              🗺️ Картосхема ЛІКО-Школи
            </h2>

            <div className="flex gap-2 mb-5 no-print flex-wrap">
              <button
                onClick={() => setActiveFloor(1)}
                className="px-4 py-2 rounded-full text-sm font-bold transition-all"
                style={
                  activeFloor === 1
                    ? { background: "linear-gradient(135deg, #7C3AED, #6B21A8)", color: "white" }
                    : { background: "transparent", color: "#6B21A8", border: "2px solid #6B21A8" }
                }
                data-testid="button-floor-1"
              >
                1 поверх — Активності
              </button>
              <button
                onClick={() => setActiveFloor(2)}
                className="px-4 py-2 rounded-full text-sm font-bold transition-all"
                style={
                  activeFloor === 2
                    ? { background: "linear-gradient(135deg, #7C3AED, #6B21A8)", color: "white" }
                    : { background: "transparent", color: "#6B21A8", border: "2px solid #6B21A8" }
                }
                data-testid="button-floor-2"
              >
                2 поверх — Університети
              </button>
            </div>

            {activeFloor === 1 && (
              <div className="rounded-2xl p-5" style={{ background: "linear-gradient(135deg, #F3E8FF 0%, #EDE9FE 100%)" }}>
                <p className="text-center text-xs font-bold tracking-widest italic mb-4" style={{ color: "#06B6D4" }}>
                  ЛІКО-ШКОЛА — 1 ПОВЕРХ
                </p>

                {/* Stage filter in map */}
                <div className="flex flex-wrap justify-center gap-2 mb-5 no-print">
                  {STAGES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveStage(s.id)}
                      className="px-3 py-1.5 rounded-full text-xs font-bold transition-all"
                      style={
                        activeStage === s.id
                          ? { background: "linear-gradient(135deg, #06B6D4, #7C3AED)", color: "white" }
                          : { background: "white", color: "#6B21A8", border: "1.5px solid #C4B5FD" }
                      }
                      data-testid={`button-map-stage-${s.id}`}
                    >
                      {s.id === "1" ? "① Усвідомлюй" : s.id === "2" ? "② Проєктуй" : s.id === "3" ? "③ Дій" : "Всі"}
                    </button>
                  ))}
                </div>

                {activeStage === "all" ? (
                  <>
                    {/* Row 1: Opening */}
                    <div className="grid grid-cols-1 gap-4 mb-3">
                      {ACTIVITIES.filter(a => a.id === "opening").map(card => (
                        <MapCard key={card.id} activity={card} />
                      ))}
                    </div>
                    <div className="relative flex items-center justify-center my-3">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-dashed" style={{ borderColor: "#C4B5FD" }} />
                      </div>
                      <span className="relative px-4 text-xs font-bold tracking-widest" style={{ background: "#EDE9FE", color: "#9CA3AF" }}>
                        КОРИДОР
                      </span>
                    </div>
                    {/* Row 2: Testing + Lab */}
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      {ACTIVITIES.filter(a => ["testing", "lab"].includes(a.id)).map(card => (
                        <MapCard key={card.id} activity={card} />
                      ))}
                    </div>
                    <div className="relative flex items-center justify-center my-3">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-dashed" style={{ borderColor: "#C4B5FD" }} />
                      </div>
                      <span className="relative px-4 text-xs font-bold tracking-widest" style={{ background: "#EDE9FE", color: "#9CA3AF" }}>
                        КОРИДОР
                      </span>
                    </div>
                    {/* Row 3: Social biz + Lunch */}
                    <div className="grid grid-cols-2 gap-4 mb-3">
                      {ACTIVITIES.filter(a => ["social-business", "lunch"].includes(a.id)).map(card => (
                        <MapCard key={card.id} activity={card} />
                      ))}
                    </div>
                    <div className="relative flex items-center justify-center my-3">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-dashed" style={{ borderColor: "#C4B5FD" }} />
                      </div>
                      <span className="relative px-4 text-xs font-bold tracking-widest" style={{ background: "#EDE9FE", color: "#9CA3AF" }}>
                        КОРИДОР
                      </span>
                    </div>
                    {/* Row 4: Games + Reflection */}
                    <div className="grid grid-cols-3 gap-4">
                      {ACTIVITIES.filter(a => ["alla-session", "ual-game", "reflection"].includes(a.id)).map(card => (
                        <MapCard key={card.id} activity={card} />
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {filteredActivities.length > 0 ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {filteredActivities.map((card) => (
                          <MapCard key={card.id} activity={card} />
                        ))}
                      </div>
                    ) : (
                      <p className="text-center text-sm text-gray-400 py-6">Немає активностей для цього етапу</p>
                    )}

                    {/* Parent track + Universities in Проєктуй map view */}
                    {activeStage === "2" && (
                      <>
                        <div className="mt-4 pt-3 border-t border-dashed border-purple-200">
                          <p className="text-xs font-black tracking-widest mb-3 text-center" style={{ color: "#1E40AF" }}>
                            👨‍👩‍👧 БАТЬКІВСЬКА ЛІНІЙКА · КОНФЕРЕНЦ-ЗАЛ
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {PARENT_TRACK.map((item, i) => (
                              <ParentTrackCard key={i} item={item} />
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-dashed border-purple-200">
                          <p className="text-xs font-black tracking-widest mb-3 text-center" style={{ color: "#065F46" }}>
                            🏫 УНІВЕРСИТЕТИ — 2 ПОВЕРХ · ПО ПРОФІЛЯХ
                          </p>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {UNIVERSITIES.map((uni) => (
                              <UniversityCard key={uni.id} uni={uni} />
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}

                {/* Legend */}
                <div className="mt-5 pt-4 border-t border-purple-200/60 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-600">
                  {PROFILES.map((p) => (
                    <span key={p.id} className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: p.dot }} />
                      {p.title}
                    </span>
                  ))}
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-bold tracking-widest" style={{ color: "#06B6D4" }}>↑ ВХІД</span>
                </div>
              </div>
            )}

            {activeFloor === 2 && (
              <div className="rounded-2xl p-5" style={{ background: "linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 100%)" }}>
                <p className="text-center text-xs font-bold tracking-widest italic mb-5" style={{ color: "#06B6D4" }}>
                  ЛІКО-ШКОЛА — 2 ПОВЕРХ · УНІВЕРСИТЕТИ ПО ПРОФІЛЯХ
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {UNIVERSITIES.map((uni) => (
                    <UniversityCard key={uni.id} uni={uni} />
                  ))}
                </div>
                <p className="mt-5 text-center text-xs text-gray-500 italic">
                  KAI — Архітектура · КНУ — Біологія і технології · KSE — Економіка · AUK+EPAM — IT · NAM — Менеджмент
                </p>
              </div>
            )}
          </section>

          {/* 5 PROFILES */}
          <section>
            <div className="text-center mb-5">
              <h2 className="text-2xl font-black mb-2 flex items-center justify-center gap-2" style={{ color: "#6B21A8" }}>
                🎯 Профілі від ЛІКО
              </h2>
              <p className="text-gray-500 text-sm">
                Програма форуму крізь навчальні профілі у ЛІКО ШКОЛІ — знайди свій профіль і потрапи до потрібного університету
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PROFILES.map((profile) => (
                <div
                  key={profile.id}
                  className="rounded-2xl overflow-hidden flex flex-col"
                  style={{ border: `2px solid ${profile.color}25` }}
                  data-testid={`card-profile-${profile.id}`}
                >
                  <div className="p-4" style={{ backgroundColor: profile.color }}>
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-2xl">{profile.emoji}</span>
                      <span className="text-4xl font-black text-white/20 leading-none">{profile.number}</span>
                    </div>
                    <h3 className="font-black text-white text-xs leading-tight">{profile.title}</h3>
                  </div>
                  <div className="p-4 flex-1 flex flex-col gap-3" style={{ backgroundColor: profile.bgColor }}>
                    <p className="text-gray-600 text-xs leading-relaxed">{profile.description}</p>
                    <div>
                      <p className="text-xs font-black tracking-widest mb-1.5" style={{ color: profile.color }}>
                        АКТИВНОСТІ
                      </p>
                      <ul className="space-y-0.5">
                        {profile.activities.map((a, i) => (
                          <li key={i} className="text-xs text-gray-700 flex items-start gap-1">
                            <span style={{ color: profile.color }}>▸</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {profile.universities.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {profile.universities.map((u, i) => (
                          <span
                            key={i}
                            className="text-xs font-bold px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: `${profile.color}18`,
                              color: profile.color,
                              border: `1px solid ${profile.color}40`,
                            }}
                          >
                            {u}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TREE STRUCTURE */}
          <section>
            <div
              className="rounded-2xl p-5"
              style={{ border: "2px solid #06B6D440", background: "linear-gradient(135deg, #F0FDFF, #F5F0FF)" }}
            >
              <h2 className="text-sm font-black mb-4 flex items-center gap-2" style={{ color: "#6B21A8" }}>
                🌿 СТРУКТУРА ДЕРЕВА ПОДІЙ:
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {TREE_NODES.map((node, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-xl flex-shrink-0">{node.emoji}</span>
                    <div>
                      <p className="font-bold text-xs" style={{ color: "#06B6D4" }}>{node.label}</p>
                      <p className="font-semibold text-xs text-gray-700 mb-0.5">{node.subtitle}</p>
                      <p className="text-xs text-gray-500">{node.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PARTICIPANT JOURNEY */}
          <section>
            <div className="rounded-2xl p-5" style={{ borderLeft: "4px solid #7C3AED", background: "#F5F0FF" }}>
              <h2 className="text-sm font-black mb-3 flex items-center gap-2" style={{ color: "#6B21A8" }}>
                👥 Подорож учасника крізь форум
              </h2>
              <div className="flex flex-wrap items-center gap-1.5">
                {JOURNEY_STEPS.map((step, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div className="flex items-center gap-1 text-sm">
                      <span>{step.emoji}</span>
                      <span className="font-semibold text-gray-700 text-xs">{step.label}</span>
                    </div>
                    {i < JOURNEY_STEPS.length - 1 && (
                      <span className="text-purple-300 text-sm font-bold">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* METRICS */}
          <section>
            <h2 className="text-xl font-black mb-4 flex items-center gap-2" style={{ color: "#6B21A8" }}>
              📊 Ключові метрики форуму
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {METRICS.map((m, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-4 text-center flex flex-col gap-1"
                  style={{ border: "2px solid #FFD16660", background: "#FFFBEB" }}
                  data-testid={`card-metric-${i}`}
                >
                  <div className="text-3xl font-black" style={{ color: "#F4A623" }}>{m.value}</div>
                  <div className="text-xs font-black tracking-widest" style={{ color: "#6B21A8" }}>{m.unit}</div>
                  <div className="text-xs text-gray-500 leading-tight">{m.desc}</div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
