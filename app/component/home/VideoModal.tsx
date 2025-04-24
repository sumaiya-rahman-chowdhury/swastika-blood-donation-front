interface VideoModalType {
  showVideo: boolean;
  setShowVideo: React.Dispatch<React.SetStateAction<boolean>>;
}
function VideoModal({ showVideo, setShowVideo }: VideoModalType) {
  return (
    <div>
      {showVideo && (
        <div className="fixed inset-0  flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/vl85f9M5liY?si=bJarV86f4m1a6SoL"
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white bg-red-600 p-2 rounded-full hover:bg-red-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoModal;
