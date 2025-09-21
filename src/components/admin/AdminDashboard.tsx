
import React from "react";

const cardColors = [
	"rgba(25,45,65,0.85)", // azul oscuro
	"rgba(36,0,70,0.85)", // morado oscuro
	"rgba(0,17,34,0.85)"  // azul más oscuro
];

const animateBg = {
	animation: "gradientShift 10s ease infinite",
	background: "linear-gradient(45deg, #0a0a0a, #1a0033, #000d1a, #001122)",
	backgroundSize: "400% 400%"
};

const AdminDashboard = () => {
	return (
		<div style={{
			minHeight: "calc(100vh - 64px)",
			width: "100%",
			...animateBg,
			fontFamily: "Segoe UI, Arial, sans-serif",
			padding: "2.5rem 5vw"
		}}>
			<style>{`
				@keyframes gradientShift {
					0% {background-position: 0% 50%;}
					50% {background-position: 100% 50%;}
					100% {background-position: 0% 50%;}
				}
			`}</style>
			<h1 style={{
				fontSize: "2.7rem",
				fontWeight: 800,
				color: "#00ffff",
				marginBottom: "0.5rem",
				textAlign: "center",
				letterSpacing: "-1px",
				textShadow: "0 2px 16px #001122"
			}}>Panel de Administración</h1>
			<p style={{
				fontSize: "1.25rem",
				color: "#e0e7ff",
				marginBottom: "2.5rem",
				textAlign: "center",
				textShadow: "0 1px 8px #001122"
			}}>
				Bienvenido al dashboard de admin. Administra usuarios, planes y consulta reportes.
			</p>
			<div style={{
				display: "flex",
				gap: "2rem",
				justifyContent: "center",
				alignItems: "stretch",
				flexWrap: "wrap",
				width: "100%"
			}}>
				<section style={{
					flex: "1 1 300px",
					background: cardColors[0],
					color: "#00ffff",
					padding: "2.2rem 1.7rem",
					borderRadius: "18px",
					boxShadow: "0 6px 24px #001122",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					minHeight: "180px",
					border: "1px solid #00ffff"
				}}>
					<h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.5rem", textAlign: "center", color: "#fff", textShadow: "0 1px 8px #00ffff" }}>Usuarios</h2>
					<p style={{ fontSize: "1.05rem", opacity: 0.92, textAlign: "center", color: "#e0e7ff" }}>Gestión de usuarios y permisos.</p>
				</section>
						<section style={{
							flex: "1 1 300px",
							background: cardColors[1],
							color: "#b659f8",
							padding: "2.2rem 1.7rem",
							borderRadius: "18px",
							boxShadow: "0 6px 24px #1a0033",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							minHeight: "180px",
							border: "1px solid #b659f8"
						}}>
							<h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.5rem", textAlign: "center", color: "#fff", textShadow: "0 1px 8px #b659f8" }}>Planes</h2>
							<p style={{ fontSize: "1.05rem", opacity: 0.92, textAlign: "center", color: "#e0e7ff", marginBottom: "1.2rem" }}>Administrar planes y promociones.</p>
							<a href="admin/planes/planes" style={{
								display: "inline-block",
								padding: "0.7rem 1.5rem",
								background: "#b659f8",
								color: "#fff",
								borderRadius: "8px",
								fontWeight: 600,
								fontSize: "1rem",
								textDecoration: "none",
								boxShadow: "0 2px 8px #1a0033",
								transition: "background 0.2s, transform 0.2s",
								border: "none",
								cursor: "pointer"
							}}
							onMouseOver={e => e.currentTarget.style.background = '#a13be0'}
							onMouseOut={e => e.currentTarget.style.background = '#b659f8'}
							>Gestionar planes</a>
						</section>
				<section style={{
					flex: "1 1 300px",
					background: cardColors[2],
					color: "#ffd93d",
					padding: "2.2rem 1.7rem",
					borderRadius: "18px",
					boxShadow: "0 6px 24px #000d1a",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					minHeight: "180px",
					border: "1px solid #ffd93d"
				}}>
					<h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.5rem", textAlign: "center", color: "#fff", textShadow: "0 1px 8px #ffd93d" }}>Reportes</h2>
					<p style={{ fontSize: "1.05rem", opacity: 0.92, textAlign: "center", color: "#e0e7ff" }}>Ver estadísticas y reportes.</p>
				</section>
			</div>
		</div>
	);
};

export default AdminDashboard;
