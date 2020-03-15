function formatTimeString(time: string, showMsecs?: boolean) {
  const intTime = Number.parseInt(time, 10);
  let msecs = '' + (intTime % 1000);

  if (Number(msecs) < 10) {
    msecs = `00${msecs}`;
  } else if (Number(msecs) < 100) {
    msecs = `0${msecs}`;
  }

  let seconds = Math.floor(intTime / 1000);
  let minutes = Math.floor(intTime / 60000);
  let hours = Math.floor(intTime / 3600000);
  seconds = seconds - minutes * 60;
  minutes = minutes - hours * 60;
  let formatted;
  if (showMsecs) {
    formatted = `${hours < 10 ? 0 : ''}${hours}:${
      minutes < 10 ? 0 : ''
    }${minutes}:${seconds < 10 ? 0 : ''}${seconds}:${msecs}`;
  } else {
    formatted = `${hours < 10 ? 0 : ''}${hours}:${
      minutes < 10 ? 0 : ''
    }${minutes}.${seconds < 10 ? 0 : ''}${seconds}`;
  }

  return formatted.slice(3);
}

export { formatTimeString };
