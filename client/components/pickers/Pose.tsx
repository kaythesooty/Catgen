import CatData from '../../../models/Cat'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function PosePicker({ setter, cat }: Props) {
  return (
    <div className="flex-container picker">
      <div className="flex-container flex-column smallborder wide">
        <h4>Kitten</h4>
        <p>{cat.sprite_kitten}</p>
        <button
          onClick={() => {
            setter({ ...cat, sprite_kitten: 0 })
          }}
        >
          Pose 1
        </button>
        <button
          onClick={() => {
            setter({ ...cat, sprite_kitten: 1 })
          }}
        >
          Pose 2
        </button>
        <button
          onClick={() => {
            setter({ ...cat, sprite_kitten: 2 })
          }}
        >
          Pose 3
        </button>
      </div>
      <div className="flex-container flex-column smallborder wide">
        <h4>Adolescent</h4>
        <p>{cat.sprite_adolescent}</p>
        <button
          onClick={() => {
            setter({ ...cat, sprite_adolescent: 3 })
          }}
        >
          Pose 1
        </button>
        <button
          onClick={() => {
            setter({ ...cat, sprite_adolescent: 4 })
          }}
        >
          Pose 2
        </button>
        <button
          onClick={() => {
            setter({ ...cat, sprite_adolescent: 5 })
          }}
        >
          Pose 3
        </button>
      </div>
      <div className="flex-container flex-column smallborder wide">
        <h4>Adult</h4>
        <p>{cat.sprite_adult}</p>
        <button
          onClick={() => {
            setter(cat.pelt_length === 'long' ? { ...cat, sprite_adult: 9 } : { ...cat, sprite_adult: 6 })
          }}
        >
          Pose 1
        </button>
        <button
          onClick={() => {
            setter(cat.pelt_length === 'long' ? { ...cat, sprite_adult: 10 } : { ...cat, sprite_adult: 7 })
          }}
        >
          Pose 2
        </button>
        <button
          onClick={() => {
            setter(cat.pelt_length === 'long' ? { ...cat, sprite_adult: 11 } : { ...cat, sprite_adult: 8 })
          }}
        >
          Pose 3
        </button>
      </div>
      <div className="flex-container flex-column smallborder wide">
        <h4>Elder</h4>
        <p>{cat.sprite_senior}</p>
        <button
          onClick={() => {
            setter({ ...cat, sprite_senior: 12 })
          }}
        >
          Pose 1
        </button>
        <button
          onClick={() => {
            setter({ ...cat, sprite_senior: 13 })
          }}
        >
          Pose 2
        </button>
        <button
          onClick={() => {
            setter({ ...cat, sprite_senior: 14 })
          }}
        >
          Pose 3
        </button>
      </div>
    </div>
  )
}
