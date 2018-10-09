import * as React from 'react'
import Link from 'next/link'

export interface ItemDescriptionProps {
  obj: any
}

const propConvert = (name: string, value: string): JSX.Element => {
  if (value !== 'false') {
    return (
      <div className='item-info-row'>
        <span className='item-info-name'>{name}:</span>
        <span className='item-info-value'>{value}</span>
      </div>
    )
  } else return null
}

class ItemDescription extends React.Component<ItemDescriptionProps> {
  render() {
    return (
      <div className='item-description'>
        <Link href={`/card?id=${this.props.obj.id}`}>
          <a className='item-caption'>
            <span className='item-caption-text crop-text'>
              {this.props.obj.rent.title}
            </span>
            <div className='item-caption-price'>
              <span className='item-caption-amount'>
                {this.props.obj.rent.price} руб/мес
              </span>
              <span className='item-caption-number'>№{this.props.obj.id}</span>
            </div>
          </a>
        </Link>
        <div className='item-descr'>
          <p>
            {this.props.obj.rent.short_description
              .replace(/<\s*\/?\s*br\s*.*?>/g, '\n')
              .replace('<b>', '')
              .replace('</b>', '')}
          </p>
          <div className='item-info'>
            <div className='item-info-column'>
              {propConvert(
                'Район',
                this.props.obj.district
                  ? this.props.obj.district.title
                  : 'false',
              )}
              {propConvert(
                'Этаж',
                this.props.obj.floor ? this.props.obj.floor.title : 'false',
              )}
              {propConvert('Площадь', this.props.obj.square.toString() + ' м2')}
            </div>
            <div className='item-info-column'>
              {this.props.obj.rent.furniture &&
                propConvert(
                  'Оборудование',
                  this.props.obj.rent.furniture.title,
                )}
              {propConvert(
                'Мощность',
                this.props.obj.power.toString() + ' кВт +газ',
              )}
            </div>
            <div className='item-info-column item-info-column-hidden'>
              {this.props.obj.rent.furniture &&
                propConvert('Мебель', this.props.obj.rent.furniture.title)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemDescription
