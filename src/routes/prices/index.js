import { h } from 'preact'
import { Link } from 'preact-router/match'

import { Helmet } from 'react-helmet'

import SolidButton from '../../components/solid-button'
import projectStyles, { styles } from './style.css'

const Prices = () => {
  return (
    <div class={styles['container']}>
      <Helmet>
        <title>Prices - GG Production</title>
        <meta property="og:title" content="Prices - GG Production " />
      </Helmet>
      <div class={styles['Top-container']}>
        <nav class={styles['Navbar']}>
          <div class={styles['container01']}>
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
            <span class={styles['text001']}>CONTACT</span>
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
        <h1 class={styles['text002']}>PRICES</h1>
      </div>
      <div class={styles['Pricing-Line-1']}>
        <div class={styles['container02']}>
          <div class={styles['PricingCard']}>
            <span class={styles['text003']}>ECO</span>
            <div class={styles['container03']}>
              <span class={styles['text004']}>
                <span>â¬</span>
                <span></span>
              </span>
              <span class={styles['text007']}>500</span>
            </div>
            <div class={styles['container04']}>
              <span class={styles['text008']}>
                <span>â 1 photographer + 1 cameraman</span>
              </span>
              <span class={styles['text010']}>
                <span>â 500 photos</span>
              </span>
              <span class={styles['text012']}>
                <span>â 60 min FULL HD video</span>
              </span>
              <span class={styles['text014']}>
                <span>â Online access</span>
              </span>
              <span class={styles['text016']}>
                <span>â Wedding Trailer</span>
              </span>
            </div>
          </div>
          <div class={styles['PricingCard1']}>
            <span class={styles['text018']}>standard</span>
            <div class={styles['container05']}>
              <div class={styles['container06']}>
                <span class={styles['text019']}>
                  <span>â¬</span>
                  <span></span>
                </span>
                <span class={styles['text022']}>700</span>
              </div>
            </div>
            <div class={styles['container07']}>
              <div class={styles['container08']}>
                <span class={styles['text023']}>
                  <span>â 1 photographer + 1 cameraman</span>
                </span>
                <span class={styles['text025']}>
                  <span>â 600 photos</span>
                </span>
                <span class={styles['text027']}>
                  <span>â 120 min FULL HD video</span>
                </span>
                <span class={styles['text029']}>
                  <span>â Drone filming</span>
                </span>
                <span class={styles['text031']}>
                  <span>â Online access</span>
                </span>
                <span class={styles['text033']}>
                  <span>â Wedding Trailer</span>
                </span>
                <span class={styles['text035']}>
                  <span>â 1 Album 20x30 cm</span>
                </span>
              </div>
            </div>
          </div>
          <div class={styles['PricingCard2']}>
            <span class={styles['text037']}>PRO</span>
            <div class={styles['container09']}>
              <div class={styles['container10']}>
                <span class={styles['text038']}>
                  <span>â¬</span>
                  <span></span>
                </span>
                <span class={styles['text041']}>900</span>
              </div>
            </div>
            <div class={styles['container11']}>
              <div class={styles['container12']}>
                <span class={styles['text042']}>
                  <span>â 1 photographer + 1 cameraman</span>
                </span>
                <span class={styles['text044']}>
                  <span>â 800 photos</span>
                </span>
                <span class={styles['text046']}>
                  <span>â 150 min FULL HD video</span>
                </span>
                <span class={styles['text048']}>
                  <span>â Drone filming</span>
                </span>
                <span class={styles['text050']}>
                  <span>â Online access</span>
                </span>
                <span class={styles['text052']}>
                  <span>â Wedding Trailer</span>
                </span>
                <span class={styles['text054']}>
                  <span>â 1 Album 20x30 cm</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class={styles['Pricing-Line-2']}>
        <div class={styles['container13']}>
          <div class={styles['PricingCard3']}>
            <span class={styles['text056']}>PREMIUM</span>
            <div class={styles['container14']}>
              <div class={styles['container15']}>
                <span class={styles['text057']}>
                  <span>â¬</span>
                  <span></span>
                </span>
                <span class={styles['text060']}>1000</span>
              </div>
            </div>
            <div class={styles['container16']}>
              <div class={styles['container17']}>
                <span class={styles['text061']}>
                  <span>â 1 photographer + 1 cameraman</span>
                </span>
                <span class={styles['text063']}>
                  <span>â 1000 photos</span>
                </span>
                <span class={styles['text065']}>
                  <span>â 120 min 4K UHD video</span>
                </span>
                <span class={styles['text067']}>
                  <span>â Drone filming</span>
                </span>
                <span class={styles['text069']}>
                  <span>â Online access</span>
                </span>
                <span class={styles['text071']}>
                  <span>â Wedding Trailer</span>
                </span>
                <span class={styles['text073']}>
                  <span>â 1 Album 30x40 cm</span>
                </span>
              </div>
            </div>
          </div>
          <div class={styles['PricingCard4']}>
            <span class={styles['text075']}>ULTRA</span>
            <div class={styles['container18']}>
              <div class={styles['container19']}>
                <span class={styles['text076']}>
                  <span>â¬</span>
                  <span></span>
                </span>
                <span class={styles['text079']}>1200</span>
              </div>
            </div>
            <div class={styles['container20']}>
              <div class={styles['container21']}>
                <span class={styles['text080']}>
                  <span>â 1 photographer + 1 cameraman</span>
                </span>
                <span class={styles['text082']}>
                  <span>â 1200 photos</span>
                </span>
                <span class={styles['text084']}>
                  <span>â 120 min 4K UHD video</span>
                </span>
                <span class={styles['text086']}>
                  <span>â Drone filming</span>
                </span>
                <span class={styles['text088']}>
                  <span>â Online access</span>
                </span>
                <span class={styles['text090']}>
                  <span>â Wedding Trailer</span>
                </span>
                <span class={styles['text092']}>
                  <span>â 1 Album 20x30 cm + 1 Album 30x40 cm</span>
                </span>
                <span class={styles['text094']}>
                  <span>â Trash the Dress</span>
                </span>
              </div>
            </div>
          </div>
          <div class={styles['PricingCard5']}>
            <span class={styles['text096']}>EXCLUSIVE</span>
            <div class={styles['container22']}>
              <div class={styles['container23']}>
                <span class={styles['text097']}>
                  <span>â¬</span>
                  <span></span>
                </span>
                <span class={styles['text100']}>1500</span>
              </div>
            </div>
            <div class={styles['container24']}>
              <div class={styles['container25']}>
                <span class={styles['text101']}>
                  <span>â 1 photographer + 1 cameraman</span>
                </span>
                <span class={styles['text103']}>
                  <span>â 1500 photos</span>
                </span>
                <span class={styles['text105']}>
                  <span>â 150 min 4K UHD video</span>
                </span>
                <span class={styles['text107']}>
                  <span>â Drone filming</span>
                </span>
                <span class={styles['text109']}>
                  <span>â Online access</span>
                </span>
                <span class={styles['text111']}>
                  <span>â Wedding Trailer</span>
                </span>
                <span class={styles['text113']}>
                  <span>â 2 Album 20x30 cm + 1 Album 30x40 cm</span>
                </span>
                <span class={styles['text115']}>
                  <span>â Trash the Dress</span>
                </span>
              </div>
            </div>
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
            <div class={styles['container26']}>
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
                class={` ${styles['link1']} ${projectStyles['thqLink']} `}
              >
                Personalized offers
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                class={` ${styles['link2']} ${projectStyles['thqLink']} `}
              >
                Special deals
              </a>
            </div>
            <div class={styles['container27']}>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                class={` ${styles['link3']} ${projectStyles['thqLink']} `}
              >
                About us
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                class={` ${styles['link4']} ${projectStyles['thqLink']} `}
              >
                Terms and conditions
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                class={` ${styles['link5']} ${projectStyles['thqLink']} `}
              >
                Contact
              </a>
            </div>
          </div>
          <div class={styles['Follow-container']}>
            <span class={styles['text117']}>
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
                class={styles['link6']}
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
                class={styles['link7']}
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
                class={styles['link8']}
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

export default Prices
