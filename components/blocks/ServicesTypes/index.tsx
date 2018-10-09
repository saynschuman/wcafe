import * as React from 'react'

export const ServicesTypes: React.SFC = () => {
  return (
    <div>
      <section className='services-types'>
        <div className='container services-types-list'>
          <div className='services-type rent-space'>
            <i className='rent services-type-icon' />
            <span className='services-type-title'>
              Хочу снять/купить
              <br /> помещение
            </span>
          </div>
          <div className='services-type pass-space'>
            <i className='pass services-type-icon' />
            <span className='services-type-title'>
              Сдать в аренду или продать помещение, бизнес
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
