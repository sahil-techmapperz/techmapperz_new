'use client'
// Import CSS directly from node_modules to avoid CSP violations
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-multi-carousel/lib/styles.css';

export default function SlickCarouselProvider({ children }) {
	return <>{children}</>;
}