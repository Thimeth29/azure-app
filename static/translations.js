// Translation system for WeatherGuard Harvest
// Languages: English (en), Sinhala (si), Tamil (ta)

console.log('translations.js: Script started loading...');

const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.weather': 'Weather',
        'nav.support': 'Support',
        'nav.userLogin': 'User Login',
        'nav.profile': 'Profile',
        'nav.settings': 'Settings',
        'nav.logout': 'Logout',
        'nav.plantTracking': 'Plant Tracking',
        'nav.costProfitTool': 'Cost-Profit Tool',
        'nav.futureAnalyse': 'Future Analyse',
        'nav.smsAlerts': 'SMS Alerts',
        'nav.aboutUs': 'About Us',
        'nav.language': 'Language',
        'nav.english': 'English',
        'nav.sinhala': 'Sinhala',
        'nav.tamil': 'Tamil',
        
        // Footer
        'footer.copyright': '© 2024 WeatherGuard Harvest. All rights reserved.',
        
        // Common
        'common.loading': 'Loading…',
        'common.submit': 'Submit',
        'common.cancel': 'Cancel',
        'common.save': 'Save',
        'common.delete': 'Delete',
        'common.edit': 'Edit',
        'common.close': 'Close',
        'common.back': 'Back',
        'common.next': 'Next',
        'common.previous': 'Previous',
        'common.search': 'Search',
        'common.filter': 'Filter',
        'common.actions': 'Actions',
        'common.add': 'Add',
        
        // Plant Tracking
        'plant.heading': 'Plant Tracking',
        'plant.subtitle': 'Growth insights, history, and care recommendations',
        'plant.category': 'Plant Category',
        'plant.grainsLegumes': 'Grains & Legumes',
        'plant.fruityVegetables': 'Fruity Vegetables',
        'plant.leafyStem': 'Leafy & Stem Vegetables',
        'plant.rootTuberous': 'Root & Tuberous Vegetables',
        'plant.stage': 'Stage',
        'plant.plantedDate': 'Planted date',
        'plant.location': 'Location',
        'plant.autoStage': 'Auto stage',
        'plant.refreshWeather': 'Refresh weather',
        'plant.age': 'Age',
        'plant.nextMilestone': 'Next milestone',
        'plant.essentialTasks': 'Essential Tasks',
        'plant.yourTodos': 'Your Todos',
        'plant.addTask': 'Add task...',
        'plant.addTaskPlaceholder': 'Add a task you plan to do…',
        'plant.openTracker': 'Open Tracker',
        'plant.growthWeather': 'Growth & Weather',
        'plant.atAGlance': 'At a glance',
        'plant.treatmentsTodos': 'Treatments & To-Dos',
        'plant.treatmentsNeededNow': 'Treatments needed now',
        'plant.history': 'History',
        'plant.growthWeatherAnalyzer': 'Growth & Weather Analyzer',
        'plant.stageSeed': 'Seed',
        'plant.stageSeedling': 'Seedling',
        'plant.stageSmallPlant': 'Small plant',
        'plant.stageSmallPlantGrown': 'Small plant grown',
        'plant.stageGrown': 'Grown',
        'plant.stageFullyGrown': 'Fully grown with flowers',
        'plant.maturityCondition': 'Maturity and Condition status',
        'plant.days': 'days',
        'plant.entireHistory': 'entire history',
        'plant.around': 'around',
        'plant.deepWatering': 'Deep watering',
        'plant.deepWateringDesc': 'Soak to root depth weekly.',
        'plant.bloomBooster': 'Bloom booster',
        'plant.bloomBoosterDesc': 'Higher P & K; avoid excess nitrogen.',
        'plant.treatmentFertilizer': 'Fertilizer application',
        'plant.treatmentPestControl': 'Pest control',
        'plant.treatmentPruning': 'Pruning',
        'plant.treatmentMulching': 'Mulching',
        'plant.treatmentWeeding': 'Weeding',
        
        // Weather
        'weather.title': 'Weather',
        'weather.current': 'Current Weather',
        'weather.forecast': 'Forecast',
        'weather.province': 'Province',
        'weather.allProvinces': 'All Provinces',
        'province.northCentral': 'North Central Province',
        'province.northWestern': 'North Western Province',
        'province.western': 'Western Province',
        'province.central': 'Central Province',
        'province.sabaragamuwa': 'Sabaragamuwa Province',
        'province.southern': 'Southern Province',
        'province.uva': 'Uva Province',
        'province.eastern': 'Eastern Province',
        'province.northern': 'Northern Province',
        'weather.selectCity': 'City',
        'weather.selectCityOption': 'Select a city',
        'weather.selectCityToViewForecast': 'Select a city to view forecast',
        'weather.subArea': 'Sub-Area (Optional)',
        'weather.selectSubArea': 'Select a sub-area',
        // Sub-Area Full Name Translations - Anuradhapura
        'subArea.thanthirimalefarmingzone': 'Thanthirimale Farming Zone',
        'subArea.rajaratapaddyfields': 'Rajarata Paddy Fields',
        'subArea.malwathuoyaagriculturalarea': 'Malwathu Oya Agricultural Area',
        'subArea.kalawewafarmingzone': 'Kala Wewa Farming Zone',
        'subArea.nachchaduwaagriculturalarea': 'Nachchaduwa Agricultural Area',
        'subArea.tissawewapaddyfields': 'Tissa Wewa Paddy Fields',
        'subArea.basawakkulamafarmingzone': 'Basawakkulama Farming Zone',
        'subArea.nuwarawewaagriculturalarea': 'Nuwarawewa Agricultural Area',
        'subArea.sembukuttuwafarmingzone': 'Sembukuttuwa Farming Zone',
        'subArea.padaviyaagriculturalzone': 'Padaviya Agricultural Zone',
        'subArea.kawudullafarmingarea': 'Kawudulla Farming Area',
        'subArea.kebithigollawaagriculturalzone': 'Kebithigollawa Agricultural Zone',
        // Sub-Area Full Name Translations - Mihintale
        'subArea.mihintaleagriculturalzone': 'Mihintale Agricultural Zone',
        'subArea.kantakafarmingarea': 'Kantaka Farming Area',
        'subArea.mihintalepaddyfields': 'Mihintale Paddy Fields',
        'subArea.rajanganayafarmingzone': 'Rajanganaya Farming Zone',
        'subArea.kalawewaagriculturalarea': 'Kalawewa Agricultural Area',
        'subArea.mahakanadarawafarmingzone': 'Mahakanadarawa Farming Zone',
        'subArea.nachchaduwaagriculturalzone': 'Nachchaduwa Agricultural Zone',
        // Sub-Area Full Name Translations - Kekirawa
        'subArea.kekirawapaddyfields': 'Kekirawa Paddy Fields',
        'subArea.palugaswewafarmingzone': 'Palugaswewa Farming Zone',
        'subArea.thambuttegamaagriculturalarea': 'Thambuttegama Agricultural Area',
        'subArea.nochchiyagamafarmingzone': 'Nochchiyagama Farming Zone',
        'subArea.ganewalpolaagriculturalarea': 'Ganewalpola Agricultural Area',
        'subArea.palugaswewapaddyfields': 'Palugaswewa Paddy Fields',
        'subArea.kekirawavegetablezone': 'Kekirawa Vegetable Zone',
        'subArea.thambuttegamafarmingarea': 'Thambuttegama Farming Area',
        // Sub-Area Full Name Translations - Polonnaruwa
        'subArea.parakramasamudraagriculturalzone': 'Parakrama Samudra Agricultural Zone',
        'subArea.minneriyafarmingarea': 'Minneriya Farming Area',
        'subArea.kaudullaagriculturalzone': 'Kaudulla Agricultural Zone',
        'subArea.giritalefarmingzone': 'Giritale Farming Zone',
        'subArea.topawewaagriculturalarea': 'Topa Wewa Agricultural Area',
        'subArea.elaherafarmingzone': 'Elahera Farming Zone',
        'subArea.dimbulagalaagriculturalzone': 'Dimbulagala Agricultural Zone',
        'subArea.sungawilafarmingarea': 'Sungawila Farming Area',
        'subArea.welikandaagriculturalzone': 'Welikanda Agricultural Zone',
        'subArea.medirigiriyafarmingzone': 'Medirigiriya Farming Zone',
        // Sub-Area Full Name Translations - Colombo
        'subArea.kelaniyavegetablefarmingzone': 'Kelaniya Vegetable Farming Zone',
        'subArea.attidiyapaddyfields': 'Attidiya Paddy Fields',
        'subArea.borellaagriculturalarea': 'Borella Agricultural Area',
        'subArea.kottefarmingzone': 'Kotte Farming Zone',
        'subArea.kolonnawavegetablezone': 'Kolonnawa Vegetable Zone',
        'subArea.maharagamaagriculturalarea': 'Maharagama Agricultural Area',
        'subArea.kaduwelafarmingzone': 'Kaduwela Farming Zone',
        'subArea.homagamaagriculturalzone': 'Homagama Agricultural Zone',
        'subArea.piliyandalavegetablefarming': 'Piliyandala Vegetable Farming',
        'subArea.kesbewaagriculturalarea': 'Kesbewa Agricultural Area',
        'subArea.thalangamafarmingzone': 'Thalangama Farming Zone',
        'subArea.athurugiriyaagriculturalzone': 'Athurugiriya Agricultural Zone',
        // Sub-Area Full Name Translations - Gampaha
        'subArea.gampahapaddyfields': 'Gampaha Paddy Fields',
        'subArea.nittambuwafarmingzone': 'Nittambuwa Farming Zone',
        'subArea.veyangodaagriculturalarea': 'Veyangoda Agricultural Area',
        'subArea.mirigamavegetablezone': 'Mirigama Vegetable Zone',
        'subArea.wattalaagriculturalzone': 'Wattala Agricultural Zone',
        'subArea.jaelafarmingarea': 'Ja-Ela Farming Area',
        'subArea.seeduwavegetablezone': 'Seeduwa Vegetable Zone',
        'subArea.katunayakeagriculturalarea': 'Katunayake Agricultural Area',
        'subArea.divulapityafarmingzone': 'Divulapitiya Farming Zone',
        'subArea.minuwangodaagriculturalzone': 'Minuwangoda Agricultural Zone',
        'subArea.biyagamafarmingarea': 'Biyagama Farming Area',
        'subArea.dompeagriculturalzone': 'Dompe Agricultural Zone',
        // Sub-Area Full Name Translations - Kalutara
        'subArea.kalutaracoconutplantations': 'Kalutara Coconut Plantations',
        'subArea.beruwalaspicegardens': 'Beruwala Spice Gardens',
        'subArea.alutgamaagriculturalzone': 'Alutgama Agricultural Zone',
        'subArea.wadduwafarmingarea': 'Wadduwa Farming Area',
        'subArea.matugamaagriculturalzone': 'Matugama Agricultural Zone',
        'subArea.horanafarmingzone': 'Horana Farming Zone',
        'subArea.bandaragamaagriculturalarea': 'Bandaragama Agricultural Area',
        'subArea.millaniyafarmingzone': 'Millaniya Farming Zone',
        'subArea.bulathsinhalaagriculturalzone': 'Bulathsinhala Agricultural Zone',
        'subArea.agalawattafarmingarea': 'Agalawatta Farming Area',
        'subArea.palindanuwaraagriculturalzone': 'Palindanuwara Agricultural Zone',
        'subArea.dodangodafarmingzone': 'Dodangoda Farming Zone',
        // Sub-Area Full Name Translations - Negombo
        'subArea.negombovegetablefarming': 'Negombo Vegetable Farming',
        'subArea.katanapaddyfields': 'Katana Paddy Fields',
        'subArea.kochchikadeagriculturalzone': 'Kochchikade Agricultural Zone',
        'subArea.dankotuwafarmingzone': 'Dankotuwa Farming Zone',
        'subArea.mahaoyaagriculturalarea': 'Maha Oya Agricultural Area',
        'subArea.waikkalfarmingzone': 'Waikkal Farming Zone',
        'subArea.kandanaagriculturalzone': 'Kandana Agricultural Zone',
        'subArea.ragamafarmingarea': 'Ragama Farming Area',
        // Sub-Area Full Name Translations - Moratuwa
        'subArea.moratuwavegetablezone': 'Moratuwa Vegetable Zone',
        'subArea.koralawellafarmingarea': 'Koralawella Farming Area',
        'subArea.lunawaagriculturalzone': 'Lunawa Agricultural Zone',
        'subArea.rawatawattafarmingarea': 'Rawatawatta Farming Area',
        'subArea.egodauyanaagriculturalzone': 'Egoda Uyana Agricultural Zone',
        // Sub-Area Full Name Translations - Panadura
        'subArea.panaduraagriculturalzone': 'Panadura Agricultural Zone',
        'subArea.wadduwafarmingarea': 'Wadduwa Farming Area',
        'subArea.pinwattavegetablezone': 'Pinwatta Vegetable Zone',
        'subArea.koralawellaagriculturalarea': 'Koralawella Agricultural Area',
        'subArea.katukurundafarmingzone': 'Katukurunda Farming Zone',
        // Sub-Area Full Name Translations - Kandy
        'subArea.peradeniyabotanicalgardens': 'Peradeniya Botanical Gardens',
        'subArea.kandyvegetablefarmingzone': 'Kandy Vegetable Farming Zone',
        'subArea.katugastotaagriculturalarea': 'Katugastota Agricultural Area',
        'subArea.udapussellawateaplantations': 'Udapussellawa Tea Plantations',
        'subArea.mahaiyawafarmingzone': 'Mahaiyawa Farming Zone',
        'subArea.akuranaagriculturalzone': 'Akurana Agricultural Zone',
        'subArea.pilimatalawafarmingarea': 'Pilimatalawa Farming Area',
        'subArea.kundasalevegetablezone': 'Kundasale Vegetable Zone',
        'subArea.wattegamaagriculturalarea': 'Wattegama Agricultural Area',
        'subArea.teldeniyafarmingzone': 'Teldeniya Farming Zone',
        'subArea.harispattuwaagriculturalzone': 'Harispattuwa Agricultural Zone',
        'subArea.yatinuwarafarmingarea': 'Yatinuwara Farming Area',
        // Sub-Area Full Name Translations - Nuwara Eliya
        'subArea.nuwareliyavegetablezone': 'Nuwara Eliya Vegetable Zone',
        'subArea.hakgalabotanicalgardens': 'Hakgala Botanical Gardens',
        'subArea.pedroteaestate': 'Pedro Tea Estate',
        'subArea.labookellieteamplantation': 'Labookellie Tea Plantation',
        'subArea.rambodateaplantations': 'Ramboda Tea Plantations',
        'subArea.kandapolafarmingzone': 'Kandapola Farming Zone',
        'subArea.moonplainsagriculturalarea': 'Moon Plains Agricultural Area',
        'subArea.seethaeliyavegetablezone': 'Seetha Eliya Vegetable Zone',
        'subArea.ginigathhenaagriculturalzone': 'Ginigathhena Agricultural Zone',
        'subArea.nanuoyafarmingarea': 'Nanu Oya Farming Area',
        // Sub-Area Full Name Translations - Matale
        'subArea.matalespicegardens': 'Matale Spice Gardens',
        'subArea.aluvihareagriculturalzone': 'Aluvihare Agricultural Zone',
        'subArea.rattotavegetablefarming': 'Rattota Vegetable Farming',
        'subArea.palapathwelapaddyfields': 'Palapathwela Paddy Fields',
        'subArea.ukuwelafarmingzone': 'Ukuwela Farming Zone',
        'subArea.dambullaagriculturalarea': 'Dambulla Agricultural Area',
        'subArea.naulafarmingzone': 'Naula Farming Zone',
        'subArea.laggalagriculturalzone': 'Laggala Agricultural Zone',
        'subArea.wilgamuwafarmingarea': 'Wilgamuwa Farming Area',
        'subArea.pallepolaagriculturalzone': 'Pallepola Agricultural Zone',
        // Sub-Area Full Name Translations - Hatton
        'subArea.hattontteaplantations': 'Hatton Tea Plantations',
        'subArea.dickoyateaestate': 'Dickoya Tea Estate',
        'subArea.nanuoyavegetablezone': 'Nanuoya Vegetable Zone',
        'subArea.norwoodteaestate': 'Norwood Tea Estate',
        'subArea.radellaagriculturalzone': 'Radella Agricultural Zone',
        'subArea.kotagalafarmingarea': 'Kotagala Farming Area',
        'subArea.maskeliyateaplantations': 'Maskeliya Tea Plantations',
        'subArea.upcotagriculturalzone': 'Upcot Agricultural Zone',
        // Sub-Area Full Name Translations - Gampola
        'subArea.gampolateaplantations': 'Gampola Tea Plantations',
        'subArea.udapussellawateaestate': 'Udapussellawa Tea Estate',
        'subArea.nawalapitiyaagriculturalzone': 'Nawalapitiya Agricultural Zone',
        'subArea.hewahetafarmingzone': 'Hewaheta Farming Zone',
        'subArea.yatinuwaragriculturalarea': 'Yatinuwara Agricultural Area',
        'subArea.harispattuwafarmingzone': 'Harispattuwa Farming Zone',
        'subArea.poojapitiyaagriculturalzone': 'Poojapitiya Agricultural Zone',
        'subArea.doluwafarmingarea': 'Doluwa Farming Area',
        // Sub-Area Full Name Translations - Ratnapura
        'subArea.ratnapuragemminingfarming': 'Ratnapura Gem Mining & Farming',
        'subArea.eheliyagodaagriculturalzone': 'Eheliyagoda Agricultural Zone',
        'subArea.pelmadullafarmingarea': 'Pelmadulla Farming Area',
        'subArea.kuruwitavegetablezone': 'Kuruwita Vegetable Zone',
        'subArea.balangodapaddyfields': 'Balangoda Paddy Fields',
        'subArea.godakawelaagriculturalzone': 'Godakawela Agricultural Zone',
        'subArea.nivithigalafarmingarea': 'Nivithigala Farming Area',
        'subArea.ayagamaagriculturalzone': 'Ayagama Agricultural Zone',
        'subArea.kalawanafarmingzone': 'Kalawana Farming Zone',
        'subArea.kolonnaagriculturalarea': 'Kolonna Agricultural Area',
        'subArea.weligepolafarmingzone': 'Weligepola Farming Zone',
        'subArea.rakwanaagriculturalzone': 'Rakwana Agricultural Zone',
        // Sub-Area Full Name Translations - Kegalle
        'subArea.kegallerubberplantations': 'Kegalle Rubber Plantations',
        'subArea.mawanellaagriculturalzone': 'Mawanella Agricultural Zone',
        'subArea.rambukkanafarmingarea': 'Rambukkana Farming Area',
        'subArea.warakapolavegetablezone': 'Warakapola Vegetable Zone',
        'subArea.galigamuwaagriculturalzone': 'Galigamuwa Agricultural Zone',
        'subArea.aranayakafarmingarea': 'Aranayaka Farming Area',
        'subArea.bulathkohupitiyaagriculturalzone': 'Bulathkohupitiya Agricultural Zone',
        'subArea.deraniyagalafarmingzone': 'Deraniyagala Farming Zone',
        'subArea.ruwanwellaagriculturalarea': 'Ruwanwella Agricultural Area',
        'subArea.yatiyantotafarmingzone': 'Yatiyantota Farming Zone',
        // Sub-Area Full Name Translations - Balangoda
        'subArea.balangodapaddyfields': 'Balangoda Paddy Fields',
        'subArea.kahawattateaplantations': 'Kahawatta Tea Plantations',
        'subArea.opanayakaagriculturalzone': 'Opanayaka Agricultural Zone',
        'subArea.imbulpefarmingzone': 'Imbulpe Farming Zone',
        'subArea.pelmadullaagriculturalarea': 'Pelmadulla Agricultural Area',
        'subArea.suriyakandafarmingzone': 'Suriyakanda Farming Zone',
        'subArea.hidellanaagriculturalzone': 'Hidellana Agricultural Zone',
        'subArea.weligepolafarmingarea': 'Weligepola Farming Area',
        // Sub-Area Full Name Translations - Avissawella
        'subArea.avissawellarubberplantations': 'Avissawella Rubber Plantations',
        'subArea.yatiyantotafarmingzone': 'Yatiyantota Farming Zone',
        'subArea.kitulgalaagriculturalarea': 'Kitulgala Agricultural Area',
        'subArea.ruwanwellafarmingzone': 'Ruwanwella Farming Zone',
        'subArea.deraniyagalaagriculturalzone': 'Deraniyagala Agricultural Zone',
        'subArea.nawalapityafarmingarea': 'Nawalapitiya Farming Area',
        'subArea.glencourseagriculturalzone': 'Glencourse Agricultural Zone',
        'subArea.kosgamafarmingarea': 'Kosgama Farming Area',
        // Sub-Area Full Name Translations - Galle
        'subArea.gallecoconutplantations': 'Galle Coconut Plantations',
        'subArea.unawtunaspicegardens': 'Unawatuna Spice Gardens',
        'subArea.hikkaduwaagriculturalzone': 'Hikkaduwa Agricultural Zone',
        'subArea.ambalangodafarmingarea': 'Ambalangoda Farming Area',
        'subArea.dodanduwavegetablezone': 'Dodanduwa Vegetable Zone',
        'subArea.bentotaagriculturalzone': 'Bentota Agricultural Zone',
        'subArea.kosgodafarmingarea': 'Kosgoda Farming Area',
        'subArea.ahangamaagriculturalzone': 'Ahangama Agricultural Zone',
        'subArea.koggalafarmingzone': 'Koggala Farming Zone',
        'subArea.thalpeagriculturalarea': 'Thalpe Agricultural Area',
        'subArea.udugamafarmingzone': 'Udugama Farming Zone',
        'subArea.neluwaagriculturalzone': 'Neluwa Agricultural Zone',
        'subArea.yakkalamullafarmingarea': 'Yakkalamulla Farming Area',
        // Sub-Area Full Name Translations - Matara
        'subArea.mataracoconutplantations': 'Matara Coconut Plantations',
        'subArea.dikwellafarmingzone': 'Dikwella Farming Zone',
        'subArea.hakmanaagriculturalarea': 'Hakmana Agricultural Area',
        'subArea.weligamavegetablezone': 'Weligama Vegetable Zone',
        'subArea.akuressaagriculturalzone': 'Akuressa Agricultural Zone',
        'subArea.kamburupityafarmingarea': 'Kamburupitiya Farming Area',
        'subArea.kotapolaagriculturalzone': 'Kotapola Agricultural Zone',
        'subArea.pitabeddarafarmingzone': 'Pitabeddara Farming Zone',
        'subArea.deniyayaagriculturalarea': 'Deniyaya Agricultural Area',
        'subArea.morawakafarmingzone': 'Morawaka Farming Zone',
        'subArea.kotawilaagriculturalzone': 'Kotawila Agricultural Zone',
        'subArea.devinuwarafarmingarea': 'Devinuwara Farming Area',
        // Sub-Area Full Name Translations - Hambantota
        'subArea.hambantotaagriculturalzone': 'Hambantota Agricultural Zone',
        'subArea.tissamaharampaddyfields': 'Tissamaharama Paddy Fields',
        'subArea.kataragamafarmingarea': 'Kataragama Farming Area',
        'subArea.kirindaagriculturalzone': 'Kirinda Agricultural Zone',
        'subArea.weerawilafarmingzone': 'Weerawila Farming Zone',
        'subArea.lunugamweheraagriculturalarea': 'Lunugamwehera Agricultural Area',
        'subArea.sooriyawewafarmingzone': 'Sooriyawewa Farming Zone',
        'subArea.angunakolapelessaagriculturalzone': 'Angunakolapelessa Agricultural Zone',
        'subArea.beliattafarmingarea': 'Beliatta Farming Area',
        'subArea.walasmullaagriculturalzone': 'Walasmulla Agricultural Zone',
        'subArea.katuwanafarmingzone': 'Katuwana Farming Zone',
        // Sub-Area Full Name Translations - Weligama
        'subArea.weligamacoconutplantations': 'Weligama Coconut Plantations',
        'subArea.mirissaspicegardens': 'Mirissa Spice Gardens',
        'subArea.polhenaagriculturalzone': 'Polhena Agricultural Zone',
        'subArea.koggalafarmingarea': 'Koggala Farming Area',
        'subArea.ahangamaagriculturalzone': 'Ahangama Agricultural Zone',
        'subArea.kataluwafarmingzone': 'Kataluwa Farming Zone',
        // Sub-Area Full Name Translations - Tangalle
        'subArea.tangalleagriculturalzone': 'Tangalle Agricultural Zone',
        'subArea.rekawafarmingarea': 'Rekawa Farming Area',
        'subArea.medillavegetablezone': 'Medilla Vegetable Zone',
        'subArea.beliattaagriculturalzone': 'Beliatta Agricultural Zone',
        'subArea.walasmullafarmingarea': 'Walasmulla Farming Area',
        'subArea.katuwanafarmingzone': 'Katuwana Farming Zone',
        'subArea.nakulugamuwaagriculturalzone': 'Nakulugamuwa Agricultural Zone',
        // Sub-Area Full Name Translations - Badulla
        'subArea.badullavegetablefarming': 'Badulla Vegetable Farming',
        'subArea.passarateaplantations': 'Passara Tea Plantations',
        'subArea.mahiyanganayaagriculturalzone': 'Mahiyanganaya Agricultural Zone',
        'subArea.welimadafarmingarea': 'Welimada Farming Area',
        'subArea.haputaleteaestate': 'Haputale Tea Estate',
        'subArea.ellaagriculturalzone': 'Ella Agricultural Zone',
        'subArea.diyatalawafarmingarea': 'Diyatalawa Farming Area',
        'subArea.halielaagriculturalzone': 'Hali-Ela Agricultural Zone',
        'subArea.meegahakivulafarmingzone': 'Meegahakivula Farming Zone',
        'subArea.kandaketiyaagriculturalarea': 'Kandaketiya Agricultural Area',
        'subArea.lunugalafarmingzone': 'Lunugala Farming Zone',
        'subArea.soranathotaagriculturalzone': 'Soranathota Agricultural Zone',
        // Sub-Area Full Name Translations - Monaragala
        'subArea.monaragalaagriculturalzone': 'Monaragala Agricultural Zone',
        'subArea.bibilefarmingarea': 'Bibile Farming Area',
        'subArea.wellawayapaddyfields': 'Wellawaya Paddy Fields',
        'subArea.siyambalanduwaagriculturalzone': 'Siyambalanduwa Agricultural Zone',
        'subArea.madullafarmingarea': 'Madulla Farming Area',
        'subArea.thanamalwilaagriculturalzone': 'Thanamalwila Agricultural Zone',
        'subArea.kataragamafarmingzone': 'Kataragama Farming Zone',
        'subArea.buttalaagriculturalarea': 'Buttala Agricultural Area',
        'subArea.medagamafarmingzone': 'Medagama Farming Zone',
        'subArea.sevanagalaagriculturalzone': 'Sevanagala Agricultural Zone',
        // Sub-Area Full Name Translations - Bandarawela
        'subArea.bandarawelavegetablezone': 'Bandarawela Vegetable Zone',
        'subArea.ellateaplantations': 'Ella Tea Plantations',
        'subArea.diyatalawaagriculturalarea': 'Diyatalawa Agricultural Area',
        'subArea.koslandafarmingzone': 'Koslanda Farming Zone',
        'subArea.haputaleagriculturalzone': 'Haputale Agricultural Zone',
        'subArea.beragalafarmingarea': 'Beragala Farming Area',
        'subArea.poonagalaagriculturalzone': 'Poonagala Agricultural Zone',
        'subArea.demodarafarmingzone': 'Demodara Farming Zone',
        // Sub-Area Full Name Translations - Haputale
        'subArea.haputaleteaplantations': 'Haputale Tea Plantations',
        'subArea.liptonsseatteaestate': 'Lipton\'s Seat Tea Estate',
        'subArea.dambatenneteagarden': 'Dambatenne Tea Garden',
        'subArea.idalgashinnaagriculturalzone': 'Idalgashinna Agricultural Zone',
        'subArea.beragalafarmingarea': 'Beragala Farming Area',
        'subArea.poonagalaagriculturalzone': 'Poonagala Agricultural Zone',
        'subArea.koslandafarmingzone': 'Koslanda Farming Zone',
        'subArea.thangamaleagriculturalarea': 'Thangamale Agricultural Area',
        // Sub-Area Full Name Translations - Batticaloa
        'subArea.batticaloapaddyfields': 'Batticaloa Paddy Fields',
        'subArea.kalkudahagriculturalzone': 'Kalkudah Agricultural Zone',
        'subArea.valaichenaifarmingarea': 'Valaichenai Farming Area',
        'subArea.pasikudahvegetablezone': 'Pasikudah Vegetable Zone',
        'subArea.chenkaladyfarmingzone': 'Chenkalady Farming Zone',
        'subArea.kiranagriculturalarea': 'Kiran Agricultural Area',
        'subArea.vakaraifarmingzone': 'Vakarai Farming Zone',
        'subArea.puliyanthivuagriculturalzone': 'Puliyanthivu Agricultural Zone',
        'subArea.kattankudyfarmingarea': 'Kattankudy Farming Area',
        'subArea.eravuraagriculturalzone': 'Eravur Agricultural Zone',
        // Sub-Area Full Name Translations - Trincomalee
        'subArea.trincomaleeagriculturalzone': 'Trincomalee Agricultural Zone',
        'subArea.nilavelifarmingarea': 'Nilaveli Farming Area',
        'subArea.uppuvelivegetablezone': 'Uppuveli Vegetable Zone',
        'subArea.koneswaramagriculturalarea': 'Koneswaram Agricultural Area',
        'subArea.kuchchavelifarmingzone': 'Kuchchaveli Farming Zone',
        'subArea.kantalaiagriculturalarea': 'Kantalai Agricultural Area',
        'subArea.gomarankadawalafarmingzone': 'Gomarankadawala Farming Zone',
        'subArea.morawewaagriculturalzone': 'Morawewa Agricultural Zone',
        'subArea.seruwilafarmingarea': 'Seruwila Farming Area',
        'subArea.kinniyaagriculturalzone': 'Kinniya Agricultural Zone',
        // Sub-Area Full Name Translations - Ampara
        'subArea.amparapaddyfields': 'Ampara Paddy Fields',
        'subArea.samanthuraiaagriculturalzone': 'Samanthurai Agricultural Zone',
        'subArea.akkaraipattufarmingarea': 'Akkaraipattu Farming Area',
        'subArea.pottuvilagriculturalzone': 'Pottuvil Agricultural Zone',
        'subArea.lahugalafarmingarea': 'Lahugala Farming Area',
        'subArea.uhanaagriculturalzone': 'Uhana Agricultural Zone',
        'subArea.damanafarmingzone': 'Damana Farming Zone',
        'subArea.mahaoyaagriculturalarea': 'Maha Oya Agricultural Area',
        'subArea.navithanvelifarmingzone': 'Navithanveli Farming Zone',
        'subArea.irakkamamagriculturalzone': 'Irakkamam Agricultural Zone',
        // Sub-Area Full Name Translations - Kalmunai
        'subArea.kalmunaiagriculturalzone': 'Kalmunai Agricultural Zone',
        'subArea.karaitivufarmingarea': 'Karaitivu Farming Area',
        'subArea.sainthamaruthuvegetablezone': 'Sainthamaruthu Vegetable Zone',
        'subArea.ninthavurfarmingzone': 'Ninthavur Farming Zone',
        'subArea.addalaichenaiagriculturalarea': 'Addalaichenai Agricultural Area',
        'subArea.alayadivembufarmingzone': 'Alayadi Vembu Farming Zone',
        'subArea.maruthamunaiagriculturalzone': 'Maruthamunai Agricultural Zone',
        'subArea.periyaneelavanafarmingarea': 'Periyaneelavanai Farming Area',
        // Sub-Area Full Name Translations - Jaffna
        'subArea.jaffnavegetablefarming': 'Jaffna Vegetable Farming',
        'subArea.nalluraagriculturalzone': 'Nallur Agricultural Zone',
        'subArea.chavakachcherifarmingarea': 'Chavakachcheri Farming Area',
        'subArea.pointpedroagriculturalzone': 'Point Pedro Agricultural Zone',
        'subArea.kankesanthuraivegetablezone': 'Kankesanthurai Vegetable Zone',
        'subArea.vaddukodaifarmingzone': 'Vaddukoddai Farming Zone',
        'subArea.tellippalaiagriculturalarea': 'Tellippalai Agricultural Area',
        'subArea.uduvilfarmingzone': 'Uduvil Farming Zone',
        'subArea.kopayagriculturalzone': 'Kopay Agricultural Zone',
        'subArea.maruthankernyfarmingarea': 'Maruthankerny Farming Area',
        'subArea.karainagaragriculturalzone': 'Karainagar Agricultural Zone',
        'subArea.kaytsfarmingzone': 'Kayts Farming Zone',
        // Sub-Area Full Name Translations - Vavuniya
        'subArea.vavuniyaagriculturalzone': 'Vavuniya Agricultural Zone',
        'subArea.omanthaifarmingarea': 'Omanthai Farming Area',
        'subArea.medawachchiyapaddyfields': 'Medawachchiya Paddy Fields',
        'subArea.cheddikulamfarmingzone': 'Cheddikulam Farming Zone',
        'subArea.nedunkeniagriculturalarea': 'Nedunkeni Agricultural Area',
        'subArea.puliyankulamfarmingzone': 'Puliyankulam Farming Zone',
        'subArea.poovarasankulamagriculturalzone': 'Poovarasankulam Agricultural Zone',
        // Sub-Area Full Name Translations - Kilinochchi
        'subArea.kilinochchiagriculturalzone': 'Kilinochchi Agricultural Zone',
        'subArea.paranthanfarmingarea': 'Paranthan Farming Area',
        'subArea.pallaivegetablezone': 'Pallai Vegetable Zone',
        'subArea.poonakaryfarmingzone': 'Poonakary Farming Zone',
        'subArea.iranamaduagriculturalarea': 'Iranamadu Agricultural Area',
        'subArea.kandawalaifarmingzone': 'Kandawalai Farming Zone',
        'subArea.akkarayankulamagriculturalzone': 'Akkarayankulam Agricultural Zone',
        // Sub-Area Full Name Translations - Mullaitivu
        'subArea.mullaitivuagriculturalzone': 'Mullaitivu Agricultural Zone',
        'subArea.puthukkudiyiruppufarmingarea': 'Puthukkudiyiruppu Farming Area',
        'subArea.oddusuddanvegetablezone': 'Oddusuddan Vegetable Zone',
        'subArea.kokkilai farmingzone': 'Kokkilai Farming Zone',
        'subArea.alampilagriculturalarea': 'Alampil Agricultural Area',
        'subArea.thunukkaifarmingzone': 'Thunukkai Farming Zone',
        'subArea.mulliyawalaiagriculturalzone': 'Mulliyawalai Agricultural Zone',
        // Sub-Area Full Name Translations - Kurunegala (Additional)
        'subArea.kurunegalapaddyfields': 'Kurunegala Paddy Fields',
        'subArea.mawathagamaagriculturalzone': 'Mawathagama Agricultural Zone',
        'subArea.ibbagamuwafarmingarea': 'Ibbagamuwa Farming Area',
        'subArea.kuliyapitiyavegetablezone': 'Kuliyapitiya Vegetable Zone',
        'subArea.nikaweratiyaagriculturalarea': 'Nikaweratiya Agricultural Area',
        'subArea.panduwasnuwarafarmingzone': 'Panduwasnuwara Farming Zone',
        'subArea.rideegamaagriculturalarea': 'Rideegama Agricultural Area',
        'subArea.giriullafarmingzone': 'Giriulla Farming Zone',
        'subArea.dambadeniyaagriculturalzone': 'Dambadeniya Agricultural Zone',
        'subArea.bingiriyafarmingarea': 'Bingiriya Farming Area',
        'subArea.wariyapolaagriculturalzone': 'Wariyapola Agricultural Zone',
        'subArea.ganewattafarmingzone': 'Ganewatta Farming Zone',
        // Sub-Area Full Name Translations - Puttalam (Additional)
        'subArea.puttalamcoconutplantations': 'Puttalam Coconut Plantations',
        'subArea.chilawagriculturalzone': 'Chilaw Agricultural Zone',
        'subArea.wennappuwafarmingarea': 'Wennappuwa Farming Area',
        'subArea.anamaduwagriculturalzone': 'Anamaduwa Agricultural Zone',
        'subArea.nattandiyafarmingarea': 'Nattandiya Farming Area',
        'subArea.dankotuwagriculturalzone': 'Dankotuwa Agricultural Zone',
        'subArea.mundalamafarmingzone': 'Mundalama Farming Zone',
        'subArea.madampeagriculturalarea': 'Madampe Agricultural Area',
        'subArea.nawagattegamafarmingzone': 'Nawagattegama Farming Zone',
        // Sub-Area Full Name Translations - Chilaw (Additional)
        'subArea.chilawcoconutplantations': 'Chilaw Coconut Plantations',
        'subArea.mundalamaagriculturalzone': 'Mundalama Agricultural Zone',
        'subArea.madampafarmingarea': 'Madampe Farming Area',
        'subArea.nattandiyagriculturalzone': 'Nattandiya Agricultural Zone',
        'subArea.wennappuwafarmingarea': 'Wennappuwa Farming Area',
        'subArea.dankotuwaagriculturalzone': 'Dankotuwa Agricultural Zone',
        'subArea.marawilafarmingzone': 'Marawila Farming Zone',
        // Sub-Area Full Name Translations - Kuliyapitiya (Additional)
        'subArea.kuliyapitiyagriculturalzone': 'Kuliyapitiya Agricultural Zone',
        'subArea.bingiriyfarmingarea': 'Bingiriya Farming Area',
        'subArea.wariyapolavegetablezone': 'Wariyapola Vegetable Zone',
        'subArea.panduwasnuwarfarmingzone': 'Panduwasnuwara Farming Zone',
        'subArea.rideegamagriculturalarea': 'Rideegama Agricultural Area',
        'subArea.giriullfarmingzone': 'Giriulla Farming Zone',
        'subArea.dambadeniyagriculturalzone': 'Dambadeniya Agricultural Zone',
        'subArea.ganewattfarmingarea': 'Ganewatta Farming Area',
        // Sub-Area Full Name Translations - Narammala (Additional)
        'subArea.narammalagriculturalzone': 'Narammala Agricultural Zone',
        'subArea.polgahawelafarmingarea': 'Polgahawela Farming Area',
        'subArea.alawwavegetablezone': 'Alawwa Vegetable Zone',
        'subArea.giriullaagriculturalzone': 'Giriulla Agricultural Zone',
        'subArea.dambadeniyafarmingzone': 'Dambadeniya Farming Zone',
        'subArea.ganewattagriculturalarea': 'Ganewatta Agricultural Area',
        'subArea.melsiripurafarmingzone': 'Melsiripura Farming Zone',
        // Sub-Area Full Name Translations - Medawachchiya (Additional)
        'subArea.medawachchiyagriculturalzone': 'Medawachchiya Agricultural Zone',
        'subArea.mannarroadfarmingarea': 'Mannar Road Farming Area',
        'subArea.cheddikulamfarmingzone': 'Cheddikulam Farming Zone',
        'subArea.puliyankulamagriculturalarea': 'Puliyankulam Agricultural Area',
        'subArea.poovarasankulamfarmingzone': 'Poovarasankulam Farming Zone',
        // Sub-Area Full Name Translations - Habarana (Additional)
        'subArea.habaranapaddyfields': 'Habarana Paddy Fields',
        'subArea.minneriyagriculturalzone': 'Minneriya Agricultural Zone',
        'subArea.kaudullfarmingarea': 'Kaudulla Farming Area',
        'subArea.giritalagriculturalzone': 'Giritale Agricultural Zone',
        'subArea.sungawilfarmingzone': 'Sungawila Farming Zone',
        'subArea.welikandaagriculturalarea': 'Welikanda Agricultural Area',
        'subArea.medirigiriyfarmingzone': 'Medirigiriya Farming Zone',
        // Sub-Area Full Name Translations - Eppawala (Additional)
        'subArea.eppawalagriculturalzone': 'Eppawala Agricultural Zone',
        'subArea.eppawalaphosphatefarmingarea': 'Eppawala Phosphate Farming Area',
        'subArea.kalawewagriculturalzone': 'Kalawewa Agricultural Zone',
        'subArea.nachchaduwfarmingarea': 'Nachchaduwa Farming Area',
        'subArea.thambuttegamagriculturalzone': 'Thambuttegama Agricultural Zone',
        // Sub-Area Full Name Translations - Galenbindunuwewa (Additional)
        'subArea.galenbindunuwewagriculturalzone': 'Galenbindunuwewa Agricultural Zone',
        'subArea.padaviyfarmingarea': 'Padaviya Farming Area',
        'subArea.kawudullagriculturalzone': 'Kawudulla Agricultural Zone',
        'subArea.kebithigollawfarmingarea': 'Kebithigollawa Farming Area',
        'subArea.kalawewfarmingzone': 'Kalawewa Farming Zone',
        // Sub-Area Full Name Translations - Galnewa (Additional)
        'subArea.galnewagriculturalzone': 'Galnewa Agricultural Zone',
        'subArea.thirappanefarmingarea': 'Thirappane Farming Area',
        'subArea.kalawewaagriculturalzone': 'Kalawewa Agricultural Zone',
        'subArea.nachchaduwafarmingarea': 'Nachchaduwa Farming Area',
        'subArea.sembukuttuwagriculturalzone': 'Sembukuttuwa Agricultural Zone',
        // Sub-Area Full Name Translations - Horowupotana (Additional)
        'subArea.horowupotanagriculturalzone': 'Horowupotana Agricultural Zone',
        'subArea.kebithigollawafarmingarea': 'Kebithigollawa Farming Area',
        'subArea.padaviyagriculturalzone': 'Padaviya Agricultural Zone',
        'subArea.kawudullfarmingzone': 'Kawudulla Farming Zone',
        'subArea.kalawewaagriculturalarea': 'Kalawewa Agricultural Area',
        // Sub-Area Full Name Translations - Kahatagasdigiliya (Additional)
        'subArea.kahatagasdigiliyagriculturalzone': 'Kahatagasdigiliya Agricultural Zone',
        'subArea.giribawafarmingarea': 'Giribawa Farming Area',
        'subArea.kebithigollawaagriculturalzone': 'Kebithigollawa Agricultural Zone',
        'subArea.padaviyafarmingarea': 'Padaviya Farming Area',
        'subArea.kawudullaagriculturalzone': 'Kawudulla Agricultural Zone',
        // Sub-Area Full Name Translations - Bulnewa (Additional)
        'subArea.bulnewagriculturalzone': 'Bulnewa Agricultural Zone',
        'subArea.thambuttegamfarmingarea': 'Thambuttegama Farming Area',
        'subArea.nochchiyagamagriculturalzone': 'Nochchiyagama Agricultural Zone',
        'subArea.ganewalpolfarmingarea': 'Ganewalpola Farming Area',
        'subArea.kalawewagriculturalzone': 'Kalawewa Agricultural Zone',
        // Sub-Area Full Name Translations - Ganewalpola (Additional)
        'subArea.ganewalpolagriculturalzone': 'Ganewalpola Agricultural Zone',
        'subArea.nochchiyagamfarmingarea': 'Nochchiyagama Farming Area',
        'subArea.thambuttegamaagriculturalzone': 'Thambuttegama Agricultural Zone',
        'subArea.kekirawafarmingarea': 'Kekirawa Farming Area',
        'subArea.palugaswewagriculturalzone': 'Palugaswewa Agricultural Zone',
        'weather.getCurrentLocation': 'Get Current Location',
        'weather.currentLocation': 'Current Location',
        'weather.rainfall': 'Rainfall',
        'weather.condition': 'Condition',
        'weather.weeklyForecast': '7-Day Forecast',
        'weather.climateOutlook': '3-Month Climate Outlook',
        'weather.currentConditions': 'Current Conditions',
        'weather.temperatureLabel': 'Temperature:',
        'weather.humidityLabel': 'Humidity:',
        'weather.windSpeedLabel': 'Wind Speed:',
        'weather.rainfallLabel': 'Rainfall:',
        'weather.conditionLabel': 'Condition:',
        'weather.mainlyClear': 'Mainly clear',
        'weather.partlyCloudy': 'Partly cloudy',
        'weather.overcast': 'Overcast',
        'weather.fog': 'Fog',
        'weather.lightRain': 'Light rain',
        'weather.moderateRain': 'Moderate rain',
        'weather.heavyRain': 'Heavy rain',
        'weather.thunderstorm': 'Thunderstorm',
        'weather.thunderstormHail': 'Thunderstorm with slight hail',
        'weather.slightRainShowers': 'Slight rain showers',
        'weather.clearSky': 'Clear sky',
        'weather.depositingRimeFog': 'Depositing rime fog',
        'weather.lightDrizzle': 'Light drizzle',
        'weather.moderateDrizzle': 'Moderate drizzle',
        'weather.denseDrizzle': 'Dense drizzle',
        'weather.lightFreezingDrizzle': 'Light freezing drizzle',
        'weather.denseFreezingDrizzle': 'Dense freezing drizzle',
        'weather.slightRain': 'Slight rain',
        'weather.freezingRain': 'Freezing rain',
        'weather.rainAndSnow': 'Rain and snow',
        'weather.slightSnowFall': 'Slight snow fall',
        'weather.moderateSnowFall': 'Moderate snow fall',
        'weather.heavySnowFall': 'Heavy snow fall',
        'weather.iceFog': 'Ice fog',
        'weather.snowGrains': 'Snow grains',
        'weather.icePellets': 'Ice pellets',
        'weather.moderateRainShowers': 'Moderate rain showers',
        'weather.violentRainShowers': 'Violent rain showers',
        'weather.slightSnowShowers': 'Slight snow showers',
        'weather.heavySnowShowers': 'Heavy snow showers',
        'weather.snowShowers': 'Snow showers',
        'weather.thunderstormHeavyHail': 'Thunderstorm with heavy hail',
        'weather.dayMon': 'Mon',
        'weather.dayTue': 'Tue',
        'weather.dayWed': 'Wed',
        'weather.dayThu': 'Thu',
        'weather.dayFri': 'Fri',
        'weather.daySat': 'Sat',
        'weather.daySun': 'Sun',
        'weather.loadingAlerts': 'Loading quick weather alerts...',
        'weather.dataUnavailable': 'Weather data unavailable',
        'weather.dataUnavailableRefresh': 'Weather data unavailable - Please refresh',
        'weather.locationAccessRequired': 'Location Access Required',
        'weather.locationAccessMessage': 'To provide accurate weather information for your current location, we need access to your device\'s location.',
        'weather.locationPrivacyMessage': 'Your location data is only used for weather services and is not stored or shared.',
        'weather.allowLocationAccess': 'Allow Location Access',
        'weather.useGPSLocation': 'Use GPS Location',
        
        // Cost Profit
        'costProfit.title': 'Cost-Profit Analysis Tool',
        'costProfit.goHome': 'Go Home',
        'costProfit.calculateCost': 'Calculate Cost',
        'costProfit.addInitialCost': 'Add Initial Cost (Rs.)',
        'costProfit.enterInitialCost': 'Enter initial cost',
        'costProfit.addSubsequentCost': 'Add Subsequent Cost (Rs.)',
        'costProfit.enterSubsequentCost': 'Enter subsequent cost',
        'costProfit.addCost': 'Add Cost',
        'costProfit.subsequentCosts': 'Subsequent Costs:',
        'costProfit.subsequentTotal': 'Subsequent Total:',
        'costProfit.calculateTotalCost': 'Calculate Total Cost',
        'costProfit.resetCosts': 'Reset Costs',
        'costProfit.totalCost': 'Total Cost:',
        'costProfit.calculateRevenue': 'Calculate Revenue',
        'costProfit.enterMarketPrice': 'Enter Current Market Price (Rs./kg)',
        'costProfit.enterMarketPricePlaceholder': 'Enter market price per kg',
        'costProfit.enterHarvest': 'Enter Harvest (kg)',
        'costProfit.enterHarvestPlaceholder': 'Enter harvest weight in kg',
        'costProfit.totalRevenue': 'Total Revenue:',
        'costProfit.profit': 'Profit',
        'costProfit.calculateProfit': 'Calculate Profit',
        'costProfit.takeReport': 'Take a Report',
        'costProfit.history': 'History',
        'costProfit.netProfit': 'Net Profit:',
        'costProfit.profitableBusiness': 'Profitable Business!',
        'costProfit.lossIncurred': 'Loss Incurred',
        'costProfit.clearAllData': 'Clear All Data',
        
        // Analytics
        'analytics.title': 'Future Market Analytics',
        'analytics.goHome': 'Go Home',
        'analytics.dataAtGlance': 'Your Data at a Glance',
        'analytics.dataRecords': 'Data Records',
        'analytics.avgMarketPrice': 'Avg. Market Price',
        'analytics.avgProfit': 'Avg. Profit',
        'analytics.futurePredictions': 'Future Predictions',
        'analytics.unableToGenerate': 'Unable to Generate Predictions',
        'analytics.addMoreData': 'Please add more data through the Cost-Profit Analysis Tool.',
        'analytics.notEnoughData': 'Not enough historical data to make a prediction (at least 3 records required).',
        
        // SMS Alerts
        'sms.title': 'SMS Weather Alerts',
        'sms.heroSubtitle': 'Get daily weather forecasts and plant protection advice on your mobile phone',
        'sms.worksOnAllPhones': 'Works on all phones, even basic button phones',
        'sms.dailyAlerts': 'Daily Alerts',
        'sms.dailyAlertsDesc': 'Receive weather forecasts every day at your preferred time',
        'sms.severeWeatherWarnings': 'Severe Weather Warnings',
        'sms.severeWeatherWarningsDesc': 'Get alerts before heavy rain, storms, or extreme temperatures',
        'sms.plantProtectionTips': 'Plant Protection Tips',
        'sms.plantProtectionTipsDesc': 'Learn how to protect your crops from bad weather',
        'sms.yourActiveSubscriptions': 'Your Active Subscriptions',
        'sms.phone': 'Phone',
        'sms.alertType': 'Alert Type',
        'sms.allAlerts': 'All Alerts',
        'sms.heavyRain': 'Heavy Rain',
        'sms.extremeTemp': 'Extreme Temp',
        'sms.time': 'Time',
        'sms.status': 'Status',
        'sms.inactive': 'Inactive',
        'sms.selectFarmingLocation': 'Select your farming location',
        'sms.chooseAlerts': 'Choose which alerts you want to receive',
        'sms.dailyAlertTime': 'Daily alert time',
        'sms.messageLanguage': 'Message language',
        'sms.examples': 'Examples',
        'sms.subscribeButton': 'Subscribe to SMS Alerts',
        'sms.unsubscribed': 'Unsubscribed',
        'sms.lastAlertSent': 'Last alert sent',
        'sms.noActiveSubscriptions': 'No Active Subscriptions',
        'sms.subscribeAbove': 'Subscribe above to start receiving weather alerts on your phone!',
        'sms.howItWorks': 'How It Works',
        'sms.dailyForecasts': 'Daily Forecasts',
        'sms.dailyForecastsDesc': 'Receive tomorrow\'s weather forecast every day',
        'sms.severeWeatherAlerts': 'Severe Weather Alerts',
        'sms.severeWeatherAlertsDesc': 'Get warnings before heavy rain, storms, or extreme temperatures',
        'sms.plantProtection': 'Plant Protection',
        'sms.plantProtectionDesc': 'Each alert includes advice on how to protect your crops',
        'sms.worksEverywhere': 'Works Everywhere',
        'sms.worksEverywhereDesc': 'SMS works on all phones, even basic button phones without internet',
        'sms.freeService': 'Free Service',
        'sms.freeServiceDesc': 'No charges, completely free for farmers',
        'sms.easyUnsubscribe': 'Easy Unsubscribe',
        'sms.easyUnsubscribeDesc': 'You can unsubscribe at any time',
        'sms.confirmUnsubscribe': 'Are you sure you want to unsubscribe from SMS alerts?',
        'sms.cityLabel': 'City',
        'sms.alertTypesLabel': 'Alert Types',
        'sms.alertTimeLabel': 'Daily Alert Time',
        'sms.languageLabel': 'Language',
        'sms.allWeatherAlerts': 'All Weather Alerts',
        'sms.heavyRainOnly': 'Heavy Rain Only',
        'sms.extremeTempOnly': 'Extreme Temperatures Only',
        'sms.severeWeatherOnly': 'Severe Weather Only (Heavy Rain, Storms)',
        
        // Support
        'support.title': 'Support',
        'support.aboutUs': 'About Us',
        
        // Profile
        'profile.title': 'Profile',
        
        // Settings
        'settings.title': 'Settings',
        'settings.passwordChange': 'Password Change',
        'settings.currentPassword': 'Current Password',
        'settings.newPassword': 'New Password',
        'settings.confirmPassword': 'Confirm New Password',
        'settings.updatePassword': 'Update Password',
        'settings.deleteAccount': 'Delete Account',
        'settings.deleteAccountWarning': 'Warning: This action cannot be undone. All your data, including your profile, cultivations, and plants will be permanently deleted.',
        'settings.confirmDeleteText': 'I understand that this action is permanent and cannot be undone. I want to delete my account.',
        'settings.deleteAccountButton': 'Delete My Account',
        'settings.backToProfile': 'Back to Profile',
        'settings.goodMorning': 'Good Morning',
        'settings.goodAfternoon': 'Good Afternoon',
        'settings.goodEvening': 'Good Evening',
        'settings.goodNight': 'Good Night',
        
        // Greetings (for homepage)
        'greeting.goodMorning': 'Good Morning',
        'greeting.goodAfternoon': 'Good Afternoon',
        'greeting.goodEvening': 'Good Evening',
        'greeting.goodNight': 'Good Night',
        'greeting.user': '(User)',
        
        // Login
        'login.title': 'Log In',
        'login.username': 'Username',
        'login.password': 'Password',
        'login.rememberMe': 'Remember Me',
        'login.forgotPassword': 'Forgot Password?',
        'login.signUpQuestion': "Don't have an account?",
        'login.signUpLink': 'Sign up here',
        'login.backToSelection': 'Back to Login Selection',
        'login.submitButton': 'Log In',
        
        // Login Selector
        'loginSelector.title': 'WeatherGuard Harvest',
        'loginSelector.subtitle': 'Choose your login type',
        'loginSelector.normalUser': 'Normal User',
        'loginSelector.normalUserDesc': 'Access the website features, weather data, analytics, and cost-profit analysis tools.',
        'loginSelector.adminUser': 'Admin User',
        'loginSelector.adminUserDesc': 'Access the admin panel to manage users, view system logs, and configure settings.',
        'loginSelector.backToHome': 'Back to Home',
        'loginSelector.showAdmin': 'Show Admin Login',
        'loginSelector.hideAdmin': 'Hide Admin Login',
        
        // Signup
        'signup.title': 'Create Your Account',
        'signup.createAccount': 'Create Account',
        'signup.step1': 'Step 1: Personal Information',
        'signup.step2': 'Step 2: Account Details',
        'signup.firstName': 'First Name',
        'signup.lastName': 'Last Name',
        'signup.email': 'Email',
        'signup.mobileNumber': 'Mobile Number',
        'signup.dateOfBirth': 'Date of Birth',
        'signup.city': 'City',
        'signup.addressLine1': 'Address Line 1',
        'signup.addressLine2': 'Address Line 2',
        'signup.username': 'Username',
        'signup.password': 'Password',
        'signup.confirmPassword': 'Confirm Password',
        'signup.next': 'Next',
        'signup.previous': 'Previous',
        'signup.finish': 'Finish',
        'signup.nextCultivation': 'Next: Cultivation Details',
        'signup.cultivationDetailsDesc': 'Add information about your cultivation areas and the plants you plan to grow.',
        'signup.addAnotherCultivation': '+ Add Another Cultivation Area',
        'signup.completeRegistration': 'Complete Registration',
        
        // Home/Index
        'home.heroTitle': 'Deliver Sustainable Farming Solutions to Every Life, Every Day',
        'home.heroSubtitle': 'Get real-time weather, crop tips & instant alerts all in one place.',
        'home.checkWeatherNow': 'Check Weather Now',
        'home.joinNow': 'Join Now',
        'home.dashboardTitle': 'Your Farming Dashboard',
        'home.keyFeatures': 'Key Features',
        'home.dashboardSubtitle': 'Welcome back! Check the latest weather updates and explore tools for crop planning.',
        'home.featuresSubtitle': 'Discover how our tools help farmers thrive with real-time weather insights.',
        'home.selectPlantCategory': 'Select Your Plant Category',
        'home.weatherForecast': 'Weather Forecast',
        'home.weatherForecastDesc': 'Access real-time weather data for all cities across Sri Lanka.',
        'home.weatherForecastDescGuest': 'Stay updated on local weather to plan your farming activities smartly.',
        'home.viewWeather': 'View Weather',
        'home.getStarted': 'Get Started',
        'home.smartAnalytics': 'Smart Analytics',
        'home.smartAnalyticsDesc': 'Get insights for crop planning, fertilizer optimization, and yield prediction.',
        'home.joinNowFeature': 'Join Now',
        'home.smsAlerts': 'SMS Alerts',
        'home.smsAlertsDesc': 'Get daily weather alerts and plant protection advice via SMS on your phone. Works on all phones!',
        'home.subscribeNow': 'Subscribe Now',
        'home.plantTracking': 'Plant Tracking',
        'home.plantTrackingDesc': 'Track your crops growth stages and get personalized care recommendations.',
        'home.startTracking': 'Start Tracking',
        'home.noPlants': 'No plants selected in this category.',
        'home.addPlantsToProfile': 'Add plants to your profile',
        'home.quickWeatherCheck': 'Quick Weather Check',
        'home.smsAlertsDescGuest': 'Get SMS updates on market trends, rain alerts, and more directly to your phone.',
        'home.signUp': 'Sign Up',
        'home.farmerFeedback': 'Farmer Feedback: Before and After',
        'home.feedbackBefore': 'Before:',
        'home.feedbackAfter': 'After:',
        'home.feedbackSunilName': 'Sunil Perera - Anuradhapura',
        'home.feedbackKamalName': 'Kamal Wijesinghe - Kekirawa',
        'home.feedbackSunil': '"I struggled to plan planting due to unpredictable weather, often losing crops to sudden rains."',
        'home.feedbackKamal': '"Market price changes caught me off guard, affecting my profits."',
        'home.expertGuidance': 'Expert Agricultural Guidance',
        'home.expertGuidanceDesc': 'Our team of experienced agricultural experts provides personalized guidance to help you maximize your farming success.',
        'home.readyToPlan': 'Ready to Plan Your Next Harvest?',
        'home.readyToPlanDesc': 'Access advanced weather forecasting and agricultural tools to maximize your yield.',
        'home.viewWeatherMap': 'View Weather Map',
        'home.getSupport': 'Get Support',
        'home.joinThousands': 'Join Thousands of Successful Farmers',
        'home.joinThousandsDesc': 'Start your journey towards better farming decisions with WeatherGuard Harvest.',
        'home.createAccount': 'Create Account',
        'home.signIn': 'Sign In',
        
        // Vegetables - Grains & Legumes
        'vegetable.beans': 'Beans',
        'vegetable.blackGram': 'Black Gram',
        'vegetable.chickpeas': 'Chickpeas',
        'vegetable.corn': 'Corn',
        'vegetable.drumstick': 'Drumstick',
        'vegetable.fenugreek': 'Fenugreek',
        'vegetable.greenGram': 'Green Gram',
        'vegetable.yardLongBeans': 'Yard Long Beans',
        'vegetable.lentils': 'Lentils',
        'vegetable.okra': 'Okra',
        'vegetable.soybean': 'Soybean',
        'vegetable.cowpea': 'Cowpea',
        'vegetable.pigeonPea': 'Pigeon Pea',
        'vegetable.limaBeans': 'Lima Beans',
        'vegetable.wingedBeans': 'Winged Beans',
        'vegetable.horseGram': 'Horse Gram',
        'vegetable.rice': 'Rice',
        'vegetable.fingerMillet': 'Finger Millet',
        'vegetable.maize': 'Maize',
        'vegetable.sorghum': 'Sorghum',
        // Vegetables - Fruity Vegetables
        'vegetable.tomato': 'Tomato',
        'vegetable.ashPlantain': 'Ash Plantain',
        'vegetable.breadfruit': 'Breadfruit',
        'vegetable.jackfruit': 'Jackfruit',
        'vegetable.tenderJackfruit': 'Tender Jackfruit',
        'vegetable.capsicum': 'Capsicum',
        'vegetable.greenChilies': 'Green Chilies',
        'vegetable.redChilies': 'Red Chilies',
        'vegetable.bellPepper': 'Bell Pepper',
        'vegetable.brinjal': 'Brinjal (Eggplant)',
        'vegetable.thaiEggplant': 'Thai Eggplant',
        'vegetable.cucumber': 'Cucumber',
        'vegetable.bitterGourd': 'Bitter Gourd',
        'vegetable.snakeGourd': 'Snake Gourd',
        'vegetable.ridgeGourd': 'Ridge Gourd',
        'vegetable.bottleGourd': 'Bottle Gourd',
        'vegetable.ashPumpkin': 'Ash Pumpkin',
        'vegetable.pumpkin': 'Pumpkin',
        'vegetable.watermelon': 'Watermelon',
        'vegetable.muskMelon': 'Musk Melon',
        'vegetable.cantaloupe': 'Cantaloupe',
        // Vegetables - Leafy & Stem Vegetables
        'vegetable.cabbage': 'Cabbage',
        'vegetable.lettuce': 'Lettuce',
        'vegetable.spinach': 'Spinach',
        'vegetable.amaranthLeaves': 'Amaranth Leaves',
        'vegetable.gotukola': 'Gotukola',
        'vegetable.kangkung': 'Kangkung (Water Spinach)',
        'vegetable.agatiLeaves': 'Agati Leaves',
        'vegetable.mint': 'Mint',
        'vegetable.curryLeaves': 'Curry Leaves',
        'vegetable.corianderLeaves': 'Coriander Leaves',
        'vegetable.fenugreekLeaves': 'Fenugreek Leaves',
        'vegetable.mustardGreens': 'Mustard Greens',
        'vegetable.radishLeaves': 'Radish Leaves',
        'vegetable.beetrootLeaves': 'Beetroot Leaves',
        'vegetable.sweetPotatoLeaves': 'Sweet Potato Leaves',
        'vegetable.cassavaLeaves': 'Cassava Leaves',
        'vegetable.pumpkinLeaves': 'Pumpkin Leaves',
        'vegetable.drumstickLeaves': 'Drumstick Leaves',
        'vegetable.moringaLeaves': 'Moringa Leaves',
        'vegetable.rocketLeaves': 'Rocket Leaves',
        'vegetable.basil': 'Basil',
        'vegetable.springOnions': 'Spring Onions',
        'vegetable.leeks': 'Leeks',
        'vegetable.celery': 'Celery',
        'vegetable.chineseCabbage': 'Chinese Cabbage',
        'vegetable.pakChoi': 'Pak Choi',
        'vegetable.bokChoy': 'Bok Choy',
        // Vegetables - Root & Tuberous Vegetables
        'vegetable.potato': 'Potato',
        'vegetable.sweetPotato': 'Sweet Potato',
        'vegetable.cassava': 'Cassava (Manioc)',
        'vegetable.carrot': 'Carrot',
        'vegetable.radish': 'Radish',
        'vegetable.beetroot': 'Beetroot',
        'vegetable.onion': 'Onion',
        'vegetable.garlic': 'Garlic',
        'vegetable.ginger': 'Ginger',
        'vegetable.turmeric': 'Turmeric',
        'vegetable.yam': 'Yam',
        'vegetable.elephantFootYam': 'Elephant Foot Yam',
        'vegetable.taro': 'Taro',
        'vegetable.arrowroot': 'Arrowroot',
        'vegetable.lotusRoots': 'Lotus Roots',
        'vegetable.kohila': 'Kohila',
        'vegetable.chinesePotato': 'Chinese Potato',
        'vegetable.purpleYam': 'Purple Yam',
        'vegetable.waterYam': 'Water Yam',
        'vegetable.greaterYam': 'Greater Yam',
        'vegetable.lesserYam': 'Lesser Yam',
        'vegetable.turnip': 'Turnip',
        'vegetable.parsnip': 'Parsnip',
        'vegetable.daikonRadish': 'Daikon Radish',
        
        // Cities - North Central Province
        'city.anuradhapura': 'Anuradhapura',
        'city.mihintale': 'Mihintale',
        'city.kekirawa': 'Kekirawa',
        'city.medawachchiya': 'Medawachchiya',
        'city.habarana': 'Habarana',
        'city.eppawala': 'Eppawala',
        'city.galenbindunuwewa': 'Galenbindunuwewa',
        'city.galnewa': 'Galnewa',
        'city.horowupotana': 'Horowupotana',
        'city.kahatagasdigiliya': 'Kahatagasdigiliya',
        'city.bulnewa': 'Bulnewa',
        'city.ganewalpola': 'Ganewalpola',
        'city.polonnaruwa': 'Polonnaruwa',
        // Cities - North Western Province
        'city.kurunegala': 'Kurunegala',
        'city.puttalam': 'Puttalam',
        'city.chilaw': 'Chilaw',
        'city.kuliyapitiya': 'Kuliyapitiya',
        'city.narammala': 'Narammala',
        // Cities - Western Province
        'city.colombo': 'Colombo',
        'city.gampaha': 'Gampaha',
        'city.kalutara': 'Kalutara',
        'city.negombo': 'Negombo',
        'city.moratuwa': 'Moratuwa',
        'city.panadura': 'Panadura',
        // Cities - Central Province
        'city.kandy': 'Kandy',
        'city.nuwaraEliya': 'Nuwara Eliya',
        'city.matale': 'Matale',
        'city.hatton': 'Hatton',
        'city.gampola': 'Gampola',
        // Cities - Sabaragamuwa Province
        'city.ratnapura': 'Ratnapura',
        'city.kegalle': 'Kegalle',
        'city.balangoda': 'Balangoda',
        'city.avissawella': 'Avissawella',
        // Cities - Southern Province
        'city.galle': 'Galle',
        'city.matara': 'Matara',
        'city.hambantota': 'Hambantota',
        'city.weligama': 'Weligama',
        'city.tangalle': 'Tangalle',
        // Cities - Uva Province
        'city.badulla': 'Badulla',
        'city.monaragala': 'Monaragala',
        'city.bandarawela': 'Bandarawela',
        'city.haputale': 'Haputale',
        // Cities - Eastern Province
        'city.batticaloa': 'Batticaloa',
        'city.trincomalee': 'Trincomalee',
        'city.ampara': 'Ampara',
        'city.kalmunai': 'Kalmunai',
        // Cities - Northern Province
        'city.jaffna': 'Jaffna',
        'city.vavuniya': 'Vavuniya',
        'city.kilinochchi': 'Kilinochchi',
        'city.mullaitivu': 'Mullaitivu',
        
        // Profile
        'profile.yourProfile': 'Your Profile',
        'profile.username': 'Username',
        'profile.email': 'Email',
        'profile.firstName': 'First Name',
        'profile.lastName': 'Last Name',
        'profile.mobileNumber': 'Mobile Number',
        'profile.dateOfBirth': 'Date of Birth',
        'profile.city': 'City',
        'profile.addressLine1': 'Address Line 1',
        'profile.addressLine2': 'Address Line 2',
        'profile.changePassword': 'Change Password',
        'profile.cultivationAreas': 'Your Cultivation Areas',
        'profile.location': 'Location',
        'profile.surfaceArea': 'Surface Area',
        'profile.initialCosts': 'Initial Costs',
        'profile.seedlings': 'Seedlings',
        'profile.fertilizer': 'Fertilizer',
        'profile.resources': 'Resources',
        'profile.plantsInArea': 'Plants in this area:',
        'profile.noPlantsYet': 'No plants added yet.',
        'profile.addNewPlant': 'Add New Plant',
        'profile.plantName': 'Plant Name',
        'profile.category': 'Category',
        'profile.addPlant': 'Add Plant',
        'profile.noCultivationAreas': 'No cultivation areas added yet. Add your first cultivation area below.',
        'profile.addNewCultivationArea': 'Add New Cultivation Area',
        'profile.areaName': 'Area Name',
        'profile.subArea': 'Sub-Area',
        'profile.surfaceAreaInput': 'Surface Area (square meters or acres)',
        'profile.addCultivationArea': 'Add Cultivation Area',
        'profile.selectCity': 'Select City',
        'profile.selectPlant': 'Select Plant',
        
        // Support
        'support.contactUs': 'Contact us for assistance with your farming needs.',
        'support.name': 'Name',
        'support.email': 'Email',
        'support.message': 'Message',
        'support.sendMessage': 'Send Message',
        'support.phone': 'Phone',
        
        // Weather
        'weather.selectCity': 'Select City',
        'weather.getWeather': 'Get Weather',
        'weather.temperature': 'Temperature',
        'weather.humidity': 'Humidity',
        'weather.windSpeed': 'Wind Speed',
        'weather.pressure': 'Pressure',
        'weather.visibility': 'Visibility',
        'weather.clouds': 'Clouds',
        'weather.description': 'Description',
        'weather.feelsLike': 'Feels Like',
        'weather.hourlyForecast': 'Hourly Forecast',
        'weather.dailyForecast': 'Daily Forecast',
        
        // Cost Profit Analysis
        'costProfit.selectVegetable': 'Select Vegetable',
        'costProfit.searchVegetable': 'Search Vegetable',
        'costProfit.selectedPlants': 'Selected Plants',
        'costProfit.cultivationArea': 'Cultivation Area',
        'costProfit.areaName': 'Area Name',
        'costProfit.city': 'City',
        'costProfit.subArea': 'Sub-Area',
        'costProfit.surfaceArea': 'Surface Area',
        'costProfit.addCultivation': 'Add Cultivation',
        'costProfit.removeCultivation': 'Remove',
        'costProfit.initialCosts': 'Initial Costs',
        'costProfit.seedlingCost': 'Seedling Cost (LKR)',
        'costProfit.fertilizerCost': 'Fertilizer Cost (LKR)',
        'costProfit.resourceCost': 'Resource Cost (LKR)',
        'costProfit.additionalCost': 'Additional Cost',
        'costProfit.costName': 'Cost Name',
        'costProfit.amount': 'Amount (LKR)',
        'costProfit.addCost': 'Add Cost',
        'costProfit.removeCost': 'Remove',
        'costProfit.calculate': 'Calculate',
        'costProfit.totalCost': 'Total Cost',
        'costProfit.expectedProfit': 'Expected Profit',
        'costProfit.profitMargin': 'Profit Margin',
        'costProfit.viewHistory': 'View History',
        'costProfit.history': 'Cost-Profit History',
        'costProfit.date': 'Date',
        'costProfit.vegetable': 'Vegetable',
        'costProfit.totalCostCol': 'Total Cost',
        'costProfit.expectedProfitCol': 'Expected Profit',
        'costProfit.profitMarginCol': 'Profit Margin',
        'costProfit.noHistory': 'No calculation history found.',
        'costProfit.goToAnalysis': 'Go to the analysis page to calculate and save your first record.',
        'costProfit.backToAnalysis': 'Back to Analysis',
        'costProfit.totalRevenueCol': 'Total Revenue (Rs.)',
        'costProfit.marketPriceCol': 'Market Price (Rs./kg)',
        'costProfit.profitCol': 'Profit (Rs.)',
        
        // Analytics
        'analytics.marketPredictions': 'Market Predictions',
        'analytics.cropRecommendations': 'Crop Recommendations',
        'analytics.fertilizerOptimization': 'Fertilizer Optimization',
        'analytics.yieldForecast': 'Yield Forecast',
        
        // SMS Alerts
        'sms.subscribe': 'Subscribe to SMS Alerts',
        'sms.phoneNumber': 'Phone Number',
        'sms.selectCity': 'Select City',
        'sms.subscribeButton': 'Subscribe',
        'sms.yourSubscriptions': 'Your Subscriptions',
        'sms.active': 'Active',
        'sms.inactive': 'Inactive',
        'sms.unsubscribe': 'Unsubscribe',
        'sms.info': 'Information',
        'sms.infoText': 'You will receive daily weather alerts and plant protection advice via SMS. This service works on all phones!',
        
        // About Us
        'about.title': 'About WeatherGuard Harvest',
        'about.subtitle': 'Your dedicated partner in modern agriculture',
        'about.intro': 'Welcome to WeatherGuard Harvest, your dedicated partner in modern agriculture. We understand that maximizing yield and profit depends on precise timing and informed decisions.',
        'about.intro2': 'That\'s why we provide farmers with the essential tools they need to stay ahead:',
        'about.feature1Title': 'Timely Alerts',
        'about.feature1Desc': 'Receive critical weather alerts directly via SMS and on-site notifications to protect your crops.',
        'about.feature2Title': 'Smarter Planning',
        'about.feature2Desc': 'Utilize our advanced Profit Calculation Forecast to project financial outcomes and optimize your planting strategies.',
        'about.feature3Title': 'Growth Insights',
        'about.feature3Desc': 'Keep track of your crops with our Plant Tracking feature and get data-driven improvement suggestions to boost your harvest.',
        'about.missionTitle': 'Our Mission',
        'about.missionText': 'WeatherGuard Harvest is committed to turning unpredictable weather into predictable success, ensuring a healthier crop and a wealthier you.',
        'about.getStarted': 'Get Started',
        'about.joinUs': 'Join Us Today',
        'nav.contactSupport': 'Contact Support',
        
        // 404
        '404.title': '404 - Page Not Found',
        '404.message': 'Sorry, the page you\'re looking for doesn\'t exist.',
        '404.goHome': 'Back to Home'
    },
    si: {
        // Navigation
        'nav.home': 'මුල් පිටුව',
        'nav.weather': 'කාලගුණය',
        'nav.support': 'සහාය',
        'nav.userLogin': 'පරිශීලක පිවිසීම',
        'nav.profile': 'පැතිකඩ',
        'nav.settings': 'සැකසීම්',
        'nav.logout': 'පිටවීම',
        'nav.plantTracking': 'ශාක තොරතුරු',
        'nav.costProfitTool': 'පිරිවැය-ලාභ මෙවලම',
        'nav.futureAnalyse': 'මතු විශ්ලේෂණය',
        'nav.smsAlerts': 'SMS තොරතුරු ලබාදීම',
        'nav.aboutUs': 'අප ගැන',
        'nav.language': 'භාෂාව',
        'nav.english': 'ඉංග්‍රීසි',
        'nav.sinhala': 'සිංහල',
        'nav.tamil': 'දමිළ',
        
        // Footer
        'footer.copyright': '© 2024 WeatherGuard Harvest. සියලුම හිමිකම් ඇවිරිණි.',
        
        // Common
        'common.loading': 'පූරණය වෙමින්…',
        'common.submit': 'ඉදිරිපත් කරන්න',
        'common.cancel': 'අවලංගු කරන්න',
        'common.save': 'සුරකින්න',
        'common.delete': 'මකන්න',
        'common.edit': 'සංස්කරණය',
        'common.close': 'වසන්න',
        'common.back': 'ආපසු',
        'common.next': 'ඊළඟ',
        'common.previous': 'කලින්',
        'common.search': 'සොයන්න',
        'common.filter': 'පෙරහන',
        'common.actions': 'ක්‍රියා',
        'common.add': 'එක් කරන්න',
        
        // Plant Tracking
        'plant.heading': 'ශාක තොරතුරු',
        'plant.subtitle': 'වර්ධන තොරතුරු, ඉතිහාසය සහ රැකවරණ නිර්දේශ',
        'plant.category': 'ශාක කාණ්ඩය',
        'plant.grainsLegumes': 'ධාන්‍ය',
        'plant.fruityVegetables': 'ගෙඩි සහිත එළවලු',
        'plant.leafyStem': 'කොළ සහිත එළවලු',
        'plant.rootTuberous': 'මූල සහ කඳ එළවලු',
        'plant.stage': 'අදියර',
        'plant.plantedDate': 'වැපිරූ දිනය',
        'plant.location': 'ස්ථානය',
        'plant.autoStage': 'ස්වයංක්‍රීය අදියර',
        'plant.refreshWeather': 'කාලගුණය නැවුම් කරන්න',
        'plant.age': 'වයස',
        'plant.nextMilestone': 'ඊළඟ අදියරඅදියර',
        'plant.essentialTasks': 'අත්‍යවශ්‍ය කාර්යයන්',
        'plant.yourTodos': 'ඔබගේ කාර්යයන්',
        'plant.addTask': 'කාර්යයක් එක් කරන්න...',
        'plant.addTaskPlaceholder': 'ඔබ කිරීමට සැලසුම් කරන කාර්යයක් එක් කරන්න…',
        'plant.openTracker': 'විවෘත කරන්න',
        'plant.growthWeather': 'වර්ධනය සහ කාලගුණය',
        'plant.atAGlance': 'ක්ෂණික තොරතුරුතොරතුරු',
        'plant.treatmentsTodos': 'රෝග නිවාරණය සහ කළ යුතු කාර්යයන්',
        'plant.treatmentsNeededNow': 'දැන් අවශ්‍ය රෝග නිවාරණ',
        'plant.history': 'ඉතිහාසය',
        'plant.growthWeatherAnalyzer': 'වර්ධනය සහ කාලගුණ විශ්ලේෂක',
        'plant.stageSeed': 'බීජ',
        'plant.stageSeedling': 'බීජ පැළ',
        'plant.stageSmallPlant': 'කුඩා ශාකය',
        'plant.stageSmallPlantGrown': 'වර්ධනය වූ කුඩා ශාකය',
        'plant.stageGrown': 'වර්ධනය වූ',
        'plant.stageFullyGrown': 'මල් සහිත සම්පූර්ණයෙන් වර්ධනය වූ',
        'plant.maturityCondition': 'සම්පූර්ණත්වය සහ තත්ව තත්වය',
        'plant.days': 'දින',
        'plant.entireHistory': 'සම්පූර්ණ ඉතිහාසය',
        'plant.around': 'ආසන්න',
        'plant.deepWatering': 'ගැඹුරු ජලය',
        'plant.deepWateringDesc': 'සතියකට වරක් මූල ගැඹුරට තෙත් කරන්න.',
        'plant.bloomBooster': 'මල් වර්ධනය',
        'plant.bloomBoosterDesc': 'ඉහළ P & K; අධික නයිට්‍රජන් වළක්වන්න.',
        'plant.treatmentFertilizer': 'පොහොර යෙදීම',
        'plant.treatmentPestControl': 'කෘමි පාලනය',
        'plant.treatmentPruning': 'කප්පාදු කිරීම',
        'plant.treatmentMulching': 'මල්චිං',
        'plant.treatmentWeeding': 'වල් පැලෑටි ඉවත් කිරීම',
        
        // Weather
        'weather.title': 'කාලගුණය',
        'weather.current': 'වර්තමාන කාලගුණය',
        'weather.forecast': 'පුරෝකථනය',
        'weather.province': 'පළාත',
        'weather.allProvinces': 'සියලුම පළාත්',
        'province.northCentral': 'උතුරු මධ්‍යම පළාත',
        'province.northWestern': 'වයඹ පළාත',
        'province.western': 'බස්නාහිර පළාත',
        'province.central': 'මධ්‍යම පළාත',
        'province.sabaragamuwa': 'සබරගමුව පළාත',
        'province.southern': 'දකුණු පළාත',
        'province.uva': 'ඌව පළාත',
        'province.eastern': 'නැගෙනහිර පළාත',
        'province.northern': 'උතුරු පළාත',
        'weather.selectCity': 'නගරය',
        'weather.selectCityOption': 'නගරයක් තෝරන්න',
        'weather.selectCityToViewForecast': 'පුරෝකථනය බැලීමට නගරයක් තෝරන්න',
        'weather.subArea': 'උප ප්‍රදේශය (විකල්ප)',
        'weather.selectSubArea': 'උප ප්‍රදේශයක් තෝරන්න',
        // Sub-Area Full Name Translations - Anuradhapura
        'subArea.thanthirimalefarmingzone': 'තන්තිරිමලේ කෘෂිකාර්මික කලාපය',
        'subArea.rajaratapaddyfields': 'රජරට වී කෙත්',
        'subArea.malwathuoyaagriculturalarea': 'මල්වතු ඕය ගොවිපල ප්‍රදේශය',
        'subArea.kalawewafarmingzone': 'කලා වැව කෘෂිකාර්මික කලාපය',
        'subArea.nachchaduwaagriculturalarea': 'නච්චදුව ගොවිපල ප්‍රදේශය',
        'subArea.tissawewapaddyfields': 'තිස්ස වැව වී කෙත්',
        'subArea.basawakkulamafarmingzone': 'බසවක්කුලම කෘෂිකාර්මික කලාපය',
        'subArea.nuwarawewaagriculturalarea': 'නුවරවැව ගොවිපල ප්‍රදේශය',
        'subArea.sembukuttuwafarmingzone': 'සෙම්බුකුත්තුව කෘෂිකාර්මික කලාපය',
        'subArea.padaviyaagriculturalzone': 'පදවිය ගොවිපල කලාපය',
        'subArea.kawudullafarmingarea': 'කවුඩුල්ල කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.kebithigollawaagriculturalzone': 'කැබිතිගොල්ලාව ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Mihintale
        'subArea.mihintaleagriculturalzone': 'මිහින්තලේ ගොවිපල කලාපය',
        'subArea.kantakafarmingarea': 'කන්තක කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.mihintalepaddyfields': 'මිහින්තලේ වී කෙත්',
        'subArea.rajanganayafarmingzone': 'රජඅඟනාය කෘෂිකාර්මික කලාපය',
        'subArea.kalawewaagriculturalarea': 'කලා වැව ගොවිපල ප්‍රදේශය',
        'subArea.mahakanadarawafarmingzone': 'මහකනදරව කෘෂිකාර්මික කලාපය',
        'subArea.nachchaduwaagriculturalzone': 'නච්චදුව ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Kekirawa
        'subArea.kekirawapaddyfields': 'කැකිරාව වී කෙත්',
        'subArea.palugaswewafarmingzone': 'පලුගස්වැව කෘෂිකාර්මික කලාපය',
        'subArea.thambuttegamaagriculturalarea': 'තම්බුත්තේගම ගොවිපල ප්‍රදේශය',
        'subArea.nochchiyagamafarmingzone': 'නොච්චියාගම කෘෂිකාර්මික කලාපය',
        'subArea.ganewalpolaagriculturalarea': 'ගනේවල්පොල ගොවිපල ප්‍රදේශය',
        'subArea.palugaswewapaddyfields': 'පලුගස්වැව වී කෙත්',
        'subArea.kekirawavegetablezone': 'කැකිරාව එළවළු කලාපය',
        'subArea.thambuttegamafarmingarea': 'තම්බුත්තේගම කෘෂිකාර්මික ප්‍රදේශය',
        // Sub-Area Full Name Translations - Polonnaruwa
        'subArea.parakramasamudraagriculturalzone': 'පරාක්‍රම සමුද්‍ර ගොවිපල කලාපය',
        'subArea.minneriyafarmingarea': 'මින්නේරිය කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.kaudullaagriculturalzone': 'කවුඩුල්ල ගොවිපල කලාපය',
        'subArea.giritalefarmingzone': 'ගිරිතලේ කෘෂිකාර්මික කලාපය',
        'subArea.topawewaagriculturalarea': 'තෝප වැව ගොවිපල ප්‍රදේශය',
        'subArea.elaherafarmingzone': 'ඇලහැර කෘෂිකාර්මික කලාපය',
        'subArea.dimbulagalaagriculturalzone': 'දිඹුලාගල ගොවිපල කලාපය',
        'subArea.sungawilafarmingarea': 'සුංගවිල කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.welikandaagriculturalzone': 'වෙලිකන්ද ගොවිපල කලාපය',
        'subArea.medirigiriyafarmingzone': 'මැදිරිගිරිය කෘෂිකාර්මික කලාපය',
        // Sub-Area Full Name Translations - Colombo
        'subArea.kelaniyavegetablefarmingzone': 'කැලණිය එළවළු ගොවිතැන කලාපය',
        'subArea.attidiyapaddyfields': 'අත්තිඩිය වී කෙත්',
        'subArea.borellaagriculturalarea': 'බෝරැල්ල ගොවිපල ප්‍රදේශය',
        'subArea.kottefarmingzone': 'කෝට්ටේ කෘෂිකාර්මික කලාපය',
        'subArea.kolonnawavegetablezone': 'කොලොන්නාව එළවළු කලාපය',
        'subArea.maharagamaagriculturalarea': 'මහරගම ගොවිපල ප්‍රදේශය',
        'subArea.kaduwelafarmingzone': 'කඩුවෙල කෘෂිකාර්මික කලාපය',
        'subArea.homagamaagriculturalzone': 'හෝමාගම ගොවිපල කලාපය',
        'subArea.piliyandalavegetablefarming': 'පිලියන්දල එළවළු ගොවිතැන',
        'subArea.kesbewaagriculturalarea': 'කැස්බෑව ගොවිපල ප්‍රදේශය',
        'subArea.thalangamafarmingzone': 'තලංගම කෘෂිකාර්මික කලාපය',
        'subArea.athurugiriyaagriculturalzone': 'අතුරුගිරිය ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Gampaha
        'subArea.gampahapaddyfields': 'ගම්පහ වී කෙත්',
        'subArea.nittambuwafarmingzone': 'නිත්තඹුව කෘෂිකාර්මික කලාපය',
        'subArea.veyangodaagriculturalarea': 'වේයන්ගොඩ ගොවිපල ප්‍රදේශය',
        'subArea.mirigamavegetablezone': 'මිරිගම එළවළු කලාපය',
        'subArea.wattalaagriculturalzone': 'වත්තල ගොවිපල කලාපය',
        'subArea.jaelafarmingarea': 'ජා-ඇල කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.seeduwavegetablezone': 'සීදුව එළවළු කලාපය',
        'subArea.katunayakeagriculturalarea': 'කටුනායක ගොවිපල ප්‍රදේශය',
        'subArea.divulapityafarmingzone': 'දිවුලපිටිය කෘෂිකාර්මික කලාපය',
        'subArea.minuwangodaagriculturalzone': 'මිනුවන්ගොඩ ගොවිපල කලාපය',
        'subArea.biyagamafarmingarea': 'බියගම කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.dompeagriculturalzone': 'දොම්පේ ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Kalutara
        'subArea.kalutaracoconutplantations': 'කළුතර පොල් වගාව',
        'subArea.beruwalaspicegardens': 'බේරුවල කුළු බඩු ගෙවතු',
        'subArea.alutgamaagriculturalzone': 'අලුත්ගම ගොවිපල කලාපය',
        'subArea.wadduwafarmingarea': 'වැද්දුව කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.matugamaagriculturalzone': 'මාතුගම ගොවිපල කලාපය',
        'subArea.horanafarmingzone': 'හොරණ කෘෂිකාර්මික කලාපය',
        'subArea.bandaragamaagriculturalarea': 'බණ්ඩාරගම ගොවිපල ප්‍රදේශය',
        'subArea.millaniyafarmingzone': 'මිල්ලානිය කෘෂිකාර්මික කලාපය',
        'subArea.bulathsinhalaagriculturalzone': 'බුලත්සිංහල ගොවිපල කලාපය',
        'subArea.agalawattafarmingarea': 'අගලවත්ත කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.palindanuwaraagriculturalzone': 'පලින්දනුවර ගොවිපල කලාපය',
        'subArea.dodangodafarmingzone': 'දොඩන්ගොඩ කෘෂිකාර්මික කලාපය',
        // Sub-Area Full Name Translations - Negombo
        'subArea.negombovegetablefarming': 'නුගොබෝ එළවළු ගොවිතැන',
        'subArea.katanapaddyfields': 'කටන වී කෙත්',
        'subArea.kochchikadeagriculturalzone': 'කොච්චිකඩේ ගොවිපල කලාපය',
        'subArea.dankotuwafarmingzone': 'දන්කොටුව කෘෂිකාර්මික කලාපය',
        'subArea.mahaoyaagriculturalarea': 'මහ ඕය ගොවිපල ප්‍රදේශය',
        'subArea.waikkalfarmingzone': 'වයික්කල් කෘෂිකාර්මික කලාපය',
        'subArea.kandanaagriculturalzone': 'කඳාන ගොවිපල කලාපය',
        'subArea.ragamafarmingarea': 'රාගම කෘෂිකාර්මික ප්‍රදේශය',
        // Sub-Area Full Name Translations - Moratuwa
        'subArea.moratuwavegetablezone': 'මොරටුව එළවළු කලාපය',
        'subArea.koralawellafarmingarea': 'කොරලවැල්ල කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.lunawaagriculturalzone': 'ලුණුව ගොවිපල කලාපය',
        'subArea.rawatawattafarmingarea': 'රාවතවත්ත කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.egodauyanaagriculturalzone': 'එගොඩඋයන ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Panadura
        'subArea.panaduraagriculturalzone': 'පානදුර ගොවිපල කලාපය',
        'subArea.wadduwafarmingarea': 'වැද්දුව කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.pinwattavegetablezone': 'පින්වත්ත එළවළු කලාපය',
        'subArea.koralawellaagriculturalarea': 'කොරලවැල්ල ගොවිපල ප්‍රදේශය',
        'subArea.katukurundafarmingzone': 'කටුකුරුන්ද කෘෂිකාර්මික කලාපය',
        // Sub-Area Full Name Translations - Kandy
        'subArea.peradeniyabotanicalgardens': 'පේරාදෙණිය වනෝද්‍යානය',
        'subArea.kandyvegetablefarmingzone': 'කැන්දි එළවළු ගොවිතැන කලාපය',
        'subArea.katugastotaagriculturalarea': 'කටුගස්තොට ගොවිපල ප්‍රදේශය',
        'subArea.udapussellawateaplantations': 'උඩපුස්සැල්ලව තේ වගාව',
        'subArea.mahaiyawafarmingzone': 'මහඉයාව කෘෂිකාර්මික කලාපය',
        'subArea.akuranaagriculturalzone': 'අකුරණ ගොවිපල කලාපය',
        'subArea.pilimatalawafarmingarea': 'පිලිමතලාව කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.kundasalevegetablezone': 'කුඳසාලේ එළවළු කලාපය',
        'subArea.wattegamaagriculturalarea': 'වත්තේගම ගොවිපල ප්‍රදේශය',
        'subArea.teldeniyafarmingzone': 'තෙල්දෙණිය කෘෂිකාර්මික කලාපය',
        'subArea.harispattuwaagriculturalzone': 'හරිස්පත්තුව ගොවිපල කලාපය',
        'subArea.yatinuwarafarmingarea': 'යටිනුවර කෘෂිකාර්මික ප්‍රදේශය',
        // Sub-Area Full Name Translations - Nuwara Eliya
        'subArea.nuwareliyavegetablezone': 'නුවරඑළිය එළවළු කලාපය',
        'subArea.hakgalabotanicalgardens': 'හක්ගල වනෝද්‍යානය',
        'subArea.pedroteaestate': 'පෙඩ්‍රෝ තේ වතුයාන',
        'subArea.labookellieteamplantation': 'ලබුකැලියේ තේ වගාව',
        'subArea.rambodateaplantations': 'රම්බෝඩ තේ වගාව',
        'subArea.kandapolafarmingzone': 'කන්දපොළ කෘෂිකාර්මික කලාපය',
        'subArea.moonplainsagriculturalarea': 'මූන් තැනිතලාව ගොවිපල ප්‍රදේශය',
        'subArea.seethaeliyavegetablezone': 'සීතා එළිය එළවළු කලාපය',
        'subArea.ginigathhenaagriculturalzone': 'ගිනිගත්තෙන ගොවිපල කලාපය',
        'subArea.nanuoyafarmingarea': 'නානුඕය කෘෂිකාර්මික ප්‍රදේශය',
        // Sub-Area Full Name Translations - Matale
        'subArea.matalespicegardens': 'මාතලේ කුළු බඩු ගෙවතු',
        'subArea.aluvihareagriculturalzone': 'අලුවිහාරේ ගොවිපල කලාපය',
        'subArea.rattotavegetablefarming': 'රත්තොට එළවළු ගොවිතැන',
        'subArea.palapathwelapaddyfields': 'පලපත්වෙල වී කෙත්',
        'subArea.ukuwelafarmingzone': 'උකුවෙල කෘෂිකාර්මික කලාපය',
        'subArea.dambullaagriculturalarea': 'දඹුල්ල ගොවිපල ප්‍රදේශය',
        'subArea.naulafarmingzone': 'නාවල කෘෂිකාර්මික කලාපය',
        'subArea.laggalagriculturalzone': 'ලග්ගල ගොවිපල කලාපය',
        'subArea.wilgamuwafarmingarea': 'විල්ගමුව කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.pallepolaagriculturalzone': 'පල්ලෙපොළ ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Hatton
        'subArea.hattontteaplantations': 'හැටන් තේ වගාව',
        'subArea.dickoyateaestate': 'ඩික්කෝයා තේ වතුයාන',
        'subArea.nanuoyavegetablezone': 'නානුඕය එළවළු කලාපය',
        'subArea.norwoodteaestate': 'නෝර්වුඩ් තේ වතුයාන',
        'subArea.radellaagriculturalzone': 'රඩෙල්ල ගොවිපල කලාපය',
        'subArea.kotagalafarmingarea': 'කෝටගල කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.maskeliyateaplantations': 'මස්කෙලිය තේ වගාව',
        'subArea.upcotagriculturalzone': 'අප්කෝට් ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Gampola
        'subArea.gampolateaplantations': 'ගම්පොළ තේ වගාව',
        'subArea.udapussellawateaestate': 'උඩපුස්සැල්ලව තේ වතුයාන',
        'subArea.nawalapitiyaagriculturalzone': 'නාවලපිටිය ගොවිපල කලාපය',
        'subArea.hewahetafarmingzone': 'හේවාහෙට කෘෂිකාර්මික කලාපය',
        'subArea.yatinuwaragriculturalarea': 'යටිනුවර ගොවිපල ප්‍රදේශය',
        'subArea.harispattuwafarmingzone': 'හරිස්පත්තුව කෘෂිකාර්මික කලාපය',
        'subArea.poojapitiyaagriculturalzone': 'පූජාපිටිය ගොවිපල කලාපය',
        'subArea.doluwafarmingarea': 'දොළුව කෘෂිකාර්මික ප්‍රදේශය',
        // Sub-Area Full Name Translations - Ratnapura
        'subArea.ratnapuragemminingfarming': 'රත්නපුර ගල් පතල හා ගොවිතැන',
        'subArea.eheliyagodaagriculturalzone': 'ඇහැළියගොඩ ගොවිපල කලාපය',
        'subArea.pelmadullafarmingarea': 'පෙල්මඩුල්ල කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.kuruwitavegetablezone': 'කුරුවිත එළවළු කලාපය',
        'subArea.balangodapaddyfields': 'බලන්ගොඩ වී කෙත්',
        'subArea.godakawelaagriculturalzone': 'ගොඩකාවෙල ගොවිපල කලාපය',
        'subArea.nivithigalafarmingarea': 'නිවිතිගල කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.ayagamaagriculturalzone': 'අයගම ගොවිපල කලාපය',
        'subArea.kalawanafarmingzone': 'කලවාන කෘෂිකාර්මික කලාපය',
        'subArea.kolonnaagriculturalarea': 'කොලොන්න ගොවිපල ප්‍රදේශය',
        'subArea.weligepolafarmingzone': 'වෙලිගෙපොළ කෘෂිකාර්මික කලාපය',
        'subArea.rakwanaagriculturalzone': 'රක්වන ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Kegalle
        'subArea.kegallerubberplantations': 'කෑගල්ල රබර් වගාව',
        'subArea.mawanellaagriculturalzone': 'මාවනැල්ල ගොවිපල කලාපය',
        'subArea.rambukkanafarmingarea': 'රම්බුක්කන කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.warakapolavegetablezone': 'වරකාපොළ එළවළු කලාපය',
        'subArea.galigamuwaagriculturalzone': 'ගලිගමුව ගොවිපල කලාපය',
        'subArea.aranayakafarmingarea': 'ආරනායක කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.bulathkohupitiyaagriculturalzone': 'බුලත්කෝහුපිටිය ගොවිපල කලාපය',
        'subArea.deraniyagalafarmingzone': 'දෙරණියාගල කෘෂිකාර්මික කලාපය',
        'subArea.ruwanwellaagriculturalarea': 'රුවන්වැල්ල ගොවිපල ප්‍රදේශය',
        'subArea.yatiyantotafarmingzone': 'යටියන්තොට කෘෂිකාර්මික කලාපය',
        // Sub-Area Full Name Translations - Balangoda
        'subArea.balangodapaddyfields': 'බලන්ගොඩ වී කෙත්',
        'subArea.kahawattateaplantations': 'කහාවත්ත තේ වගාව',
        'subArea.opanayakaagriculturalzone': 'ඕපනායක ගොවිපල කලාපය',
        'subArea.imbulpefarmingzone': 'ඉම්බුල්පේ කෘෂිකාර්මික කලාපය',
        'subArea.pelmadullaagriculturalarea': 'පෙල්මඩුල්ල ගොවිපල ප්‍රදේශය',
        'subArea.suriyakandafarmingzone': 'සුරියකන්ද කෘෂිකාර්මික කලාපය',
        'subArea.hidellanaagriculturalzone': 'හිදෙල්ලන ගොවිපල කලාපය',
        'subArea.weligepolafarmingarea': 'වෙලිගෙපොළ කෘෂිකාර්මික ප්‍රදේශය',
        // Sub-Area Full Name Translations - Avissawella
        'subArea.avissawellarubberplantations': 'අවිස්සාවෙල්ල රබර් වගාව',
        'subArea.yatiyantotafarmingzone': 'යටියන්තොට කෘෂිකාර්මික කලාපය',
        'subArea.kitulgalaagriculturalarea': 'කිටුල්ගල ගොවිපල ප්‍රදේශය',
        'subArea.ruwanwellafarmingzone': 'රුවන්වැල්ල කෘෂිකාර්මික කලාපය',
        'subArea.deraniyagalaagriculturalzone': 'දෙරණියාගල ගොවිපල කලාපය',
        'subArea.nawalapityafarmingarea': 'නාවලපිටිය කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.glencourseagriculturalzone': 'ග්ලෙන්කෝස් ගොවිපල කලාපය',
        'subArea.kosgamafarmingarea': 'කෝස්ගම කෘෂිකාර්මික ප්‍රදේශය',
        // Sub-Area Full Name Translations - Galle
        'subArea.gallecoconutplantations': 'ගාල්ල පොල් වගාව',
        'subArea.unawtunaspicegardens': 'උණවටුන කුළු බඩු ගෙවතු',
        'subArea.hikkaduwaagriculturalzone': 'හික්කඩුව ගොවිපල කලාපය',
        'subArea.ambalangodafarmingarea': 'අම්බලන්ගොඩ කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.dodanduwavegetablezone': 'දොඩන්දුව එළවළු කලාපය',
        'subArea.bentotaagriculturalzone': 'බෙන්තොට ගොවිපල කලාපය',
        'subArea.kosgodafarmingarea': 'කෝස්ගොඩ කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.ahangamaagriculturalzone': 'අහන්ගම ගොවිපල කලාපය',
        'subArea.koggalafarmingzone': 'කෝග්ගල කෘෂිකාර්මික කලාපය',
        'subArea.thalpeagriculturalarea': 'තල්පේ ගොවිපල ප්‍රදේශය',
        'subArea.udugamafarmingzone': 'උඩුගම කෘෂිකාර්මික කලාපය',
        'subArea.neluwaagriculturalzone': 'නෙලුව ගොවිපල කලාපය',
        'subArea.yakkalamullafarmingarea': 'යක්කලමුල්ල කෘෂිකාර්මික ප්‍රදේශය',
        // Sub-Area Full Name Translations - Matara
        'subArea.mataracoconutplantations': 'මාතර පොල් වගාව',
        'subArea.dikwellafarmingzone': 'දික්වැල්ල කෘෂිකාර්මික කලාපය',
        'subArea.hakmanaagriculturalarea': 'හක්මන ගොවිපල ප්‍රදේශය',
        'subArea.weligamavegetablezone': 'වෙලිගම එළවළු කලාපය',
        'subArea.akuressaagriculturalzone': 'අකුරැස්ස ගොවිපල කලාපය',
        'subArea.kamburupityafarmingarea': 'කඹුරුපිටිය කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.kotapolaagriculturalzone': 'කෝටපොළ ගොවිපල කලාපය',
        'subArea.pitabeddarafarmingzone': 'පිටබැද්දර කෘෂිකාර්මික කලාපය',
        'subArea.deniyayaagriculturalarea': 'දෙණියාය ගොවිපල ප්‍රදේශය',
        'subArea.morawakafarmingzone': 'මොරවක කෘෂිකාර්මික කලාපය',
        'subArea.kotawilaagriculturalzone': 'කෝටවිල ගොවිපල කලාපය',
        'subArea.devinuwarafarmingarea': 'දේවිනුවර කෘෂිකාර්මික ප්‍රදේශය',
        // Sub-Area Full Name Translations - Hambantota
        'subArea.hambantotaagriculturalzone': 'හම්බන්තොට ගොවිපල කලාපය',
        'subArea.tissamaharampaddyfields': 'තිස්සමහාරාම වී කෙත්',
        'subArea.kataragamafarmingarea': 'කතරගම කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.kirindaagriculturalzone': 'කිරින්ද ගොවිපල කලාපය',
        'subArea.weerawilafarmingzone': 'වීරවිල කෘෂිකාර්මික කලාපය',
        'subArea.lunugamweheraagriculturalarea': 'ලුණුගම්වෙහෙර ගොවිපල ප්‍රදේශය',
        'subArea.sooriyawewafarmingzone': 'සූරියවැව කෘෂිකාර්මික කලාපය',
        'subArea.angunakolapelessaagriculturalzone': 'අංගුණකොළපෙලැස්ස ගොවිපල කලාපය',
        'subArea.beliattafarmingarea': 'බෙලියත්ත කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.walasmullaagriculturalzone': 'වලස්මුල්ල ගොවිපල කලාපය',
        'subArea.katuwanafarmingzone': 'කටුවන කෘෂිකාර්මික කලාපය',
        // Sub-Area Full Name Translations - Weligama
        'subArea.weligamacoconutplantations': 'වෙලිගම පොල් වගාව',
        'subArea.mirissaspicegardens': 'මිරිස්ස කුළු බඩු ගෙවතු',
        'subArea.polhenaagriculturalzone': 'පොල්හෙන ගොවිපල කලාපය',
        'subArea.koggalafarmingarea': 'කෝග්ගල කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.ahangamaagriculturalzone': 'අහන්ගම ගොවිපල කලාපය',
        'subArea.kataluwafarmingzone': 'කටලුව කෘෂිකාර්මික කලාපය',
        // Sub-Area Full Name Translations - Tangalle
        'subArea.tangalleagriculturalzone': 'තංගල්ල ගොවිපල කලාපය',
        'subArea.rekawafarmingarea': 'රේකාව කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.medillavegetablezone': 'මෙදිල්ල එළවළු කලාපය',
        'subArea.beliattaagriculturalzone': 'බෙලියත්ත ගොවිපල කලාපය',
        'subArea.walasmullafarmingarea': 'වලස්මුල්ල කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.katuwanafarmingzone': 'කටුවන කෘෂිකාර්මික කලාපය',
        'subArea.nakulugamuwaagriculturalzone': 'නකුළුගමුව ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Badulla
        'subArea.badullavegetablefarming': 'බදුල්ල එළවළු ගොවිතැන',
        'subArea.passarateaplantations': 'පැස්සර තේ වගාව',
        'subArea.mahiyanganayaagriculturalzone': 'මහියංගණය ගොවිපල කලාපය',
        'subArea.welimadafarmingarea': 'වෙලිමඩ කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.haputaleteaestate': 'හපුතලේ තේ වතුයාන',
        'subArea.ellaagriculturalzone': 'ඇල්ල ගොවිපල කලාපය',
        'subArea.diyatalawafarmingarea': 'දියතලාව කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.halielaagriculturalzone': 'හල්ඉ-ඇල ගොවිපල කලාපය',
        'subArea.meegahakivulafarmingzone': 'මීගහකිවුල කෘෂිකාර්මික කලාපය',
        'subArea.kandaketiyaagriculturalarea': 'කන්දකෙටිය ගොවිපල ප්‍රදේශය',
        'subArea.lunugalafarmingzone': 'ලුණුගල කෘෂිකාර්මික කලාපය',
        'subArea.soranathotaagriculturalzone': 'සොරනාතොට ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Monaragala
        'subArea.monaragalaagriculturalzone': 'මොනරාගල ගොවිපල කලාපය',
        'subArea.bibilefarmingarea': 'බිබිලේ කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.wellawayapaddyfields': 'වැල්ලවාය වී කෙත්',
        'subArea.siyambalanduwaagriculturalzone': 'සියඹලන්දුව ගොවිපල කලාපය',
        'subArea.madullafarmingarea': 'මාදුල්ල කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.thanamalwilaagriculturalzone': 'තනමල්විල ගොවිපල කලාපය',
        'subArea.kataragamafarmingzone': 'කතරගම කෘෂිකාර්මික කලාපය',
        'subArea.buttalaagriculturalarea': 'බුත්තල ගොවිපල ප්‍රදේශය',
        'subArea.medagamafarmingzone': 'මැදගම කෘෂිකාර්මික කලාපය',
        'subArea.sevanagalaagriculturalzone': 'සේවනාගල ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Bandarawela
        'subArea.bandarawelavegetablezone': 'බණ්ඩාරවෙල එළවළු කලාපය',
        'subArea.ellateaplantations': 'ඇල්ල තේ වගාව',
        'subArea.diyatalawaagriculturalarea': 'දියතලාව ගොවිපල ප්‍රදේශය',
        'subArea.koslandafarmingzone': 'කෝස්ලන්ද කෘෂිකාර්මික කලාපය',
        'subArea.haputaleagriculturalzone': 'හපුතලේ ගොවිපල කලාපය',
        'subArea.beragalafarmingarea': 'බෙරගල කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.poonagalaagriculturalzone': 'පූනාගල ගොවිපල කලාපය',
        'subArea.demodarafarmingzone': 'දේමෝදර කෘෂිකාර්මික කලාපය',
        // Sub-Area Full Name Translations - Haputale
        'subArea.haputaleteaplantations': 'හපුතලේ තේ වගාව',
        'subArea.liptonsseatteaestate': 'ලිප්ටන්ගේ සීට් තේ වතුයාන',
        'subArea.dambatenneteagarden': 'දඹතැන්නේ තේ වත්ත',
        'subArea.idalgashinnaagriculturalzone': 'ඉඩල්ගශින්න ගොවිපල කලාපය',
        'subArea.beragalafarmingarea': 'බෙරගල කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.poonagalaagriculturalzone': 'පූනාගල ගොවිපල කලාපය',
        'subArea.koslandafarmingzone': 'කෝස්ලන්ද කෘෂිකාර්මික කලාපය',
        'subArea.thangamaleagriculturalarea': 'තංගමලේ ගොවිපල ප්‍රදේශය',
        // Sub-Area Full Name Translations - Batticaloa
        'subArea.batticaloapaddyfields': 'මඩකලපුව වී කෙත්',
        'subArea.kalkudahagriculturalzone': 'කල්කුඩා ගොවිපල කලාපය',
        'subArea.valaichenaifarmingarea': 'වලයිචේනායි කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.pasikudahvegetablezone': 'පසිකුඩා එළවළු කලාපය',
        'subArea.chenkaladyfarmingzone': 'චෙන්කලඩි කෘෂිකාර්මික කලාපය',
        'subArea.kiranagriculturalarea': 'කිරන් ගොවිපල ප්‍රදේශය',
        'subArea.vakaraifarmingzone': 'වකරායි කෘෂිකාර්මික කලාපය',
        'subArea.puliyanthivuagriculturalzone': 'පුලියන්තිවු ගොවිපල කලාපය',
        'subArea.kattankudyfarmingarea': 'කට්ටන්කුඩි කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.eravuraagriculturalzone': 'එරවුර් ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Trincomalee
        'subArea.trincomaleeagriculturalzone': 'ත්‍රිකුණාමලය ගොවිපල කලාපය',
        'subArea.nilavelifarmingarea': 'නිලවැලි කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.uppuvelivegetablezone': 'උප්පුවැලි එළවළු කලාපය',
        'subArea.koneswaramagriculturalarea': 'කෝනේෂ්වරම් ගොවිපල ප්‍රදේශය',
        'subArea.kuchchavelifarmingzone': 'කුච්චවැලි කෘෂිකාර්මික කලාපය',
        'subArea.kantalaiagriculturalarea': 'කන්තලායි ගොවිපල ප්‍රදේශය',
        'subArea.gomarankadawalafarmingzone': 'ගෝමරන්කඩවල කෘෂිකාර්මික කලාපය',
        'subArea.morawewaagriculturalzone': 'මොරවැව ගොවිපල කලාපය',
        'subArea.seruwilafarmingarea': 'සෙරුවිල කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.kinniyaagriculturalzone': 'කින්නියා ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Ampara
        'subArea.amparapaddyfields': 'අම්පාර වී කෙත්',
        'subArea.samanthuraiaagriculturalzone': 'සමන්තුරායි ගොවිපල කලාපය',
        'subArea.akkaraipattufarmingarea': 'අක්කරයිපත්තු කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.pottuvilagriculturalzone': 'පොත්තුවිල් ගොවිපල කලාපය',
        'subArea.lahugalafarmingarea': 'ලාහුගල කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.uhanaagriculturalzone': 'උහාන ගොවිපල කලාපය',
        'subArea.damanafarmingzone': 'දමනා කෘෂිකාර්මික කලාපය',
        'subArea.mahaoyaagriculturalarea': 'මහ ඕය ගොවිපල ප්‍රදේශය',
        'subArea.navithanvelifarmingzone': 'නවිතන්වැලි කෘෂිකාර්මික කලාපය',
        'subArea.irakkamamagriculturalzone': 'ඉරක්කමම් ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Kalmunai
        'subArea.kalmunaiagriculturalzone': 'කල්මුනායි ගොවිපල කලාපය',
        'subArea.karaitivufarmingarea': 'කරයිතිවු කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.sainthamaruthuvegetablezone': 'සයින්තමරුතු එළවළු කලාපය',
        'subArea.ninthavurfarmingzone': 'නින්තවුර් කෘෂිකාර්මික කලාපය',
        'subArea.addalaichenaiagriculturalarea': 'අද්දලයිචේනායි ගොවිපල ප්‍රදේශය',
        'subArea.alayadivembufarmingzone': 'අලයාඩිවෙම්බු කෘෂිකාර්මික කලාපය',
        'subArea.maruthamunaiagriculturalzone': 'මරුතමුනායි ගොවිපල කලාපය',
        'subArea.periyaneelavanafarmingarea': 'පෙරියනීලවනායි කෘෂිකාර්මික ප්‍රදේශය',
        // Sub-Area Full Name Translations - Jaffna
        'subArea.jaffnavegetablefarming': 'යාපනය එළවළු ගොවිතැන',
        'subArea.nalluraagriculturalzone': 'නල්ලූර් ගොවිපල කලාපය',
        'subArea.chavakachcherifarmingarea': 'චාවකච්චේරි කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.pointpedroagriculturalzone': 'පොයින්ට් පෙඩ්‍රෝ ගොවිපල කලාපය',
        'subArea.kankesanthuraivegetablezone': 'කංකේසන්තුරායි එළවළු කලාපය',
        'subArea.vaddukodaifarmingzone': 'වද්දුකෝඩායි කෘෂිකාර්මික කලාපය',
        'subArea.tellippalaiagriculturalarea': 'තෙල්ලිප්පලායි ගොවිපල ප්‍රදේශය',
        'subArea.uduvilfarmingzone': 'උඩුවිල් කෘෂිකාර්මික කලාපය',
        'subArea.kopayagriculturalzone': 'කෝපායි ගොවිපල කලාපය',
        'subArea.maruthankernyfarmingarea': 'මරුතන්කර්නි කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.karainagaragriculturalzone': 'කරයිනගර් ගොවිපල කලාපය',
        'subArea.kaytsfarmingzone': 'කයිට්ස් කෘෂිකාර්මික කලාපය',
        // Sub-Area Full Name Translations - Vavuniya
        'subArea.vavuniyaagriculturalzone': 'වවුනියාව ගොවිපල කලාපය',
        'subArea.omanthaifarmingarea': 'ඕමන්තායි කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.medawachchiyapaddyfields': 'මැදවච්චිය වී කෙත්',
        'subArea.cheddikulamfarmingzone': 'චෙද්දිකුලම් කෘෂිකාර්මික කලාපය',
        'subArea.nedunkeniagriculturalarea': 'නෙදුන්කෙනි ගොවිපල ප්‍රදේශය',
        'subArea.puliyankulamfarmingzone': 'පුලියන්කුලම් කෘෂිකාර්මික කලාපය',
        'subArea.poovarasankulamagriculturalzone': 'පූවරසන්කුලම් ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Kilinochchi
        'subArea.kilinochchiagriculturalzone': 'කිලිනොච්චි ගොවිපල කලාපය',
        'subArea.paranthanfarmingarea': 'පරන්තන් කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.pallaivegetablezone': 'පල්ලායි එළවළු කලාපය',
        'subArea.poonakaryfarmingzone': 'පූනාකාරි කෘෂිකාර්මික කලාපය',
        'subArea.iranamaduagriculturalarea': 'ඉරනමඩු ගොවිපල ප්‍රදේශය',
        'subArea.kandawalaifarmingzone': 'කන්දවලායි කෘෂිකාර්මික කලාපය',
        'subArea.akkarayankulamagriculturalzone': 'අක්කරයන්කුලම් ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Mullaitivu
        'subArea.mullaitivuagriculturalzone': 'මුල්ලෛතිවු ගොවිපල කලාපය',
        'subArea.puthukkudiyiruppufarmingarea': 'පුතුක්කුඩියිරුප්පු කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.oddusuddanvegetablezone': 'ඕද්දුසුද්දන් එළවළු කලාපය',
        'subArea.kokkilai farmingzone': 'කෝක්කිලායි කෘෂිකාර්මික කලාපය',
        'subArea.alampilagriculturalarea': 'අලම්පිල් ගොවිපල ප්‍රදේශය',
        'subArea.thunukkaifarmingzone': 'තුනුක්කායි කෘෂිකාර්මික කලාපය',
        'subArea.mulliyawalaiagriculturalzone': 'මුල්ලියවලායි ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Kurunegala (Additional)
        'subArea.kurunegalapaddyfields': 'කුරුණෑගල වී කෙත්',
        'subArea.mawathagamaagriculturalzone': 'මාවතගම ගොවිපල කලාපය',
        'subArea.ibbagamuwafarmingarea': 'ඉබ්බගමුව කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.kuliyapitiyavegetablezone': 'කුලියාපිටිය එළවළු කලාපය',
        'subArea.nikaweratiyaagriculturalarea': 'නිකවෙරටිය ගොවිපල ප්‍රදේශය',
        'subArea.panduwasnuwarafarmingzone': 'පන්දුවස්නුවර කෘෂිකාර්මික කලාපය',
        'subArea.rideegamaagriculturalarea': 'රිදීගම ගොවිපල ප්‍රදේශය',
        'subArea.giriullafarmingzone': 'ගිරිඋල්ල කෘෂිකාර්මික කලාපය',
        'subArea.dambadeniyaagriculturalzone': 'දඹදෙණිය ගොවිපල කලාපය',
        'subArea.bingiriyafarmingarea': 'බිංගිරිය කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.wariyapolaagriculturalzone': 'වරියාපොළ ගොවිපල කලාපය',
        'subArea.ganewattafarmingzone': 'ගනේවත්ත කෘෂිකාර්මික කලාපය',
        // Sub-Area Full Name Translations - Puttalam (Additional)
        'subArea.puttalamcoconutplantations': 'පුත්තලම් පොල් වගාව',
        'subArea.chilawagriculturalzone': 'චිලාව් ගොවිපල කලාපය',
        'subArea.wennappuwafarmingarea': 'වැන්නප්පුව කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.anamaduwagriculturalzone': 'අනමඩුව ගොවිපල කලාපය',
        'subArea.nattandiyafarmingarea': 'නත්තන්දිය කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.dankotuwagriculturalzone': 'දන්කොටුව ගොවිපල කලාපය',
        'subArea.mundalamafarmingzone': 'මුන්දලම කෘෂිකාර්මික කලාපය',
        'subArea.madampeagriculturalarea': 'මඩම්පේ ගොවිපල ප්‍රදේශය',
        'subArea.nawagattegamafarmingzone': 'නවගත්තේගම කෘෂිකාර්මික කලාපය',
        // Sub-Area Full Name Translations - Chilaw (Additional)
        'subArea.chilawcoconutplantations': 'චිලාව් පොල් වගාව',
        'subArea.mundalamaagriculturalzone': 'මුන්දලම ගොවිපල කලාපය',
        'subArea.madampafarmingarea': 'මඩම්පේ කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.nattandiyagriculturalzone': 'නත්තන්දිය ගොවිපල කලාපය',
        'subArea.wennappuwafarmingarea': 'වැන්නප්පුව කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.dankotuwaagriculturalzone': 'දන්කොටුව ගොවිපල කලාපය',
        'subArea.marawilafarmingzone': 'මාරවිල කෘෂිකාර්මික කලාපය',
        // Sub-Area Full Name Translations - Kuliyapitiya (Additional)
        'subArea.kuliyapitiyagriculturalzone': 'කුලියාපිටිය ගොවිපල කලාපය',
        'subArea.bingiriyfarmingarea': 'බිංගිරිය කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.wariyapolavegetablezone': 'වරියාපොළ එළවළු කලාපය',
        'subArea.panduwasnuwarfarmingzone': 'පන්දුවස්නුවර කෘෂිකාර්මික කලාපය',
        'subArea.rideegamagriculturalarea': 'රිදීගම ගොවිපල ප්‍රදේශය',
        'subArea.giriullfarmingzone': 'ගිරිඋල්ල කෘෂිකාර්මික කලාපය',
        'subArea.dambadeniyagriculturalzone': 'දඹදෙණිය ගොවිපල කලාපය',
        'subArea.ganewattfarmingarea': 'ගනේවත්ත කෘෂිකාර්මික ප්‍රදේශය',
        // Sub-Area Full Name Translations - Narammala (Additional)
        'subArea.narammalagriculturalzone': 'නාරම්මල ගොවිපල කලාපය',
        'subArea.polgahawelafarmingarea': 'පොල්ගහවෙල කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.alawwavegetablezone': 'අලව්ව එළවළු කලාපය',
        'subArea.giriullaagriculturalzone': 'ගිරිඋල්ල ගොවිපල කලාපය',
        'subArea.dambadeniyafarmingzone': 'දඹදෙණිය කෘෂිකාර්මික කලාපය',
        'subArea.ganewattagriculturalarea': 'ගනේවත්ත ගොවිපල ප්‍රදේශය',
        'subArea.melsiripurafarmingzone': 'මෙල්සිරිපුර කෘෂිකාර්මික කලාපය',
        // Sub-Area Full Name Translations - Medawachchiya (Additional)
        'subArea.medawachchiyagriculturalzone': 'මැදවච්චිය ගොවිපල කලාපය',
        'subArea.mannarroadfarmingarea': 'මන්නාරම් පාර කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.cheddikulamfarmingzone': 'චෙද්දිකුලම් කෘෂිකාර්මික කලාපය',
        'subArea.puliyankulamagriculturalarea': 'පුලියන්කුලම් ගොවිපල ප්‍රදේශය',
        'subArea.poovarasankulamfarmingzone': 'පූවරසන්කුලම් කෘෂිකාර්මික කලාපය',
        // Sub-Area Full Name Translations - Habarana (Additional)
        'subArea.habaranapaddyfields': 'හබරණ වී කෙත්',
        'subArea.minneriyagriculturalzone': 'මින්නේරිය ගොවිපල කලාපය',
        'subArea.kaudullfarmingarea': 'කවුඩුල්ල කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.giritalagriculturalzone': 'ගිරිතලේ ගොවිපල කලාපය',
        'subArea.sungawilfarmingzone': 'සුංගවිල කෘෂිකාර්මික කලාපය',
        'subArea.welikandaagriculturalarea': 'වෙලිකන්ද ගොවිපල ප්‍රදේශය',
        'subArea.medirigiriyfarmingzone': 'මැදිරිගිරිය කෘෂිකාර්මික කලාපය',
        // Sub-Area Full Name Translations - Eppawala (Additional)
        'subArea.eppawalagriculturalzone': 'එප්පාවල ගොවිපල කලාපය',
        'subArea.eppawalaphosphatefarmingarea': 'එප්පාවල පොස්පේට් කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.kalawewagriculturalzone': 'කලා වැව ගොවිපල කලාපය',
        'subArea.nachchaduwfarmingarea': 'නච්චදුව කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.thambuttegamagriculturalzone': 'තම්බුත්තේගම ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Galenbindunuwewa (Additional)
        'subArea.galenbindunuwewagriculturalzone': 'ගලේන්බිඳුනුවැව ගොවිපල කලාපය',
        'subArea.padaviyfarmingarea': 'පදවිය කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.kawudullagriculturalzone': 'කවුඩුල්ල ගොවිපල කලාපය',
        'subArea.kebithigollawfarmingarea': 'කැබිතිගොල්ලාව කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.kalawewfarmingzone': 'කලා වැව කෘෂිකාර්මික කලාපය',
        // Sub-Area Full Name Translations - Galnewa (Additional)
        'subArea.galnewagriculturalzone': 'ගල්නැව ගොවිපල කලාපය',
        'subArea.thirappanefarmingarea': 'තිරප්පනේ කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.kalawewaagriculturalzone': 'කලා වැව ගොවිපල කලාපය',
        'subArea.nachchaduwafarmingarea': 'නච්චදුව කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.sembukuttuwagriculturalzone': 'සෙම්බුකුත්තුව ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Horowupotana (Additional)
        'subArea.horowupotanagriculturalzone': 'හොරොවුපොතන ගොවිපල කලාපය',
        'subArea.kebithigollawafarmingarea': 'කැබිතිගොල්ලාව කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.padaviyagriculturalzone': 'පදවිය ගොවිපල කලාපය',
        'subArea.kawudullfarmingzone': 'කවුඩුල්ල කෘෂිකාර්මික කලාපය',
        'subArea.kalawewaagriculturalarea': 'කලා වැව ගොවිපල ප්‍රදේශය',
        // Sub-Area Full Name Translations - Kahatagasdigiliya (Additional)
        'subArea.kahatagasdigiliyagriculturalzone': 'කහටගස්දිගිලිය ගොවිපල කලාපය',
        'subArea.giribawafarmingarea': 'ගිරිබව කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.kebithigollawaagriculturalzone': 'කැබිතිගොල්ලාව ගොවිපල කලාපය',
        'subArea.padaviyafarmingarea': 'පදවිය කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.kawudullaagriculturalzone': 'කවුඩුල්ල ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Bulnewa (Additional)
        'subArea.bulnewagriculturalzone': 'බුල්නැව ගොවිපල කලාපය',
        'subArea.thambuttegamfarmingarea': 'තම්බුත්තේගම කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.nochchiyagamagriculturalzone': 'නොච්චියාගම ගොවිපල කලාපය',
        'subArea.ganewalpolfarmingarea': 'ගනේවල්පොල කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.kalawewagriculturalzone': 'කලා වැව ගොවිපල කලාපය',
        // Sub-Area Full Name Translations - Ganewalpola (Additional)
        'subArea.ganewalpolagriculturalzone': 'ගනේවල්පොල ගොවිපල කලාපය',
        'subArea.nochchiyagamfarmingarea': 'නොච්චියාගම කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.thambuttegamaagriculturalzone': 'තම්බුත්තේගම ගොවිපල කලාපය',
        'subArea.kekirawafarmingarea': 'කැකිරාව කෘෂිකාර්මික ප්‍රදේශය',
        'subArea.palugaswewagriculturalzone': 'පලුගස්වැව ගොවිපල කලාපය',
        'weather.getCurrentLocation': 'වර්තමාන ස්ථානය ලබා ගන්න',
        'weather.currentLocation': 'වර්තමාන ස්ථානය',
        'weather.rainfall': 'වර්ෂාපතනය',
        'weather.condition': 'තත්වය',
        'weather.weeklyForecast': '7-දින පුරෝකථනය',
        'weather.climateOutlook': '3-මාස කාලගුණ පුරෝකථනය',
        'weather.currentConditions': 'වර්තමාන තත්වයන්',
        'weather.temperatureLabel': 'උෂ්ණත්වය:',
        'weather.humidityLabel': 'ආර්ද්‍රතාවය:',
        'weather.windSpeedLabel': 'සුළං වේගය:',
        'weather.rainfallLabel': 'වර්ෂාපතනය:',
        'weather.conditionLabel': 'තත්වය:',
        'weather.mainlyClear': 'ප්‍රධාන වශයෙන් පැහැදිලි',
        'weather.partlyCloudy': 'අර්ධ වශයෙන් වලාකුළු සහිත',
        'weather.overcast': 'වලාකුළු සහිත',
        'weather.fog': 'අඳුරු',
        'weather.lightRain': 'සැහැල්ලු වැස්ස',
        'weather.moderateRain': 'මධ්‍යස්ථ වැස්ස',
        'weather.heavyRain': 'තද වැස්ස',
        'weather.thunderstorm': 'ගිගුරුම් සහිත වැස්ස',
        'weather.thunderstormHail': 'සැහැල්ලු හිම වැස්සක් සහිත ගිගුරුම් සහිත වැස්ස',
        'weather.slightRainShowers': 'සැහැල්ලු වැසි වර්ෂාව',
        'weather.clearSky': 'පැහැදිලි අහස',
        'weather.depositingRimeFog': 'රයිම් අඳුරු තැන්පත් කිරීම',
        'weather.lightDrizzle': 'සැහැල්ලු වැසි',
        'weather.moderateDrizzle': 'මධ්‍යස්ථ වැසි',
        'weather.denseDrizzle': 'ඝන වැසි',
        'weather.lightFreezingDrizzle': 'සැහැල්ලු හිම වැසි',
        'weather.denseFreezingDrizzle': 'ඝන හිම වැසි',
        'weather.slightRain': 'සැහැල්ලු වැස්ස',
        'weather.freezingRain': 'හිම වැස්ස',
        'weather.rainAndSnow': 'වැස්ස සහ හිම',
        'weather.slightSnowFall': 'සැහැල්ලු හිම වැටීම',
        'weather.moderateSnowFall': 'මධ්‍යස්ථ හිම වැටීම',
        'weather.heavySnowFall': 'තද හිම වැටීම',
        'weather.iceFog': 'අයිස් අඳුරු',
        'weather.snowGrains': 'හිම ධාන්‍ය',
        'weather.icePellets': 'අයිස් පෙලට්',
        'weather.moderateRainShowers': 'මධ්‍යස්ථ වැසි වර්ෂාව',
        'weather.violentRainShowers': 'බලවත් වැසි වර්ෂාව',
        'weather.slightSnowShowers': 'සැහැල්ලු හිම වර්ෂාව',
        'weather.heavySnowShowers': 'තද හිම වර්ෂාව',
        'weather.snowShowers': 'හිම වර්ෂාව',
        'weather.thunderstormHeavyHail': 'තද වැස්සක් සහිත ගිගුරුම් සහිත වැස්ස',
        'weather.dayMon': 'සඳු',
        'weather.dayTue': 'අඟ',
        'weather.dayWed': 'බදා',
        'weather.dayThu': 'බ්‍රහ',
        'weather.dayFri': 'සිකු',
        'weather.daySat': 'සෙන',
        'weather.daySun': 'ඉරි',
        'weather.loadingAlerts': 'කාලගුණ ඇඟවීම් පූරණය වෙමින්...',
        'weather.dataUnavailable': 'කාලගුණ දත්ත නොමැත',
        'weather.dataUnavailableRefresh': 'කාලගුණ දත්ත නොමැත - කරුණාකර නැවත පූරණය කරන්න',
        
        // Cost Profit
        'costProfit.title': 'පිරිවැය-ලාභ විශ්ලේෂණ මෙවලම',
        'costProfit.goHome': 'මුල් පිටුවට',
        
        // Analytics
        'analytics.title': 'අනාගත වෙළඳපොළ විශ්ලේෂණය',
        'analytics.goHome': 'මුල් පිටුවට',
        'analytics.dataAtGlance': 'ඔබගේ දත්ත එක් බැල්මකින්',
        'analytics.dataRecords': 'දත්ත වාර්තා',
        'analytics.avgMarketPrice': 'සාමාන්‍ය වෙළඳපොළ මිල',
        'analytics.avgProfit': 'සාමාන්‍ය ලාභය',
        'analytics.futurePredictions': 'අනාගත පුරෝකථන',
        'analytics.unableToGenerate': 'පුරෝකථන ජනනය කිරීමට නොහැකි',
        'analytics.addMoreData': 'කරුණාකර පිරිවැය-ලාභ විශ්ලේෂණ මෙවලම හරහා තවත් දත්ත එක් කරන්න.',
        'analytics.notEnoughData': 'පුරෝකථනයක් සෑදීමට ප්‍රමාණවත් ඉතිහාස දත්ත නැත (අවම වශයෙන් වාර්තා 3 ක් අවශ්‍ය).',
        
        // SMS Alerts
        'sms.title': 'SMS කාලගුණ තොරතුරුතොරතුරු ඇඟවීම්',
        'sms.heroSubtitle': 'ඔබගේ ජංගම දුරකථනයේ දෛනික කාලගුණ පුරෝකථන සහ ශාක ආරක්ෂණ උපදෙස් ලබා ගන්න',
        'sms.worksOnAllPhones': 'සියලුම දුරකථනවල ක්‍රියා කරයි, මූලික බොත්තම් දුරකථන පවා',
        'sms.dailyAlerts': 'දෛනික අනතුරු ඇඟවීම්',
        'sms.dailyAlertsDesc': 'ඔබගේ ප්‍රියතම වේලාවට සෑම දිනකම කාලගුණ පුරෝකථන ලබා ගන්න',
        'sms.severeWeatherWarnings': 'දරුණු කාලගුණ අනතුරු ඇඟවීම්',
        'sms.severeWeatherWarningsDesc': 'තද වැස්ස, කුණාටු හෝ අන්ත උෂ්ණත්වයට පෙර අනතුරු ඇඟවීම් ලබා ගන්න',
        'sms.plantProtectionTips': 'ශාක ආරක්ෂණ උපදෙස්',
        'sms.plantProtectionTipsDesc': 'නරක කාලගුණයෙන් ඔබගේ බෝග ආරක්ෂා කරන්නේ කෙසේදැයි ඉගෙන ගන්න',
        'sms.yourActiveSubscriptions': 'ඔබගේ සක්‍රිය දායකත්ව',
        'sms.phone': 'දුරකථන',
        'sms.alertType': 'අනතුරු ඇඟවීම් වර්ගය',
        'sms.allAlerts': 'සියලුම අනතුරු ඇඟවීම්',
        'sms.heavyRain': 'තද වැස්ස',
        'sms.extremeTemp': 'අධි උෂ්ණත්වය',
        'sms.time': 'වේලාව',
        'sms.status': 'තත්වය',
        'sms.inactive': 'අක්‍රිය',
        'sms.selectFarmingLocation': 'ඔබගේ වගා ස්ථානය තෝරන්න',
        'sms.chooseAlerts': 'ඔබට ලබා ගැනීමට අවශ්‍ය අනතුරු ඇඟවීම් තෝරන්න',
        'sms.dailyAlertTime': 'දෛනික අනතුරු ඇඟවීම් වේලාව',
        'sms.messageLanguage': 'පණිවිඩ භාෂාව',
        'sms.examples': 'උදාහරණ',
        'sms.subscribeButton': 'SMS තොරතුරු ඇඟවීම් වෙත දායක වන්න',
        'sms.unsubscribed': 'දායකත්වය අවලංගු කරන ලදී',
        'sms.lastAlertSent': 'අවසන් අනතුරු ඇඟවීම යවන ලදී',
        'sms.noActiveSubscriptions': 'සක්‍රිය දායකත්ව නැත',
        'sms.subscribeAbove': 'ඔබගේ දුරකථනයේ කාලගුණ අනතුරු ඇඟවීම් ලබා ගැනීම ආරම්භ කිරීමට ඉහතින් දායක වන්න!',
        'sms.howItWorks': 'එය ක්‍රියා කරන්නේ කෙසේද',
        'sms.dailyForecasts': 'දෛනික පුරෝකථන',
        'sms.dailyForecastsDesc': 'සෑම දිනකම, හෙට දිනයේ කාලගුණ පුරෝකථන ලබා ගන්න',
        'sms.severeWeatherAlerts': 'දරුණු කාලගුණ අනතුරු ඇඟවීම්',
        'sms.severeWeatherAlertsDesc': 'තද වැස්ස, කුණාටු හෝ අධි උෂ්ණත්වයට පෙර අනතුරු ඇඟවීම් ලබා ගන්න',
        'sms.plantProtection': 'ශාක ආරක්ෂණය',
        'sms.plantProtectionDesc': 'එක් එක් අනතුරු ඇඟවීමේ ඔබගේ බෝග ආරක්ෂා කරන්නේ කෙසේදැයි උපදෙස් අඩංගු වේ',
        'sms.worksEverywhere': 'සෑම තැනකම ක්‍රියා කරයි',
        'sms.worksEverywhereDesc': 'SMS සියලුම දුරකථනවල ක්‍රියා කරයි, අන්තර්ජාලයක් නොමැති මූලික බොත්තම් දුරකථන පවා',
        'sms.freeService': 'නොමිලේ සේවාව',
        'sms.freeServiceDesc': 'කිසිදු ගාස්තුවක් නැත, කෘෂිකර්මිකයින්ට සම්පූර්ණයෙන්ම නොමිලේ',
        'sms.easyUnsubscribe': 'සරල දායකත්වය අවලංගු කිරීම',
        'sms.easyUnsubscribeDesc': 'ඔබට ඕනෑම වේලාවක දායකත්වය අවලංගු කළ හැකිය',
        'sms.confirmUnsubscribe': 'ඔබට SMS තොරතුරු ඇඟවීම් වලින් දායකත්වය අවලංගු කිරීමට අවශ්‍යද?',
        'sms.cityLabel': 'නගරය',
        'sms.alertTypesLabel': 'අනතුරු ඇඟවීම් වර්ග',
        'sms.alertTimeLabel': 'දෛනික අනතුරු ඇඟවීම් වේලාව',
        'sms.languageLabel': 'භාෂාව',
        'sms.allWeatherAlerts': 'සියලුම කාලගුණ අනතුරු ඇඟවීම්',
        'sms.heavyRainOnly': 'තද වැස්ස පමණක්',
        'sms.extremeTempOnly': 'අන්ත උෂ්ණත්වය පමණක්',
        'sms.severeWeatherOnly': 'දරුණු කාලගුණය පමණක් (තද වැස්ස, කුණාටු)',
        
        // Support
        'support.title': 'සහාය',
        'support.aboutUs': 'අප ගැන',
        
        // Profile
        'profile.title': 'පැතිකඩ',
        
        // Settings
        'settings.title': 'සැකසීම්',
        'settings.passwordChange': 'මුරපදය වෙනස් කිරීම',
        'settings.currentPassword': 'වර්තමාන මුරපදය',
        'settings.newPassword': 'නව මුරපදය',
        'settings.confirmPassword': 'නව මුරපදය තහවුරු කරන්න',
        'settings.updatePassword': 'මුරපදය යාවත්කාලීන කරන්න',
        'settings.deleteAccount': 'ගිණුම මකන්න',
        'settings.deleteAccountWarning': 'අනතුරු ඇඟවීම: මෙම ක්‍රියාව අවලංගු කළ නොහැක. ඔබගේ සියලු දත්ත, ඔබගේ පැතිකඩ, වගා කරන ප්‍රදේශ සහ පැළෑටි ස්ථිරවම මකා දමනු ලැබේ.',
        'settings.confirmDeleteText': 'මෙම ක්‍රියාව ස්ථිර වන අතර අවලංගු කළ නොහැකි බව මට තේරුම් ඇත. මට මගේ ගිණුම මකා දැමීමට අවශ්‍යයි.',
        'settings.deleteAccountButton': 'මගේ ගිණුම මකන්න',
        'settings.backToProfile': 'පැතිකඩට ආපසු',
        'settings.goodMorning': 'සුභ උදෑසනක්',
        'settings.goodAfternoon': 'සුභ දහවලක්',
        'settings.goodEvening': 'සුභ සන්ධ්‍යාවක්',
        'settings.goodNight': 'සුභ රාත්‍රියක්',
        
        // Greetings (for homepage)
        'greeting.goodMorning': 'සුභ උදෑසනක්',
        'greeting.goodAfternoon': 'සුභ දහවලක්',
        'greeting.goodEvening': 'සුභ සන්ධ්‍යාවක්',
        'greeting.goodNight': 'සුභ රාත්‍රියක්',
        'greeting.user': '(පරිශීලක)',
        
        // Login
        'login.title': 'පිවිසීම',
        'login.username': 'පරිශීලක නම',
        'login.password': 'මුරපදය',
        'login.rememberMe': 'මාව මතක තබාගන්න',
        'login.forgotPassword': 'මුරපදය අමතකද?',
        'login.signUpQuestion': 'ගිණුමක් නැතිද?',
        'login.signUpLink': 'මෙහි ලියාපදිංචි වන්න',
        'login.backToSelection': 'පිවිසීමේ තේරීමට ආපසු',
        'login.submitButton': 'පිවිසීම',
        
        // Login Selector
        'loginSelector.title': 'WeatherGuard Harvest',
        'loginSelector.subtitle': 'ඔබගේ පිවිසීමේ වර්ගය තෝරන්න',
        'loginSelector.normalUser': 'සාමාන්‍ය පරිශීලක',
        'loginSelector.normalUserDesc': 'වෙබ් අඩවි විශේෂාංග, කාලගුණ දත්ත, විශ්ලේෂණ සහ පිරිවැය-ලාභ විශ්ලේෂණ මෙවලම් වෙත ප්‍රවේශය.',
        'loginSelector.adminUser': 'පරිපාලක පරිශීලක',
        'loginSelector.adminUserDesc': 'පරිශීලකයින් කළමනාකරණය කිරීම, පද්ධති ලොග් බැලීම සහ සැකසීම් වින්‍යාස කිරීම සඳහා පරිපාලක පැනලයට ප්‍රවේශය.',
        'loginSelector.backToHome': 'මුල් පිටුවට',
        'loginSelector.showAdmin': 'පරිපාලක පිවිසීම පෙන්වන්න',
        'loginSelector.hideAdmin': 'පරිපාලක පිවිසීම සඟවන්න',
        
        // Signup
        'signup.title': 'ඔබගේ ගිණුම සාදන්න',
        'signup.createAccount': 'ගිණුමක් සාදන්න',
        'signup.step1': 'පියවර 1: පුද්ගලික තොරතුරු',
        'signup.step2': 'පියවර 2: ගිණුම් තොරතුරු',
        'signup.firstName': 'මුල් නම',
        'signup.lastName': 'අවසාන නම',
        'signup.email': 'ඊමේල්',
        'signup.mobileNumber': 'ජංගම දුරකථන අංකය',
        'signup.dateOfBirth': 'උපන් දිනය',
        'signup.city': 'නගරය',
        'signup.addressLine1': 'ලිපින පේළිය 1',
        'signup.addressLine2': 'ලිපින පේළිය 2',
        'signup.username': 'පරිශීලක නම',
        'signup.password': 'මුරපදය',
        'signup.confirmPassword': 'මුරපදය තහවුරු කරන්න',
        'signup.next': 'ඊළඟ',
        'signup.previous': 'කලින්',
        'signup.finish': 'අවසන්',
        'signup.nextCultivation': 'ඊළඟ: වගා තොරතුරු',
        'signup.cultivationDetailsDesc': 'ඔබගේ වගා ප්‍රදේශ සහ ඔබ වගා කිරීමට සැලසුම් කරන ශාක පිළිබඳ තොරතුරු එක් කරන්න.',
        'signup.addAnotherCultivation': '+ තවත් වගා ප්‍රදේශයක් එක් කරන්න',
        'signup.completeRegistration': 'ලියාපදිංචි කිරීම සම්පූර්ණ කරන්න',
        
        // Home/Index
        'home.heroTitle': 'සෑම ජීවිතයකටම, සෑම දිනකම තිරසාර කෘෂිකර්මාන්ත විසඳුම්',
        'home.heroSubtitle': 'තත්ව ප්‍රමාණයේ කාලගුණය, බෝග උපදෙස් සහ ක්ෂණික අනතුරු ඇඟවීම් සියල්ල එක් ස්ථානයකින් ලබා ගන්න.',
        'home.checkWeatherNow': 'දැන් කාලගුණය පරීක්ෂා කරන්න',
        'home.joinNow': 'දැන් එක්වන්න',
        'home.dashboardTitle': 'ඔබගේ කෘෂිකර්මාන්ත උපකරණ පුවරුව',
        'home.keyFeatures': 'ප්‍රධාන විශේෂාංග',
        'home.dashboardSubtitle': 'නැවත සාදරයෙන් පිළිගනිමු! නවතම කාලගුණ යාවත්කාලීන කිරීම් පරීක්ෂා කරන්න සහ බෝග සැලසුම් කිරීම සඳහා මෙවලම් ගවේෂණය කරන්න.',
        'home.featuresSubtitle': 'තත්ව ප්‍රමාණයේ කාලගුණ තොරතුරු සමඟ අපගේ මෙවලම් කෘෂිකර්මිකයින්ට සමෘද්ධිමත් වීමට උපකාර කරන ආකාරය සොයා ගන්න.',
        'home.selectPlantCategory': 'ඔබගේ ශාක කාණ්ඩය තෝරන්න',
        'home.weatherForecast': 'කාලගුණ පුරෝකථනය',
        'home.weatherForecastDesc': 'ශ්‍රී ලංකාවේ සියලුම ප්‍රදේශ සඳහා තත්ව ප්‍රමාණයේ කාලගුණ දත්ත වෙත ප්‍රවේශය.',
        'home.weatherForecastDescGuest': 'ඔබගේ කෘෂිකර්මාන්ත ක්‍රියාකාරකම් සැලසුම් කිරීම සඳහා දේශීය කාලගුණය පිළිබඳව යාවත්කාලීනව සිටින්න.',
        'home.viewWeather': 'කාලගුණය බලන්න',
        'home.getStarted': 'ආරම්භ කරන්න',
        'home.smartAnalytics': 'ස්මාර්ට් විශ්ලේෂණ',
        'home.smartAnalyticsDesc': 'බෝග සැලසුම් කිරීම, පොහොර ප්‍රශස්තකරණය සහ අස්වැන්න පුරෝකථනය සඳහා තොරතුරු ලබා ගන්න.',
        'home.joinNowFeature': 'දැන් එක්වන්න',
        'home.smsAlerts': 'SMS තොරතුරු ඇඟවීම්',
        'home.smsAlertsDesc': 'ඔබගේ දුරකථනයේ SMS හරහා දෛනික කාලගුණ ‌තොරතුරු ඇඟවීම් සහ ශාක ආරක්ෂණ උපදෙස් ලබා ගන්න. සියලුම දුරකථනවල ක්‍රියා කරයි!',
        'home.subscribeNow': 'දැන් දායක වන්න',
        'home.plantTracking': 'ශාක ලුහුබැඳීම',
        'home.plantTrackingDesc': 'ඔබගේ බෝග වර්ධන අදියර ලුහුබැඳීම සහ පුද්ගලීකෘත රැකවරණ නිර්දේශ ලබා ගන්න.',
        'home.startTracking': 'ලුහුබැඳීම ආරම්භ කරන්න',
        'home.noPlants': 'මෙම කාණ්ඩයේ ශාක තෝරාගෙන නැත.',
        'home.addPlantsToProfile': 'ඔබගේ පැතිකඩට ශාක එක් කරන්න',
        'home.quickWeatherCheck': 'ක්ෂණික කාලගුණ පරීක්ෂාව',
        'home.smsAlertsDescGuest': 'වෙළඳපොළ ප්‍රවණතා, වැසි අනතුරු ඇඟවීම් සහ තවත් බොහෝ දේ ඔබගේ දුරකථනයට සෘජුවම SMS යාවත්කාලීන කිරීම් ලබා ගන්න.',
        'home.signUp': 'ලියාපදිංචි වන්න',
        'home.farmerFeedback': 'ගොවි මහතුන්ගේ අදහස්',
        'home.feedbackBefore': 'පෙර:',
        'home.feedbackAfter': 'පසු:',
        'home.feedbackSunilName': 'සුනිල් පෙරේරා මහතා - අනුරාධපුරය',
        'home.feedbackKamalName': 'කමල් විඡේසිංහ මහතා - කැකිරාව',
        'home.feedbackSunil': '"අනපේක්ෂිත කාලගුණ තත්ව නිසා වැපිරීම සැලසුම් කිරීම මට අපහසු වුනා, නිතරම වගේ හදිසි වැසි හේතුවෙන් බෝග විනාශ වුනා."',
        'home.feedbackKamal': '"වෙළඳපොළ මිල වෙනස්වීම් ගොඩක් අනපේක්ෂිතය, මගේ ලාභයට ලොකු බලපෑම් සිදු වුනා."',
        'home.expertGuidance': 'විශේෂඥ කෘෂිකර්මාන්ත මඟපෙන්වීම',
        'home.expertGuidanceDesc': 'අපගේ අත්දැකීම් සහිත කෘෂිකර්මාන්ත විශේෂඥයින්ගේ කණ්ඩායම ඔබගේ කෘෂිකර්මාන්ත සාර්ථකත්වය උපරිම කිරීමට පුද්ගලීකෘත මඟපෙන්වීම සපයයි.',
        'home.readyToPlan': 'ඔබගේ ඊළඟ අස්වැන්න සැලසුම් කිරීමට සූදානම්ද?',
        'home.readyToPlanDesc': 'ඔබගේ අස්වැන්න උපරිම කිරීම සඳහා උසස් කාලගුණ පුරෝකථනය සහ කෘෂිකර්මාන්ත මෙවලම් වෙත ප්‍රවේශය.',
        'home.viewWeatherMap': 'කාලගුණ සිතියම බලන්න',
        'home.getSupport': 'සහාය ලබා ගන්න',
        'home.joinThousands': 'සාර්ථක කෘෂිකාර්මිකයින් දහස් ගණනක් සමඟ එක්වන්න',
        'home.joinThousandsDesc': 'වඩා හොඳ කෘෂිකර්මාන්ත තීරණ සඳහා ඔබගේ ගමන WeatherGuard Harvest සමඟ ආරම්භ කරන්න.',
        'home.createAccount': 'ගිණුමක් සාදන්න',
        'home.signIn': 'පිවිසෙන්න',
        
        // Vegetables - Grains & Legumes
        'vegetable.beans': 'බෝංචි',
        'vegetable.blackGram': 'උඳු',
        'vegetable.chickpeas': 'කඩල',
        'vegetable.corn': 'මෑ කරල්',
        'vegetable.drumstick': 'මුරුංගා',
        'vegetable.fenugreek': 'උලුහාල්',
        'vegetable.greenGram': 'මුං',
        'vegetable.yardLongBeans': 'මෑ කරල්',
        'vegetable.lentils': 'පරිප්පු',
        'vegetable.okra': 'බන්ඩක්කා',
        'vegetable.soybean': 'සෝයා',
        'vegetable.cowpea': 'තෝර',
        'vegetable.pigeonPea': 'කඩල',
        'vegetable.limaBeans': 'බෝංචි',
        'vegetable.wingedBeans': 'දඹල',
        'vegetable.horseGram': 'කොල්ලු',
        'vegetable.rice': 'වී',
        'vegetable.fingerMillet': 'කුරක්කන්',
        'vegetable.maize': 'ඉරිඟු',
        'vegetable.sorghum': 'බඩඉරිගු',
        // Vegetables - Fruity Vegetables
        'vegetable.tomato': 'තක්කාලි',
        'vegetable.ashPlantain': 'අළු කෙසෙල්',
        'vegetable.breadfruit': 'දෙල්',
        'vegetable.jackfruit': 'කොස්',
        'vegetable.tenderJackfruit': 'පොලොස්',
        'vegetable.capsicum': 'මිරිස්',
        'vegetable.greenChilies': 'කොච්චි',
        'vegetable.redChilies': 'රතු මිරිස්',
        'vegetable.bellPepper': 'බෙල් මිරිස්',
        'vegetable.brinjal': 'වම්බටු',
        'vegetable.thaiEggplant': 'තායි වම්බටු',
        'vegetable.cucumber': 'පිපිංඣා',
        'vegetable.bitterGourd': 'කරවිල',
        'vegetable.snakeGourd': 'පතොල',
        'vegetable.ridgeGourd': 'වැටකොළු',
        'vegetable.bottleGourd': 'ලබු',
        'vegetable.ashPumpkin': 'පුහුල්',
        'vegetable.pumpkin': 'වට්ටක්කා',
        'vegetable.watermelon': 'කොමඩු',
        'vegetable.muskMelon': 'මස්ක් කොමඩු',
        'vegetable.cantaloupe': 'කැන්ටලෝප්',
        // Vegetables - Leafy & Stem Vegetables
        'vegetable.cabbage': 'ගෝවා',
        'vegetable.lettuce': 'සලාද',
        'vegetable.spinach': 'නිවිති',
        'vegetable.amaranthLeaves': 'තම්පලා',
        'vegetable.gotukola': 'ගොටුකොළ',
        'vegetable.kangkung': 'කංකුන්',
        'vegetable.agatiLeaves': 'කතුරු මුරුංග',
        'vegetable.mint': 'මිරිස්',
        'vegetable.curryLeaves': 'කරපිංචා',
        'vegetable.corianderLeaves': 'කොත්තමල්ලි',
        'vegetable.fenugreekLeaves': 'උලුහල්',
        'vegetable.mustardGreens': 'අබ',
        'vegetable.radishLeaves': 'රතු අල කොළ',
        'vegetable.beetrootLeaves': 'බීට් කොළ',
        'vegetable.sweetPotatoLeaves': 'බතල කොළ',
        'vegetable.cassavaLeaves': 'මං. කොළ',
        'vegetable.pumpkinLeaves': 'පුහුල් කොළ',
        'vegetable.drumstickLeaves': 'මුරුංගා කොළ',
        'vegetable.moringaLeaves': 'මුරුංගා කොළ',
        'vegetable.rocketLeaves': 'රොකට් කොළ',
        'vegetable.basil': 'මදුරුතලා',
        'vegetable.springOnions': 'ලූනු',
        'vegetable.leeks': 'ලීක්ස්',
        'vegetable.celery': 'සෙලරි',
        'vegetable.chineseCabbage': 'චීන ගෝවා',
        'vegetable.pakChoi': 'පැක් චොයි',
        'vegetable.bokChoy': 'බොක් චොයි',
        // Vegetables - Root & Tuberous Vegetables
        'vegetable.potato': 'අර්තාපල්',
        'vegetable.sweetPotato': 'බතල',
        'vegetable.cassava': 'මඤ්ඤොක්කා',
        'vegetable.carrot': 'කැරට්',
        'vegetable.radish': 'රතු අල',
        'vegetable.beetroot': 'බීට්',
        'vegetable.onion': 'ලූනු',
        'vegetable.garlic': 'සුදු ලූනු',
        'vegetable.ginger': 'ඉඟුරු',
        'vegetable.turmeric': 'කහ',
        'vegetable.yam': 'කිරි අල',
        'vegetable.elephantFootYam': 'හිංගුරල',
        'vegetable.taro': 'කිරි අල',
        'vegetable.arrowroot': 'හුලංකීරිය',
        'vegetable.lotusRoots': 'නෙළුම් අල',
        'vegetable.kohila': 'කොහිල',
        'vegetable.chinesePotato': 'චීන අර්තාපල්',
        'vegetable.purpleYam': 'දම් අල',
        'vegetable.waterYam': 'දියදිය අල',
        'vegetable.greaterYam': 'මහ අල',
        'vegetable.lesserYam': 'හින් අල',
        'vegetable.turnip': 'ටර්නිප්',
        'vegetable.parsnip': 'පාර්ස්නිප්',
        'vegetable.daikonRadish': 'ඩයිකොන් රතු අල',
        
        // Cities - North Central Province
        'city.anuradhapura': 'අනුරාධපුරය',
        'city.mihintale': 'මිහින්තලේ',
        'city.kekirawa': 'කැකිරාව',
        'city.medawachchiya': 'මැදවච්චිය',
        'city.habarana': 'හබරණ',
        'city.eppawala': 'එප්පාවල',
        'city.galenbindunuwewa': 'ගලෙන්බිඳුනුවැව',
        'city.galnewa': 'ගල්නැව',
        'city.horowupotana': 'හොරොවුපොතන',
        'city.kahatagasdigiliya': 'කහටගස්දිගිලිය',
        'city.bulnewa': 'බුල්නැව',
        'city.ganewalpola': 'ගණේවල්පොල',
        'city.polonnaruwa': 'පොළොන්නරුව',
        // Cities - North Western Province
        'city.kurunegala': 'කුරුණෑගල',
        'city.puttalam': 'පුත්තලම',
        'city.chilaw': 'චිලාව්',
        'city.kuliyapitiya': 'කුලියාපිටිය',
        'city.narammala': 'නාරම්මල',
        // Cities - Western Province
        'city.colombo': 'කොළඹ',
        'city.gampaha': 'ගම්පහ',
        'city.kalutara': 'කළුතර',
        'city.negombo': 'මීගමුව',
        'city.moratuwa': 'මොරටුව',
        'city.panadura': 'පානදුර',
        // Cities - Central Province
        'city.kandy': 'මහනුවර',
        'city.nuwaraEliya': 'නුවර එළිය',
        'city.matale': 'මාතලේ',
        'city.hatton': 'හැටන්',
        'city.gampola': 'ගම්පොළ',
        // Cities - Sabaragamuwa Province
        'city.ratnapura': 'රත්නපුර',
        'city.kegalle': 'කෑගල්ල',
        'city.balangoda': 'බලංගොඩ',
        'city.avissawella': 'අවිස්සාවෙල්ල',
        // Cities - Southern Province
        'city.galle': 'ගාල්ල',
        'city.matara': 'මාතර',
        'city.hambantota': 'හම්බන්තොට',
        'city.weligama': 'වැලිගම',
        'city.tangalle': 'තංගල්ල',
        // Cities - Uva Province
        'city.badulla': 'බදුල්ල',
        'city.monaragala': 'මොණරාගල',
        'city.bandarawela': 'බණ්ඩාරවෙල',
        'city.haputale': 'හපුතලේ',
        // Cities - Eastern Province
        'city.batticaloa': 'මඩකලපුව',
        'city.trincomalee': 'ත්‍රිකුණාමලය',
        'city.ampara': 'අම්පාර',
        'city.kalmunai': 'කල්මුනේ',
        // Cities - Northern Province
        'city.jaffna': 'යාපනය',
        'city.vavuniya': 'වවුනියාව',
        'city.kilinochchi': 'කිලිනොච්චි',
        'city.mullaitivu': 'මුලතිව්',
        
        // Profile
        'profile.yourProfile': 'ඔබගේ පැතිකඩ',
        'profile.username': 'පරිශීලක නම',
        'profile.email': 'ඊමේල්',
        'profile.firstName': 'මුල් නම',
        'profile.lastName': 'අවසාන නම',
        'profile.mobileNumber': 'ජංගම දුරකථන අංකය',
        'profile.dateOfBirth': 'උපන් දිනය',
        'profile.city': 'නගරය',
        'profile.addressLine1': 'ලිපින පේළිය 1',
        'profile.addressLine2': 'ලිපින පේළිය 2',
        'profile.changePassword': 'මුරපදය වෙනස් කරන්න',
        'profile.cultivationAreas': 'ඔබගේ වගා ප්‍රදේශ',
        'profile.location': 'ස්ථානය',
        'profile.surfaceArea': 'වගා ප්‍රදේශය',
        'profile.initialCosts': 'ආරම්භක පිරිවැය',
        'profile.seedlings': 'බීජ',
        'profile.fertilizer': 'පොහොර',
        'profile.resources': 'සම්පත්',
        'profile.plantsInArea': 'මෙම ප්‍රදේශයේ ශාක:',
        'profile.noPlantsYet': 'තවමත් ශාක එක් කර නැත.',
        'profile.addNewPlant': 'නව ශාකයක් එක් කරන්න',
        'profile.plantName': 'ශාක නම',
        'profile.category': 'කාණ්ඩය',
        'profile.addPlant': 'ශාකය එක් කරන්න',
        'profile.noCultivationAreas': 'තවමත් වගා ප්‍රදේශ එක් කර නැත. පහතින් ඔබගේ පළමු වගා ප්‍රදේශය එක් කරන්න.',
        'profile.addNewCultivationArea': 'නව වගා ප්‍රදේශයක් එක් කරන්න',
        'profile.areaName': 'ප්‍රදේශ නම',
        'profile.subArea': 'උප ප්‍රදේශය',
        'profile.surfaceAreaInput': 'වගා බිම් ප්‍රදේශය (වර්ග මීටර හෝ අක්කර)',
        'profile.addCultivationArea': 'වගා ප්‍රදේශය එක් කරන්න',
        'profile.selectCity': 'නගරය තෝරන්න',
        'profile.selectPlant': 'ශාකය තෝරන්න',
        
        // Support
        'support.contactUs': 'ඔබගේ කෘෂිකර්මාන්ත අවශ්‍යතා සඳහා සහාය සඳහා අප අමතන්න.',
        'support.name': 'නම',
        'support.email': 'ඊමේල්',
        'support.message': 'පණිවිඩය',
        'support.sendMessage': 'පණිවිඩය යවන්න',
        'support.phone': 'දුරකථන',
        'nav.contactSupport': 'සහාය අමතන්න',
        
        // About Us
        'about.title': 'WeatherGuard Harvest ගැන',
        'about.subtitle': 'නවීන කෘෂිකර්මාන්තයේ ඔබේ සහකරු',
        'about.intro': 'නවීන කෘෂිකර්මාන්තයේ ඔබේ සහකරු WeatherGuard Harvest වෙත සාදරයෙන් පිළිගනිමු. අස්වැන්න සහ ලාභය උපරිම කිරීම නිවැරදිව ලබාගන්නා තීරණ මත රඳා පවතින බව හොදින් දන්නා අපි.',
        'about.intro2': 'ගොවී මහත්ම මහත්මීන් හට තමගේ කෘෂිකර්මාන්ත කටයුතු පහසු සහ වඩාත් ළුලදායි කැගැනීමට අවශ්‍ය මෙවලම් සැපයිමට අපි සැමවිටම උත්සහ කරන්නෙමු:',
        'about.feature1Title': 'කාලෝචිත ඇඟවීම්',
        'about.feature1Desc': 'ඔබේ භෝග ආරක්ෂා කර ගැනීම සඳහා කෙටි පණිවුඩ සහ ස්ථානීය දැනුම්දීම් හරහා තීරණාත්මක කාලගුණ ඇඟවීම් සෘජුවම ලබා ගන්න.',
        'about.feature2Title': 'වඩා දක්ෂ සැලසුම් කිරීම',
        'about.feature2Desc': 'මූල්‍ය ප්‍රතිඵල ප්‍රක්ෂේපණය කිරීමට සහ ඔබේ රෝපණ උපාය මාර්ග ප්‍රශස්ත කිරීමට අපගේ උසස් ලාභ ගණනය කිරීමේ පුරෝකථනය භාවිතා කරන්න.',
        'about.feature3Title': 'වර්ධන තීක්ෂ්ණ බුද්ධිය',
        'about.feature3Desc': 'අපගේ ශාක ලුහුබැඳීමේ විශේෂාංගය සමඟ ඔබේ භෝග නිරීක්ෂණය කර ඔබේ අස්වැන්න වැඩි කිරීම සඳහා දත්ත මත පදනම් වූ වැඩිදියුණු කිරීමේ යෝජනා ලබා ගන්න.',
        'about.missionTitle': 'අපගේ අරමුණ',
        'about.missionText': 'WeatherGuard Harvest අනපේක්ෂිත කාලගුණය පුරෝකථනය කරීම සහ තවත් නවීන විශේෂාංග හරහා රටට බත සපන ඔබට ගොවි බිමේදී උපකාරීවීමට කැපවී සිටින අතර, සෞඛ්‍ය සම්පන්න බෝග වගාවක් තුලින් ඔබගේ ජීවිතය සාර්ථකත්වයට පැමිණුවීමට නිරන්තරයෙන් කටයුතු කරන්නෙමු.',
        'about.getStarted': 'ආරම්භ කරන්න',
        'about.joinUs': 'අදම එක්වන්න',
        
        // Weather
        'weather.selectCity': 'නගරය තෝරන්න',
        'weather.getWeather': 'කාලගුණය ලබා ගන්න',
        'weather.temperature': 'උෂ්ණත්වය',
        'weather.humidity': 'ආර්ද්‍රතාවය',
        'weather.windSpeed': 'සුළං වේගය',
        'weather.pressure': 'පීඩනය',
        'weather.visibility': 'දෘශ්‍යතාව',
        'weather.clouds': 'වළාකුළු',
        'weather.description': 'විස්තරය',
        'weather.feelsLike': 'පරිසරය',
        'weather.hourlyForecast': 'පැයකට පුරෝකථනය',
        'weather.dailyForecast': 'දෛනික පුරෝකථනය',
        
        // Cost Profit Analysis
        'costProfit.selectVegetable': 'එළවලුව තෝරන්න',
        'costProfit.searchVegetable': 'එළවලුව සොයන්න',
        'costProfit.selectedPlants': 'තෝරාගත් ශාක',
        'costProfit.cultivationArea': 'වගා ප්‍රදේශය',
        'costProfit.areaName': 'ප්‍රදේශ නම',
        'costProfit.city': 'නගරය',
        'costProfit.subArea': 'උප ප්‍රදේශය',
        'costProfit.surfaceArea': 'වගා බිම් ප්‍රදේශය',
        'costProfit.addCultivation': 'වගාව එක් කරන්න',
        'costProfit.removeCultivation': 'ඉවත් කරන්න',
        'costProfit.initialCosts': 'ආරම්භක පිරිවැය',
        'costProfit.seedlingCost': 'බීජ පිරිවැය (රු.)',
        'costProfit.fertilizerCost': 'පොහොර පිරිවැය (රු.)',
        'costProfit.resourceCost': 'සම්පත් පිරිවැය (රු.)',
        'costProfit.additionalCost': 'අතිරේක පිරිවැය',
        'costProfit.costName': 'පිරිවැය නම',
        'costProfit.amount': 'ප්‍රමාණය (රු.)',
        'costProfit.addCost': 'පිරිවැය එක් කරන්න',
        'costProfit.removeCost': 'ඉවත් කරන්න',
        'costProfit.calculate': 'ගණනය කරන්න',
        'costProfit.totalCost': 'සම්පූර්ණ පිරිවැය',
        'costProfit.expectedProfit': 'අපේක්ෂිත ලාභය',
        'costProfit.profitMargin': 'ලාභ මායිම',
        'costProfit.viewHistory': 'ඉතිහාසය බලන්න',
        'costProfit.history': 'පිරිවැය-ලාභ ඉතිහාසය',
        'costProfit.date': 'දිනය',
        'costProfit.vegetable': 'එළවලුව',
        'costProfit.totalCostCol': 'සම්පූර්ණ පිරිවැය',
        'costProfit.expectedProfitCol': 'අපේක්ෂිත ලාභය',
        'costProfit.profitMarginCol': 'ලාභ මායිම',
        'costProfit.noHistory': 'ගණනය කිරීමේ ඉතිහාසය හමු නොවීය.',
        'costProfit.calculateCost': 'පිරිවැය ගණනය කරන්න',
        'costProfit.addInitialCost': 'ආරම්භක පිරිවැය එක් කරන්න (රු.)',
        'costProfit.enterInitialCost': 'ආරම්භක පිරිවැය ඇතුළත් කරන්න',
        'costProfit.addSubsequentCost': 'අනුගමනය කරන පිරිවැය එක් කරන්න (රු.)',
        'costProfit.enterSubsequentCost': 'අනුගමනය කරන පිරිවැය ඇතුළත් කරන්න',
        'costProfit.addCost': 'පිරිවැය එක් කරන්න',
        'costProfit.subsequentCosts': 'අනුගමනය කරන පිරිවැය:',
        'costProfit.subsequentTotal': 'අනුගමනය කරන සම්පූර්ණ:',
        'costProfit.calculateTotalCost': 'සම්පූර්ණ පිරිවැය ගණනය කරන්න',
        'costProfit.resetCosts': 'පිරිවැය යළි සැකසීම',
        'costProfit.totalCost': 'සම්පූර්ණ පිරිවැය:',
        'costProfit.calculateRevenue': 'ආදායම ගණනය කරන්න',
        'costProfit.enterMarketPrice': 'වර්තමාන වෙළඳපොළ මිල ඇතුළත් කරන්න (රු./කි.ග්‍රෑ.)',
        'costProfit.enterMarketPricePlaceholder': 'කිලෝග්‍රෑමයකට වෙළඳපොළ මිල ඇතුළත් කරන්න',
        'costProfit.enterHarvest': 'අස්වැන්න ඇතුළත් කරන්න (කි.ග්‍රෑ.)',
        'costProfit.enterHarvestPlaceholder': 'කිලෝග්‍රෑම වලින් අස්වැන්නේ බර ඇතුළත් කරන්න',
        'costProfit.totalRevenue': 'සම්පූර්ණ ආදායම:',
        'costProfit.profit': 'ලාභය',
        'costProfit.calculateProfit': 'ලාභය ගණනය කරන්න',
        'costProfit.takeReport': 'වාර්තාවක් ලබා ගන්න',
        'costProfit.history': 'ඉතිහාසය',
        'costProfit.netProfit': 'ශුද්ධ ලාභය:',
        'costProfit.profitableBusiness': 'ලාභදායී!',
        'costProfit.lossIncurred': 'පාඩු සහිතයි',
        'costProfit.clearAllData': 'සියලුම දත්ත මකන්න',
        'costProfit.goToAnalysis': 'ඔබගේ පළමු වාර්තාව ගණනය කිරීමට සහ සුරැකීමට විශ්ලේෂණ පිටුවට යන්න.',
        'costProfit.backToAnalysis': 'විශ්ලේෂණයට ආපසු',
        'costProfit.totalRevenueCol': 'සම්පූර්ණ ආදායම (රු.)',
        'costProfit.marketPriceCol': 'වෙළඳපොළ මිල (රු./කි.ග්‍රෑ.)',
        'costProfit.profitCol': 'ලාභය (රු.)',
        
        // Analytics
        'analytics.marketPredictions': 'වෙළඳපොළ පුරෝකථන',
        'analytics.cropRecommendations': 'බෝග නිර්දේශ',
        'analytics.fertilizerOptimization': 'පොහොර ප්‍රශස්තිකරණය',
        'analytics.yieldForecast': 'අස්වැන්න පුරෝකථනය',
        
        // SMS Alerts
        'sms.subscribe': 'SMS තොරතුරු ඇඟවීම් වෙත දායක වන්න',
        'sms.phoneNumber': 'දුරකථන අංකය',
        'sms.selectCity': 'නගරය තෝරන්න',
        'sms.subscribeButton': 'දායක වන්න',
        'sms.yourSubscriptions': 'ඔබගේ දායකත්ව',
        'sms.active': 'සක්‍රිය',
        'sms.inactive': 'අක්‍රිය',
        'sms.unsubscribe': 'දායකත්වය අවලංගු කරන්න',
        'sms.info': 'තොරතුරු',
        'sms.infoText': 'ඔබට SMS හරහා දෛනික කාලගුණ තොරතුරු ඇඟවීම් සහ ශාක ආරක්ෂණ උපදෙස් ලැබෙනු ඇත. මෙම සේවාව සියලුම දුරකථනවල ක්‍රියා කරයි!',
        
        // 404
        '404.title': '404 - පිටුව හමු නොවීය',
        '404.message': 'කණගාටුයි, ඔබ සොයන පිටුව නොපවතී.',
        '404.goHome': 'මුල් පිටුවට'
    },
    ta: {
        // Navigation
        'nav.home': 'முகப்பு',
        'nav.weather': 'வானிலை',
        'nav.support': 'ஆதரவு',
        'nav.userLogin': 'பயனர் உள்நுழைவு',
        'nav.profile': 'சுயவிவரம்',
        'nav.settings': 'அமைப்புகள்',
        'nav.logout': 'வெளியேறு',
        'nav.plantTracking': 'தாவர கண்காணிப்பு',
        'nav.costProfitTool': 'செலவு-லாப கருவி',
        'nav.futureAnalyse': 'எதிர்கால பகுப்பாய்வு',
        'nav.smsAlerts': 'SMS எச்சரிக்கைகள்',
        'nav.aboutUs': 'எங்களைப் பற்றி',
        'nav.language': 'மொழி',
        'nav.english': 'ஆங்கிலம்',
        'nav.sinhala': 'சிங்களம்',
        'nav.tamil': 'தமிழ்',
        
        // Footer
        'footer.copyright': '© 2024 WeatherGuard Harvest. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன.',
        
        // Common
        'common.loading': 'ஏற்றுகிறது…',
        'common.submit': 'சமர்ப்பிக்க',
        'common.cancel': 'ரத்துசெய்',
        'common.save': 'சேமி',
        'common.delete': 'நீக்கு',
        'common.edit': 'திருத்து',
        'common.close': 'மூடு',
        'common.back': 'பின்',
        'common.next': 'அடுத்து',
        'common.previous': 'முந்தைய',
        'common.search': 'தேடு',
        'common.filter': 'வடிகட்டி',
        'common.actions': 'செயல்கள்',
        'common.add': 'சேர்',
        
        // Plant Tracking
        'plant.heading': 'தாவர கண்காணிப்பு',
        'plant.subtitle': 'வளர்ச்சி நுண்ணறிவுகள், வரலாறு மற்றும் பராமரிப்பு பரிந்துரைகள்',
        'plant.category': 'தாவர வகை',
        'plant.grainsLegumes': 'தானியங்கள் & பருப்பு வகைகள்',
        'plant.fruityVegetables': 'பழ காய்கறிகள்',
        'plant.leafyStem': 'இலை மற்றும் தண்டு காய்கறிகள்',
        'plant.rootTuberous': 'வேர் மற்றும் கிழங்கு காய்கறிகள்',
        'plant.stage': 'நிலை',
        'plant.plantedDate': 'நடப்பட்ட தேதி',
        'plant.location': 'இடம்',
        'plant.autoStage': 'தானியங்கி நிலை',
        'plant.refreshWeather': 'வானிலையை புதுப்பிக்க',
        'plant.age': 'வயது',
        'plant.nextMilestone': 'அடுத்த மைல்கல்',
        'plant.essentialTasks': 'அத்தியாவசிய பணிகள்',
        'plant.yourTodos': 'உங்கள் செய்ய வேண்டியவை',
        'plant.addTask': 'பணியைச் சேர்...',
        'plant.addTaskPlaceholder': 'நீங்கள் செய்ய திட்டமிடும் பணியைச் சேர்க்க…',
        'plant.openTracker': 'கண்காணிப்பைத் திற',
        'plant.growthWeather': 'வளர்ச்சி மற்றும் வானிலை',
        'plant.atAGlance': 'ஒரு பார்வையில்',
        'plant.treatmentsTodos': 'சிகிச்சைகள் மற்றும் செய்ய வேண்டியவை',
        'plant.treatmentsNeededNow': 'இப்போது தேவையான சிகிச்சைகள்',
        'plant.history': 'வரலாறு',
        'plant.growthWeatherAnalyzer': 'வளர்ச்சி மற்றும் வானிலை பகுப்பாய்வு',
        'plant.stageSeed': 'விதை',
        'plant.stageSeedling': 'நாற்று',
        'plant.stageSmallPlant': 'சிறிய தாவரம்',
        'plant.stageSmallPlantGrown': 'வளர்ந்த சிறிய தாவரம்',
        'plant.stageGrown': 'வளர்ந்த',
        'plant.stageFullyGrown': 'மலர்களுடன் முழுமையாக வளர்ந்த',
        'plant.maturityCondition': 'முதிர்ச்சி மற்றும் நிலை நிலை',
        'plant.days': 'நாட்கள்',
        'plant.entireHistory': 'முழு வரலாறு',
        'plant.around': 'சுற்றி',
        'plant.deepWatering': 'ஆழமான நீர்ப்பாசனம்',
        'plant.deepWateringDesc': 'வாரத்திற்கு ஒருமுறை வேர் ஆழத்திற்கு ஊறவைக்கவும்.',
        'plant.bloomBooster': 'மலர் மேம்படுத்தி',
        'plant.bloomBoosterDesc': 'அதிக P & K; அதிகப்படியான நைட்ரஜனை தவிர்க்கவும்.',
        'plant.treatmentFertilizer': 'உரம் பயன்பாடு',
        'plant.treatmentPestControl': 'பூச்சி கட்டுப்பாடு',
        'plant.treatmentPruning': 'கத்தரித்தல்',
        'plant.treatmentMulching': 'மல்ச்சிங்',
        'plant.treatmentWeeding': 'களை நீக்குதல்',
        
        // Weather
        'weather.title': 'வானிலை',
        'weather.current': 'தற்போதைய வானிலை',
        'weather.forecast': 'முன்னறிவிப்பு',
        'weather.province': 'மாகாணம்',
        'weather.allProvinces': 'அனைத்து மாகாணங்கள்',
        'province.northCentral': 'வடமத்திய மாகாணம்',
        'province.northWestern': 'வடமேற்கு மாகாணம்',
        'province.western': 'மேற்கு மாகாணம்',
        'province.central': 'மத்திய மாகாணம்',
        'province.sabaragamuwa': 'சபரகமுவ மாகாணம்',
        'province.southern': 'தெற்கு மாகாணம்',
        'province.uva': 'ஊவா மாகாணம்',
        'province.eastern': 'கிழக்கு மாகாணம்',
        'province.northern': 'வடக்கு மாகாணம்',
        'weather.selectCity': 'நகரம்',
        'weather.selectCityOption': 'ஒரு நகரத்தை தேர்ந்தெடுக்கவும்',
        'weather.selectCityToViewForecast': 'முன்னறிவிப்பைக் காண நகரத்தைத் தேர்ந்தெடுக்கவும்',
        'weather.subArea': 'உப பகுதி (விருப்பமானது)',
        'weather.selectSubArea': 'ஒரு உப பகுதியை தேர்ந்தெடுக்கவும்',
        // Sub-Area Full Name Translations - Anuradhapura
        'subArea.thanthirimalefarmingzone': 'தந்திரிமலை விவசாய மண்டலம்',
        'subArea.rajaratapaddyfields': 'ரஜரட நெல் வயல்கள்',
        'subArea.malwathuoyaagriculturalarea': 'மல்வது ஓய விவசாய பகுதி',
        'subArea.kalawewafarmingzone': 'கலா வேவா விவசாய மண்டலம்',
        'subArea.nachchaduwaagriculturalarea': 'நச்சாதுவா விவசாய பகுதி',
        'subArea.tissawewapaddyfields': 'திஸ்ஸா வேவா நெல் வயல்கள்',
        'subArea.basawakkulamafarmingzone': 'பசவக்குலம விவசாய மண்டலம்',
        'subArea.nuwarawewaagriculturalarea': 'நுவரவேவா விவசாய பகுதி',
        'subArea.sembukuttuwafarmingzone': 'செம்புகுத்துவ விவசாய மண்டலம்',
        'subArea.padaviyaagriculturalzone': 'பதவிய விவசாய மண்டலம்',
        'subArea.kawudullafarmingarea': 'கவுடுல்ல விவசாய பகுதி',
        'subArea.kebithigollawaagriculturalzone': 'கெபிதிகொல்லவா விவசாய மண்டலம்',
        // Sub-Area Full Name Translations - Mihintale
        'subArea.mihintaleagriculturalzone': 'மிஹிந்தலை விவசாய மண்டலம்',
        'subArea.kantakafarmingarea': 'கந்தக விவசாய பகுதி',
        'subArea.mihintalepaddyfields': 'மிஹிந்தலை நெல் வயல்கள்',
        'subArea.rajanganayafarmingzone': 'ரஜங்கனய விவசாய மண்டலம்',
        'subArea.kalawewaagriculturalarea': 'கலா வேவா விவசாய பகுதி',
        'subArea.mahakanadarawafarmingzone': 'மஹகனதரவ விவசாய மண்டலம்',
        'subArea.nachchaduwaagriculturalzone': 'நச்சாதுவா விவசாய மண்டலம்',
        // Sub-Area Full Name Translations - Kekirawa
        'subArea.kekirawapaddyfields': 'கெக்கிரவ நெல் வயல்கள்',
        'subArea.palugaswewafarmingzone': 'பலுகஸ்வேவா விவசாய மண்டலம்',
        'subArea.thambuttegamaagriculturalarea': 'தம்புத்தேகம விவசாய பகுதி',
        'subArea.nochchiyagamafarmingzone': 'நொச்சியகம விவசாய மண்டலம்',
        'subArea.ganewalpolaagriculturalarea': 'கனேவல்பொல விவசாய பகுதி',
        'subArea.palugaswewapaddyfields': 'பலுகஸ்வேவா நெல் வயல்கள்',
        'subArea.kekirawavegetablezone': 'கெக்கிரவ காய்கறி மண்டலம்',
        'subArea.thambuttegamafarmingarea': 'தம்புத்தேகம விவசாய பகுதி',
        // Sub-Area Full Name Translations - Polonnaruwa
        'subArea.parakramasamudraagriculturalzone': 'பராக்ரம சமுத்திர விவசாய மண்டலம்',
        'subArea.minneriyafarmingarea': 'மின்னேரிய விவசாய பகுதி',
        'subArea.kaudullaagriculturalzone': 'கவுடுல்ல விவசாய மண்டலம்',
        'subArea.giritalefarmingzone': 'கிரிதலே விவசாய மண்டலம்',
        'subArea.topawewaagriculturalarea': 'தொபா வேவா விவசாய பகுதி',
        'subArea.elaherafarmingzone': 'எலஹேர விவசாய மண்டலம்',
        'subArea.dimbulagalaagriculturalzone': 'திம்புலகல விவசாய மண்டலம்',
        'subArea.sungawilafarmingarea': 'சுங்கவில விவசாய பகுதி',
        'subArea.welikandaagriculturalzone': 'வேலிகண்ட விவசாய மண்டலம்',
        'subArea.medirigiriyafarmingzone': 'மெதிரிகிரிய விவசாய மண்டலம்',
        // Sub-Area Full Name Translations - Colombo
        'subArea.kelaniyavegetablefarmingzone': 'கெலனிய காய்கறி விவசாய மண்டலம்',
        'subArea.attidiyapaddyfields': 'அத்திடிய நெல் வயல்கள்',
        'subArea.borellaagriculturalarea': 'பொரெல்ல விவசாய பகுதி',
        'subArea.kottefarmingzone': 'கொட்டே விவசாய மண்டலம்',
        'subArea.kolonnawavegetablezone': 'கொலோன்னவ காய்கறி மண்டலம்',
        'subArea.maharagamaagriculturalarea': 'மஹரகம விவசாய பகுதி',
        'subArea.kaduwelafarmingzone': 'கடுவேல விவசாய மண்டலம்',
        'subArea.homagamaagriculturalzone': 'ஹோமகம விவசாய மண்டலம்',
        'subArea.piliyandalavegetablefarming': 'பிலியந்தல காய்கறி விவசாயம்',
        'subArea.kesbewaagriculturalarea': 'கெஸ்பேவ விவசாய பகுதி',
        'subArea.thalangamafarmingzone': 'தலங்கம விவசாய மண்டலம்',
        'subArea.athurugiriyaagriculturalzone': 'அதுருகிரிய விவசாய மண்டலம்',
        // Sub-Area Full Name Translations - Gampaha
        'subArea.gampahapaddyfields': 'கம்பஹ நெல் வயல்கள்',
        'subArea.nittambuwafarmingzone': 'நித்தம்புவ விவசாய மண்டலம்',
        'subArea.veyangodaagriculturalarea': 'வேயங்கொட விவசாய பகுதி',
        'subArea.mirigamavegetablezone': 'மிரிகம காய்கறி மண்டலம்',
        'subArea.wattalaagriculturalzone': 'வத்தல விவசாய மண்டலம்',
        'subArea.jaelafarmingarea': 'ஜா-எல விவசாய பகுதி',
        'subArea.seeduwavegetablezone': 'சீடுவ காய்கறி மண்டலம்',
        'subArea.katunayakeagriculturalarea': 'கடுனயக்கே விவசாய பகுதி',
        'subArea.divulapityafarmingzone': 'திவுலபிடிய விவசாய மண்டலம்',
        'subArea.minuwangodaagriculturalzone': 'மினுவங்கொட விவசாய மண்டலம்',
        'subArea.biyagamafarmingarea': 'பியகம விவசாய பகுதி',
        'subArea.dompeagriculturalzone': 'தொம்பே விவசாய மண்டலம்',
        // Sub-Area Full Name Translations - Kalutara
        'subArea.kalutaracoconutplantations': 'கலுத்தர தேங்காய் தோட்டங்கள்',
        'subArea.beruwalaspicegardens': 'பெருவல மசாலா தோட்டங்கள்',
        'subArea.alutgamaagriculturalzone': 'அலுத்தகம விவசாய மண்டலம்',
        'subArea.wadduwafarmingarea': 'வடுவ விவசாய பகுதி',
        'subArea.matugamaagriculturalzone': 'மதுகம விவசாய மண்டலம்',
        'subArea.horanafarmingzone': 'ஹொரன விவசாய மண்டலம்',
        'subArea.bandaragamaagriculturalarea': 'பந்தரகம விவசாய பகுதி',
        'subArea.millaniyafarmingzone': 'மில்லனிய விவசாய மண்டலம்',
        'subArea.bulathsinhalaagriculturalzone': 'புலத்சிஹல விவசாய மண்டலம்',
        'subArea.agalawattafarmingarea': 'அகலவத்த விவசாய பகுதி',
        'subArea.palindanuwaraagriculturalzone': 'பலிந்தனுவர விவசாய மண்டலம்',
        'subArea.dodangodafarmingzone': 'தொடங்கொட விவசாய மண்டலம்',
        // Sub-Area Full Name Translations - Negombo
        'subArea.negombovegetablefarming': 'நெகொம்போ காய்கறி விவசாயம்',
        'subArea.katanapaddyfields': 'கடன நெல் வயல்கள்',
        'subArea.kochchikadeagriculturalzone': 'கொச்சிக்கடே விவசாய மண்டலம்',
        'subArea.dankotuwafarmingzone': 'தன்கொடுவ விவசாய மண்டலம்',
        'subArea.mahaoyaagriculturalarea': 'மஹ ஓய விவசாய பகுதி',
        'subArea.waikkalfarmingzone': 'வைக்கல் விவசாய மண்டலம்',
        'subArea.kandanaagriculturalzone': 'கண்டன விவசாய மண்டலம்',
        'subArea.ragamafarmingarea': 'ரகம விவசாய பகுதி',
        // Sub-Area Full Name Translations - Moratuwa
        'subArea.moratuwavegetablezone': 'மொரதுவ காய்கறி மண்டலம்',
        'subArea.koralawellafarmingarea': 'கொரலவெல்ல விவசாய பகுதி',
        'subArea.lunawaagriculturalzone': 'லுனவ விவசாய மண்டலம்',
        'subArea.rawatawattafarmingarea': 'ரவதவத்த விவசாய பகுதி',
        'subArea.egodauyanaagriculturalzone': 'எகொடவுயன விவசாய மண்டலம்',
        // Sub-Area Full Name Translations - Panadura
        'subArea.panaduraagriculturalzone': 'பனதுர விவசாய மண்டலம்',
        'subArea.wadduwafarmingarea': 'வடுவ விவசாய பகுதி',
        'subArea.pinwattavegetablezone': 'பின்வத்த காய்கறி மண்டலம்',
        'subArea.koralawellaagriculturalarea': 'கொரலவெல்ல விவசாய பகுதி',
        'subArea.katukurundafarmingzone': 'கடுக்குருந்த விவசாய மண்டலம்',
        'weather.getCurrentLocation': 'தற்போதைய இடத்தை பெற',
        'weather.currentLocation': 'தற்போதைய இடம்',
        'weather.rainfall': 'மழைப்பொழிவு',
        'weather.condition': 'நிலை',
        'weather.weeklyForecast': '7-நாள் முன்னறிவிப்பு',
        'weather.climateOutlook': '3-மாத காலநிலை கண்ணோட்டம்',
        'weather.currentConditions': 'தற்போதைய நிலைமைகள்',
        'weather.temperatureLabel': 'வெப்பநிலை:',
        'weather.humidityLabel': 'ஈரப்பதம்:',
        'weather.windSpeedLabel': 'காற்று வேகம்:',
        'weather.rainfallLabel': 'மழைப்பொழிவு:',
        'weather.conditionLabel': 'நிலை:',
        'weather.mainlyClear': 'முக்கியமாக தெளிவான',
        'weather.partlyCloudy': 'பகுதியாக மேகமூட்டம்',
        'weather.overcast': 'மேகமூட்டம்',
        'weather.fog': 'மூடுபனி',
        'weather.lightRain': 'இலேசான மழை',
        'weather.moderateRain': 'மிதமான மழை',
        'weather.heavyRain': 'கனமான மழை',
        'weather.thunderstorm': 'இடி மின்னல்',
        'weather.thunderstormHail': 'சிறிய ஆலங்கட்டி மழையுடன் இடி மின்னல்',
        'weather.slightRainShowers': 'இலேசான மழை பொழிவு',
        'weather.clearSky': 'தெளிவான வானம்',
        'weather.depositingRimeFog': 'ரைம் மூடுபனி வைத்தல்',
        'weather.lightDrizzle': 'இலேசான தூறல்',
        'weather.moderateDrizzle': 'மிதமான தூறல்',
        'weather.denseDrizzle': 'அடர்ந்த தூறல்',
        'weather.lightFreezingDrizzle': 'இலேசான உறைந்த தூறல்',
        'weather.denseFreezingDrizzle': 'அடர்ந்த உறைந்த தூறல்',
        'weather.slightRain': 'இலேசான மழை',
        'weather.freezingRain': 'உறைந்த மழை',
        'weather.rainAndSnow': 'மழை மற்றும் பனி',
        'weather.slightSnowFall': 'இலேசான பனி வீழ்ச்சி',
        'weather.moderateSnowFall': 'மிதமான பனி வீழ்ச்சி',
        'weather.heavySnowFall': 'கனமான பனி வீழ்ச்சி',
        'weather.iceFog': 'பனி மூடுபனி',
        'weather.snowGrains': 'பனி தானியங்கள்',
        'weather.icePellets': 'பனி குண்டுகள்',
        'weather.moderateRainShowers': 'மிதமான மழை பொழிவு',
        'weather.violentRainShowers': 'கடுமையான மழை பொழிவு',
        'weather.slightSnowShowers': 'இலேசான பனி பொழிவு',
        'weather.heavySnowShowers': 'கனமான பனி பொழிவு',
        'weather.snowShowers': 'பனி பொழிவு',
        'weather.thunderstormHeavyHail': 'கனமான ஆலங்கட்டி மழையுடன் இடி மழை',
        'weather.dayMon': 'திங்கள்',
        'weather.dayTue': 'செவ்வாய்',
        'weather.dayWed': 'புதன்',
        'weather.dayThu': 'வியாழன்',
        'weather.dayFri': 'வெள்ளி',
        'weather.daySat': 'சனி',
        'weather.daySun': 'ஞாயிறு',
        'weather.loadingAlerts': 'வேகமான வானிலை எச்சரிக்கைகளை ஏற்றுகிறது...',
        'weather.dataUnavailable': 'வானிலை தரவு கிடைக்கவில்லை',
        'weather.dataUnavailableRefresh': 'வானிலை தரவு கிடைக்கவில்லை - தயவுசெய்து புதுப்பிக்கவும்',
        'weather.locationAccessRequired': 'இடம் அணுகல் தேவை',
        'weather.locationAccessMessage': 'உங்கள் தற்போதைய இடத்திற்கான துல்லியமான வானிலை தகவலை வழங்க, உங்கள் சாதனத்தின் இடத்திற்கான அணுகல் நமக்குத் தேவை.',
        'weather.locationPrivacyMessage': 'உங்கள் இட தரவு வானிலை சேவைகளுக்கு மட்டுமே பயன்படுத்தப்படுகிறது மற்றும் சேமிக்கப்படவோ அல்லது பகிரப்படவோ இல்லை.',
        'weather.allowLocationAccess': 'இடம் அணுகலை அனுமதிக்கவும்',
        'weather.useGPSLocation': 'GPS இடத்தைப் பயன்படுத்தவும்',
        
        // Cost Profit
        'costProfit.title': 'செலவு-லாப பகுப்பாய்வு கருவி',
        'costProfit.goHome': 'முகப்புக்கு',
        
        // Analytics
        'analytics.title': 'எதிர்கால சந்தை பகுப்பாய்வு',
        'analytics.goHome': 'முகப்புக்கு',
        'analytics.dataAtGlance': 'ஒரு பார்வையில் உங்கள் தரவு',
        'analytics.dataRecords': 'தரவு பதிவுகள்',
        'analytics.avgMarketPrice': 'சராசரி சந்தை விலை',
        'analytics.avgProfit': 'சராசரி லாபம்',
        'analytics.futurePredictions': 'எதிர்கால கணிப்புகள்',
        'analytics.unableToGenerate': 'கணிப்புகளை உருவாக்க முடியவில்லை',
        'analytics.addMoreData': 'தயவுசெய்து செலவு-லாப பகுப்பாய்வு கருவி மூலம் மேலும் தரவைச் சேர்க்கவும்.',
        'analytics.notEnoughData': 'ஒரு கணிப்பை செய்ய போதுமான வரலாற்று தரவு இல்லை (குறைந்தது 3 பதிவுகள் தேவை).',
        
        // SMS Alerts
        'sms.title': 'SMS வானிலை எச்சரிக்கைகள்',
        'sms.heroSubtitle': 'உங்கள் மொபைல் தொலைபேசியில் தினசரி வானிலை முன்னறிவிப்புகள் மற்றும் தாவர பாதுகாப்பு ஆலோசனைகளை பெறுங்கள்',
        'sms.worksOnAllPhones': 'அனைத்து தொலைபேசிகளிலும் செயல்படுகிறது, அடிப்படை பொத்தான் தொலைபேசிகள் கூட',
        'sms.dailyAlerts': 'தினசரி எச்சரிக்கைகள்',
        'sms.dailyAlertsDesc': 'உங்கள் விருப்பமான நேரத்தில் ஒவ்வொரு நாளும் வானிலை முன்னறிவிப்புகளை பெறுங்கள்',
        'sms.severeWeatherWarnings': 'கடுமையான வானிலை எச்சரிக்கைகள்',
        'sms.severeWeatherWarningsDesc': 'கனமான மழை, புயல் அல்லது தீவிர வெப்பநிலைக்கு முன் எச்சரிக்கைகளை பெறுங்கள்',
        'sms.plantProtectionTips': 'தாவர பாதுகாப்பு உதவிக்குறிப்புகள்',
        'sms.plantProtectionTipsDesc': 'மோசமான வானிலையிலிருந்து உங்கள் பயிர்களை எவ்வாறு பாதுகாப்பது என்பதை அறிக',
        'sms.yourActiveSubscriptions': 'உங்கள் செயலில் உள்ள குழுசேற்புகள்',
        'sms.phone': 'தொலைபேசி',
        'sms.alertType': 'எச்சரிக்கை வகை',
        'sms.allAlerts': 'அனைத்து எச்சரிக்கைகள்',
        'sms.heavyRain': 'கனமான மழை',
        'sms.extremeTemp': 'தீவிர வெப்பநிலை',
        'sms.time': 'நேரம்',
        'sms.status': 'நிலை',
        'sms.inactive': 'செயலற்ற',
        'sms.selectFarmingLocation': 'உங்கள் விவசாய இடத்தை தேர்ந்தெடுக்கவும்',
        'sms.chooseAlerts': 'நீங்கள் பெற விரும்பும் எச்சரிக்கைகளை தேர்ந்தெடுக்கவும்',
        'sms.dailyAlertTime': 'தினசரி எச்சரிக்கை நேரம்',
        'sms.messageLanguage': 'செய்தி மொழி',
        'sms.examples': 'எடுத்துக்காட்டுகள்',
        'sms.subscribeButton': 'SMS எச்சரிக்கைகளுக்கு குழுசேர',
        'sms.unsubscribed': 'குழுசேற்பு ரத்துசெய்யப்பட்டது',
        'sms.lastAlertSent': 'கடைசி எச்சரிக்கை அனுப்பப்பட்டது',
        'sms.noActiveSubscriptions': 'செயலில் உள்ள குழுசேற்புகள் இல்லை',
        'sms.subscribeAbove': 'உங்கள் தொலைபேசியில் வானிலை எச்சரிக்கைகளை பெறத் தொடங்க மேலே குழுசேரவும்!',
        'sms.howItWorks': 'இது எவ்வாறு செயல்படுகிறது',
        'sms.dailyForecasts': 'தினசரி முன்னறிவிப்புகள்',
        'sms.dailyForecastsDesc': 'ஒவ்வொரு நாளும் நாளைய வானிலை முன்னறிவிப்பை பெறுங்கள்',
        'sms.severeWeatherAlerts': 'கடுமையான வானிலை எச்சரிக்கைகள்',
        'sms.severeWeatherAlertsDesc': 'கனமான மழை, புயல் அல்லது தீவிர வெப்பநிலைக்கு முன் எச்சரிக்கைகளை பெறுங்கள்',
        'sms.plantProtection': 'தாவர பாதுகாப்பு',
        'sms.plantProtectionDesc': 'ஒவ்வொரு எச்சரிக்கையும் உங்கள் பயிர்களை எவ்வாறு பாதுகாப்பது என்பதற்கான ஆலோசனையை உள்ளடக்கியது',
        'sms.worksEverywhere': 'எல்லா இடங்களிலும் செயல்படுகிறது',
        'sms.worksEverywhereDesc': 'SMS அனைத்து தொலைபேசிகளிலும் செயல்படுகிறது, இணையம் இல்லாத அடிப்படை பொத்தான் தொலைபேசிகள் கூட',
        'sms.freeService': 'இலவச சேவை',
        'sms.freeServiceDesc': 'கட்டணங்கள் இல்லை, விவசாயிகளுக்கு முற்றிலும் இலவசம்',
        'sms.easyUnsubscribe': 'எளிதான குழுசேற்பு ரத்து',
        'sms.easyUnsubscribeDesc': 'நீங்கள் எந்த நேரத்திலும் குழுசேற்பை ரத்துசெய்யலாம்',
        'sms.confirmUnsubscribe': 'SMS எச்சரிக்கைகளிலிருந்து குழுசேற்பை ரத்துசெய்ய விரும்புகிறீர்களா?',
        'sms.cityLabel': 'நகரம்',
        'sms.alertTypesLabel': 'எச்சரிக்கை வகைகள்',
        'sms.alertTimeLabel': 'தினசரி எச்சரிக்கை நேரம்',
        'sms.languageLabel': 'மொழி',
        'sms.allWeatherAlerts': 'அனைத்து வானிலை எச்சரிக்கைகள்',
        'sms.heavyRainOnly': 'கனமான மழை மட்டும்',
        'sms.extremeTempOnly': 'தீவிர வெப்பநிலை மட்டும்',
        'sms.severeWeatherOnly': 'கடுமையான வானிலை மட்டும் (கனமான மழை, புயல்)',
        
        // Support
        'support.title': 'ஆதரவு',
        'support.aboutUs': 'எங்களைப் பற்றி',
        
        // Profile
        'profile.title': 'சுயவிவரம்',
        
        // Settings
        'settings.title': 'அமைப்புகள்',
        'settings.passwordChange': 'கடவுச்சொல் மாற்றம்',
        'settings.currentPassword': 'தற்போதைய கடவுச்சொல்',
        'settings.newPassword': 'புதிய கடவுச்சொல்',
        'settings.confirmPassword': 'புதிய கடவுச்சொல்லை உறுதிப்படுத்த',
        'settings.updatePassword': 'கடவுச்சொல்லை புதுப்பிக்க',
        'settings.deleteAccount': 'கணக்கை நீக்கு',
        'settings.deleteAccountWarning': 'எச்சரிக்கை: இந்த செயலை மீளமைக்க முடியாது. உங்கள் சுயவிவரம், விவசாய பகுதிகள் மற்றும் தாவரங்கள் உட்பட உங்கள் அனைத்து தரவுகளும் நிரந்தரமாக நீக்கப்படும்.',
        'settings.confirmDeleteText': 'இந்த செயல் நிரந்தரமானது மற்றும் மீளமைக்க முடியாது என்பதை நான் புரிந்துகொள்கிறேன். எனது கணக்கை நீக்க விரும்புகிறேன்.',
        'settings.deleteAccountButton': 'எனது கணக்கை நீக்கு',
        'settings.backToProfile': 'சுயவிவரத்திற்கு திரும்ப',
        'settings.goodMorning': 'காலை வணக்கம்',
        'settings.goodAfternoon': 'மதிய வணக்கம்',
        'settings.goodEvening': 'மாலை வணக்கம்',
        'settings.goodNight': 'இரவு வணக்கம்',
        
        // Greetings (for homepage)
        'greeting.goodMorning': 'காலை வணக்கம்',
        'greeting.goodAfternoon': 'மதிய வணக்கம்',
        'greeting.goodEvening': 'மாலை வணக்கம்',
        'greeting.goodNight': 'இரவு வணக்கம்',
        'greeting.user': '(பயனர்)',
        
        // Login
        'login.title': 'உள்நுழைவு',
        'login.username': 'பயனர்பெயர்',
        'login.password': 'கடவுச்சொல்',
        'login.rememberMe': 'என்னை நினைவில் கொள்',
        'login.forgotPassword': 'கடவுச்சொல் மறந்துவிட்டதா?',
        'login.signUpQuestion': 'கணக்கு இல்லையா?',
        'login.signUpLink': 'இங்கே பதிவு செய்யவும்',
        'login.backToSelection': 'உள்நுழைவு தேர்வுக்கு திரும்ப',
        'login.submitButton': 'உள்நுழைய',
        
        // Login Selector
        'loginSelector.title': 'WeatherGuard Harvest',
        'loginSelector.subtitle': 'உங்கள் உள்நுழைவு வகையை தேர்ந்தெடுக்கவும்',
        'loginSelector.normalUser': 'சாதாரண பயனர்',
        'loginSelector.normalUserDesc': 'வலைத்தள அம்சங்கள், வானிலை தரவு, பகுப்பாய்வு மற்றும் செலவு-லாப பகுப்பாய்வு கருவிகளுக்கு அணுகல்.',
        'loginSelector.adminUser': 'நிர்வாக பயனர்',
        'loginSelector.adminUserDesc': 'பயனர்களை நிர்வகிக்க, கணினி பதிவுகளை பார்க்க மற்றும் அமைப்புகளை கட்டமைக்க நிர்வாக பேனலுக்கு அணுகல்.',
        'loginSelector.backToHome': 'முகப்புக்கு',
        'loginSelector.showAdmin': 'நிர்வாக உள்நுழைவை காட்டு',
        'loginSelector.hideAdmin': 'நிர்வாக உள்நுழைவை மறை',
        
        // Signup
        'signup.title': 'உங்கள் கணக்கை உருவாக்க',
        'signup.createAccount': 'கணக்கை உருவாக்க',
        'signup.step1': 'படி 1: தனிப்பட்ட தகவல்',
        'signup.step2': 'படி 2: கணக்கு விவரங்கள்',
        'signup.firstName': 'முதல் பெயர்',
        'signup.lastName': 'கடைசி பெயர்',
        'signup.email': 'மின்னஞ்சல்',
        'signup.mobileNumber': 'மொபைல் எண்',
        'signup.dateOfBirth': 'பிறந்த தேதி',
        'signup.city': 'நகரம்',
        'signup.addressLine1': 'முகவரி வரி 1',
        'signup.addressLine2': 'முகவரி வரி 2',
        'signup.username': 'பயனர்பெயர்',
        'signup.password': 'கடவுச்சொல்',
        'signup.confirmPassword': 'கடவுச்சொல்லை உறுதிப்படுத்த',
        'signup.next': 'அடுத்து',
        'signup.previous': 'முந்தைய',
        'signup.finish': 'முடிக்க',
        'signup.nextCultivation': 'அடுத்து: விவசாய விவரங்கள்',
        'signup.cultivationDetailsDesc': 'உங்கள் விவசாய பகுதிகள் மற்றும் நீங்கள் வளர்க்க திட்டமிடும் தாவரங்கள் பற்றிய தகவலைச் சேர்க்கவும்.',
        'signup.addAnotherCultivation': '+ மற்றொரு விவசாய பகுதியை சேர்',
        'signup.completeRegistration': 'பதிவை முடிக்க',
        
        // Home/Index
        'home.heroTitle': 'ஒவ்வொரு வாழ்க்கைக்கும், ஒவ்வொரு நாளும் நிலையான விவசாய தீர்வுகளை வழங்க',
        'home.heroSubtitle': 'நேரடி வானிலை, பயிர் உதவிக்குறிப்புகள் மற்றும் உடனடி எச்சரிக்கைகள் அனைத்தையும் ஒரே இடத்தில் பெறுங்கள்.',
        'home.checkWeatherNow': 'இப்போது வானிலையை சரிபார்க்க',
        'home.joinNow': 'இப்போது சேர',
        'home.dashboardTitle': 'உங்கள் விவசாய டாஷ்போர்டு',
        'home.keyFeatures': 'முக்கிய அம்சங்கள்',
        'home.dashboardSubtitle': 'மீண்டும் வரவேற்கிறோம்! சமீபத்திய வானிலை புதுப்பிப்புகளை சரிபார்க்கவும் மற்றும் பயிர் திட்டமிடலுக்கான கருவிகளை ஆராயவும்.',
        'home.featuresSubtitle': 'நேரடி வானிலை நுண்ணறிவுகளுடன் எங்கள் கருவிகள் விவசாயிகளுக்கு எவ்வாறு உதவுகின்றன என்பதை கண்டறியவும்.',
        'home.selectPlantCategory': 'உங்கள் தாவர வகையை தேர்ந்தெடுக்கவும்',
        'home.weatherForecast': 'வானிலை முன்னறிவிப்பு',
        'home.weatherForecastDesc': 'இலங்கையின் அனைத்து நகரங்களுக்கும் நேரடி வானிலை தரவுக்கு அணுகல்.',
        'home.weatherForecastDescGuest': 'உங்கள் விவசாய நடவடிக்கைகளை திட்டமிட உள்ளூர் வானிலையை புதுப்பித்து வைக்கவும்.',
        'home.viewWeather': 'வானிலையை பார்க்க',
        'home.getStarted': 'தொடங்க',
        'home.smartAnalytics': 'ஸ்மார்ட் பகுப்பாய்வு',
        'home.smartAnalyticsDesc': 'பயிர் திட்டமிடல், உர மேம்படுத்தல் மற்றும் விளைச்சல் கணிப்பிற்கான நுண்ணறிவுகளை பெறுங்கள்.',
        'home.joinNowFeature': 'இப்போது சேர',
        'home.smsAlerts': 'SMS எச்சரிக்கைகள்',
        'home.smsAlertsDesc': 'உங்கள் தொலைபேசியில் SMS மூலம் தினசரி வானிலை எச்சரிக்கைகள் மற்றும் தாவர பாதுகாப்பு ஆலோசனைகளை பெறுங்கள். அனைத்து தொலைபேசிகளிலும் செயல்படுகிறது!',
        'home.subscribeNow': 'இப்போது குழுசேர',
        'home.plantTracking': 'தாவர கண்காணிப்பு',
        'home.plantTrackingDesc': 'உங்கள் பயிர்களின் வளர்ச்சி நிலைகளை கண்காணிக்கவும் மற்றும் தனிப்பயனாக்கப்பட்ட பராமரிப்பு பரிந்துரைகளை பெறுங்கள்.',
        'home.startTracking': 'கண்காணிப்பை தொடங்க',
        'home.noPlants': 'இந்த வகையில் தாவரங்கள் தேர்ந்தெடுக்கப்படவில்லை.',
        'home.addPlantsToProfile': 'உங்கள் சுயவிவரத்தில் தாவரங்களை சேர்க்க',
        'home.quickWeatherCheck': 'விரைவான வானிலை சரிபார்ப்பு',
        'home.smsAlertsDescGuest': 'சந்தை போக்குகள், மழை எச்சரிக்கைகள் மற்றும் பலவற்றை உங்கள் தொலைபேசிக்கு நேரடியாக SMS புதுப்பிப்புகளை பெறுங்கள்.',
        'home.signUp': 'பதிவு செய்',
        'home.farmerFeedback': 'விவசாயி கருத்து: முன் மற்றும் பின்',
        'home.feedbackBefore': 'முன்:',
        'home.feedbackAfter': 'பின்:',
        'home.feedbackSunilName': 'சுனில் பெரேரா - அனுராதபுரம்',
        'home.feedbackKamalName': 'கமல் விஜேசிங்கே - கேகிராவா',
        'home.feedbackSunil': '"கணிக்க முடியாத வானிலை காரணமாக நடவு திட்டமிடுவதில் நான் போராடினேன், திடீர் மழையால் அடிக்கடி பயிர்களை இழந்தேன்."',
        'home.feedbackKamal': '"சந்தை விலை மாற்றங்கள் என்னை ஆச்சரியப்படுத்தியது, எனது லாபத்தை பாதித்தது."',
        'home.expertGuidance': 'நிபுணர் விவசாய வழிகாட்டுதல்',
        'home.expertGuidanceDesc': 'எங்கள் அனுபவமிக்க விவசாய நிபுணர்களின் குழு உங்கள் விவசாய வெற்றியை அதிகரிக்க தனிப்பயனாக்கப்பட்ட வழிகாட்டுதலை வழங்குகிறது.',
        'home.readyToPlan': 'உங்கள் அடுத்த அறுவடையை திட்டமிட தயாரா?',
        'home.readyToPlanDesc': 'உங்கள் விளைச்சலை அதிகரிக்க மேம்பட்ட வானிலை முன்னறிவிப்பு மற்றும் விவசாய கருவிகளுக்கு அணுகல்.',
        'home.viewWeatherMap': 'வானிலை வரைபடத்தை பார்க்க',
        'home.getSupport': 'ஆதரவை பெற',
        'home.joinThousands': 'வெற்றிகரமான விவசாயிகளின் ஆயிரக்கணக்கானோருடன் சேருங்கள்',
        'home.joinThousandsDesc': 'சிறந்த விவசாய முடிவுகளுக்கு உங்கள் பயணத்தை WeatherGuard Harvest உடன் தொடங்குங்கள்.',
        'home.createAccount': 'கணக்கை உருவாக்க',
        'home.signIn': 'உள்நுழை',
        'home.expertGuidance': 'நிபுணர் விவசாய வழிகாட்டுதல்',
        'home.expertGuidanceDesc': 'எங்கள் அனுபவமிக்க விவசாய நிபுணர்களின் குழு உங்கள் விவசாய வெற்றியை அதிகரிக்க தனிப்பயனாக்கப்பட்ட வழிகாட்டுதலை வழங்குகிறது.',
        'home.readyToPlan': 'உங்கள் அடுத்த அறுவடையை திட்டமிட தயாரா?',
        'home.readyToPlanDesc': 'உங்கள் விளைச்சலை அதிகரிக்க மேம்பட்ட வானிலை முன்னறிவிப்பு மற்றும் விவசாய கருவிகளுக்கு அணுகல்.',
        'home.viewWeatherMap': 'வானிலை வரைபடத்தை பார்க்க',
        'home.getSupport': 'ஆதரவை பெற',
        'home.joinThousands': 'வெற்றிகரமான விவசாயிகளின் ஆயிரக்கணக்கானோருடன் சேருங்கள்',
        'home.joinThousandsDesc': 'சிறந்த விவசாய முடிவுகளுக்கு உங்கள் பயணத்தை WeatherGuard Harvest உடன் தொடங்குங்கள்.',
        'home.createAccount': 'கணக்கை உருவாக்க',
        'home.signIn': 'உள்நுழை',
        
        // Vegetables - Grains & Legumes
        'vegetable.beans': 'பீன்ஸ்',
        'vegetable.blackGram': 'கருப்பு உளுந்து',
        'vegetable.chickpeas': 'கடலை',
        'vegetable.corn': 'மக்காச்சோளம்',
        'vegetable.drumstick': 'முருங்கை',
        'vegetable.fenugreek': 'வெந்தயம்',
        'vegetable.greenGram': 'பச்சை பயிறு',
        'vegetable.yardLongBeans': 'நீண்ட பீன்ஸ்',
        'vegetable.lentils': 'பருப்பு',
        'vegetable.okra': 'வெண்டை',
        'vegetable.soybean': 'சோயா',
        'vegetable.cowpea': 'தொரை',
        'vegetable.pigeonPea': 'கடலை',
        'vegetable.limaBeans': 'லீமா பீன்ஸ்',
        'vegetable.wingedBeans': 'தம்பலை',
        'vegetable.horseGram': 'கொள்ளு',
        'vegetable.rice': 'அரிசி',
        'vegetable.fingerMillet': 'ராகி',
        'vegetable.maize': 'சோளம்',
        'vegetable.sorghum': 'சோளம்',
        // Vegetables - Fruity Vegetables
        'vegetable.tomato': 'தக்காளி',
        'vegetable.ashPlantain': 'வாழை',
        'vegetable.breadfruit': 'பலா',
        'vegetable.jackfruit': 'பலா',
        'vegetable.tenderJackfruit': 'பொலோஸ்',
        'vegetable.capsicum': 'குடை மிளகாய்',
        'vegetable.greenChilies': 'பச்சை மிளகாய்',
        'vegetable.redChilies': 'சிவப்பு மிளகாய்',
        'vegetable.bellPepper': 'மணி மிளகாய்',
        'vegetable.brinjal': 'கத்தரிக்காய்',
        'vegetable.thaiEggplant': 'தாய் கத்தரிக்காய்',
        'vegetable.cucumber': 'வெள்ளரிக்காய்',
        'vegetable.bitterGourd': 'பாகற்காய்',
        'vegetable.snakeGourd': 'புடலங்காய்',
        'vegetable.ridgeGourd': 'பீர்க்கங்காய்',
        'vegetable.bottleGourd': 'சுரைக்காய்',
        'vegetable.ashPumpkin': 'சாமை பூசணி',
        'vegetable.pumpkin': 'பூசணி',
        'vegetable.watermelon': 'தர்பூசணி',
        'vegetable.muskMelon': 'மஸ்க் முலாம்',
        'vegetable.cantaloupe': 'கேண்டலூப்',
        // Vegetables - Leafy & Stem Vegetables
        'vegetable.cabbage': 'முட்டைக்கோஸ்',
        'vegetable.lettuce': 'கீரை',
        'vegetable.spinach': 'கீரை',
        'vegetable.amaranthLeaves': 'தம்பலை',
        'vegetable.gotukola': 'வல்லாரை',
        'vegetable.kangkung': 'கங்குங்',
        'vegetable.agatiLeaves': 'அகத்தி இலை',
        'vegetable.mint': 'புதினா',
        'vegetable.curryLeaves': 'கருவேப்பிலை',
        'vegetable.corianderLeaves': 'கொத்தமல்லி',
        'vegetable.fenugreekLeaves': 'வெந்தய இலை',
        'vegetable.mustardGreens': 'கடுகு கீரை',
        'vegetable.radishLeaves': 'முள்ளங்கி இலை',
        'vegetable.beetrootLeaves': 'பீட்ரூட் இலை',
        'vegetable.sweetPotatoLeaves': 'சர்க்கரைவள்ளிக்கிழங்கு இலை',
        'vegetable.cassavaLeaves': 'மரவள்ளிக்கிழங்கு இலை',
        'vegetable.pumpkinLeaves': 'பூசணி இலை',
        'vegetable.drumstickLeaves': 'முருங்கை இலை',
        'vegetable.moringaLeaves': 'முருங்கை இலை',
        'vegetable.rocketLeaves': 'ராக்கெட் இலை',
        'vegetable.basil': 'துளசி',
        'vegetable.springOnions': 'வெங்காயம்',
        'vegetable.leeks': 'லீக்ஸ்',
        'vegetable.celery': 'செலரி',
        'vegetable.chineseCabbage': 'சீன முட்டைக்கோஸ்',
        'vegetable.pakChoi': 'பாக் சோய்',
        'vegetable.bokChoy': 'போக் சோய்',
        // Vegetables - Root & Tuberous Vegetables
        'vegetable.potato': 'உருளைக்கிழங்கு',
        'vegetable.sweetPotato': 'சர்க்கரைவள்ளிக்கிழங்கு',
        'vegetable.cassava': 'மரவள்ளிக்கிழங்கு',
        'vegetable.carrot': 'கேரட்',
        'vegetable.radish': 'முள்ளங்கி',
        'vegetable.beetroot': 'பீட்ரூட்',
        'vegetable.onion': 'வெங்காயம்',
        'vegetable.garlic': 'பூண்டு',
        'vegetable.ginger': 'இஞ்சி',
        'vegetable.turmeric': 'மஞ்சள்',
        'vegetable.yam': 'கிழங்கு',
        'vegetable.elephantFootYam': 'சேனைக்கிழங்கு',
        'vegetable.taro': 'சேப்பங்கிழங்கு',
        'vegetable.arrowroot': 'கூவைக்கிழங்கு',
        'vegetable.lotusRoots': 'தாமரை கிழங்கு',
        'vegetable.kohila': 'கோகிலா',
        'vegetable.chinesePotato': 'சீன உருளைக்கிழங்கு',
        'vegetable.purpleYam': 'ஊதா கிழங்கு',
        'vegetable.waterYam': 'நீர் கிழங்கு',
        'vegetable.greaterYam': 'பெரிய கிழங்கு',
        'vegetable.lesserYam': 'சிறிய கிழங்கு',
        'vegetable.turnip': 'டர்னிப்',
        'vegetable.parsnip': 'பார்ஸ்னிப்',
        'vegetable.daikonRadish': 'டைகோன் முள்ளங்கி',
        
        // Cities - North Central Province
        'city.anuradhapura': 'அனுராதபுரம்',
        'city.mihintale': 'மிஹிந்தலை',
        'city.kekirawa': 'கேகிராவா',
        'city.medawachchiya': 'மேதவச்சியா',
        'city.habarana': 'ஹபரண',
        'city.eppawala': 'எப்பாவலா',
        'city.galenbindunuwewa': 'கலென்பிண்டுனுவேவா',
        'city.galnewa': 'கல்நேவா',
        'city.horowupotana': 'ஹொரொவுபொதன',
        'city.kahatagasdigiliya': 'கஹதகஸ்திகிலியா',
        'city.bulnewa': 'புல்நேவா',
        'city.ganewalpola': 'கனேவல்பொல',
        'city.polonnaruwa': 'பொலன்னறுவை',
        // Cities - North Western Province
        'city.kurunegala': 'குருணாகல',
        'city.puttalam': 'புத்தளம்',
        'city.chilaw': 'சிலாவ்',
        'city.kuliyapitiya': 'குலியாபிடியா',
        'city.narammala': 'நரம்மல',
        // Cities - Western Province
        'city.colombo': 'கொழும்பு',
        'city.gampaha': 'கம்பஹா',
        'city.kalutara': 'களுத்தர',
        'city.negombo': 'நீகொம்போ',
        'city.moratuwa': 'மொரட்டுவ',
        'city.panadura': 'பனதுர',
        // Cities - Central Province
        'city.kandy': 'கண்டி',
        'city.nuwaraEliya': 'நுவரெலியா',
        'city.matale': 'மாத்தளை',
        'city.hatton': 'ஹட்டன்',
        'city.gampola': 'கம்பொல',
        // Cities - Sabaragamuwa Province
        'city.ratnapura': 'ரத்னபுர',
        'city.kegalle': 'கேகாலை',
        'city.balangoda': 'பலங்கொட',
        'city.avissawella': 'அவிஸ்ஸாவெல்ல',
        // Cities - Southern Province
        'city.galle': 'காலி',
        'city.matara': 'மாத்தறை',
        'city.hambantota': 'ஹம்பந்தோட்ட',
        'city.weligama': 'வெலிகம',
        'city.tangalle': 'தங்கல்ல',
        // Cities - Uva Province
        'city.badulla': 'பதுளை',
        'city.monaragala': 'மொனராகல',
        'city.bandarawela': 'பண்டாரவெல',
        'city.haputale': 'ஹபுதலே',
        // Cities - Eastern Province
        'city.batticaloa': 'மட்டக்களப்பு',
        'city.trincomalee': 'திருகோணமலை',
        'city.ampara': 'அம்பாறை',
        'city.kalmunai': 'கல்முனை',
        // Cities - Northern Province
        'city.jaffna': 'யாழ்ப்பாணம்',
        'city.vavuniya': 'வவுனியா',
        'city.kilinochchi': 'கிளிநொச்சி',
        'city.mullaitivu': 'முல்லைத்தீவு',
        
        // Profile
        'profile.yourProfile': 'உங்கள் சுயவிவரம்',
        'profile.username': 'பயனர்பெயர்',
        'profile.email': 'மின்னஞ்சல்',
        'profile.firstName': 'முதல் பெயர்',
        'profile.lastName': 'கடைசி பெயர்',
        'profile.mobileNumber': 'மொபைல் எண்',
        'profile.dateOfBirth': 'பிறந்த தேதி',
        'profile.city': 'நகரம்',
        'profile.addressLine1': 'முகவரி வரி 1',
        'profile.addressLine2': 'முகவரி வரி 2',
        'profile.changePassword': 'கடவுச்சொல்லை மாற்ற',
        'profile.cultivationAreas': 'உங்கள் விவசாய பகுதிகள்',
        'profile.location': 'இடம்',
        'profile.surfaceArea': 'மேற்பரப்பு பகுதி',
        'profile.initialCosts': 'ஆரம்ப செலவுகள்',
        'profile.seedlings': 'நாற்றுகள்',
        'profile.fertilizer': 'உரம்',
        'profile.resources': 'வளங்கள்',
        'profile.plantsInArea': 'இந்த பகுதியில் உள்ள தாவரங்கள்:',
        'profile.noPlantsYet': 'இன்னும் தாவரங்கள் சேர்க்கப்படவில்லை.',
        'profile.addNewPlant': 'புதிய தாவரத்தை சேர்',
        'profile.plantName': 'தாவர பெயர்',
        'profile.category': 'வகை',
        'profile.addPlant': 'தாவரத்தை சேர்',
        'profile.noCultivationAreas': 'இன்னும் விவசாய பகுதிகள் சேர்க்கப்படவில்லை. கீழே உங்கள் முதல் விவசாய பகுதியை சேர்க்கவும்.',
        'profile.addNewCultivationArea': 'புதிய விவசாய பகுதியை சேர்',
        'profile.areaName': 'பகுதி பெயர்',
        'profile.subArea': 'உப பகுதி',
        'profile.surfaceAreaInput': 'மேற்பரப்பு பகுதி (சதுர மீட்டர் அல்லது ஏக்கர்)',
        'profile.addCultivationArea': 'விவசாய பகுதியை சேர்',
        'profile.selectCity': 'நகரத்தை தேர்ந்தெடுக்கவும்',
        'profile.selectPlant': 'தாவரத்தை தேர்ந்தெடுக்கவும்',
        
        // Support
        'support.contactUs': 'உங்கள் விவசாய தேவைகளுக்கு உதவிக்காக எங்களை தொடர்பு கொள்ளவும்.',
        'support.name': 'பெயர்',
        'support.email': 'மின்னஞ்சல்',
        'support.message': 'செய்தி',
        'support.sendMessage': 'செய்தியை அனுப்ப',
        'support.phone': 'தொலைபேசி',
        'nav.contactSupport': 'ஆதரவைத் தொடர்பு கொள்ள',
        
        // About Us
        'about.title': 'WeatherGuard Harvest பற்றி',
        'about.subtitle': 'நவீன விவசாயத்தில் உங்கள் அர்ப்பணிக்கப்பட்ட கூட்டாளி',
        'about.intro': 'நவீன விவசாயத்தில் உங்கள் அர்ப்பணிக்கப்பட்ட கூட்டாளியான WeatherGuard Harvest-க்கு வரவேற்கிறோம். அதிகரிக்கும் விளைச்சல் மற்றும் லாபம் துல்லியமான நேரம் மற்றும் தகவலறிந்த முடிவுகளைப் பொறுத்தது என்பதை நாங்கள் புரிந்துகொள்கிறோம்.',
        'about.intro2': 'அதனால்தான் விவசாயிகளுக்கு அவர்கள் முன்னேறத் தேவையான அத்தியாவசிய கருவிகளை வழங்குகிறோம்:',
        'about.feature1Title': 'நேரமான எச்சரிக்கைகள்',
        'about.feature1Desc': 'உங்கள் பயிர்களைப் பாதுகாக்க SMS மற்றும் தள அறிவிப்புகள் மூலம் முக்கியமான வானிலை எச்சரிக்கைகளை நேரடியாகப் பெறவும்.',
        'about.feature2Title': 'புத்திசாலித்தனமான திட்டமிடல்',
        'about.feature2Desc': 'நிதி முடிவுகளை கணிக்க மற்றும் உங்கள் நடவு உத்திகளை மேம்படுத்த எங்கள் மேம்பட்ட லாப கணக்கீட்டு முன்னறிவிப்பைப் பயன்படுத்தவும்.',
        'about.feature3Title': 'வளர்ச்சி நுண்ணறிவுகள்',
        'about.feature3Desc': 'எங்கள் தாவர கண்காணிப்பு அம்சத்துடன் உங்கள் பயிர்களைக் கண்காணித்து, உங்கள் அறுவடையை அதிகரிக்க தரவு-இயக்க மேம்பாடு பரிந்துரைகளைப் பெறவும்.',
        'about.missionTitle': 'எங்கள் நோக்கம்',
        'about.missionText': 'WeatherGuard Harvest கணிக்க முடியாத வானிலையை கணிக்கக்கூடிய வெற்றியாக மாற்றுவதற்கும், ஆரோக்கியமான பயிர் மற்றும் நீங்கள் செல்வந்தராக இருப்பதை உறுதிப்படுத்துவதற்கும் உறுதிபூண்டுள்ளது.',
        'about.getStarted': 'தொடங்க',
        'about.joinUs': 'இன்றே எங்களுடன் சேருங்கள்',
        
        // Weather
        'weather.selectCity': 'நகரத்தை தேர்ந்தெடுக்கவும்',
        'weather.getWeather': 'வானிலையை பெற',
        'weather.temperature': 'வெப்பநிலை',
        'weather.humidity': 'ஈரப்பதம்',
        'weather.windSpeed': 'காற்று வேகம்',
        'weather.pressure': 'அழுத்தம்',
        'weather.visibility': 'தெரிவு',
        'weather.clouds': 'மேகங்கள்',
        'weather.description': 'விளக்கம்',
        'weather.feelsLike': 'எப்படி உணர்கிறது',
        'weather.hourlyForecast': 'மணிநேர முன்னறிவிப்பு',
        'weather.dailyForecast': 'தினசரி முன்னறிவிப்பு',
        
        // Cost Profit Analysis
        'costProfit.selectVegetable': 'காய்கறியை தேர்ந்தெடுக்கவும்',
        'costProfit.searchVegetable': 'காய்கறியை தேட',
        'costProfit.selectedPlants': 'தேர்ந்தெடுக்கப்பட்ட தாவரங்கள்',
        'costProfit.cultivationArea': 'விவசாய பகுதி',
        'costProfit.areaName': 'பகுதி பெயர்',
        'costProfit.city': 'நகரம்',
        'costProfit.subArea': 'உப பகுதி',
        'costProfit.surfaceArea': 'மேற்பரப்பு பகுதி',
        'costProfit.addCultivation': 'விவசாயத்தை சேர்',
        'costProfit.removeCultivation': 'அகற்ற',
        'costProfit.initialCosts': 'ஆரம்ப செலவுகள்',
        'costProfit.seedlingCost': 'நாற்று செலவு (ரூ.)',
        'costProfit.fertilizerCost': 'உரம் செலவு (ரூ.)',
        'costProfit.resourceCost': 'வள செலவு (ரூ.)',
        'costProfit.additionalCost': 'கூடுதல் செலவு',
        'costProfit.costName': 'செலவு பெயர்',
        'costProfit.amount': 'தொகை (ரூ.)',
        'costProfit.addCost': 'செலவை சேர்',
        'costProfit.removeCost': 'அகற்ற',
        'costProfit.calculate': 'கணக்கிட',
        'costProfit.totalCost': 'மொத்த செலவு',
        'costProfit.expectedProfit': 'எதிர்பார்க்கப்படும் லாபம்',
        'costProfit.profitMargin': 'லாப விளிம்பு',
        'costProfit.viewHistory': 'வரலாற்றை பார்க்க',
        'costProfit.history': 'செலவு-லாப வரலாறு',
        'costProfit.date': 'தேதி',
        'costProfit.vegetable': 'காய்கறி',
        'costProfit.totalCostCol': 'மொத்த செலவு',
        'costProfit.expectedProfitCol': 'எதிர்பார்க்கப்படும் லாபம்',
        'costProfit.profitMarginCol': 'லாப விளிம்பு',
        'costProfit.noHistory': 'கணக்கீடு வரலாறு கிடைக்கவில்லை.',
        'costProfit.calculateCost': 'செலவை கணக்கிட',
        'costProfit.addInitialCost': 'ஆரம்ப செலவை சேர் (ரூ.)',
        'costProfit.enterInitialCost': 'ஆரம்ப செலவை உள்ளிட',
        'costProfit.addSubsequentCost': 'அடுத்தடுத்த செலவை சேர் (ரூ.)',
        'costProfit.enterSubsequentCost': 'அடுத்தடுத்த செலவை உள்ளிட',
        'costProfit.addCost': 'செலவை சேர்',
        'costProfit.subsequentCosts': 'அடுத்தடுத்த செலவுகள்:',
        'costProfit.subsequentTotal': 'அடுத்தடுத்த மொத்தம்:',
        'costProfit.calculateTotalCost': 'மொத்த செலவை கணக்கிட',
        'costProfit.resetCosts': 'செலவுகளை மீட்டமை',
        'costProfit.totalCost': 'மொத்த செலவு:',
        'costProfit.calculateRevenue': 'வருவாயை கணக்கிட',
        'costProfit.enterMarketPrice': 'தற்போதைய சந்தை விலையை உள்ளிட (ரூ./கி.கி)',
        'costProfit.enterMarketPricePlaceholder': 'கிலோகிராமுக்கு சந்தை விலையை உள்ளிட',
        'costProfit.enterHarvest': 'விளைச்சலை உள்ளிட (கி.கி)',
        'costProfit.enterHarvestPlaceholder': 'கிலோகிராமில் விளைச்சல் எடையை உள்ளிட',
        'costProfit.totalRevenue': 'மொத்த வருவாய்:',
        'costProfit.profit': 'லாபம்',
        'costProfit.calculateProfit': 'லாபத்தை கணக்கிட',
        'costProfit.takeReport': 'ஒரு அறிக்கையை எடு',
        'costProfit.history': 'வரலாறு',
        'costProfit.netProfit': 'நிகர லாபம்:',
        'costProfit.profitableBusiness': 'லாபகரமான வணிகம்!',
        'costProfit.lossIncurred': 'இழப்பு ஏற்பட்டது',
        'costProfit.clearAllData': 'அனைத்து தரவையும் அழிக்க',
        'costProfit.goToAnalysis': 'உங்கள் முதல் பதிவை கணக்கிட மற்றும் சேமிக்க பகுப்பாய்வு பக்கத்திற்கு செல்லவும்.',
        'costProfit.backToAnalysis': 'பகுப்பாய்வுக்கு திரும்ப',
        'costProfit.totalRevenueCol': 'மொத்த வருவாய் (ரூ.)',
        'costProfit.marketPriceCol': 'சந்தை விலை (ரூ./கி.கி)',
        'costProfit.profitCol': 'லாபம் (ரூ.)',
        
        // Analytics
        'analytics.marketPredictions': 'சந்தை கணிப்புகள்',
        'analytics.cropRecommendations': 'பயிர் பரிந்துரைகள்',
        'analytics.fertilizerOptimization': 'உர மேம்படுத்தல்',
        'analytics.yieldForecast': 'விளைச்சல் முன்னறிவிப்பு',
        
        // SMS Alerts
        'sms.subscribe': 'SMS எச்சரிக்கைகளுக்கு குழுசேர',
        'sms.phoneNumber': 'தொலைபேசி எண்',
        'sms.selectCity': 'நகரத்தை தேர்ந்தெடுக்கவும்',
        'sms.subscribeButton': 'குழுசேர',
        'sms.yourSubscriptions': 'உங்கள் குழுசேற்புகள்',
        'sms.active': 'செயலில்',
        'sms.inactive': 'செயலற்ற',
        'sms.unsubscribe': 'குழுசேற்பை ரத்துசெய்',
        'sms.info': 'தகவல்',
        'sms.infoText': 'SMS மூலம் தினசரி வானிலை எச்சரிக்கைகள் மற்றும் தாவர பாதுகாப்பு ஆலோசனைகளை நீங்கள் பெறுவீர்கள். இந்த சேவை அனைத்து தொலைபேசிகளிலும் செயல்படுகிறது!',
        
        // 404
        '404.title': '404 - பக்கம் கிடைக்கவில்லை',
        '404.message': 'மன்னிக்கவும், நீங்கள் தேடும் பக்கம் இல்லை.',
        '404.goHome': 'முகப்புக்கு'
    }
};

