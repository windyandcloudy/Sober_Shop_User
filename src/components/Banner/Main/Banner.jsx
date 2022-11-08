import React, { useState, useEffect } from 'react'
import './banner.scss'
import '../../../assets/styles/animation.scss'

export default function Banner() {
    const [currentBanner, setCurrentBanner] = useState(1)

    useEffect(() => {
        const slide = setInterval(() => {
            setCurrentBanner(currentBanner + 1)
        }, 5000)
        return () => {
            clearInterval(slide)
        }
    }, [currentBanner])

    if(currentBanner > 3) setCurrentBanner(1)

    return (
        <div className="banner">
            <div className="banner-container">
                <div className={currentBanner !==1 ? 'hide' : "banner-container-slide banner-first"}>
                    <div className={currentBanner === 1 ? "banner-title fadeInDown" : "banner-title"}>
                        New Arrilvals
                    </div>
                </div>

                <div className={currentBanner !==2 ? 'hide' : "banner-container-slide banner-second"}>
                    <div className={currentBanner === 2 ? "banner-title fadeInUp" : "banner-title"}>
                        White Sneakers
                    </div>
                </div>

                <div className={currentBanner !==3 ? 'hide' : "banner-container-slide banner-third"}>
                    <div className={currentBanner === 3 ? "banner-title fadeInLeft" : "banner-title"}>
                        Linen Collection
                    </div>
                </div>
            </div>

            <div className="choose-slide">
                
                <div 
                    className={currentBanner === 1 ? 'choose-line-active' : 'choose-line'}
                    onClick={() => setCurrentBanner(1)}
                >     
                </div>
                <div 
                    className={currentBanner === 2 ? 'choose-line-active' : 'choose-line'}
                    onClick={() => setCurrentBanner(2)}
                >     
                </div>
                <div 
                    className={currentBanner === 3 ? 'choose-line-active' : 'choose-line'}
                    onClick={() => setCurrentBanner(3)}
                >     
                </div>

            </div>
            
        </div>
    )
}
