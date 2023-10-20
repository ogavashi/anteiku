import { Icon, IconElement } from "@ui-kitten/components";
import { RenderProp } from "@ui-kitten/components/devsupport";
import { ImageProps } from "react-native-svg";

export const SettingsIcon = (props?: Partial<ImageProps>): IconElement => (
  <Icon {...props} name="settings-outline" />
);
