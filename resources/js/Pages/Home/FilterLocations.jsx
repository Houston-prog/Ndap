import Navbar from './Navbar'
import React, { useState } from 'react'
import Footer from './Footer'
import FilterLocationCard from './FilterLocationCard'
import FilterLocationModal from './FilterLocationModal'
import { useForm } from '@inertiajs/react';

export default function FilterLocations({ properties }) {
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
        <Navbar />

        <section className='relative min-h-screen flex items-center bg-neutral-950 hero-pattern'>
            <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-orange-600/10'>
                <div className='relative z-10 max-w-7xl mx-auto px-4 py-32'>
                    <div>
                        <span className="text-orange-500 font-semibold text-4xl uppercase tracking-wider">
                            Disponibilité
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                            Biens Immobiliers
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {paginatedProperties.map(item => (
                            <FilterLocationCard
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

                </div>
            </div>
        </section>

        {/* About section */}
        <Footer />

        {/* Modal unique */}
        <FilterLocationModal
            property={selectedProperty}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
        />
    </div>
  )
}
