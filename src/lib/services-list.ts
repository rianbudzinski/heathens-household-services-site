/**
 * Full services catalog — matches live /services layout (hammer icon on every card).
 */
export type ServiceItem = {
  title: string;
  description: string;
  /** Stronger border/glow (e.g. Site Work featured on live site) */
  highlight?: boolean;
};

export const SERVICES_PAGE_ITEMS: ServiceItem[] = [
  {
    title: "Clean Outs",
    description:
      "Efficient clean out services for homes, offices, or construction sites.",
  },
  {
    title: "Concrete",
    description:
      "Expert concrete work for foundations, driveways, patios, and more.",
  },
  {
    title: "Decks & Fencing",
    description: "Custom decks and durable fencing to enhance your outdoor space.",
  },
  {
    title: "Demolition",
    description:
      "Safe and controlled demolition services for buildings, structures, and debris removal.",
  },
  {
    title: "Drainage & Ponds",
    description:
      "Expert drainage solutions and pond installations to manage water flow on your property.",
  },
  {
    title: "Driveways (Millings - Stone)",
    description:
      "Durable driveways made from millings or stone for a cost-effective, lasting surface.",
  },
  {
    title: "Electricity",
    description:
      "Expert electrical services for installations, repairs, and upgrades for your home or business.",
  },
  {
    title: "Equipment Hauling",
    description: "Reliable equipment hauling to transport your heavy machinery safely.",
  },
  {
    title: "Excavation",
    description:
      "Precise excavation services for digging, grading, and preparing sites for construction.",
  },
  {
    title: "Foundations",
    description:
      "Strong, reliable foundations for homes, buildings, and other structures.",
  },
  {
    title: "Gutters",
    description:
      "Efficient gutter installation and repair to protect your home from water damage.",
  },
  {
    title: "Hardscaping",
    description:
      "Durable hardscaping solutions including patios, walkways, and retaining walls.",
  },
  {
    title: "Hauling",
    description:
      "Efficient hauling services for debris, materials, and equipment across your job site.",
  },
  {
    title: "Hole Augering",
    description:
      "Reliable hole augering for posts, fencing, and other outdoor projects.",
  },
  {
    title: "Home Additions",
    description: "Expand your home with custom home additions designed to match your space.",
  },
  {
    title: "HVAC",
    description:
      "Expert HVAC services for installation, maintenance, and repairs year-round.",
  },
  {
    title: "Interior Remodeling",
    description:
      "Transform your space with expert interior remodeling services tailored to your vision.",
  },
  {
    title: "Land Clearing",
    description: "Efficient land clearing to prepare your property for construction or landscaping.",
  },
  {
    title: "Landscaping",
    description: "Creative landscaping services to enhance the beauty and function of your yard.",
  },
  {
    title: "Material Deliveries",
    description: "Timely delivery of gravel, sand, asphalt, and other materials to your site.",
  },
  {
    title: "Patching",
    description:
      "Fast and reliable patching services to fix cracks, potholes, and worn surfaces.",
  },
  {
    title: "Paving",
    description:
      "Professional paving services for driveways, walkways, and parking areas.",
  },
  {
    title: "Plowing",
    description: "Reliable snow plowing services to keep your driveway and lots clear.",
  },
  {
    title: "Plumbing",
    description:
      "Professional plumbing services for repairs, installations, and upgrades.",
  },
  {
    title: "Pole Barns",
    description: "Custom pole barns for storage, workshops, and agricultural needs.",
  },
  {
    title: "Roofing & Siding",
    description:
      "Quality roofing and siding services to protect and improve your property.",
  },
  {
    title: "Site Work",
    description:
      "Expert site work services including clearing, grading, and excavation preparation.",
    highlight: true,
  },
  {
    title: "Striping & Sealing",
    description:
      "Professional asphalt sealing and line striping for lots, driveways, and roads.",
  },
  {
    title: "& MUCH MORE!",
    description:
      "If you don't see your project listed, just ask—we handle a wide range of custom work.",
  },
];

export const OUR_PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    description: "We begin with a thorough consultation to understand your needs.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Our experts develop a detailed plan and timeline for your project.",
  },
  {
    step: "03",
    title: "Execution",
    description: "We execute with precision, keeping you informed at every step.",
  },
  {
    step: "04",
    title: "Completion",
    description: "Final walkthrough ensures everything meets our quality standards.",
  },
] as const;
