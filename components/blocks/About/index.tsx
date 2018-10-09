import * as React from 'react'

export const About: React.SFC = () => {
  return (
    <section className='about'>
      <div className='container about-container'>
        <div className='about-img-right'>
          <img className='about-logo' src='/static/img/about/logo.png' />
        </div>
        <div className='about-text-left'>
          <p>
            - лидер рынка по аренде, продаже и управлению коммерческой
            <br /> недвижимостью в сфере ресторанного бизнеса.
          </p>
          <p>
            Оказываем любую юридическую поддержку рестораторам,
            <br />в том числе получение лицензии на алкоголь <br />и регистрацию
            договора аренды в УФРС.
          </p>
        </div>
      </div>
    </section>
  )
}
