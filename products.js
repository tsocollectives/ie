// TSO Collectives - Central Product Database
const PRODUCTS = [
  {
    id: "meadow-glasses-4",
    name: "Wild Irish Meadow Hand-Painted Wine Glasses (Classic Pair)",
    category: "glassware",
    description: "Welcome to TSO Collectives: Where Art Meets Elegance. We are thrilled to unveil our very first creation—a breathtaking pair of hand-painted wine glasses inspired by the enchanting beauty of a wild Irish meadow. Every single stroke on these stunning green-stemmed glasses is meticulously detailed by hand, featuring vibrant magenta wildflowers blooming over a rich, grassland design with golden accents. Designed not just to hold your favorite wine, but to stand as a unique piece of functional luxury art in your home. No two pieces are ever identical!",
    price: 15.99,
    rating: 5.0,
    reviews: 14,
    images: [
      "assets/hand-painted wine glasses inspired by the enchanting beauty of a wild Irish meadow (4)/hand-painted wine glasses inspired by the enchanting beauty of a wild Irish meadow (1).png",
      "assets/hand-painted wine glasses inspired by the enchanting beauty of a wild Irish meadow (4)/hand-painted wine glasses inspired by the enchanting beauty of a wild Irish meadow (3).png",
      "assets/hand-painted wine glasses inspired by the enchanting beauty of a wild Irish meadow (4)/hand-painted wine glasses inspired by the enchanting beauty of a wild Irish meadow (4).png",
      "assets/hand-painted wine glasses inspired by the enchanting beauty of a wild Irish meadow (4)/hand-painted wine glasses inspired by the enchanting beauty of a wild Irish meadow (5).png",
      "assets/hand-painted wine glasses inspired by the enchanting beauty of a wild Irish meadow (4)/hand-painted wine glasses inspired by the enchanting beauty of a wild Irish meadow (6).png"
    ],
    videos: [
      "assets/hand-painted wine glasses inspired by the enchanting beauty of a wild Irish meadow (4)/hand-painted wine glasses inspired by the enchanting beauty of a wild Irish meadow (4).mp4"
    ],
    specifications: {
      "Origin": "Hand-painted in Ireland 🇮🇪",
      "Availability": "Strictly limited stock",
      "Packaging": "Heavy-duty bubble wrap and double-boxed premium package"
    },
    pricingOptions: [
      { name: "Single Wine Glass - Pick up in person", price: 15.99 },
      { name: "Single Wine Glass - Includes Free Standard Shipping", price: 23.00 },
      { name: "Full Set (Pair of 2 Glasses) - Pick up in person", price: 29.99 },
      { name: "Full Set (Pair of 2 Glasses) - Includes Free Standard Shipping", price: 38.00 }
    ],
    care: "Hand Wash Safely Only. Painted using premium Pebeo Vitrea 160 Glossy paint and professionally heat-set for a permanent finish. NOT dishwasher or microwave safe. Do not soak in hot water or scrub with abrasive sponges.",
    shipping: "Tracked shipping via An Post Registered Mail with a live tracking number. Securely packaged in layers of bubble wrap and double-boxed to ensure safe arrival."
  },
  {
    id: "cobalt-candle-stand",
    name: "3-Tier Cobalt Blue Candle Stand",
    category: "glassware",
    description: "Brighten up your living space or create the perfect cozy ambiance with our newest handcrafted masterpiece. We are proud to present this Breathtaking, premium 3-tier candle holder that seamlessly blends functional art with modern elegance. Featuring three stunning cobalt blue frosted glass cones, each piece is individually hand-painted with delicate white wildflowers and rich golden accents. The elegant metallic stand holds the tiers perfectly, reflecting a warm, magical glow when lit. The glass cones are fully removable for easy cleaning and candle replacement, making it as practical as it is beautiful.",
    price: 27.99,
    rating: 4.9,
    reviews: 9,
    images: [
      "assets/3-Tier Cobalt Blue Candle Stand/3-Tier Cobalt Blue Candle Stand  (1).png",
      "assets/3-Tier Cobalt Blue Candle Stand/3-Tier Cobalt Blue Candle Stand  (2).png",
      "assets/3-Tier Cobalt Blue Candle Stand/3-Tier Cobalt Blue Candle Stand  (3).png",
      "assets/3-Tier Cobalt Blue Candle Stand/3-Tier Cobalt Blue Candle Stand  (4).png",
      "assets/3-Tier Cobalt Blue Candle Stand/3-Tier Cobalt Blue Candle Stand  (5).png",
      "assets/3-Tier Cobalt Blue Candle Stand/3-Tier Cobalt Blue Candle Stand  (6).png"
    ],
    videos: [
      "assets/3-Tier Cobalt Blue Candle Stand/3-Tier Cobalt Blue Candle Stand  (1).mp4",
      "assets/3-Tier Cobalt Blue Candle Stand/3-Tier Cobalt Blue Candle Stand  (2).mp4"
    ],
    specifications: {
      "Origin": "Designed & finished in Ireland 🇮🇪",
      "Medium": "100% hand-painted frosted glassware",
      "Frame": "Sturdy, silver-finished 3-tier metallic stand",
      "Features": "Removable glass cones for easy cleaning",
      "Location": "Limerick, Ireland"
    },
    pricingOptions: [
      { name: "3-Tier Stand - Pick up in person", price: 27.99 },
      { name: "3-Tier Stand - Includes Free Standard Shipping", price: 35.00 }
    ],
    care: "Wipe metal stand with a soft dry cloth. Glass cones can be hand washed gently. Keep out of reach of children when candles are lit.",
    shipping: "Shipped safely via An Post Tracked with a Live Tracking Number. Meticulously wrapped in thick protective wrap."
  },
  {
    id: "flower-vase-blue",
    name: "Premium Hand-Painted Blue Flower Vase",
    category: "glassware",
    description: "Bring home a breathtaking centerpiece that blends art with premium craftsmanship! This stunning blue flower vase features intricate, vibrant floral details that capture the elegance of nature, making it a perfect one-of-a-kind addition to your home decor or a luxury gift. No two vases are ever exactly the same—crafted exclusively for those who love unique artistry! Painted using high-quality Pebeo Vitrea 160 Glossy paint and professionally heat-set for a permanent, glossy, and brilliant finish.",
    price: 49.00,
    rating: 5.0,
    reviews: 6,
    images: [
      "assets/Hand-Painted Flower Vase/Hand-Painted Flower Vase (1).png",
      "assets/Hand-Painted Flower Vase/Hand-Painted Flower Vase (1).jfif",
      "assets/Hand-Painted Flower Vase/Hand-Painted Flower Vase (2).jfif",
      "assets/Hand-Painted Flower Vase/Hand-Painted Flower Vase (3).jfif",
      "assets/Hand-Painted Flower Vase/Hand-Painted Flower Vase (4).jfif"
    ],
    videos: [],
    specifications: {
      "Origin": "Handcrafted in Ireland 🇮🇪",
      "Material": "Vitreous Blue Glassware",
      "Paint": "Pebeo Vitrea 160 Glossy glass paint",
      "Finish": "Oven cured & heat-set gloss"
    },
    pricingOptions: [
      { name: "Doorstep Collection (Pick Up in Limerick)", price: 49.00 },
      { name: "An Post Tracked Shipping (Within Ireland)", price: 58.00 },
      { name: "International Shipping (UK & Central Europe)", price: 70.00 },
      { name: "International Shipping (Europe Outer Zones)", price: 79.00 },
      { name: "International Shipping (USA & Canada)", price: 97.00 },
      { name: "International Shipping (Australia & New Zealand)", price: 106.00 }
    ],
    care: "Hand Wash Safely Only. To protect the beautiful texture and detail of the paintwork, this vase is NOT dishwasher safe and should not be soaked in hot water.",
    shipping: "Worldwide tracked shipping via An Post. Meticulously wrapped in bubble wrap and double-boxed. Contact us with your address for exact international rates."
  },
  {
    id: "meadow-glasses-150ml",
    name: "Wild Irish Meadow Hand-Painted Wine Glasses (150ml Pair)",
    category: "glassware",
    description: "Bring the enchanting beauty of a wild Irish meadow straight to your dining table! Every single leaf, vine, and mosaic-style detail on the base of these glasses is meticulously hand-painted with deep passion, making each piece a 100% unique work of art. We have exactly one matching pair (2 glasses) available from this exclusive batch! Since they are hand-painted, they are not identical copies, but they complement each other perfectly.",
    price: 15.99,
    rating: 4.8,
    reviews: 11,
    images: [
      "assets/Wild Irish Meadow Hand-Painted Wine Glasses/Wild Irish Meadow Hand-Painted Wine Glasses  (1).jfif",
      "assets/Wild Irish Meadow Hand-Painted Wine Glasses/Wild Irish Meadow Hand-Painted Wine Glasses  (2).jfif",
      "assets/Wild Irish Meadow Hand-Painted Wine Glasses/Wild Irish Meadow Hand-Painted Wine Glasses  (3).jfif",
      "assets/Wild Irish Meadow Hand-Painted Wine Glasses/Wild Irish Meadow Hand-Painted Wine Glasses  (4).jfif",
      "assets/Wild Irish Meadow Hand-Painted Wine Glasses/Wild Irish Meadow Hand-Painted Wine Glasses  (5).jfif",
      "assets/Wild Irish Meadow Hand-Painted Wine Glasses/Wild Irish Meadow Hand-Painted Wine Glasses  (6).jfif"
    ],
    videos: [],
    specifications: {
      "Height": "14.5 cm",
      "Top/Rim Circumference": "16 cm",
      "Base/Foot Width": "5 cm",
      "Capacity": "150 ml (Perfect for wine, sherry, or liqueurs)",
      "Origin": "Hand-painted in Limerick, Ireland"
    },
    pricingOptions: [
      { name: "Single Wine Glass - Pick up in person", price: 15.99 },
      { name: "Single Wine Glass - Shipping in Ireland", price: 24.99 },
      { name: "Pair of 2 Glasses - Pick up in person", price: 29.99 },
      { name: "Pair of 2 Glasses - Shipping in Ireland", price: 38.99 }
    ],
    care: "Hand Wash Safely Only. Painted with high-quality Pebeo Vitrea 160 Glossy paint and heat-set. NOT dishwasher safe.",
    shipping: "Postage within Ireland is a flat rate of €9.00 via An Post Standard Post. Ships internationally with custom rate calculations."
  },
  {
    id: "autumn-glasses-150ml",
    name: "Wild Irish Autumn Hand-Painted Wine Glasses (150ml Pair)",
    category: "glassware",
    description: "Embrace the cozy warmth of a golden Irish sunset with our brand-new creation! We are absolutely thrilled to reveal this exquisite 'Wild Irish Autumn' hand-painted wine glass set. Meticulously detailed by hand, these pieces capture the breathtaking transition of nature with rich tones of amber, fiery orange, and deep gold, beautifully complemented by vibrant green leaves and an intricate mosaic-style base. We have exactly one matching pair (2 glasses) available from this exclusive batch.",
    price: 15.99,
    rating: 4.9,
    reviews: 13,
    images: [
      "assets/Wild Irish Autumn Hand-Painted Wine Glasses/Wild Irish Autumn Hand-Painted Wine Glasses  (1).jpg",
      "assets/Wild Irish Autumn Hand-Painted Wine Glasses/Wild Irish Autumn Hand-Painted Wine Glasses  (2).jpg",
      "assets/Wild Irish Autumn Hand-Painted Wine Glasses/Wild Irish Autumn Hand-Painted Wine Glasses  (3).jpg",
      "assets/Wild Irish Autumn Hand-Painted Wine Glasses/Wild Irish Autumn Hand-Painted Wine Glasses  (4).jpg",
      "assets/Wild Irish Autumn Hand-Painted Wine Glasses/Wild Irish Autumn Hand-Painted Wine Glasses  (5).jpg"
    ],
    videos: [],
    specifications: {
      "Height": "14.5 cm",
      "Top/Rim Circumference": "16 cm",
      "Base/Foot Width": "5 cm",
      "Capacity": "150 ml (Perfect for wine, sherry, or liqueurs)",
      "Origin": "Hand-painted in Limerick, Ireland"
    },
    pricingOptions: [
      { name: "Single Wine Glass - Pick up in person", price: 15.99 },
      { name: "Single Wine Glass - Shipping in Ireland", price: 24.99 },
      { name: "Pair of 2 Glasses - Pick up in person", price: 29.99 },
      { name: "Pair of 2 Glasses - Shipping in Ireland", price: 38.99 }
    ],
    care: "Hand Wash Safely Only. Painted with high-quality Pebeo Vitrea 160 Glossy paint and heat-set. NOT dishwasher safe.",
    shipping: "Tracked postage via An Post within Ireland. Packed with extreme care in heavy bubble wrap and double-boxed."
  },
  {
    id: "emerald-mosaic-glasses",
    name: "Hand-Painted Emerald Mosaic Wine Glasses",
    category: "glassware",
    description: "Add a touch of premium luxury to your table with our stunning, handcrafted Emerald Mosaic Wine Glasses. 100% hand-painted right here in Ireland, this collection is designed for those who appreciate fine craftsmanship, rich artistic details, and absolute uniqueness. Featuring a beautiful fluid blend of vibrant emerald greens and sunlit yellows, each glass is topped with an intricate, hand-lined gold and green mosaic block design. The glossy finish catches the light with every movement, making it the perfect statement piece.",
    price: 18.50,
    rating: 5.0,
    reviews: 7,
    images: [
      "assets/Hand-Painted Emerald Mosaic Wine Glasses - Elegance in Every Sip/Hand-Painted Emerald Mosaic Wine Glasses - Elegance in Every Sip  (1).jfif",
      "assets/Hand-Painted Emerald Mosaic Wine Glasses - Elegance in Every Sip/Hand-Painted Emerald Mosaic Wine Glasses - Elegance in Every Sip  (2).jfif",
      "assets/Hand-Painted Emerald Mosaic Wine Glasses - Elegance in Every Sip/Hand-Painted Emerald Mosaic Wine Glasses - Elegance in Every Sip  (3).jfif"
    ],
    videos: [],
    specifications: {
      "Height": "18 cm",
      "Rim/Top Circumference": "23.5 cm",
      "Capacity": "200 ml (Ideal for White Wine, Rosé, or Dessert Wine)",
      "Origin": "Hand-painted in Limerick, Ireland 🇮🇪"
    },
    pricingOptions: [
      { name: "Single Wine Glass - Pick up in person", price: 18.50 },
      { name: "Single Wine Glass - Shipping in Ireland", price: 27.50 },
      { name: "Pair of 2 Glasses - Pick up in person", price: 34.00 },
      { name: "Pair of 2 Glasses - Shipping in Ireland", price: 43.00 }
    ],
    care: "Hand Wash Safely Only. Painted using premium non-toxic Pebeo Vitrea 160 Glossy paint and baked. Do not soak in hot water, scrub with abrasive pads, or place in dishwasher/microwave.",
    shipping: "Standard postage within Ireland via An Post. Securely multi-layered in bubble wrap to guarantee safe delivery."
  },
  {
    id: "irish-flag-pint",
    name: "Hand-Painted Irish Flag & Shamrock Pint Glass",
    category: "glassware",
    description: "Celebrate Irish heritage and traditional craftsmanship with this premium tulip-shaped pint glass, detailed by hand right here in Ireland. This design focuses entirely on the elegant purity of traditional Irish symbols, featuring the vibrant hand-painted Irish Tricolor Flag wrapped around the body, centered with an intricately detailed, glossy green Shamrock outline. The rich gold outlining catches the light spectacularly, making it a true collector's item. Perfect for perfectly poured stouts, ales, or as a premium keepsake.",
    price: 25.00,
    rating: 4.9,
    reviews: 16,
    images: [
      "assets/Hand-Painted Irish Flag & Shamrock Pint Glass/Hand-Painted Irish Flag & Shamrock Pint Glass  (1).jfif",
      "assets/Hand-Painted Irish Flag & Shamrock Pint Glass/Hand-Painted Irish Flag & Shamrock Pint Glass  (2).jfif",
      "assets/Hand-Painted Irish Flag & Shamrock Pint Glass/Hand-Painted Irish Flag & Shamrock Pint Glass  (3).jfif",
      "assets/Hand-Painted Irish Flag & Shamrock Pint Glass/Hand-Painted Irish Flag & Shamrock Pint Glass  (4).jfif",
      "assets/Hand-Painted Irish Flag & Shamrock Pint Glass/Hand-Painted Irish Flag & Shamrock Pint Glass  (5).jfif",
      "assets/Hand-Painted Irish Flag & Shamrock Pint Glass/Hand-Painted Irish Flag & Shamrock Pint Glass  (6).jfif",
      "assets/Hand-Painted Irish Flag & Shamrock Pint Glass/Hand-Painted Irish Flag & Shamrock Pint Glass  (7).jfif",
      "assets/Hand-Painted Irish Flag & Shamrock Pint Glass/Hand-Painted Irish Flag & Shamrock Pint Glass  (8).jfif"
    ],
    videos: [
      "assets/Hand-Painted Irish Flag & Shamrock Pint Glass/Hand-Painted Irish Flag & Shamrock Pint Glass  (1).mp4",
      "assets/Hand-Painted Irish Flag & Shamrock Pint Glass/Hand-Painted Irish Flag & Shamrock Pint Glass  (2).mp4"
    ],
    specifications: {
      "Height": "28 cm",
      "Top/Rim Circumference": "24 cm",
      "Widest Part Circumference": "26 cm",
      "Base/Bottom Circumference": "17 cm",
      "Capacity": "Traditional Full Pint Size (Perfect for Irish Stouts & Craft Beers)",
      "Origin": "Proudly detailed by hand in Limerick, Ireland 🇮🇪"
    },
    pricingOptions: [
      { name: "Standard Pint Glass - Pick up in person", price: 25.00 },
      { name: "Standard Pint Glass - Shipping in Ireland", price: 34.00 },
      { name: "Premium Gift Box (Luxury presentation red box with satin lining) - Pick up", price: 30.00 },
      { name: "Premium Gift Box (Luxury presentation red box with satin lining) - Shipping", price: 39.00 }
    ],
    care: "Hand Wash Safely Only. Professional heat-set paints. Do not soak in hot water. NOT dishwasher or microwave safe.",
    shipping: "Tracked shipping via An Post Registered Mail. Everything is heavily bubble-wrapped to guarantee safe transit."
  },
  {
    id: "shamrock-pint-tso8",
    name: "Hand-Painted Classic Shamrock Pint Glass",
    category: "glassware",
    description: "Bring the authentic spirit and timeless charm of the Emerald Isle straight into your home! This beautiful, classic tulip-shaped pint glass is a 100% handcrafted masterpiece, proudly detailed by hand right here in Ireland. Adorned with a vibrant, hand-painted Irish Tricolor Flag wrapping around the glass, and featuring an intricately gold-outlined Shamrock emblem, it captures traditional Irish motifs in a glossy, scratch-resistant finish. Ideal for stouts, ales, or as a premium local Irish keepsake.",
    price: 27.00,
    rating: 5.0,
    reviews: 18,
    images: [
      "assets/Hand-Painted Shamrock Pint Glass 🍺/tso collectives 8 (1).jfif",
      "assets/Hand-Painted Shamrock Pint Glass 🍺/tso collectives 8 (2).jfif",
      "assets/Hand-Painted Shamrock Pint Glass 🍺/tso collectives 8 (3).jfif",
      "assets/Hand-Painted Shamrock Pint Glass 🍺/tso collectives 8 (4).jfif",
      "assets/Hand-Painted Shamrock Pint Glass 🍺/tso collectives 8 (5).jfif",
      "assets/Hand-Painted Shamrock Pint Glass 🍺/tso collectives 8 (6).jfif"
    ],
    videos: [],
    specifications: {
      "Height": "28 cm",
      "Top/Rim Circumference": "24 cm",
      "Widest Part Circumference": "26 cm",
      "Base/Bottom Circumference": "17 cm",
      "Capacity": "Traditional Full Pint Size",
      "Origin": "Hand-painted in Limerick, Ireland 🇮🇪"
    },
    pricingOptions: [
      { name: "Standard Pint Glass - Pick up in person", price: 27.00 },
      { name: "Standard Pint Glass - Shipping in Ireland", price: 36.00 },
      { name: "Premium Gift Box Upgrade - Pick up in person", price: 32.00 },
      { name: "Premium Gift Box Upgrade - Shipping in Ireland", price: 41.00 }
    ],
    care: "Hand Wash Safely Only. Professional oven heat-set enamel. NOT dishwasher or microwave safe. Avoid soaking.",
    shipping: "Secure envelope packaging and tracked shipment via An Post. Free collection in Limerick."
  },
  {
    id: "fuchsia-glasses-pair",
    name: "Artisan Luxury: 'Wild Irish Fuchsia' Hand-Painted Gin & Wine Glass Pair",
    category: "glassware",
    description: "What started as a simple, blank glass has been transformed into a premium, functional work of art after hours of passionate brushwork! We are incredibly excited to officially reveal the first creation from our brand-new 'Wild Irish Fuchsia' collection. Featuring a vibrant pink and violet botanical motif, this gorgeous glass is intricately detailed with fresh green leaves and delicate golden accents. Even the base of the glass has been beautifully hand-painted to catch the light from every angle. We have exactly ONE matching pair (2 glasses) available from this exclusive batch.",
    price: 15.00,
    rating: 5.0,
    reviews: 5,
    images: [
      "assets/Artisan Luxury Wild Irish Fuchsia Hand-Painted Gin & Wine Glass Pair/Artisan Luxury Wild Irish Fuchsia Hand-Painted Gin & Wine Glass Pair (1).jfif",
      "assets/Artisan Luxury Wild Irish Fuchsia Hand-Painted Gin & Wine Glass Pair/Artisan Luxury Wild Irish Fuchsia Hand-Painted Gin & Wine Glass Pair (2).jfif",
      "assets/Artisan Luxury Wild Irish Fuchsia Hand-Painted Gin & Wine Glass Pair/Artisan Luxury Wild Irish Fuchsia Hand-Painted Gin & Wine Glass Pair (3).jfif",
      "assets/Artisan Luxury Wild Irish Fuchsia Hand-Painted Gin & Wine Glass Pair/Artisan Luxury Wild Irish Fuchsia Hand-Painted Gin & Wine Glass Pair (4).jfif",
      "assets/Artisan Luxury Wild Irish Fuchsia Hand-Painted Gin & Wine Glass Pair/Artisan Luxury Wild Irish Fuchsia Hand-Painted Gin & Wine Glass Pair (5).jfif"
    ],
    videos: [
      "assets/Artisan Luxury Wild Irish Fuchsia Hand-Painted Gin & Wine Glass Pair/Artisan Luxury Wild Irish Fuchsia Hand-Painted Gin & Wine Glass Pair (1).mp4"
    ],
    specifications: {
      "Height": "15 cm",
      "Top/Rim Circumference": "23 cm",
      "Max Belly Circumference": "25 cm",
      "Capacity": "300 ml (Perfect for Gin & Tonic, large wine pours, or luxury cocktails)",
      "Origin": "Designed & crafted in Limerick, Ireland 🇮🇪"
    },
    pricingOptions: [
      { name: "Single Glass - Pick up in person", price: 15.00 },
      { name: "Single Glass - Shipping in Ireland", price: 24.00 },
      { name: "Matching Pair (2 Glasses) - Pick up in person", price: 28.00 },
      { name: "Matching Pair (2 Glasses) - Shipping in Ireland", price: 37.00 }
    ],
    care: "Hand Wash Safely Only. Oven baked and heat-set. NOT dishwasher safe. Avoid abrasive cleaning materials.",
    shipping: "Packed with extreme care using heavy-duty bubble wrap and secure double-boxing to ensure perfect delivery. Shipped via An Post."
  },
  {
    id: "galway-crystal-glass",
    name: "Luxury Galway Crystal Wine Glass (Artisan Reimagined)",
    category: "glassware",
    description: "When world-class Irish heritage meets passionate contemporary artistry! We are incredibly proud to unveil this absolute masterpiece—a genuine, original Galway Irish Crystal cut-glass luxury wine glass, completely reimagined with our signature hand-painted botanical art. Galway Crystal is renowned worldwide for its breathtaking quality and timeless elegance. By carefully tracing along its brilliant, diamond-faceted crystal grooves, we have woven a vibrant emerald-green palm and rich peacock-blue botanical motif directly into the crystal. This isn't just glassware; it's a premium collector's item.",
    price: 25.00,
    rating: 5.0,
    reviews: 9,
    images: [
      "assets/Luxury Galway Crystal Wine Glass/Luxury Galway Crystal Wine Glass  (1).jpg",
      "assets/Luxury Galway Crystal Wine Glass/Luxury Galway Crystal Wine Glass  (2).jpg",
      "assets/Luxury Galway Crystal Wine Glass/Luxury Galway Crystal Wine Glass  (3).jpg",
      "assets/Luxury Galway Crystal Wine Glass/Luxury Galway Crystal Wine Glass  (4).jpg",
      "assets/Luxury Galway Crystal Wine Glass/Luxury Galway Crystal Wine Glass  (5).jpg",
      "assets/Luxury Galway Crystal Wine Glass/Luxury Galway Crystal Wine Glass  (6).jpg"
    ],
    videos: [
      "assets/Luxury Galway Crystal Wine Glass/Luxury Galway Crystal Wine Glass  (1).mp4",
      "assets/Luxury Galway Crystal Wine Glass/Luxury Galway Crystal Wine Glass  (2).mp4"
    ],
    specifications: {
      "Base Authenticity": "Genuine Original Galway Crystal base item",
      "Height": "19 cm",
      "Top/Rim Circumference": "25.5 cm",
      "Capacity": "350 ml (Perfect for full-bodied Red Wine or a premium Water Goblet)",
      "Origin": "Hand-painted in Limerick, Ireland 🇮🇪"
    },
    pricingOptions: [
      { name: "Single Luxury Wine Glass - Pick up in person", price: 25.00 },
      { name: "Single Luxury Wine Glass - Shipping in Ireland", price: 34.00 },
      { name: "Single Glass + Premium Gift Box - Pick up in person", price: 30.00 },
      { name: "Single Glass + Premium Gift Box - Shipping in Ireland", price: 39.00 },
      { name: "Matching Pair (2 Glasses) - Pick up in person", price: 48.00 },
      { name: "Matching Pair (2 Glasses) - Shipping in Ireland", price: 57.00 },
      { name: "Pair + Premium Gift Boxes - Pick up in person", price: 58.00 },
      { name: "Pair + Premium Gift Boxes - Shipping in Ireland", price: 67.00 },
      { name: "Matching Set (3 Glasses) - Pick up in person", price: 68.00 },
      { name: "Matching Set (3 Glasses) - Shipping in Ireland", price: 77.00 }
    ],
    care: "Hand Wash Safely Only. To preserve the intense colors and the integrity of the crystal, please do not soak, scrub, or place it in the dishwasher. Treat with extreme care.",
    shipping: "Tracked shipping within Ireland available via An Post. Heavy-duty bubble-wrapping guarantees 100% safe transit."
  },
  {
    id: "irish-heritage-pints",
    name: "Irish Heritage Pint Glasses (Tulip Pair)",
    category: "glassware",
    description: "Bring the authentic spirit and timeless charm of the Emerald Isle straight into your home! Whether you're looking for a unique birthday surprise, a housewarming gift, or a premium addition to your own home bar, these beautiful, classic tulip-shaped pint glasses are 100% handcrafted masterpieces, proudly detailed by hand right here in Ireland! Instead of mass-produced prints, these glasses are treated as a canvas for premium, vibrant glass art. We have exactly ONE glass available for each of these two stunning designs: 'Wild Irish Blossom' (left) and 'Classic Shamrock' (right).",
    price: 27.00,
    rating: 4.9,
    reviews: 12,
    images: [
      "assets/Irish Heritage Pint Glasses/Irish Heritage Pint Glasses  (1).jfif",
      "assets/Irish Heritage Pint Glasses/Irish Heritage Pint Glasses  (2).jfif",
      "assets/Irish Heritage Pint Glasses/Irish Heritage Pint Glasses  (3).jfif",
      "assets/Irish Heritage Pint Glasses/Irish Heritage Pint Glasses  (4).jfif",
      "assets/Irish Heritage Pint Glasses/Irish Heritage Pint Glasses  (5).jfif",
      "assets/Irish Heritage Pint Glasses/Irish Heritage Pint Glasses  (6).jfif",
      "assets/Irish Heritage Pint Glasses/Irish Heritage Pint Glasses  (7).jfif",
      "assets/Irish Heritage Pint Glasses/Irish Heritage Pint Glasses  (8).jfif"
    ],
    videos: [],
    specifications: {
      "Total Height": "28 cm",
      "Top/Rim Circumference": "24 cm",
      "Widest Part Circumference": "26 cm",
      "Base/Bottom Circumference": "17 cm",
      "Capacity": "Traditional Full Pint Size (Perfect for Guinness stouts, ales, or lagers)",
      "Design Options": "1. Wild Irish Blossom (Left) / 2. Classic Shamrock (Right)",
      "Origin": "Handcrafted in Ireland 🇮🇪"
    },
    pricingOptions: [
      { name: "Single Pint Glass - Pick up in person", price: 27.00 },
      { name: "Single Pint Glass - Shipping in Ireland", price: 36.00 },
      { name: "Single Glass + Premium Gift Box - Pick up in person", price: 32.00 },
      { name: "Single Glass + Premium Gift Box - Shipping in Ireland", price: 41.00 }
    ],
    care: "Hand Wash Safely Only. Oven baked and heat-set. NOT dishwasher safe. Avoid soaking. Premium red presentation box with satin lining available.",
    shipping: "Standard flat-rate shipping in Ireland via An Post. Highly secure bubble wrap transit."
  },
  {
    id: "shamrock-crystal-earrings",
    name: "Sparkle of Eire: Handcrafted Irish Shamrock Crystal Earrings",
    category: "jewelry",
    description: "Add a touch of vibrant Irish charm and sparkle to your everyday look! We are absolutely in love with our brand-new, limited-edition Handcrafted Shamrock Crystal Earrings. Featuring beautifully patterned heart-shaped colorful crystals, these drop earrings capture the traditional spirit of Ireland with a modern, elegant twist. These delicate treasures come in both radiant Gold Coating and classic Silver Coating finishes, each perfectly matching the sparkling, multi-colored crystals. They make the perfect personal keepsake or a thoughtful gift.",
    price: 10.00,
    rating: 5.0,
    reviews: 10,
    images: [
      "assets/Sparkle of Eire Handcrafted Irish Shamrock Crystal Earrings/Botanical Magic Handcrafted Real Flower Resin Necklaces (1).jfif",
      "assets/Sparkle of Eire Handcrafted Irish Shamrock Crystal Earrings/Botanical Magic Handcrafted Real Flower Resin Necklaces (2).jfif",
      "assets/Sparkle of Eire Handcrafted Irish Shamrock Crystal Earrings/Botanical Magic Handcrafted Real Flower Resin Necklaces (3).jfif",
      "assets/Sparkle of Eire Handcrafted Irish Shamrock Crystal Earrings/Botanical Magic Handcrafted Real Flower Resin Necklaces (4).jfif",
      "assets/Sparkle of Eire Handcrafted Irish Shamrock Crystal Earrings/Botanical Magic Handcrafted Real Flower Resin Necklaces (5).jfif",
      "assets/Sparkle of Eire Handcrafted Irish Shamrock Crystal Earrings/Botanical Magic Handcrafted Real Flower Resin Necklaces (6).jfif",
      "assets/Sparkle of Eire Handcrafted Irish Shamrock Crystal Earrings/Botanical Magic Handcrafted Real Flower Resin Necklaces (7).jfif"
    ],
    videos: [],
    specifications: {
      "Pendant Size": "Approx. 1.0 cm x 1.0 cm (Delicate & lightweight)",
      "Coating/Finish": "Stunning Gold Coating / Elegant Silver Coating",
      "Origin": "Hand-assembled in Limerick, Ireland 🇮🇪"
    },
    pricingOptions: [
      { name: "Silver Color Pair - Pick up in person", price: 10.00 },
      { name: "Silver Color Pair - Shipping in Ireland", price: 12.50 },
      { name: "Gold Color Pair - Pick up in person", price: 12.00 },
      { name: "Gold Color Pair - Shipping in Ireland", price: 14.50 }
    ],
    care: "Keep in dry storage. Wipe metal components clean with a microfiber cloth. Avoid contact with water, sprays, or perfumes.",
    shipping: "Pick up in Limerick (FREE). Envelope postage within Ireland is €2.50 flat rate via An Post."
  },
  {
    id: "botanical-resin-necklaces",
    name: "Botanical Magic: Handcrafted Real Flower Resin Necklaces",
    category: "jewelry",
    description: "Wear a little piece of nature wherever you go! We are absolutely thrilled to unveil our brand-new collection of 100% Handcrafted Botanical Resin Pendants. Each piece encapsulates real dried flowers, vibrant shimmer, and delicate natural elements preserved forever in crystal-clear resin. Every single necklace is a unique, one-of-a-kind creation coming in stunning geometric shapes. Whether you love the earthy green tones, ocean-blue sparkles, or romantic pink blossoms, there is a perfect match for your everyday style!",
    price: 12.99,
    rating: 4.9,
    reviews: 15,
    images: [
      "assets/Botanical Magic Handcrafted Real Flower Resin Necklaces/Botanical Magic Handcrafted Real Flower Resin Necklaces (1).jfif",
      "assets/Botanical Magic Handcrafted Real Flower Resin Necklaces/Botanical Magic Handcrafted Real Flower Resin Necklaces (2).jfif",
      "assets/Botanical Magic Handcrafted Real Flower Resin Necklaces/Botanical Magic Handcrafted Real Flower Resin Necklaces (3).jfif",
      "assets/Botanical Magic Handcrafted Real Flower Resin Necklaces/Botanical Magic Handcrafted Real Flower Resin Necklaces (4).jfif",
      "assets/Botanical Magic Handcrafted Real Flower Resin Necklaces/Botanical Magic Handcrafted Real Flower Resin Necklaces (5).jfif",
      "assets/Botanical Magic Handcrafted Real Flower Resin Necklaces/Botanical Magic Handcrafted Real Flower Resin Necklaces (6).jfif"
    ],
    videos: [
      "assets/Botanical Magic Handcrafted Real Flower Resin Necklaces/Botanical Magic Handcrafted Real Flower Resin Necklaces (1).mp4"
    ],
    specifications: {
      "Pendant Size": "Approx. 2.5 cm (Height) x 2.0 cm (Width)",
      "Black Cord Option": "40 cm black cord with 4 cm extender chain",
      "Silver Chain Option": "44 cm silver chain with 4 cm extender chain",
      "Materials": "High-quality crystal resin, preserved dried flowers, glitter, metal bezels",
      "Origin": "100% handmade in Ireland 🇮🇪"
    },
    pricingOptions: [
      { name: "Necklace (With Black Cord / Silver Chain) - Pick up in person", price: 12.99 },
      { name: "Necklace (With Black Cord / Silver Chain) - Shipping in Ireland", price: 15.49 }
    ],
    care: "Store out of direct sunlight to prevent flower fading. Wipe with dry microfiber cloth. Keep away from water and cosmetics.",
    shipping: "Enveloped secure postage in Ireland via An Post for €2.50. Limerick collections available."
  },
  {
    id: "shamrock-crystal-necklaces",
    name: "Sparkle of Eire: Handcrafted Irish Shamrock Crystal Necklaces",
    category: "jewelry",
    description: "Add a touch of vibrant Irish charm and brilliant sparkle to your everyday style! We are absolutely thrilled to unveil our brand-new collection of Handcrafted Shamrock Crystal Necklaces. Featuring beautifully patterned heart-shaped colorful crystals, these delicate pendants capture the traditional spirit of Ireland with a modern, elegant twist. Every single necklace is a stunning creation featuring a gorgeous, colorful Shamrock motif. Wear it alone or pair it with our matching earrings!",
    price: 12.00,
    rating: 5.0,
    reviews: 8,
    images: [
      "assets/Sparkle of Eire Handcrafted Irish Shamrock Crystal Necklaces/Sparkle of Eire Handcrafted Irish Shamrock Crystal Necklaces  (1).jfif",
      "assets/Sparkle of Eire Handcrafted Irish Shamrock Crystal Necklaces/Sparkle of Eire Handcrafted Irish Shamrock Crystal Necklaces  (2).jfif",
      "assets/Sparkle of Eire Handcrafted Irish Shamrock Crystal Necklaces/Sparkle of Eire Handcrafted Irish Shamrock Crystal Necklaces  (3).jfif",
      "assets/Sparkle of Eire Handcrafted Irish Shamrock Crystal Necklaces/Sparkle of Eire Handcrafted Irish Shamrock Crystal Necklaces  (4).jfif",
      "assets/Sparkle of Eire Handcrafted Irish Shamrock Crystal Necklaces/Sparkle of Eire Handcrafted Irish Shamrock Crystal Necklaces  (5).jfif"
    ],
    videos: [],
    specifications: {
      "Pendant Size": "Approx. 1.0 cm (Height) x 1.0 cm (Width)",
      "Chain Options": "1. Hypoallergenic Stainless Steel Silver Chain (44cm) / 2. Sleek Black Cord (40cm)",
      "Extender": "4 cm adjustable extender chain included on both options",
      "Origin": "Handcrafted & detailed with love in Ireland 🇮🇪"
    },
    pricingOptions: [
      { name: "Necklace with Sleek Black Cord - Pick up in person", price: 12.00 },
      { name: "Necklace with Sleek Black Cord - Shipping in Ireland", price: 14.50 },
      { name: "Necklace with Stainless Steel Chain - Pick up in person", price: 15.00 },
      { name: "Necklace with Stainless Steel Chain - Shipping in Ireland", price: 17.50 }
    ],
    care: "Tarnish-free stainless steel chains. Preserve crystal resin shine by avoiding perfumes and showering with the jewelry.",
    shipping: "Standard secure mailing package via An Post for €2.50. Hand-packed with care."
  }
];
