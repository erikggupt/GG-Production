import { h } from 'preact'
import { Link } from 'preact-router/match'

import { Helmet } from 'react-helmet'

import SolidButton from '../../components/solid-button'
import projectStyles, { styles } from './style.css'

const ReserveNow = () => {
  return (
    <div class={styles['container']}>
      <Helmet>
        <title>Reserve Now - GG Production</title>
        <meta property="og:title" content="Reserve Now - GG Production " />
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
            <a href="#main-section" class={styles['link']}>
              <SolidButton
                REZERVA="RESERVE NOW"
                class={projectStyles['thqLink']}
              ></SolidButton>
            </a>
          </div>
        </nav>
        <h1 class={styles['text2']}>RESERVE NOW</h1>
      </div>
      <div class={styles['container2']}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdnlS7bwaWtPPoC1UhnxfSG5vp_-KibfqDTSkk-Jjv9r_FqPw/viewform?embedded=true"
          class={styles['iframe']}
        ></iframe>
      </div>
    </div>
  )
}

export default ReserveNow
