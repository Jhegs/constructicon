import merge from 'lodash/merge'

export default ({ props, traits }) => {
  const {
    mediaQuery,
    rhythm,
    scale,
    transitions
  } = traits

  const {
    toggled,
    styles = {}
  } = props

  const defaultStyles = {
    form: {
      maxWidth: rhythm(32),
      padding: rhythm(0.5),
      margin: '0 auto',

      [mediaQuery('sm')]: {
        display: 'flex',
        alignItems: 'center',
        flexPack: 'center',
        justifyContent: 'center'
      }
    },

    field: {
      position: 'relative',
      marginRight: rhythm(1),
      flex: 1,
      transition: transitions.easeOut
    },

    input: {
      paddingTop: rhythm(0.5),
      paddingBottom: rhythm(0.5),
      fontSize: scale(2),
      opacity: 0,
      transition: transitions.easeOut,
      ...toggled && {
        width: '100%',
        opacity: 1
      }
    },

    label: {
      transform: `translateY(${rhythm(1)})`,
      fontSize: scale(2),
      whiteSpace: 'nowrap',
      transition: transitions.easeOut,
      ...toggled && {
        transform: 'translateY(0)',
        fontSize: scale(-1),
        marginTop: '0.6rem'
      }
    },

    results: {
      maxWidth: rhythm(32),
      paddingTop: rhythm(1),
      margin: '0 auto'
    }
  }

  return merge(defaultStyles, styles)
}
