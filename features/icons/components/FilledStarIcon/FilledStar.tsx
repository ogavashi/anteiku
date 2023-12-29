import { Icon, IconElement } from "@ui-kitten/components";
import { ImageProps } from "react-native-svg";

export const FilledStarIcon = (props?: Partial<ImageProps>): IconElement => (
  <Icon {...props} name="star" />
);
