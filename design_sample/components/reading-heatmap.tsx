// 결정론적 의사 난수로 독서 히트맵(GitHub 잔디 스타일)을 생성합니다.
const WEEKS = 20
const DAYS = 7

function intensity(week: number, day: number) {
  const seed = ((week * 7 + day + 1) * 2654435761) >>> 0
  const r = (seed % 100) / 100
  // 활동이 있는 날이 더 많이 보이도록 분포를 조정합니다.
  if (r < 0.28) return 0
  if (r < 0.48) return 1
  if (r < 0.68) return 2
  if (r < 0.86) return 3
  return 4
}

const levelClass = [
  "bg-muted",
  "bg-primary/25",
  "bg-primary/50",
  "bg-primary/75",
  "bg-primary",
]

export function ReadingHeatmap() {
  return (
    <div className="flex gap-1" role="img" aria-label="주별 독서 활동 히트맵">
      {Array.from({ length: WEEKS }).map((_, week) => (
        <div key={week} className="flex flex-col gap-1">
          {Array.from({ length: DAYS }).map((_, day) => (
            <span
              key={day}
              className={`size-2.5 rounded-[3px] ${levelClass[intensity(week, day)]}`}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
