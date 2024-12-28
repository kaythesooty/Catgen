import CatData from '../models/Cat'

export function calculateCoords(index: number, maxX: number, maxY: number, width: number, height?: number): number[] {
  const posArray = [0, 0]

  if (height === undefined) height = width

  posArray[0] = (index % maxX) * width
  posArray[1] = (Math.floor(index / maxX) % maxY) * height
  return posArray
}

export function getPose(cat: CatData): number {
  const { moons, sick, paralyzed } = cat

  // newborns first (cannot be sick or paralysed)
  if (moons == 0) {
    return 20
  }

  // sick cats next (overwrites paralysed)
  if (sick) {
    if (moons < 12) {
      return 19
    } else {
      return 18
    }
  }

  // paralysed overwrites normal sprite
  if (paralyzed) {
    if (moons < 12) {
      return 17
    } else {
      return cat.sprite_para_adult
    }
  }

  if (moons < 6) {
    return cat.sprite_kitten
  } else if (moons < 12) {
    return cat.sprite_adolescent
  } else if (moons < 120) {
    return cat.sprite_adult
  } else {
    return cat.sprite_senior
  }
}

export function randomInt(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function randomBool(): boolean {
  return Math.random() < 0.5 ? false : true
}

