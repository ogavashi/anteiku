import { Input } from "@ui-kitten/components";
import { useCallback, useState } from "react";
import { Image, View } from "react-native";

export const AccountForm = () => {
  const user = {
    fullName: "Test User",
    username: "testUser",
  };

  const [formatted, setFormatted] = useState("@" + user.username);

  const handleFocus = useCallback(() => {
    setFormatted((prev) => (prev.startsWith("@") ? user.username : "@" + user.username));
  }, [user.username]);

  return (
    <View style={{ paddingVertical: 10 }}>
      <Image
        style={{
          height: 302,
        }}
        source={{
          uri: "https://i0.wp.com/omnigeekempire.com/wp-content/uploads/2023/02/the-eminence-in-shadow-cid-visual-1.webp?fit=800%2C450&ssl=1",
        }}
      />
      <View style={{ padding: 10, gap: 10 }}>
        <Input label="Full Name" value={user.fullName} />
        <Input label="Username" value={formatted} onBlur={handleFocus} />
      </View>
    </View>
  );
};
