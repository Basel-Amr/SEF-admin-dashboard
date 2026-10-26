import { useEffect, useMemo, useState } from 'react'
import AnalogClock from '../common/AnalogClock.jsx'
import ClockDetails from '../common/ClockDetails.jsx'
import TimezoneSelect from '../common/TimezoneSelect.jsx'

const timezones = [
  { label: 'Cairo', zone: 'Africa/Cairo', short: 'EG' },
  { label: 'Dubai', zone: 'Asia/Dubai', short: 'AE' },
  { label: 'London', zone: 'Europe/London', short: 'GB' },
  { label: 'New York', zone: 'America/New_York', short: 'US' },
  { label: 'Tokyo', zone: 'Asia/Tokyo', short: 'JP' },
]

const watchThemes = [
  { label: 'Classic', value: 'classic' },
  { label: 'Midnight', value: 'midnight' },
  { label: 'Heritage', value: 'heritage' },
]

function getTimeParts(date, timeZone) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
    }).formatToParts(date).map((part) => [part.type, part.value]),
  )

  return {
    hours: Number(parts.hour),
    minutes: Number(parts.minute),
    seconds: Number(parts.second),
  }
}

function WorldClock() {
  const [now, setNow] = useState(() => new Date())
  const [timezone, setTimezone] = useState(timezones[0].zone)
  const [watchTheme, setWatchTheme] = useState(watchThemes[0].value)

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const activeTimezone = timezones.find((item) => item.zone === timezone)
  const timeParts = useMemo(() => getTimeParts(now, timezone), [now, timezone])
  const timeLabel = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  }).format(now)
  const dateLabel = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(now)

  return (
    <main className="grid min-h-screen w-full place-items-stretch">
      <section
        className="world-clock flex min-h-screen w-full flex-col overflow-hidden border-0 bg-[#080806]"
        data-theme={watchTheme}
        aria-label="World clock"
      >
        <header className="flex min-h-29 flex-col items-stretch justify-between gap-6 border-b border-[#d6b45c]/30 px-6 py-6 sm:flex-row sm:items-center sm:px-8">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#b99a46]">Current place</p>
            <h1 className="m-0 text-5xl font-semibold leading-none text-[#f7d77a] sm:text-6xl lg:text-7xl">{activeTimezone.label}</h1>
          </div>
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <TimezoneSelect
              label="Timezone"
              options={timezones}
              value={timezone}
              onChange={setTimezone}
            />
            <TimezoneSelect
              label="Watch theme"
              options={watchThemes}
              value={watchTheme}
              onChange={setWatchTheme}
            />
          </div>
        </header>

        <div className="grid flex-1 items-center gap-10 px-6 py-12 sm:px-16 md:grid-cols-[1fr_.82fr] md:gap-16 lg:px-24">
          <AnalogClock timeParts={timeParts} timeLabel={timeLabel} />
          <ClockDetails activeTimezone={activeTimezone} timeLabel={timeLabel} dateLabel={dateLabel} />
        </div>
      </section>
    </main>
  )
}

export default WorldClock
