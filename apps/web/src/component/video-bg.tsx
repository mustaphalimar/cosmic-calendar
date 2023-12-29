"use client";

interface VideoBackgroundProps {}

const VideoBackground: React.FC<VideoBackgroundProps> = () => {
  return (
    <div>
      <video playsInline muted loop autoPlay className=" ">
        <source src="images/space-bg-video-1.mp4" type="video/mp4" />
      </video>
      <div className="w-full -z-10 h-screen bg-black opacity-20 absolute top-0 right-0" />
    </div>
  );
};
export default VideoBackground;
