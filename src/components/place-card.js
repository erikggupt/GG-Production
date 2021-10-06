import { h } from 'preact'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'
import styles from './place-card.css'

const PlaceCard = (props) => {
  return (
    <div class={styles['container']}>
      <img alt={props.image_alt} src={props.image} class={styles['image']} />
      <div class={styles['container1']}>
        <span class={styles['text']}>{props.titlu}</span>
        <span class={styles['text1']}>{props.description}</span>
        <OutlineButton ACCESEAZA="ACCESS"></OutlineButton>
      </div>
    </div>
  )
}

PlaceCard.defaultProps = {
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000',
  image_alt: 'image',
  titlu: 'City Name',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
}

PlaceCard.propTypes = {
  image: PropTypes.string,
  image_alt: PropTypes.string,
  titlu: PropTypes.string,
  description: PropTypes.string,
}

export default PlaceCard
