import { Modal } from "../../../../components";
import { Button, Card, Input, Text } from "@ui-kitten/components";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { ModalData, User } from "../../../../common/types";
import { View } from "react-native";
import { useAppTheme } from "../../../../hooks";
import { updateUserProfile } from "../../../../lib";
import { useStore } from "../../../../store";
import { updateErrorFormatter } from "../../../error";
import Toast from "react-native-toast-message";

interface EditModalProps {
  modalData: ModalData;
  setModalData: Dispatch<SetStateAction<ModalData | null>>;
}

export const EditModal: React.FC<EditModalProps> = ({ modalData, setModalData }) => {
  const { user, setUser } = useStore();

  if (!user) {
    return null;
  }

  const [value, setValue] = useState(user[modalData.key as keyof User]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);

  const { colorScheme } = useAppTheme();

  const handleChangeData = (value: string) => {
    setValue(value);
  };

  const handleClose = useCallback(() => {
    setModalData(null);
  }, []);

  const handleSubmit = useCallback(async () => {
    setError(null);

    const update = { [modalData.key as keyof User]: value! };

    setIsLoading(true);

    try {
      const { error, updatedUser } = await updateUserProfile(update, user.id);

      if (!error || updatedUser) {
        setUser(updatedUser as User);
        handleClose();

        return;
      }

      const formattedError = updateErrorFormatter(error);

      if (formattedError?.toast) {
        handleClose();
        Toast.show({ type: "error", text1: "Ops", text2: formattedError.toast });

        return;
      }

      setError(formattedError);
    } catch (error) {
      if (error instanceof Error) {
        Toast.show({ type: "error", text1: "Error", text2: error.message });
      }
    } finally {
      setIsLoading(false);
    }
  }, [value]);

  return (
    <Modal isVisible={!!modalData} handleClose={handleClose}>
      <Card
        disabled
        appearance="filled"
        style={{
          borderRadius: 10,
          backgroundColor: colorScheme === "light" ? "#e4e9f2" : "#343541",
        }}
      >
        <View style={{ gap: 15 }}>
          <Text category="h5">{modalData.label}</Text>
          <Input
            onChangeText={handleChangeData}
            value={value}
            clearButtonMode="always"
            disabled={isLoading}
            status={error ? "danger" : "basic"}
          />
          {error && (
            <Text category="h6" status="danger">
              {error.message}
            </Text>
          )}
          <View
            style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 10 }}
          >
            <Button status="danger" style={{ flex: 1 }} onPress={handleClose} disabled={isLoading}>
              Cancel
            </Button>
            <Button style={{ flex: 1 }} onPress={handleSubmit} disabled={isLoading || !value}>
              Update
            </Button>
          </View>
        </View>
      </Card>
    </Modal>
  );
};
