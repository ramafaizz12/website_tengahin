import Link from "next/link";

export default function Banner2() {
  return (
    <>
      <section className="banner-area-two">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <div className="banner-content-two">
                <h2 className="title wow fadeInUp" data-wow-delay=".2s">
                  Menghubungkan Nilai, Mewujudkan Peluang. <br />
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Kami hadir sebagai mitra strategis untuk menjembatani
                  kebutuhan dan solusi terbaik di berbagai sektor dari aset,
                  keuangan, hingga perlindungan masa depan.
                </p>
                <div className="banner-btn-two">
                  <Link
                    href="https://wa.me/6281234567890"
                    className="gradient-btn gradient-btn-three wow fadeInLeft"
                    data-wow-delay=".6s"
                  >
                    Hubungi Kami
                  </Link>
                  <Link
                    href="/about"
                    className="btn btn-three wow fadeInRight"
                    data-wow-delay=".6s"
                  >
                    Tentang Kami
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-shape-wrap">
          <img
            src="/assets/img/banner/banner_shape01.png"
            alt=""
            className="rotateme"
          />
          <img
            src="/assets/img/banner/banner_shape02.png"
            alt=""
            className="alltuchtopdown"
          />
        </div>
      </section>
    </>
  );
}
