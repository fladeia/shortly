import './Results.css'
import { ButtonCopy } from './parts/Buttons'

export function Results({ item }) {
    return (
        <>
            <div className="results-container">
                <div className="requestUrl">{item}</div>
                <div className="shortenIt">
                    <div className="shortenUrl">shoten</div>
                    <ButtonCopy></ButtonCopy>
                </div>
            </div>
        </>
    )
}