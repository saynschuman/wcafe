import * as React from "react"

export const ServicesSlider: React.SFC = () => {
    return (
        <section className="services-slider">
            <div className="services-slider-list">
                <div className="wrapper-overlay">
                    <div className="overlay-effect" />
                    <div className="services-slide sr-sl-1">
                        <div className="services-slide-text container">
                            <div className="services-slide-title">Название услуи будет тут</div>
                            <div className="services-slide-descr">То есть, картинки должны меняться вместе с услугами.
                                Плюс,<br />
                                    так же как и на сайте банка должны быть кружочки, нажав на<br />
                                    который можно выбрать нужную картинку.
                            </div>
                        </div>
                    </div>
                    <div className="services-slider-nav">
                        <div className="services-slider-prev" />
                        <div className="services-slider-next" />
                    </div>
                    <div className="services-slider-dots">
                        <div className="services-slider-dot active" />
                        <div className="services-slider-dot" />
                        <div className="services-slider-dot" />
                    </div>
                </div>
            </div>
        </section>
    )
}
