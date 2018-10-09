import React from 'react'
import Layout from '../components/Layout/Layout'
import SmallHeader from '../components/blocks/headers/SmallHeader'
import CardItem from '../components/blocks/CardItem'
import { withRouter } from 'next/router'
import { getArticleFunc } from '../backend/tmp_api'
import { Article } from '../reducers/types'

interface OwnProps {
  article: Article
}

class Card extends React.Component<OwnProps> {
  static async getInitialProps(context) {
    const { id } = context.query
    const article = await getArticleFunc(id)
    return { article }
  }
  render(): JSX.Element {
    return (
      <Layout>
        <SmallHeader />
        <CardItem uniqueArticle={this.props.article} />
      </Layout>
    )
  }
}

export default withRouter(Card)
