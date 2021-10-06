import { h } from 'preact'

import PropTypes from 'prop-types'

import projectStyles from '../routes/style.css'
import styles from './solid-button.css'

const SolidButton = (props) => {
  return (
    <div class={styles['container']}>
      <button
        class={` ${styles['button']} ${projectStyles['button']} ${projectStyles['button']} `}
      >
        {props.REZERVA}
      </button>
    </div>
  )
}

SolidButton.defaultProps = {
  REZERVA: 'RESERVE NOW',
}

SolidButton.propTypes = {
  REZERVA: PropTypes.string,
}

export default SolidButton
