import React from "react";
import type { Plan } from "./PlanList";
import styles from "./css/PlanCard.module.css";

function PlanCard({ name, price, speed_mbps, description }: Plan) {
  return (
    <div className={styles.card}>
      <div className={styles.speed}>
        <span className={styles.speedIcon}>⚜</span>
        <span>{speed_mbps} Mbps</span>
      </div>
      <h3>S/ {price}/mes</h3>
      <h4>� {name}</h4>
      
      <ul className={styles.features}>
        <li>🚀 Fibra óptica </li>
        <li>⚡ Internet de alta velocidad</li>
        <li>🆓 Instalación gratuita</li>
        <li>🛠️ Soporte técnico de 8 AM a 8 PM</li>
      </ul>
      
      {description && <p className={styles.desc}>📋 {description}</p>}
      
      <a href={`/contratar/${speed_mbps}`} className={styles["activate-btn"]}>
        🔥 ACTIVAR {name}
      </a>
    </div>
  );
}

export default PlanCard;