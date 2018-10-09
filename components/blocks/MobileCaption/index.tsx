import * as React from 'react'
import { Galery } from '../../common/Galery'
import Link from 'next/link'

interface CardItemProps {
  obj: any
}

class MobileCaption extends React.PureComponent<CardItemProps> {
  render() {
    return (
      <div className={'mobile-capt"'}>
        <Link href={`/card?id=${this.props.obj.id}`}>
          <a className='item-caption mobile-info-show'>
            <span className='item-caption-text crop-text'>
              {this.props.obj.rent.title}
            </span>
            <div className='item-caption-price'>
              <span className='item-caption-amount'>
                {this.props.obj.rent.price} руб
              </span>
              <span className='item-caption-number'>№{this.props.obj.id}</span>
            </div>
          </a>
        </Link>
        <Link href={`/card?id=${this.props.obj.id}`}>
          <a className='item-img'>
            <Galery images={this.props.obj.images} />
          </a>
        </Link>
      </div>
    )
  }
}

export default MobileCaption
