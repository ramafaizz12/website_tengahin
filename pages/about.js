import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function About() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={2}
        breadcrumbTitle={
          <>
            Tentang <span>Varantara</span>
          </>
        }
      >
        <div>
          {/* about-area */}
          <section className="inner-about-area pb-115">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* <div className="inner-about-img"> */}
                  <img src="assets/img/images/image_van.png" alt="" />
                  {/* </div> */}
                </div>
                <div className="col-lg-12">
                  <div className="inner-about-content">
                    <h2 className="title">
                      Financial Solutions with Varantara
                    </h2>
                    <div className="content-bottom">
                      <p>
                        At Varantara, kami hadir sebagai broker terpercaya yang
                        menghubungkan Anda dengan solusi finansial terbaik. Kami
                        memahami bahwa setiap individu dan bisnis memiliki
                        kebutuhan yang unik — mulai dari pengelolaan aset hingga
                        perlindungan risiko. Dengan jaringan mitra luas,
                        analisis profesional, dan pendekatan berbasis data, kami
                        memastikan Anda mendapatkan layanan yang paling sesuai,
                        efisien, dan bernilai tinggi. Apakah Anda mencari cara
                        untuk mengembangkan aset atau melindungi masa depan
                        dengan asuransi yang tepat, Varantara menyediakan solusi
                        yang dirancang untuk pertumbuhan berkelanjutan dan
                        ketenangan finansial.
                      </p>
                      <ul className="list-wrap">
                        <li>
                          <i className="far fa-check" />
                          Solusi Terpadu
                        </li>
                        <li>
                          <i className="far fa-check" />
                          Pendekatan Berbasis Data
                        </li>
                        <li>
                          <i className="far fa-check" />
                          Mitra Profesional
                        </li>
                        <li>
                          <i className="far fa-check" />
                          Transparansi & Kepercayaan
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about-area-end */}
          {/* team-area */}
          {/* <section className="team-area pb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title-four text-center mb-60">
                    <h2 className="title">Core Members</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                  <div className="team-item">
                    <div className="team-thumb">
                      <img src="assets/img/team/team_img01.jpg" alt="" />
                      <div className="team-hidden-content">
                        <h4 className="title">Jack O'Halloran</h4>
                        <p>
                          A Co-Founder is someone who helps establish a company
                          from the ground up, often sharing the vision and
                          responsibilities of the business with one or more
                          other individuals. Co-Founders bring unique skills and
                          expertise to the table, which can complement each
                          other and drive the company forward.
                        </p>
                      </div>
                    </div>
                    <div className="team-content">
                      <div className="team-info">
                        <h4 className="title">Jack O'Halloran</h4>
                        <span>Co-Founder / CEO</span>
                      </div>
                      <div className="team-social">
                        <ul className="list-wrap">
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-8">
                  <div className="team-item">
                    <div className="team-thumb">
                      <img src="assets/img/team/team_img02.jpg" alt="" />
                      <div className="team-hidden-content">
                        <h4 className="title">Alex Sheverdin</h4>
                        <p>
                          A Co-Founder is someone who helps establish a company
                          from the ground up, often sharing the vision and
                          responsibilities of the business with one or more
                          other individuals. Co-Founders bring unique skills and
                          expertise to the table, which can complement each
                          other and drive the company forward.
                        </p>
                      </div>
                    </div>
                    <div className="team-content">
                      <div className="team-info">
                        <h4 className="title">Alex Sheverdin</h4>
                        <span>Co-Founder / CEO</span>
                      </div>
                      <div className="team-social">
                        <ul className="list-wrap">
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="team-item-two">
                    <div className="team-thumb-two">
                      <img src="assets/img/team/team_img03.jpg" alt="" />
                    </div>
                    <div className="team-content-two">
                      <div className="team-info">
                        <h4 className="title">Anastasia Yatsun</h4>
                        <span>Software Engineer</span>
                      </div>
                      <div className="team-social">
                        <ul className="list-wrap">
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="team-item-two">
                    <div className="team-thumb-two">
                      <img src="assets/img/team/team_img04.jpg" alt="" />
                    </div>
                    <div className="team-content-two">
                      <div className="team-info">
                        <h4 className="title">Ben Miller</h4>
                        <span>UI/UX Designer</span>
                      </div>
                      <div className="team-social">
                        <ul className="list-wrap">
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <div className="team-item-two">
                    <div className="team-thumb-two">
                      <img src="assets/img/team/team_img05.jpg" alt="" />
                    </div>
                    <div className="team-content-two">
                      <div className="team-info">
                        <h4 className="title">Rob Lubow</h4>
                        <span>QA Engineer</span>
                      </div>
                      <div className="team-social">
                        <ul className="list-wrap">
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-linkedin-in" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* team-area-end */}
          {/* counter-area */}
          <section className="counter-area-three pb-130">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="counter-content">
                    <div className="section-title-four mb-40">
                      <h2 className="title">
                        Layanan Kami Memberi Nilai Lebih
                      </h2>
                    </div>
                    <p>
                      Dengan pengalaman luas di bidang broker, kami membantu
                      klien mencapai tujuan finansial mereka melalui solusi yang
                      efektif dan strategis.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="counter-item-wrap-three">
                    <ul className="list-wrap">
                      <li>
                        <div className="counter-item-three">
                          <h2 className="count">500+</h2>
                          <p>Klien Korporasi</p>
                        </div>
                      </li>
                      <li>
                        <div className="counter-item-three">
                          <h2 className="count">1K</h2>
                          <p>Aset Dikelola</p>
                        </div>
                      </li>
                      <li>
                        <div className="counter-item-three">
                          <h2 className="count">100+</h2>
                          <p>Solusi Asuransi Aktif</p>
                        </div>
                      </li>
                      <li>
                        <div className="counter-item-three">
                          <h2 className="count">20+</h2>
                          <p>Mitra Strategis</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* counter-area-end */}
        </div>
      </Layout>
    </>
  );
}
