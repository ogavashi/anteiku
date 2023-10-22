import AnimatedDotsCarousel from "react-native-animated-dots-carousel";

interface DotsCarouselProps {
  LENGTH: number;
  index: number;
}

export const DotsCarousel: React.FC<DotsCarouselProps> = ({ LENGTH, index }) => {
  return (
    <AnimatedDotsCarousel
      length={LENGTH}
      currentIndex={index}
      maxIndicators={1}
      interpolateOpacityAndColor={true}
      activeIndicatorConfig={{
        color: "#3366FF",
        margin: 3,
        opacity: 1,
        size: 8,
      }}
      inactiveIndicatorConfig={{
        color: "#D6E4FF",
        margin: 3,
        opacity: 1,
        size: 8,
      }}
      decreasingDots={[
        {
          config: { color: "grey", margin: 3, opacity: 1, size: 6 },
          quantity: 1,
        },
        {
          config: { color: "grey", margin: 3, opacity: 1, size: 4 },
          quantity: 1,
        },
      ]}
    />
  );
};
