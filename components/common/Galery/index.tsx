import * as React from 'react'
import { Helmet } from 'react-helmet'
import { renderStyle } from './renderStyle'
import { Image } from '../../../reducers/types'

export interface GaleryProps {
  images?: Image[]
}

export const Galery: React.SFC<GaleryProps> = (props) => {
  const length = props.images.length
  return (
    <div className='item-slider-container'>
      {props.images.slice(0, 5).map((image) => (
        <span key={image.id} className={`item-slider-dot dot-${length}`} />
      ))}

      <Helmet>
        <style>{renderStyle(length)}</style>
      </Helmet>

      {length < 6 ? (
        <ul className='item-slider-list' style={{ width: `${length}00%` }}>
          {props.images.slice(0, 5).map((image) => (
            <li key={image.id} className='item-slider'>
              <div
                style={{ backgroundImage: `url(${image.image})` }}
                className={'img-item-slider'}
              />
            </li>
          ))}
        </ul>
      ) : (
        <ul className='item-slider-list'>
          {props.images.slice(0, 5).map((image, index) => (
            <li key={image.id} className='item-slider'>
              <div
                style={{ backgroundImage: `url(${image.image})` }}
                className={'img-item-slider'}
              />
              {index === 4 && (
                <div className='item-slider-more'>
                  Ещё
                  <br />
                  {length - 5} фото
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
      <span className='item-slider-counter'>
        <i className='icon-photo'>{length}</i>
      </span>
    </div>
  )
}
