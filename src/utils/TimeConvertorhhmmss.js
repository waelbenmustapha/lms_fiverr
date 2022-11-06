export default function timeconvertorhhmmss(time) {
  if (time >= 3600) {
    return new Date(time * 1000).toISOString().substr(11, 8);
  } else if (time < 3600 && time >= 60) {
    return new Date(time * 1000).toISOString().substring(14, 19);
  } else {
    return time;
  }
}
