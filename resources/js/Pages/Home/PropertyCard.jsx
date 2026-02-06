import { Locate, LocateIcon } from 'lucide-react';
import React from 'react';

export default function PropertyCard({ property, onViewDetails }) {
    return (
        <div className="group bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-orange-500/50 transition-all duration-300 shadow-xl">
            <div className="relative h-64 overflow-hidden">
                {property.images && Array.isArray(property.images) && property.images.length > 0 ? (
                        <img src={`/storage/${property.images[0]}`} className="object-cover w-full h-full" alt={property.title} />
                    ) : (
                        "🏠"
                )}

                <div className="absolute top-4 left-4 right-4 flex justify-between gap-2">
                    <div className="bg-orange-600 text-white px-3 py-1 rounded-lg font-bold">
                        {new Intl.NumberFormat().format(property.price)} FCFA
                    </div>
                    <div className="bg-neutral-400 text-white px-3 py-1 rounded-lg font-bold">
                        <LocateIcon className="inline mr-2 w-4 h-4" />
                        {property.location}
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="text-orange-500 text-sm font-semibold mb-2">
                    <LocateIcon className="inline mr-2 w-4 h-4" />
                    {property.locality}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{property.title}</h3>

                <div className="flex justify-between border-t border-neutral-800 pt-4 text-neutral-400 text-sm">
                    <span>🛏️ {property.bedrooms} Chambres</span>
                    <span>🚿 {property.bathrooms} Salle de bain</span>
                    <span>📏 {property.area} m²</span>
                </div>

                <button
                    onClick={() => onViewDetails(property)}
                    className="w-full mt-6 bg-neutral-800 hover:bg-orange-600 text-white py-3 rounded-xl font-bold transition-colors"
                >
                    Détails du bien
                </button>
            </div>
        </div>
    );
}
