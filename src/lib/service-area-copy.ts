const SITE_INTRO =
  "Heathen Household Services is a full-service contractor based in Frewsburg, NY, serving Chautauqua County and communities across Western New York.";

/** SEO blurbs for service area landing pages (unique title + meta per city). */
export function serviceAreaMetaDescription(areaName: string): string {
  return `${areaName}: Heathen Household Services offers licensed, insured remodeling, exterior, concrete, landscaping, and home services. Call 716-450-0085 or visit heathenhouseholdservices.com for a quote.`;
}

export function serviceAreaIntroParagraphs(areaName: string): string[] {
  const city = areaName.replace(/, NY$/i, "").trim();
  return [
    `${SITE_INTRO} We regularly complete projects for homeowners and businesses in and around ${city}, with crews experienced in roofing, siding, remodeling, power washing, decks and fencing, land clearing, concrete, and more.`,
    `Whether you need a small repair or a larger renovation, we prioritize clear estimates, steady communication, and workmanship that holds up to Western New York weather. Ask about timing for seasonal work—exterior and site projects often fit best in specific windows before winter or after thaw.`,
    `Call 716-450-0085 to discuss your job, or use the contact form on heathenhouseholdservices.com. Share photos and your goals so we can match you with the right crew.`,
  ];
}
