import { Icon, IconElement } from "@ui-kitten/components";
import { ImageProps } from "react-native-svg";

export const StarIcon = (props?: Partial<ImageProps>): IconElement => (
  <Icon {...props} name="star-outline" animation="pulse" />
);
