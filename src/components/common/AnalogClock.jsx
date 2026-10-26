function AnalogClock({ timeParts, timeLabel }) {
  const hourDegrees = (timeParts.hours % 12) * 30 + timeParts.minutes * 0.5
  const minuteDegrees = timeParts.minutes * 6 + timeParts.seconds * 0.1
  const secondDegrees = timeParts.seconds * 6

  return (
    <div
      className="clock-face relative aspect-square justify-self-center rounded-full"
      aria-label={`Analog clock showing ${timeLabel}`}
    >
      <div className="absolute inset-[25px] rounded-full border border-[#17211d]/12" />

      {Array.from({ length: 12 }, (_, index) => (
        <span
          className="clock-number"
          style={{ '--clock-index': index + 1 }}
          key={index}
        >
          {index + 1}
        </span>
      ))}

      {Array.from({ length: 60 }, (_, index) => (
        <span
          className={`clock-tick absolute left-1/2 top-1/2 ${index % 5 === 0 ? 'clock-tick-major' : ''}`}
          style={{ '--tick-angle': `${index * 6}deg` }}
          key={index}
        />
      ))}

      <span className="clock-hand hour-hand" style={{ transform: `rotate(${hourDegrees}deg)` }} />
      <span className="clock-hand minute-hand" style={{ transform: `rotate(${minuteDegrees}deg)` }} />
      <span className="clock-hand second-hand" style={{ transform: `rotate(${secondDegrees}deg)` }} />
      <span className="clock-pin" />
    </div>
  )
}

export default AnalogClock
