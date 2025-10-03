import LanguageDropdown from "@/components/elements/LanguageDropdown";
import Link from "next/link";
import Sidebar from "../Sidebar";

export default function Header2({ scroll, isMobileMenu, handleMobileMenu }) {
  return (
    <>
      <header>
        <div id="header-fixed-height" />
        <div className="header-top">
          <div className="container">
            <div className="row"></div>
          </div>
        </div>
        <div id="sticky-header" className="menu-area menu-area-two">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="fas fa-bars" />
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo02.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li>
                          <Link href="/">Beranda</Link>
                        </li>
                        <li>
                          <Link href="/about">Tentang Kami</Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="#">Produk</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/work">Asset Management</Link>
                            </li>
                            <li>
                              <Link href="/faq">Asuransi</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="#">Berita</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="/blog">Berita</Link>
                            </li>
                            <li>
                              <Link href="/blog-details">Pemberitahuan</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/contact">Kontak</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="header-action d-none d-md-block">
                      <ul className="list-wrap">
                        <li className="header-lang">
                          <LanguageDropdown />
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn" onClick={handleMobileMenu}>
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logo02.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="menu-outer">
                      <Sidebar />
                    </div>
                    <div className="social-links">
                      <ul className="clearfix list-wrap">
                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fab fa-youtube" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
