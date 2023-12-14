import { Divider, Layout, Text } from "@ui-kitten/components";
import { useCallback, useState } from "react";
import { View } from "react-native";
import { EditModal } from "../EditModal";
import { ModalData } from "../../../../common/types";
import { useAppTheme } from "../../../../hooks";
import { DataRow } from "./DataRow";
import { Avatar } from "./Avatar";

export const AccountForm = () => {
  const mockUser = {
    fullName: "Test User",
    username: "testUser",
  };

  const { colorScheme } = useAppTheme();

  const [user, setUser] = useState<typeof mockUser>(mockUser);

  const [modalData, setModalData] = useState<ModalData | null>(null);

  const handleChangeData = useCallback((key: keyof typeof mockUser, value: string) => {
    setUser((prev) => ({ ...prev, [key]: value }));
  }, []);

  const addModalData = useCallback((key: keyof typeof mockUser, label: string) => {
    setModalData({ key, label });
  }, []);

  return (
    <View style={{ paddingVertical: 10 }}>
      <Avatar userUri="https://i0.wp.com/omnigeekempire.com/wp-content/uploads/2023/02/the-eminence-in-shadow-cid-visual-1.webp?fit=800%2C450&ssl=1" />
      <View style={{ margin: 10, gap: 10 }}>
        <Text category="h5">Personal information</Text>
        <Layout
          style={{
            borderRadius: 10,
            backgroundColor: colorScheme === "light" ? "#e4e9f2" : "#343541",
          }}
        >
          <View style={{ padding: 10, gap: 10 }}>
            <DataRow
              label="Full name"
              value={user.fullName}
              addModalData={() => addModalData("fullName", "Full name")}
            />
            <Divider />
            <DataRow
              label="Username"
              value={"@" + user.username}
              addModalData={() => addModalData("username", "Username")}
            />
          </View>
        </Layout>
      </View>
      {modalData && (
        <EditModal
          modalData={modalData}
          setModalData={setModalData}
          onChange={handleChangeData}
          user={user}
        />
      )}
    </View>
  );
};
