// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  console.log(planetsList)

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="planet-background">
      <h1>PLANETS</h1>
      <div className="slider-container" data-testid="planets">
        <Slider {...settings}>
          {planetsList.map(item => (
            <div>
              <PlanetItem planetItem={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
