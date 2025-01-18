import { Review } from '@/interfaces';

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Reviews</h2>
            <div className="space-y-6">
                {reviews.map((review, index) => (
                    <div key={index} className="border-b pb-6">
                        <div className="flex items-center space-x-4">
                            <img
                                src={review.avatar}
                                alt={review.name}
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <p className="font-medium">{review.name}</p>
                                <div className="flex items-center">
                                    <span className="text-yellow-400">★</span>
                                    <span className="ml-1">{review.rating}</span>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-600">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;
