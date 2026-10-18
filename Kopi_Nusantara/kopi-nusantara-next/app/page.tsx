"use client";

import { useState } from "react";

const menu = [
  {
    name: "Kopi Tubruk Gayo",
    description: "Kopi hitam tradisional khas Aceh dengan aroma yang kuat dan khas.",
    price: 18000,
  },
  {
    name: "Es Kopi Susu Nusantara",
    description: "Perpaduan espresso, fresh milk, dan gula aren asli yang creamy.",
    price: 22000,
  },
  {
    name: "Kopi Toraja Robusta",
    description: "Rasa earthy dengan tingkat keasaman yang pas.",
    price: 20000,
  },
];

const formatRupiah = (value: number) =>
  `Rp ${new Intl.NumberFormat("id-ID").format(value)}`;

const faqs = [
  {
    question: "Dari mana asal biji kopi yang digunakan Kopi Nusantara?",
    answer:
      "Biji kopi kami langsung didatangkan dari petani lokal pilihan di berbagai daerah di Indonesia, seperti Gayo, Toraja, Flores, dan Bali.",
  },
  {
    question: "Apakah Kopi Nusantara menyediakan pemesanan secara online?",
    answer:
      "Ya, Anda bisa memesan melalui aplikasi pesan-antar makanan online atau langsung menghubungi nomor WhatsApp kami di bagian kontak.",
  },
  {
    question: "Apakah tersedia menu non-kopi di kedai ini?",
    answer:
      "Tentu saja! Kami menyediakan berbagai pilihan minuman non-kopi seperti teh rempah, cokelat klasik, dan menu es buah segar.",
  },
];

export default function Home() {
  const [likes, setLikes] = useState([0, 0, 0]);
  const [selectedPrice, setSelectedPrice] = useState(menu[0].price);
  const [quantity, setQuantity] = useState("1");
  const parsedQuantity = Number.parseInt(quantity, 10);
  const validQuantity =
    Number.isNaN(parsedQuantity) || parsedQuantity < 1 ? 1 : parsedQuantity;

  function addLike(index: number) {
    setLikes((currentLikes) =>
      currentLikes.map((count, itemIndex) =>
        itemIndex === index ? count + 1 : count,
      ),
    );
  }

  return (
    <>
      <header className="site-header">
        <nav className="nav-container" aria-label="Navigasi utama">
          <a className="brand" href="#beranda">
            535250062 | Kornelius Yensen Lemuel
          </a>
          <div className="nav-links">
            <a href="#beranda">Beranda</a>
            <a href="#menu">Menu</a>
            <a href="#kalkulator">Kalkulator Pesanan</a>
            <a href="#faq">FAQ</a>
            <a href="#kontak">Kontak</a>
          </div>
          <span className="nim-badge">NIM: 535250062</span>
        </nav>
      </header>

      <section className="hero-section" id="beranda">
        <div className="hero-content">
          <p className="eyebrow">Kopi pilihan dari tanah Nusantara</p>
          <h1>Nikmati Cita Rasa Kopi Asli Indonesia</h1>
          <p>
            Diseduh dari biji kopi pilihan langsung dari petani lokal
            Nusantara.
          </p>
          <a className="primary-button" href="#menu">
            Jelajahi Menu
          </a>
        </div>
      </section>

      <main className="content-container">
        <section className="content-section" id="menu">
          <div className="section-heading">
            <p className="eyebrow">Pilihan favorit</p>
            <h2>Menu Unggulan Kami</h2>
          </div>
          <div className="menu-grid">
            {menu.map((item, index) => (
              <article className="menu-card" key={item.name}>
                <div className="card-icon" aria-hidden="true">
                  ☕
                </div>
                <h3>{item.name}</h3>
                <p className="menu-description">{item.description}</p>
                <div className="card-footer">
                  <span className="price">{formatRupiah(item.price)}</span>
                  <button
                    className="like-button"
                    onClick={() => addLike(index)}
                    type="button"
                    aria-label={`Sukai ${item.name}, ${likes[index]} suka`}
                  >
                    <span aria-hidden="true">♥</span> {likes[index]} Suka
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="kalkulator">
          <div className="section-heading">
            <p className="eyebrow">Rencanakan pesananmu</p>
            <h2>Kalkulator Pesanan Kilat</h2>
          </div>
          <div className="calculator-card">
            <label htmlFor="pilihan-menu">Pilih Menu Kopi</label>
            <select
              id="pilihan-menu"
              value={selectedPrice}
              onChange={(event) => setSelectedPrice(Number(event.target.value))}
            >
              {menu.map((item) => (
                <option key={item.name} value={item.price}>
                  {item.name} - {formatRupiah(item.price)}
                </option>
              ))}
            </select>

            <label htmlFor="jumlah-pesanan">Jumlah Cangkir</label>
            <input
              id="jumlah-pesanan"
              type="number"
              min="1"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />

            <div className="total-panel" aria-live="polite">
              <h3>Total Pembayaran</h3>
              <p>{formatRupiah(selectedPrice * validQuantity)}</p>
            </div>
          </div>
        </section>

        <section className="content-section" id="faq">
          <div className="section-heading">
            <p className="eyebrow">Ada yang ingin ditanyakan?</p>
            <h2>Pertanyaan yang Sering Diajukan</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.question} open={index === 0}>
                <summary>
                  <span className="faq-number">0{index + 1}</span>
                  {faq.question}
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" id="kontak">
        <div className="footer-content">
          <div>
            <a className="footer-brand" href="#beranda">
              Kopi Nusantara
            </a>
            <p>Secangkir cerita dari berbagai sudut Indonesia.</p>
          </div>
          <div className="footer-contact">
            <p>Jalan Raya Kopi No. 45, Jakarta</p>
            <p>Telepon: 0812-3456-7890</p>
          </div>
          <p className="copyright">
            &copy; 2026 Kopi Nusantara. Hak Cipta Dilindungi.
          </p>
        </div>
      </footer>
    </>
  );
}
