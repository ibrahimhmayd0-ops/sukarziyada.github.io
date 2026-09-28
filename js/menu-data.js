/* ==================================================================
   SUKAR ZIYADA | MENU DATA  (ملف القائمة)
   ==================================================================
   هذا هو الملف الوحيد الذي تحتاج لتعديله. This is the ONLY file you edit.

   ⚠️ الأصناف والأسعار الحالية أمثلة فقط. استبدلها بأسعارك الحقيقية قبل النشر.
   ⚠️ Items and prices below are EXAMPLES. Replace them before publishing.

   كيف تعدّل؟  How to edit:
   • تغيير السعر:  price: 350000       (أرقام فقط، بدون فواصل ولا ل.ل)
   • صنف جديد:     انسخ صنفاً كاملاً من { إلى }, والصقه تحته ثم عدّله
   • نفذت الكمية:  soldOut: true        (يظهر الصنف ولا يمكن طلبه)
   • إخفاء صنف:    hidden: true         (لا يظهر أبداً)
   • سعر حسب الطلب: price: 0            (يظهر زر "استفسر" عبر واتساب)
   • الشارات tags: "best" الأكثر طلباً ، "new" جديد ، "spicy" حار ، "offer" عرض
   • صورة:         ضع الصورة في مجلد images/items ثم اكتب:
                   img: "images/items/nutella.jpg"
                   (استعمل اسماً إنجليزياً بدون مسافات)
   • الأحجام sizes: كل حجم له سعره الكامل (الزبون يختار واحداً)
   • الإضافات extras: سعر يُضاف فوق سعر الصنف (الزبون يختار ما يريد)
   • ترتيب الأقسام: انقل القسم كاملاً (من { إلى },) لأعلى أو لأسفل

   ✳️ انتبه: كل سطر ينتهي بفاصلة ,  وكل نص بين علامتي تنصيص " "
      إذا ظهرت رسالة خطأ في الموقع، راجع آخر تعديل قمت به.
   ✳️ لا تغيّر قيمة id للأقسام.
   ================================================================== */


/* ------------------------------------------------------------------
   1) SETTINGS  (الإعدادات)
   ------------------------------------------------------------------ */
const CONFIG = {
  nameAr: "سكر زيادة",
  nameEn: "Sukar Ziyada",

  // رقم واتساب الذي تصله الطلبات (مع رمز البلد، بدون + أو مسافات)
  whatsapp: "96181575860",
  phone: "+961 81 575 860",

  currencyAr: "ل.ل",
  currencyEn: "LBP",

  // إظهار السعر بالدولار بجانب الليرة: غيّر false إلى true
  showUsd: false,
  usdRate: 89500,

  // رسوم التوصيل. 0 = تُحدد عند تأكيد الطلب على واتساب
  deliveryFee: 0,

  // الحد الأدنى للطلب. 0 = بدون حد أدنى
  minOrder: 0,

  // ساعات العمل: غيّر show إلى true بعد كتابة الأوقات الصحيحة (نظام 24 ساعة)
  hours: { show: false, open: "10:00", close: "01:00" },

  // استقبال الطلبات خارج ساعات العمل؟
  acceptOrdersWhenClosed: true,

  // طرق الطلب المتاحة: "delivery" توصيل ، "pickup" استلام ، "dinein" في المطعم
  orderTypes: ["delivery", "pickup", "dinein"],

  // صوت خفيف عند إضافة صنف للسلة
  sound: true,

  // لغة الموقع عند أول زيارة: "ar" أو "en"
  defaultLanguage: "ar",

  // العنوان (اختياري، يظهر أسفل القائمة)
  address: "",
  addressEn: "",

  links: {
    instagram: "https://www.instagram.com/sukar.ziyada",
    whatsapp: "https://wa.me/96181575860",
    facebook: "https://www.facebook.com/share/1AHC3nKEZz/",
    tiktok: "",
    maps: "https://maps.app.goo.gl/HuUgAC93JNGThqjw6"
  }
};


/* ------------------------------------------------------------------
   2) SHARED EXTRAS  (إضافات مشتركة تُستعمل في أكثر من صنف)
   ------------------------------------------------------------------ */
