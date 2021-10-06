import { h } from 'preact'
import { Link } from 'preact-router/match'

import { Helmet } from 'react-helmet'

import SolidButton from '../../components/solid-button'
import Video from '../../components/video'
import projectStyles, { styles } from './style.css'

const Cinema = () => {
  return (
    <div class={styles['container']}>
      <Helmet>
        <title>Cinema - GG Production</title>
        <meta property="og:title" content="Cinema - GG Production " />
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
        <h1 class={styles['text2']}>CINEMA</h1>
      </div>
      <div class={styles['container2']}>
        <div id="main-section" class={styles['Main']}>
          <h1>Latest Video Projects</h1>
          <span class={styles['text4']}>Recommended</span>
          <div class={styles['Cards-container']}>
            <a
              href="https://youtu.be/is5ALQZjXUU"
              target="_blank"
              rel="noreferrer noopener"
              class={styles['link01']}
            >
              <Video
                image="https://i.ibb.co/XtCs1Hb/play1.jpg"
                titlu="Marta &amp; Tamas "
                description=" "
                rootClassName="rootClassName"
                class={` ${styles['component1']} ${projectStyles['thqLink']} `}
              ></Video>
            </a>
            <a
              href="https://youtu.be/Dgiwfz5X-5o"
              target="_blank"
              rel="noreferrer noopener"
              class={styles['link02']}
            >
              <Video
                image="https://i.ibb.co/TW2T8Fr/play2.jpg"
                titlu="Ingrid &amp; Tamas "
                description=" "
                rootClassName="rootClassName1"
                class={` ${styles['component2']} ${projectStyles['thqLink']} `}
              ></Video>
            </a>
            <a
              href="https://youtu.be/TCDYLYomtQo"
              target="_blank"
              rel="noreferrer noopener"
              class={styles['link03']}
            >
              <Video
                image="https://i.ibb.co/g4QZ8xh/play3.jpg"
                titlu="Reka &amp; Levente"
                description=" "
                rootClassName="rootClassName2"
                class={` ${styles['component3']} ${projectStyles['thqLink']} `}
              ></Video>
            </a>
            <a
              href="https://youtu.be/bxl5FyVJG0s"
              target="_blank"
              rel="noreferrer noopener"
              class={styles['link04']}
            >
              <Video
                image="https://i.ibb.co/GcGNYv3/play4.jpg"
                titlu="Ionela &amp; Octavian"
                description=" "
                rootClassName="rootClassName3"
                class={` ${styles['component4']} ${projectStyles['thqLink']} `}
              ></Video>
            </a>
            <a
              href="https://youtu.be/3-hzDXB6l1Q"
              target="_blank"
              rel="noreferrer noopener"
              class={styles['link05']}
            >
              <Video
                image="https://i.ibb.co/fNQfPsK/play5.jpg"
                titlu="Barbara &amp; Lorand"
                description=" "
                rootClassName="rootClassName4"
                class={` ${styles['component5']} ${projectStyles['thqLink']} `}
              ></Video>
            </a>
            <a
              href="https://youtu.be/QCYZQ4-FJJk"
              target="_blank"
              rel="noreferrer noopener"
              class={styles['link06']}
            >
              <Video
                image="https://i.ibb.co/VS0Ytjz/play6.jpg"
                titlu="Ingrid &amp; Szabolcs"
                description=" "
                rootClassName="rootClassName5"
                class={` ${styles['component6']} ${projectStyles['thqLink']} `}
              ></Video>
            </a>
          </div>
        </div>
      </div>
      <div class={styles['Footer']}>
        <div class={styles['Menu']}>
          <img
            alt="image"
            src="/assets/playground_assets/watermark%20-%20long%20-%20center%20-%20white-1000h.png"
            image="/assets/playground_assets/watermark%20-%20long%20-%20center%20-%20white-1000h.png"
            class={styles['image2']}
          />
          <div class={styles['Links-container1']}>
            <div class={styles['container3']}>
              <Link
                href="/"
                class={` ${styles['navlink4']} ${projectStyles['thqLink']} `}
              >
                Home
              </Link>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                class={` ${styles['link07']} ${projectStyles['thqLink']} `}
              >
                Personalized offers
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                class={` ${styles['link08']} ${projectStyles['thqLink']} `}
              >
                Special deals
              </a>
            </div>
            <div class={styles['container4']}>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                class={` ${styles['link09']} ${projectStyles['thqLink']} `}
              >
                About us
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                class={` ${styles['link10']} ${projectStyles['thqLink']} `}
              >
                Terms and conditions
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                class={` ${styles['link11']} ${projectStyles['thqLink']} `}
              >
                Contact
              </a>
            </div>
          </div>
          <div class={styles['Follow-container']}>
            <span class={styles['text5']}>
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div class={styles['Icons-container']}>
              <a
                href="https://instagram.com/ggproduction.ro"
                target="_blank"
                rel="noreferrer noopener"
                class={styles['link12']}
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  class={` ${styles['icon']} ${projectStyles['thqLink']} `}
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com/GeiGerPhotography"
                target="_blank"
                rel="noreferrer noopener"
                class={styles['link13']}
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  class={` ${styles['icon2']} ${projectStyles['thqLink']} `}
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCngPhQ3LsD9xLUxxgOUHT6g"
                target="_blank"
                rel="noreferrer noopener"
                class={styles['link14']}
              >
                <svg
                  viewBox="0 0 1024 1024"
                  class={` ${styles['icon4']} ${projectStyles['thqLink']} `}
                >
                  <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cinema
