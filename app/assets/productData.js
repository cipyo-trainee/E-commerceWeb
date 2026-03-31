import { assets } from "./assets";
export const products = [
  {
    id: 1,
    name: "Apple Earphones",
    description: "Noise-cancellation, 40-hour battery",
    rating: 4.5,
    price: "$299.99",
    imgSrc: assets.apple_earphone_image,
    brand: { id: 1, name: "Apple", color: "#A2AAAD" },
    category: { id: 1, name: "Audio" },
    gallery: [
      assets.apple_earphone_image,
      assets.apple_earphone_side_image,
      assets.apple_earphone_box_image
    ]
  },
  {
    id: 2,
    name: "Bose QuietComfort 45",
    description: "Noise Cancellation, 24-hour battery",
    rating: 4.5,
    price: "$329.99",
    imgSrc: assets.bose_headphone_image,
    brand: { id: 2, name: "Bose", color: "#1C1C1C" },
    category: { id: 1, name: "Audio" },
    gallery: [
      assets.bose_headphone_image,
      assets.bose_headphone_side_image,
      assets.bose_headphone_box_image
    ]
  },
  {
    id: 3,
    name: "Samsung Galaxy S23",
    description: "Fitness Tracking, AMOLED Display",
    rating: 4.5,
    price: "$799.99",
    imgSrc: assets.samsung_s23phone_image,
    brand: { id: 3, name: "Samsung", color: "#1428A0" },
    category: { id: 2, name: "Smartphones" },
    gallery: [
      assets.samsung_s23phone_image,
      assets.samsung_s23phone_back_image,
      assets.samsung_s23phone_box_image
    ]
  },
  {
    id: 4,
    name: "Garmin Venu 2",
    description: "Noise Cancellation, 24-hour battery",
    rating: 4.5,
    price: "$349.99",
    imgSrc: assets.venu_watch_image,
    brand: { id: 4, name: "Garmin", color: "#0072C6" },
    category: { id: 3, name: "Wearables" },
    gallery: [
      assets.venu_watch_image,
      assets.venu_watch_side_image,
      assets.venu_watch_box_image
    ]
  },
  {
    id: 5,
    name: "PlayStation 5",
    description: "Ultra-HD, 825GB SSD, Ray Graphics",
    rating: 4.5,
    price: "$499.99",
    imgSrc: assets.playstation_image,
    brand: { id: 5, name: "Sony", color: "#000000" },
    category: { id: 4, name: "Gaming Console" },
    gallery: [
      assets.playstation_image,
      assets.ps5_controller_image,
      assets.ps5_box_image
    ]
  },
  {
    id: 6,
    name: "Canon EOS R5",
    description: "45MP Sensor, 8K Video Recording",
    rating: 4.5,
    price: "$3,899.99",
    imgSrc: assets.cannon_camera_image,
    brand: { id: 6, name: "Canon", color: "#BC0024" },
    category: { id: 5, name: "Camera" },
    gallery: [
      assets.cannon_camera_image,
      assets.cannon_camera_side_image,
      assets.cannon_camera_box_image
    ]
  },
  {
    id: 7,
    name: "MacBook Pro 16",
    description: "M2 Pro Chip, 16GB RAM, 512GB SSD",
    rating: 4.5,
    price: "$2,499.99",
    imgSrc: assets.macbook_image,
    brand: { id: 1, name: "Apple", color: "#A2AAAD" },
    category: { id: 6, name: "Laptop" },
    gallery: [
      assets.macbook_image,
      assets.macbook_side_image,
      assets.macbook_box_image
    ]
  },
  {
    id: 8,
    name: "Sony WF-1000XM5",
    description: "Noise-Cancellation, Hi-Res Audio",
    rating: 4.5,
    price: "$299.99",
    imgSrc: assets.sony_airbuds_image,
    brand: { id: 5, name: "Sony", color: "#000000" },
    category: { id: 1, name: "Audio" },
    gallery: [
      assets.sony_airbuds_image,
      assets.sony_airbuds_side_image,
      assets.sony_airbuds_box_image
    ]
  },
  {
    id: 9,
    name: "Samsung Projector 4k",
    description: "4K Ultra HD, Realistic, Built-In Speaker",
    rating: 4.5,
    price: "$1,499.99",
    imgSrc: assets.projector_image,
    brand: { id: 3, name: "Samsung", color: "#1428A0" },
    category: { id: 7, name: "Home Electronics" },
    gallery: [
      assets.projector_image,
      assets.projector_side_image,
      assets.projector_box_image
    ]
  },
  {
    id: 10,
    name: "ASUS ROG Zephyrus G16",
    description: "Intel Core i9, RTX 4070, 16GB, 1TB",
    rating: 4.5,
    price: "$1,999.99",
    imgSrc: assets.asus_laptop_image,
    brand: { id: 7, name: "ASUS", color: "#0057B7" },
    category: { id: 6, name: "Laptop" },
    gallery: [
      assets.asus_laptop_image,
      assets.asus_laptop_side_image,
      assets.asus_laptop_box_image
    ]
  },

  // ✅ 11–20 SAME LOGIC (duplicate but correct brand/category/gallery)

  {
    id: 11,
    name: "Apple Earphones",
    description: "Noise-cancellation, 40-hour battery",
    rating: 4.5,
    price: "$299.99",
    imgSrc: assets.apple_earphone_image,
    brand: { id: 1, name: "Apple", color: "#A2AAAD" },
    category: { id: 1, name: "Audio" },
    gallery: [
      assets.apple_earphone_image,
      assets.apple_earphone_side_image,
      assets.apple_earphone_box_image
    ]
  },
  {
    id: 12,
    name: "Bose QuietComfort 45",
    description: "Noise Cancellation, 24-hour battery",
    rating: 4.5,
    price: "$329.99",
    imgSrc: assets.bose_headphone_image,
    brand: { id: 2, name: "Bose", color: "#1C1C1C" },
    category: { id: 1, name: "Audio" },
    gallery: [
      assets.bose_headphone_image,
      assets.bose_headphone_side_image,
      assets.bose_headphone_box_image
    ]
  },
  {
    id: 13,
    name: "Samsung Galaxy S23",
    description: "Fitness Tracking, AMOLED Display",
    rating: 4.5,
    price: "$799.99",
    imgSrc: assets.samsung_s23phone_image,
    brand: { id: 3, name: "Samsung", color: "#1428A0" },
    category: { id: 2, name: "Smartphones" },
    gallery: [
      assets.samsung_s23phone_image,
      assets.samsung_s23phone_back_image,
      assets.samsung_s23phone_box_image
    ]
  },
  {
    id: 14,
    name: "Garmin Venu 2",
    description: "Noise Cancellation, 24-hour battery",
    rating: 4.5,
    price: "$349.99",
    imgSrc: assets.venu_watch_image,
    brand: { id: 4, name: "Garmin", color: "#0072C6" },
    category: { id: 3, name: "Wearables" },
    gallery: [
      assets.venu_watch_image,
      assets.venu_watch_side_image,
      assets.venu_watch_box_image
    ]
  },
  {
    id: 15,
    name: "PlayStation 5",
    description: "Ultra-HD, 825GB SSD, Ray Graphics",
    rating: 4.5,
    price: "$499.99",
    imgSrc: assets.ps5_image,
    brand: { id: 5, name: "Sony", color: "#000000" },
    category: { id: 4, name: "Gaming Console" },
    gallery: [
      assets.ps5_image,
      assets.ps5_controller_image,
      assets.ps5_box_image
    ]
  },
  {
    id: 16,
    name: "Canon EOS R5",
    description: "45MP Sensor, 8K Video Recording",
    rating: 4.5,
    price: "$3,899.99",
    imgSrc: assets.cannon_camera_image,
    brand: { id: 6, name: "Canon", color: "#BC0024" },
    category: { id: 5, name: "Camera" },
    gallery: [
      assets.cannon_camera_image,
      assets.cannon_camera_side_image,
      assets.cannon_camera_box_image
    ]
  },
  {
    id: 17,
    name: "MacBook Pro 16",
    description: "M2 Pro Chip, 16GB RAM, 512GB SSD",
    rating: 4.5,
    price: "$2,499.99",
    imgSrc: assets.macbook_image,
    brand: { id: 1, name: "Apple", color: "#A2AAAD" },
    category: { id: 6, name: "Laptop" },
    gallery: [
      assets.macbook_image,
      assets.macbook_side_image,
      assets.macbook_box_image
    ]
  },
  {
    id: 18,
    name: "Sony WF-1000XM5",
    description: "Noise-Cancellation, Hi-Res Audio",
    rating: 4.5,
    price: "$299.99",
    imgSrc: assets.sony_airbuds_image,
    brand: { id: 5, name: "Sony", color: "#000000" },
    category: { id: 1, name: "Audio" },
    gallery: [
      assets.sony_airbuds_image,
      assets.sony_airbuds_side_image,
      assets.sony_airbuds_box_image
    ]
  },
  {
    id: 19,
    name: "Samsung Projector 4k",
    description: "4K Ultra HD, Realistic, Built-In Speaker",
    rating: 4.5,
    price: "$1,499.99",
    imgSrc: assets.projector_image,
    brand: { id: 3, name: "Samsung", color: "#1428A0" },
    category: { id: 7, name: "Home Electronics" },
    gallery: [
      assets.projector_image,
      assets.projector_side_image,
      assets.projector_box_image
    ]
  },
  {
    id: 20,
    name: "ASUS ROG Zephyrus G16",
    description: "Intel Core i9, RTX 4070, 16GB, 1TB",
    rating: 4.5,
    price: "$1,999.99",
    imgSrc: assets.asus_laptop_image,
    brand: { id: 7, name: "ASUS", color: "#0057B7" },
    category: { id: 6, name: "Laptop" },
    gallery: [
      assets.asus_laptop_image,
      assets.asus_laptop_side_image,
      assets.asus_laptop_box_image
    ]
  }
];