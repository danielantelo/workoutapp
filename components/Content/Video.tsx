import YoutubePlayer from 'react-native-youtube-iframe';
import { Video as ExpoVideo } from 'expo-av';

export const Video = ({ video, width = 320 }: { video: string; width?: number }) => {
  const height = width * (9 / 16);
  if (video.includes('http')) {
    return (
      <ExpoVideo
        style={{
          alignSelf: 'center',
          width,
          height,
        }}
        source={{
          uri: video,
        }}
        useNativeControls
      />
    );
  }

  return <YoutubePlayer width={width} height={height} videoId={video} />;
};
