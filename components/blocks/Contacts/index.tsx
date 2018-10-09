import * as React from "react"

export const Contacts: React.SFC = () => {
    return (
        <section className="contacts">
            <div className="container">
                <div className="breadcrumbs">
                    <ul className="breadcrumbs-list">
                        <li className="breadcrumbs-item">
                            <a href="#" className="breadcrumbs-link">Главная</a>
                        </li>
                        <li className="breadcrumbs-item">
                            <span className="breadcrumbs-link">Контакты</span>
                        </li>
                    </ul>
                </div>
                <div className="contacts-title">Контакты</div>
                <div className="contacts-item contacts-adress">
                    <b>Офис:</b>
                    <p>г. Санкт-Петербург, Греческий проспект, дом 29</p>
                </div>
                <div className="contacts-item contacts-phone"><b>+7 (812) 640-80-18</b></div>
                <div className="contacts-item contacts-mail"><b>info@worldcafe.ru</b></div>
            </div>
        </section>
    )
}
