import  { useState } from 'react';
import { Search, Calendar, Clock, MapPin, Train, ArrowRight, Star, Users } from 'lucide-react';

export const HomePage = () => {
    const [searchData, setSearchData] = useState({
        dari: '',
        ke: '',
        tanggal: '',
        penumpang: 1
    });

    const [activeTab, setActiveTab] = useState('cari');

    const popularRoutes = [
        { dari: 'Jakarta', ke: 'Surabaya', durasi: '8j 30m', harga: 'Rp 320.000', rating: 4.8 },
        { dari: 'Jakarta', ke: 'Bandung', durasi: '3j 15m', harga: 'Rp 150.000', rating: 4.7 },
        { dari: 'Jakarta', ke: 'Yogyakarta', durasi: '7j 45m', harga: 'Rp 280.000', rating: 4.9 },
        { dari: 'Surabaya', ke: 'Malang', durasi: '2j 30m', harga: 'Rp 85.000', rating: 4.6 }
    ];

    const trainTypes = [
        { nama: 'Argo Bromo Anggrek', kelas: 'Eksekutif', fasilitas: ['AC', 'Makanan', 'WiFi'] },
        { nama: 'Taksaka', kelas: 'Bisnis', fasilitas: ['AC', 'Snack', 'Charging Port'] },
        { nama: 'Gajayana', kelas: 'Ekonomi Premium', fasilitas: ['AC', 'Charging Port'] }
    ];

    const handleInputChange = (field: keyof typeof searchData, value: string) => {
        setSearchData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Train className="h-8 w-8 text-blue-600" />
                            <h1 className="text-2xl font-bold text-gray-900">KeretaKu</h1>
                        </div>
                        <nav className="flex space-x-6">
                            <button 
                                onClick={() => setActiveTab('cari')}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                    activeTab === 'cari' 
                                        ? 'bg-blue-600 text-white shadow-md' 
                                        : 'text-gray-600 hover:text-blue-600'
                                }`}
                            >
                                Cari Tiket
                            </button>
                            <button 
                                onClick={() => setActiveTab('rute')}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                    activeTab === 'rute' 
                                        ? 'bg-blue-600 text-white shadow-md' 
                                        : 'text-gray-600 hover:text-blue-600'
                                }`}
                            >
                                Rute Populer
                            </button>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-8">
                {/* Hero Section dengan Form Pencarian */}
                {activeTab === 'cari' && (
                    <>
                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Pesan Tiket Kereta dengan Mudah
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Temukan jadwal kereta terbaik dan nikmati perjalanan nyaman ke seluruh Indonesia
                            </p>
                        </div>

                        {/* Form Pencarian */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 flex items-center">
                                        <MapPin className="h-4 w-4 mr-1 text-blue-600" />
                                        Stasiun Keberangkatan
                                    </label>
                                    <select 
                                        value={searchData.dari}
                                        onChange={(e) => handleInputChange('dari', e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    >
                                        <option value="">Pilih stasiun asal</option>
                                        <option value="jakarta">Jakarta Gambir</option>
                                        <option value="bandung">Bandung</option>
                                        <option value="surabaya">Surabaya Gubeng</option>
                                        <option value="yogya">Yogyakarta Tugu</option>
                                        <option value="solo">Solo Balapan</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 flex items-center">
                                        <MapPin className="h-4 w-4 mr-1 text-red-600" />
                                        Stasiun Tujuan
                                    </label>
                                    <select 
                                        value={searchData.ke}
                                        onChange={(e) => handleInputChange('ke', e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    >
                                        <option value="">Pilih stasiun tujuan</option>
                                        <option value="jakarta">Jakarta Gambir</option>
                                        <option value="bandung">Bandung</option>
                                        <option value="surabaya">Surabaya Gubeng</option>
                                        <option value="yogya">Yogyakarta Tugu</option>
                                        <option value="malang">Malang</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 flex items-center">
                                        <Calendar className="h-4 w-4 mr-1 text-green-600" />
                                        Tanggal Keberangkatan
                                    </label>
                                    <input 
                                        type="date"
                                        value={searchData.tanggal}
                                        onChange={(e) => handleInputChange('tanggal', e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 flex items-center">
                                        <Users className="h-4 w-4 mr-1 text-purple-600" />
                                        Jumlah Penumpang
                                    </label>
                                    <select 
                                        value={searchData.penumpang}
                                        onChange={(e) => handleInputChange('penumpang', e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    >
                                        {[1,2,3,4,5,6].map(num => (
                                            <option key={num} value={num}>{num} Penumpang</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg">
                                <Search className="h-5 w-5" />
                                <span>Cari Tiket Kereta</span>
                            </button>
                        </div>

                        {/* Jenis Kereta */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pilihan Kelas Kereta</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {trainTypes.map((train, index) => (
                                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                                        <div className="flex items-center justify-between mb-4">
                                            <h4 className="text-lg font-bold text-gray-900">{train.nama}</h4>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                                {train.kelas}
                                            </span>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-gray-600 font-medium">Fasilitas:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {train.fasilitas.map((fasilitas, idx) => (
                                                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
                                                        {fasilitas}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {/* Rute Populer */}
                {activeTab === 'rute' && (
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Rute Kereta Populer</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {popularRoutes.map((route, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="text-lg font-bold text-gray-900">{route.dari}</div>
                                            <ArrowRight className="h-5 w-5 text-gray-400" />
                                            <div className="text-lg font-bold text-gray-900">{route.ke}</div>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                            <span className="text-sm font-medium text-gray-700">{route.rating}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-between text-gray-600 mb-4">
                                        <div className="flex items-center space-x-1">
                                            <Clock className="h-4 w-4" />
                                            <span className="text-sm">{route.durasi}</span>
                                        </div>
                                        <div className="text-lg font-bold text-blue-600">{route.harga}</div>
                                    </div>

                                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                        Pesan Sekarang
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};