import { Modal } from "../../../../components";
import { Button, Card, Text } from "@ui-kitten/components";
import { View } from "react-native";
import { useAppTheme } from "../../../../hooks";
import { FilledStarIcon, StarIcon } from "../../../icons";
import { useCallback, useMemo, useState } from "react";
import { rateTitle } from "../../../../lib";
import { FullAnime } from "../../../../common/types";
import Toast from "react-native-toast-message";

interface RateModalProps {
  isVisible: boolean;
  handleClose: () => void;
  rating: number | null;
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
  title: FullAnime;
  userId: string;
}

export const RateModal: React.FC<RateModalProps> = ({
  isVisible,
  handleClose,
  rating,
  setRating,
  title,
  userId,
}) => {
  const { colorScheme } = useAppTheme();

  const [newRating, setNewRating] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRate = useCallback((value: number) => {
    setNewRating(value);
  }, []);

  const starsCount = useMemo(() => newRating || rating, [newRating, rating]);

  const submitRating = useCallback(async () => {
    if (!newRating) {
      return;
    }
    setIsLoading(true);
    try {
      const error = await rateTitle(title, userId, newRating);

      if (error) {
        Toast.show({ type: "error", text1: "Error", text2: error.message });

        return;
      }

      setRating(newRating);
    } catch (error) {
      if (error instanceof Error) {
        Toast.show({ type: "error", text1: "Error", text2: error.message });
      }
    } finally {
      setIsLoading(false);
      onClose();
    }
  }, [title, userId, newRating]);

  const onClose = useCallback(() => {
    setNewRating(null);
    handleClose();
  }, []);

  return (
    <Modal isVisible={isVisible} handleClose={onClose}>
      <Card
        disabled
        appearance="filled"
        style={{
          borderRadius: 10,
          backgroundColor: colorScheme === "light" ? "#e4e9f2" : "#343541",
        }}
      >
        <View style={{ gap: 15, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Text category="h5">Rate title</Text>
          <View style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            {Array.from({ length: 5 }, (_, index) => (
              <Button
                key={index}
                onPress={() => handleRate(index + 1)}
                appearance="ghost"
                size="small"
                status="warning"
                accessoryLeft={
                  starsCount && index + 1 <= starsCount ? <FilledStarIcon /> : <StarIcon />
                }
              />
            ))}
          </View>
          <View
            style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 10 }}
          >
            <Button
              status="danger"
              size="small"
              style={{ flex: 1 }}
              onPress={handleClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              size="small"
              style={{ flex: 1 }}
              onPress={submitRating}
              disabled={isLoading || !newRating}
            >
              Rate
            </Button>
          </View>
        </View>
      </Card>
    </Modal>
  );
};
