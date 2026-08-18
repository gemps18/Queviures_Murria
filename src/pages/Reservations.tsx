import { useState, useMemo } from "react";
import PageHero from "../components/PageHero";
import ReservationCalendar from "../components/ReservationCalendar";
import { useLanguage } from "../hooks/useLanguage";
import {
  reservationsContent,
  timeSlotsForPeople,
  monthNames,
  areasAvailableAt,
  MAX_PEOPLE,
} from "../data/reservations";
import "./Reservations.css";

export default function Reservations() {
  const { language } = useLanguage();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [people, setPeople] = useState(2);
  const [time, setTime] = useState("");
  const [area, setArea] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const c = reservationsContent;

  const availableTimes = useMemo(() => timeSlotsForPeople(people), [people]);
  const availableAreas = useMemo(
    () => (time ? areasAvailableAt(time, people) : []),
    [time, people]
  );

  const handlePeopleChange = (newPeople: number) => {
    setPeople(newPeople);
    const newTimes = timeSlotsForPeople(newPeople);
    if (time && !newTimes.includes(time)) {
      setTime("");
      setArea("");
    }
  };

  const handleTimeChange = (newTime: string) => {
    setTime(newTime);
    const newAreas = newTime ? areasAvailableAt(newTime, people) : [];
    if (area && !newAreas.some((a) => a.id === area)) {
      setArea("");
    }
  };

  const handleReserve = () => {
    if (!selectedDate || !time || !area) return;
    const areaName = availableAreas.find((a) => a.id === area)?.name[language] ?? "";
    const dateLabel = `${selectedDate.getDate()} ${monthNames[language][selectedDate.getMonth()]}, ${time}`;
    const peopleLabel = people === 1 ? c.personSingular[language] : c.personPlural[language];
    setConfirmation(
      `${c.confirmationPrefix[language]} ${people} ${peopleLabel} — ${dateLabel} — ${areaName}`
    );
  };

  return (
    <div>
      <PageHero title={c.heroTitle[language]} image="/images/reservations-hero.jpg" />

      <div className="reservations-page">
        <ReservationCalendar selectedDate={selectedDate} onSelect={setSelectedDate} />

        <div className="reservation-form">
          <label>
            {c.peopleLabel[language]}
            <select value={people} onChange={(e) => handlePeopleChange(Number(e.target.value))}>
              {Array.from({ length: MAX_PEOPLE }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? c.personSingular[language] : c.personPlural[language]}
                </option>
              ))}
            </select>
          </label>

          <label>
            {c.timeLabel[language]}
            {availableTimes.length > 0 ? (
              <select value={time} onChange={(e) => handleTimeChange(e.target.value)}>
                <option value="">{c.selectPlaceholder[language]}</option>
                {availableTimes.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            ) : (
              <p className="no-areas-msg">{c.noTimesAvailable[language]}</p>
            )}
            {people === MAX_PEOPLE && (
              <span className="field-hint">{c.noTimesAvailable[language]}</span>
            )}
          </label>

          {time && (
            <label>
              {c.areaLabel[language]}
              {availableAreas.length > 0 ? (
                <select value={area} onChange={(e) => setArea(e.target.value)}>
                  <option value="">{c.selectPlaceholder[language]}</option>
                  {availableAreas.map((a) => (
                    <option key={a.id} value={a.id}>{a.name[language]}</option>
                  ))}
                </select>
              ) : (
                <p className="no-areas-msg">{c.noAreasAvailable[language]}</p>
              )}
            </label>
          )}

          <button
            className="reserve-btn"
            disabled={!selectedDate || !time || !area}
            onClick={handleReserve}
          >
            {c.reserveButton[language]}
          </button>

          {confirmation && <p className="reservation-confirmation">{confirmation}</p>}
        </div>
      </div>
    </div>
  );
}