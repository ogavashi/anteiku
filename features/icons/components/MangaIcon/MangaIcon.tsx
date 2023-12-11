import { Icon, IconElement } from "@ui-kitten/components";
import { ImageProps } from "react-native-svg";

export const MangaIcon = (props?: Partial<ImageProps>): IconElement => (
  <Icon {...props} name="book" />
);
