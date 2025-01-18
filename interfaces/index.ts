export interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    className?: string;
}

export interface CardProps {
    title: string;
    description: string;
    price: number;
    image: string;
    location: string;
    rating?: number;
    onClick?: () => void;
}

export interface Address {
    state: string;
    city: string;
    country: string;
}

export interface Offers {
    bed: string;
    shower: string;
    occupants: string;
}

export interface Review {
    name: string;
    avatar: string;
    rating: number;
    comment: string;
}

export interface PropertyProps {
    name: string;
    address: Address;
    rating: number;
    category: string[];
    price: number;
    offers: Offers;
    image: string;
    discount: string;
    description?: string;
    reviews?: Review[];
}
