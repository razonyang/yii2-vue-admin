var moment = require('moment')

export function formatTimestamp(time, format = 'YYYY-MM-DD hh:mm:ss') {
  return moment.unix(time).format(format)
}
