export function formatFollowersNos(num: number) {
  if (num > 999 && num < 1000000) {
    return `${(num / 1000).toFixed(1)}K`;
  } if (num > 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  } if (num < 900) {
    return `${num}`;
  }
  return '';
}
