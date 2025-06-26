"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

export default function Component() {
    const [currentVideo, setCurrentVideo] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const mainVideoRef = useRef<HTMLVideoElement>(null);
    const thumbnailRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const videos = [
        {
            id: 0,
            name: "Ankur Gupta, CFA",
            title: "Vice President, Sustainable Investing",
            company: "Northern Trust Asset Management",
            quote: "I work as Vice President, Sustainable Investing",
            videoUrl: "/placeholder.svg?height=600&width=1000", // In real app, this would be actual video URLs
            posterUrl: "/placeholder.svg?height=600&width=1000",
        },
        {
            id: 1,
            name: "Ankur Gupta, CFA",
            title: "Vice President, Sustainable Investing",
            company: "Northern Trust Asset Management",
            quote: "I work as Vice President, building sustainable portfolios",
            videoUrl: "/placeholder.svg?height=400&width=600",
            posterUrl: "/placeholder.svg?height=400&width=600",
        },
        {
            id: 2,
            name: "Wenting Zhou, CFA",
            title: "Investment Manager",
            company: "Manulife Investment Management",
            quote: "I work as Investment Manager at Manulife Investment Management",
            videoUrl: "/placeholder.svg?height=400&width=600",
            posterUrl: "/placeholder.svg?height=400&width=600",
        },
        {
            id: 3,
            name: "Oren Cohen, CFA",
            title: "Senior Vice President",
            company: "Bank Hapoalim",
            quote: "The recognition I've gained through CFA has been invaluable",
            videoUrl: "/placeholder.svg?height=400&width=600",
            posterUrl: "/placeholder.svg?height=400&width=600",
        },
        {
            id: 4,
            name: "Arielle L. Jimenez, CFA, CFP",
            title: "Senior Financial Advisor",
            company: "Merrill Lynch",
            quote: "I represent a Latina success story in finance",
            videoUrl: "/placeholder.svg?height=400&width=600",
            posterUrl: "/placeholder.svg?height=400&width=600",
        },
    ];

    const togglePlayPause = () => {
        if (mainVideoRef.current) {
            if (isPlaying) {
                mainVideoRef.current.pause();
            } else {
                mainVideoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (mainVideoRef.current) {
            mainVideoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleVideoSelect = (videoId: number) => {
        setCurrentVideo(videoId);
        setIsPlaying(false);
        setIsLoading(true);

        // Pause all thumbnail videos
        thumbnailRefs.current.forEach(video => {
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });
    };

    const nextSlide = () => {
        const nextIndex = (currentVideo + 1) % videos.length;
        handleVideoSelect(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex = (currentVideo - 1 + videos.length) % videos.length;
        handleVideoSelect(prevIndex);
    };

    const handleMainVideoLoad = () => {
        setIsLoading(false);
    };

    const handleThumbnailHover = (index: number, isHovering: boolean) => {
        const video = thumbnailRefs.current[index];
        if (video) {
            if (isHovering) {
                video.play();
            } else {
                video.pause();
                video.currentTime = 0;
            }
        }
    };

    useEffect(() => {
        // Reset main video when current video changes
        if (mainVideoRef.current) {
            mainVideoRef.current.load();
            setIsPlaying(false);
        }
    }, [currentVideo]);

    const visibleThumbnails = videos.filter((_, index) => index !== currentVideo).slice(0, 4);

    return (
        <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 py-16 px-4">
            <div className="max-w-[1150px] mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-light text-white mb-4">Voices of our community</h1>
                    <p className="text-lg md:text-xl text-white/90 font-light">Hear from CFA Institute alumni across the world.</p>
                </div>

                {/* Main Video Section */}
                <div className="relative mb-8">
                    <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                        {/* Main Video */}
                        <video
                            ref={mainVideoRef}
                            className="w-full h-full object-cover"
                            poster={videos[currentVideo].posterUrl}
                            muted={isMuted}
                            onLoadedData={handleMainVideoLoad}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            onEnded={() => setIsPlaying(false)}
                            preload="metadata"
                        >
                            <source src={videos[currentVideo].videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Loading Overlay */}
                        {isLoading && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        )}

                        {/* Video Controls Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                            {/* Play/Pause Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="w-20 h-20 bg-black/70 hover:bg-black/80 rounded-full text-white border-0"
                                    onClick={togglePlayPause}
                                >
                                    {isPlaying ? (
                                        <Pause className="w-8 h-8" fill="white" />
                                    ) : (
                                        <Play className="w-8 h-8 ml-1" fill="white" />
                                    )}
                                </Button>
                            </div>

                            {/* Volume Control */}
                            <div className="absolute top-4 right-4">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="w-12 h-12 bg-black/70 hover:bg-black/80 rounded-full text-white border-0"
                                    onClick={toggleMute}
                                >
                                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                </Button>
                            </div>
                        </div>

                        {/* Video Info Overlay - Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                            <div className="flex items-end justify-between">
                                <div className="bg-blue-900/90 px-6 py-4 rounded-lg max-w-md">
                                    <h3 className="text-white text-xl font-semibold mb-1">{videos[currentVideo].name}</h3>
                                    <p className="text-white/90 text-sm leading-relaxed">{videos[currentVideo].title}</p>
                                    <p className="text-white/90 text-sm">{videos[currentVideo].company}</p>
                                </div>

                                <div className="bg-black/60 px-6 py-3 rounded-lg max-w-md">
                                    <p className="text-white text-lg font-light">"{videos[currentVideo].quote}"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Thumbnail Carousel */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/20 hover:bg-white/30 text-white border-0 rounded-full w-12 h-12"
                        onClick={prevSlide}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/20 hover:bg-white/30 text-white border-0 rounded-full w-12 h-12"
                        onClick={nextSlide}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </Button>

                    {/* Thumbnails Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {visibleThumbnails.map((video, index) => (
                            <div
                                key={video.id}
                                className="relative aspect-video bg-black rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-lg group"
                                onClick={() => handleVideoSelect(video.id)}
                                onMouseEnter={() => handleThumbnailHover(index, true)}
                                onMouseLeave={() => handleThumbnailHover(index, false)}
                            >
                                {/* Thumbnail Video */}
                                <video
                                    ref={el => {
                                        thumbnailRefs.current[index] = el;
                                    }}
                                    className="w-full h-full object-cover"
                                    poster={video.posterUrl}
                                    muted
                                    loop
                                    preload="metadata"
                                >
                                    <source src={video.videoUrl} type="video/mp4" />
                                </video>

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="w-12 h-12 bg-black/70 group-hover:bg-black/80 rounded-full flex items-center justify-center transition-colors">
                                        <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
                                    </div>
                                </div>

                                {/* Name Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                                    <div className="bg-blue-900/90 px-3 py-2 rounded text-xs">
                                        <p className="text-white font-medium truncate">{video.name}</p>
                                        <p className="text-white/80 text-xs truncate">{video.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
