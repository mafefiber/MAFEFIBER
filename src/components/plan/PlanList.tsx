import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../../api";
import PlanCard from "./PlanCard";
import styles from "./css/PlanCard.module.css";
export interface Plan {
  id: number;
  name: string;
  speed_mbps: number;
  price: number;
  description?: string | null;
}

function PlanList() {
  const [plans, setPlans] = useState<Plan[]>([]);
  useEffect(() => {
    axios.get<Plan[]>(`${API_BASE}/plans`)
      .then(res => setPlans(res.data))
      .catch(() => setPlans([]));
  }, []);
  if (plans.length === 0) return <p>No hay planes disponibles en este momento.</p>;
  return (
    <div className={styles["plans-grid"]}>
      {plans.map(plan => (
        <PlanCard key={plan.id} {...plan} />
      ))}
    </div>
  );
}

export default PlanList;