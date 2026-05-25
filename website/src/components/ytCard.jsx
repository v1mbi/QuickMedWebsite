import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function YtCard({ link }) {
  const [videoData, setVideoData] = useState({
    title: "Loading...",
    thumbnail: "",
  });

  useEffect(() => {
    if (!link) return;

    fetch(`https://www.youtube.com/oembed?url=${link}&format=json`)
      .then((res) => res.json())
      .then((data) => {
        setVideoData({
          title: data.title,
          thumbnail: data.thumbnail_url,
        });
      })
      .catch(() => {
        setVideoData({ title: "Video Not Found", thumbnail: "" });
      });
  }, [link]);

  return (
    <Link to={link} target="_blank" rel="noopener noreferrer" className="w-full">
    <div className="group relative w-full h-fit overflow-hidden rounded-[32px] border border-blue-100 bg-white shadow-lg shadow-blue-50 transition-all hover:shadow-xl hover:shadow-blue-100/50">
      {/* Thumbnail Container */}
      <div className="relative aspect-video overflow-hidden ">
        <div className="h-full w-full overflow-hidden rounded-3xl rounded-b-none bg-blue-50">
          {videoData.thumbnail ? (
            <img
              src={videoData.thumbnail}
              alt={videoData.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <div className="h-8 w-8 animate-pulse rounded-full bg-blue-200" />
            </div>
          )}
        </div>
        
        {/* Modern Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
           <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/90 text-white backdrop-blur-sm">
             <svg className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
             </svg>
           </div>
        </div>
      </div>

      {/* Modern Divider */}
      <div className="mx-4 h-[1px] bg-gradient-to-r from-transparent via-blue-100 to-transparent" />

      {/* Text Content */}
      <div className="bg-gradient-to-b from-white to-blue-50/30 px-5 py-6">
        <h2 className="line-clamp-2 font-jakarta text-sm font-semibold leading-relaxed text-blue-900 transition-colors group-hover:text-blue-600">
          {videoData.title}
        </h2>
        
        {/* Optional: Add a small "YouTube" tag for extra flair */}
        <div className="mt-3 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400/80">
            YouTube
          </span>
        </div>
      </div>
    </div>
    </Link>
  );
}