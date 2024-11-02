export function calculateCoords(index: number, maxX: number, maxY: number, width: number, height?: number): number[] {
  const posArray = [0, 0]

  if (height === undefined) height = width

  posArray[0] = (index % maxX) * width
  posArray[1] = (Math.floor(index / maxX) % maxY) * height
  return posArray
}

export function randomInt(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function randomBool(): boolean {
  return Math.random() < 0.5 ? false : true
}
