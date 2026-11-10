export function binarySearchById<T extends { id: number }>(list: T[], target: number): T | undefined {
  let lo = 0, hi = list.length - 1
  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    if (list[mid].id === target) return list[mid]
    if (list[mid].id < target) lo = mid + 1
    else hi = mid - 1
  }
  return undefined
}
