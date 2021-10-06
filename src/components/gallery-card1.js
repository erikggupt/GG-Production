import { h } from 'preact'

import PropTypes from 'prop-types'

import styles from './gallery-card1.css'

const GalleryCard1 = (props) => {
  return (
    <div class={styles['GalleryCard']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        class={styles['image']}
      />
      <h2 class={styles['text']}>{props.title}</h2>
      <span class={styles['text1']}>{props.subtitle}</span>
    </div>
  )
}

GalleryCard1.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
  subtitle: 'Lorem ipsum dolor sit amet',
  rootClassName: '',
  image_alt: 'image',
  title: 'Project Title',
}

GalleryCard1.propTypes = {
  image_src: PropTypes.string,
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
}

export default GalleryCard1
