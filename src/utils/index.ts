export function formatFollowersNos(num: number) {
  if (num > 999 && num < 1000000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  if (num > 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num < 900) {
    return `${num}`;
  }
  return '';
}

export function formatShortDate(date = new Date().toString()) {
  const d = new Date(date);
  // const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(d);
  return `${month} ${day}`;
}
