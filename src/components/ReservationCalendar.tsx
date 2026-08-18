import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { monthNames, weekdayLabels } from "../data/reservations";
import "./ReservationCalendar.css";

interface ReservationCalendarProps {
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
}

export default function ReservationCalendar({ selectedDate, onSelect }: ReservationCalendarProps) {
  const { language } = useLanguage();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const firstOfMonth = new Date(viewYear, viewMonth, 1);
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  // Convert Sunday(0)-Saturday(6) to Monday-first index (0-6)
  const startOffset = (firstOfMonth.getDay() + 6) % 7;

  const cells: (number | null)[] = [
    ...Array(startOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const goToPrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const goToNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const isPast = (day: number) => {
    const d = new Date(viewYear, viewMonth, day);
    return d < today;
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getFullYear() === viewYear &&
      selectedDate.getMonth() === viewMonth &&
      selectedDate.getDate() === day
    );
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={goToPrevMonth} aria-label="Previous month">‹</button>
        <h3>{monthNames[language][viewMonth]} {viewYear}</h3>
        <button onClick={goToNextMonth} aria-label="Next month">›</button>
      </div>
      <div className="calendar-grid">
        {weekdayLabels[language].map((d) => (
          <div key={d} className="calendar-weekday">{d}</div>
        ))}
        {cells.map((day, i) =>
          day === null ? (
            <div key={`empty-${i}`} className="calendar-cell calendar-cell-empty" />
          ) : (
            <button
              key={day}
              className={`calendar-cell ${isPast(day) ? "calendar-cell-disabled" : ""} ${isSelected(day) ? "calendar-cell-selected" : ""}`}
              disabled={isPast(day)}
              onClick={() => onSelect(new Date(viewYear, viewMonth, day))}
            >
              {day}
            </button>
          )
        )}
      </div>
    </div>
  );
}