/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Playfair_Display } from "@next/font/google";
import { Inter } from "@next/font/google";
import styles from "./index.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

  const agrihaClick = () => {
    router.push("https://agriha.com");
  };

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
              <h1 className={playfairDisplay.className}>Construction make easy with arclif</h1>
              <span className={styles.animationOne}></span>
              <h2 className={playfairDisplay.className}>Online Architecture Platform</h2>
              <h3 className={playfairDisplay.className}>For a better tomorrow.</h3>
              <p>
                Arclif, India&apos;s best online architecture platform, is a platform for connecting professionals in
                the architecture, engineering, and construction industries, as well as building material suppliers with
                home seekers in order to streamline the construction process and make it easier. ARCLIF provides tools
                and resources that can help professionals work more efficiently and effectively in these industries,
                ultimately benefiting homeowners and contributing to a better tomorrow.
              </p>
              <div className={styles.buttonContainer_sectionOne}>
                <button className={styles.goToService_Button}>
                  <p>Go to service</p>
                </button>
                <button className={styles.contactButton}>
                  <p>Contact</p>
                  <FontAwesomeIcon icon={faRightLong} className={styles.arrowContact} />
                </button>
              </div>
            </div>
            <div className={styles.sectionOne_right}>
              <img src="/sectionOne/gif1.gif" alt="gif" className={styles.gifSectionOne} />
            </div>
          </div>
        </section>
        <section className={styles.sectionTwo}>
          <div className={styles.outer_container_sectionTwo}>
            <div onClick={agrihaClick} className={styles.gradient_sectionTwo}></div>
            <div className={styles.cardContainer_sectionTwo}>
              <div onClick={agrihaClick} className={styles.card1_sectionTwo}>
                <img src="/sectionTwo/test.jpg" alt="image" className={styles.vert_move} />
              </div>
              <div onClick={agrihaClick} className={styles.card2_sectionTwo}>
                <img src="/sectionTwo/test2.jpg" alt="image" className={styles.vert_move} />
              </div>
              <div onClick={agrihaClick} className={styles.card1_sectionTwo}>
                <img src="/sectionTwo/test3.jpg" alt="image" className={styles.vert_move} />
              </div>
              <div onClick={agrihaClick} className={styles.card2_sectionTwo}>
                <img src="/sectionTwo/test4.jpg" alt="image" className={styles.vert_move} />
              </div>
              <div onClick={agrihaClick} className={styles.card1_sectionTwo}>
                <img src="/sectionTwo/test5.jpg" alt="image" className={styles.vert_move} />
              </div>
              <div onClick={agrihaClick} className={styles.card2_sectionTwo}>
                <img src="/sectionTwo/test6.jpg" alt="image" className={styles.vert_move} />
              </div>
              <div onClick={agrihaClick} className={styles.card1_sectionTwo}>
                <img src="/sectionTwo/test7.jpg" alt="image" className={styles.vert_move} />
              </div>
              <div onClick={agrihaClick} className={styles.card2_sectionTwo}>
                <img src="/sectionTwo/test3.jpg" alt="image" className={styles.vert_move} />
              </div>
              <div onClick={agrihaClick} className={styles.card1_sectionTwo}>
                <img src="/sectionTwo/test2.jpg" alt="image" className={styles.vert_move} />
              </div>
              <div onClick={agrihaClick} className={styles.card2_sectionTwo}>
                <img src="/sectionTwo/test6.jpg" alt="image" className={styles.vert_move} />
              </div>
              <div onClick={agrihaClick} className={styles.card1_sectionTwo}>
                <img src="/sectionTwo/test7.jpg" alt="image" className={styles.vert_move} />
              </div>
              <div onClick={agrihaClick} className={styles.card2_sectionTwo}>
                <img src="/sectionTwo/test3.jpg" alt="image" className={styles.vert_move} />
              </div>
              <div onClick={agrihaClick} className={styles.card1_sectionTwo}>
                <img src="/sectionTwo/test2.jpg" alt="image" className={styles.vert_move} />
              </div>
              <div onClick={agrihaClick} className={styles.card2_sectionTwo}>
                <img src="/sectionTwo/test6.jpg" alt="image" className={styles.vert_move} />
              </div>
              <div onClick={agrihaClick} className={styles.card1_sectionTwo}>
                <img src="/sectionTwo/test7.jpg" alt="image" className={styles.vert_move} />
              </div>
            </div>
          </div>
          <div className={styles.container_sectionTwo}>
            <div className={styles.contentConatiner_sectionTwo}>
              <div className={styles.content_sectionTwo} onClick={agrihaClick}>
                <div className={styles.eclipse_green_sectionTwo}>
                  <Image
                    className={styles.agrihaLogo}
                    src="/sectionOne/agrihaIcon.svg"
                    alt="gif"
                    width={17}
                    height={15}
                    priority
                  />
                </div>
                <div className={styles.text_content_sectionTwo}>
                  <Image
                    className={styles.arclifText}
                    src="/sectionOne/arclifText.svg"
                    alt="gif"
                    width={53}
                    height={12}
                    priority
                  />
                  <p className={inter.className}>Agriha Services</p>
                </div>
              </div>
              <div className={styles.content_sectionTwo}>
                <div className={styles.eclipse_gray_sectionTwo}>
                  <Image
                    className={styles.agrihaLogo}
                    src="/sectionOne/ecom.svg"
                    alt="gif"
                    width={17}
                    height={15}
                    priority
                  />
                </div>
                <div className={styles.text_content_sectionTwo2}>
                  <Image
                    className={styles.arclifText}
                    src="/sectionOne/arclifText2.svg"
                    alt="gif"
                    width={53}
                    height={12}
                    priority
                  />
                  <p className={inter.className}>Agriha Services</p>
                </div>
              </div>
              <div className={styles.content_sectionTwo}>
                <div className={styles.eclipse_gray_sectionTwo}>
                  <Image
                    className={styles.agrihaLogo}
                    src="/sectionOne/arch.svg"
                    alt="gif"
                    width={17}
                    height={15}
                    priority
                  />
                </div>
                <div className={styles.text_content_sectionTwo2}>
                  <Image
                    className={styles.arclifText}
                    src="/sectionOne/arclifText2.svg"
                    alt="gif"
                    width={53}
                    height={12}
                    priority
                  />
                  <p className={inter.className}>Agriha Services</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionThree}>
          <div className={styles.container_sectionThree}>
            <div className={styles.title_sectionThree}>
              <h2 className={playfairDisplay.className}>Explore Design Ideas</h2>
              <h3>An online platform for connecting architects and home seekers</h3>
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
                  <h5>Architects get the visibility they deserve</h5>
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
                  <h5>Find your home designs with Arclif</h5>
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
                  <h5>A marketplace of architects and home seekers</h5>
                </div>
              </div>
            </div>
            <p>
              The process of getting work is more difficult in the field of architecture. By adding your relevant work
              to our online architecture service platform, you will be able to find the right home seekers. <br />
              Finding the right architect for your project can be difficult. A talented architect should be able to
              inspire you and come up with innovative ideas to create a home you will love. Arclif is an online platform
              where you can find an architect for your dream home and in addition, architects can brand their work on
              the platform.
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
              {/* <div className={styles.imageContainer_sectionFour}>
                <img src="/sectionFour/img1.svg" alt="" />
              </div> */}
            </div>
            <div className={styles.right_sectionFour}>
              <h2 className={playfairDisplay.className}>Construction make easy</h2>
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the
                industry&apos;s standard dummy text.
              </h3>
              <div className={styles.learnMoreButton_sectionFour}>
                Learn more{" "}
                <Image
                  className={styles.arrow_sectionFour}
                  src="/sectionFour/arrow.svg"
                  alt="arrow"
                  width={11}
                  height={10}
                  priority
                />
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
            <h2 className={playfairDisplay.className}>
              Join with Arclif Community to start finding Ideas & Professionals
            </h2>
            <div className={styles.buttonContainer_sectionEight}>
              <div className={styles.googleButton_sectionSix}>
                <Image
                  className={styles.googlePlay}
                  src="/blackSection/googlePlay.svg"
                  alt="image"
                  width={25}
                  height={27}
                  priority
                />
                Google Play
              </div>
              <div className={styles.appleButton_sectionSix}>
                <Image
                  className={styles.apple}
                  src="/blackSection/apple.svg"
                  alt="image"
                  width={23}
                  height={29}
                  priority
                />
                App Store
              </div>
            </div>
          </div>
        </section>
        <Contact />
        <Footer />
      </main>
    </>
  );
}
