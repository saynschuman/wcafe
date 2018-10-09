import * as React from "react"

export const AboutServices: React.SFC = () => {
    return (
        <section className="about-services">
            <div className="about-services-title">Мир кафе так же является Управляющей компанией.</div>
            <div className="about-services-descr">Мы решаем следующие задачи</div>
            <div className="about-services-list">
                <div className="about-services-item hand-icon">
                    <b>Контроль своевременной оплаты аренды, коммунальных услуг</b>
                    <p>Вы получаете профессиональное юредическое сопровождение</p>
                </div>
                <div className="about-services-item list-icon">
                    <b>Полный контроль над помещением</b>
                    <p>Жалобы соседей<br />
                        Вопросы ЖКХ<br />
                        Вопросы арендатора
                    </p>
                </div>
                <div className="about-services-item search-icon">
                    <b>Поиски арендатора</b>
                    <p>Оценка ликвидности помещения, размещение на рекоамных
                        площадках, умение работать конфиденциально.</p>
                </div>
            </div>
        </section>
    )
}
