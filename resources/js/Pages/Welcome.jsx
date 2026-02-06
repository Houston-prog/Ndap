import { Head, Link } from '@inertiajs/react';
import Navbar from './Home/Navbar';
import Hero from './Home/Hero';
import Locations from './Home/Locations';
import PropertyCard from './Home/PropertyCard';
import { useState } from 'react';
import About from './Home/About';
import Footer from './Home/Footer';
import PropertyModal from './Home/PropertyModal';
import Hereo from './Home/Hereo';

export default function Welcome({ auth, laravelVersion, phpVersion, properties }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(properties.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProperties = properties.slice(startIndex, endIndex);

    const openDetails = (property) => {
        setSelectedProperty(property);
        setIsModalOpen(true);
    };

    return (
        <div className='bg-neutral-950 min-h-screen'>
            <Head title="Welcome" />

            <Navbar />
            <Hereo />
            <Locations />

            {/* Section Featured */}
            <section className="py-20 max-w-7xl mx-auto px-4" id='properties'>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12'>
                    <div>
                        <span className="text-orange-500 font-semibold text-4xl uppercase tracking-wider">
                            Disponibilité
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                            Biens Immobiliers
                        </h2>
                    </div>
                    <div className="mt-4 sm:mt-0 flex items-center gap-2">
                        <span className="text-neutral-400 text-sm" id="results-count">
                            Total {properties.length} sur {properties.length}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paginatedProperties.map(item => (
                        <PropertyCard
                            key={item.id}
                            property={item}
                            onViewDetails={openDetails}
                        />
                    ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-12">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 rounded-lg bg-neutral-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-600 transition-colors"
                        >
                            ← Précédent
                        </button>

                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`px-3 py-2 rounded-lg font-bold transition-colors ${
                                        page === currentPage
                                            ? 'bg-orange-600 text-white'
                                            : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 rounded-lg bg-neutral-800 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-600 transition-colors"
                        >
                            Suivant →
                        </button>
                    </div>
                )}
            </section>

            {/* About section */}
            <About />

            {/* About section */}
            <Footer />

            {/* Modal unique */}
            <PropertyModal
                property={selectedProperty}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}
