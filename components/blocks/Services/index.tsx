import * as React from 'react';

export const Services: React.SFC = () => {
  return (
    <div>
      <section className="services">
        <div className="container">
          <div className="services-list">
            <div className="services-subsection rent">
              <div className="services-subsection-title">Аренда</div>
              <div className="services-item place-for-restaurant">
                <div className="services-info">
                  <div className="services-title">Помещение под рестораны</div>
                  <div className="services-descr">
                    В эту категорию относятся помещения в которых нет мебели и
                    оборудования.
                  </div>
                </div>
              </div>
              <div className="services-item restaurant-active">
                <div className="services-info">
                  <div className="services-title">Готовые рестораны</div>
                  <div className="services-descr">
                    В эту категорию относятся помещения в которых нет мебели и
                    оборудования.
                  </div>
                </div>
              </div>
              <div className="services-item dining-rooms">
                <div className="services-info">
                  <div className="services-title">Столовые на предприятиях</div>
                  <div className="services-descr">
                    В эту категорию относятся помещения в которых нет мебели и
                    оборудования.
                  </div>
                </div>
              </div>
            </div>
            <div className="services-subsection place">
              <div className="services-subsection-title">
                Покупка помещения в собственность
              </div>
              <div className="services-item place-restaurant-active">
                <div className="services-info">
                  <div className="services-title">Готовый ресторан</div>
                  <div className="services-descr">
                    В эту категорию относятся помещения в которых нет мебели и
                    оборудования.
                  </div>
                </div>
              </div>
              <div className="services-item place-free">
                <div className="services-info">
                  <div className="services-title">
                    Помещение свободного назначения
                  </div>
                  <div className="services-descr">
                    В эту категорию относятся помещения в которых нет мебели и
                    оборудования.
                  </div>
                </div>
              </div>
            </div>
            <div className="services-subsection biz">
              <div className="services-subsection-title">Покупка бизнеса</div>
              <div className="services-item biz-buy">
                <div className="services-info">
                  <div className="services-title">Покупка бизнеса</div>
                  <div className="services-descr">
                    В эту категорию относятся помещения в которых нет мебели и
                    оборудования.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
