import { Icon, IconElement } from "@ui-kitten/components";
import { ImageProps } from "react-native-svg";

export const AnimeIcon = (props?: Partial<ImageProps>): IconElement => (
  <Icon {...props} name="tv" />
);
