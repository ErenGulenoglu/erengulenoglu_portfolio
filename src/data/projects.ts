import utmconnect_image from "../assets/CCT305/preview_305.png";
import hazelux_image from "../assets/CCT477/Utm477.jpg";
import unilink_image from "../assets/CCT434/unilinkpreview.png";
import cinemabooking_image from "../assets/CinemeBookingUI/CinemaBookingUI_min.png";

export interface Project {
	slug: string;
	title: string;
	category: string;
	description: string;
	image: string;
	tools: string[];
}

export const projects: Project[] = [
	{
		slug: "utm-connect-ux",
		title: "UTM Connect",
		category: "UX Design · Mobile App",
		description: "A mobile app concept helping UTM students discover clubs, stay informed about events, and connect with campus communities.",
		image: utmconnect_image,
		tools: ["Figma", "Miro"],
	},
	{
		slug: "hazel-mccallion-ux",
		title: "Improving Transparency in the Mississauga Library Makerspace",
		category: "UX Research · Contextual Inquiry",
		description: "Investigating how transparency, staff dependency, and unclear wait times shape user frustration in the Hazel McCallion Library's 3D printing makerspace.",
		image: hazelux_image,
		tools: ["Miro", "Canva"],
	},
	{
		slug: "unilink-ux",
		title: "UniLink",
		category: "UX Design · Mobile App",
		description: "A mid-fidelity mobile app helping UTM students form meaningful friendships and connections in a safe, verified campus environment.",
		image: unilink_image,
		tools: ["Adobe XD"],
	},
	{
		slug: "cinema-booking-ui",
		title: "Cinema Booking UI",
		category: "UI Design · Figma Exercise",
		description: "A Figma UI design exercise exploring linear gradients, the Bend tool, and design kit integration to strengthen core visual design skills.",
		image: cinemabooking_image,
		tools: ["Figma"],
	},
];
