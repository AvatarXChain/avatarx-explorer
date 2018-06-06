
const _formatDateNumber = arg => {
  return arg < 10 ? `0${arg}` : arg
}

export function host(url) {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  const parts = host.split('.').slice(-3);
  if (parts[0] === 'www') parts.shift();
  return parts.join('.');
}

function pluralize(time, label) {
  if (time === 1) {
    return time + label;
  }
  return `${time}${label}前`;
}

export function timeAgo(time) {
  const between = (Date.now() / 1000) - Number(time);
  if (between < 3600) {
    return pluralize(~~(between / 60), '分');
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), '小时');
  }

  return pluralize(~~(between / 86400), '天');
}

// 将时间格式化为YYYY-mm-dd hhmmss
export const dateFormat = date => {
  const rawDate = new Date(date)
  const month = _formatDateNumber(rawDate.getMonth() + 1)
  const day = _formatDateNumber(rawDate.getDate())
  const hour = _formatDateNumber(rawDate.getHours())
  const minute = _formatDateNumber(rawDate.getMinutes())
  const second = _formatDateNumber(rawDate.getSeconds())

  return `${rawDate.getFullYear()}-${month}-${day} ${hour}:${minute}:${second}`
}

export const limitedStr = (str, len) => {
  const reg = '/[^\x00-\xff]/g'
  if (str.replace(reg, 'mm').length <= len) {
    return str
  }

  const half = Math.floor(len / 2)
  const strLen = str.length
  for (let i = half; i < strLen; i++) {
    if (str.substr(0, i).replace(reg, 'mm').length >= len) {
      return str.substr(0, i) + '...'
    }
  }
  return str
}
