const products = [
  {
    name: "Make up Removal Spray",
    img: "https://i.ibb.co/9wLrzDL/r11-1-adobespark.png",
    product_more_img: [
      { img: "https://i.ibb.co/2yjWqj0/img1.png" },
      { img: "https://i.ibb.co/S5ynYxG/removal1.png" },
      { img: "https://i.ibb.co/r6Y3kMV/removal2.png" },
      { img: "https://i.ibb.co/CnSvKF9/removal3.png" },
    ],
    description:
      "Getting unready has never been easier. This light and easy to use spray dissolves makeup with ease, simply spritz all over your face or onto a cotton pad and wipe away. Perfect for those evenings when you just want makeup gone in a flash. Formulated with Betaine and Glycerin to help keep the skin soft and moisturised",
    brand: "Lancome",
    price: "50",
    rate: "4",
  },
  {
    name: "Cover Foundation",
    img: "https://i.ibb.co/tcNBWf0/foundation.png",
    product_more_img: [
      { img: "https://i.ibb.co/6RJtxFY/f2-removebg-preview.png" },
      { img: "https://i.ibb.co/CmKTKPX/f1-removebg-preview-1.png" },
      { img: "https://i.ibb.co/qWXnzWJ/f3-removebg-preview.png" },
      { img: "https://i.ibb.co/tcNBWf0/foundation.png" },
    ],
    productColors: ["bg-red-100	", "bg-red-200", "bg-red-300", "bg-red-500"],
    description:
      "Iconic foundation that provides undetectable medium coverage and a blurred, skin-like finish for up to 24 hours.",
    brand: "Dior",
    price: "50",
    rate: "4",
  },
  {
    name: "Perfume",
    img: "https://i.ibb.co/P4hmBvR/p44.jpg",
    productColors: ["bg-red-100	", "bg-red-400", "bg-red-700", "bg-red-900"],
    product_more_img: [
      { img: "https://i.ibb.co/LC1BhTZ/img3-removebg-preview.png" },
      { img: "https://i.ibb.co/440Rv2v/p55.jpg" },
      { img: "https://i.ibb.co/P4hmBvR/p44.jpg" },
      { img: "https://i.ibb.co/VqgQKMP/p11.jpg" },
    ],
    description:
      "An overdose of freshness.The top notes of a vivifying peppery bergamot, the raw sophistication of an ambery wood trail",
    brand: "Glam",
    price: "43",
    rate: "4",
  },
  {
    name: "PRO Highlighter Powder",
    img: "https://i.ibb.co/9VRQ9B1/h1-removebg-preview.png",
    product_more_img: [
      { img: "https://i.ibb.co/9VRQ9B1/h1-removebg-preview.png" },
      { img: "https://i.ibb.co/3hF0Dgb/h2-removebg-preview.png" },
      { img: "https://i.ibb.co/ZzCVqLm/h3-removebg-preview.png" },
      { img: "https://i.ibb.co/Bn1NgBS/highlighter-front.jpg" },
    ],
    productColors: ["bg-red-100	", "bg-red-400", "bg-red-700", "bg-red-900"],
    description:
      "A natural, luminous finish highlighter that adds an instant, subtle sheen to the skin. Infused with lustrous pearls and spherical powders to sculpt, highlight, and give skin a lit-from-within glow.",
    brand: "Lauder",
    price: "43",
    rate: "4",
  },
  {
    name: "Artish Rouge Mat",
    img: "https://i.ibb.co/s2JyKjh/lipstick-frontcover.png",
    product_more_img: [
      { img: "https://i.ibb.co/JHJShGC/img5-removebg-preview.png" },
      { img: "https://i.ibb.co/3mShPg4/lip-img-1.png" },
      { img: "https://i.ibb.co/VMrCrhY/lip-img-2.png" },
      { img: "https://i.ibb.co/mtpWcmc/lipstick-3-removebg-preview.png" },
    ],
    productColors: ["bg-red-100	", "bg-red-400", "bg-red-700", "bg-red-900"],
    description:
      "MAT has a high-pigment formula for a stroke coverage and a spectacular 10 hour* wear. * Instrumental test method performed on 20 women",
    brand: " Dior",
    price: "43",
    rate: "5",
  },
  {
    name: "COVERAGE Concealer",
    img: "https://i.ibb.co/JvCYQpV/concealer-removebg-preview.png",
    product_more_img: [
      { img: "https://i.ibb.co/pf2NdZ7/c1-removebg-preview.png" },
      { img: "https://i.ibb.co/Rc3T6cb/c2-removebg-preview.png" },
      { img: "https://i.ibb.co/CwzZT85/c4-removebg-preview.png" },
      { img: "https://i.ibb.co/PhX53WF/concealer-front-removebg-preview.png" },
    ],
    productColors: ["bg-red-100	", "bg-red-400", "bg-red-700", "bg-red-900"],
    description:
      "Natural finish creamy concealer with medium, buildable coverage and second-skin, satin feel. Breakthrough self-setting formula provides 12-hour, crease-free wear. Now in 26 shades to match your skin.",
    brand: "Loreal",
    price: "50",
    rate: "4",
  },
  {
    name: "Brush",
    img: "https://i.ibb.co/vq7hwxC/img7-removebg-preview.png",
    product_more_img: [
      { img: "https://i.ibb.co/1rKmxYC/b5-removebg-preview.png" },
      { img: "https://i.ibb.co/r0TsCV8/b22-removebg-preview.png" },
      { img: "https://i.ibb.co/bB6Zk2g/b3-removebg-preview.png" },
      { img: "https://i.ibb.co/pvsFyxd/img7-removebg-preview-1.png" },
    ],
    productColors: ["bg-red-100	", "bg-red-400", "bg-red-700", "bg-red-900"],
    description:
      "A long blush brush for applying and blending easily on the skin and lifting the cheekbones. The soft shape of the brush adapts to the shape of the face. It is similar to calligraphy brushes and is used by some make up artists for calligraphic designs. The brush can be used with loose and pressed powder.",
    brand: "Estee",
    price: "50",
    rate: "4",
  },
  {
    name: "LipLinear Pencil",
    img: "https://i.ibb.co/hYWWXQ0/lf1-removebg-preview.png",
    product_more_img: [
      { img: "https://i.ibb.co/zQ7KkfM/l3-removebg-preview.png" },
      { img: "https://i.ibb.co/1GW2W6P/l2-removebg-preview.png" },
      { img: "https://i.ibb.co/LnkYnhT/l1-removebg-preview.png" },
      { img: "https://i.ibb.co/hYWWXQ0/lf1-removebg-preview.png" },
    ],
    productColors: ["bg-red-100	", "bg-red-400", "bg-red-700", "bg-red-900"],
    description:
      "Draw endless makeup creations with the pencil that does it all*, ARTIST COLOR PENCIL: use it on cheeks, lip line, eyes and brows for monochromatic or multicolored looks! #multiusepencil",
    brand: "Estee",
    price: "30",
    rate: "4",
  },
  {
    name: "Setting Powder",
    img: "https://i.ibb.co/L962hx7/s11-removebg-preview.png",
    product_more_img: [
      { img: "https://i.ibb.co/L962hx7/s11-removebg-preview.png" },
      { img: "https://i.ibb.co/qJgDMWj/s22-removebg-preview.png" },
      { img: "https://i.ibb.co/svnZnB0/s33-removebg-preview.png" },
      { img: "https://i.ibb.co/6BFH20h/pressed-powder-front-image.png" },
    ],
    productColors: ["bg-red-100	", "bg-red-400", "bg-red-700", "bg-red-900"],
    description:
      "This invisible veil of finishing powder instantly blurs fine lines, pores and imperfections for a beautifully smooth complexion.",
    brand: "For Ever",
    price: "30",
    rate: "4",
  },
  {
    name: "Artish Face Color",
    img: "https://i.ibb.co/bQQvyjQ/n4.png",
    product_more_img: [
      { img: "https://i.ibb.co/3Bq6cgx/n1.png" },
      { img: "https://i.ibb.co/2ctnnmG/n2.png" },
      { img: "https://i.ibb.co/p2n49Mx/n3.png" },
      { img: "https://i.ibb.co/bQQvyjQ/n4.png" },
    ],
    productColors: ["bg-red-100	", "bg-red-400", "bg-red-700", "bg-red-900"],
    description:
      "An all-in-one travel duo featuring Artist Face Color highlight and blush powder bestsellers.",
    brand: "Channel",
    price: "60",
    rate: "4",
  },
];
