/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Playfair_Display } from "@next/font/google";

import styles from "./index.module.css";
import Header from "../components/Header";

const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Arclif</title>
        <meta
          name="description"
          content="Arclif.com is an online architecture service platform founded in
                  2016 in vision to connect Architects, Designers, Engineers and
                  Building material suppliers closer to Home seekers with their
                  products and services, across the world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.sectionOne}>
          <div className={styles.container_sectionOne}>
            <div className={styles.sectionOne_left}>
              <h4 className={playfairDisplay.className}>Lorem Ipsum</h4>
              <span className={styles.animationOne}></span>
              <h2 className={playfairDisplay.className}>Construction make easy with arclif</h2>
              <h3 className={playfairDisplay.className}>For a better tomorrow.</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the
                industry&apos;s standard dummy text. when an unknown printer took a galley of type and scrambled it.
              </p>
              <button className={styles.contactButton}>
                <p>Contact</p>
                <Image
                  className={styles.arrowContact}
                  src="/sectionOne/contact.svg"
                  alt="arrow"
                  width={11}
                  height={10}
                  priority
                />
              </button>
            </div>
            <div className={styles.sectionOne_right}>
              <Image
                className={styles.gifSectionOne}
                src="/sectionOne/gif1.gif"
                alt="gif"
                width={410}
                height={410}
                priority
              />
            </div>
          </div>
        </section>
        <section className={styles.sectionTwo}>
          <div className={styles.scrollDown_container}>
            <Image
              className={styles.gifSectionTwo}
              src="/sectionTwo/gif1.gif"
              alt="gif"
              width={26}
              height={19}
              priority
            />
          </div>
          <div className={styles.container_sectionTwo}>
            <div className={styles.sectionTwo_Left}>
              <Image
                className={styles.imgSectionTwo}
                src="/sectionTwo/img1.svg"
                alt="arrow"
                width={373}
                height={281}
                priority
              />
            </div>
            <div className={styles.sectionTwo_right}>
              <h2 className={playfairDisplay.className}>Construction make easy</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the
                industry&apos;s standard dummy text.
              </p>
              <button className={styles.learnMoreButton}>
                <p>Learn more</p>
                <Image
                  className={styles.arrowLearnMore}
                  src="/sectionTwo/learnMore.svg"
                  alt="arrow"
                  width={11}
                  height={10}
                  priority
                />
              </button>
            </div>
          </div>
        </section>
        <section className={styles.sectionThree}>
          <div className={styles.container_sectionThree}>
            <div className={styles.title_sectionThree}>
              <h2 className={playfairDisplay.className}>Explore Design Ideas</h2>
              <h3>Lorem Ipsum is simply dummy text of the printing</h3>
            </div>
            <div className={styles.cards_sectionThree}>
              <div className={styles.card_sectionThree}>
                <Image
                  className={styles.gifImage}
                  src="/sectionThree/gif1.gif"
                  alt="gif"
                  width={133}
                  height={132}
                  priority
                />
                <div className={styles.title_card_sectionThree}>
                  <h4>Find the best Architect</h4>
                  <h5>Lorem Ipsum is simply dummy.</h5>
                </div>
              </div>
              <div className={styles.card_sectionThree}>
                <Image
                  className={styles.gifImage}
                  src="/sectionThree/gif2.gif"
                  alt="gif"
                  width={133}
                  height={132}
                  priority
                />
                <div className={styles.title_card_sectionThree}>
                  <h4>Explore more design ideas</h4>
                  <h5>Lorem Ipsum is simply.</h5>
                </div>
              </div>
              <div className={styles.card_sectionThree}>
                <Image
                  className={styles.gifImage}
                  src="/sectionThree/gif3.gif"
                  alt="gif"
                  width={133}
                  height={132}
                  priority
                />
                <div className={styles.title_card_sectionThree}>
                  <h4>Make online projects</h4>
                  <h5>Lorem Ipsum is simply dummy.</h5>
                </div>
              </div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the
              industry&apos;s standard dummy text.when an unknown printer took a galley of type and scrambled it to make
              a type specimen book.
            </p>
            <button className={styles.exploreMoreButton}>
              <p>Explore more</p>
              <Image
                className={styles.arrowExploreMore}
                src="/sectionThree/exploreMore.svg"
                alt="arrow"
                width={11}
                height={10}
                priority
              />
            </button>
          </div>
        </section>
        <section className={styles.sectionFour}>
          <div className={styles.container_sectionFour}>
            <div className={styles.left_sectionFour}>
              {/* <Image
                className={styles.img1_sectionFour}
                src="/sectionFour/img1.svg"
                alt="img"
                width={594}
                height={424}
                priority
              /> */}
              <div className={styles.imageContainer_sectionFour}>
                <img src="/sectionFour/img1.svg" alt="" />
              </div>
            </div>
            <div className={styles.right_sectionFour}>
              <div className={styles.right_sectionFour_One}>
                <Image
                  className={styles.qrCode}
                  src="/sectionFour/qr.svg"
                  alt="QR Code"
                  width={43}
                  height={43}
                  priority
                />
                <p>Show QR code</p>
              </div>
              <h2 className={playfairDisplay.className}>
                Join with Arclif Community to start finding Ideas & Professionals
              </h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div className={styles.appRedirect_container}>
                <div className={styles.googlePlay_container}>
                  <Image
                    className={styles.googlePlay}
                    src="/sectionFour/googlePlay.svg"
                    alt="googlePlay"
                    width={31}
                    height={33}
                    priority
                  />
                  <p>Google Play</p>
                </div>
                <div className={styles.appStore_container}>
                  <Image
                    className={styles.apple}
                    src="/sectionFour/apple.svg"
                    alt="apple"
                    width={28}
                    height={35}
                    priority
                  />
                  <p>App Store</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionFive}>
          <div className={styles.container_sectionFive}>
            <div className={styles.title_sectionFive}>
              <h2 className={playfairDisplay.className}>What`s inside in Arclif</h2>
              <h3>Lorem Ipsum is simply dummy text of the printing.</h3>
            </div>
            <div className={styles.cards_sectionFive}>
              <div className={styles.card_sectionFive}>
                <Image
                  className={styles.gif_sectionFive}
                  src="/sectionFive/gif1.gif"
                  alt="gif"
                  width={125}
                  height={125}
                  priority
                />
                <div className={styles.cardTitle_sectionFive}>
                  <h3 className={playfairDisplay.className}>Lorem Ipsum</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className={styles.card_sectionFive}>
                <Image
                  className={styles.gif2_sectionFive}
                  src="/sectionFive/gif2.gif"
                  alt="gif"
                  width={88}
                  height={88}
                  priority
                />
                <div className={styles.cardTitle_sectionFive}>
                  <h3 className={playfairDisplay.className}>Arclif Magazine</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className={styles.card_sectionFive}>
                <Image
                  className={styles.gif_sectionFive}
                  src="/sectionFive/gif3.gif"
                  alt="gif"
                  width={125}
                  height={125}
                  priority
                />
                <div className={styles.cardTitle_sectionFive}>
                  <h3 className={playfairDisplay.className}>Project section</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionSix}>
          <div className={styles.container_sectionSix}>
            <div className={styles.title_sectionSix}>
              <h2 className={playfairDisplay.className}>Testimonials</h2>
              <h3>See what our valuable customers are saying</h3>
            </div>
            <div className={styles.quoteStart_sectionSix}>
              <Image
                className={styles.gif_sectionSix_open}
                src="/sectionSix/gif1.gif"
                alt="gif"
                width={74}
                height={74}
                priority
              />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the
              industry&apos;s standard dummy text. when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </p>
            <div className={styles.quoteClose_sectionSix}>
              <Image
                className={styles.gif_sectionSix}
                src="/sectionSix/gif1.gif"
                alt="gif"
                width={74}
                height={74}
                priority
              />
            </div>
            <div className={styles.ClientDetails_sectionSix}>
              <Image
                className={styles.arrow_sectionSix}
                src="/sectionSix/left.svg"
                alt="arrow"
                width={15}
                height={9}
                priority
              />
              <div className={styles.clientName_sectionSix}>
                <h4>Muhammed Yaseen</h4>
                <p>Interior designer</p>
              </div>
              <Image
                className={styles.arrow_sectionSix}
                src="/sectionSix/right.svg"
                alt="arrow"
                width={15}
                height={9}
                priority
              />
            </div>
          </div>
        </section>
        <section className={styles.sectionSeven}>
          <div className={styles.container_sectionSeven}>
            <div className={styles.title_sectionSeven}>
              <h2 className={playfairDisplay.className}>Reads Our Latest Blog</h2>
              <h3>See what our valuable customers are saying</h3>
            </div>
            <div className={styles.cardConatiner_sectionSeven}>
              <div className={styles.card_sectionSeven}>
                <Image
                  className={styles.arrow_sectionSix}
                  src="/sectionSeven/img1.png"
                  alt="image"
                  width={443}
                  height={242}
                  priority
                />
                <p>26 May`22</p>
                <h4>Historic Home: 1901 Samuel and Pauline Peery HouseCalifornia Clipper were faced </h4>
                <h5>
                  Scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h5>
              </div>
              <div className={styles.card_sectionSeven}>
                <Image
                  className={styles.arrow_sectionSix}
                  src="/sectionSeven/img2.png"
                  alt="image"
                  width={443}
                  height={242}
                  priority
                />
                <p>26 May`22</p>
                <h4>Historic Home: 1901 Samuel and Pauline Peery HouseCalifornia Clipper were faced </h4>
                <h5>
                  Scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h5>
              </div>
              <div className={styles.card_sectionSeven}>
                <Image
                  className={styles.arrow_sectionSix}
                  src="/sectionSeven/img1.png"
                  alt="image"
                  width={443}
                  height={242}
                  priority
                />
                <p>26 May`22</p>
                <h4>Historic Home: 1901 Samuel and Pauline Peery HouseCalifornia Clipper were faced </h4>
                <h5>
                  Scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h5>
              </div>
              <div className={styles.card_sectionSeven}>
                <Image
                  className={styles.arrow_sectionSix}
                  src="/sectionSeven/img2.png"
                  alt="image"
                  width={443}
                  height={242}
                  priority
                />
                <p>26 May`22</p>
                <h4>Historic Home: 1901 Samuel and Pauline Peery HouseCalifornia Clipper were faced </h4>
                <h5>
                  Scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h5>
              </div>
              <div className={styles.card_sectionSeven}>
                <Image
                  className={styles.arrow_sectionSix}
                  src="/sectionSeven/img1.png"
                  alt="image"
                  width={443}
                  height={242}
                  priority
                />
                <p>26 May`22</p>
                <h4>Historic Home: 1901 Samuel and Pauline Peery HouseCalifornia Clipper were faced </h4>
                <h5>
                  Scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h5>
              </div>
              <div className={styles.card_sectionSeven}>
                <Image
                  className={styles.arrow_sectionSix}
                  src="/sectionSeven/img2.png"
                  alt="image"
                  width={443}
                  height={242}
                  priority
                />
                <p>26 May`22</p>
                <h4>Historic Home: 1901 Samuel and Pauline Peery HouseCalifornia Clipper were faced </h4>
                <h5>
                  Scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h5>
              </div>
            </div>
            <button className={styles.readMoreButton_sectionSeven}>Read More</button>
          </div>
        </section>
        <section className={styles.sectionEight}>
          <div className={styles.container_sectionEight}>
            <div className={styles.leftConatiner_sectionEight}>
              <h2 className={playfairDisplay.className}>Connect with us</h2>
              <h3>See what our valuable customers are saying</h3>
              <h4>Arclif Technologies Pvt Ltd</h4>
              <h5>Unit 3B, 3rd Floor ,Sahya Government Cyberpark, Calicut Kerala 673014</h5>
              <span>
                <h5>
                  Email: infoarclif@gmail.com <br /> Phone: +91 978086363
                </h5>
              </span>
              <button className={styles.contactButton_sectionEight}>
                <p>Contact</p>
                <Image
                  className={styles.arrow_sectionEight}
                  src="/sectionEight/contact.svg"
                  alt="arrow"
                  width={11}
                  height={9}
                  priority
                />
              </button>
            </div>
            <div className={styles.rightConatiner_sectionEight}>
              <div className={styles.innerRightContainer_sectionEight}>
                <h2 className={playfairDisplay.className}>Get free consultation </h2>
                <h3>See what our valuable customers are saying</h3>
                <div className={styles.formConatiner_sectionEight}>
                  <div className={styles.inputConatiner_sectionEight}>
                    <input placeholder="Name" />
                    <input placeholder="Phone number" />
                    <input placeholder="Email" />
                    <input placeholder="Message" />
                  </div>
                  <button className={styles.sendButton_sectionEight}>
                    <Image
                      className={styles.gif1_sectionEight}
                      src="/sectionEight/gif1.gif"
                      alt="arrow"
                      width={66}
                      height={66}
                      priority
                    />
                    <p>SEND NOW</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionNine}>
          <div className={styles.container_sectionNine}>
            <div className={styles.left_container_sectionNine}>
              <Image
                className={styles.logo_sectionNine}
                src="/sectionNine/logo.png"
                alt="logo"
                width={113}
                height={34}
                priority
              />
              <h5>Arclif Technologies Pvt Ltd</h5>
              <p>© Copyright Arclif 2022 All Right Reserved</p>
              <Image
                className={styles.qr_sectionNine}
                src="/sectionNine/qr.svg"
                alt="logo"
                width={79}
                height={79}
                priority
              />
            </div>
            <div className={styles.center_container_sectionNine}>
              <ul>
                <span>Company</span>
                <li>About us</li>
                <li>Careers</li>
                <li>Contact Us</li>
              </ul>
              <ul>
                <span>Social media</span>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>WhatsApp</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>YouTube</li>
              </ul>
              <ul>
                <span>Links</span>
                <li>Blog</li>
                <li>FAQs</li>
                <li>Terms</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className={styles.right_container_sectionNine}>
              <h5>Subscribe Newsletter</h5>
              <h6>Get updates of our products and software releases before anyone else.</h6>
              <div className={styles.inputContainer_sectionNine}>
                <input placeholder="Enter your email"></input>
                <button className={styles.buttonSend_sectionNine}>
                  <Image
                    className={styles.arrow_sectionNine}
                    src="/sectionNine/arrow.svg"
                    alt="arrow"
                    width={10}
                    height={9}
                    priority
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
