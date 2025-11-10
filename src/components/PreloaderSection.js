'use client';

export default function Preloader({ hide = false }) {
    return (

        <div className={`preloader ${hide ? 'preloader--hide' : ''}`}>
            <div className="loader-wrapper">
                <span className="loader-letter">H</span>
                <span className="loader-letter">E</span>
                <span className="loader-letter">L</span>
                <span className="loader-letter">L</span>
                <span className="loader-letter">O</span>
                <span className="loader-letter">!</span>
                <div className="loader" />
            </div>
        </div>

    );
}
