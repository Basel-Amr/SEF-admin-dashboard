function TimezoneSelect({ label, options, value, onChange }) {
  return (
    <label className="grid w-full gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#b99a46] sm:w-[210px]">
      <span>{label}</span>
      <select
        className="h-12 w-full cursor-pointer rounded border border-[#d6b45c]/45 bg-[#16140e] px-3.5 text-base font-bold text-[#f7d77a] outline-none focus:border-[#f7d77a] focus:ring-3 focus:ring-[#d6b45c]/20"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((item) => (
          <option key={item.zone ?? item.value} value={item.zone ?? item.value}>{item.label}</option>
        ))}
      </select>
    </label>
  )
}

export default TimezoneSelect
