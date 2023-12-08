import { View } from "react-native";
import { Loader } from "../../../../components";
import { useCallback, useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

interface TrailerProps {
  videoId: string;
}

export const Trailer: React.FC<TrailerProps> = ({ videoId }) => {
  const [playing, setPlaying] = useState(false);
  const [loading, setIsLoading] = useState(true);

  const onStateChange = useCallback((state: any) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const handleLoaded = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <View style={{ height: 230 }}>
      {loading && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </View>
      )}
      <YoutubePlayer
        height={250}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
        onReady={handleLoaded}
      />
    </View>
  );
};
