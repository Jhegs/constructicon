import React, { PropTypes } from 'react'
import { withStyles } from '../../lib/css'
import options from '../../lib/traits/options'
import styles from './styles'
import template from 'lodash/template'

const altTemplate = (str, progress) => {
  const compileTemplate = template(str)
  return compileTemplate({ progress })
}

const ProgressBar = ({
  classNames,
  alt,
  progress = 0
}) => (
  <div className={classNames.background}>
    <div className={classNames.fill} />
    <div className={classNames.alt}>
      {altTemplate(alt, progress)}
    </div>
  </div>
)

ProgressBar.propTypes = {
  /**
   * The alt text for the progress bar. Takes a `progress` value in a valid [Lodash Template](https://lodash.com/docs/4.17.4#template). E.g. `'<%= progress %>% there'`
  */
  alt: PropTypes.string.isRequired,

  /**
  * The progress amount (percentage)
  */
  progress: PropTypes.number.isRequired,

  /**
  * The fill color of the progress bar -
  */
  fill: PropTypes.oneOf(options.colors),

  /**
  * The background color of the progress bar -
  */
  background: PropTypes.oneOf(options.colors),

  /**
  * The border radius of the progress bar -
  */
  radius: PropTypes.oneOf(options.radiuses),

  /**
  * Custom styles to be applied to the progress bar
  */
  styles: PropTypes.object
}

ProgressBar.defaultProps = {
  fill: 'primary',
  background: 'lightGrey',
  radius: 'small',
  styles: {}
}

export default withStyles(styles)(ProgressBar)
