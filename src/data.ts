/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from "./types";

export const CATEGORIES = [
  {
    name: "Dresses",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSJaVdU-Yp97KUrtuZAJRDERnslbMVGlbp8zpr_G8zwHIPrt5ccB9J5a0gIBFUpCOwTCeCuFTNit5FJPVRPJLnCcFE2ZhQwQz_-fSdHYCsF2eXEwZJpzXx5f6dztor6bfY9zvvLtsMx5AlWbemtHuNxHdQSfgNmyrGWKF-97ZLTY7KBViyxUNOt3ODHGXHyq3ryned5e3k78e-4Zr_pvYUtxDsyDJAo2Wv-wz4eHdXPTf-6gAIoQaWYeU25PSPhyojMZYSJnsnW50"
  },
  {
    name: "Outerwear",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUBUxvThoefWN2gPYiWDSUVwokFjbnw1OaSO7-JFyrj6PBdMLX4vtex30RsetAJ33Hgug6GTXrZ1QuH6GFva7AX4xHjEQGBs71gZ5oMJcnEILxd46fbk51iNVkrUSLkgR6vKkzeTi9dsKSXi3vRsc9439uMXjT4biUThN19HZHeNIPMQo9d_U6Kov5SgCLZPnkMYm-HHpYE79N8V61kWfgLjg1MJJSxSbzFIGx0Myg4yeeL-2V_m0FrjmK14z1K58j0Ey-i-GUAH0"
  },
  {
    name: "Accessories",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvypu-dUEgyEQDjmoIHiZHXWIcRknTm4T6sX3Y15QSnLf3O7S25C2so7BIf1azOZd49kD3O2mtRATxlX7uyNq7t0pKXoI1QsawCyl5FIYS76Xo6hQsq6_YwR1qevGsh9lSo_27obp4j5LnXJi0dPo72hmCKY0-q1iTecf_CXaNFIbvQ0gZb51lBjB6dswFbjiEDV2QcgM-Xy0uYz_70_VWSgjyk9gnx-XXoviiuaLG3z9Gd6Vz85Jt51zb3zWkRIgx6T0z-ZKqSiw"
  },
  {
    name: "Footwear",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8gTjOiUwNyQHIsxe0D3ih0eaNX5uRlhH8ftYAN-pDLswu9pH7KgOpg8BvEJEM5TSCOqmQlnvIODJozzgFa8kk1kJHxRLkrztjT909YM7nsptBs5-Cp5c9TAtuGGXo_NSgTOShfV0c3F03foAU2gio_Ecnznt4t2-nQwQODl3_tyhu8IShAlwNnrUgMFGT3KAbbkaN7Uyf6X3-Bf_QE6qocuJEZb-Rm8BuMLI2lAU-TqL5ssjSiwdmUFTO-RUODKK-a5cMrhlRnbk"
  },
  {
    name: "Tailoring",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHTvRRfbvpwtA4ReXlzPxxvFjHmYaf9zvuGIfr2p-bx4tH6teC6bITpsjpxh7zUnnjtHqEvJPD_5KB9Qob1nKyr-q7bXkE2MhtbeEiNx4XYvFvV4sueAN3DADhdgx6p20v8FuWZ32kq5YnS5F5ZWQlnASbIo91dQ4lojECnHiPTV6Q44SoE6E9-qcjEMZkbuhjpemMuxRPPj69B9h2MiouMV5vqJDvMQ5naTeqVYfnhFWBTTrpZ0iS7fnGmNZRg2pNETShvEZe8FA"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "fluid-silk-slip-dress",
    title: "Fluid Silk Slip Dress",
    collection: "Collection № 04",
    category: "Dresses",
    price: 890,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPeOLVpYX8AArLWueEhfJVXNpbQaz7kstoCrEOxqvSOtHitciOf7rh0XTkmGBfng81LbBwyNI8nN6Uwjeigmj54y6GXi7lVrideJOLvJooqBZC8YT6oOzO5KfxGa0IlW3mL_sKfrR-lvZwvaiDEJDWDVNxvm-i3u4sTWnARr31MgbskTWV580j6jkuSF4sfoVgHt2w7pyK3gBg5mOwinrDZYriuNtOI3J3N-1_Gnk2qZ3v07OWrSdrGFvceJeL6SPVjAIau24uRzw",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSepdBKduIBWbgmYmBidKet9Ucwyaq0LGkg1x9n-By8WHSM0-aPhg1rwFj_1Y7_NRAFPg1iqnHLUDsQrBO-Z95LPLDNy_foa7M88HL9SGgY3v3DjOe8yKlvMpy8CkMPYXHqnn-rZ3XcZNJ9gsOvCQd4nKrgCnv6fN04w7tqdEATVl5aHKo8mGExaK-9BJFdb5lBF1L9CyJOoQlLmhMV3PF2u-xI9uw8tz7y7g65KFeULrIN9I5PatJNZOXm2toQQzfO60I6wA0Wy8",
    description: "A masterclass in minimalist draping. This bias-cut silhouette is crafted from 32mm heavy-weight mulberry silk, designed to trace the contours of the body with a liquid-like finish. Featuring delicate adjustable straps and a raw-edge hem.",
    material: "100% Mulberry Silk",
    origin: "Milan, Italy",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Monochrome"],
    fabrics: ["Silk"],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPeOLVpYX8AArLWueEhfJVXNpbQaz7kstoCrEOxqvSOtHitciOf7rh0XTkmGBfng81LbBwyNI8nN6Uwjeigmj54y6GXi7lVrideJOLvJooqBZC8YT6oOzO5KfxGa0IlW3mL_sKfrR-lvZwvaiDEJDWDVNxvm-i3u4sTWnARr31MgbskTWV580j6jkuSF4sfoVgHt2w7pyK3gBg5mOwinrDZYriuNtOI3J3N-1_Gnk2qZ3v07OWrSdrGFvceJeL6SPVjAIau24uRzw",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBpkKP_ZyaC5JOQMv4yCwUSrEzhHCgMG37K30xI8JFAPwYTZD2xxmiLgWlWWrF-NnTx5U9a7eHZz3iGmYO5oO5HnaPUusIXeMD9YaJIfRfvbvzOPzpkiPaoLCYmdsQMpu_oCd_hATlq-NJRg-8PI6-Zhn2eHWo0tXc-hC8Zp4odTW9BEY8RbcH8Rb_VCM0XGctYPk2TLprbi3sa6AWOOCaVa2kXe92kAjtuMyB02Qmgh54vj-Z3D5a6i-a_Fdx4_VCryQ4qeTwqPfM",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxYlaab3avIwOron6RYsQWyEAQGr6S6m1kFgCw1S2P0PMrPybqeHOa-EnB2WfuZ8AWVax5-XUxx8eVrwMCF9jxlOtuJAm-Bm31FpnR_oXSvxTTfydUKPhAJy6oWql9z2rU1lm3OD-m1ZxTB5g6k3o6tp6A9tagt_Fg4cm-C9iOplDZjyS9KjK8nuUmKIYnyij84f3eua00d1twlHUsUPqOvpibFIIGpkLMDylWIYf8hBjbrRE-2BYxUnbMTTc6AY3rcT-t5XCVkWk",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSepdBKduIBWbgmYmBidKet9Ucwyaq0LGkg1x9n-By8WHSM0-aPhg1rwFj_1Y7_NRAFPg1iqnHLUDsQrBO-Z95LPLDNy_foa7M88HL9SGgY3v3DjOe8yKlvMpy8CkMPYXHqnn-rZ3XcZNJ9gsOvCQd4nKrgCnv6fN04w7tqdEATVl5aHKo8mGExaK-9BJFdb5lBF1L9CyJOoQlLmhMV3PF2u-xI9uw8tz7y7g65KFeULrIN9I5PatJNZOXm2toQQzfO60I6wA0Wy8"
    ],
    sustainability: "Our silk is OEKO-TEX® certified, ensuring no harmful chemicals are used in the production process. We partner with family-owned mills in Lake Como.",
    careInstructions: "Dry clean only. Store on a padded hanger to maintain the bias-cut structure. Do not steam at high temperatures."
  },
  {
    id: "the-archival-trench",
    title: "The Archival Trench",
    collection: "Collection 004 / L'Essence",
    category: "Outerwear",
    price: 1240,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApYsvpdRsRuz-CYxlD8bddEP4LDufTAE72JrWLoyMcwX9qz0pmIGHJKxjb4zOio8USQ_HAfaU8tBrxAqI1rdXVhLN1Ac6zZSoyyjTx_ScDvX1IuiGKpKEPewHuDPPi63JxY4U1RgoUEDloXbH9iv6IpdmFUoKruL1--M6NUud8DydhJ15Y8SOwDAaV0BFZZT_tQFxMJIVfil-2ege9S1BUC2pamtu06b7PhYYP4gOTVTIk_f_hQFkRJTxWHNOjNWTnMl6f9Usc8Gk",
    description: "A signature double-breasted trench silhouette featuring relaxed shoulders, structural drape, storm flap detailing, and a premium buckle waist belt.",
    material: "100% Virgin Wool",
    origin: "Tuscany, Italy",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Beige"],
    fabrics: ["Wool"],
    sustainability: "Woven in a carbon-neutral mill prioritizing recycled water systems.",
    careInstructions: "Professional dry clean only. Brush with a soft wool brush between wears."
  },
  {
    id: "structure-top",
    title: "Structure Top",
    collection: "Collection 004 / L'Essence",
    category: "Tailoring",
    price: 480,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0Oa5NwuxNmtGKYk7WaR0jE8K3b9rTqYrn1yO9TjTsCHOjLPPLuhtmeAx83GWzo-4tQdxQMexMSuwX4TakbQkoWBZSbmyaazwZ0_E7T3cLvpx1U_90Z137oSKwsRiDM_inKTKkh8OJNqypa9XDVzcQopGQ5NBiBGMS_FVheA9Td6k-7uYYFCVHQZdVcSUX5nvlbZk2mO8Z7i7THNzjbZKf1g-7dNl9i6DsGtFE7X0oUiE8HxQvecuCuk4emIU7Cwg0jvfNzaecQ3w",
    description: "An architectural sculpted canvas piece that shifts seamlessly between structured layering and minimalist solo styling.",
    material: "Sculpted Canvas Cotton",
    origin: "Paris, France",
    sizes: ["S", "M", "L"],
    colors: ["Beige", "Monochrome"],
    fabrics: ["Canvas", "Cotton"],
    sustainability: "Crafted entirely from GOTS certified organic canvas materials.",
    careInstructions: "Hand wash cold. Lay flat to dry to preserve sculpted profile."
  },
  {
    id: "silk-narrative-top",
    title: "Silk Narrative",
    collection: "Collection 004 / L'Essence",
    category: "Dresses",
    price: 390,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDkbqTiGSEkIJBW6ECqef_6Z3OuFgVCC0k7y4Tfvu-hz5mSaCOENt8k_nxOV_AZuRkNk91e2dR-kdci75hV87nQNijLAZk_w4qbJmGZmjwDEi_3n2GmP38uqiGLpHR3ZXnA9daZdTTYBWa2dhOoJHpkEeQ7o9QKzrn0R58T3mSWaHZsZj3zbc8RUv-1Fr0lhL_Cvp6NZtVzWrd6ABZcDJCXrcDycc8pczCrsCMecwBX2ACtv3xSM0s5c-9jO7kCr5i8mtHiYyk5kI",
    description: "A fluid halter silk top with double-layered mulberry silk construction and adjustable strap finishes for an organic fit.",
    material: "Mulberry Silk",
    origin: "Milan, Italy",
    sizes: ["XS", "S", "M"],
    colors: ["Monochrome"],
    fabrics: ["Silk"],
    sustainability: "Dyed with eco-friendly non-toxic dyes that are fully biodegradable.",
    careInstructions: "Delicate hand wash or dry clean only."
  },
  {
    id: "the-void-trousers",
    title: "The Void Trousers",
    collection: "Collection 004 / L'Essence",
    category: "Tailoring",
    price: 550,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXlheGTbu06nZmepHQ61V6IxJzgPpd-NXwoRDLeVijIIwZerqhTn5Z5V6VamlDanAWUVap1gkaIouPcglUpzfs5K72ePweUdvNclbQavmb8ui5nJbSp1NKclVawfcDFO0OXqfFREr5p7vLj73hCfgQ-d1K9rCov5Kdw6qAwFREaA0c4sSHvm8OiXbcNFU_IM8b04n4DKfcVuUCY8fPkge10g1jm4Qc1zvx9FK0yDtR8OMIY4I_vMpTRPSzvMfBIQGuyZ61nJ_pnxc",
    description: "A relaxed, wide-leg trouser featuring a tailored waistband and structural pleating for a balanced, sophisticated flow.",
    material: "Relaxed Fit Cotton",
    origin: "Kyoto, Japan",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Monochrome"],
    fabrics: ["Cotton"],
    sustainability: "Locally spun cotton certified to reduce water footprints by 50%.",
    careInstructions: "Machine wash cold inside out. Hang dry."
  },
  {
    id: "leather-obscura-shoes",
    title: "Leather Obscura",
    collection: "Collection 004 / L'Essence",
    category: "Footwear",
    price: 210,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrVpztCumLNBoAItFeOmuvk3f7I9J7dI2Cux0WS_1EFfYkjVp0UtaExlIar94q8V-FGB6tOgevReYSv3Tw-fWRO30TuLHGiWE3_enU1Wjm5JHhVwN9i9Oj89-NkWYO3mQlYedFWSGhb-IiP7mIOZBk-LwPP7dGN0KKM26wZ5x2wf0bkOONtcbrvcCXfeeBOClKdyr-uJUsd11xSzJiLjW6rLeaU0I1BgtItEI75tP-UCkkHBb5IQaLmhkdDi7Sk34iHShzuhCJ3mU",
    description: "Minimalist structured footwear with sleek eyelet placements and low-profile calfskin leather construction.",
    material: "Calfskin Accessories",
    origin: "Florence, Italy",
    sizes: ["S", "M", "L"],
    colors: ["Monochrome"],
    fabrics: ["Leather"],
    sustainability: "Sourced from high-standard Leather Working Group gold-certified tanneries.",
    careInstructions: "Apply professional leather cream occasionally and dry with soft microfiber cloth."
  },
  {
    id: "linear-layering-set",
    title: "Linear Layering",
    collection: "Collection 004 / L'Essence",
    category: "Tailoring",
    price: 890,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnqpDt0A4LrUz4DUFet98zPoD70Dy2Rukt5Pw8piXcwEdcie42Vc3gTZvUeO2Ud9GPLeP47DBwvRYjjnsJ2HqrUVBMud2hr038w_TpNfKkN4nrqf6_gQ39gxnBglwAEO_yjeZfIp6UsWm3rcSTwMtuC4jWfivJyQ-hSHWaLmjFTxQl0vAXDyAms-NVeyRhs_IvpKHy2fS3HLxoj2nh_5jFoVMiO62Crw6C-iXTRGGn7Z-CUsMfIVMYPFznHXK0hoESmYFPS9kEaTA",
    description: "A tailored seasonal suit set bringing clean lines, generous architectural volume, and a neutral palette to your curated closet.",
    material: "Wool Silk Blend",
    origin: "Milan, Italy",
    sizes: ["S", "M", "L"],
    colors: ["Monochrome", "Beige"],
    fabrics: ["Wool", "Silk"],
    sustainability: "Hand-finished in a certified zero-waste atelier.",
    careInstructions: "Dry clean only. Cool iron under protection cloth."
  },
  {
    id: "the-monolith-coat",
    title: "The Monolith Coat",
    collection: "Issue No. 04 — Essentialism",
    category: "Outerwear",
    price: 1650,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjT8Yi2sesfMugzSPwC2ObE0tGGPcdSRc-qH5uSTeIwN9n7fN-C9Kww-kbi0cAEK0Swc2vufkOyFs800ecT0kAQcD5_r_7W-076YQZ-Cp6fMb9So3fOpUkq_Sc1445QxNR6oCn6V6yf5ZOorFaQjDvXeCIiQxuzWFVYilA-ge7QA2b1-M7eARcfDTGnngddVpTQPuG-STk8NvmpQi57GNLAgNAnZkFrgX8UOzS9ljZOKlOFbI264Jf7yf-jXE2fTDNjN5Hpi4t98k",
    description: "Structural integrity meets raw silk. A study in architectural volume for the modern nomad.",
    material: "Raw Silk Wool",
    origin: "Kyoto, Japan",
    sizes: ["S", "M", "L"],
    colors: ["Monochrome"],
    fabrics: ["Silk", "Wool"],
    sustainability: "Artisanal loomed fabric created in small batches.",
    careInstructions: "Specialist dry cleaning recommended to retain the raw-fiber texture."
  },
  {
    id: "sculpted-silk-gown",
    title: "Sculpted Silk Gown",
    collection: "Autumn / Winter '24",
    category: "Dresses",
    price: 2450,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXjm9gytZ_vcWUwuQtTUMW7UVTAGFj0tPbYXZa_Pb5veWnmekt9H4g_dD1BYk-gKY6P4W-55ImCXo7tVwRNaKQpvRHRVUljk5-ka7xFJ2ESLobdWw0V5tjiat3TloS6UFTRnSSKcqHWnxPfOMt2Vsw3RuLE_afbkAKafGbRUYzU-FlcmWLyW2lf8DFRMjJNXRNqlsZbOj5xklFzvlvKzByQVpQQ_rqhafTiVGiXXLMgdSLRih2uS28gVQmd5l1tiXULhOb5B8fd7Y",
    description: "An elegant, floor-skimming black gown with beautifully gathered visual drapes, a plunged neckline, and a structured waist fit.",
    material: "100% heavy mulberry silk",
    origin: "Lake Como, Italy",
    sizes: ["XS", "S", "M"],
    colors: ["Monochrome"],
    fabrics: ["Silk"],
    sustainability: "Crafted with silk meeting certified chemical-free and sustainable labor parameters.",
    careInstructions: "Dry clean only. Hang on silk padding hangers."
  },
  {
    id: "archive-clutch",
    title: "Archive Clutch",
    collection: "Curated Selection",
    category: "Accessories",
    price: 890,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfCXnEoxSjm1vprDCZIO6xHGH4yyRMrAWoA0tdrYH1frMCHvrGY4V-ZZhXqiSM9kCn3qSQUvmnHioppH0PYXbG3rbYfkPaHKcsn3ZR8ql8d0e1YRexykhOPPIDOFMizI-KMK1spqGVVokHHgaEDlkdYqWOqoLb96JprRCRYp01BQC4GcvojMubvOv8ciX0N9Vo7njV3GrCND80HH79hmAixUYDGere_37Ohx0hXD0yf5GGXhDnx5AZSPTVgVvJfIiFRoudsiRMvAA",
    description: "A textured black leather handbag with clean geometry, premium structured handles, and high-end hardware finishes.",
    material: "Calfskin Leather",
    origin: "Florence, Italy",
    sizes: ["One Size"],
    colors: ["Monochrome"],
    fabrics: ["Leather"],
    sustainability: "Produced under certified circular leather-upcycling frameworks.",
    careInstructions: "Wipe with a soft damp cloth, store in its custom protective dust bag."
  },
  {
    id: "structured-blazer",
    title: "Structured Blazer",
    collection: "Collection 004 / L'Essence",
    category: "Outerwear",
    price: 1200,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDa0AOJS1_hnUDp5sTjQBKwvZnErVdmSuRWibtbC2OxMO3YBdF2vh_CiiLc9g_tCKxgdGq3f10v4ukY2SsANfrB5kW-0aMpcnjq9nK-RtqAa7SX3BP5m-wuXR_TYoE1NXh5PDBD029VzWutYrCp9U6_6jKmmgoey9jm9pV_FkDAw5oL8lu3Ab2Msrhy1Cg_bidj5l8QCmmqjnpTydARkfmVWXqsW2mpfBjTQ5FpodtSNI1PCE9YUPZcu-7Bc6WJUCCx5wJcEsP4MhE",
    description: "An elegant warm beige blazer featuring deep lapels, double-welt side pockets, and perfectly padded structure shoulders.",
    material: "Virgin Wool Blend",
    origin: "Paris, France",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Beige"],
    fabrics: ["Wool"],
    sustainability: "Traceable wool farmed under certified cruelty-free conditions.",
    careInstructions: "Professional dry clean only."
  },
  {
    id: "lumiere-trench",
    title: "Lumière Trench",
    collection: "Limited Edition",
    category: "Outerwear",
    price: 3100,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCY3wii-Z4qR0xFlKFPvv4vnkF_KTx2WERbN3fhmhdFxcIPOg2Xqx3nhnMLnNOaeuiT1JTmbY3IfHPS17KWSGxk5SPK6oVgMACf8_1yJHFqSqfGig6p218DlZ_NqVliWOvJcvyLTTmrKMcAjchrkZ5zShL-fujANRW9C-4arGKku9eklL5rhtuGkMtYkALlqKAKdF1Ye3Vn7mzV3VNl25R28XBPMPsvJgKpSwlxQKMbjUUttFxJIxX7Ue-cvdjJH-j72QnK0s8QSnA",
    description: "A supreme state-of-the-art trench coat set highlighting relaxed silhouettes, high-density cotton wool weaving, and deep grey styling.",
    material: "Cotton Wool Blend",
    origin: "Kyoto, Japan",
    sizes: ["S", "M", "L"],
    colors: ["Monochrome"],
    fabrics: ["Cotton", "Wool"],
    sustainability: "Produced locally inside a family owned carbon-neutral workshop.",
    careInstructions: "Specialist dry clean only."
  },
  {
    id: "strappy-heel",
    title: "Strappy Heel",
    collection: "Complete the Look",
    category: "Footwear",
    price: 420,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUa8Fu2pirc21alV0kkll4JTC40cGCnw0R0lD7k_-HsA2nh2k13E2KyefEiT0Zd_ziUQV9MUizb_5FHh3DB9FNZknNjgBZOaWqzwlbjZqy171-6RR5WPBfoizFR5ieFmMM3fQqEVYQbn5jfNegF4s-OV3aPsgAcPoCyO691SyCdLb4ePWzBOlOR_5VSCq9dfZkI8NK4H4Go-61c2Jcj-H3y3R7A1h858ASGCDQzK8K-R_CLWq2WBVgb0AFiUGZG2pgX_sVFlISjLw",
    description: "Elegant minimalist double-strap block heels. Sourced and engineered to blend architectural stance with custom padded cushioning.",
    material: "100% fine calf leather",
    origin: "Florence, Italy",
    sizes: ["S", "M", "L"],
    colors: ["Monochrome"],
    fabrics: ["Leather"],
    sustainability: "Sustainably-tanned leather avoiding hazardous chromium usage.",
    careInstructions: "Store with dry tissue inserts inside original dust packaging."
  },
  {
    id: "vault-clutch",
    title: "Vault Clutch",
    collection: "Complete the Look",
    category: "Accessories",
    price: 1250,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrWKCDpYrQY5Y7xe2byqE9mqOxrNaH1XtNMSzh_Xi0XARmUiKjkHskAPUjweDZa0UM7yAOouBh1kekBYosEf55vumCopVrk352BLZGvz9eZzsrCLgMwb7zwYEyqq6U5Dec6A5ld5RY27r55Tu_R94pH1YWe4XTNMy6zYvlqlImuh_X0qZ3t_wajzH1UIGWgyjIcAegb73Q8p3uPvlu9IoOwMNj_8vt7QTM0dTbiRI9demAzK2WLy9hK-1tv_mNJK3wxzAIdcFHGp0",
    description: "A highly sophisticated deep brown structured leather bag. Embellished with premium metal-brass closures and clean handle arc.",
    material: "Textured Calfskin",
    origin: "Bologna, Italy",
    sizes: ["One Size"],
    colors: ["Beige"],
    fabrics: ["Leather"],
    sustainability: "100% certified traceable ethical production chain.",
    careInstructions: "Treat occasionally with professional leather conditioner."
  }
];
