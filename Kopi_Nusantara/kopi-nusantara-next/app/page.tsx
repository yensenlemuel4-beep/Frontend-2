"use client";

import { useState } from "react";

const prices = [18000, 22000, 20000];

export default function Home() {
  const [likes, setLikes] = useState([0, 0, 0]);
  const [price, setPrice] = useState(18000);
  const [quantity, setQuantity] = useState(1);
  const total = new Intl.NumberFormat("id-ID").format(
    price * Math.max(1, quantity || 1),
  );

  function like(index: number) {
    setLikes(likes.map((count, i) => (i === index ? count + 1 : count)));
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark site-header shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            535250062 | Kornelius Yensen Lemuel
          </a>
          <div className="navbar-collapse show">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item"><a className="nav-link text-white" href="#hero">Beranda</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#menu">Menu</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#kalkulator">Kalkulator Pesanan</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#faq">FAQ</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#footer">Kontak</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="hero" className="hero-section text-center d-flex align-items-center">
        <div className="container mx-auto">
          <h2 className="fw-bold mb-3 text-shadow">Nikmati Cita Rasa Kopi Asli Indonesia</h2>
          <p className="mb-4 text-shadow">Diseduh dari biji kopi pilihan langsung dari petani lokal Nusantara.</p>
          <a href="#menu" className="btn btn-primary-custom shadow">Jelajahi Menu</a>
        </div>
      </section>

      <main className="container py-5">
        <section id="menu" className="mb-5">
          <h3 className="section-title text-center mb-4">Menu Unggulan Kami</h3>
          <div className="row g-4">
            {[
              ["Kopi Tubruk Gayo", "Kopi hitam tradisional khas Aceh dengan aroma yang kuat dan khas.", 18000],
              ["Es Kopi Susu Nusantara", "Perpaduan espresso, fresh milk, dan gula aren asli yang creamy.", 22000],
              ["Kopi Toraja Robusta", "Kita hadirkan rasa earthy dengan tingkat keasaman yang pas.", 20000],
            ].map(([name, description, itemPrice], index) => (
              <div className="col-12 col-md-6 col-lg-4" key={name}>
                <div className="card h-100 shadow-sm rounded-3 border-0">
                  <div className="card-body d-flex flex-column p-4">
                    <h4 className="card-title text-brown fw-bold">{name}</h4>
                    <p className="card-text text-muted">{description}</p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <span className="price fw-bold">Rp {Number(itemPrice).toLocaleString("id-ID")}</span>
                      <button className="btn-like" type="button" onClick={() => like(index)}>
                        ❤️ <span className="like-count">{likes[index]}</span> Suka
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="kalkulator" className="calc-section mb-5">
          <h3 className="section-title text-center mb-4">Kalkulator Pesanan Kilat</h3>
          <div className="calc-card mx-auto shadow-sm p-4 rounded-3 bg-white" style={{ maxWidth: 600 }}>
            <div className="mb-3">
              <label htmlFor="pilihan-menu" className="form-label fw-bold text-brown">Pilih Menu Kopi:</label>
              <select id="pilihan-menu" className="form-select" value={price} onChange={(event) => setPrice(Number(event.target.value))}>
                <option value={prices[0]}>Kopi Tubruk Gayo - Rp 18.000</option>
                <option value={prices[1]}>Es Kopi Susu Nusantara - Rp 22.000</option>
                <option value={prices[2]}>Kopi Toraja Robusta - Rp 20.000</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="jumlah-pesanan" className="form-label fw-bold text-brown">Jumlah Cangkir:</label>
              <input id="jumlah-pesanan" type="number" className="form-control" value={quantity} min="1" onChange={(event) => setQuantity(Number(event.target.value))} />
            </div>
            <div className="calc-result mt-4 p-3 rounded text-center">
              <h4 className="text-brown">Total Pembayaran:</h4>
              <p className="fs-3 fw-bold price mb-0">Rp {total}</p>
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section mb-5">
          <h3 className="section-title text-center mb-4">Pertanyaan yang Sering Diajukan (FAQ)</h3>
          <div className="accordion mx-auto shadow-sm" id="faqAccordion" style={{ maxWidth: 800 }}>
            {[
              ["Dari mana asal biji kopi yang digunakan Kopi Nusantara?", "Biji kopi kami langsung didatangkan dari petani lokal pilihan di berbagai daerah di Indonesia, seperti Gayo, Toraja, Flores, dan Bali."],
              ["Apakah Kopi Nusantara menyediakan pemesanan secara online?", "Ya, Anda bisa memesan melalui aplikasi pesan-antar makanan online atau langsung menghubungi nomor WhatsApp kami di bagian kontak."],
              ["Apakah tersedia menu non-kopi di kedai ini?", "Tentu saja! Kami menyediakan berbagai pilihan minuman non-kopi seperti teh rempah, cokelat klasik, dan menu es buah segar."],
            ].map(([question, answer], index) => (
              <details className="accordion-item" key={question} open={index === 0}>
                <summary className={`accordion-button fw-bold text-brown${index === 0 ? "" : " collapsed"}`}>
                  {index + 1}. {question}
                </summary>
                <div className="accordion-body text-muted">{answer}</div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer id="footer" className="site-footer bg-dark text-white text-center py-4">
        <div className="container">
          <p className="mb-1">&copy; 2026 Kopi Nusantara. Hak Cipta Dilindungi.</p>
          <p className="mb-0">Jalan Raya Kopi No. 45, Jakarta | Telepon: 0812-3456-7890</p>
        </div>
      </footer>
    </>
  );
}
