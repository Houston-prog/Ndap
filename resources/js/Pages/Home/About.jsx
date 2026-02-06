export default function About() {
    return (
        <section className="py-20 bg-neutral-900" id="about">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <span class="text-orange-500 font-semibold text-3xl uppercase tracking-wider">
                        Pourquoi nous ?
                    </span>
                    <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-3 mb-6">
                        Votre partenaire incontournable pour trouver l'habitation parfaite
                    </h2>
                    <p class="text-neutral-500 text-lg mb-8">
                        Trouver les plus belles offres près de vous, à travers notre vaste réseau de propiétaires
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-4">
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>

                                <h3 class="font-semibold text-white mb-1">
                                    Vous gerez avce le propiétaire
                                </h3>
                                <p class="text-neutral-400 text-sm">
                                    Nous vous mettons directement en contact avec les vrais propiétaires
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>

                                <h3 class="font-semibold text-white mb-1">
                                    Rapide et Efficace
                                </h3>
                                <p class="text-neutral-400 text-sm">
                                    Nous vous faisons gagner du temps, de l'energie et de l'argent
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 mt-4 lg:grid-cols-2 sm:grid-cols-1 gap-4">
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>

                                <h3 class="font-semibold text-white mb-1">
                                    Panoplie de choix
                                </h3>
                                <p class="text-neutral-400 text-sm">
                                    Large gamme de logements actualisée en permanence
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>

                                <h3 class="font-semibold text-white mb-1">
                                    Gratuit
                                </h3>
                                <p class="text-neutral-400 text-sm">
                                    100% gratuit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-orange-600/20 to-orange-600/5 rounded-3xl p-8 border border-orange-600/20">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-neutral-800 p-6 rounded-2xl text-center">
                            <div className="text-orange-500 text-3xl font-bold">500+</div>
                            <div className="text-neutral-400">
                                Biens immobiliers
                            </div>
                        </div>
                        <div className="bg-neutral-800 p-6 rounded-2xl text-center">
                            <div className="text-orange-500 text-3xl font-bold">98%</div>
                            <div className="text-neutral-400">
                                Clients satisfaits
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="bg-neutral-800 p-6 rounded-2xl text-center">
                            <div className="text-orange-500 text-3xl font-bold">50+</div>
                            <div className="text-neutral-400">
                                Représentants sur l'étendue du térritoire
                            </div>
                        </div>
                        <div className="bg-neutral-800 p-6 rounded-2xl text-center">
                            <div className="text-orange-500 text-3xl font-bold">24/7</div>
                            <div className="text-neutral-400">
                                Services
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    );
}