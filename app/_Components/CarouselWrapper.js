'use client';
import dynamic from 'next/dynamic';
const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: true });


const CarouselWrapper = ({ children, responsive }) => {
	return (
		<div className="relative" style={{ overflow: 'hidden' }}>
			<Carousel
				ssr={true}
				responsive={responsive}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={3000}
				keyBoardControl={true}
				arrows={false}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px"
				renderDotsOutside={false}
			>
				{children}
			</Carousel>
		</div>
	);
};

export default CarouselWrapper;