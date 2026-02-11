import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white text-blue-900 font-sans selection:bg-blue-200 selection:text-blue-900 flex flex-col">
            {/* Header */}
            <header className="bg-blue-600 text-white py-6 px-4 md:px-8 border-b-8 border-blue-900 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="bg-white p-2 rounded-full border-2 border-blue-900 shadow-[4px_4px_0px_#1034a6] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[2px_2px_0px_#1034a6] transition-all">
                            <ArrowLeft className="w-5 h-5 text-blue-900" />
                        </div>
                        <span className="font-heading font-bold text-xl uppercase tracking-wider hidden sm:block">Back to Home</span>
                    </Link>
                    <div className="flex items-center gap-3">
                        <img src="/limehills.png" alt="Limehills Logo" className="h-10 w-10 object-contain drop-shadow-md" />
                        <span className="font-black text-2xl tracking-tight hidden sm:block" style={{ textShadow: '2px 2px 0 #1e3a8a' }}>LIMEHILLS</span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow max-w-4xl mx-auto px-6 py-12 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-black text-[#1034a6] uppercase mb-4 tracking-tight leading-none">
                        Privacy Policy
                    </h1>
                    <p className="text-blue-600 font-bold mb-12 text-lg">
                        Effective Date: 8/12/2024
                    </p>

                    <div className="prose prose-lg prose-blue max-w-none text-slate-700">
                        {/* 1. Introduction */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 uppercase border-b-4 border-blue-200 pb-2 inline-block">
                                1. Introduction
                            </h2>
                            <p className="leading-relaxed">
                                Limehills Technologies Inc. (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our website or use our services.
                            </p>
                        </section>

                        {/* 2. Information We Collect */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 uppercase border-b-4 border-blue-200 pb-2 inline-block">
                                2. Information We Collect
                            </h2>
                            <p className="mb-4">We collect various types of information, including:</p>
                            <ul className="list-none space-y-4 pl-0">
                                <li className="bg-blue-50 p-6 border-l-4 border-blue-600 rounded-r-lg">
                                    <strong className="block text-blue-900 mb-1 text-lg">Personal Information</strong>
                                    This includes your name, email address, phone number, job title, company name, and any other information you provide when you contact us, request a quote, or engage with our services.
                                </li>
                                <li className="bg-blue-50 p-6 border-l-4 border-blue-600 rounded-r-lg">
                                    <strong className="block text-blue-900 mb-1 text-lg">Project Information</strong>
                                    Details about your project requirements, goals, timelines, and other relevant information necessary for us to deliver our services.
                                </li>
                                <li className="bg-blue-50 p-6 border-l-4 border-blue-600 rounded-r-lg">
                                    <strong className="block text-blue-900 mb-1 text-lg">Technical Information</strong>
                                    Information collected automatically when you visit our website, such as your IP address, browser type, operating system, and pages visited. We may also collect information through cookies and similar technologies.
                                </li>
                                <li className="bg-blue-50 p-6 border-l-4 border-blue-600 rounded-r-lg">
                                    <strong className="block text-blue-900 mb-1 text-lg">Communication Data</strong>
                                    Records of our communications with you, including emails, phone calls, and chat conversations.
                                </li>
                            </ul>
                        </section>

                        {/* 3. How We Use Your Information */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 uppercase border-b-4 border-blue-200 pb-2 inline-block">
                                3. How We Use Your Information
                            </h2>
                            <p className="mb-4">We use the information we collect for the following purposes:</p>
                            <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                                <li className="bg-white border-2 border-blue-100 p-4 rounded shadow-sm">
                                    <strong className="text-blue-700 block mb-2">To Provide and Improve Our Services</strong>
                                    We use your information to deliver the services you have requested, manage projects, and improve the quality and effectiveness of our offerings.
                                </li>
                                <li className="bg-white border-2 border-blue-100 p-4 rounded shadow-sm">
                                    <strong className="text-blue-700 block mb-2">To Communicate with You</strong>
                                    We may use your contact information to send you updates, proposals, invoices, and other information related to our services. We may also send you marketing communications, which you can opt out of at any time.
                                </li>
                                <li className="bg-white border-2 border-blue-100 p-4 rounded shadow-sm">
                                    <strong className="text-blue-700 block mb-2">To Analyze and Improve Our Website</strong>
                                    We use technical information to analyze how our website is used, diagnose technical issues, and improve user experience.
                                </li>
                                <li className="bg-white border-2 border-blue-100 p-4 rounded shadow-sm">
                                    <strong className="text-blue-700 block mb-2">To Comply with Legal Obligations</strong>
                                    We may process your information to comply with legal obligations, such as tax and accounting requirements.
                                </li>
                            </ul>
                        </section>

                        {/* 4. How We Share Your Information */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 uppercase border-b-4 border-blue-200 pb-2 inline-block">
                                4. How We Share Your Information
                            </h2>
                            <p className="mb-4">We do not sell or rent your personal information. However, we may share your information under the following circumstances:</p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-700 marker:text-blue-600">
                                <li><strong>With Your Consent:</strong> We may share your information with third parties if you give us permission to do so.</li>
                                <li><strong>With Service Providers:</strong> We may share your information with third-party service providers who assist us in delivering our services, such as hosting providers, payment processors, and project management tools. These providers are required to protect your information and only use it for the purposes we specify.</li>
                                <li><strong>For Legal Reasons:</strong> We may disclose your information if required by law, or if we believe such action is necessary to comply with legal obligations, protect the rights or safety of others, or prevent fraud.</li>
                                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                            </ul>
                        </section>

                        {/* 5. Data Security */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 uppercase border-b-4 border-blue-200 pb-2 inline-block">
                                5. Data Security
                            </h2>
                            <p>
                                We implement appropriate technical and organizational measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.
                            </p>
                        </section>

                        {/* 6. Your Rights and Choices */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 uppercase border-b-4 border-blue-200 pb-2 inline-block">
                                6. Your Rights and Choices
                            </h2>
                            <p className="mb-4">You have the following rights regarding your information:</p>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-bold text-blue-800">Access and Update</h3>
                                    <p>You can request access to or update the personal information we hold about you at any time.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-blue-800">Opt-Out of Marketing</h3>
                                    <p>You can opt out of receiving marketing communications from us by following the unsubscribe instructions in any marketing email or by contacting us directly.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-blue-800">Delete Your Information</h3>
                                    <p>You can request the deletion of your personal information, subject to certain legal obligations we may have to retain it.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-blue-800">Cookies</h3>
                                    <p>You can manage your cookie preferences through your browser settings. Disabling cookies may affect the functionality of our website.</p>
                                </div>
                            </div>
                        </section>

                        {/* 7. Children’s Privacy */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 uppercase border-b-4 border-blue-200 pb-2 inline-block">
                                7. Children’s Privacy
                            </h2>
                            <p>
                                Our services are not directed to individuals under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information.
                            </p>
                        </section>

                        {/* 8. Changes to This Privacy Policy */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 uppercase border-b-4 border-blue-200 pb-2 inline-block">
                                8. Changes to This Privacy Policy
                            </h2>
                            <p>
                                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the “Effective Date” above.
                            </p>
                        </section>

                        {/* 9. Contact Us */}
                        <section className="mb-10 bg-blue-900 text-white p-8 rounded-xl shadow-[8px_8px_0px_#60a5fa] border-4 border-blue-400">
                            <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase">
                                9. Contact Us
                            </h2>
                            <p className="mb-4 text-blue-100">
                                If you have any questions or concerns about this Privacy Policy, please contact us at:
                            </p>
                            <div className="font-bold text-lg">
                                <p>Limehills Technologies Inc.</p>
                                <a href="mailto:support@limehills.tech" className="text-blue-300 hover:text-white underline decoration-2 underline-offset-4 transition-colors">
                                    support@limehills.tech
                                </a>
                            </div>
                        </section>

                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
