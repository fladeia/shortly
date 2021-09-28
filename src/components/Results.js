import './Results.css'
import { ButtonCopy } from './parts/Buttons'

export function Results({ item1, item2, key }) {
    console.log(item2);
      return (
        <div className="results-container" key={key}>
            <div className="requestUrl" >{item1}</div>
            <div className="shortenIt">
                <div className="shortenUrl">{item2}</div>
                <ButtonCopy clipboard={item2}></ButtonCopy>
            </div>
        </div>
    )
}