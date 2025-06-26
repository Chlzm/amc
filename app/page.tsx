"use client";
import Image from "next/image";
import { ChevronDown, Search, ShoppingCart, ChevronLeft, ChevronRight, Play, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Video from "./components/custom/video";
import Footer from "./components/custom/footer";
import React from "react";
import { useState } from "react";

export default function HomePage() {
    const [currentPage, setCurrentPage] = React.useState(1);
    const programsPerPage = 4; // Adjust this number based on your needs
    const totalPrograms = 8; // Update this based on the actual number of programs

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Calculate the current programs to display
    const currentPrograms = [
        { title: "CIPM® Program" },
        { title: "Advanced Private Equity Certificate" },
        { title: "Private Equity Certificate" },
        { title: "Investment Foundations Certificate" },
        // Add more programs as needed
    ].slice((currentPage - 1) * programsPerPage, currentPage * programsPerPage);
    const programs = [
        {
            id: 1,
            title: "Private Equity Certificate",
            image: "/placeholder.svg?height=300&width=400",
            alt: "Modern office buildings with glass facades",
        },
        {
            id: 2,
            title: "Investment Foundations® Certificate",
            image: "/placeholder.svg?height=300&width=400",
            alt: "Professionals collaborating in an office environment",
        },
        {
            id: 3,
            title: "CFA® Program",
            image: "/placeholder.svg?height=300&width=400",
            alt: "Professional businessman in a suit",
            highlight: true,
        },
        {
            id: 4,
            title: "ESG Investing Certificate",
            image: "/placeholder.svg?height=300&width=400",
            alt: "Sustainable finance concept",
        },
        {
            id: 5,
            title: "Portfolio Management Certificate",
            image: "/placeholder.svg?height=300&width=400",
            alt: "Financial portfolio analysis",
        },
        {
            id: 6,
            title: "Risk Management Certificate",
            image: "/placeholder.svg?height=300&width=400",
            alt: "Risk assessment and management",
        },
        {
            id: 7,
            title: "Quantitative Finance Certificate",
            image: "/placeholder.svg?height=300&width=400",
            alt: "Mathematical finance modeling",
        },
        {
            id: 8,
            title: "Alternative Investments Certificate",
            image: "/placeholder.svg?height=300&width=400",
            alt: "Alternative investment strategies",
        },
        {
            id: 9,
            title: "Fixed Income Certificate",
            image: "/placeholder.svg?height=300&width=400",
            alt: "Bond and fixed income analysis",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(2); // Start with CFA Program highlighted
    const itemsPerView = 3;

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex + itemsPerView >= programs.length ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? Math.max(0, programs.length - itemsPerView) : prevIndex - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const visiblePrograms = programs.slice(currentIndex, currentIndex + itemsPerView);

    const researchReports = [
        {
            category: "Research reports",
            title: "AI Washing: Signs, Symptoms, and Suggested Solutions for Investment Stakeholders",
            description:
                "This report addresses the ethical concerns and risks of AI washing in finance, providing crucial questions for stakeholders to evaluate managers' AI claims and ensure transparency, integrity, and the genuine application of AI in investment strategies.",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            category: "Survey report",
            title: "Investor Perspectives: Intangible Assets",
            description:
                "Intangible assets are fundamental to the modern economy but largely omitted from financial statements. Our survey of CFA Institute members finds that investors desire more recognition but are wary of the potential for abuse and therefore support greater transparency through disclosures.",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            category: "Research reports",
            title: "Capital Formation in Africa: A Case for Private Markets",
            description:
                "This report examines barriers to capital formation in 11 sub-Saharan African jurisdictions, emphasizing private markets, policy reforms, fintech, and public-private partnerships to boost investment, infrastructure financing, and economic resilience.",
            image: "/placeholder.svg?height=200&width=300",
        },
    ];

    const articles = [
        {
            date: "10 Jun 2025",
            title: "Human skills you need for a career in finance",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            date: "10 Jun 2025",
            title: "Healthspan investing: Finding value in longevity",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            date: "10 Jun 2025",
            title: "100 years and counting: The financial reality of extended longevity",
            image: "/placeholder.svg?height=200&width=300",
        },
    ];
    return (
        <div className="min-h-screen bg-white ">
            {/* Top Navigation Bar */}
            {/* <div className="bg-black text-white text-sm">
                <div className="max-w-[1150px] mx-auto py-2 flex justify-between items-center">
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-gray-300">
                            Business
                        </a>

                        <a href="#" className="hover:text-gray-300">
                            Universities
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            University students
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="hover:text-gray-300">
                            Sign In | Create Account
                        </a>
                        <ShoppingCart className="w-4 h-4" />
                    </div>
                </div>
            </div> */}

            {/* Main Navigation */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-[1150px] mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-8">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                    <BookOpen className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xl font-bold text-gray-900">AMC</span>
                            </div>
                            <nav className="hidden md:flex space-x-8">
                                <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">
                                    菜单一
                                </a>
                                <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">
                                    菜单二
                                </a>
                                <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">
                                    菜单三
                                </a>
                                <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">
                                    菜单四
                                </a>
                                <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">
                                    菜单五
                                </a>
                            </nav>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button variant="outline" className="bg-white text-gray-700 border-gray-300">
                                登录
                            </Button>
                            {/* <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">Get Started</Button> */}
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white">
                <div className="max-w-[1150px] mx-auto px-4 py-16 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">AMC考试政策重大调整</h1>
                            <p className="text-lg lg:text-xl text-blue-100 max-w-md">
                                AMC10/12: 2025年11月的考试将强制采用线下纸质形式，全球考生需前往指定考点参加，线上通道永久关闭
                            </p>
                            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full font-medium">
                                查看详情
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-400 to-purple-600 p-8 rounded-2xl">
                                <Image
                                    src="/wind-turbines.png"
                                    alt="Wind turbines along highway"
                                    width={500}
                                    height={300}
                                    className="rounded-lg w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-[1150px] mx-auto px-6 py-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                {/* Empowering the investment industry to realize the world's greatest possibilities */}
                                MAA协会，AMC系列禁赛介绍
                            </h1>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                CFA Institute is a global not-for-profit organization that provides finance education for investment
                                professionals. By promoting the highest standards of ethics, education and excellence, we help shape the
                                future of the industry for the ultimate benefit of society.
                            </p>

                            <Button
                                variant="outline"
                                size="lg"
                                className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50 rounded-full px-8 py-3"
                            >
                                查看更多
                            </Button>
                        </div>

                        {/* Right Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Active CFA Charterholders */}
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                                <div className="text-5xl font-bold mb-2">190k+</div>
                                <div className="text-lg font-medium">
                                    Active CFA
                                    <br />
                                    Charterholders
                                </div>
                            </div>

                            {/* Worldwide CFA Societies */}
                            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 text-gray-900">
                                <div className="text-5xl font-bold mb-2">155+</div>
                                <div className="text-lg font-medium">
                                    Worldwide CFA
                                    <br />
                                    Societies
                                </div>
                            </div>

                            {/* GIPS Standards */}
                            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white">
                                <div className="text-5xl font-bold mb-2">1.7k</div>
                                <div className="text-lg font-medium">
                                    Organizations claim
                                    <br />
                                    compliance with the
                                    <br />
                                    GIPS® standards
                                </div>
                            </div>

                            {/* Affiliated Universities */}
                            <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl p-8 text-gray-900">
                                <div className="text-6xl font-bold mb-2">830</div>
                                <div className="text-lg font-medium">Affiliated Universities</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Cards */}
            <section className=" bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <div className="max-w-[1150px] mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <div className="text-sm text-white uppercase tracking-wide">近期重要事件文章展示</div>
                            <h3 className="text-xl font-semibold">Level up your investment mastery at every stage of your career</h3>
                            <div className="text-green-400">→</div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-sm text-white uppercase tracking-wide">Ethics and standards</div>
                            <h3 className="text-xl font-semibold">Explore standards for investment professionals</h3>
                            <div className="text-green-400">→</div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-sm text-white uppercase tracking-wide">Professional network</div>
                            <h3 className="text-xl font-semibold">Join our global community leading the future of finance</h3>
                            <div className="text-green-400">→</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="bg-gray-50">
                <div className="bg-white">
                    {/* Header Section */}
                    <div className="max-w-6xl mx-auto py-16">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">禁赛二级页面入口</h2>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                CFA Institute offers a diverse range of programs and certificates designed to meet the needs of finance
                                professionals across various career stages and specializations.
                            </p>
                        </div>

                        {/* Programs Carousel */}
                        <div className="relative">
                            {/* Navigation Buttons */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-r-md transition-colors"
                                aria-label="Previous programs"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-l-md transition-colors"
                                aria-label="Next programs"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Programs Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16">
                                {visiblePrograms.map((program, index) => (
                                    <div key={program.id} className="group cursor-pointer">
                                        <div className="relative overflow-hidden rounded-lg mb-6">
                                            <Image
                                                src={program.image || "/placeholder.svg"}
                                                alt={program.alt}
                                                width={400}
                                                height={300}
                                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <h3 className={`text-xl font-semibold ${program.highlight ? "text-purple-600" : "text-gray-900"}`}>
                                            {program.title}
                                        </h3>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination Dots */}
                            <div className="flex justify-center mt-12 space-x-2">
                                {Array.from({ length: Math.ceil(programs.length / itemsPerView) }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-colors ${
                                            Math.floor(currentIndex / itemsPerView) === index
                                                ? "bg-purple-600"
                                                : "bg-gray-300 hover:bg-gray-400"
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Help Button */}

                        <div className="text-center mt-16">
                            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                                Help me choose
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <Video />
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container max-w-[1150px] mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">历史文章展示</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        {researchReports.map((report, index) => (
                            <Card key={index} className="overflow-hidden">
                                <CardContent className="p-0">
                                    <Image
                                        src={report.image || "/placeholder.svg"}
                                        alt={report.title}
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6 bg-gray-100">
                                        <p className="text-sm text-gray-600 mb-2">{report.category}</p>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{report.title}</h3>
                                        <p className="text-gray-600 text-sm">{report.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center">
                        <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">View more insights</Button>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-100">
                <div className="container max-w-[1150px] mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">学术性文章展示</h2>
                    </div>

                    <div className="relative">
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            {articles.map((article, index) => (
                                <Card key={index} className="overflow-hidden">
                                    <CardContent className="p-0">
                                        <Image
                                            src={article.image || "/placeholder.svg"}
                                            alt={article.title}
                                            width={300}
                                            height={200}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-6">
                                            <p className="text-sm text-gray-600 mb-2">{article.date}</p>
                                            <h3 className="text-xl font-semibold text-gray-900">{article.title}</h3>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="flex items-center justify-between mb-8">
                            <Button variant="outline" size="icon" className="bg-gray-800 text-white border-gray-800 hover:bg-gray-700">
                                <ChevronLeft className="w-4 h-4" />
                            </Button>

                            <div className="flex space-x-2">
                                {[...Array(7)].map((_, i) => (
                                    <div key={i} className={`w-3 h-3 rounded-full ${i === 0 ? "bg-purple-600" : "bg-gray-300"}`} />
                                ))}
                            </div>

                            <Button variant="outline" size="icon" className="bg-gray-800 text-white border-gray-800 hover:bg-gray-700">
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>

                        <div className="text-center">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                            >
                                View all
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