const SWEET_EXTRAS = [
  { name: "موز", nameEn: "Banana", price: 50000 },
  { name: "فراولة", nameEn: "Strawberry", price: 75000 },
  { name: "كيندر", nameEn: "Kinder", price: 75000 },
  { name: "لوتس", nameEn: "Lotus", price: 75000 },
  { name: "سكوب ايس كريم", nameEn: "Ice cream scoop", price: 100000 }
];

const SAVORY_EXTRAS = [
  { name: "جبنة إضافية", nameEn: "Extra cheese", price: 50000 },
  { name: "بطاطا", nameEn: "Fries", price: 100000 },
  { name: "صوص حار", nameEn: "Hot sauce", price: 0 }
];


/* ------------------------------------------------------------------
   3) THE MENU  (القائمة)
   ------------------------------------------------------------------ */
const MENU = [

  {
    id: "classic-crepe",
    name: "كلاسيك كريب",
    nameEn: "Classic Crepe",
    items: [
      {
        name: "كريب نوتيلا",
        nameEn: "Nutella Crepe",
        desc: "كريب طازج محشو بشوكولا النوتيلا",
        descEn: "Fresh crepe filled with Nutella",
        price: 350000,
        tags: ["best"],
        extras: SWEET_EXTRAS,
        img: ""
      },
      {
        name: "كريب لوتس",
        nameEn: "Lotus Crepe",
        desc: "صوص اللوتس مع بسكويت اللوتس المطحون",
        descEn: "Lotus spread with crushed Lotus biscuits",
        price: 400000,
        extras: SWEET_EXTRAS
      },
      {
        name: "كريب كيندر",
        nameEn: "Kinder Crepe",
        desc: "شوكولا كيندر البيضاء مع قطع كيندر",
        descEn: "White Kinder chocolate with Kinder pieces",
        price: 400000,
        extras: SWEET_EXTRAS
      },
      {
        name: "كريب بيستاشيو",
        nameEn: "Pistachio Crepe",
        desc: "كريمة الفستق الحلبي مع فستق مطحون",
        descEn: "Pistachio cream with crushed pistachio",
        price: 450000,
        tags: ["new"],
        extras: SWEET_EXTRAS
      }
    ]
  },

  {
    id: "special-crepe",
    name: "سبيشيال كريب",
    nameEn: "Special Crepe",
    items: [
      {
        name: "كريب سكر زيادة",
        nameEn: "Sukar Ziyada Crepe",
        desc: "خلطة البيت: نوتيلا، لوتس، كيندر وفواكه طازجة",
        descEn: "House mix: Nutella, Lotus, Kinder and fresh fruits",
        tags: ["best"],
        sizes: [
          { name: "وسط", nameEn: "Medium", price: 550000 },
          { name: "كبير", nameEn: "Large", price: 750000 }
        ],
        extras: SWEET_EXTRAS
      },
      {
        name: "كريب فواكه",
        nameEn: "Fruit Crepe",
        desc: "نوتيلا مع موز وفراولة وكيوي",
        descEn: "Nutella with banana, strawberry and kiwi",
        price: 550000
      },
      {
        name: "كريب دبي",
        nameEn: "Dubai Crepe",
        desc: "شوكولا مع كريمة الفستق وكنافة مقرمشة",
        descEn: "Chocolate, pistachio cream and crispy knafeh",
        price: 650000,
        tags: ["new"]
      }
    ]
  },

  {
    id: "extra-crepe",
    name: "اكسترا كريب",
    nameEn: "Extra Crepe",
    items: [
      {
        name: "كريب رول",
        nameEn: "Crepe Rolls",
        desc: "رولات كريب مقطعة مع صوص من اختيارك",
        descEn: "Sliced crepe rolls with your choice of sauce",
        price: 500000
      },
      {
        name: "ميني كريب",
        nameEn: "Mini Crepe Bites",
        desc: "قطع كريب صغيرة مع نوتيلا ولوتس",
        descEn: "Bite size crepes with Nutella and Lotus",
        price: 450000
      }
    ]
  },

  {
    id: "waffle",
    name: "وافل",
    nameEn: "Waffle",
    items: [
      {
        name: "وافل نوتيلا",
        nameEn: "Nutella Waffle",
        desc: "وافل بلجيكي مقرمش مع نوتيلا",
        descEn: "Crispy Belgian waffle with Nutella",
        price: 400000,
        extras: SWEET_EXTRAS
      },
      {
        name: "وافل ستيك",
        nameEn: "Waffle on a Stick",
        desc: "وافل على عود مغطى بالشوكولا",
        descEn: "Waffle on a stick dipped in chocolate",
        price: 300000,
        tags: ["new"]
      }
    ]
  },

  {
    id: "pancake",
    name: "بان كيك",
    nameEn: "Pancake",
    items: [
      {
        name: "ميني بان كيك",
        nameEn: "Mini Pancakes",
        desc: "بان كيك صغير مع صوص من اختيارك",
        descEn: "Mini pancakes with your choice of sauce",
        sizes: [
          { name: "12 قطعة", nameEn: "12 pieces", price: 350000 },
          { name: "24 قطعة", nameEn: "24 pieces", price: 600000 }
        ],
        extras: SWEET_EXTRAS
      },
      {
        name: "بان كيك كلاسيك",
        nameEn: "Classic Pancakes",
        desc: "ثلاث طبقات مع عسل وزبدة",
        descEn: "Three layers with honey and butter",
        price: 400000
      }
    ]
  },

  {
    id: "chimney-cake",
    name: "تشمني كيك",
    nameEn: "Chimney Cake",
    items: [
      {
        name: "تشمني نوتيلا",
        nameEn: "Nutella Chimney",
        desc: "عجينة مقرمشة بالقرفة والسكر محشوة بالنوتيلا",
        descEn: "Crispy cinnamon sugar dough filled with Nutella",
        price: 450000,
        tags: ["best"]
      },
      {
        name: "تشمني ايس كريم",
        nameEn: "Chimney with Ice Cream",
        desc: "تشمني محشو ايس كريم مع صوص شوكولا",
        descEn: "Chimney filled with ice cream and chocolate sauce",
        price: 550000
      }
    ]
  },

  {
    id: "ice-cream",
    name: "ايس كريم",
    nameEn: "Ice Cream",
    items: [
      {
        name: "كوب ايس كريم",
        nameEn: "Ice Cream Cup",
        desc: "اختر نكهاتك المفضلة",
        descEn: "Choose your favorite flavors",
        sizes: [
          { name: "2 سكوب", nameEn: "2 scoops", price: 250000 },
          { name: "3 سكوب", nameEn: "3 scoops", price: 350000 }
        ]
      },
      {
        name: "ايس كريم على الوافل",
        nameEn: "Ice Cream Waffle",
        desc: "وافل ساخن مع سكوبين ايس كريم",
        descEn: "Warm waffle with two scoops of ice cream",
        price: 450000,
        soldOut: true
      }
    ]
  },

  {
    id: "milkshake",
    name: "ميلك شيك",
    nameEn: "Milkshake",
    items: [
      { name: "ميلك شيك أوريو", nameEn: "Oreo Milkshake", price: 450000, tags: ["best"] },
      { name: "ميلك شيك لوتس", nameEn: "Lotus Milkshake", price: 450000, tags: ["new"] },
      { name: "ميلك شيك فراولة", nameEn: "Strawberry Milkshake", price: 400000 }
    ]
  },

  {
    id: "cocktails",
    name: "كوكتيل وعصائر",
    nameEn: "Cocktails & Juices",
    items: [
      {
        name: "كوكتيل سكر زيادة",
        nameEn: "Sukar Ziyada Cocktail",
        desc: "فواكه طازجة مع قشطة وعسل ومكسرات",
        descEn: "Fresh fruits with ashta cream, honey and nuts",
        price: 550000,
        tags: ["best"]
      },
      {
        name: "عصير برتقال طازج",
        nameEn: "Fresh Orange Juice",
        sizes: [
          { name: "صغير", nameEn: "Small", price: 200000 },
          { name: "كبير", nameEn: "Large", price: 300000 }
        ]
      },
      { name: "كوكتيل أفوكادو", nameEn: "Avocado Cocktail", price: 500000 }
    ]
  },

  {
    id: "drinks",
    name: "مرطبات",
    nameEn: "Soft Drinks",
    items: [
      { name: "بيبسي", nameEn: "Pepsi", price: 100000 },
      { name: "سفن أب", nameEn: "7Up", price: 100000 },
      { name: "ريد بول", nameEn: "Red Bull", price: 200000 },
      { name: "مياه", nameEn: "Water", price: 50000 }
    ]
  },

  {
    id: "sandwiches",
    name: "سندويشات",
    nameEn: "Sandwiches",
    items: [
      {
        name: "سندويش طاووق",
        nameEn: "Taouk Sandwich",
        desc: "دجاج متبل مع ثوم وبطاطا ومخلل",
        descEn: "Marinated chicken with garlic, fries and pickles",
        price: 350000,
        tags: ["best"],
        extras: SAVORY_EXTRAS
      },
      {
        name: "سندويش فاهيتا",
        nameEn: "Fajita Sandwich",
        desc: "دجاج مع فليفلة ملونة وجبنة",
        descEn: "Chicken with peppers and cheese",
        price: 400000,
        tags: ["spicy"],
        extras: SAVORY_EXTRAS
      },
      {
        name: "سندويش كرسبي",
        nameEn: "Crispy Sandwich",
        desc: "دجاج مقرمش مع صوص خاص وخس",
        descEn: "Crispy chicken with special sauce and lettuce",
        price: 400000,
        extras: SAVORY_EXTRAS
      }
    ]
  },

  {
    id: "burger",
    name: "برغر",
    nameEn: "Burger",
    items: [
      { name: "برغر كلاسيك", nameEn: "Classic Burger", desc: "لحم بقر مع خس وبندورة وصوص البيت", descEn: "Beef patty, lettuce, tomato and house sauce", price: 500000, extras: SAVORY_EXTRAS },
      { name: "تشيز برغر", nameEn: "Cheese Burger", desc: "لحم بقر مع جبنة شيدر ذائبة", descEn: "Beef patty with melted cheddar", price: 550000, tags: ["best"], extras: SAVORY_EXTRAS },
      { name: "كرسبي برغر", nameEn: "Crispy Burger", desc: "دجاج مقرمش مع كول سلو", descEn: "Crispy chicken with coleslaw", price: 550000, extras: SAVORY_EXTRAS }
    ]
  },

  {
    id: "meals",
    name: "وجبات",
    nameEn: "Meals",
    items: [
      { name: "وجبة طاووق", nameEn: "Taouk Meal", desc: "طاووق مع بطاطا وثوم وسلطة", descEn: "Taouk with fries, garlic and salad", price: 750000 },
      { name: "وجبة كرسبي", nameEn: "Crispy Meal", desc: "4 قطع كرسبي مع بطاطا وكول سلو", descEn: "4 crispy pieces with fries and coleslaw", price: 800000 }
    ]
  },

  {
    id: "grills",
    name: "مشاوي",
    nameEn: "Grills",
    items: [
      { name: "شيش طاووق", nameEn: "Shish Taouk", desc: "أسياخ دجاج مشوية على الفحم", descEn: "Charcoal grilled chicken skewers", price: 800000 },
      { name: "كفتة مشوية", nameEn: "Grilled Kafta", desc: "كفتة لحم مع بقدونس وبصل", descEn: "Beef kafta with parsley and onion", price: 800000 },
      { name: "مشاوي مشكلة", nameEn: "Mixed Grill", desc: "طاووق وكفتة ولحم مع بطاطا وثوم", descEn: "Taouk, kafta and meat with fries and garlic", price: 1200000, tags: ["best"] }
    ]
  },

  {
    id: "argileh",
    name: "اراجيل",
    nameEn: "Argileh",
    items: [
      { name: "أرجيلة عجمي", nameEn: "Ajami Argileh", price: 400000 },
      { name: "أرجيلة نكهات", nameEn: "Flavored Argileh", desc: "تفاحتين، نعناع، علكة وغيرها", descEn: "Double apple, mint, gum and more", price: 450000 }
    ]
  },

  {
    id: "occasions",
    name: "مناسبات",
    nameEn: "Occasions",
    note: "نجهز طلبات أعياد الميلاد والحفلات. تواصل معنا لتحديد السعر.",
    noteEn: "We cater birthdays and parties. Message us for a price.",
    items: [
      {
        name: "كريب ستيشن للمناسبات",
        nameEn: "Live Crepe Station",
        desc: "ركن كريب مباشر في مناسبتك مع شيف",
        descEn: "A live crepe corner at your event with a chef",
        price: 0
      },
      {
        name: "صواني حلويات",
        nameEn: "Dessert Trays",
        desc: "صواني ميني كريب ووافل وبان كيك حسب عدد الضيوف",
        descEn: "Mini crepe, waffle and pancake trays for your guests",
        price: 0
      }
    ]
  }

];
