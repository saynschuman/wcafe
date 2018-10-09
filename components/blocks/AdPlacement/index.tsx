import * as React from "react"

export const AdPlacement: React.SFC = () => {
    return (
        <section className="ad-placement">
            <div className="container ad-placement-container">
                <div className="about-img-right"><img src="/static/img/about/ad-placement.png" /></div>
                <div className="about-text-left">
                    <p className="ad-big-text"><b>Наши объявления размещены более чем в
                        30 интернет и офлайн ресурсах.</b></p>
                    <p className="ad-small-text">
                        О Вашем предложение в кротчайшие сроки узнает огромное количество потенциальных арендаторов.
                    </p>
                </div>
            </div>
        </section>
    )
}
