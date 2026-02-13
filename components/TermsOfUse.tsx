import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const TermsOfUse: React.FC = () => {
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
                        <span className="font-black text-2xl tracking-tight hidden sm:block" style={{ textShadow: '2px 2px 0 #1e3a8a', fontFamily: "'Outfit', sans-serif" }}>LIMEHILLS</span>
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
                    <h1 className="text-4xl md:text-6xl font-black text-[#1034a6] uppercase mb-4 tracking-tight leading-none" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        Terms of Use
                    </h1>
                    <p className="text-blue-600 font-bold mb-12 text-lg">
                        Effective Date: 8/12/2024
                    </p>

                    <div className="prose prose-lg prose-blue max-w-none text-slate-700">
                        {/* 1. Introduction */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 uppercase border-b-4 border-blue-200 pb-2 inline-block" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                1. Introduction
                            </h2>
                            <p className="leading-relaxed">
                                Welcome to Limehills Technologies Inc. (“we,” “our,” or “us”). These Terms of Use (“Terms”) govern your access to and use of our website, services, and any associated content or materials (collectively, the “Services”). By using our Services, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our Services.
                            </p>
                        </section>

                        {/* 2. Services Provided */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 uppercase border-b-4 border-blue-200 pb-2 inline-block" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                2. Services Provided
                            </h2>
                            <p className="leading-relaxed">
                                Limehills Technologies Inc. offers a range of software development, consulting, and related services. The specific services provided to you will be outlined in a separate contract or agreement. These Terms apply to all users of our Services, including clients, prospective clients, and visitors to our website.
                            </p>
                        </section>

                        {/* 3. User Responsibilities */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 uppercase border-b-4 border-blue-200 pb-2 inline-block" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                3. User Responsibilities
                            </h2>
                            <p className="mb-4">As a user of our Services, you agree to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-700 marker:text-blue-600">
                                <li>Provide accurate, current, and complete information when engaging with us.</li>
                                <li>Use our Services only for lawful purposes and in accordance with these Terms.</li>
                                <li>Respect the intellectual property rights of Limehills Technologies Inc. and third parties.</li>
                                <li>Refrain from engaging in any conduct that could harm our Services, reputation, or other users.</li>
                            </ul>
                        </section>

                        {/* 4. Intellectual Property */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 uppercase border-b-4 border-blue-200 pb-2 inline-block" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                4. Intellectual Property
                            </h2>
                            <ul className="list-none space-y-4 pl-0">
                                <li className="bg-blue-50 p-6 border-l-4 border-blue-600 rounded-r-lg">
                                    <strong className="block text-blue-900 mb-1 text-lg">Ownership</strong>
                                    All content, materials, software, and intellectual property created or provided by Limehills Technologies Inc. as part of our Services are owned by us or our licensors. You are granted a limited, non-exclusive, non-transferable license to use such materials solely for the purpose agreed upon in the relevant service agreement.
                                </li>
                                <li className="bg-blue-50 p-6 border-l-4 border-blue-600 rounded-r-lg">
                                    <strong className="block text-blue-900 mb-1 text-lg">Restrictions</strong>
                                    You may not reproduce, distribute, modify, or create derivative works from any of our intellectual property without our prior written consent.
                                </li>
                            </ul>
                        </section>

                        {/* 5. Payment Terms */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 uppercase border-b-4 border-blue-200 pb-2 inline-block" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                5. Payment Terms
                            </h2>
                            <ul className="grid md:grid-cols-3 gap-4 list-none pl-0">
                                <li className="bg-white border-2 border-blue-100 p-4 rounded shadow-sm">
                                    <strong className="text-blue-700 block mb-2">Fees</strong>
                                    The fees for our Services will be outlined in a separate contract or agreement. You agree to pay all fees and charges in accordance with the terms set forth in that agreement.
                                </li>
                                <li className="bg-white border-2 border-blue-100 p-4 rounded shadow-sm">
                                    <strong className="text-blue-700 block mb-2">Invoicing</strong>
                                    We will invoice you for Services provided according to the payment schedule specified in the agreement. Payment is due upon receipt unless otherwise stated.
                                </li>
                                <li className="bg-white border-2 border-blue-100 p-4 rounded shadow-sm">
                                    <strong className="text-blue-700 block mb-2">Late Payments</strong>
                                    Late payments may incur interest charges as specified in the service agreement. We reserve the right to suspend or terminate Services for non-payment.
                                </li>
                            </ul>
                        </section>

                        {/* 6. Confidentiality */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 uppercase border-b-4 border-blue-200 pb-2 inline-block" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                6. Confidentiality
                            </h2>
                            <ul className="list-none space-y-4 pl-0">
                                <li className="bg-blue-50 p-6 border-l-4 border-blue-600 rounded-r-lg">
                                    <strong className="block text-blue-900 mb-1 text-lg">Confidential Information</strong>
                                    Both parties agree to keep all confidential information disclosed during the course of the relationship private and secure. Confidential information includes, but is not limited to, business plans, strategies, financial information, and proprietary technology.
                                </li>
                                <li className="bg-blue-50 p-6 border-l-4 border-blue-600 rounded-r-lg">
                                    <strong className="block text-blue-900 mb-1 text-lg">Non-Disclosure</strong>
                                    You agree not to disclose any confidential information to third parties without our prior written consent, except as required by law.
                                </li>
                            </ul>
                        </section>

                        {/* 7. Limitation of Liability */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 uppercase border-b-4 border-blue-200 pb-2 inline-block" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                7. Limitation of Liability
                            </h2>
                            <div className="space-y-4">
                                <p>
                                    <strong className="text-blue-900">No Warranty:</strong> Our Services are provided “as is” and “as available” without any warranties of any kind, either express or implied. We do not guarantee that our Services will be uninterrupted, error-free, or meet your specific requirements.
                                </p>
                                <p>
                                    <strong className="text-blue-900">Liability Limitation:</strong> To the fullest extent permitted by law, Limehills Technologies Inc. and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from (i) your use or inability to use our Services; (ii) any unauthorized access to or use of our servers and/or any personal information stored therein; or (iii) any other matter relating to our Services.
                                </p>
                            </div>
                        </section>

                        {/* 8. Indemnification */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 uppercase border-b-4 border-blue-200 pb-2 inline-block" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                8. Indemnification
                            </h2>
                            <p className="leading-relaxed">
                                You agree to indemnify and hold harmless Limehills Technologies Inc., its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys’ fees, arising out of or in any way connected with your access to or use of our Services, or your violation of these Terms.
                            </p>
                        </section>

                        {/* 9. Termination */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 uppercase border-b-4 border-blue-200 pb-2 inline-block" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                9. Termination
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 text-slate-700 marker:text-blue-600">
                                <li><strong>Termination by You:</strong> You may terminate your use of our Services at any time by providing written notice to us, subject to the terms of any service agreement in place.</li>
                                <li><strong>Termination by Us:</strong> We may terminate or suspend your access to our Services at our discretion, without notice, if you violate these Terms or if your use of the Services could potentially harm us or other users.</li>
                                <li><strong>Effect of Termination:</strong> Upon termination, all rights granted to you under these Terms will cease, and you must immediately stop using the Services. Any outstanding payment obligations and sections regarding confidentiality, intellectual property, and liability will survive termination.</li>
                            </ul>
                        </section>

                        {/* 10. Governing Law */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 uppercase border-b-4 border-blue-200 pb-2 inline-block" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                10. Governing Law
                            </h2>
                            <p className="leading-relaxed">
                                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles. Any disputes arising out of or related to these Terms or our Services shall be resolved exclusively in the courts located in [Your Jurisdiction].
                            </p>
                        </section>

                        {/* 11. Changes to These Terms */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 uppercase border-b-4 border-blue-200 pb-2 inline-block" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                11. Changes to These Terms
                            </h2>
                            <p className="leading-relaxed">
                                We may update these Terms from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Terms on our website and updating the “Effective Date” above. Your continued use of our Services after such changes constitutes your acceptance of the new Terms.
                            </p>
                        </section>

                        {/* 12. Contact Us */}
                        <section className="mb-10 bg-blue-900 text-white p-8 rounded-xl shadow-[8px_8px_0px_#60a5fa] border-4 border-blue-400">
                            <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                12. Contact Us
                            </h2>
                            <p className="mb-4 text-blue-100">
                                If you have any questions or concerns about these Terms, please contact us at:
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

export default TermsOfUse;
