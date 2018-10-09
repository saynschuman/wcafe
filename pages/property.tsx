import React from 'react'
import Layout from '../components/Layout/Layout'
import SmallHeader from '../components/blocks/headers/SmallHeader'
import { connect } from 'react-redux'
import { filterArticlesFunc } from '../backend/tmp_api'
import PropertyList from '../components/blocks/PropertyList'
import { ReduxState, Article } from '../reducers/types'
interface StateProps {
  articles: Article[]
  isLoading: boolean
  isLoaded: boolean
}

interface OwnProps {
  articles: Article[]
}

type Props = StateProps & OwnProps

class Property extends React.Component<Props> {
  static async getInitialProps(context) {
    const hash = JSON.stringify(context.query)
    const loadServerArticles = await filterArticlesFunc(hash)
    context.store.dispatch({
      type: 'GET_DATA_SUCCESS',
      payload: {
        items: loadServerArticles,
      },
    })
    return {}
  }
  render(): JSX.Element {
    return (
      <Layout>
        <SmallHeader />
        <PropertyList
          isLoading={this.props.isLoading}
          isLoaded={this.props.isLoaded}
          articles={this.props.articles}
        />
      </Layout>
    )
  }
}

const mapStatetoProps = (state: ReduxState): StateProps => {
  return {
    articles: state.articles.items,
    isLoading: state.articles.isLoading,
    isLoaded: state.articles.isLoaded,
  }
}

export default connect<Props>(mapStatetoProps)(Property)
