

function handleFrame() {
  tickers.forEach(ticker => ticker())

  requestAnimationFrame(handleFrame)
}

requestAnimationFrame(handleFrame)

type Ticker = Function
const tickers: Array<Ticker> = []
export function addTicker(ticker) {
  tickers.push(ticker)
}