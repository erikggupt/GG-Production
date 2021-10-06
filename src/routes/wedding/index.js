import { h } from 'preact'
import { Link } from 'preact-router/match'

import { Helmet } from 'react-helmet'

import SolidButton from '../../components/solid-button'
import projectStyles, { styles } from './style.css'

const Wedding = () => {
  return (
    <div class={styles['container']}>
      <Helmet>
        <title>Wedding - GG Production</title>
        <meta property="og:title" content="Wedding - GG Production " />
      </Helmet>
      <div class={styles['Top-container']}>
        <nav class={styles['Navbar']}>
          <div class={styles['container1']}>
            <Link href="/" class={styles['navlink']}>
              <img
                alt="image"
                src="/assets/playground_assets/watermark%20-%20long%20-%20center%20-%20white-1000h.png"
                class={` ${styles['image']} ${projectStyles['thqLink']} `}
              />
            </Link>
          </div>
          <div class={styles['Links-container']}>
            <Link
              href="/"
              class={` ${styles['navlink1']} ${projectStyles['thqLink']} `}
            >
              HOME
            </Link>
            <span class={styles['text']}>WEDDING</span>
            <Link
              href="/cinema"
              class={` ${styles['navlink2']} ${projectStyles['thqLink']} `}
            >
              CINEMA
            </Link>
            <Link
              href="/prices"
              class={` ${styles['navlink3']} ${projectStyles['thqLink']} `}
            >
              PRICING
            </Link>
            <span class={styles['text1']}>CONTACT</span>
          </div>
          <div class={styles['Right-side']}>
            <img
              alt="image"
              src="/assets/playground_assets/ggtv_logo%20white-1000h.png"
              class={styles['image1']}
            />
            <Link href="/reserve-now" class={styles['navlink4']}>
              <SolidButton
                REZERVA="RESERVE NOW"
                class={` ${styles['component']} ${projectStyles['thqLink']} `}
              ></SolidButton>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Wedding
