import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
const Gallery = () => {
  const mediaItemsInitial = [
    // 6 images
    { type: "image", src: "./assets/gallery/rao1.jpg", alt: "Image 1" },
    { type: "image", src: "./assets/gallery/child1.jpg", alt: "Image 2" },
    { type: "image", src: "./assets/gallery/child2.jpg", alt: "Image 3" },
    { type: "image", src: "./assets/gallery/child3.jpg", alt: "Image 4" },
    { type: "image", src: "./assets/gallery/child4.jpg", alt: "Image 5" },
    { type: "image", src: "./assets/gallery/equip.jpg", alt: "Image 6" },
    // 5 videos
    { type: "video", src: "./assets/gallery/v1.mp4", alt: "Video 1" },

    { type: "video", src: "./assets/gallery/v3.mp4", alt: "Video 2" },
    { type: "video", src: "./assets/gallery/v2.mp4", alt: "Video 3" },
    { type: "video", src: "./assets/gallery/v4.mp4", alt: "Video 4" },
    { type: "video", src: "./assets/gallery/v5.mp4", alt: "Video 5" },
  ];

  const shuffleArray = (array) => {
    let newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const [mediaItems, setMediaItems] = useState(shuffleArray(mediaItemsInitial));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    const videos = document.querySelectorAll(".gallery-item video");
    videos.forEach((video) => {
      video.muted = true;
      observer.observe(video);
    });

    return () => {
      videos.forEach((video) => observer.unobserve(video));
    };
  }, [mediaItems]);

  return (
    <section className="py-10 bg-gray-100 mt-12 text-center bg-gradient-to-r from-background-light to-background ">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Gallery
        </motion.h1>
        <div className="columns-2 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {mediaItems.map((item, idx) => (
            <div key={idx} className="gallery-item break-inside-avoid">
              {item.type === "image" ? (
                <img src={item.src} alt={item.alt} className="w-full h-auto" />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-auto"
                  loop
                  playsInline
                  controls={false}
                  preload="metadata"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
