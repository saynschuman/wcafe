import * as React from "react"

export const Estimate: React.SFC = () => {
    return (
        <section className="estimate">
            <div className="container estimate-container">
                <div className="about-img-right"><img src="/static/img/about/estimate.png" /></div>
                <div className="about-text-left">
                    Мы проводим оценку и знаем сколько <br />
                    действительно стоит помещение.
                </div>
            </div>
        </section>
    )
}
