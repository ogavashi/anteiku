import { BaseToast, ErrorToast } from "react-native-toast-message";
import { useAppTheme } from "../../../hooks";

export const toastConfig = {
  /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
  success: (props: any) => {
    const { colorScheme } = useAppTheme();

    return (
      <BaseToast
        {...props}
        style={{ backgroundColor: colorScheme === "light" ? "#e4e9f2" : "#343541" }}
        text1Style={{ color: colorScheme === "light" ? "black" : "white" }}
      />
    );
  },
  /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
  error: (props: any) => {
    const { colorScheme } = useAppTheme();

    return (
      <ErrorToast
        {...props}
        style={{ backgroundColor: colorScheme === "light" ? "#e4e9f2" : "#343541" }}
        text1Style={{ color: colorScheme === "light" ? "black" : "white" }}
        text2Style={{ color: colorScheme === "light" ? "black" : "white" }}
      />
    );
  },
};
