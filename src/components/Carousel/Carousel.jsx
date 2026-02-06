"use client";
import "./styles.css";

import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./CarouselArrows";
import { DotButton, useDotButton } from "./CarouselDot";

const Carousel = ({ children, slides, options }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(options);
	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
	const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

	return (
		<>
			<div className="embla">
				<div className="embla__viewport" ref={emblaRef}>
					<div className="embla__container">{children}</div>
				</div>

				<div className="embla__controls">
					<div className="embla__buttons">
						<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
						<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
					</div>

					<div className="embla__dots">
						{scrollSnaps.map((_, index) => (
							<DotButton key={index} onClick={() => onDotButtonClick(index)} className={"embla__dot".concat(index === selectedIndex ? " embla__dot--selected" : "")} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};
export default Carousel;