// Language management
let currentLanguage = localStorage.getItem('language') || localStorage.getItem('lang') || 'en';

function getTranslation(key) {
    return translations[currentLanguage]?.[key] || translations['en'][key] || key;
}

// Function to translate greeting
function translateGreeting() {
    const greetingText = document.getElementById('greeting-text');
    if (!greetingText) return;
    
    // Store original English greeting if not already stored
    // Check if current text is already a translation by comparing with all possible translations
    if (!greetingText.dataset.originalGreeting) {
        const currentText = greetingText.textContent.trim();
        
        // Reverse map: check if current text is a translation
        const reverseMap = {
            'greeting.goodMorning': ['Good Morning', 'සුභ උදෑසනක්', 'காலை வணக்கம்'],
            'greeting.goodAfternoon': ['Good Afternoon', 'සුභ දහවලක්', 'மதிய வணக்கம்'],
            'greeting.goodEvening': ['Good Evening', 'සුභ සන්ධ්‍යාවක්', 'மாலை வணக்கம்'],
            'greeting.goodNight': ['Good Night', 'සුභ රාත්‍රියක්', 'இரவு வணக்கம்']
        };
        
        // Find which English greeting this corresponds to
        let foundOriginal = null;
        for (const [key, values] of Object.entries(reverseMap)) {
            if (values.includes(currentText)) {
                foundOriginal = values[0]; // English version
                break;
            }
        }
        
        // Store the original English greeting
        greetingText.dataset.originalGreeting = foundOriginal || currentText;
    }
    
    const originalGreeting = greetingText.dataset.originalGreeting;
    
    const greetingMap = {
        'Good Morning': 'greeting.goodMorning',
        'Good Afternoon': 'greeting.goodAfternoon',
        'Good Evening': 'greeting.goodEvening',
        'Good Night': 'greeting.goodNight'
    };
    
    const translationKey = greetingMap[originalGreeting];
    if (translationKey) {
        const translated = getTranslation(translationKey);
        if (translated && translated !== translationKey) {
            greetingText.textContent = translated;
            console.log('Greeting translated:', originalGreeting, '->', translated, '(language:', currentLanguage + ')');
        }
    }
}

