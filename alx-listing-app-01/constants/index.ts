import { PropertyProps } from "@/interfaces";


export const PLACEHOLDER_IMAGES = {
    VILLA: '/assets/placeholder.jpg',
    CABIN: '/assets/cozymoutain.jpg',
    LOFT: '/assets/nyloft.jpg',
    MOUNTAIN: '/assets/mountain.jpg',
    DESERT: '/assets/desert.jpg',
    BEACHFRONT: '/assets/beachfront.jpg',
    LAKESIDE: '/assets/lakeside.jpg',
    TROPICAL: '/assets/tropical.jpg',
    PENTHOUSE: '/assets/penthouse.jpg',
    COASTAL: '/assets/costal.jpg',
    CLIFFSIDE: '/assets/cliffside.jpg',
    HISTORICAL: '/assets/historical.jpg',
    DOWNTOWN: '/assets/downtown.jpg',
    SAFARI: '/assets/safari.jpg',
    COTTAGE: '/assets/cottage.jpg',
    RIVERFRONT: '/assets/riverfront.jpg',
    SKI: '/assets/ski.jpg',
    ISLAND: '/assets/island.jpg',
    RETREAT: '/assets/retreat.jpg',
    DEFAULT: '/assets/default-property.jpg'
};

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
    {
        name: "VillaOceanBreeze",
        address: {
            state: "Seminyak",
            city: "Bali",
            country: "Indonesia"
        },
        rating: 4.89,
        category: ["Luxury Villa", "Pool", "Free Parking"],
        price: 3200,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-6"
        },
        image: PLACEHOLDER_IMAGES.VILLA,
        discount: "",
        description: "Experience luxury living in this stunning oceanfront villa. Featuring breathtaking views, a private infinity pool, and modern amenities throughout.",
        reviews: [
            {
                name: "John Smith",
                avatar: "/assets/avatars/avatar1.jpg",
                rating: 5,
                comment: "Absolutely stunning property! The views were incredible and the staff was amazing."
            },
            {
                name: "Sarah Johnson",
                avatar: "/assets/avatars/avatar2.jpg",
                rating: 4.8,
                comment: "Perfect location and beautiful interior. Would definitely stay again!"
            }
        ]
    },
    {
        name: "MountainEscapeChalet",
        address: {
            state: "Aspen",
            city: "Colorado",
            country: "USA"
        },
        rating: 4.70,
        category: ["Mountain View", "Fireplace", "Self Checkin"],
        price: 1800,
        offers: {
            bed: "4",
            shower: "2",
            occupants: "5-7"
        },
        image: PLACEHOLDER_IMAGES.MOUNTAIN,
        discount: "30",
        description: "Cozy mountain retreat with stunning views of the Rockies. Perfect for family gatherings or ski trips.",
        reviews: [
            {
                name: "Michael Brown",
                avatar: "/assets/avatars/avatar3.jpg",
                rating: 4.7,
                comment: "Great location for skiing! The fireplace was perfect after a day on the slopes."
            }
        ]
    }
];
