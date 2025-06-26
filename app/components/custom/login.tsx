"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoginModal from "./login-modal";

export default function LoginPage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
            {/* Header */}
            <header className="relative z-10 p-6">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-white">EduTech Pro</span>
                    </div>
                    <Button variant="ghost" className="text-white hover:bg-white/10" onClick={() => window.history.back()}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        返回首页
                    </Button>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left Side - Branding */}
                    <div className="text-center lg:text-left space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                                开启您的
                                <span className="block bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                                    学习之旅
                                </span>
                            </h1>
                            <p className="text-xl text-purple-100 leading-relaxed max-w-lg">
                                加入全球50万+学习者的行列，通过我们的专业课程和认证项目，实现职业生涯的跃升。
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">50K+</div>
                                <div className="text-purple-300 text-sm">活跃学员</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">95%</div>
                                <div className="text-purple-300 text-sm">就业成功率</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">200+</div>
                                <div className="text-purple-300 text-sm">专家导师</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                size="lg"
                                onClick={() => setShowModal(true)}
                                className="bg-white text-purple-900 hover:bg-purple-50 font-medium"
                            >
                                立即登录
                            </Button>
                            <Button size="lg" variant="outline" className="border-purple-300 text-purple-100 hover:bg-purple-800">
                                免费试听
                            </Button>
                        </div>
                    </div>

                    {/* Right Side - Visual */}
                    <div className="relative">
                        <div className="relative z-10">
                            <Image
                                src="/placeholder.svg?height=600&width=500"
                                alt="在线学习场景"
                                width={500}
                                height={600}
                                className="rounded-2xl shadow-2xl mx-auto"
                            />
                        </div>
                        <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl opacity-20"></div>

                        {/* Floating Cards */}
                        <div className="absolute -left-8 top-20 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                            <div className="text-2xl font-bold">4.9/5</div>
                            <div className="text-sm text-purple-200">学员满意度</div>
                        </div>

                        <div className="absolute -right-8 bottom-20 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                            <div className="text-2xl font-bold">$85K</div>
                            <div className="text-sm text-purple-200">平均薪资提升</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Login Modal */}
            <LoginModal isOpen={showModal} onClose={() => setShowModal(false)} />

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            </div>
        </div>
    );
}
