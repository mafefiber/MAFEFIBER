import React, { useState } from "react";
import "./css/ProductGrid.css";

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  specs: string[];
  images: string[]; // ahora array de imágenes
};

const products: Product[] = [
  {
    id: 1,
    name: "Mouse Inalámbrico",
    description: "Mouse ergonómico con alta precisión y diseño moderno.",
    price: "S/ 199.00",
    specs: ["Conexión Bluetooth", "Batería recargable", "DPI ajustable"],
    images: [
      "https://cdn.memorykings.pe/files/2025/04/12/351704-MK038547-AAAQ1.jpg",
      "https://www.imeqmo.com/web/image/1825513/Mouse%20Klip%20Xtreme%20Vector%20SEO.jpg",
      "https://media.spdigital.cl/thumbnails/products/mqok3ci7_0e08f226_thumbnail_512.jpg",
    ],
  },
  {
    id: 2,
    name: "Teclado Mecánico RGB",
    description: "Teclado mecánico con retroiluminación RGB personalizable.",
    price: "S/ 299.00",
    specs: ["Switches mecánicos", "Conexión USB", "Iluminación RGB"],
    images: [
      "https://m.media-amazon.com/images/I/71FSIp+tDNL._AC_SL1500_.jpg",
      "https://halion.com.pe/wp-content/uploads/2025/02/KB893L-1-11-1200x750.jpg",
      "https://m.media-amazon.com/images/I/81Une+dXshL._UF894,1000_QL80_.jpg",
    ],
  },
  {
    id: 3,
    name: "Convertidor Smart TV",
    description: "Convierte tu televisor en un Smart TV con acceso a apps y streaming.",
    price: "S/ 249.00",
    specs: ["Resolución 4K", "WiFi integrado", "Control remoto incluido"],
    images: [
      "https://www.samplesmusicales.com.pe/wp-content/uploads/2022/09/AVRPRO10081.webp",
      "https://imgmedia.larepublica.pe/640x371/larepublica/original/2024/04/26/662bce2ebebfa6382978b239.webp",
      "https://i.blogs.es/c8c5e0/amazon-fire-tv-1/450_1000.webp",
    ],
  },
];

const Products: React.FC = () => {
  return (
    <div className="cyberpunk-bg">
      <section className="products-section">
        <div className="header-glow">
          <h1 className="section-title">
            <span className="glitch-text" data-text="NUESTROS PRODUCTOS">
              NUESTROS PRODUCTOS
            </span>
          </h1>
          <p className="subtitle">Tecnología futurista al alcance de tus manos</p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} delay={index * 100} />
          ))}
        </div>
      </section>
    </div>
  );
};

type ProductCardProps = {
  product: Product;
  delay: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, delay }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="product-card" data-aos="fade-up" data-aos-delay={delay}>
      {/* Imagen principal */}
      <img src={selectedImage} alt={product.name} className="product-image" />

      {/* Miniaturas */}
      <div className="gallery-thumbs">
        {product.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${product.name} ${i}`}
            className={`thumb ${img === selectedImage ? "active" : ""}`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      <div className="product-content">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>

        <ul className="specs-list">
          {product.specs.map((spec, i) => (
            <li key={i} className="spec-item">
              ⚡ {spec}
            </li>
          ))}
        </ul>

        <div className="price-section">
          <span className="product-price">{product.price}</span>
        </div>

        <button className="product-button">
          <span>COMPRAR AHORA</span>
          <div className="button-scan"></div>
        </button>
      </div>
      <div className="card-border"></div>
    </div>
  );
};

export default Products;
