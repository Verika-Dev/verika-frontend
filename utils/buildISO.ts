export function buildISO(date: Date, time: string): string {
  const [hourMin, modifier] = time.split(" ");
  let [hours, minutes] = hourMin.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  const iso = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    hours,
    minutes,
    0
  );

  return iso.toISOString();
}
