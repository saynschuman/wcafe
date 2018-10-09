import * as React from "react"

export const LegalFeatures: React.SFC = () => {
    return (
        <section className="legal-features">
            <div className="container legal-features-container">
                <div className="legal-features-text">
                    <div className="legal-features-caption">Знаем все юридические тонкости</div>
                    <p>для защиты интересов арендодателя и арендатора</p>
                </div>
                <div className="legal-features-img">
                    <img src="/static/img/about/ur-uslugi.png" />
                </div>
            </div>
        </section>
    )
}