function updateLanguageSelector() {
    const langSelector = document.querySelector('.language-selector-toggle');
    if (langSelector) {
        // Use native language names
        const langNames = {
            'en': 'English',
            'si': 'සිංහල',
            'ta': 'தமிழ்'
        };
        
        // Preserve the icon if it exists
        const icon = langSelector.querySelector('i.fa-language');
        const newText = langNames[currentLanguage] || 'English';
        
        if (icon) {
            // If icon exists, remove all text nodes (preserving the icon)
            const nodesToRemove = [];
            let node = langSelector.firstChild;
            while (node) {
                if (node.nodeType === Node.TEXT_NODE) {
                    nodesToRemove.push(node);
                }
                node = node.nextSibling;
            }
            nodesToRemove.forEach(n => n.remove());
            
            // Add the new text after the icon
            const textNode = document.createTextNode(' ' + newText);
            if (icon.nextSibling) {
                langSelector.insertBefore(textNode, icon.nextSibling);
            } else {
                langSelector.appendChild(textNode);
            }
        } else {
            // If no icon exists, just update the text
            langSelector.textContent = newText;
        }
    }
}

function translatePage() {
    console.log('translatePage: Starting translation, currentLanguage:', currentLanguage);
    
    // Translate greeting first
    translateGreeting();
    
    // Translate all elements with data-i18n attribute
    var elements = document.querySelectorAll('[data-i18n]');
    console.log('translatePage: Found', elements.length, 'elements to translate');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (!key) return;
        
        const translation = getTranslation(key);
        
        // Skip language selector toggle - it's updated separately
        if (element.classList.contains('language-selector-toggle')) {
            return;
        }
        
        // Handle different element types
        if (element.tagName === 'INPUT') {
            if (element.type === 'submit' || element.type === 'button') {
                element.value = translation;
            } else if (element.type === 'text' || element.type === 'password' || element.type === 'email' || element.type === 'number' || element.type === 'tel') {
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = translation;
                }
            }
        } else if (element.tagName === 'TEXTAREA') {
            if (element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            }
        } else if (element.tagName === 'OPTION') {
            // Options - translate text content
            element.textContent = translation;
        } else if (element.tagName === 'BUTTON') {
            // Buttons - translate text content
            element.textContent = translation;
        } else {
            // For other elements (div, span, p, h1-h6, a, label, etc.)
            if (element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else if (element.hasAttribute('title')) {
                element.title = translation;
            } else if (element.hasAttribute('aria-label')) {
                element.setAttribute('aria-label', translation);
            } else {
                // For text content elements (span, p, h1-h6, a, label, div, etc.)
                // Check if this element has direct child elements with data-i18n
                const directChildrenWithI18n = Array.from(element.children).filter(child => child.hasAttribute && child.hasAttribute('data-i18n'));
                
                if (directChildrenWithI18n.length > 0) {
                    // This element has children with data-i18n, so don't replace its content
                    // The children will be translated separately
                    return;
                }
                
                // Check if element has any child elements at all
                if (element.children.length > 0) {
                    // Has children but none with data-i18n
                    // Check if there are any text nodes that should be replaced
                    let hasTextNodes = false;
                    for (let i = 0; i < element.childNodes.length; i++) {
                        if (element.childNodes[i].nodeType === 3) { // Text node
                            hasTextNodes = true;
                            break;
                        }
                    }
                    
                    if (hasTextNodes) {
                        // Replace only the first text node, preserving HTML structure
                        for (let i = 0; i < element.childNodes.length; i++) {
                            if (element.childNodes[i].nodeType === 3) { // Text node
                                // Check if this text node is not inside a child with data-i18n
                                let parent = element.childNodes[i].parentNode;
                                let shouldReplace = true;
                                while (parent && parent !== element) {
                                    if (parent.hasAttribute && parent.hasAttribute('data-i18n')) {
                                        shouldReplace = false;
                                        break;
                                    }
                                    parent = parent.parentNode;
                                }
                                if (shouldReplace) {
                                    element.childNodes[i].textContent = translation;
                                    // Remove other text nodes
                                    for (let j = i + 1; j < element.childNodes.length; j++) {
                                        if (element.childNodes[j].nodeType === 3) {
                                            element.removeChild(element.childNodes[j]);
                                            j--; // Adjust index after removal
                                        }
                                    }
                                    break;
                                }
                            }
                        }
                    } else {
                        // No text nodes, but has children - don't replace
                        // This might be a container element
                    }
                } else {
                    // No children, safe to replace entire content
                    element.textContent = translation;
                }
            }
        }
    });
    
    // Update language selector display with native names
    updateLanguageSelector();
    
    // Also update the language dropdown items to show native names
    const langLinks = document.querySelectorAll('.language-selector .dropdown-menu a.lang-select');
    langLinks.forEach(link => {
        const lang = link.getAttribute('data-lang');
        if (lang) {
            if (lang === 'en') {
                link.textContent = 'English';
            } else if (lang === 'si') {
                link.textContent = 'සිංහල';
            } else if (lang === 'ta') {
                link.textContent = 'தமிழ்';
            }
        }
    });
}

