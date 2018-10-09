import * as React from 'react'
import Slider from 'react-slick'
import { Article } from '../../../reducers/types'

interface CardItemProps {
  uniqueArticle: Article
}

const propConvert = (
  name: string,
  value: string,
  icon: string,
): JSX.Element => {
  if (value === 'false') return null
  if (icon === '0') {
    return (
      <div className={'card-info-row small-pad'}>
        <div className={'card-info-cell no-pad'}>
          <span className={'card-info-cell-name'}>{name}:</span>
        </div>
        <div className={'card-info-cell no-pad'}>
          <span className={'card-info-cell-value'}>{value}</span>
        </div>
      </div>
    )
  } else if (icon === '1') {
    return (
      <div className={'card-info-cell'}>
        <span className={'card-info-cell-name'}>{name}:</span>
        <span className={'card-info-cell-value'}>{value}</span>
      </div>
    )
  } else if (value !== 'false') {
    return (
      <div className={'card-info-cell'}>
        <i className={'card-info-icon icon'} />
        <span className={'card-info-cell-name'}>{name}:</span>
        <span className={'card-info-cell-value'}>{value}</span>
      </div>
    )
  } else return null
}

class CardItem extends React.PureComponent<CardItemProps> {
  render(): JSX.Element {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const { uniqueArticle } = this.props
    return (
      <section className='card'>
        <div className='card-call-order'>
          Заинтересовало предложение?
          <b>Закажите обратный звонок</b>
        </div>
        <div className='card-container'>
          <div className='card-details'>
            <div className='card-title'>
              {uniqueArticle.rent.title}{' '}
              <span className='card-num'>№{uniqueArticle.id}</span>
            </div>
            <div className='card-slider'>
              <Slider {...settings}>
                {uniqueArticle.images.map((image) => (
                  <div key={image.id}>
                    <div
                      className={'card-img'}
                      style={{ backgroundImage: `url(${image.image})` }}
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className='card-info card-info-show'>
              <div className='card-info-price'>
                {uniqueArticle.rent.price} руб/мес
              </div>
              <div className='card-union-mobile'>
                <div className='card-info-row small-pad'>
                  <div className='card-info-cell no-pad'>
                    <span className='card-info-cell-name'>Район:</span>
                  </div>
                  <div className='card-info-cell no-pad'>
                    <span className='card-info-cell-value'>
                      {uniqueArticle.district && uniqueArticle.district.title}
                    </span>
                  </div>
                </div>
                <div className='card-info-row small-pad'>
                  <div className='card-info-cell no-pad'>
                    <span className='card-info-cell-name'>Категория:</span>
                  </div>
                  <div className='card-info-cell no-pad'>
                    <span className='card-info-cell-value'>
                      {uniqueArticle.rent.rent_type.title}
                    </span>
                  </div>
                </div>
              </div>
              <div className='card-info-row card-union-mobile'>
                <div className='card-info-cell'>
                  <i className='card-info-icon icon-dining-room' />
                  <span className='card-info-cell-name'>
                    Столовая
                    <br /> на предприятии
                  </span>
                </div>
                <div className='card-info-cell'>
                  <i className='card-info-icon icon-dining-room' />
                  <span className='card-info-cell-name'>
                    Отдельное
                    <br /> здание
                  </span>
                </div>
              </div>
              <hr className='card-info-row-separator' />
              <div className='card-info-row card-info-row-union'>
                {/*<i className="card-info-icon icon-size" />*/}
                <div className='card-info-cell'>
                  <span className='card-info-cell-name'>Общая площадь:</span>
                  <span className='card-info-cell-value'>
                    {uniqueArticle.square.toString()} м2
                  </span>
                </div>
                {uniqueArticle.square_kitchen && (
                  <div className='card-info-cell'>
                    <span className='card-info-cell-name'>Площадь кухни:</span>
                    <span className='card-info-cell-value'>
                      {uniqueArticle.square_kitchen.toString()} м2
                    </span>
                  </div>
                )}
              </div>
              <hr className='card-info-row-separator' />
              <div className={'card-info-row'}>
                {propConvert(
                  'Этаж',
                  uniqueArticle.floor ? uniqueArticle.floor.title : 'false',
                  'icon-floor',
                )}
                {propConvert(
                  'Потолок',
                  uniqueArticle.ceil_height
                    ? uniqueArticle.ceil_height.toString() + ' м'
                    : 'false',
                  'icon-roof',
                )}
              </div>
              <div className={'card-info-row'}>
                {propConvert(
                  'Мощность',
                  uniqueArticle.power.toString() + ' кВт',
                  'icon-elec',
                )}
              </div>
              <div className={'card-info-row'}>
                <div className={'card-info-cell'}>
                  <i className={'card-info-icon icon icon-volume'} />
                  <span className={'card-info-cell-name'}>Громкая музыка:</span>
                  <span className={'card-info-cell-value'}>
                    {uniqueArticle.id}
                  </span>
                </div>
                {propConvert(
                  'Оборудование',
                  uniqueArticle.rent.equipment
                    ? uniqueArticle.rent.equipment.title
                    : 'false',
                  'icon-elec',
                )}
              </div>
              <div className={'card-info-row'}>
                <div className={'card-info-cell'} />
                {propConvert(
                  'Мебель',
                  uniqueArticle.rent.furniture
                    ? uniqueArticle.rent.furniture.title
                    : 'false',
                  'icon-furniture',
                )}
              </div>
              <hr className='card-info-row-separator' />
              <div className='card-info-row'>
                <span className='card-info-subtitle'>
                  {/*<i className="card-info-icon icon-fin" />*/}
                  Условия и финансовые показатели:
                </span>
              </div>
              <div className={'card-info-row small-pad'}>
                <div className={'card-info-cell'}>
                  <span className={'card-info-cell-name'}>
                    Стоимость квадратного метра:
                  </span>
                  <span className={'card-info-cell-value'}>
                    {uniqueArticle.rent.price_square} руб/мес
                  </span>
                </div>
                <div className={'card-info-cell'}>
                  <span className={'card-info-cell-name'}>
                    Стоимость аренды:
                  </span>
                  <span className={'card-info-cell-value'}>
                    {uniqueArticle.rent.price} руб/мес
                  </span>
                </div>
              </div>
              <div className={'card-info-row small-pad'}>
                <div className={'card-info-cell'}>
                  <span className={'card-info-cell-name'}>Комиссионные:</span>
                  <span className={'card-info-cell-value'}>
                    {uniqueArticle.rent.tax} руб
                  </span>
                </div>
              </div>
            </div>
            <p>
              {uniqueArticle.rent.description.replace(
                /<\s*\/?\s*br\s*.*?>/g,
                '\n',
              )}
            </p>
            <div className='card-profits-list card-mobile-hidden'>
              <div className='card-profits-item icon-plus-1'>
                Получить лицензию на алкоголь и решить все возможные трудности
              </div>
              <div className='card-profits-item icon-plus-2'>
                Установить систему автоматизации по специальной цене
              </div>
              <div className='card-profits-item icon-plus-3'>
                Закупить оборудование у наших партнеров на особенных условиях
              </div>
            </div>
          </div>
          <div className='card-info card-mobile-hidden'>
            <div className='card-info-price'>
              {uniqueArticle.rent.price} руб/мес
            </div>
            <div className='card-union-mobile'>
              <div className='card-info-row small-pad'>
                <div className='card-info-cell no-pad'>
                  <span className='card-info-cell-name'>Район:</span>
                </div>
                <div className='card-info-cell no-pad'>
                  <span className='card-info-cell-value'>
                    {uniqueArticle.district && uniqueArticle.district.title}
                  </span>
                </div>
              </div>
              <div className='card-info-row small-pad'>
                <div className='card-info-cell no-pad'>
                  <span className='card-info-cell-name'>Категория:</span>
                </div>
                <div className='card-info-cell no-pad'>
                  <span className='card-info-cell-value'>
                    {uniqueArticle.rent.rent_type.title}
                  </span>
                </div>
              </div>
            </div>
            <div className='card-info-row card-union-mobile'>
              <div className='card-info-cell'>
                <i className='card-info-icon icon-dining-room' />
                <span className='card-info-cell-name'>
                  Столовая
                  <br /> на предприятии
                </span>
              </div>
              <div className='card-info-cell'>
                <i className='card-info-icon icon-dining-room' />
                <span className='card-info-cell-name'>
                  Отдельное
                  <br /> здание
                </span>
              </div>
            </div>
            <hr className='card-info-row-separator' />
            <div className='card-info-row card-info-row-union'>
              {/*<i className="card-info-icon icon-size" />*/}
              {uniqueArticle.square_kitchen && (
                <div className='card-info-cell'>
                  <span className='card-info-cell-name'>Площадь кухни:</span>
                  <span className='card-info-cell-value'>
                    {uniqueArticle.square_kitchen.toString()} м2
                  </span>
                </div>
              )}
              <div className='card-info-cell'>
                <span className='card-info-cell-name'>Общая площадь:</span>
                <span className='card-info-cell-value'>
                  {uniqueArticle.square.toString()} м2
                </span>
              </div>
            </div>
            <hr className='card-info-row-separator' />
            <div className={'card-info-row'}>
              {propConvert(
                'Этаж',
                uniqueArticle.floor ? uniqueArticle.floor.title : 'false',
                'icon-floor',
              )}
              {propConvert(
                'Потолок',
                uniqueArticle.ceil_height
                  ? uniqueArticle.ceil_height.toString() + ' м'
                  : 'false',
                'icon-roof',
              )}
            </div>
            <div className={'card-info-row'}>
              {propConvert(
                'Мощность',
                uniqueArticle.power.toString() + ' кВт',
                'icon-elec',
              )}
            </div>
            <div className={'card-info-row'}>
              <div className={'card-info-cell'}>
                <i className={'card-info-icon icon icon-volume'} />
                <span className={'card-info-cell-name'}>Громкая музыка:</span>
                <span className={'card-info-cell-value'}>
                  {uniqueArticle.id}
                </span>
              </div>
              {propConvert(
                'Оборудование',
                uniqueArticle.rent.equipment
                  ? uniqueArticle.rent.equipment.title
                  : 'false',
                'icon-elec',
              )}
            </div>
            <div className={'card-info-row'}>
              <div className={'card-info-cell'} />
              {propConvert(
                'Мебель',
                uniqueArticle.rent.furniture
                  ? uniqueArticle.rent.furniture.title
                  : 'false',
                'icon-furniture',
              )}
            </div>
            <hr className='card-info-row-separator' />
            <div className='card-info-row'>
              <span className='card-info-subtitle'>
                {/*<i className="card-info-icon icon-fin" />*/}
                Условия и финансовые показатели:
              </span>
            </div>
            <div className={'card-info-row small-pad'}>
              <div className={'card-info-cell'}>
                <span className={'card-info-cell-name'}>
                  Стоимость квадратного метра:
                </span>
                <span className={'card-info-cell-value'}>
                  {uniqueArticle.rent.price_square} руб/мес
                </span>
              </div>
              <div className={'card-info-cell'}>
                <span className={'card-info-cell-name'}>Стоимость аренды:</span>
                <span className={'card-info-cell-value'}>
                  {uniqueArticle.rent.price} руб/мес
                </span>
              </div>
            </div>
            <div className={'card-info-row small-pad'}>
              <div className={'card-info-cell'}>
                <span className={'card-info-cell-name'}>Комиссионные:</span>
                <span className={'card-info-cell-value'}>
                  {uniqueArticle.rent.tax} руб
                </span>
              </div>
            </div>
          </div>
          <div className='card-call-order-button card-mobile-show'>
            Заказать обратный звонок
          </div>
          <div className='card-profits-list card-mobile-show'>
            <div className='card-profits-item icon-plus-1'>
              Получить лицензию на алкоголь и решить все возможные трудности
            </div>
            <div className='card-profits-item icon-plus-2'>
              Установить систему автоматизации по специальной цене
            </div>
            <div className='card-profits-item icon-plus-3'>
              Закупить оборудование у наших партнеров на особенных условиях
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CardItem
