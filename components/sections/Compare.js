export default function Compare() {
  return (
    <>
      <section className="compare-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-title-two text-center mb-70">
                <h2 className="title">Benefit Produk kami</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="compare-item">
                <div className="compare-thumb">
                  <img src="/assets/img/images/compare_img02.jpg" alt="" />
                </div>
                <div className="compare-content">
                  <h3 className="title">Asset Management</h3>
                  <div className="compare-list">
                    <ul className="list-wrap ">
                      <li>Pengelolaan Profesional</li>
                      <li>Transparansi & Akuntabilitas</li>
                      <li>Keamanan & Kepatuhan</li>
                      <li>Pendekatan Personal</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="compare-item">
                <div className="compare-thumb">
                  <img src="/assets/img/images/compare_img02.jpg" alt="" />
                </div>
                <div className="compare-content">
                  <h3 className="title">Asuransi</h3>
                  <div className="compare-list">
                    <ul className="list-wrap">
                      <li>Perlindungan Komprehensif</li>
                      <li>Ketenangan Finansial</li>
                      <li>Fleksibel & Adaptif</li>
                      <li>Konsultasi Profesional</li>
                      <li> Proses Klaim Mudah & Cepat</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="compare-shape-wrap">
          <img
            src="/assets/img/images/compare_shape01.png"
            alt=""
            data-aos="fade-left"
            data-aos-delay={300}
          />
          <img
            src="/assets/img/images/compare_shape02.png"
            alt=""
            data-aos="fade-right"
            data-aos-delay={300}
          />
        </div>
      </section>
    </>
  );
}
