export function calculateCoords(
  index: number,
  maxX: number,
  maxY: number,
  width: number,
  height?: number,
): number[] {
  const posArray = [0, 0]

  if (height === undefined) height = width

  posArray[0] = (index % maxX) * width
  posArray[1] = (Math.floor(index / maxX) % maxY) * height
  return posArray
}
