import CatData from '../../../models/Cat'

interface Props {
  setter: (newCat: CatData) => void
  cat: CatData
}

export function LorePicker({ setter, cat }: Props) {
  return (
    <div className="picker">
      <h3>BASIC INFO</h3>
      <div className='flex-container'>
        <p>Name: {cat.name_prefix}{cat.name_suffix}</p>
        <p>Moons: {cat.moons}</p>
      </div>
      <div className="line"></div>
      <h3>BACKSTORY</h3>
      <div className="line"></div>
      <h3>TRAITS AND PERSONALITY</h3>
    </div>
  )
}
