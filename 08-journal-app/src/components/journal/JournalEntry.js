import React from 'react';

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize:'cover',
                    backgroundImage:'url(https://s2.best-wallpaper.net/wallpaper/2880x1800/1903/Beautiful-sunrise-purple-sky-moon-river-creative-picture_2880x1800.jpg)'
                }}
            >
            </div>
            
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    A new day
                </p>
                <p className="journal__entry-content">
                    lorem   ñlmasdfñsdflñwfdsf  asd fsdfs df  ad f  e tyefqwfg 46ue gtri75iee r 
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>24</h4>
            </div>
        </div>
    )
}
