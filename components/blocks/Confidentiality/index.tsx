import * as React from "react"

export const Confidentiality: React.SFC = () => {
    return (
        <section className="confidentiality">
            <div className="container">
                <div className="confidentiality-title">По многим объектам работаем конфиденциально, в связи с тем,
                    что:
                </div>
                <div className="confidentiality-list">
                    <div className="confidentiality-item eye-icon">
                        Собственники не хотят открыто афишировать на рынке о предложении;
                    </div>
                    <div className="confidentiality-item cup-icon">
                        Большинство из наших предложений являются действующими точками питания,
                        сотрудники которых не должны знать о желании собственника сменить арендатора.
                    </div>
                </div>
            </div>
        </section>
    )
}
