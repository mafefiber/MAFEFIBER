import React from "react";
import type { Plan } from "./PlanList";
import styles from "./css/PlanCard.module.css";

function PlanCard({ name, price, speed_mbps, description, image_url }: Plan) {
  // Número de WhatsApp destino
  const whatsappNumber = "51956025773"; // Cambia por el número real

  // Mensaje personalizado
  const getWhatsappMessage = () => {
    let msg = `Buenas, vengo por su página web y deseo contratar sus servicios de internet. 
Plan: ${name}
Velocidad: ${speed_mbps} Mbps
Precio: S/ ${price}/mes`;
    if (description) msg += `\nDetalles: ${description}`;
    return encodeURIComponent(msg);
  };

  const handleActivateClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = `https://wa.me/${whatsappNumber}?text=${getWhatsappMessage()}`;
    window.open(url, "_blank");
  };

  return (
    <div className={styles.card}>
      {image_url && (
        <img
          src={image_url}
          alt={`Logo de ${name}`}
          className={styles.logo}
        />
      )}
      <div className={styles.speed}>
        <span className={styles.speedIcon}>⚜</span>
        <span>{speed_mbps} Mbps</span>
      </div>
      <h3>S/ {price}/mes</h3>
      <h4>📡 {name}</h4>
      <ul className={styles.features}>
        <li>🚀 Fibra óptica</li>
        <li>⚡ Internet de alta velocidad</li>
        <li>🆓 Instalación gratuita</li>
        <li>🛠️ Soporte técnico de 8 AM a 8 PM</li>
      </ul>
      {description && <p className={styles.desc}>📋 {description}</p>}
      <a
        href="#"
        className={styles["activate-btn"]}
        onClick={handleActivateClick}
      >
        🔥 ACTIVAR {name}
      </a>
    </div>
  );
}

export default PlanCard;