// Sri Lankan Vegetables organized by categories
// Used in registration and plant selection

const SRI_LANKAN_VEGETABLES = {
    'grains-legumes': [
        'Beans (Bonchi)',
        'Black Gram (Kalu Undu)',
        'Chickpeas (Kadala)',
        'Corn (Mekaral)',
        'Drumstick (Murunga)',
        'Fenugreek (Uluhal)',
        'Green Gram (Mung Beans)',
        'Yard Long Beans (Mae Karal)',
        'Lentils (Parippu)',
        'Okra (Bandakka)',
        'Soybean',
        'Cowpea (Thora)',
        'Pigeon Pea (Kadala)',
        'Lima Beans',
        'Winged Beans (Dambala)',
        'Horse Gram (Kollu)',
        'Rice (Samba, Nadu)',
        'Finger Millet (Kurakkan)',
        'Maize (Iringu)',
        'Sorghum (Irana)'
    ],
    'fruity-vegetables': [
        'Tomato (Thakkali)',
        'Ash Plantain (Alu Kesel)',
        'Breadfruit (Del)',
        'Jackfruit (Kos)',
        'Tender Jackfruit (Polos)',
        'Capsicum (Miris)',
        'Green Chilies (Kochchi)',
        'Red Chilies',
        'Bell Pepper',
        'Brinjal (Eggplant) (Wambatu)',
        'Thai Eggplant',
        'Okra (Bandakka)',
        'Cucumber (Pipinna)',
        'Bitter Gourd (Karawila)',
        'Snake Gourd (Pathola)',
        'Ridge Gourd (Watakolu)',
        'Bottle Gourd (Labu)',
        'Ash Pumpkin (Alu Puhul)',
        'Pumpkin (Puhul)',
        'Watermelon (Komadu)',
        'Musk Melon',
        'Cantaloupe'
    ],
    'leafy-stem': [
        'Cabbage (Gova)',
        'Lettuce (Salad)',
        'Spinach (Nivithi)',
        'Amaranth Leaves (Thampala)',
        'Gotukola (Centella asiatica)',
        'Kangkung (Water Spinach) (Kankun)',
        'Agati Leaves (Katuru Murunga)',
        'Mint (Miris)',
        'Curry Leaves (Karapincha)',
        'Coriander Leaves (Kottamalli)',
        'Fenugreek Leaves (Uluhal)',
        'Mustard Greens (Abu)',
        'Radish Leaves',
        'Beetroot Leaves',
        'Sweet Potato Leaves',
        'Cassava Leaves',
        'Pumpkin Leaves',
        'Drumstick Leaves (Murunga)',
        'Moringa Leaves',
        'Lettuce (Various types)',
        'Rocket Leaves',
        'Basil (Maduruthala)',
        'Spring Onions',
        'Leeks',
        'Celery',
        'Chinese Cabbage',
        'Pak Choi',
        'Bok Choy'
    ],
    'root-tuberous': [
        'Potato (Ala)',
        'Sweet Potato (Bathala)',
        'Cassava (Manioc) (Mangala)',
        'Carrot (Carrot)',
        'Radish (Rathu Ala)',
        'Beetroot (Beet)',
        'Onion (Lunu)',
        'Garlic (Sudu Lunu)',
        'Ginger (Inguru)',
        'Turmeric (Kaha)',
        'Yam (Kiri Ala)',
        'Elephant Foot Yam (Hingurala)',
        'Taro (Kiriala)',
        'Arrowroot (Hulankeeriya)',
        'Lotus Roots (Nelum Ala)',
        'Kohila (Lasia spinosa)',
        'Chinese Potato',
        'Purple Yam',
        'Water Yam',
        'Greater Yam',
        'Lesser Yam',
        'Turnip',
        'Parsnip',
        'Daikon Radish'
    ]
};

// Function to search vegetables by category and search term
function searchVegetables(category, searchTerm = '') {
    if (!SRI_LANKAN_VEGETABLES[category]) {
        return [];
    }
    
    if (!searchTerm || searchTerm.trim() === '') {
        return SRI_LANKAN_VEGETABLES[category];
    }
    
    const term = searchTerm.toLowerCase();
    return SRI_LANKAN_VEGETABLES[category].filter(veg => 
        veg.toLowerCase().includes(term)
    );
}

// Function to get all vegetables for a category
function getVegetablesByCategory(category) {
    return SRI_LANKAN_VEGETABLES[category] || [];
}

// Function to get category display name
function getCategoryDisplayName(category) {
    const names = {
        'grains-legumes': 'Grains & Legumes',
        'fruity-vegetables': 'Fruity Vegetables',
        'leafy-stem': 'Leafy & Stem Vegetables',
        'root-tuberous': 'Root & Tuberous Vegetables'
    };
    return names[category] || category;
}

