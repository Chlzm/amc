"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Phone, MessageSquare, QrCode, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const [loginMethod, setLoginMethod] = useState<"sms" | "wechat">("sms");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [isCodeSent, setIsCodeSent] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [qrCodeStatus, setQrCodeStatus] = useState<"waiting" | "scanned" | "confirmed">("waiting");

    useEffect(() => {
        if (loginMethod === "wechat") {
            simulateWechatScan();
        }
    }, [loginMethod]);

    if (!isOpen) return null;

    const handleSendCode = async () => {
        if (!phoneNumber || phoneNumber.length !== 11) return;

        setIsLoading(true);
        // 模拟发送验证码
        setTimeout(() => {
            setIsCodeSent(true);
            setIsLoading(false);
            setCountdown(60);

            // 倒计时
            const timer = setInterval(() => {
                setCountdown(prev => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }, 1000);
    };

    const handleSmsLogin = async () => {
        if (!verificationCode || verificationCode.length !== 6) return;

        setIsLoading(true);
        // 模拟登录验证
        setTimeout(() => {
            setIsLoading(false);
            onClose();
            // 这里可以处理登录成功后的逻辑
        }, 1500);
    };

    const simulateWechatScan = () => {
        // 模拟微信扫码流程
        setTimeout(() => setQrCodeStatus("scanned"), 3000);
        setTimeout(() => setQrCodeStatus("confirmed"), 5000);
        setTimeout(() => onClose(), 6000);
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-md shadow-2xl border-0 relative">
                <Button variant="ghost" size="sm" onClick={onClose} className="absolute right-4 top-4 z-10 hover:bg-gray-100">
                    <X className="w-4 h-4" />
                </Button>

                <CardContent className="p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">E</span>
                            </div>
                            <span className="text-2xl font-bold text-gray-900">EduTech Pro</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">欢迎回来</h2>
                        <p className="text-gray-600">选择您喜欢的登录方式</p>
                    </div>

                    {/* Login Method Tabs */}
                    <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
                        <button
                            onClick={() => setLoginMethod("sms")}
                            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-all ${
                                loginMethod === "sms"
                                    ? "bg-white text-purple-600 shadow-sm font-medium"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            <Phone className="w-4 h-4" />
                            <span>短信登录</span>
                        </button>
                        <button
                            onClick={() => setLoginMethod("wechat")}
                            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-all ${
                                loginMethod === "wechat"
                                    ? "bg-white text-purple-600 shadow-sm font-medium"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            <MessageSquare className="w-4 h-4" />
                            <span>微信登录</span>
                        </button>
                    </div>

                    {/* SMS Login Form */}
                    {loginMethod === "sms" && (
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-gray-700 font-medium">
                                    手机号码
                                </Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="请输入11位手机号码"
                                    value={phoneNumber}
                                    onChange={e => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 11))}
                                    className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                                />
                            </div>

                            {isCodeSent && (
                                <div className="space-y-2">
                                    <Label htmlFor="code" className="text-gray-700 font-medium">
                                        验证码
                                    </Label>
                                    <div className="flex space-x-3">
                                        <Input
                                            id="code"
                                            type="text"
                                            placeholder="请输入6位验证码"
                                            value={verificationCode}
                                            onChange={e => setVerificationCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                                            className="h-12 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                                        />
                                        <Button
                                            variant="outline"
                                            onClick={handleSendCode}
                                            disabled={countdown > 0 || isLoading}
                                            className="h-12 px-4 whitespace-nowrap border-gray-300"
                                        >
                                            {countdown > 0 ? `${countdown}s` : "重新发送"}
                                        </Button>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-4">
                                {!isCodeSent ? (
                                    <Button
                                        onClick={handleSendCode}
                                        disabled={!phoneNumber || phoneNumber.length !== 11 || isLoading}
                                        className="w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                发送中...
                                            </>
                                        ) : (
                                            "获取验证码"
                                        )}
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={handleSmsLogin}
                                        disabled={!verificationCode || verificationCode.length !== 6 || isLoading}
                                        className="w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                登录中...
                                            </>
                                        ) : (
                                            "立即登录"
                                        )}
                                    </Button>
                                )}
                            </div>
                        </div>
                    )}

                    {/* WeChat QR Code Login */}
                    {loginMethod === "wechat" && (
                        <div className="text-center space-y-6">
                            <div className="relative mx-auto w-48 h-48 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                                {qrCodeStatus === "waiting" && (
                                    <div className="text-center space-y-3">
                                        <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
                                            <QrCode className="w-16 h-16 text-purple-600" />
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Image
                                                src="/placeholder.svg?height=180&width=180"
                                                alt="微信二维码"
                                                width={180}
                                                height={180}
                                                className="rounded-lg"
                                            />
                                        </div>
                                    </div>
                                )}

                                {qrCodeStatus === "scanned" && (
                                    <div className="text-center space-y-3">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                            <CheckCircle className="w-8 h-8 text-green-600" />
                                        </div>
                                        <p className="text-green-600 font-medium">扫码成功</p>
                                        <p className="text-gray-600 text-sm">请在手机上确认登录</p>
                                    </div>
                                )}

                                {qrCodeStatus === "confirmed" && (
                                    <div className="text-center space-y-3">
                                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                                            <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
                                        </div>
                                        <p className="text-purple-600 font-medium">登录中...</p>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <p className="text-gray-900 font-medium">使用微信扫码登录</p>
                                <p className="text-gray-600 text-sm">
                                    {qrCodeStatus === "waiting" && "请使用微信扫描上方二维码"}
                                    {qrCodeStatus === "scanned" && "扫码成功，请在手机上确认"}
                                    {qrCodeStatus === "confirmed" && "正在为您登录..."}
                                </p>
                            </div>

                            <Button
                                variant="outline"
                                onClick={() => {
                                    setQrCodeStatus("waiting");
                                    simulateWechatScan();
                                }}
                                className="text-purple-600 border-purple-600 hover:bg-purple-50"
                            >
                                刷新二维码
                            </Button>
                        </div>
                    )}

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-center text-sm text-gray-600">
                            登录即表示您同意我们的
                            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                                服务条款
                            </a>
                            和
                            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                                隐私政策
                            </a>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
