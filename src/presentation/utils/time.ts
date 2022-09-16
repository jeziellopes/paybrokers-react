export const dateToDayWithMonth = (timestamp: number) => {
  return new Date(timestamp).toLocaleDateString('pt-BR').slice(0, 5)
}

export const byCurrentMonthDate = (timestamp: number) => {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()

  const sellDate = new Date(timestamp)
  const sellYear = sellDate.getFullYear()
  const sellMonth = sellDate.getMonth()

  return year === sellYear && month === sellMonth
}