function setLanguage(lang) {
    console.log('setLanguage called with:', lang);
    
    if (!translations[lang]) {
        console.warn('Language not found:', lang);
        return false;
    }
    
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    localStorage.setItem('lang', lang); // Also save as 'lang' for compatibility
    
    if (document.documentElement) {
        document.documentElement.lang = lang;
    }
    
    // Update global reference
    // Function to translate city names
    window.translateCityName = function(englishCityName) {
        if (!englishCityName || !window.getTranslation || typeof window.getTranslation !== 'function') {
            return englishCityName;
        }
        
        // Normalize city name (handle spaces, special cases)
        const normalizedName = englishCityName.trim();
        
        // Map city names to translation keys
        const cityMap = {
            'Anuradhapura': 'city.anuradhapura',
            'Mihintale': 'city.mihintale',
            'Kekirawa': 'city.kekirawa',
            'Medawachchiya': 'city.medawachchiya',
            'Habarana': 'city.habarana',
            'Eppawala': 'city.eppawala',
            'Galenbindunuwewa': 'city.galenbindunuwewa',
            'Galnewa': 'city.galnewa',
            'Horowupotana': 'city.horowupotana',
            'Kahatagasdigiliya': 'city.kahatagasdigiliya',
            'Bulnewa': 'city.bulnewa',
            'Ganewalpola': 'city.ganewalpola',
            'Polonnaruwa': 'city.polonnaruwa',
            'Kurunegala': 'city.kurunegala',
            'Puttalam': 'city.puttalam',
            'Chilaw': 'city.chilaw',
            'Kuliyapitiya': 'city.kuliyapitiya',
            'Narammala': 'city.narammala',
            'Colombo': 'city.colombo',
            'Gampaha': 'city.gampaha',
            'Kalutara': 'city.kalutara',
            'Negombo': 'city.negombo',
            'Moratuwa': 'city.moratuwa',
            'Panadura': 'city.panadura',
            'Kandy': 'city.kandy',
            'Nuwara Eliya': 'city.nuwaraEliya',
            'Matale': 'city.matale',
            'Hatton': 'city.hatton',
            'Gampola': 'city.gampola',
            'Ratnapura': 'city.ratnapura',
            'Kegalle': 'city.kegalle',
            'Balangoda': 'city.balangoda',
            'Avissawella': 'city.avissawella',
            'Galle': 'city.galle',
            'Matara': 'city.matara',
            'Hambantota': 'city.hambantota',
            'Weligama': 'city.weligama',
            'Tangalle': 'city.tangalle',
            'Badulla': 'city.badulla',
            'Monaragala': 'city.monaragala',
            'Bandarawela': 'city.bandarawela',
            'Haputale': 'city.haputale',
            'Batticaloa': 'city.batticaloa',
            'Trincomalee': 'city.trincomalee',
            'Ampara': 'city.ampara',
            'Kalmunai': 'city.kalmunai',
            'Jaffna': 'city.jaffna',
            'Vavuniya': 'city.vavuniya',
            'Kilinochchi': 'city.kilinochchi',
            'Mullaitivu': 'city.mullaitivu'
        };
        
        const translationKey = cityMap[normalizedName];
        if (translationKey) {
            const translated = window.getTranslation(translationKey);
            if (translated && translated !== translationKey) {
                return translated;
            }
        }
        
        return englishCityName;
    };
    
    // Function to translate province names
    window.translateProvinceName = function(englishProvinceName) {
        if (!englishProvinceName || !window.getTranslation || typeof window.getTranslation !== 'function') {
            return englishProvinceName;
        }
        
        // Normalize province name (handle spaces, special cases)
        const normalizedName = englishProvinceName.trim();
        
        // Map province names to translation keys
        const provinceMap = {
            'North Central': 'province.northCentral',
            'North Western': 'province.northWestern',
            'Western': 'province.western',
            'Central': 'province.central',
            'Sabaragamuwa': 'province.sabaragamuwa',
            'Southern': 'province.southern',
            'Uva': 'province.uva',
            'Eastern': 'province.eastern',
            'Northern': 'province.northern'
        };
        
        const translationKey = provinceMap[normalizedName];
        if (translationKey) {
            const translated = window.getTranslation(translationKey);
            if (translated && translated !== translationKey) {
                return translated;
            }
        }
        
        return englishProvinceName;
    };
    
    // Function to translate sub-area names
    window.translateSubAreaName = function(englishSubAreaName) {
        if (!englishSubAreaName || !window.getTranslation || typeof window.getTranslation !== 'function') {
            return englishSubAreaName;
        }
        
        // Normalize sub-area name (handle spaces, special cases)
        const normalizedName = englishSubAreaName.trim();
        
        // Map sub-area names to translation keys (convert spaces and special chars to camelCase)
        // Key format: subArea.{normalizedName}
        const subAreaKey = 'subArea.' + normalizedName.toLowerCase()
            .replace(/[^a-z0-9]+/g, '') // Remove all non-alphanumeric
            .replace(/^(.)/, (match) => match.toLowerCase()); // Ensure first char is lowercase
        
        const translated = window.getTranslation(subAreaKey);
        if (translated && translated !== subAreaKey) {
            return translated;
        }
        
        // If no direct translation found, return original
        return englishSubAreaName;
    };
    
    window.currentLanguage = lang;
    
    // Translate immediately
    console.log('setLanguage: Calling translatePage()...');
    var elementsToTranslate = document.querySelectorAll('[data-i18n]');
    console.log('setLanguage: Found', elementsToTranslate.length, 'elements with data-i18n attribute');
    
    try {
        translatePage();
        console.log('✓ setLanguage: translatePage() completed successfully');
        
        // Dispatch language changed event
        if (typeof window !== 'undefined') {
            const event = new CustomEvent('languageChanged', { detail: { language: lang } });
            window.dispatchEvent(event);
            console.log('✓ setLanguage: Dispatched languageChanged event');
        }
    } catch (e) {
        console.error('✗ setLanguage: Translation error:', e);
        console.error('Error stack:', e.stack);
        // Retry after a short delay
        setTimeout(function() {
            try {
                console.log('setLanguage: Retrying translatePage()...');
                translatePage();
                console.log('✓ setLanguage: Retry successful');
                
                // Dispatch language changed event after retry
                if (typeof window !== 'undefined') {
                    const event = new CustomEvent('languageChanged', { detail: { language: lang } });
                    window.dispatchEvent(event);
                }
            } catch (e2) {
                console.error('✗ setLanguage: Translation retry error:', e2);
                console.error('Retry error stack:', e2.stack);
            }
        }, 100);
    }
    
    return true;
}

