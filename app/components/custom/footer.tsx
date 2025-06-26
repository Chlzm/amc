import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

export default function Component() {
    return (
        <footer className="bg-gray-900  text-white py-16">
            <div className="container max-w-[1150px] mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">CFA Institute</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>Who we are</li>
                            <li>Governance</li>
                            <li>Press room</li>
                            <li>Events</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Programs</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>CFA® Program</li>
                            <li>All programs</li>
                            <li>Candidate resources</li>
                            <li>Help choosing a program</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Membership</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>Membership overview</li>
                            <li>CFA Societies</li>
                            <li>Volunteering</li>
                            <li>Renew membership</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal and support</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>Contact us</li>
                            <li>Privacy policy</li>
                            <li>Terms and conditions</li>
                            <li>Accessibility</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8">
                    <p className="text-gray-400 mb-4">© 2025 CFA Institute All rights reserved.</p>
                    <p className="text-gray-400 text-sm">
                        CFA®, Chartered Financial Analyst®, CIPM®, and GIPS® are registered trademarks owned by CFA Institute.
                    </p>
                </div>
            </div>
        </footer>
    );
}
