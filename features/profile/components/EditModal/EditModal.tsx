import { Modal } from "../../../../components";
import { Button, Card, Input, Text } from "@ui-kitten/components";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { FormUser, ModalData } from "../../../../common/types";
import { View } from "react-native";
import { useAppTheme } from "../../../../hooks";

interface EditModalProps {
  modalData: ModalData;
  setModalData: Dispatch<SetStateAction<ModalData | null>>;
  onChange: (key: keyof FormUser, value: string) => void;
  user: FormUser;
}

export const EditModal: React.FC<EditModalProps> = ({
  modalData,
  setModalData,
  onChange,
  user,
}) => {
  const [value, setValue] = useState(user[modalData.key as keyof FormUser]);

  const { colorScheme } = useAppTheme();

  const handleChangeData = (value: string) => {
    setValue(value);
  };

  const handleClose = useCallback(() => {
    setModalData(null);
  }, []);

  const handleSubmit = useCallback(() => {
    onChange(modalData.key as keyof FormUser, value!);
    handleClose();
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
          <Input onChangeText={handleChangeData} value={value} clearButtonMode="always" />
          <View
            style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 10 }}
          >
            <Button status="danger" style={{ flex: 1 }} onPress={handleClose}>
              Cancel
            </Button>
            <Button style={{ flex: 1 }} onPress={handleSubmit}>
              Update
            </Button>
          </View>
        </View>
      </Card>
    </Modal>
  );
};
