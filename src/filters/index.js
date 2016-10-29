export function uppercase (str) {
  return str.toUpperCase()
}

export function json (obj) {
  console.log(obj)
  return JSON.stringify(obj)
}

export function timestamp (timePosted) {
  return (new Date(timePosted)).toLocaleString()
}