// Make setLanguage globally available IMMEDIATELY (before DOMContentLoaded)
// Use multiple methods to ensure it's available
// This MUST execute even if there are errors elsewhere in the file
(function() {
    try {
        console.log('translations.js: Attempting to export setLanguage...');
        console.log('translations.js: setLanguage function exists?', typeof setLanguage);
        console.log('translations.js: window exists?', typeof window !== 'undefined');
        
        if (typeof window !== 'undefined') {
            // Export functions immediately
            window.setLanguage = setLanguage;
            window.getTranslation = getTranslation;
            window.translatePage = translatePage;
            window.currentLanguage = currentLanguage;
            
            // Also set it on globalThis for modern browsers
            if (typeof globalThis !== 'undefined') {
                globalThis.setLanguage = setLanguage;
                globalThis.getTranslation = getTranslation;
                globalThis.translatePage = translatePage;
                globalThis.currentLanguage = currentLanguage;
            }
            
            // Debug: verify it was set
            console.log('✓ translations.js: setLanguage exported to window, type:', typeof window.setLanguage);
            console.log('✓ translations.js: setLanguage function exists:', typeof window.setLanguage === 'function');
            
            // Double-check it's actually callable
            if (typeof window.setLanguage === 'function') {
                console.log('✓ translations.js: setLanguage is callable');
            } else {
                console.error('✗ translations.js: setLanguage is not a function after export!');
            }
        } else {
            console.error('✗ translations.js: window is undefined');
        }
    } catch (e) {
        console.error('✗ translations.js: Error exporting setLanguage:', e);
        console.error('Error details:', e.message, e.stack);
        // Even if there's an error, try to export a minimal version
        try {
            if (typeof window !== 'undefined' && typeof setLanguage === 'function') {
                window.setLanguage = setLanguage;
                console.log('✓ translations.js: Exported setLanguage despite error');
            }
        } catch (e2) {
            console.error('✗ translations.js: Failed to export even minimal version:', e2);
        }
    }
})();

