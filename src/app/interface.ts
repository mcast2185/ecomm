export interface productInterface {
  _id: string,
  imageUrl: string,
  name: string,
  price: number,
  slug: string,
  categoryName: string
}

export interface categoryInterface {
   _id: string,
  name: string,
  price: number,
  slug: string,
  description: string,
  categoryName: string,
}

export interface fullProduct {
  _id: string,
  images: any,
  name: string,
  price: number,
  slug: string,
  categoryName: string,
  imageUrl: string,
  description: string
}

export interface productParams {
  params: {
    slug: string;
  }
};

export interface categoryParams {
  params: {
    categories: string;
  }
};

export interface imgProps {
  images: any
};