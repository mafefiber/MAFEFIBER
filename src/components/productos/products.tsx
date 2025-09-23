import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../../api";
import "./css/ProductGrid.css";

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  specs: string[];
  images?: string[];
};

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9); // valor por defecto (escritorio)

  useEffect(() => {
    axios.get<Product[]>(`${API_BASE}/products`)
      .then(res => setProducts(res.data))
      .catch(() => setProducts([]));
  }, []);

  useEffect(() => {
    const getProductsPerPage = () => (window.innerWidth < 768 ? 3 : 9);
    setProductsPerPage(getProductsPerPage());

    const handleResize = () => {
      setProductsPerPage(getProductsPerPage());
      setCurrentPage(1); // Opcional: vuelve a la primera página al cambiar tamaño
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // Paginación
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Scroll al primer producto de la nueva página al cambiar de página
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setTimeout(() => {
      const firstCard = document.querySelector(".products-grid .product-card");
      if (firstCard) firstCard.scrollIntoView({ behavior: "auto", block: "start" });
    }, 100);
  };

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
          {currentProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} delay={index * 100} />
          ))}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={currentPage === i + 1 ? "active" : ""}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Siguiente
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

type ProductCardProps = {
  product: Product;
  delay: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, delay }) => {
  const images = product.images && product.images.length > 0 ? product.images : [""];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="product-card" data-aos="fade-up" data-aos-delay={delay}>
      <img src={selectedImage} alt={product.name} className="product-image" />
      <div className="gallery-thumbs">
        {(product.images || []).map((img, i) => (
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
          {(product.specs || []).map((spec, i) => (
            <li key={i} className="spec-item">
              ⚡ {spec}
            </li>
          ))}
        </ul>
        <div className="price-section">
          <span className="product-price">S/ {product.price}</span>
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