// Initialize function
function initTranslation() {
    // Get the saved language from localStorage (might have changed)
    var savedLang = localStorage.getItem('language') || localStorage.getItem('lang') || 'en';
    currentLanguage = savedLang; // Update currentLanguage
    
    if (document.body) {
        console.log('initTranslation: Applying language', savedLang);
        setLanguage(savedLang);
    } else {
        console.log('initTranslation: Body not ready, retrying...');
        setTimeout(function() {
            if (document.body) {
                setLanguage(savedLang);
            }
        }, 100);
    }
}

// Initialize language on page load - be aggressive about it
(function initializeOnLoad() {
    var savedLang = localStorage.getItem('language') || localStorage.getItem('lang') || 'en';
    currentLanguage = savedLang; // Update currentLanguage immediately
    
    console.log('translations.js: Initializing with language:', savedLang);
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            console.log('translations.js: DOMContentLoaded, initializing...');
            initTranslation();
        });
    } else {
        // DOM is already loaded or loading
        if (document.body) {
            console.log('translations.js: Body ready, initializing immediately...');
            initTranslation();
        } else {
            // Wait a bit for body to be available
            console.log('translations.js: Waiting for body...');
            setTimeout(function() {
                if (document.body) {
                    initTranslation();
                } else {
                    // Try again
                    setTimeout(initTranslation, 200);
                }
            }, 100);
        }
    }
    
    // Also try after a delay as backup
    setTimeout(initTranslation, 200);
    setTimeout(initTranslation, 500);
})();

// Also listen for dynamic content changes
let observer;
function startObserver() {
    if (document.body && !observer) {
        observer = new MutationObserver(function(mutations) {
            // Re-translate when new elements with data-i18n are added
            let shouldRetranslate = false;
            mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // Element node
                        if (node.hasAttribute && node.hasAttribute('data-i18n')) {
                            shouldRetranslate = true;
                        } else if (node.querySelectorAll) {
                            if (node.querySelectorAll('[data-i18n]').length > 0) {
                                shouldRetranslate = true;
                            }
                        }
                    }
                });
            });
            if (shouldRetranslate) {
                translatePage();
            }
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}

// Start observing when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        startObserver();
    });
} else {
    if (document.body) {
        startObserver();
    } else {
        setTimeout(startObserver, 100);
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { setLanguage, getTranslation, translatePage, currentLanguage };
}

