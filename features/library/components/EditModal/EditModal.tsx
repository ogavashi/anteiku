import { Button, Card, Input, Text } from "@ui-kitten/components";
import { Modal } from "../../../../components";
import { useAppTheme } from "../../../../hooks";
import { View } from "react-native";
import { LibraryModalData } from "../../../../common/types";
import { useCallback, useMemo } from "react";

interface EditModalProps {
  modalData: LibraryModalData;
  setModalData: React.Dispatch<React.SetStateAction<LibraryModalData | null>>;
}

export const EditModal: React.FC<EditModalProps> = ({ modalData, setModalData }) => {
  const { colorScheme } = useAppTheme();

  const handleClose = useCallback(() => {
    setModalData(null);
  }, []);

  const modalText = useMemo(() => {
    switch (modalData.mode) {
      case "create":
        return { title: "Create new collection", button: "Add" };
      case "update":
        return { title: "Edit collection", button: "Update" };
      case "delete":
        return { title: "Are you sure you want to delete ?", button: "Yes" };
    }
  }, [modalData]);

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
          <Text category="h5">{modalText.title}</Text>
          <Input onChangeText={() => {}} value={modalData.data} clearButtonMode="always" />
          <View
            style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 10 }}
          >
            <Button status="danger" style={{ flex: 1 }} onPress={handleClose}>
              Cancel
            </Button>
            <Button style={{ flex: 1 }} onPress={() => {}}>
              {modalText.button}
            </Button>
          </View>
        </View>
      </Card>
    </Modal>
  );
};
