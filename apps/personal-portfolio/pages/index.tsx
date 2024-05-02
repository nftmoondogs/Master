import { Layout, getThemedContent } from '@msanvarov/core-components';
import { en } from '@msanvarov/i18n';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Fragment } from 'react';

const LandingPage = () => {
  const { theme } = useTheme();

  return (
    <Layout>
      <section className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6" data-aos="zoom-in">
              <div className="about-me-box shadow-box">
                <Link className="overlay-link" href="/" />
                <img
                  className="bg-img"
                  src="/assets/bg1.png"
                  alt="background"
                />
                <div className="img-box">
                  <img src={en.landing.bio.media} alt="profile" />
                </div>
                <div className="infos">

                  <h1>{en.landing.bio.heading}</h1>
                  <p>{en.landing.bio.description}</p>
                  <br />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: en.landing.bio.descriptionExtended,
                    }}
                  ></p>
                  <br />

                  <Link href={en.landing.bio.button.link} className="about-btn">
                    <img
                      src={getThemedContent(theme, en.landing.bio.button.icon)}
                      alt="Button"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-credentials-wrap">
                <div data-aos="zoom-in">
                  <div className="banner shadow-box">
                    <div className="marquee">
                      <div>
                        <span>
                          PreSale Now Live!{' '}
                          {Array(4)
                            .fill(0)
                            .map((_, index) => (
                              <Fragment key={index}>
                                <img src="/assets/star1.svg" alt="Star" />{' '}
                                $GhostFace is Live On Pump.fun {' '}
                              </Fragment>
                            ))}
                          <img src="/assets/star1.svg" alt="Star" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gx-row d-flex gap-24">
                  <div data-aos="zoom-in">
                    <div className="about-crenditials-box info-box shadow-box h-full">
                      <Link className="overlay-link" href="/" />
                      <img
                        src="/assets/bg1.png"
                        alt="background"
                        className="bg-img"
                      />
                      <img
                        src={en.landing.credentials.media}
                        alt="credentials"
                      />
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="infos">
                          <h4>{en.landing.credentials.caption}</h4>
                          <h1>{en.landing.credentials.heading}</h1>
                        </div>
                        <Link
                          href={en.landing.credentials.button.link}
                          className="about-btn"
                        >
                          <img
                            src={getThemedContent(
                              theme,
                              en.landing.credentials.button.icon
                            )}
                            alt="button"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div data-aos="zoom-in">
                    <div className="about-project-box info-box shadow-box h-full">
                      <Link className="overlay-link" href="https://station.jup.ag/docs/get-your-token-onto-jup#getting-on-the-strict-list" />
                      <img src="/assets/bg1.png" alt="BG" className="bg-img" />
                      <img src={en.landing.cv.media} alt="My Works" />
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="infos">
                          <h4>{en.landing.cv.caption}</h4>
                          <h1>{en.landing.cv.heading}</h1>
                        </div>
                        <Link
                          href={en.landing.cv.button.link}
                          className="about-btn"
                        >
                          <img
                            src={getThemedContent(
                              theme,
                              en.landing.cv.button.icon
                            )}
                            alt="button"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-24">
            <div className="col-md-12">
              <div className="blog-service-profile-wrap d-flex gap-24">
                <div data-aos="zoom-in">
                  <div className="about-blog-box info-box shadow-box h-full">
                    <Link href="/" className="overlay-link" />
                    <img src="/assets/bg1.png" alt="BG" className="bg-img" />
                    <img src={en.landing.blog.media} alt="thumbnail" />
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>{en.landing.blog.caption}</h4>
                        <h1>{en.landing.blog.heading}</h1>
                      </div>
                      <Link
                        href={en.landing.blog.button.link}
                        className="about-btn"
                      >
                        <img
                          src={getThemedContent(
                            theme,
                            en.landing.blog.button.icon
                          )}
                          alt="button"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6" data-aos="zoom-in">
              <div className="about-contact-box info-box shadow-box">
                <Link className="overlay-link" href="https://www.pump.fun/board" />
                <img src="/assets/bg1.png" alt="BG" className="bg-img" />
                <img
                  src="/assets/icons/icon2.png"
                  alt="Icon"
                  className="star-icon"
                />
                           <img src={en.landing.offerings.media} alt="thumbnail" />
                <h1
                  dangerouslySetInnerHTML={{
                    __html: en.landing.contact.heading,
                  }}
                ></h1>
                <Link
                  href={en.landing.contact.button.link}
                  className="about-btn"
                >
                  <img
                    src={getThemedContent(
                      theme,
                      en.landing.contact.button.icon
                    )}
                    alt="button"
                  />
                </Link>
              </div>
            </div>
                <div data-aos="zoom-in">
                  <div className="about-profile-box info-box shadow-box h-full">
                    <img src="/assets/bg1.png" alt="BG" className="bg-img" />

                    {Array.from(
                      {
                        length: Math.ceil(
                          en.landing.profiles.profiles.length / 2
                        ),
                      },
                      (_, i) => i * 2
                    ).map((startIndex, index) => (
                      <div
                        className="inner-profile-icons shadow-box"
                        key={index}
                      >
                        {en.landing.profiles.profiles
                          .slice(startIndex, startIndex + 2)
                          .map((item, i) => (
                            <a
                              href={item.link}
                              key={i}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <i className={item.icon} />
                            </a>
                          ))}
                      </div>
                    ))}
                    <img src={en.landing.profiles.media} alt="thumbnail" />
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="infos">
                        <h4>{en.landing.profiles.caption}</h4>
                        <h1>{en.landing.profiles.heading}</h1>
                      </div>
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
           
        </div>
      </section>
    </Layout>
  );
};

export default LandingPage;
