import merge from 'lodash/merge'

export default (props, traits) => {
  const {
    colors,
    rhythm,
    styles
  } = traits

  const {
    color
  } = props

  const defaultStyles = {
    pagination: {
      position: 'absolute',
      bottom: rhythm(0.5),
      left: '20%',
      right: '20%',
      textAlign: 'center',
      'svg': {
        margin: '0 .5em',
        fill: colors.color
      }
    },
    paginationLink: {
      display: 'inline-block',
      cursor: 'pointer'
    },
    disabled: {
      opacity: 0.25,
      pointerEvents: 'none'
    }
  }

  return merge(defaultStyles, styles)
}
