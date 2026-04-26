export const SITE = {
  name: "Heathen Household Services",
  tagline: "Professional Home Services",
  phoneDisplay: "716-450-0085",
  phoneTel: "7164500085",
  email: "Huntinheath1428@yahoo.com",
  addressLine1: "727 Warren Rd",
  addressLine2: "Frewsburg, NY, United States",
  logoUrl: "/household%20logo.jpg",
  ogImage:
    "https://i.postimg.cc/FRwZnhXN/430775657-361667176861393-2808929438620456387-n.jpg",
  pixelGuysUrl: "https://pixelguys.dev",
} as const;

/** Canonical site origin (matches production domain). */
export const SITE_BASE_URL = "https://heathenhouseholdservices.com" as const;

/** E.164 telephone for schema.org and structured data. */
export const SITE_PHONE_E164 = "+17164500085" as const;

/** Frewsburg area ZIP for LocalBusiness schema (optional; improves local SEO). */
export const SITE_ADDRESS_ZIP = "14738" as const;

export const BUSINESS_HOURS = [
  "Monday - Friday: 8:00 AM - 6:00 PM",
  "Saturday: 9:00 AM - 4:00 PM",
  "Sunday: Closed",
] as const;

/** 3×2 grid on homepage (matches live layout) */
export const SERVICE_AREAS_GRID = [
  "Frewsburg",
  "Jamestown",
  "Kennedy",
  "Falconer",
  "Lakewood",
  "Mayville",
] as const;

export const SERVICE_AREAS = [
  "Buffalo, NY",
  "Fredonia, NY",
  "Falconer, NY",
  "Jamestown, NY",
  "Kennedy, NY",
  "Lakewood, NY",
  "Mayville, NY",
  "Frewsburg, NY",
] as const;

