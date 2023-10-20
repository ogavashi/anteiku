import { Icon, IconElement } from "@ui-kitten/components";
import { ImageProps } from "react-native-svg";

export const LibraryIcon = (props?: Partial<ImageProps>): IconElement => (
  <Icon {...props} name="book-outline" />
);
