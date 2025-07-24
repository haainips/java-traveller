import { X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

// Helper function untuk memformat judul hari
const formatDayTitle = (dayKey) => {
    if (!dayKey.startsWith('hari')) return dayKey;
    const dayNumberText = dayKey.replace('hari', '');
    return `Hari ${dayNumberText.charAt(0).toUpperCase() + dayNumberText.slice(1)}`;
};

function CardModal({ isOpen, onClose, data }) {
    if (!isOpen || !data) return null;

    return (
        // Latar Belakang Overlay
        <div
            className="fixed inset-0 backdrop-blur-md shadow-2xl z-50 flex justify-center items-center p-4"
            onClick={onClose}
        > 
            {/* Gunakan Card sebagai kontainer utama modal */}
            <Card
                className="w-full lg:max-w-3xl lg:max-h-[40vw] flex flex-col px-10 py-6"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Modal */}
                <CardHeader className="flex flex-row items-center justify-between border-b">
                    <CardTitle className="text-2xl text-utama">{data.slug}</CardTitle>
                    <button onClick={onClose} className="p-[2px] rounded-full hover:bg-red-600 hover:text-white transition">
                        <X size={24} />
                    </button>
                </CardHeader>

                {/* Konten Modal dengan scroll */}
                <CardContent className="p-6 space-y-6 overflow-y-auto">
                    {/* Rundown Perjalanan */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Rundown Perjalanan</h3>
                        <div className="space-y-4">
                            {Object.entries(data.rundown[0]).map(([dayKey, activities]) => (
                                <div key={dayKey}>
                                    <p className="font-bold text-gray-800">{formatDayTitle(dayKey)}:</p>
                                    <ul className="list-disc ml-2 space-y-1 mt-1">
                                        {activities.map((activity, index) => (
                                            <li key={index} className="text-sm text-gray-700">{activity}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Fasilitas */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Fasilitas</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                <h4 className="font-bold text-green-700 mb-2">Include</h4>
                                <ul className="list-disc text-sm text-gray-600 px-4 space-y-1">
                                    {data.fasilitas[0].include.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                <h4 className="font-bold text-red-700 mb-2">Exclude</h4>
                                <ul className="list-disc text-sm text-gray-600 px-4 space-y-1">
                                    {data.fasilitas[0].exclude.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default CardModal;