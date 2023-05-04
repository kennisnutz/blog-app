type Base = {
  _createdAt: string;
  _id: string;
  _rev: StringMappingType;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  authur: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

interface Authur extends Base {
  bio: Block[];
  image: Image;
  bane: string;
  slug: Slug;
}

interface Image {
  _type: 'image';
  asset: Reference;
}

interface Slug {
  _type: 'slug';
  currnet: string;
}

interface Block {
  _key: string;
  _type: 'block';
  childre: Span[];
  markDefs: any[];
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Span {
  _key: string;
  _type: 'span';
  marks: string[];
  text: string;
}
interface Category extends Base {
  description: string;
  title: string;
}

interface MainImage {
  _type: 'image';
  asset: Reference;
}

interface Title {
  _type: 'string';
  current: string;
}
