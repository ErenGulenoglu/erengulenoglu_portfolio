import { useEffect, useRef } from "react";

// ─── Repelling dots background ────────────────────────────────────────────────
function RepelDots() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let width = canvas.offsetWidth;
		let height = canvas.offsetHeight;
		canvas.width = width;
		canvas.height = height;

		const DOT_COUNT = 3600;
		const RADIUS = 1.5;
		const REPEL_DIST = 100;
		const REPEL_STRENGTH = 0.6;
		const RETURN_STRENGTH = 0;

		const dots = Array.from({ length: DOT_COUNT }, () => {
			const ox = Math.random() * width;
			const oy = Math.random() * height;
			return { ox, oy, x: ox, y: oy, vx: 0, vy: 0 };
		});

		let mouse = { x: -999, y: -999 };

		const onMouseMove = (e: MouseEvent) => {
			const rect = canvas.getBoundingClientRect();
			mouse.x = e.clientX - rect.left;
			mouse.y = e.clientY - rect.top;
		};
		const onMouseLeave = () => {
			mouse.x = -999;
			mouse.y = -999;
		};

		window.addEventListener("mousemove", onMouseMove);
		canvas.addEventListener("mouseleave", onMouseLeave);

		let raf: number;
		const animate = () => {
			ctx.clearRect(0, 0, width, height);
			dots.forEach((d) => {
				const dx = d.x - mouse.x;
				const dy = d.y - mouse.y;
				const dist = Math.sqrt(dx * dx + dy * dy);
				if (dist < REPEL_DIST && dist > 0) {
					const force = (REPEL_DIST - dist) / REPEL_DIST;
					d.vx += (dx / dist) * force * REPEL_STRENGTH;
					d.vy += (dy / dist) * force * REPEL_STRENGTH;
				}

				d.vx *= 0.96;
				d.vy *= 0.96;
				d.x += d.vx;
				d.y += d.vy;
				ctx.beginPath();
				ctx.arc(d.x, d.y, RADIUS, 0, Math.PI * 2);
				ctx.fillStyle = "rgba(251,126,20, 1)";
				ctx.fill();
			});
			raf = requestAnimationFrame(animate);
		};
		animate();

		const onResize = () => {
			width = canvas.offsetWidth;
			height = canvas.offsetHeight;
			canvas.width = width;
			canvas.height = height;
			dots.forEach((d) => {
				d.ox = Math.random() * width;
				d.oy = Math.random() * height;
				d.x = d.ox;
				d.y = d.oy;
			});
		};
		window.addEventListener("resize", onResize);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("mousemove", onMouseMove);
			canvas.removeEventListener("mouseleave", onMouseLeave);
			window.removeEventListener("resize", onResize);
		};
	}, []);

	return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }} />;
}

export default RepelDots;
