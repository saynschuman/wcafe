import {
  allFilteredArticles,
  singleArticleList,
  locationArticles,
  typeArticles,
  elecArticles,
  muzicArticles,
  furnitureArticles,
  extractArticles,
} from './mocks'

export const getArticleFunc = (id) => {
  return singleArticleList[id]
}

export const filterArticlesFunc = (filter) => {
  if (filter.indexOf('Район') !== -1) {
    return locationArticles
  }
  if (filter.indexOf('Долго') !== -1) {
    return typeArticles
  }
  if (filter.indexOf('muzic') !== -1) {
    return muzicArticles
  }
  if (filter.indexOf('elec') !== -1) {
    return elecArticles
  }
  if (filter.indexOf('furniture') !== -1) {
    return furnitureArticles
  }
  if (filter.indexOf('extract') !== -1) {
    return extractArticles
  }
  if (
    filter.indexOf('square_from') !== -1 ||
    filter.indexOf('square_to') !== -1 ||
    filter.indexOf('price_from') !== -1 ||
    filter.indexOf('power') !== -1 ||
    filter.indexOf('region') !== -1
  ) {
    return []
  } else {
    return allFilteredArticles
  }
}
