import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { loadNewArticles } from '../../../actions/articles'
import { RouterQuery } from '../../../reducers/types'

interface OwnProps {
  length: number
  router?: any
}

interface DispatchProps {
  loadNewArticles: (hash: string) => void
}

interface OwnStateProps {
  regions: number[]
  url: RouterQuery
  square_from: string
  square_to: string
  price_from: string
  price_to: string
  power: string
  extract: boolean
  muzic: boolean
  elec: boolean
  furniture: boolean
}

type Props = OwnProps & DispatchProps

class Filter extends React.Component<Props, OwnStateProps> {
  state = {
    regions: [1],
    url: this.props.router.query,
    square_from: '',
    square_to: '',
    price_from: '',
    price_to: '',
    power: '',
    extract: false,
    muzic: false,
    elec: false,
    furniture: false,
  }
  componentDidMount() {
    Object.keys(this.props.router.query).map((key: string) => {
      if (key !== undefined) {
        return this.setState({
          [key]: this.props.router.query[key],
        } as Pick<OwnStateProps, keyof OwnStateProps>)
      }
    })
  }
  handleHash = (data: any, value: any, id: string) => {
    this.setState({
      [id]: value,
    } as Pick<OwnStateProps, keyof OwnStateProps>)
    Object.assign(this.state.url, data)
    const fullUrl = []
    Object.keys(this.state.url).map((key) => {
      fullUrl.push(`${key}=${this.state.url[key]}`)
    })
    window.history.pushState('', '', `/property?${fullUrl.join('&')}`)
    this.props.loadNewArticles(fullUrl.join('&'))
  }
  addRegion = (e) => {
    e.preventDefault()
    this.setState({
      regions: this.state.regions.concat(this.state.regions[0]),
    })
  }
  render(): JSX.Element {
    return (
      <div className='filter'>
        <form className='filter-form'>
          <div className='filter-form-title'>Поиск объектов</div>
          <label className='filter-label' htmlFor='type'>
            Тип
          </label>
          <div className='filter-line'>
            <select
              className='filter-field'
              id='type'
              onChange={(e) =>
                this.handleHash(
                  { type: e.target.value },
                  e.target.value,
                  'type',
                )
              }
              value={this.props.router.query.type}
            >
              <option value='Любой'>Любой</option>
              <option value='Долго'>Долго</option>
            </select>
          </div>
          <label className='filter-label' htmlFor='location'>
            Район
          </label>
          <div className='filter-line'>
            <select
              className='filter-field'
              id='location'
              name='location'
              onChange={(e) =>
                this.handleHash(
                  { location: e.target.value },
                  e.target.value,
                  'location',
                )
              }
              value={this.props.router.query.location}
            >
              <option value='Любой'>Любой</option>
              <option value='Район'>Район</option>
            </select>
            <button onClick={this.addRegion} className='filter-add-btn'>
              +
            </button>
          </div>
          <div>
            {this.state.regions.map((region, index) => {
              const newRegion = `region_${index + 1}`
              return (
                <input
                  key={index}
                  type='text'
                  id={`region_${index}`}
                  placeholder={`Введите район ${index + 1}`}
                  className={`filter-field location ${region}`}
                  onChange={(e) =>
                    this.handleHash(
                      { [newRegion]: e.target.value },
                      e.target.value,
                      `region_${index}`,
                    )
                  }
                />
              )
            })}
          </div>
          <span className='filter-label'>Площадь</span>
          <div className='filter-line'>
            <input
              className='filter-field filter-input'
              type='text'
              id='square_from'
              placeholder='от'
              onChange={(e) =>
                this.handleHash(
                  { square_from: e.target.value },
                  e.target.value,
                  'square_from',
                )
              }
              value={this.state.square_from}
            />
            <input
              className='filter-field filter-input'
              type='text'
              id='square_to'
              placeholder='до'
              onChange={(e) =>
                this.handleHash(
                  { square_to: e.target.value },
                  e.target.value,
                  'square_to',
                )
              }
              value={this.state.square_to}
            />
            <span className='filter-unit'>м2</span>
          </div>
          <span className='filter-label'>Цена</span>
          <div className='filter-line'>
            <input
              className='filter-field filter-input'
              type='text'
              id='price_from'
              placeholder='от'
              onChange={(e) =>
                this.handleHash(
                  { price_from: e.target.value },
                  e.target.value,
                  'price_from',
                )
              }
              value={this.state.price_from}
            />
            <input
              className='filter-field filter-input'
              type='text'
              id='price_to'
              placeholder='до'
              onChange={(e) =>
                this.handleHash(
                  { price_to: e.target.value },
                  e.target.value,
                  'price_to',
                )
              }
              value={this.state.price_to}
            />
            <span className='filter-unit'>руб.</span>
          </div>
          <span className='filter-label'>Мощность</span>
          <div className='filter-line'>
            <input
              className='filter-field filter-input'
              type='text'
              id='power'
              placeholder='от'
              onChange={(e) =>
                this.handleHash(
                  { power: e.target.value },
                  e.target.value,
                  'power',
                )
              }
              value={this.state.power}
            />
            <span className='filter-unit space-left'>кВт</span>
            <span className='filter-empty-space' />
          </div>
          <div className='filter-line-check'>
            <input
              type='checkbox'
              id='extract'
              value='extract'
              className='filter-checkbox'
              checked={Boolean(this.state.extract)}
              onChange={(e) =>
                this.handleHash(
                  { extract: e.target.checked },
                  e.target.checked,
                  'extract',
                )
              }
            />
            <label htmlFor='extract' className='filter-checkbox-label'>
              Вытяжка
            </label>
          </div>
          <div className='filter-line-check'>
            <input
              type='checkbox'
              id='muzic'
              value='muzic'
              className='filter-checkbox'
              checked={Boolean(this.state.muzic)}
              onChange={(e) =>
                this.handleHash(
                  { muzic: e.target.checked },
                  e.target.checked,
                  'muzic',
                )
              }
            />
            <label htmlFor='muzic' className='filter-checkbox-label'>
              Громкая музыка
            </label>
          </div>
          <div className='filter-line-check'>
            <input
              type='checkbox'
              id='elec'
              value='elec'
              className='filter-checkbox'
              checked={Boolean(this.state.elec)}
              onChange={(e) =>
                this.handleHash(
                  { elec: e.target.checked },
                  e.target.checked,
                  'elec',
                )
              }
            />
            <label htmlFor='elec' className='filter-checkbox-label'>
              Оборудование
            </label>
          </div>
          <div className='filter-line-check'>
            <input
              type='checkbox'
              id='furniture'
              value='furniture'
              className='filter-checkbox'
              checked={Boolean(this.state.furniture)}
              onChange={(e) =>
                this.handleHash(
                  { furniture: e.target.checked },
                  e.target.checked,
                  'furniture',
                )
              }
            />
            <label htmlFor='furniture' className='filter-checkbox-label'>
              Мебель
            </label>
          </div>
          <div className='mobile-show filter-search-result'>
            Найдено {this.props.length} объектов
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch): DispatchProps => {
  return {
    loadNewArticles: (hash) => dispatch(loadNewArticles(hash)),
  }
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(Filter),
)
