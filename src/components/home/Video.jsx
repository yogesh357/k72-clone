 
const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        // className="h-full w-full object-cover"
         className="h-full w-full object-cover rounded-2xl"
        autoPlay
        loop
        muted
        src="/video/home_video.mp4"
      ></video>
    </div>
  );
};

export default Video;
