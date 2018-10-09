import * as React from 'react'
import ItemDescription from '../../common/ItemDescription'
import MobileCaption from '../../blocks/MobileCaption'
import { Galery } from '../../common/Galery'
import Filter from '../../common/Filter'
import { Article } from '../../../reducers/types'

interface OwnProps {
  articles: Article[]
  isLoading: boolean
  isLoaded: boolean
}

class PropertyList extends React.Component<OwnProps> {
  render(): JSX.Element {
    return (
      <section className='list-search'>
        <div className='container list-search-container'>
          <button
            className='filter-button filter-show-button mobile-show'
            type='submit'
          >
            Открыть фильтр
          </button>

          <section className='objects-list'>
            {this.props.isLoading && (
              <img
                style={{ width: 300, display: 'block', margin: '0 auto' }}
                src='/static/img/loader2.gif'
                alt=''
              />
            )}
            {this.props.isLoaded && this.props.articles.length === 0
              ? 'Совпадений не найдено...'
              : this.props.isLoaded &&
                this.props.articles.map((obj) => {
                  return (
                    <div key={obj.id} className='objects-item'>
                      <MobileCaption obj={obj} />
                      <a className='item-img img-desctop'>
                        <Galery images={obj.images} />
                      </a>
                      <ItemDescription obj={obj} />
                    </div>
                  )
                })}
          </section>
          <Filter />
        </div>
      </section>
    )
  }
}

export default PropertyList