export function serviceAreaSlug(areaLabel: string): string {
  return areaLabel
    .toLowerCase()
    .trim()
    .replace(/\s*,\s*/g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export function serviceAreaBySlug(slug: string): string | undefined {
  return SERVICE_AREAS.find((a) => serviceAreaSlug(a) === slug);
}

/** Homepage grid uses short names (e.g. “Frewsburg”); map to full “City, ST” slug. */
export function shortAreaNameToSlug(shortName: string): string {
  const full = SERVICE_AREAS.find((a) => a.startsWith(shortName.trim()));
  return full ? serviceAreaSlug(full) : serviceAreaSlug(`${shortName.trim()}, NY`);
}

export function allServiceAreaSlugs(): string[] {
  return SERVICE_AREAS.map((a) => serviceAreaSlug(a));
}

/** Hero + “Our Services” preview row (3 cards) */
export const FEATURED_SERVICES = [
  {
    title: "Remodels",
    description: "Kitchens, baths, and full-home updates with dependable craftsmanship.",
  },
  {
    title: "Power Washing",
    description: "Siding, decks, driveways, and more—restored to like-new shine.",
  },
  {
    title: "Decks & Fences",
    description: "Repairs, staining, and builds to match your property and budget.",
  },
] as const;

/** Homepage “Why Choose Us” — four cards, gold titles */
export const WHY_CHOOSE_HOME = [
  {
    title: "Experienced Team",
    body: "Skilled professionals with years of experience.",
  },
  {
    title: "Quality Work",
    body: "Only the highest quality materials for your projects.",
  },
  {
    title: "Reliable Service",
    body: "We approach every project with precision and care to deliver excellent results.",
  },
  {
    title: "Customer Satisfaction",
    body: "Your satisfaction is our top priority.",
  },
] as const;

export const WHY_CHOOSE = [
  {
    title: "Experienced Team",
    body: "Skilled professionals with years of experience.",
  },
  {
    title: "Quality Materials",
    body: "Only the highest quality materials for your projects.",
  },
  {
    title: "Fast Service",
    body: "Quick response times and efficient project completion.",
  },
  {
    title: "Licensed & Insured",
    body: "Commercial & residential work with workers compensation coverage.",
  },
  {
    title: "Customer Satisfaction",
    body: "Your satisfaction is our top priority.",
  },
  {
    title: "Reliable Service",
    body: "We approach every project with precision and care to deliver excellent results.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    location: "Buffalo, NY",
    quote:
      "Heathen showed up on time, communicated clearly, and the remodel turned out better than we imagined.",
  },
  {
    name: "Michael Smith",
    location: "Jamestown, NY",
    quote:
      "Professional crew from start to finish. Power washing and deck work were flawless—fair price.",
  },
  {
    name: "Jennifer Davis",
    location: "Falconer, NY",
    quote:
      "We use them for seasonal yard work and small repairs. Dependable, honest, and easy to work with.",
  },
] as const;

export type PortfolioFilter =
  | "All"
  | "Roofing & Siding"
  | "Landscaping"
  | "Land Clearing"
  | "Decks & Fencing"
  | "Interior Remodeling"
  | "Concrete"
  | "Driveways"
  | "Material Deliveries"
  | "Patching"
  | "Paving"
  | "Foundations"
  | "Gutters"
  | "Hole Augering"
  | "Striping & Sealing"
  | "More";

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  /** Green badge on image (may include slash wording like live site) */
  categoryBadge: string;
  filter: Exclude<PortfolioFilter, "All">;
  imageUrl: string;
  photoCount?: number;
};

export const PORTFOLIO_FILTERS: PortfolioFilter[] = [
  "All",
  "Roofing & Siding",
  "Landscaping",
  "Land Clearing",
  "Decks & Fencing",
  "Interior Remodeling",
  "Concrete",
  "Driveways",
  "Material Deliveries",
  "Patching",
  "Paving",
  "Foundations",
  "Gutters",
  "Hole Augering",
  "Striping & Sealing",
  "More",
];

/** Same images as heathenhouseholdservices.com (Supabase `portfolio_items` + public storage). */
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "f80c82f0-6a0d-415e-b6cc-c99c5750f746",
    title: "Residential Paving",
    description:
      "High-quality residential paving solutions for driveways and walkways, ensuring durability and curb appeal.",
    categoryBadge: "Paving",
    filter: "Paving",
    imageUrl:
      "https://hvvvycrcvhzkffcbioff.supabase.co/storage/v1/object/public/portfolio/aecb1a14-dee3-4bae-b30e-574b7beb44b6.jpg",
  },
  {
    id: "5d0d083e-312e-4930-9a37-b9a5b9e52034",
    title: "Commercial Patching",
    description:
      "Efficient commercial patching services to repair damaged pavement and maintain a safe, smooth surface for businesses.",
    categoryBadge: "Patching",
    filter: "Patching",
    imageUrl:
      "https://hvvvycrcvhzkffcbioff.supabase.co/storage/v1/object/public/portfolio/008959aa-8b60-4c69-9726-d426692fca34.jpg",
  },
  {
    id: "2052b0c9-803c-487c-8b37-d870c78fa61b",
    title: "Custom Patio",
    description:
      "Reliable concrete solutions for all your needs—driveways, slabs, sidewalks, and more, built to last.",
    categoryBadge: "Concrete",
    filter: "Concrete",
    imageUrl:
      "https://hvvvycrcvhzkffcbioff.supabase.co/storage/v1/object/public/portfolio/e6087081-3875-47e1-b72d-bcef7fab0c9c.jpg",
    photoCount: 2,
  },
  {
    id: "bfb4f6bc-775e-4225-acf4-5de71f1e4c16",
    title: "Material Delivery",
    description: "Delivering your materials when and where you need them!",
    categoryBadge: "Material Deliveries",
    filter: "Material Deliveries",
    imageUrl:
      "https://hvvvycrcvhzkffcbioff.supabase.co/storage/v1/object/public/portfolio/f1e19a67-370d-42e6-b2e1-5f5b6b2cc373.jpg",
    photoCount: 2,
  },
  {
    id: "59542513-071f-467c-8f1c-2958025f43f1",
    title: "Driveways",
    description: "Giving you the driveway you want",
    categoryBadge: "Driveways ( Millings - Stone )",
    filter: "Driveways",
    imageUrl:
      "https://hvvvycrcvhzkffcbioff.supabase.co/storage/v1/object/public/portfolio/f6350e41-1a33-4dd4-8256-014d8785c977.jpg",
    photoCount: 2,
  },
  {
    id: "2e7d4821-4ac0-4171-9574-fd519e114664",
    title: "Roofing Done Right",
    description: "A few of the roofs we have recently completed!",
    categoryBadge: "Roofing & Siding",
    filter: "Roofing & Siding",
    imageUrl:
      "https://hvvvycrcvhzkffcbioff.supabase.co/storage/v1/object/public/portfolio/bd6ce843-2885-4603-98d9-b72af06ce0ac.jpg",
    photoCount: 2,
  },
  {
    id: "66e5a820-e105-4346-bee5-53804f71da4b",
    title: "Augering Project",
    description: "Client needed some Hole Augering services and we were there when needed!",
    categoryBadge: "Hole Augering",
    filter: "Hole Augering",
    imageUrl:
      "https://hvvvycrcvhzkffcbioff.supabase.co/storage/v1/object/public/portfolio/4ae48cb0-96aa-492e-abe4-75f32b46904d.jpg",
  },
  {
    id: "0cf981a5-b7ac-4efd-8fa0-fe80592f5db6",
    title: "Bathroom Remodel",
    description:
      "Our interior remodeling services transform your space with expert craftsmanship, modern design, and attention to detail—bringing your vision to life from concept to completion",
    categoryBadge: "Interior Remodeling",
    filter: "Interior Remodeling",
    imageUrl:
      "https://hvvvycrcvhzkffcbioff.supabase.co/storage/v1/object/public/portfolio/541c59a2-3b3c-43df-a09e-29ab51200ed1.jpg",
    photoCount: 4,
  },
  {
    id: "1d06d15b-7b4a-4e16-8c66-aaaafb341283",
    title: "Concrete Stairway",
    description:
      "Custom-built concrete stairs designed and poured for durability and clean aesthetics—perfectly blending function with style to enhance the property's entryway.",
    categoryBadge: "Concrete",
    filter: "Concrete",
    imageUrl:
      "https://hvvvycrcvhzkffcbioff.supabase.co/storage/v1/object/public/portfolio/a882b2ea-e83e-44c5-8e4b-8e3e58f6bf1c.jpg",
  },
  {
    id: "c81c09e1-c5ac-4b7b-b383-ad74cfad4bcf",
    title: "Fencing Project",
    description:
      "Professionally installed privacy fence featuring durable materials and clean, precise craftsmanship—designed to enhance security and complement the property's look.",
    categoryBadge: "Decks & Fencing",
    filter: "Decks & Fencing",
    imageUrl:
      "https://hvvvycrcvhzkffcbioff.supabase.co/storage/v1/object/public/portfolio/1744e6c5-dc74-4342-9aa0-018da3e1b796.jpg",
  },
  {
    id: "ce09608c-136d-400a-a4e9-3861b73665ca",
    title: "Government Fencing Project",
    description:
      "Secure and professionally installed fencing completed for a government facility—meeting all specifications and compliance standards with a focus on durability, safety, and functionality.",
    categoryBadge: "Decks & Fencing",
    filter: "Decks & Fencing",
    imageUrl:
      "https://hvvvycrcvhzkffcbioff.supabase.co/storage/v1/object/public/portfolio/857754c7-6a77-4046-a8fe-1738114f4e20.jpg",
    photoCount: 2,
  },
  {
    id: "5718de58-e405-46db-bdef-c3d49759dfb3",
    title: "Foundation Repair",
    description:
      "Expert foundation repair completed to restore structural integrity and prevent further settling—delivering long-term stability and peace of mind for the property owner",
    categoryBadge: "Foundations",
    filter: "Foundations",
    imageUrl:
      "https://hvvvycrcvhzkffcbioff.supabase.co/storage/v1/object/public/portfolio/b48fc819-4c5e-49f5-b0ef-10d426e1b963.jpg",
    photoCount: 2,
  },
  {
    id: "674b9294-9161-40cf-b629-ad9c01b81ec6",
    title: "Gutter Repair / Install",
    description:
      "Complete gutter repair and installation done to improve drainage, protect the foundation, and enhance the overall appearance of the home with a clean, functional finish.",
    categoryBadge: "Gutters",
    filter: "Gutters",
    imageUrl:
      "https://hvvvycrcvhzkffcbioff.supabase.co/storage/v1/object/public/portfolio/8db43831-2ea6-4813-a183-a33552501923.jpg",
    photoCount: 2,
  },
  {
    id: "01c9a4b4-3c70-4e75-85e6-cb112342a050",
    title: "Big Land Clearing Project",
    description:
      "Efficient land clearing completed to prepare the site for development—removing trees, brush, and debris with precision while preserving the integrity of the surrounding landscape.",
    categoryBadge: "Land Clearing",
    filter: "Land Clearing",
    imageUrl:
      "https://hvvvycrcvhzkffcbioff.supabase.co/storage/v1/object/public/portfolio/17f48c2c-7e0a-44f0-9645-3ec4f8c38f87.jpg",
    photoCount: 2,
  },
  {
    id: "a28250d5-7844-4fba-9a9c-3d1261248c54",
    title: "Few Landscaping Projects",
    description:
      "Transformative landscaping services that enhanced the property's curb appeal—featuring thoughtful plant selection, hardscaping, and meticulous attention to detail to create a beautiful and functional outdoor space",
    categoryBadge: "Landscaping",
    filter: "Landscaping",
    imageUrl:
      "https://hvvvycrcvhzkffcbioff.supabase.co/storage/v1/object/public/portfolio/eedd7483-434a-41a8-b261-c1f01431545f.jpg",
    photoCount: 2,
  },
  {
    id: "2736bdad-51ca-476f-bf0d-ba6f5711b502",
    title: "Porch Support",
    description:
      "Expert installation of sturdy porch support beams to ensure structural stability and enhance the safety and aesthetic of the home’s entryway.",
    categoryBadge: "& MUCH MORE!",
    filter: "More",
    imageUrl:
      "https://hvvvycrcvhzkffcbioff.supabase.co/storage/v1/object/public/portfolio/90c8f534-fcf0-4cc4-a5ce-72a16e2b3a14.jpg",
  },
  {
    id: "93c05378-c323-45a7-ad58-82c92ef3a72f",
    title: "Exterior Stairs Rebuilt",
    description:
      "Custom-built exterior stairs designed for durability and style—featuring high-quality materials and precise construction to provide safe, easy access while complementing the property’s design.",
    categoryBadge: "& MUCH MORE!",
    filter: "More",
    imageUrl:
      "https://hvvvycrcvhzkffcbioff.supabase.co/storage/v1/object/public/portfolio/e764f4ba-326f-4b14-9dad-2f677629adba.jpg",
  },
  {
    id: "cab4e367-f774-4ff7-9e38-ac91aa378a51",
    title: "Commercial Striping & Sealing",
    description:
      "Professional striping and sealing services for a commercial property—enhancing parking lot safety, improving visibility, and extending pavement life with precise, durable markings.",
    categoryBadge: "Striping & Sealing",
    filter: "Striping & Sealing",
    imageUrl:
      "https://hvvvycrcvhzkffcbioff.supabase.co/storage/v1/object/public/portfolio/b7ed4616-e879-48ec-9a66-6f18a3756bf4.jpg",
    photoCount: 2,
  },
  {
    id: "06c20cbf-dcf4-4c48-9ac8-2b61a0e4cb06",
    title: "Driveway Milling",
    description:
      "Driveway milling service to remove old asphalt and prepare the surface for a smooth, durable new layer—improving the driveway's appearance and functionality while extending its lifespan.",
    categoryBadge: "Driveways ( Millings - Stone )",
    filter: "Driveways",
    imageUrl:
      "https://hvvvycrcvhzkffcbioff.supabase.co/storage/v1/object/public/portfolio/126ff97b-afd7-48bb-b24f-4fe5194f7172.jpg",
  },
  {
    id: "21ccb676-da30-48dc-9711-46b36f83f761",
    title: "Tin Siding Install",
    description:
      "Professional tin siding replacement to restore both function and aesthetics—providing a durable, weather-resistant exterior that enhances the property's look while offering long-lasting protection",
    categoryBadge: "Roofing & Siding",
    filter: "Roofing & Siding",
    imageUrl:
      "https://hvvvycrcvhzkffcbioff.supabase.co/storage/v1/object/public/portfolio/a1b543c7-50bb-4c57-974d-d0b255652c6e.jpg",
  },
];
