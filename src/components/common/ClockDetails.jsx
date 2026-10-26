function ClockDetails({ activeTimezone, timeLabel, dateLabel }) {
  return (
    <div className="min-w-0 text-center sm:text-left" aria-live="polite">
      <p className="m-0 whitespace-nowrap font-mono text-[clamp(3.25rem,8vw,8.5rem)] font-medium leading-[0.82] tracking-[0.02em] text-[#f7d77a] tabular-nums">
        {timeLabel}
      </p>
      <p className="mb-10 mt-5 text-lg font-semibold uppercase tracking-[0.12em] text-[#c9c2ad]">{dateLabel}</p>

      <div className="flex items-center justify-center gap-5 border-t border-[#d6b45c]/35 pt-6 sm:justify-start">
        <span className="grid size-16 shrink-0 place-items-center rounded-full border-2 border-[#d6b45c] bg-[#16140e] font-mono text-base font-bold text-[#f7d77a]">
          {activeTimezone.short}
        </span>
        <div className="grid min-w-0 text-left">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#b99a46]">Timezone</span>
          <strong className="mt-1 break-words text-[clamp(1.25rem,2.5vw,2.5rem)] font-semibold text-[#f7d77a]">{activeTimezone.zone}</strong>
        </div>
      </div>
    </div>
  )
}

export default ClockDetails
