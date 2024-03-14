import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useState } from "react";
import styles from "../Carousel.module.css";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";

const CarouselLeftNavigation = () => {
	const swiper = useSwiper();

	const [isBegin, setIsBegin] = useState(true); // Initialize isBegin to true.

	useEffect(() => {
		swiper.on("slideChange", () => {
			setIsBegin(swiper.isBeginning); // Update isBegin when slideChange event occurs.
		});
	}, [swiper]); // Include swiper in the dependencies array.

	return (
		<div className={styles.leftNavigation}>
			{!isBegin && <LeftArrow onClick={() => swiper.slidePrev()} />}
		</div>
	);
};

export default CarouselLeftNavigation;
