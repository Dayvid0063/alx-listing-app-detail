import { useState } from 'react';

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
    const [checkIn, setCheckIn] = useState<string>('');
    const [checkOut, setCheckOut] = useState<string>('');

    const calculateTotal = () => {
        if (!checkIn || !checkOut) return price;
        const startDate = new Date(checkIn);
        const endDate = new Date(checkOut);
        const diffTime = endDate.getTime() - startDate.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return price * Math.max(diffDays, 1);
    };

    return (
        <div className="bg-white p-6 shadow-lg rounded-lg sticky top-4">
            <h3 className="text-2xl font-semibold">${price} <span className="text-lg">/ night</span></h3>

            <div className="mt-6">
                <label className="block text-sm font-medium">Check-in</label>
                <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="mt-1 block w-full rounded-md border p-2"
                />
            </div>

            <div className="mt-4">
                <label className="block text-sm font-medium">Check-out</label>
                <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="mt-1 block w-full rounded-md border p-2"
                />
            </div>

            <div className="mt-6">
                <p className="text-lg">Total: ${calculateTotal()}</p>
            </div>

            <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                Reserve now
            </button>
        </div>
    );
};

export default BookingSection;
