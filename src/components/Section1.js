import iconBrandRrecognition from '../assets/images/icon-brand-recognition.svg'
import iconDetailedRecords from '../assets/images/icon-detailed-records.svg'
import iconFullyCustomizable from '../assets/images/icon-fully-customizable.svg'
import './Section1.css'

export function Section1() {
    return (
      <>
        <div className="section1">
  
          <div className="section1Title">
            <span>
              Advanced Statistics
            </span>
            <p>
              Track how your links are performing across the web with our 
              advanced statistics dashboard.
            </p>
          </div>
  
          <div className="cards">
            <div className="card">
              <img src={iconBrandRrecognition} alt="icon-recognition"/>
              <span>
                Brand Recognition
              </span>
              <p>
                Boost your brand recognition with each click. Generic links don’t 
                mean a thing. Branded links help instil confidence in your content.
              </p>
            </div>
            <div className="card">
              <img src={iconDetailedRecords} alt="icon-records"/>
              <span>
                Detailed Records
              </span>
              <p>
                Gain insights into who is clicking your links. Knowing when and where 
                people engage with your content helps inform better decisions.
              </p>
            </div>
            <div className="card">
              <img src={iconFullyCustomizable} alt="icon-customizable"/>
              <span>
                Fully Customizable
              </span>
              <p>
                Improve brand awareness and content discoverability through customizable 
                links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }
