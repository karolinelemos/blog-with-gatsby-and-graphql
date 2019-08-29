import React from 'react'
import PropTypes from 'prop-types'
import AniLink from "gatsby-plugin-transition-link/Anilink"

import getThemeColor from "../../utils/get_theme_color"
import * as S from './styled'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage}) => (
  <S.PaginationWrapper>
    {!isFirst && 
      <AniLink to={prevPage} cover direction="left" bg={getThemeColor()} duration={0.6} activeClassName="actsive">
        ← página anterior
      </AniLink>}
    <p>
      {currentPage} de {numPages}
    </p>
    {!isLast && 
      <AniLink to={nextPage} cover direction="right" bg={getThemeColor()} duration={0.6}>
        proxima página →
      </AniLink>}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string
}

export default Pagination