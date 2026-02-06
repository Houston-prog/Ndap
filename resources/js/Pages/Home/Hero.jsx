import { useEffect, useState } from "react";

export default function Hero() {
    const [ currentSlide, setCurrentSlide ] = useState();

    const slides = [
        {
            image: "images/slide1.jpg",
            title: "Trouvez votre maison de rêve",
            subtitle: "Découvrez des propriétés d'exception dans les meilleurs emplacements."
        },
        {
            image: "images/slide2.jpg",
            title: "Le luxe à votre portée",
            subtitle: "Des designs modernes et des finitions haut de gamme."
        },
        {
            image: "images/slide3.jpg",
            title: "Vues Imprenables",
            subtitle: "Des penthouses au cœur des métropoles les plus dynamiques."
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="accueil" className="relative min-h-screen flex items-center bg-neutral-950 hero-pattern">
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-orange-600/10">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="absolute inset-0 bg-black/50 z-10" />
                        <img src={slide.image} className="w-full h-full object-cover" alt="Hero" />
                    </div>
                ))} 
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
                    <div className="animate-fade-in">
                        <span class="inline-block bg-orange-600/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-orange-600/30"> 
                            Bienvenue sur Ndap-Un Toit 
                        </span>
                    </div>    
                    <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-pulse text-center">
                        Trouvez le <span className="text-orange-500">logement de vos rêves</span> 
                    </h1>

                    <p id="hero-subtitle" class="text-lg sm:text-xl text-center text-neutral-500 mb-10 leading-relaxed animate-slide-up stagger-1">
                        Découvrez les meilleurs logements adaptés à vos besoins et vos envies en un clic
                    </p>

                    {/* Search Box */}
                    <div className="bg-neutral-900/80 backdrop-blur-md p-6  rounded-2xl border border-neutral-800">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <select name="location" id="" className="bg-neutral-800 border-neutral-700 rounded-lg p-3 text-white">
                                <option value="ville">Ville</option>
                            </select>

                            <select name="locality" id="" className="bg-neutral-800 border-neutral-700 rounded-lg p-3 text-white">
                                <option value="quartier">Quartier</option>
                            </select>

                            <select name="type" id="" className="bg-neutral-800 border-neutral-700 rounded-lg p-3 text-white">
                                <option value="categories">Typologie</option>
                            </select>

                            <select name="location" id="" className="bg-neutral-800 border-neutral-700 rounded-lg p-3 text-white">
                                <option value="price">Prix</option>
                            </select>
                        </div>

                        <button className="bg-orange-600 p-3 gap-4 my-6 w-full text-white font-bold rounded-lg hover:bg-orange-500 transition-all">
                            Recherches
                        </button>
                    </div>

                    {/* Stats Rapides */}
                    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-12 animate-slide-up stagger-3 items-center justify-center">
                        {[['500+', 'Clients Satisfaits'], ['15K+', 'villes'], ['1.2+', 'Biens Immobiliers']].map(([val, label]) => (
                            <div key={label}>
                                <div className="text-3xl font-bold text-orange-500">{val}</div>
                                <div className="text-neutral-400 text-sm">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}