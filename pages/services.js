import Head from "next/head";
import Image from "next/image";
import { Playfair_Display } from "@next/font/google";
import Header from "../components/Header";
import styles from "./services.module.css";
import { data } from "../utils/projectsData";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
});

const Services = () => {
  return (
    <>
      <Head>
        <title>Services | Arclif</title>
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
            <div className={styles.title_sectionOne}>
              <h2 className={playfairDisplay.className}>Our Services</h2>
              <span></span>
              <h3>
                Arclif is India’s leading architectural service platform with a vision of connecting millions of people
                who are actively engaged in the construction industry.we welcome you to enjoy our services designed to
                enhance your experience in the process of creating your dream home.
              </h3>
            </div>
            <div className={styles.cardContainer_sectionOne}>
              <div className={styles.card_sectionOne}>
                <Image
                  className={styles.arrow_sectionTwo}
                  src="/services/residence.svg"
                  alt="icon"
                  width={70}
                  height={69}
                  priority
                />
                <h4 className={playfairDisplay.className}>Architectural design </h4>
                <p>
                  Choose the best architect of your choice from our wide portfolio of experienced and talented
                  architects across India
                </p>
              </div>
              <div className={styles.card_sectionOne}>
                <Image
                  className={styles.arrow_sectionTwo}
                  src="/services/residence.svg"
                  alt="icon"
                  width={70}
                  height={69}
                  priority
                />
                <h4 className={playfairDisplay.className}>Interior Design </h4>
                <p>
                  Need a makeover to your apartment or office, we have unlimited options for you to choose the best
                  interior designer
                </p>
              </div>
              <div className={styles.card_sectionOne}>
                <Image
                  className={styles.arrow_sectionTwo}
                  src="/services/residence.svg"
                  alt="icon"
                  width={70}
                  height={69}
                  priority
                />
                <h4 className={playfairDisplay.className}>Master Planning </h4>
                <p>
                  We help you to fulfill to accomplish your dream project by providing the most experienced and capable
                  architects and engineers.
                </p>
              </div>
              <div className={styles.card_sectionOne}>
                <Image
                  className={styles.arrow_sectionTwo}
                  src="/services/residence.svg"
                  alt="icon"
                  width={70}
                  height={69}
                  priority
                />
                <h4 className={playfairDisplay.className}>Landscape architecture </h4>
                <p>
                  A thing of beauty is make your space more vibrant by adding some green space to it. We have immense
                  experience in landscapings.
                </p>
              </div>
              <div className={styles.card_sectionOne}>
                <Image
                  className={styles.arrow_sectionTwo}
                  src="/services/residence.svg"
                  alt="icon"
                  width={70}
                  height={69}
                  priority
                />
                <h4 className={playfairDisplay.className}>Renovations and home improvement</h4>
                <p>
                  we guarantee the best home makeover and renovation services with numerous successful project
                  deliveries
                </p>
              </div>
              <div className={styles.card_sectionOne}>
                <Image
                  className={styles.arrow_sectionTwo}
                  src="/services/residence.svg"
                  alt="icon"
                  width={70}
                  height={69}
                  priority
                />
                <h4 className={playfairDisplay.className}>Project Management</h4>
                <p>
                  we have excellent systems to ensure smooth completion of your dream project -on time and within budget
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionTwo}>
          <div className={styles.container_sectionTwo}>
            <div className={styles.title_sectionTwo}>
              <h2 className={playfairDisplay.className}>Latest Projects & Works</h2>
              <h3>Create the best living spaces for our customers allowing them.</h3>
            </div>
          </div>
          <div className={styles.outerContainer_sectionTwo}>
            <div className={styles.cardContainer_sectionTwo}>
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{ background: `url("${item.image}")` }}
                    className={styles.card_sectionTwo}
                  ></div>
                );
              })}
            </div>
          </div>
        </section>
        <section className={styles.sectionThree}>
          <div className={styles.container_sectionThree}>
            <div className={styles.title_sectionThree}>
              <h2 className={playfairDisplay.className}>Let&apos;s talks something about</h2>
              <h3>
                Create the best living spaces for our customers allowing them to fully immerse themselves in designing
                the perfect living space for their needs, desires and lifestyle. Designing a website or a visual design
                can take a lot of tim
              </h3>
            </div>
            <div className={styles.callNow_button}>Call now</div>
          </div>
        </section>
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Services;
