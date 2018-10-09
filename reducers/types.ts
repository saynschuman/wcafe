export interface Image {
  id: number
  image: string
}

export interface Article {
  id: string
  rent: {
    title: string;
    price: string;
    tax: string;
    description: string;
    price_square: string;
    furniture: {
      title: string;
    };
    equipment: {
      title: string;
    };
    rent_type: {
      title: string;
    };
  }
  square_kitchen: number
  price: string
  shortDescription: string
  district: {
    title: string;
  }
  floor: {
    title: string;
  }
  ceil_height: number
  square: string
  furniture: string
  power: string
  images: Image[]
}

export interface ReduxState {
  articles: {
    isLoaded: boolean;
    isLoading: boolean;
    items: Article[];
  }
}

export interface RouterQuery {
  square_from: string
  square_to: string
  price_from: string
  price_to: string
  power: string
  extract: boolean
  muzic: boolean
  elec: boolean
  furniture: boolean
}
