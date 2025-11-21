import Image from "next/image";
import styles from "./page.module.css";

const productGallery = [
  {
    id: "sculpt-mini",
    name: "Sculpt Mini Dress",
    price: "€189",
    description: "Matte jersey, double lined comfort.",
    image:
      "https://images.unsplash.com/photo-1495129125340-43cda5bf6aae?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "after-dark",
    name: "After Dark Column",
    price: "€210",
    description: "Shoulder-grazing silhouette in jet black.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "liquid-slip",
    name: "Liquid Slip",
    price: "€165",
    description: "Barely-there straps with satin sheen.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "midnight-knit",
    name: "Midnight Knit",
    price: "€198",
    description: "Structured rib, soft sculpt, night ready.",
    image:
      "https://images.unsplash.com/photo-1525517450344-d08b58bb1a44?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "studio-drape",
    name: "Studio Drape",
    price: "€240",
    description: "Precision draping inspired by Bucharest nights.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80",
  },
];

const reviewGallery = [
  {
    id: "andreea",
    quote:
      "The fit hugs without feeling tight. Finally a sculpting dress that breathes.",
    author: "Andreea · Bucharest",
    rating: "4.9",
  },
  {
    id: "ioana",
    quote: "Arrived within 24h, the fabric feels like liquid silk on skin.",
    author: "Ioana · Cluj",
    rating: "5.0",
  },
  {
    id: "mihai",
    quote:
      "Gifted the After Dark column dress — it became the go-to in her closet.",
    author: "Mihai · Timișoara",
    rating: "4.8",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span>SKIMS</span>
          <span>Romania</span>
        </div>
        <nav className={styles.nav}>
          <a href="#products">products</a>
          <a href="#reviews">reviews</a>
          <a href="#care">care</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={`${styles.section} ${styles.hero}`}>
          <p className={styles.badge}>skims romania · dresses</p>
          <h1>Minimal lines. Maximum confidence.</h1>
          <p className={styles.lede}>
            Sculpted silhouettes tailored for Bucharest nights and Black Sea
            escapes. Built with cooling corespun fabric so you move light, feel
            grounded, and look impossibly polished.
          </p>
          <div className={styles.actions}>
            <button className={styles.primary}>shop drop</button>
            <button className={styles.secondary}>visit showroom</button>
          </div>
        </section>

        <section id="products" className={styles.section}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.label}>products</p>
              <h2>Core dresses, restocked weekly.</h2>
            </div>
            <span className={styles.scrollHint}>swipe left to explore</span>
          </div>
          <div className={styles.rail}>
            {productGallery.map((product) => (
              <article key={product.id} className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={420}
                    height={560}
                    unoptimized
                    priority={product.id === "sculpt-mini"}
                  />
                </div>
                <div className={styles.cardBody}>
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                  <span>{product.price}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="reviews" className={styles.section}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.label}>reviews</p>
              <h2>Loved by the SKIMS Bucharest studio.</h2>
            </div>
            <span className={styles.scrollHint}>press + hold to read</span>
          </div>
          <div className={styles.rail}>
            {reviewGallery.map((review) => (
              <article key={review.id} className={styles.reviewCard}>
                <div className={styles.rating}>{review.rating}</div>
                <p className={styles.quote}>{review.quote}</p>
                <span className={styles.author}>{review.author}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="care" className={styles.section}>
          <div className={styles.careCard}>
            <p className={styles.label}>care</p>
            <h2>Steam, hang, repeat.</h2>
            <p>
              Complimentary lifetime steaming at the SKIMS Romania showroom.
              Drop in with your dress, leave pressed in five minutes.
            </p>
            <div className={styles.meta}>
              <span>str. Doamnei 17 · Bucharest</span>
              <span>open daily 10–22</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
