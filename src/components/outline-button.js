import { h } from 'preact'

import PropTypes from 'prop-types'

import projectStyles from '../routes/style.css'
import styles from './outline-button.css'

const OutlineButton = (props) => {
  return (
    <div class={styles['container']}>
      <button
        class={` ${styles['button']} ${projectStyles['button']} ${projectStyles['button']} `}
      >
        {props.ACCESEAZA}
      </button>
    </div>
  )
}

OutlineButton.defaultProps = {
  ACCESEAZA: 'ACCESS',
}

OutlineButton.propTypes = {
  ACCESEAZA: PropTypes.string,
}

export default OutlineButton
