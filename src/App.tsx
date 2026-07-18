import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import UTMConnect from "./pages/UTMConnect.tsx";
import HazelMcCallion from "./pages/HazelMcCallion.tsx";
import UniLink from "./pages/UniLink.tsx";
import CinemaBookingUI from "./pages/CinemaBookingUI.tsx";
import GTGStudentApp from "./pages/GTGStudentApp.tsx";
import ChampionMeta from "./pages/ChampionMeta.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

function ValorantRedirect() {
	useEffect(() => {
		window.location.href = "https://positive-behavior-178952.framer.app/";
	}, []);

	return null;
}

function SourSmoothieRedirect() {
	useEffect(() => {
		window.location.href = "https://tame-try-143731.framer.app/";
	}, []);

	return null;
}

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			<Toaster />
			<Sonner />
			<HashRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/work/valorant-community" element={<ValorantRedirect />} />
					<Route path="/work/sour-smoothie" element={<SourSmoothieRedirect />} />
					<Route path="/work/utm-connect-ux" element={<UTMConnect />} />
					<Route path="/work/hazel-mccallion-ux" element={<HazelMcCallion />} />
					<Route path="/work/unilink-ux" element={<UniLink />} />
					<Route path="/work/cinema-booking-ui" element={<CinemaBookingUI />} />
					<Route path="/work/go-thrive-go" element={<GTGStudentApp />} />
					<Route path="/work/champion-meta" element={<ChampionMeta />} />

					{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</HashRouter>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
