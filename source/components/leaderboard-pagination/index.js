import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '../../lib/css'
import styles from './styles'

import Icon from '../icon'

const LeaderboardPagination = ({
  prevPage,
  nextPage,
  classNames,
  hasNextPage,
  currentPage
}) => (
  <div className={classNames.pagination}>
    <button onClick={prevPage} className={`${classNames.paginationLink} ${currentPage <= 1 && classNames.disabled}`}>
      <Icon name='chevron' rotate={180} size={1} />
    </button>
    <button onClick={nextPage} className={`${classNames.paginationLink} ${!hasNextPage() && classNames.disabled}`}>
      <Icon name='chevron' size={1} />
    </button>
  </div>
)


LeaderboardPagination.propTypes = {
  /**
  * The number of records to show per page
  */
  pageSize: PropTypes.number,

  /**
  * The function to invoke when next page button is clicked
  */
  nextPage: PropTypes.func.required,

  /**
  * The function to invoke when previous page button is clicked
  */
  prevPage: PropTypes.func.required,

  /**
  * The array of leaders to be paginated
  */
  leaders: PropTypes.array.required,

  /**
  * The current page of paginated leaderboard
  */
  currentPage: PropTypes.number.required
}


LeaderboardPagination.defaultProps = {
  pageSize: 10
}

export default withStyles(styles)(LeaderboardPagination)


