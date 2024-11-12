// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetItem} = props
  const {name, imageUrl, description} = planetItem
  console.log(imageUrl, description)
  console.log('Hi')
  return (
    <div className="planet-item-container">
      <img src={imageUrl} alt={`planet ${name}`} />
      <h1 style={{color: '#ffffff'}}>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
