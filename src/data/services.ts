export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  brand: string[];
  warranty: string;
  turnaround: string;
  featured: boolean;
  ebayUrl: string;
  partNumbers: string[];
  faultsFixed: string[];
  symptoms: string[];
  rating: number;
  reviewsCount: number;
  priceEstimate?: string;
  tag?: string;
}

export const BRANDS_LIST = [
  "All",
  "Audi",
  "BMW",
  "Mercedes",
  "VW",
  "Seat",
  "Skoda",
  "Volvo",
  "Ford",
  "Jaguar",
  "Land Rover",
] as const;

export const CATEGORIES_LIST = [
  "All",
  "Clock Spring",
  "ABS Module",
  "Instrument Cluster",
  "Dashboard",
  "ECU",
  "LED Tail Light",
  "Headlights",
  "Diagnostics",
  "Coding",
  "Airbag",
] as const;

export const SERVICES_DATA: Service[] = [
  {
    id: "mercedes-instrument-cluster-repair",
    title: "Mercedes Instrument Cluster Repair",
    slug: "mercedes-instrument-cluster-repair",
    description: "Repairs faulty LCD display, backlight fade, pixel issues, and needle gauge failures on Mercedes instrument panels.",
    longDescription:
      "Full hardware restoration service for failing Mercedes-Benz speedometer and instrument cluster displays. Solves pixel fade, dark backlight illumination, dead tachometer needles, flickering warning LEDs, and CAN-bus gauge communication lockouts. Tested to OEM factory standard.",
    image: "/images/instrument_cluster.png",
    category: "Instrument Cluster",
    brand: ["Mercedes"],
    warranty: "Lifetime Warranty",
    turnaround: "24 Hours",
    featured: true,
    ebayUrl: "https://www.ebay.co.uk/usr/kg_auto_electronics",
    partNumbers: ["A4479001200", "A2049005401", "A2129008802", "A2059002100"],
    faultsFixed: [
      "Flickering or blank LCD center display",
      "Pixel corruption on trip computer screen",
      "Dead fuel, temp, or speedo needle gauges",
      "Backlight LED dimming and voltage drop",
      "Total cluster power failure on key insert",
    ],
    symptoms: [
      "Speedometer turns black intermittently",
      "Instrument cluster reset while driving",
      "Warning lights stay softly illuminated when car locked",
    ],
    rating: 5.0,
    reviewsCount: 142,
    priceEstimate: "From £149.99",
    tag: "Mercedes Specialist",
  },
  {
    id: "bmw-clock-spring-squib-repair",
    title: "BMW Clock Spring / Squib Slip Ring Repair",
    slug: "bmw-clock-spring-squib-repair",
    description: "Restores dead steering wheel multi-function buttons, horn failure, and persistent SRS airbag fault light.",
    longDescription:
      "Expert rebuilding of internal ribbon flex cables and optical steering angle sensors inside BMW steering column squibs. Fixes non-responsive steering buttons, horn dropouts, SRS airbag errors (Diagnostic Code 9308B0), and dsc stability system warnings.",
    image: "/images/clock_spring.png",
    category: "Clock Spring",
    brand: ["BMW"],
    warranty: "Lifetime Warranty",
    turnaround: "Same Day / 24 Hours",
    featured: true,
    ebayUrl: "https://www.ebay.co.uk/usr/kg_auto_electronics",
    partNumbers: ["61319253753", "61319354047", "61319123049", "61319216244"],
    faultsFixed: [
      "Steering wheel media controls and cruise control buttons not working",
      "Horn completely unresponsive",
      "Red Airbag warning symbol (SRS) permanently lit on dashboard",
      "Steering angle sensor signal plausibility fault",
    ],
    symptoms: [
      "Snapping noise heard when turning steering lock-to-lock",
      "Paddle shifters stopped shifting gears",
      "Airbag warning light appeared after steering wheel removal",
    ],
    rating: 4.9,
    reviewsCount: 198,
    priceEstimate: "From £119.99",
    tag: "Steering Column",
  },
  {
    id: "mercedes-led-taillight-repair",
    title: "Mercedes E-Class LED Tail Light Repair",
    slug: "mercedes-led-taillight-repair",
    description: "Component-level circuit board rebuild for dimming or dead LED tail lights. Saves hundreds over main dealer replacement.",
    longDescription:
      "Engineering-grade fix for Mercedes-Benz E-Class W212 and W207 rear LED light assemblies. Replaces burnt out drive transistors, resolves water ingress corrosion, and reinforces power rails to permanently fix flickering outer or inner LED bars.",
    image: "/images/led_taillight.png",
    category: "LED Tail Light",
    brand: ["Mercedes"],
    warranty: "2 Year Warranty",
    turnaround: "24 Hours",
    featured: true,
    ebayUrl: "https://www.ebay.co.uk/usr/kg_auto_electronics",
    partNumbers: ["A2129060757", "A2129060857", "A2079060100", "A2079060200"],
    faultsFixed: [
      "Partial or full failure of main LED tail light light-bar",
      "Intermittent light flashing or flickering on engine start",
      "Cluster warning 'Check Rear Left / Right Lamp'",
      "Brake light or indicator LED driver failure",
    ],
    symptoms: [
      "Tail light turns off after 5 minutes of driving",
      "LED strip is half as bright as the opposite side",
    ],
    rating: 5.0,
    reviewsCount: 165,
    priceEstimate: "From £99.99",
    tag: "Lighting Electronics",
  },
  {
    id: "audi-vw-abs-esp-module-repair",
    title: "Audi & VW ATE MK60 ESP ABS Pump Repair",
    slug: "audi-vw-abs-esp-module-repair",
    description: "Rebuilds internal hydraulic pressure sensors and electronic control board on ATE Teves MK60 ABS units.",
    longDescription:
      "Comprehensive re-engineering service for ATE MK60 and MK60EC1 ABS pumps fitted to Audi, VW, Seat, and Skoda vehicles. Directly fixes the infamous Code 01435 (Brake Pressure Sensor 1 G201) internal electrical breakdown without requiring fluid recoding.",
    image: "/images/abs_module.png",
    category: "ABS Module",
    brand: ["Audi", "VW", "Seat", "Skoda"],
    warranty: "Lifetime Warranty",
    turnaround: "24 Hours",
    featured: true,
    ebayUrl: "https://www.ebay.co.uk/usr/kg_auto_electronics",
    partNumbers: ["1K0907379AD", "1K0614517BD", "1K0907379AH", "1K0614517DE"],
    faultsFixed: [
      "Fault Code 01435 - Brake Pressure Sensor 1 (G201) Electrical Circuit Error",
      "ABS, ESP, and Traction warning lights illuminated on instrument cluster",
      "Communication error with ABS brake control module",
      "Pump motor voltage supply circuit fault",
    ],
    symptoms: [
      "ABS light turns on as soon as brake pedal is depressed hard",
      "ESP button does not turn off traction control warning light",
    ],
    rating: 4.9,
    reviewsCount: 215,
    priceEstimate: "From £179.99",
    tag: "Braking Systems",
  },
  {
    id: "volvo-abs-pump-bcm-module-repair",
    title: "Volvo BCM & ABS Control Module Rebuild",
    slug: "volvo-abs-pump-bcm-module-repair",
    description: "Fixes Anti-Skid Service Required messages, speedo drops, and CAN communication dropouts on Volvo S60, V70, XC90.",
    longDescription:
      "Specialist resoldering and thermal pad replacement for Volvo Brake Control Modules (BCM). Eliminates cracked internal board pins, restoring speed sensor signals, cruise control functionality, and transmission shift lock control.",
    image: "/images/abs_module.png",
    category: "ABS Module",
    brand: ["Volvo"],
    warranty: "Lifetime Warranty",
    turnaround: "24 Hours",
    featured: false,
    ebayUrl: "https://www.ebay.co.uk/usr/kg_auto_electronics",
    partNumbers: ["8671224", "30793444", "8671225", "30643982"],
    faultsFixed: [
      "'Anti-Skid Service Required' message on Volvo DIM display",
      "Speedometer drops to zero while driving",
      "Odometer stops counting mileage",
      "Loss of ABS communication code BCM-0070 / BCM-0050",
    ],
    symptoms: [
      "Automatic gearbox stuck in limp mode due to missing wheel speed data",
      "ABS warning light comes on after engine bay warms up",
    ],
    rating: 5.0,
    reviewsCount: 88,
    priceEstimate: "From £159.99",
    tag: "Volvo Specialist",
  },
  {
    id: "ford-focus-instrument-cluster-repair",
    title: "Ford Focus & Kuga Instrument Cluster Speedo Repair",
    slug: "ford-focus-instrument-cluster-repair",
    description: "Resolves non-start issues, Engine Systems Fault error, immobilizer lockout, and gauge dropouts.",
    longDescription:
      "Factory level overhaul for Ford Focus Mk2, C-Max, Kuga, and S-Max dashboards suffering from cold solder joint degradation on the main diagnostic socket. Prevents non-starting (P1607 / U1900 CAN bus fault) and cluster flickering.",
    image: "/images/instrument_cluster.png",
    category: "Instrument Cluster",
    brand: ["Ford"],
    warranty: "Lifetime Warranty",
    turnaround: "Same Day / 24 Hours",
    featured: true,
    ebayUrl: "https://www.ebay.co.uk/usr/kg_auto_electronics",
    partNumbers: ["8V4T-10849-EE", "4M5T-10849-CJ", "7M5T-10849-EB", "8V4T-10849-GF"],
    faultsFixed: [
      "Engine Systems Fault / Acceleration Reduced message on dash",
      "Red immobilizer LED flashing rapidly, car refuses to turn over",
      "Dashes ('---') displayed on digital odometer screen",
      "Gauges drop to zero and warning lights flash while driving",
    ],
    symptoms: [
      "Banging on top of dashboard temporarily allows engine to start",
      "OBD scanner fails to communicate with ECU until cluster tapped",
    ],
    rating: 4.9,
    reviewsCount: 310,
    priceEstimate: "From £119.99",
    tag: "Dashboard Fix",
  },
  {
    id: "jaguar-land-rover-ecu-hardware-repair",
    title: "Jaguar & Land Rover Engine ECU / PCM Hardware Repair",
    slug: "jaguar-land-rover-ecu-hardware-repair",
    description: "Component rebuilding for Bosch & Denso engine control modules suffering misfires, water damage, or CAN bus dead states.",
    longDescription:
      "Precision repair service for Land Rover Discovery, Range Rover Sport, and Jaguar XF / XJ Engine Control Units (ECU/PCM). Fixes failed injector drive transistors, sensor 5V reference voltage collapse, and water ingress trace degradation.",
    image: "/images/ecu_repair.png",
    category: "ECU",
    brand: ["Jaguar", "Land Rover"],
    warranty: "2 Year Warranty",
    turnaround: "48 Hours",
    featured: true,
    ebayUrl: "https://www.ebay.co.uk/usr/kg_auto_electronics",
    partNumbers: ["GX73-12A650-BB", "FK72-12A650-AC", "8W93-12A650-AB", "NNN500020"],
    faultsFixed: [
      "Persistent single or multi-cylinder fuel injector misfires",
      "Sensor 5V reference supply low (P0641 / P0651 fault codes)",
      "Loss of high-speed CAN network communication with PCM",
      "Water damage corrosion around main ECU plug pins",
    ],
    symptoms: [
      "Engine hesitates and runs on 5 cylinders under acceleration",
      "Restricted Performance warning on dashboard",
    ],
    rating: 4.8,
    reviewsCount: 76,
    priceEstimate: "From £249.99",
    tag: "Power Train Control",
  },
  {
    id: "porsche-led-headlight-control-module",
    title: "Porsche Cayenne & Macan LED Headlight Control Repair",
    slug: "porsche-led-headlight-control-module",
    description: "Restores failed matrix LED headlight driver modules and ballasts, solving dipped beam warning errors.",
    longDescription:
      "Advanced circuit diagnostics and chip replacement for Porsche Cayenne, Macan, and Panamera LED headlight control computers. Solves thermal shutdown, LED array drive channel failures, and headlight level control faults.",
    image: "/images/headlight_module.png",
    category: "Headlights",
    brand: ["Porsche"],
    warranty: "2 Year Warranty",
    turnaround: "24 Hours",
    featured: false,
    ebayUrl: "https://www.ebay.co.uk/usr/kg_auto_electronics",
    partNumbers: ["971941572C", "7PP941572AB", "9A794157200", "7PP941572BC"],
    faultsFixed: [
      "Main beam or low beam LED headlight completely dead",
      "Cornering headlight system fault message on Porsche PCM",
      "Headlight level motor calibration failure",
      "Moisture-induced power supply rail failure on ballast board",
    ],
    symptoms: [
      "Right headlight flickers off when selecting full beam",
      "Headlight diagnostic scan reports internal ECU failure",
    ],
    rating: 5.0,
    reviewsCount: 54,
    priceEstimate: "From £199.99",
    tag: "High Tech Lighting",
  },
  {
    id: "audi-vw-airbag-module-crash-reset",
    title: "Audi, VW, Seat & Skoda Airbag Crash Data Reset",
    slug: "audi-vw-airbag-module-crash-reset",
    description: "Clears hard crash memory logs and resets SRS control units to factory specs after deployment events.",
    longDescription:
      "Direct EEPROM and micro-controller recalibration service for VAG airbag modules. Completely removes hard crash data codes (Code 00003 / CRASH DATA STORED) after an impact or tensioner trigger, eliminating the cost of buying a brand new virgin module.",
    image: "/images/clock_spring.png",
    category: "Airbag",
    brand: ["Audi", "VW", "Seat", "Skoda"],
    warranty: "Lifetime Warranty",
    turnaround: "Same Day",
    featured: false,
    ebayUrl: "https://www.ebay.co.uk/usr/kg_auto_electronics",
    partNumbers: ["8K0959655B", "5Q0959655AA", "3Q0959655AD", "1K0959653C"],
    faultsFixed: [
      "Crash Data Stored error message locked in SRS module memory",
      "Airbag light illuminated following accident or seat belt tensioner deployment",
      "Internal module RAM checksum memory error (B100000)",
    ],
    symptoms: [
      "Diagnostic tool cannot clear SRS warning light after belt replacement",
      "Module reports 'Control Unit Defective'",
    ],
    rating: 4.9,
    reviewsCount: 140,
    priceEstimate: "From £79.99",
    tag: "Cabin Safety",
  },
  {
    id: "mercedes-esl-elv-steering-lock-repair",
    title: "Mercedes W204 & W212 Steering Column Lock (ESL) Fix",
    slug: "mercedes-esl-elv-steering-lock-repair",
    description: "Fixes key turning without ignition power on Mercedes C-Class & E-Class. Complete ESL motor and chip restoration.",
    longDescription:
      "Emergency diagnostic and rebuild service for failed Electronic Steering Locks (ESL/ELV) fitted to Mercedes W204, X204, and W212 vehicles. Solves the fatal lock motor gear lockup where key turns in ignition but dashboard remains completely dead.",
    image: "/images/hero_car.png",
    category: "Diagnostics",
    brand: ["Mercedes"],
    warranty: "Lifetime Warranty",
    turnaround: "Same Day / 24 Hours",
    featured: true,
    ebayUrl: "https://www.ebay.co.uk/usr/kg_auto_electronics",
    partNumbers: ["A2045455732", "A2049005912", "A2045458132", "A2075450132"],
    faultsFixed: [
      "Key inserts into ignition switch but steering does not unlock",
      "Dashboard cluster displays no lights and engine won't crank",
      "ESL fatal hardware error code A25464",
    ],
    symptoms: [
      "Quiet clicking sound heard from steering column when key inserted",
      "Radio turns on but starter motor receives no ignition trigger signal",
    ],
    rating: 5.0,
    reviewsCount: 289,
    priceEstimate: "From £189.99",
    tag: "Ignition Electronics",
  },
  {
    id: "bmw-fem-bdc-cas-ecu-coding",
    title: "BMW FEM / BDC & CAS Module Recoding & Matching",
    slug: "bmw-fem-bdc-cas-ecu-coding",
    description: "Software repair, ISN matching, EEPROM recovery, and replacement module synchronization for BMW 1/3/4/5 Series.",
    longDescription:
      "Expert dealership-level software coding service for BMW Front Electronic Modules (FEM), Body Domain Controllers (BDC), and Car Access System (CAS) units. Restores corrupted flash memory files, codes donor modules, and synchronizes key transponders.",
    image: "/images/cover_img.png",
    category: "Coding",
    brand: ["BMW"],
    warranty: "2 Year Warranty",
    turnaround: "24 Hours",
    featured: false,
    ebayUrl: "https://www.ebay.co.uk/usr/kg_auto_electronics",
    partNumbers: ["61359393663", "61359393667", "61359393671", "61359267383"],
    faultsFixed: [
      "Corrupted EEPROM software following battery drop or jump-start",
      "Key synchronization lost, keyless entry not recognized",
      "Donor FEM/BDC module programming to match car VIN and ISN",
      "Central locking or window regulator logic failure inside BDC",
    ],
    symptoms: [
      "Headlights stay on continuously even when car ignition switched off",
      "Dash shows 'Remote control missing' when key is inside cabin",
    ],
    rating: 4.9,
    reviewsCount: 112,
    priceEstimate: "From £169.99",
    tag: "Software Coding",
  },
  {
    id: "audi-mmi-digital-dash-display-repair",
    title: "Audi A6 / A8 / Q7 Digital Dashboard Cluster Repair",
    slug: "audi-mmi-digital-dash-display-repair",
    description: "Fixes DIS screen fading, backlight failure, central cluster rebooting, and needle illumination dropouts.",
    longDescription:
      "Hardware repair for Audi A6 4F, A8 4E, and Q7 4L instrument panels. Replaces failing high-voltage LCD backlighting transformers, fixes corrupted display processor chips, and recalibrates gauge stepper motors.",
    image: "/images/instrument_cluster.png",
    category: "Dashboard",
    brand: ["Audi"],
    warranty: "Lifetime Warranty",
    turnaround: "24-48 Hours",
    featured: false,
    ebayUrl: "https://www.ebay.co.uk/usr/kg_auto_electronics",
    partNumbers: ["4F0920931E", "4H0920930A", "4L0920931F", "4F0920983D"],
    faultsFixed: [
      "Central Driver Information System (DIS) screen turns blank or red",
      "Backlight transformer buzzes or cuts out on cold mornings",
      "Speedometer and rev counter needles flicker or stay dark",
    ],
    symptoms: [
      "Navigation directions missing from center dash screen",
      "Cluster resets time and trip mileage whenever ignition turned off",
    ],
    rating: 4.9,
    reviewsCount: 94,
    priceEstimate: "From £139.99",
    tag: "Audi Specialist",
  },
  {
    id: "seat-skoda-clock-spring-repair",
    title: "Seat & Skoda Steering Wheel Clock Spring Slip Ring Repair",
    slug: "seat-skoda-clock-spring-repair",
    description: "Restores horn function, steering buttons, and airbag light issues on Seat Leon, Ibiza, Skoda Octavia, and Superb.",
    longDescription:
      "Specialist repair for VAG column switch modules fitted to Seat and Skoda models. Solves ribbon cable fracture caused by steering wheel rotation, preserving original steering angle calibration so no dealer alignment is needed.",
    image: "/images/clock_spring.png",
    category: "Clock Spring",
    brand: ["Seat", "Skoda"],
    warranty: "Lifetime Warranty",
    turnaround: "24 Hours",
    featured: false,
    ebayUrl: "https://www.ebay.co.uk/usr/kg_auto_electronics",
    partNumbers: ["5K0953569AL", "6R0953507", "5K0953569H", "5Q0953549a"],
    faultsFixed: [
      "SRS Airbag warning lamp illuminated with fault code B1000",
      "Steering wheel horn completely dead",
      "Multifunction media control buttons stopped responding",
    ],
    symptoms: [
      "Clicking or grinding noise coming from behind steering wheel hub",
      "Airbag warning light lit up after indicator stalk replacement",
    ],
    rating: 4.8,
    reviewsCount: 82,
    priceEstimate: "From £109.99",
    tag: "VAG Group",
  },
  {
    id: "land-rover-abs-hydro-block-repair",
    title: "Land Rover Discovery & Range Rover ABS Pump Fix",
    slug: "land-rover-abs-hydro-block-repair",
    description: "Fixes HDC Fault System Not Available error, ABS pump motor circuit open fault, and stability light illumination.",
    longDescription:
      "Heavy duty repair service for Land Rover Discovery 3/4 and Range Rover Sport ABS modulator blocks. Eliminates internal electric motor relay contacts wear, pressure valve solenoid stuck codes, and CAN bus data dropouts.",
    image: "/images/abs_module.png",
    category: "ABS Module",
    brand: ["Land Rover"],
    warranty: "Lifetime Warranty",
    turnaround: "24 Hours",
    featured: false,
    ebayUrl: "https://www.ebay.co.uk/usr/kg_auto_electronics",
    partNumbers: ["LR032845", "LR049929", "LR018260", "LR007261"],
    faultsFixed: [
      "'HDC Fault System Not Available' warning message",
      "ABS warning light and Special Programs Disabled lockout",
      "ABS pump motor power circuit failure (Fault C1A20)",
    ],
    symptoms: [
      "Air suspension lowers to access height due to ABS fault lockout",
      "Brake pedal feels stiff under heavy deceleration",
    ],
    rating: 5.0,
    reviewsCount: 67,
    priceEstimate: "From £189.99",
    tag: "Off-Road Electronics",
  },
  {
    id: "jaguar-led-taillight-repair",
    title: "Jaguar XF & XJ LED Tail Light Circuit Board Fix",
    slug: "jaguar-led-taillight-repair",
    description: "Component level repair for dead or dim rear LED outer and inner tail lamps on Jaguar saloon models.",
    longDescription:
      "Circuit board repair for Jaguar XF (X250 / X260) and XJ (X351) LED tail lights suffering from voltage regulator resistor failure or moisture ingress corrosion. Eliminates the cost of purchasing full replacement tail light clusters.",
    image: "/images/led_taillight.png",
    category: "LED Tail Light",
    brand: ["Jaguar"],
    warranty: "2 Year Warranty",
    turnaround: "24 Hours",
    featured: false,
    ebayUrl: "https://www.ebay.co.uk/usr/kg_auto_electronics",
    partNumbers: ["C2D34099", "C2Z22108", "C2D49710", "C2Z22109"],
    faultsFixed: [
      "Outer LED blade light bar completely dark or dim",
      "Rear indicator LEDs flashing rapidly (resistor failure)",
      "Rear brake light LED strip intermittent cut out",
    ],
    symptoms: [
      "Tail light turns off when boot lid is opened and closed",
      "Diagnostic dash warning 'Check Rear Indicators'",
    ],
    rating: 4.9,
    reviewsCount: 51,
    priceEstimate: "From £109.99",
    tag: "Jaguar Specialist",
  },
  {
    id: "vw-ecu-engine-management-repair",
    title: "VW Golf, Passat & Tiguan Engine ECU Diagnostics",
    slug: "vw-ecu-engine-management-repair",
    description: "Fixes misfires, 5V reference supply drops, non-starting, and CAN communication loss on Bosch EDC17 ECUs.",
    longDescription:
      "Complete diagnostics and bench hardware rebuilding for Volkswagen Bosch EDC17 / MED17 Engine Control Units. Rectifies damaged coil driver transistors, EGR / DPF valve power rail dropouts, and ECU water ingress damage.",
    image: "/images/hero_car.png",
    category: "Diagnostics",
    brand: ["VW"],
    warranty: "2 Year Warranty",
    turnaround: "24 Hours",
    featured: false,
    ebayUrl: "https://www.ebay.co.uk/usr/kg_auto_electronics",
    partNumbers: ["03L906018N", "03G906021AB", "03L906022C", "03L906018C"],
    faultsFixed: [
      "No communication with Engine Control Module (ECM / ECU)",
      "Engine cranks indefinitely without starting",
      "Glow plug warning light flashing with P0606 ECU processor fault",
    ],
    symptoms: [
      "Car dies suddenly when engine reaches operating temperature",
      "Multiple sensor fault codes appear simultaneously (5V rail collapse)",
    ],
    rating: 4.9,
    reviewsCount: 173,
    priceEstimate: "From £199.99",
    tag: "VAG Powertrain",
  },
];

export function filterServices(
  services: Service[],
  query: string,
  selectedBrand: string,
  selectedCategory: string
): Service[] {
  return services.filter((service) => {
    // Brand Filter
    const matchesBrand =
      selectedBrand === "All" ||
      service.brand.some((b) => b.toLowerCase() === selectedBrand.toLowerCase());

    // Category Filter
    const matchesCategory =
      selectedCategory === "All" ||
      service.category.toLowerCase() === selectedCategory.toLowerCase();

    // Query Filter
    const searchLower = query.trim().toLowerCase();
    const matchesQuery =
      searchLower === "" ||
      service.title.toLowerCase().includes(searchLower) ||
      service.description.toLowerCase().includes(searchLower) ||
      service.category.toLowerCase().includes(searchLower) ||
      service.brand.some((b) => b.toLowerCase().includes(searchLower)) ||
      service.partNumbers.some((pn) => pn.toLowerCase().includes(searchLower)) ||
      service.faultsFixed.some((ff) => ff.toLowerCase().includes(searchLower)) ||
      service.symptoms.some((sym) => sym.toLowerCase().includes(searchLower));

    return matchesBrand && matchesCategory && matchesQuery;
  });
}
