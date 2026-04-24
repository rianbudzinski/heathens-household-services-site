import { SITE_BASE_URL } from "@/lib/site";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** ISO 8601 */
  publishedAt: string;
  updatedAt?: string;
  /** Target keywords / topics for SEO (not rendered as a list on page by default) */
  keywords: string[];
  paragraphs: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "professional-home-services-western-new-york",
    title: "Professional Home Services Across Western New York",
    description:
      "What to expect from a full-service contractor serving Chautauqua County, Jamestown, Buffalo, and surrounding communities—from remodels to outdoor work.",
    publishedAt: "2025-06-01T12:00:00.000Z",
    keywords: [
      "Western New York contractor",
      "Chautauqua County home services",
      "Jamestown NY remodeling",
      "Frewsburg home improvement",
    ],
    paragraphs: [
      "Home and business owners across Western New York often juggle multiple trades for one project: site prep, framing, exterior work, concrete, landscaping, and finish carpentry. Working with a single team that understands local weather, soil, and building styles can save time, reduce miscommunication, and keep your timeline realistic from estimate to walkthrough.",
      "Heathen Household Services is structured to support both small repairs and larger renovations. Whether you are updating a kitchen or bath, refreshing siding and roofing, or preparing a lot for new construction, priorities stay the same: clear communication, licensed and insured work, and workmanship you can see in the details—flashing, drainage, and clean jobsite practices matter as much as the visible finish.",
      "If you are in Frewsburg, Jamestown, Falconer, Lakewood, Mayville, Buffalo, Fredonia, Kennedy, or any surrounding town, you can start with a phone call to discuss scope and scheduling. We recommend describing your goals, any deadlines (seasonal windows, events, lease dates), and photos when helpful—so we can route you to the right crew and materials faster.",
      "For a free consultation, call the office at the number listed on heathenhouseholdservices.com or use the contact form. We are happy to talk through options that fit your budget and long-term plans for the property.",
    ],
  },
  {
    slug: "remodeling-kitchen-bathroom-chautauqua-county",
    title: "Kitchen and Bathroom Remodels: Planning Your Project in Chautauqua County",
    description:
      "Practical planning tips for remodels in upstate New York—moisture, mechanicals, permits, and how to vet a local remodeling contractor.",
    publishedAt: "2025-07-15T12:00:00.000Z",
    keywords: [
      "kitchen remodel Jamestown NY",
      "bathroom remodel Chautauqua County",
      "home remodeling contractor",
      "Frewsburg renovation",
    ],
    paragraphs: [
      "Kitchen and bathroom remodels deliver some of the strongest return on investment when they solve real problems: dated layouts, inadequate lighting, poor ventilation, and finishes that no longer stand up to daily use. In our climate, moisture management is especially important—exhaust fans, waterproofing behind tile, and proper insulation all protect your investment through humid summers and freezing winters.",
      "Before work begins, clarify what must change versus what would be nice to have. Structural moves (walls, windows, plumbing stacks) affect budget and schedule more than fixture swaps or cabinet refacing. A phased plan can still reach your end goal if you prefer to spread costs over time—your contractor should outline what must be sequenced together so you do not pay twice for the same wall or floor.",
      "When you choose Heathen Household Services for interior remodeling, we focus on craftsmanship, code-aware installations, and finishes that match how you use the space. Homeowners in Jamestown, Frewsburg, and across the county trust us for clear estimates and steady communication from demo to the final hardware install.",
      "Ready to talk ideas? Call 716-450-0085 or visit heathenhouseholdservices.com to request a quote. Bring measurements, inspiration photos, and any concerns about plumbing or electrical—the more context you share, the tighter our proposal can be.",
    ],
  },
  {
    slug: "power-washing-deck-fence-maintenance-upstate-ny",
    title: "Power Washing, Decks, and Fences: Seasonal Maintenance in Upstate NY",
    description:
      "Why seasonal washing and deck or fence care matters in New York—protect wood and siding from moisture, mold, and UV damage.",
    publishedAt: "2025-08-20T12:00:00.000Z",
    keywords: [
      "power washing Western NY",
      "deck staining Jamestown",
      "fence repair New York",
      "exterior cleaning contractor",
    ],
    paragraphs: [
      "Siding, decking, and fencing take constant exposure to rain, snow, pollen, and sun. In Upstate New York, freeze–thaw cycles accelerate wear when water gets into cracked stain or failed caulking. Regular cleaning is not only cosmetic—it can extend the life of wood and composite surfaces when paired with correct pressure, detergents where appropriate, and timely follow-up staining or sealing.",
      "Decks and fences often show problems first at joints, posts, and ground contact. Soft spots, lifted fasteners, and wobble are warnings before a safety issue develops. Addressing repairs early avoids larger rebuilds and keeps railings and stairs dependable for family and guests.",
      "Heathen Household Services provides power washing plus deck and fence work tailored to your property and budget—from refresh washes to repairs and staining. Serving communities from Buffalo and Fredonia through Jamestown, Falconer, Lakewood, Mayville, and Frewsburg, we help you align maintenance with the seasons.",
      "To schedule exterior work or ask what your deck or fence needs this year, call 716-450-0085 or reach out through heathenhouseholdservices.com. We will recommend a practical plan that protects your exterior for the long haul.",
    ],
  },
  {
    slug: "roofing-siding-exterior-services-jamestown-area",
    title: "Roofing and Siding: Protecting Your Exterior in the Jamestown Area",
    description:
      "How to spot wear on roofs and siding in Western New York, and when to involve a professional crew for repair or replacement.",
    publishedAt: "2025-09-10T12:00:00.000Z",
    keywords: [
      "roof repair Jamestown NY",
      "siding replacement Western NY",
      "gutter installation Chautauqua County",
      "exterior contractor",
    ],
    paragraphs: [
      "Your roof and siding are the first line of defense against wind-driven rain, ice, and pests. Missing or curling shingles, granule loss, daylight in the attic, and streaks on interior ceilings can all signal that water is finding a path inside. On siding, cracks, warping, chalky paint, or bubbling finish often begin at trim, corners, and areas behind gutters where moisture lingers.",
      "Gutters play a supporting role—clogged or misaligned gutters spill water against fascia and foundations, which can undermine both roof edges and basement dryness. A whole-exterior assessment helps prioritize repairs so you fix causes, not only symptoms.",
      "Heathen Household Services works on roofing, siding, gutters, and related exterior projects throughout the region, including Jamestown, Kennedy, Falconer, and neighboring towns. We emphasize durable materials, proper flashing, and installations intended for local weather patterns.",
      "If you are unsure whether you need repair or full replacement, call 716-450-0085 for an honest look. You can also use the contact form on heathenhouseholdservices.com to share photos and your availability—we will follow up with next steps.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function blogPostUrl(slug: string): string {
  return `${SITE_BASE_URL}/blog/${slug}`;
}
