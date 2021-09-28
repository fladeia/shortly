import './Results.css'
import { ButtonCopy } from './parts/Buttons'

export function Results({ item1, item2 }) {
    return (
        <>
            <div className="results-container">
                <div className="requestUrl">{item1}</div>
                <div className="shortenIt">
                    <div className="shortenUrl">{item2}</div>
                    <ButtonCopy></ButtonCopy>
                </div>
            </div>
        </>
    )
}