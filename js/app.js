/* ==========================================================
   SUKAR ZIYADA | Digital menu logic
   You normally never need to edit this file.
   Items, prices and settings are in js/menu-data.js
   ========================================================== */
(function () {
  "use strict";

  /* ---------- 0. Read the data file safely ---------- */
  let CFG = null;
  let DATA = null;
  try { CFG = CONFIG; DATA = MENU; } catch (e) { /* menu-data.js has a mistake */ }
  if (!CFG || !Array.isArray(DATA)) { showDataError(); return; }

  /* ---------- 1. Interface texts ---------- */
  const TEXT = {
    ar: {
      langSwitch: "English",
      share: "مشاركة",
      shareText: "تصفح قائمة سكر زيادة واطلب مباشرة عبر واتساب",
      linkCopied: "تم نسخ رابط القائمة",
      searchPh: "ابحث عن صنف، مثلاً: نوتيلا",
      clearSearch: "مسح البحث",
      cart: "سلة الطلب",
      viewCart: "عرض السلة",
      allCats: "جميع الأقسام",
      toTop: "إلى الأعلى",
      close: "إغلاق",
      backToCart: "رجوع إلى السلة",
      map: "موقعنا على الخريطة",
      openNow: "مفتوح الآن",
      closedNow: "مغلق الآن",
      until: "حتى",
      opensAt: "نفتح",
      hours: "ساعات العمل",
      to: "حتى",
      from: "يبدأ من",
      onRequest: "حسب الطلب",
      ask: "استفسر",
      askWhatsapp: "استفسر عبر واتساب",
      add: "أضف",
      added: "تمت إضافة",
      soldOut: "نفذت الكمية",
      tag_best: "الأكثر طلباً",
      tag_new: "جديد",
      tag_spicy: "حار",
      tag_offer: "عرض خاص",
      chooseSize: "اختر الحجم",
      extras: "الإضافات",
      required: "إلزامي",
      optional: "اختياري",
      free: "مجاناً",
      itemNote: "ملاحظة على هذا الصنف",
      itemNotePh: "مثلاً: بدون سكر، الصوص على الجانب",
      addToCart: "أضف إلى السلة",
      clearCart: "إفراغ السلة",
      confirmClear: "هل تريد إفراغ السلة؟",
      emptyTitle: "سلتك فارغة",
      emptySub: "اختر أصنافك من القائمة وستظهر هنا",
      browse: "تصفح القائمة",
      resendLast: "إعادة إرسال آخر طلب",
      remove: "حذف",
      subtotal: "المجموع",
      delivery: "التوصيل",
      deliveryTbd: "يُحدد عند التأكيد",
      total: "الإجمالي",
      minOrder: "الحد الأدنى للطلب",
      checkout: "متابعة الطلب",
      coTitle: "إتمام الطلب",
      orderType: "طريقة الطلب",
      type_delivery: "توصيل",
      type_pickup: "استلام",
      type_dinein: "في المطعم",
      name: "الاسم",
      namePh: "اسمك الكريم",
      phone: "رقم الهاتف",
      phonePh: "70 123 456",
      address: "عنوان التوصيل",
      addressPh: "المنطقة، الشارع، البناية، الطابق",
      myLocation: "حدد موقعي",
      locating: "جاري تحديد موقعك...",
      located: "تم تحديد موقعك",
      locFail: "تعذر تحديد الموقع، اكتب العنوان من فضلك",
      locUnsupported: "جهازك لا يدعم تحديد الموقع",
      table: "رقم الطاولة",
      tablePh: "مثلاً: 5",
      orderNote: "ملاحظات على الطلب",
      orderNotePh: "أي طلب خاص؟",
      errName: "اكتب اسمك لنعرف لمن الطلب",
      errAddress: "اكتب العنوان أو اضغط «حدد موقعي»",
      errTable: "اكتب رقم الطاولة",
      send: "إرسال الطلب عبر واتساب",
      waHint: "سيفتح واتساب ورسالة طلبك جاهزة. اضغط إرسال لتأكيده.",
      closedOrdering: "نستقبل الطلبات خلال ساعات العمل فقط",
      closedNote: "نحن مغلقون الآن. سنؤكد طلبك عند الافتتاح.",
      sentShort: "خطوة أخيرة",
      sentTitle: "طلبك جاهز",
      sentText: "فتحنا واتساب ورسالة طلبك مكتوبة. اضغط زر الإرسال في واتساب ليصلنا الطلب.",
      orderNo: "رقم الطلب",
      resend: "لم يفتح واتساب؟ اضغط هنا",
      backMenu: "العودة إلى القائمة",
      results: "نتائج البحث",
      noResults: "لا يوجد صنف بهذا الاسم",
      tryOther: "جرّب كلمة أخرى أو تصفح الأقسام",
      showAll: "عرض القائمة كاملة"
    },
    en: {
      langSwitch: "عربي",
      share: "Share",
      shareText: "Browse the Sukar Ziyada menu and order on WhatsApp",
      linkCopied: "Menu link copied",
      searchPh: "Search, e.g. Nutella",
      clearSearch: "Clear search",
      cart: "Your order",
      viewCart: "View order",
      allCats: "All sections",
      toTop: "Back to top",
      close: "Close",
      backToCart: "Back to order",
      map: "Find us on the map",
      openNow: "Open now",
      closedNow: "Closed now",
      until: "until",
      opensAt: "opens",
      hours: "Opening hours",
      to: "to",
      from: "from",
      onRequest: "On request",
      ask: "Ask",
      askWhatsapp: "Ask on WhatsApp",
      add: "Add",
      added: "Added",
      soldOut: "Sold out",
      tag_best: "Best seller",
      tag_new: "New",
      tag_spicy: "Spicy",
      tag_offer: "Special offer",
      chooseSize: "Choose a size",
      extras: "Extras",
      required: "Required",
      optional: "Optional",
      free: "Free",
      itemNote: "Note for this item",
      itemNotePh: "e.g. no sugar, sauce on the side",
      addToCart: "Add to order",
      clearCart: "Clear",
      confirmClear: "Clear your order?",
      emptyTitle: "Your order is empty",
      emptySub: "Pick items from the menu and they will appear here",
      browse: "Browse the menu",
      resendLast: "Resend last order",
      remove: "Remove",
      subtotal: "Subtotal",
      delivery: "Delivery",
      deliveryTbd: "Confirmed on WhatsApp",
      total: "Total",
      minOrder: "Minimum order",
      checkout: "Continue",
      coTitle: "Checkout",
      orderType: "Order type",
      type_delivery: "Delivery",
      type_pickup: "Pickup",
      type_dinein: "Dine in",
      name: "Name",
      namePh: "Your name",
      phone: "Phone number",
      phonePh: "70 123 456",
      address: "Delivery address",
      addressPh: "Area, street, building, floor",
      myLocation: "Use my location",
      locating: "Finding your location...",
      located: "Location added",
      locFail: "Could not get your location. Please type the address.",
      locUnsupported: "Your device does not support location",
      table: "Table number",
      tablePh: "e.g. 5",
      orderNote: "Order notes",
      orderNotePh: "Anything we should know?",
      errName: "Enter your name so we know who ordered",
      errAddress: "Type your address or tap \"Use my location\"",
      errTable: "Enter your table number",
      send: "Send order on WhatsApp",
      waHint: "WhatsApp will open with your order written. Tap send to confirm it.",
      closedOrdering: "We only take orders during opening hours",
      closedNote: "We are closed now. We will confirm your order when we open.",
      sentShort: "One last step",
      sentTitle: "Your order is ready",
      sentText: "WhatsApp is open with your order written. Tap send in WhatsApp so it reaches us.",
      orderNo: "Order number",
      resend: "WhatsApp did not open? Tap here",
      backMenu: "Back to the menu",
      results: "Search results",
      noResults: "Nothing matches that name",
      tryOther: "Try another word or browse the sections",
      showAll: "Show the full menu"
    }
  };

  /* ---------- 2. Helpers ---------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.prototype.slice.call((root || document).querySelectorAll(sel));
  const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ESC[c]);
  const toNum = (v) => {
    const n = Number(String(v == null ? "" : v).replace(/[^\d.]/g, ""));
    return isFinite(n) && n > 0 ? n : 0;
  };
  const store = {
    get(k, fallback) {
      try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
    },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  };
  const KEY = { cart: "sz_cart", lang: "sz_lang", customer: "sz_customer", last: "sz_last_order" };

  // Arabic friendly search: ignores hamza forms, taa marbuta, tashkeel
  const norm = (s) => String(s || "").toLowerCase()
    .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/\s+/g, " ")
    .trim();

  // Looser match used only when nothing matches exactly (catches spelling slips like نوتلا or nutela)
  const skeleton = (s) => norm(s).replace(/[اويaeiouy]/g, "").replace(/(.)\1+/g, "$1");

  /* ---------- 3. Build the menu from menu-data.js ---------- */
  const CATS = [];
  const ITEMS = new Map();
  const readOptions = (list) => Array.isArray(list)
    ? list.filter((o) => o && o.name).map((o) => ({ name: String(o.name), nameEn: o.nameEn || "", price: toNum(o.price) }))
    : [];

  DATA.forEach((cat, ci) => {
    if (!cat || !Array.isArray(cat.items)) return;
    const c = {
      id: String(cat.id || "section-" + (ci + 1)).trim().replace(/\s+/g, "-"),
      name: cat.name || "",
      nameEn: cat.nameEn || "",
      note: cat.note || "",
      noteEn: cat.noteEn || "",
      items: []
    };
    cat.items.forEach((raw) => {
      if (!raw || !raw.name || raw.hidden) return;
      const key = c.id + "::" + (raw.id || raw.name);
      if (ITEMS.has(key)) return;
      const item = {
        key,
        cat: c,
        name: String(raw.name),
        nameEn: raw.nameEn || "",
        desc: raw.desc || "",
        descEn: raw.descEn || "",
        price: toNum(raw.price),
        img: raw.img || "",
        tags: [].concat(raw.tags || [], raw.tag || []).map(String),
        soldOut: !!raw.soldOut,
        sizes: readOptions(raw.sizes),
        extras: readOptions(raw.extras)
      };
      ITEMS.set(key, item);
      c.items.push(item);
    });
    if (c.items.length) CATS.push(c);
  });

  const sizePrice = (it, s) => (s && s.price) || it.price;
  const isInquiry = (it) => !it.price && !it.sizes.some((s) => s.price);
  const hasOptions = (it) => it.sizes.length > 0 || it.extras.length > 0;
  const startPrice = (it) => {
    const list = it.sizes.map((s) => sizePrice(it, s)).filter((p) => p > 0);
    return list.length ? Math.min.apply(null, list) : it.price;
  };

  /* ---------- 4. State ---------- */
  const ALL_TYPES = ["delivery", "pickup", "dinein"];
  const orderTypes = (Array.isArray(CFG.orderTypes) ? CFG.orderTypes : ALL_TYPES).filter((x) => ALL_TYPES.indexOf(x) > -1);
  if (!orderTypes.length) orderTypes.push("delivery");
  const savedCustomer = store.get(KEY.customer, {}) || {};

  const state = {
    lang: store.get(KEY.lang, CFG.defaultLanguage) === "en" ? "en" : "ar",
    cart: [],
    query: "",
    type: orderTypes.indexOf(savedCustomer.type) > -1 ? savedCustomer.type : orderTypes[0],
    coords: null,
    detail: null,
    activeCat: null,
    sheet: null,
    done: false
  };

  const t = (k) => {
    const d = TEXT[state.lang];
    return d[k] != null ? d[k] : (TEXT.ar[k] != null ? TEXT.ar[k] : k);
  };
  const loc = (o, f) => (state.lang === "en" ? (o[f + "En"] || o[f] || "") : (o[f] || ""));
  const fmt = (n) => Math.round(n).toLocaleString("en-US");
  const cur = () => (state.lang === "en" ? (CFG.currencyEn || "LBP") : (CFG.currencyAr || "ل.ل"));
  const money = (n) => fmt(n) + " " + cur();
  const moneyHTML = (n) => "<bdi>" + fmt(n) + "</bdi><small>" + esc(cur()) + "</small>";
  const usd = (n) => (CFG.showUsd && CFG.usdRate > 0 && n > 0)
    ? "$" + (n / CFG.usdRate).toFixed(2).replace(/\.00$/, "")
    : "";
  const countText = (n) => {
    if (state.lang === "en") return n + (n === 1 ? " item" : " items");
    if (n === 1) return "صنف واحد";
    if (n === 2) return "صنفان";
    if (n <= 10) return n + " أصناف";
    return n + " صنفاً";
  };

  /* ---------- 5. Page elements ---------- */
  const el = {
    html: document.documentElement,
    hero: $("#hero"),
    bar: $("#bar"),
    tabs: $("#tabs"),
    sections: $("#sections"),
    results: $("#results"),
    search: $("#search"),
    searchClear: $("#searchClear"),
    cartBtn: $("#cartBtn"),
    badge: $("#cartBadge"),
    cartBarCount: $("#cartBarCount"),
    cartBarLabel: $("#cartBarLabel"),
    cartBarSum: $("#cartBarSum"),
    toast: $("#toast"),
    overlay: $("#overlay"),
    toTop: $("#toTop"),
    footer: $("#footer"),
    status: $("#status"),
    heroSocial: $("#heroSocial"),
    langBtn: $("#langBtn")
  };
  let sectionEls = [];

  /* ---------- 6. Rendering the menu ---------- */
  const TAG_ICON = { best: "fa-crown", new: "fa-star", spicy: "fa-pepper-hot", offer: "fa-tag" };

  function tagsHTML(it, center) {
    const out = [];
    if (it.soldOut) out.push('<span class="tag tag-soldout"><i class="fa-solid fa-ban"></i>' + esc(t("soldOut")) + "</span>");
    it.tags.forEach((x) => {
      if (TAG_ICON[x]) out.push('<span class="tag tag-' + x + '"><i class="fa-solid ' + TAG_ICON[x] + '"></i>' + esc(t("tag_" + x)) + "</span>");
    });
    return out.length ? '<div class="tags' + (center ? " center" : "") + '">' + out.join("") + "</div>" : "";
  }

  function priceHTML(it) {
    if (isInquiry(it)) return '<span class="item-price on-request">' + esc(t("onRequest")) + "</span>";
    const p = startPrice(it);
    const from = it.sizes.length > 1 ? '<span class="from">' + esc(t("from")) + "</span>" : "";
    const u = usd(p);
    return '<span class="item-price">' + from + moneyHTML(p) + (u ? '<span class="usd"><bdi dir="ltr">≈ ' + u + "</bdi></span>" : "") + "</span>";
  }

  const qtyOf = (key) => state.cart.reduce((a, l) => a + (l.key === key ? l.qty : 0), 0);

  function stepperHTML(key, q) {
    return '<div class="stepper" data-stop>' +
      '<button type="button" data-dec="' + esc(key) + '" aria-label="-"><i class="fa-solid ' + (q === 1 ? "fa-trash-can" : "fa-minus") + '"></i></button>' +
      "<output>" + q + "</output>" +
      '<button type="button" data-inc="' + esc(key) + '" aria-label="+"><i class="fa-solid fa-plus"></i></button>' +
      "</div>";
  }

  function controlHTML(it) {
    if (it.soldOut) return "";
    if (isInquiry(it)) {
      return '<a class="ask" href="' + esc(inquiryURL(it)) + '" target="_blank" rel="noopener" data-stop>' +
        '<i class="fa-brands fa-whatsapp"></i>' + esc(t("ask")) + "</a>";
    }
    const q = qtyOf(it.key);
    if (q > 0 && !hasOptions(it)) return stepperHTML(it.key, q);
    return '<button class="add' + (q ? " has" : "") + '" type="button" data-add="' + esc(it.key) + '" aria-label="' + esc(t("add") + " " + loc(it, "name")) + '">' +
      '<i class="fa-solid fa-plus"></i>' + (q ? '<span class="count">' + q + "</span>" : "") + "</button>";
  }

  function itemHTML(it) {
    const desc = loc(it, "desc");
    return '<article class="item' + (it.soldOut ? " soldout" : "") + '" data-open="' + esc(it.key) + '" tabindex="0">' +
      '<div class="item-main">' +
        '<div class="item-line"><h3 class="item-name">' + esc(loc(it, "name")) + '</h3><span class="leader" aria-hidden="true"></span>' + priceHTML(it) + "</div>" +
        (desc ? '<p class="item-desc">' + esc(desc) + "</p>" : "") +
        tagsHTML(it) +
      "</div>" +
      '<div class="side">' +
        (it.img ? '<div class="thumb"><img src="' + esc(it.img) + '" alt="" loading="lazy" decoding="async" data-fallback></div>' : "") +
        '<div class="ctrl" data-ctrl="' + esc(it.key) + '">' + controlHTML(it) + "</div>" +
      "</div>" +
      "</article>";
  }

  function sectionHTML(c) {
    const sub = state.lang === "en" ? (c.nameEn ? c.name : "") : c.nameEn;
    const note = loc(c, "note");
    return '<section class="section" id="sec-' + esc(c.id) + '" data-section="' + esc(c.id) + '">' +
      '<header class="section-head"><div class="ornament" aria-hidden="true"><span></span></div>' +
      '<h2 class="section-title">' + esc(loc(c, "name")) + "</h2>" +
      (sub ? '<p class="section-sub">' + esc(sub) + "</p>" : "") +
      (note ? '<p class="section-note">' + esc(note) + "</p>" : "") +
      "</header>" +
      '<div class="items">' + c.items.map(itemHTML).join("") + "</div>" +
      "</section>";
  }

  function socialHTML() {
    const L = CFG.links || {};
    const list = [
      ["instagram", "fa-brands fa-instagram", "Instagram"],
      ["whatsapp", "fa-brands fa-whatsapp", "WhatsApp"],
      ["facebook", "fa-brands fa-facebook-f", "Facebook"],
      ["tiktok", "fa-brands fa-tiktok", "TikTok"],
      ["maps", "fa-solid fa-location-dot", t("map")]
    ];
    return list.filter((x) => L[x[0]]).map((x) =>
      '<a href="' + esc(L[x[0]]) + '" target="_blank" rel="noopener" aria-label="' + esc(x[2]) + '" title="' + esc(x[2]) + '"><i class="' + x[1] + '"></i></a>'
    ).join("");
  }

  function renderTabs() {
    el.tabs.innerHTML = CATS.map((c) =>
      '<button class="tab" type="button" data-go="' + esc(c.id) + '">' + esc(loc(c, "name")) + "</button>"
    ).join("");
    highlightTab(state.activeCat || (CATS[0] && CATS[0].id), true);
  }

  /* Opening hours */
  const toMin = (s) => {
    const m = /^(\d{1,2}):(\d{2})$/.exec(String(s || "").trim());
    return m ? (+m[1]) * 60 + (+m[2]) : null;
  };
  function openInfo() {
    const h = CFG.hours;
    if (!h || !h.show) return null;
    const o = toMin(h.open);
    const c = toMin(h.close);
    if (o == null || c == null) return null;
    const d = new Date();
    const m = d.getHours() * 60 + d.getMinutes();
    const open = o === c ? true : (o < c ? (m >= o && m < c) : (m >= o || m < c));
    return { open, o: h.open, c: h.close };
  }
  function clock(s) {
    const m = toMin(s);
    let h = Math.floor(m / 60) % 24;
    const mi = m % 60;
    const pm = h >= 12;
    h = h % 12 || 12;
    return h + ":" + String(mi).padStart(2, "0") + " " + (state.lang === "en" ? (pm ? "PM" : "AM") : (pm ? "م" : "ص"));
  }
  function renderStatus() {
    const s = openInfo();
    if (!s) { el.status.hidden = true; return; }
    el.status.hidden = false;
    el.status.classList.toggle("closed", !s.open);
    el.status.innerHTML = s.open
      ? "<b>" + esc(t("openNow")) + "</b><span>" + esc(t("until")) + " " + esc(clock(s.c)) + "</span>"
      : "<b>" + esc(t("closedNow")) + "</b><span>" + esc(t("opensAt")) + " " + esc(clock(s.o)) + "</span>";
  }

  function renderFooter() {
    const h = CFG.hours;
    const showHours = h && h.show && toMin(h.open) != null && toMin(h.close) != null;
    const addr = loc(CFG, "address");
    el.footer.innerHTML =
      '<img class="footer-logo" src="images/logo-sm.png" alt="" width="76" height="76" loading="lazy">' +
      '<p class="footer-name">' + esc(state.lang === "en" ? CFG.nameEn : CFG.nameAr) + "</p>" +
      (addr ? "<p>" + esc(addr) + "</p>" : "") +
      (showHours ? "<p>" + esc(t("hours")) + ": " + esc(clock(h.open)) + " " + esc(t("to")) + " " + esc(clock(h.close)) + "</p>" : "") +
      (CFG.phone ? '<p><a href="tel:' + esc(String(CFG.phone).replace(/[^\d+]/g, "")) + '" dir="ltr">' + esc(CFG.phone) + "</a></p>" : "") +
      '<nav class="social">' + socialHTML() + "</nav>" +
      '<button class="pill-btn" type="button" data-act="lang">' + esc(t("langSwitch")) + "</button>" +
      '<p class="copyright" dir="ltr">© ' + new Date().getFullYear() + " SUKAR ZIYADA</p>";
  }

  function applyStatic() {
    el.html.lang = state.lang;
    el.html.dir = state.lang === "ar" ? "rtl" : "ltr";
    document.title = state.lang === "en" ? CFG.nameEn + " | Menu" : CFG.nameAr + " | القائمة";
    el.search.placeholder = t("searchPh");
    el.langBtn.textContent = t("langSwitch");
    $("#shareBtn").setAttribute("aria-label", t("share"));
    el.cartBtn.setAttribute("aria-label", t("cart"));
    $("#indexBtn").setAttribute("aria-label", t("allCats"));
    el.toTop.setAttribute("aria-label", t("toTop"));
    el.searchClear.setAttribute("aria-label", t("clearSearch"));
    el.cartBarLabel.textContent = t("viewCart");
    $$('button[data-act="close"]').forEach((b) => b.setAttribute("aria-label", t("close")));
    $("#cartTitle").textContent = t("cart");
    $("#clearBtn").textContent = t("clearCart");
    $("#catsTitle").textContent = t("allCats");
    $("#backBtn").setAttribute("aria-label", t("backToCart"));
    if (!state.done) $("#coTitle").textContent = t("coTitle");
  }

  function renderAll() {
    applyStatic();
    el.heroSocial.innerHTML = socialHTML();
    renderStatus();
    el.sections.innerHTML = CATS.map(sectionHTML).join("");
    sectionEls = $$(".section", el.sections);
    renderTabs();
    renderFooter();
    if (state.query) runSearch(state.query, false);
    renderCartUI();
  }

  /* ---------- 7. Search ---------- */
  function runSearch(q, scroll) {
    state.query = q;
    const nq = norm(q);
    el.searchClear.hidden = !q;
    if (!nq) {
      el.results.hidden = true;
      el.results.innerHTML = "";
      el.sections.hidden = false;
      spy();
      return;
    }
    const words = nq.split(" ");
    let hits = [];
    ITEMS.forEach((it) => {
      const hay = norm([it.name, it.nameEn, it.desc, it.descEn, it.cat.name, it.cat.nameEn].join(" "));
      if (words.every((w) => hay.indexOf(w) > -1)) hits.push(it);
    });
    if (!hits.length) {
      const loose = words.map(skeleton).filter((w) => w.length >= 2);
      if (loose.length) {
        ITEMS.forEach((it) => {
          const hay = skeleton([it.name, it.nameEn, it.cat.name, it.cat.nameEn].join(" "));
          if (loose.every((w) => hay.indexOf(w) > -1)) hits.push(it);
        });
      }
    }
    el.sections.hidden = true;
    el.results.hidden = false;
    el.results.innerHTML = hits.length
      ? '<header class="results-head"><h2>' + esc(t("results")) + "</h2><span>" + esc(countText(hits.length)) + "</span></header>" +
        '<div class="items">' + hits.map(itemHTML).join("") + "</div>"
      : '<div class="empty"><div class="empty-mark"><i class="fa-solid fa-magnifying-glass"></i></div>' +
        "<h3>" + esc(t("noResults")) + "</h3><p>" + esc(t("tryOther")) + "</p>" +
        '<button class="btn btn-line inline" type="button" data-act="clear-search">' + esc(t("showAll")) + "</button></div>";
    if (scroll) scrollToMenu();
  }

  function scrollToMenu() {
    const top = el.hero.offsetTop + el.hero.offsetHeight;
    if (Math.abs(window.scrollY - top) > 2) window.scrollTo({ top: top, behavior: "smooth" });
  }

  let searchTimer = 0;
  el.search.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      const wasEmpty = !norm(state.query);
      runSearch(el.search.value, wasEmpty && !!norm(el.search.value));
    }, 140);
  });
  el.search.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { e.preventDefault(); el.search.blur(); }
  });
  el.searchClear.addEventListener("click", (e) => {
    e.preventDefault();
    el.search.value = "";
    runSearch("", false);
    el.search.focus();
  });

  /* ---------- 8. Section tabs & scrolling ---------- */
  let autoScroll = false;
  let autoTimer = 0;
  let ticking = false;

  function highlightTab(id, instant) {
    state.activeCat = id;
    let on = null;
    $$(".tab", el.tabs).forEach((b) => {
      const active = b.getAttribute("data-go") === id;
      b.classList.toggle("active", active);
      if (active) { on = b; b.setAttribute("aria-current", "true"); } else b.removeAttribute("aria-current");
    });
    if (on) {
      const r = on.getBoundingClientRect();
      const p = el.tabs.getBoundingClientRect();
      const d = (r.left + r.width / 2) - (p.left + p.width / 2);
      if (Math.abs(d) > 2) el.tabs.scrollBy({ left: d, behavior: instant ? "auto" : "smooth" });
    }
  }

  function spy() {
    ticking = false;
    const y = window.scrollY;
    el.bar.classList.toggle("stuck", y > el.hero.offsetHeight - 2);
    el.toTop.classList.toggle("show", y > 800);
    if (state.query || autoScroll || !sectionEls.length) return;
    const line = el.bar.offsetHeight + 40;
    let current = sectionEls[0].getAttribute("data-section");
    for (let i = 0; i < sectionEls.length; i++) {
      if (sectionEls[i].getBoundingClientRect().top <= line) current = sectionEls[i].getAttribute("data-section");
      else break;
    }
    if (window.innerHeight + y >= document.documentElement.scrollHeight - 6) {
      current = sectionEls[sectionEls.length - 1].getAttribute("data-section");
    }
    if (current !== state.activeCat) highlightTab(current);
  }

  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(spy); }
  }, { passive: true });
  window.addEventListener("scrollend", () => {
    if (autoScroll) { autoScroll = false; clearTimeout(autoTimer); spy(); }
  });
  window.addEventListener("resize", () => { if (state.activeCat) highlightTab(state.activeCat, true); });

  function goTo(id) {
    if (state.query) { el.search.value = ""; runSearch("", false); }
    const sec = document.getElementById("sec-" + id);
    if (!sec) return;
    const top = sec.getBoundingClientRect().top + window.scrollY - el.bar.offsetHeight + 12;
    autoScroll = true;
    clearTimeout(autoTimer);
    highlightTab(id);
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    autoTimer = setTimeout(() => { autoScroll = false; spy(); }, 1200);
  }

  /* ---------- 9. Cart ---------- */
  const lineKey = (l) => [l.key, l.size || "", (l.extras || []).slice().sort().join("+"), (l.note || "").trim()].join("|");

  function lineInfo(l) {
    const it = ITEMS.get(l.key);
    if (!it || it.soldOut || isInquiry(it)) return null;
    let size = null;
    if (it.sizes.length) {
      size = it.sizes.filter((s) => s.name === l.size)[0];
      if (!size) return null;
    } else if (l.size) return null;
    const ex = [];
    for (let i = 0; i < l.extras.length; i++) {
      const x = it.extras.filter((e) => e.name === l.extras[i])[0];
      if (!x) return null;
      ex.push(x);
    }
    const unit = (size ? sizePrice(it, size) : it.price) + ex.reduce((a, x) => a + x.price, 0);
    return { it, size, ex, unit, total: unit * l.qty };
  }

  const saveCart = () => store.set(KEY.cart, state.cart);

  function loadCart() {
    const raw = store.get(KEY.cart, []);
    state.cart = (Array.isArray(raw) ? raw : [])
      .map((l) => (l && typeof l.key === "string") ? {
        key: l.key,
        size: l.size || null,
        extras: Array.isArray(l.extras) ? l.extras.map(String) : [],
        note: String(l.note || ""),
        qty: Math.max(1, Math.min(99, parseInt(l.qty, 10) || 1))
      } : null)
      .filter((l) => l && lineInfo(l));
    saveCart();
  }

  function totals() {
    let sub = 0;
    let count = 0;
    state.cart.forEach((l) => {
      const i = lineInfo(l);
      if (i) { sub += i.total; count += l.qty; }
    });
    const fee = state.type === "delivery" && CFG.deliveryFee > 0 ? toNum(CFG.deliveryFee) : 0;
    return { sub, count, fee, total: sub + fee };
  }

  function addLine(it, size, extras, note, qty) {
    const l = { key: it.key, size: size || null, extras: extras || [], note: (note || "").trim(), qty: qty || 1 };
    const k = lineKey(l);
    const same = state.cart.filter((x) => lineKey(x) === k)[0];
    if (same) same.qty = Math.min(99, same.qty + l.qty);
    else state.cart.push(l);
    saveCart();
    renderCartUI();
  }

  function setQty(i, q) {
    if (!state.cart[i]) return;
    if (q <= 0) state.cart.splice(i, 1);
    else state.cart[i].qty = Math.min(99, q);
    saveCart();
    renderCartUI();
  }

  function quickAdd(key, fromEl) {
    const it = ITEMS.get(key);
    if (!it || it.soldOut) return;
    if (hasOptions(it)) { openItem(key); return; }
    addLine(it, null, [], "", 1);
    feedback(it, fromEl);
  }

  function stepSimple(key, d) {
    const it = ITEMS.get(key);
    if (!it) return;
    if (d > 0) { addLine(it, null, [], "", 1); bumpCart(); vibrate(10); return; }
    let idx = -1;
    for (let i = state.cart.length - 1; i >= 0; i--) {
      if (state.cart[i].key === key) { idx = i; if (!state.cart[i].note) break; }
    }
    if (idx > -1) setQty(idx, state.cart[idx].qty - 1);
  }

  function renderCartUI() {
    const s = totals();
    el.badge.textContent = s.count;
    el.badge.classList.toggle("show", s.count > 0);
    el.cartBarCount.textContent = s.count;
    el.cartBarSum.textContent = money(s.sub);
    document.body.classList.toggle("has-cart", s.count > 0);
    $$("[data-ctrl]").forEach((c) => {
      const it = ITEMS.get(c.getAttribute("data-ctrl"));
      if (it) c.innerHTML = controlHTML(it);
    });
    if (state.sheet === "cartSheet") renderCart();
    if (state.sheet === "checkoutSheet" && !state.done) {
      const box = $("#coSummary");
      if (box) box.innerHTML = summaryHTML();
    }
  }

  function summaryHTML() {
    const s = totals();
    let html = '<div class="summary">' +
      '<div class="sum-row"><span>' + esc(t("subtotal")) + "</span><span>" + moneyHTML(s.sub) + "</span></div>";
    if (state.type === "delivery") {
      html += '<div class="sum-row"><span>' + esc(t("delivery")) + "</span><span>" +
        (s.fee ? moneyHTML(s.fee) : esc(t("deliveryTbd"))) + "</span></div>";
    }
    html += '<div class="sum-row total"><span>' + esc(t("total")) + "</span><b>" + moneyHTML(s.total) + "</b></div>";
    const u = usd(s.total);
    if (u) html += '<div class="sum-row usd-row"><bdi dir="ltr">≈ ' + u + "</bdi></div>";
    html += "</div>";
    if (CFG.minOrder > 0 && s.sub < CFG.minOrder) {
      html += '<p class="notice"><i class="fa-solid fa-circle-info"></i><span>' + esc(t("minOrder")) + ": " + esc(money(CFG.minOrder)) + "</span></p>";
    }
    return html;
  }

  function lastOrder() {
    const l = store.get(KEY.last, null);
    return l && l.url && Date.now() - l.at < 6 * 3600 * 1000 ? l : null;
  }

  function renderCart() {
    const body = $("#cartBody");
    const foot = $("#cartFoot");
    $("#clearBtn").hidden = !state.cart.length;
    if (!state.cart.length) {
      const last = lastOrder();
      body.innerHTML = '<div class="empty"><div class="empty-mark"><i class="fa-solid fa-bag-shopping"></i></div>' +
        "<h3>" + esc(t("emptyTitle")) + "</h3><p>" + esc(t("emptySub")) + "</p>" +
        '<button class="btn btn-line inline" type="button" data-act="close">' + esc(t("browse")) + "</button>" +
        (last ? '<p class="resend-last"><a href="' + esc(last.url) + '" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> ' +
          esc(t("resendLast")) + " <bdi>" + esc(last.id) + "</bdi></a></p>" : "") +
        "</div>";
      foot.innerHTML = "";
      return;
    }
    const sep = state.lang === "en" ? ", " : "، ";
    body.innerHTML = state.cart.map((l, i) => {
      const info = lineInfo(l);
      if (!info) return "";
      const it = info.it;
      const opts = [info.size ? loc(info.size, "name") : ""]
        .concat(info.ex.map((x) => "+ " + loc(x, "name")))
        .filter(Boolean).join(sep);
      return '<div class="line">' +
        (it.img ? '<div class="line-thumb"><img src="' + esc(it.img) + '" alt="" loading="lazy" data-fallback></div>' : "") +
        '<div class="line-main">' +
          '<div class="line-top"><h3 class="line-name">' + esc(loc(it, "name")) + "</h3>" +
            '<button class="line-del" type="button" data-line-del="' + i + '" aria-label="' + esc(t("remove")) + '"><i class="fa-solid fa-xmark"></i></button></div>' +
          (opts ? '<p class="line-opts">' + esc(opts) + "</p>" : "") +
          (l.note ? '<p class="line-note"><i class="fa-solid fa-pen"></i>' + esc(l.note) + "</p>" : "") +
          '<div class="line-bottom"><div class="stepper sm">' +
            '<button type="button" data-line-dec="' + i + '" aria-label="-"><i class="fa-solid ' + (l.qty === 1 ? "fa-trash-can" : "fa-minus") + '"></i></button>' +
            "<output>" + l.qty + "</output>" +
            '<button type="button" data-line-inc="' + i + '" aria-label="+"><i class="fa-solid fa-plus"></i></button>' +
          '</div><span class="line-price">' + moneyHTML(info.total) + "</span></div>" +
        "</div></div>";
    }).join("") + summaryHTML();
    foot.innerHTML = '<button class="btn btn-gold split" type="button" data-act="checkout"><span>' + esc(t("checkout")) +
      '</span><span class="sum">' + esc(money(totals().total)) + "</span></button>";
  }

  /* ---------- 10. Item details ---------- */
  function openItem(key) {
    const it = ITEMS.get(key);
    if (!it) return;
    state.detail = { key, size: it.sizes.length ? it.sizes[0].name : null, extras: [], qty: 1, note: "" };
    renderDetail();
    openSheet("itemSheet");
    $("#itemBody").scrollTop = 0;
  }

  function detailUnit() {
    const d = state.detail;
    const it = ITEMS.get(d.key);
    let u = it.price;
    if (it.sizes.length) u = sizePrice(it, it.sizes.filter((x) => x.name === d.size)[0]);
    it.extras.forEach((x) => { if (d.extras.indexOf(x.name) > -1) u += x.price; });
    return u;
  }

  function renderDetail() {
    const d = state.detail;
    const it = ITEMS.get(d.key);
    const alt = state.lang === "en" ? (it.nameEn ? it.name : "") : it.nameEn;
    const desc = loc(it, "desc");
    const media = it.img ? '<div class="detail-media"><img src="' + esc(it.img) + '" alt="' + esc(loc(it, "name")) + '" data-fallback></div>' : "";
    let html = media + '<div class="detail' + (media ? "" : " bare") + '"><div class="detail-head">' +
      (media ? "" : '<div class="ornament" aria-hidden="true"><span></span></div>') +
      '<h2 class="detail-name">' + esc(loc(it, "name")) + "</h2>" +
      (alt ? '<p class="detail-alt">' + esc(alt) + "</p>" : "") +
      tagsHTML(it, !media) + "</div>";
    if (desc) html += '<p class="detail-desc">' + esc(desc) + "</p>";
    html += '<p class="detail-price">' + (isInquiry(it)
      ? esc(t("onRequest"))
      : (it.sizes.length > 1 ? '<span class="from">' + esc(t("from")) + "</span> " : "") + moneyHTML(startPrice(it))) + "</p>";

    if (!it.soldOut && !isInquiry(it)) {
      if (it.sizes.length) {
        html += '<div class="opt-group"><div class="opt-head"><h3>' + esc(t("chooseSize")) + "</h3><span>" + esc(t("required")) + "</span></div>" +
          it.sizes.map((s, i) =>
            '<label class="opt' + (d.size === s.name ? " on" : "") + '"><input type="radio" name="sz-size" value="' + i + '"' + (d.size === s.name ? " checked" : "") + ">" +
            '<span class="opt-name">' + esc(loc(s, "name")) + '</span><span class="opt-price">' + moneyHTML(sizePrice(it, s)) + "</span></label>"
          ).join("") + "</div>";
      }
      if (it.extras.length) {
        html += '<div class="opt-group"><div class="opt-head"><h3>' + esc(t("extras")) + "</h3><span>" + esc(t("optional")) + "</span></div>" +
          it.extras.map((x, i) =>
            '<label class="opt"><input type="checkbox" value="' + i + '" data-extra>' +
            '<span class="opt-name">' + esc(loc(x, "name")) + '</span><span class="opt-price">' + (x.price ? "+ " + moneyHTML(x.price) : esc(t("free"))) + "</span></label>"
          ).join("") + "</div>";
      }
      html += '<div class="field opt-group"><label for="itemNote">' + esc(t("itemNote")) + "</label>" +
        '<textarea class="input" id="itemNote" rows="2" placeholder="' + esc(t("itemNotePh")) + '"></textarea></div>';
    }
    html += "</div>";
    $("#itemBody").innerHTML = html;
    renderDetailFoot();
  }

  function renderDetailFoot() {
    const d = state.detail;
    const it = ITEMS.get(d.key);
    const f = $("#itemFoot");
    if (it.soldOut) {
      f.innerHTML = '<button class="btn btn-line" type="button" disabled>' + esc(t("soldOut")) + "</button>";
      return;
    }
    if (isInquiry(it)) {
      f.innerHTML = '<a class="btn btn-gold" href="' + esc(inquiryURL(it)) + '" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i><span>' + esc(t("askWhatsapp")) + "</span></a>";
      return;
    }
    f.innerHTML = '<div class="foot-row"><div class="stepper lg">' +
      '<button type="button" data-act="d-dec" aria-label="-"' + (d.qty <= 1 ? " disabled" : "") + '><i class="fa-solid fa-minus"></i></button>' +
      "<output>" + d.qty + "</output>" +
      '<button type="button" data-act="d-inc" aria-label="+"><i class="fa-solid fa-plus"></i></button></div>' +
      '<button class="btn btn-gold split" type="button" data-act="d-add" aria-label="' + esc(t("addToCart")) + '"><span>' + esc(t("add")) + '</span><span class="sum">' + esc(money(detailUnit() * d.qty)) + "</span></button></div>";
  }

  function updateDetailFoot() {
    const d = state.detail;
    const f = $("#itemFoot");
    const out = f.querySelector("output");
    if (!d || !out) { if (d) renderDetailFoot(); return; }
    out.textContent = d.qty;
    f.querySelector('[data-act="d-dec"]').disabled = d.qty <= 1;
    f.querySelector(".sum").textContent = money(detailUnit() * d.qty);
  }

  $("#itemBody").addEventListener("change", (e) => {
    const inp = e.target;
    const d = state.detail;
    if (!d || inp.tagName !== "INPUT") return;
    const it = ITEMS.get(d.key);
    if (inp.name === "sz-size") d.size = it.sizes[+inp.value].name;
    else if (inp.hasAttribute("data-extra")) {
      const n = it.extras[+inp.value].name;
      d.extras = d.extras.filter((x) => x !== n);
      if (inp.checked) d.extras.push(n);
    }
    $$("#itemBody .opt").forEach((o) => o.classList.toggle("on", o.querySelector("input").checked));
    updateDetailFoot();
  });
  $("#itemBody").addEventListener("input", (e) => {
    if (e.target.id === "itemNote" && state.detail) state.detail.note = e.target.value;
  });

  /* ---------- 11. Checkout & WhatsApp ---------- */
  const TYPE_ICON = { delivery: "fa-motorcycle", pickup: "fa-bag-shopping", dinein: "fa-utensils" };
  const TYPE_EMOJI = { delivery: "🛵", pickup: "🛍️", dinein: "🍽️" };

  function renderCheckout() {
    state.done = false;
    $("#coTitle").textContent = t("coTitle");
    $("#backBtn").hidden = false;
    const c = store.get(KEY.customer, {}) || {};
    const st = openInfo();
    const blocked = st && !st.open && CFG.acceptOrdersWhenClosed === false;
    $("#coBody").innerHTML =
      (orderTypes.length > 1
        ? '<div class="field"><span class="field-label">' + esc(t("orderType")) + '</span><div class="seg" role="radiogroup">' +
          orderTypes.map((ty) => '<button type="button" role="radio" data-type="' + ty + '"><i class="fa-solid ' + TYPE_ICON[ty] + '"></i>' + esc(t("type_" + ty)) + "</button>").join("") +
          "</div></div>"
        : "") +
      '<div class="field"><label for="fName">' + esc(t("name")) + ' <span class="req">*</span></label>' +
        '<input class="input" id="fName" autocomplete="name" value="' + esc(c.name || "") + '" placeholder="' + esc(t("namePh")) + '"><p class="error-text" hidden></p></div>' +
      '<div class="field"><label for="fPhone">' + esc(t("phone")) + "</label>" +
        '<input class="input" id="fPhone" type="tel" inputmode="tel" autocomplete="tel" dir="ltr" value="' + esc(c.phone || "") + '" placeholder="' + esc(t("phonePh")) + '"></div>' +
      '<div class="field" data-when="delivery"><label for="fAddress">' + esc(t("address")) + ' <span class="req">*</span></label>' +
        '<textarea class="input" id="fAddress" rows="2" autocomplete="street-address" placeholder="' + esc(t("addressPh")) + '">' + esc(c.address || "") + "</textarea>" +
        '<div class="loc-row"><button class="loc-btn' + (state.coords ? " done" : "") + '" type="button" data-act="locate">' +
          '<i class="fa-solid ' + (state.coords ? "fa-circle-check" : "fa-location-crosshairs") + '"></i><span>' + esc(state.coords ? t("located") : t("myLocation")) + "</span></button>" +
          '<span class="loc-status" id="locStatus"></span></div><p class="error-text" hidden></p></div>' +
      '<div class="field" data-when="dinein"><label for="fTable">' + esc(t("table")) + ' <span class="req">*</span></label>' +
        '<input class="input" id="fTable" inputmode="numeric" placeholder="' + esc(t("tablePh")) + '"><p class="error-text" hidden></p></div>' +
      '<div class="field"><label for="fNote">' + esc(t("orderNote")) + "</label>" +
        '<textarea class="input" id="fNote" rows="2" placeholder="' + esc(t("orderNotePh")) + '"></textarea></div>' +
      '<div id="coSummary"></div>' +
      (st && !st.open ? '<p class="notice"><i class="fa-solid fa-clock"></i><span>' + esc(blocked ? t("closedOrdering") : t("closedNote")) + "</span></p>" : "");
    $("#coFoot").innerHTML = '<button class="btn btn-gold" type="button" data-act="send"' + (blocked ? " disabled" : "") + ">" +
      '<i class="fa-brands fa-whatsapp"></i><span>' + esc(t("send")) + "</span></button>" +
      '<p class="hint">' + esc(t("waHint")) + "</p>";
    syncType();
  }

  function syncType() {
    $$("#coBody [data-type]").forEach((b) => {
      const on = b.getAttribute("data-type") === state.type;
      b.classList.toggle("on", on);
      b.setAttribute("aria-checked", on ? "true" : "false");
    });
    $$("#coBody [data-when]").forEach((f) => { f.hidden = f.getAttribute("data-when") !== state.type; });
    const box = $("#coSummary");
    if (box) box.innerHTML = summaryHTML();
  }

  function fieldError(id, msg) {
    const inp = document.getElementById(id);
    if (!inp) return;
    const field = inp.closest(".field");
    const p = field && field.querySelector(".error-text");
    inp.classList.toggle("invalid", !!msg);
    if (p) { p.textContent = msg || ""; p.hidden = !msg; }
  }

  $("#coBody").addEventListener("input", (e) => {
    if (e.target.classList && e.target.classList.contains("invalid")) fieldError(e.target.id, "");
  });

  function locate(btn) {
    const status = $("#locStatus");
    if (!navigator.geolocation) {
      status.textContent = t("locUnsupported");
      status.className = "loc-status err";
      return;
    }
    status.textContent = t("locating");
    status.className = "loc-status";
    btn.disabled = true;
    navigator.geolocation.getCurrentPosition((p) => {
      state.coords = { lat: +p.coords.latitude.toFixed(6), lng: +p.coords.longitude.toFixed(6) };
      btn.disabled = false;
      btn.classList.add("done");
      btn.innerHTML = '<i class="fa-solid fa-circle-check"></i><span>' + esc(t("located")) + "</span>";
      status.textContent = "";
      fieldError("fAddress", "");
    }, () => {
      btn.disabled = false;
      status.textContent = t("locFail");
      status.className = "loc-status err";
    }, { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 });
  }

  const waLink = (text) => "https://wa.me/" + String(CFG.whatsapp || "").replace(/\D/g, "") + "?text=" + encodeURIComponent(text);

  function inquiryURL(it) {
    return waLink("مرحباً " + CFG.nameAr + " 👋\nأود الاستفسار عن: " + it.name);
  }

  function makeOrderId() {
    const d = new Date();
    const p = (n) => String(n).padStart(2, "0");
    return "SZ-" + p(d.getDate()) + p(d.getMonth() + 1) + "-" + Math.floor(100 + Math.random() * 900);
  }

  // The WhatsApp message is always in Arabic so the team reads every order the same way
  function buildMessage(id, d) {
    const A = TEXT.ar;
    const C = CFG.currencyAr || "ل.ل";
    const m = (n) => fmt(n) + " " + C;
    const rule = "━━━━━━━━━━━━";
    const L = [];
    L.push("🧾 *طلب جديد | " + CFG.nameAr + "*");
    L.push("رقم الطلب: " + id);
    L.push(rule);
    L.push("👤 الاسم: " + d.name);
    if (d.phone) L.push("📞 الهاتف: " + d.phone);
    L.push(TYPE_EMOJI[state.type] + " نوع الطلب: " + A["type_" + state.type]);
    if (state.type === "delivery") {
      if (d.address) L.push("🏠 العنوان: " + d.address);
      if (state.coords) L.push("📍 الموقع: https://maps.google.com/?q=" + state.coords.lat + "," + state.coords.lng);
    }
    if (state.type === "dinein") L.push("🪑 رقم الطاولة: " + d.table);
    L.push(rule);
    L.push("*تفاصيل الطلب:*");
    let n = 0;
    state.cart.forEach((l) => {
      const i = lineInfo(l);
      if (!i) return;
      n++;
      L.push(n + ") " + l.qty + " × " + i.it.name + (i.size ? " (" + i.size.name + ")" : ""));
      if (i.ex.length) L.push("     + " + i.ex.map((x) => x.name).join("، "));
      if (l.note) L.push("     ✏️ " + l.note);
      L.push("     = " + m(i.total));
    });
    L.push(rule);
    const s = totals();
    L.push("المجموع: " + m(s.sub));
    if (state.type === "delivery") L.push("التوصيل: " + (s.fee ? m(s.fee) : A.deliveryTbd));
    L.push("*الإجمالي: " + m(s.total) + "*");
    if (d.note) { L.push(""); L.push("📝 ملاحظات: " + d.note); }
    if (state.lang === "en") { L.push(""); L.push("🌐 لغة الزبون: English"); }
    return L.join("\n");
  }

  function sendOrder() {
    if (!state.cart.length) return;
    const v = (id) => { const x = document.getElementById(id); return x ? x.value.trim() : ""; };
    const data = { name: v("fName"), phone: v("fPhone"), address: v("fAddress"), table: v("fTable"), note: v("fNote") };
    let firstBad = null;
    const bad = (id, msg) => { fieldError(id, msg); if (!firstBad) firstBad = id; };
    ["fName", "fAddress", "fTable"].forEach((id) => fieldError(id, ""));
    if (!data.name) bad("fName", t("errName"));
    if (state.type === "delivery" && !data.address && !state.coords) bad("fAddress", t("errAddress"));
    if (state.type === "dinein" && !data.table) bad("fTable", t("errTable"));
    if (firstBad) {
      const x = document.getElementById(firstBad);
      x.focus({ preventScroll: true });
      x.scrollIntoView({ block: "center", behavior: "smooth" });
      vibrate([30, 40, 30]);
      return;
    }
    const s = totals();
    if (CFG.minOrder > 0 && s.sub < CFG.minOrder) { toast(t("minOrder") + ": " + money(CFG.minOrder), "err"); return; }
    const st = openInfo();
    if (st && !st.open && CFG.acceptOrdersWhenClosed === false) { toast(t("closedOrdering"), "err"); return; }

    store.set(KEY.customer, { name: data.name, phone: data.phone, address: data.address, type: state.type });
    const id = makeOrderId();
    const url = waLink(buildMessage(id, data));
    store.set(KEY.last, { id: id, url: url, at: Date.now() });

    state.cart = [];
    state.coords = null;
    saveCart();
    showSuccess(id, url);
    renderCartUI();
    chime(true);
    openWhatsApp(url);
  }

  function openWhatsApp(url) {
    const w = window.open(url, "_blank");
    if (!w) window.location.href = url;
  }

  function showSuccess(id, url) {
    state.done = true;
    $("#coTitle").textContent = t("sentShort");
    $("#backBtn").hidden = true;
    $("#coBody").innerHTML = '<div class="success"><div class="success-mark"><i class="fa-solid fa-check"></i></div>' +
      "<h3>" + esc(t("sentTitle")) + "</h3><p>" + esc(t("sentText")) + "</p>" +
      '<span class="order-no-label">' + esc(t("orderNo")) + '</span><span class="order-no">' + esc(id) + "</span></div>";
    $("#coFoot").innerHTML = '<a class="btn btn-gold" href="' + esc(url) + '" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i><span>' + esc(t("resend")) + "</span></a>" +
      '<button class="btn btn-line" type="button" data-act="close">' + esc(t("backMenu")) + "</button>";
    $("#coBody").scrollTop = 0;
  }

  /* ---------- 12. Sections index ---------- */
  function renderCats() {
    $("#catsTitle").textContent = t("allCats");
    $("#catsBody").innerHTML = '<div class="toc">' + CATS.map((c) => {
      const sub = state.lang === "en" ? (c.nameEn ? c.name : "") : c.nameEn;
      return '<button class="toc-row" type="button" data-go="' + esc(c.id) + '">' +
        '<span class="toc-name"><span class="toc-main">' + esc(loc(c, "name")) + "</span>" + (sub ? '<span class="toc-sub">' + esc(sub) + "</span>" : "") + "</span>" +
        '<span class="leader" aria-hidden="true"></span><span class="toc-count">' + esc(countText(c.items.length)) + "</span></button>";
    }).join("") + "</div>";
  }

  /* ---------- 13. Panels (open, close, back button, swipe) ---------- */
  let afterClose = null;
  let closeGuard = 0;

  function openSheet(id) {
    const next = document.getElementById(id);
    if (state.sheet === id) return;
    if (state.sheet) {
      hideSheet(state.sheet);
      try { history.replaceState({ szSheet: id }, ""); } catch (e) { /* ignore */ }
    } else {
      try { history.pushState({ szSheet: id }, ""); } catch (e) { /* ignore */ }
    }
    state.sheet = id;
    if (!el.toast.classList.contains("err")) el.toast.classList.remove("show");
    next.classList.add("open");
    next.setAttribute("aria-hidden", "false");
    el.overlay.classList.add("show");
    el.html.classList.add("lock");
  }

  function hideSheet(id) {
    const s = document.getElementById(id);
    s.classList.remove("open");
    s.setAttribute("aria-hidden", "true");
    s.style.transform = "";
  }

  function closeSheet(cb) {
    if (!state.sheet) { if (cb) cb(); return; }
    afterClose = cb || null;
    if (history.state && history.state.szSheet) {
      const was = state.sheet;
      history.back();
      clearTimeout(closeGuard);
      closeGuard = setTimeout(() => { if (state.sheet === was) finishClose(); }, 450);
    } else {
      finishClose();
    }
  }

  function finishClose() {
    if (!state.sheet) return;
    hideSheet(state.sheet);
    state.sheet = null;
    state.done = false;
    el.overlay.classList.remove("show");
    el.html.classList.remove("lock");
    const cb = afterClose;
    afterClose = null;
    if (cb) setTimeout(cb, 20);
  }

  window.addEventListener("popstate", () => {
    clearTimeout(closeGuard);
    if (state.sheet) finishClose();
  });

  function enableDrag(sheet) {
    let y0 = null;
    let dy = 0;
    const start = (e) => {
      if (window.innerWidth >= 760 || e.target.closest("button")) return;
      y0 = e.touches[0].clientY;
      dy = 0;
      sheet.classList.add("dragging");
    };
    const move = (e) => {
      if (y0 === null) return;
      dy = Math.max(0, e.touches[0].clientY - y0);
      sheet.style.transform = "translateY(" + dy + "px)";
    };
    const end = () => {
      if (y0 === null) return;
      y0 = null;
      sheet.classList.remove("dragging");
      if (dy > 100) closeSheet();
      else sheet.style.transform = "";
    };
    $$(".sheet-grab, .sheet-head", sheet).forEach((h) => {
      h.addEventListener("touchstart", start, { passive: true });
      h.addEventListener("touchmove", move, { passive: true });
      h.addEventListener("touchend", end);
      h.addEventListener("touchcancel", end);
    });
  }

  /* ---------- 14. Feedback: toast, sound, vibration, flying dot ---------- */
  let toastTimer = 0;
  function toast(msg, kind) {
    el.toast.classList.toggle("err", kind === "err");
    el.toast.innerHTML = '<span class="toast-icon"><i class="fa-solid ' + (kind === "err" ? "fa-exclamation" : "fa-check") + '"></i></span>' +
      '<span class="toast-msg">' + esc(msg) + "</span>";
    el.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.toast.classList.remove("show"), 2800);
  }

  const vibrate = (p) => { try { if (navigator.vibrate) navigator.vibrate(p); } catch (e) { /* ignore */ } };

  let audio = null;
  function chime(big) {
    if (CFG.sound === false) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      audio = audio || new AC();
      if (audio.state === "suspended") audio.resume();
      const now = audio.currentTime;
      (big ? [784, 988, 1319] : [988, 1319]).forEach((f, i) => {
        const o = audio.createOscillator();
        const g = audio.createGain();
        const s = now + i * 0.075;
        o.type = "sine";
        o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, s);
        g.gain.exponentialRampToValueAtTime(0.09, s + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, s + 0.32);
        o.connect(g);
        g.connect(audio.destination);
        o.start(s);
        o.stop(s + 0.34);
      });
    } catch (e) { /* sound is optional */ }
  }

  function bumpCart() {
    el.cartBtn.classList.remove("bump");
    void el.cartBtn.offsetWidth;
    el.cartBtn.classList.add("bump");
  }

  function fly(fromEl) {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fromEl || reduce || !document.body.animate) { bumpCart(); return; }
    const a = fromEl.getBoundingClientRect();
    const b = el.cartBtn.getBoundingClientRect();
    const dot = document.createElement("div");
    dot.className = "fly-dot";
    dot.style.left = (a.left + a.width / 2 - 8) + "px";
    dot.style.top = (a.top + a.height / 2 - 8) + "px";
    document.body.appendChild(dot);
    const dx = (b.left + b.width / 2) - (a.left + a.width / 2);
    const dy = (b.top + b.height / 2) - (a.top + a.height / 2);
    const anim = dot.animate([
      { transform: "translate(0,0) scale(1)", opacity: 1 },
      { transform: "translate(" + dx * 0.45 + "px," + (dy * 0.45 - 70) + "px) scale(1.15)", opacity: 1, offset: 0.5 },
      { transform: "translate(" + dx + "px," + dy + "px) scale(.35)", opacity: 0.7 }
    ], { duration: 620, easing: "cubic-bezier(.5,0,.3,1)" });
    anim.onfinish = () => { dot.remove(); bumpCart(); };
  }

  function feedback(it, fromEl) {
    toast(t("added") + " " + loc(it, "name"));
    chime(false);
    vibrate(20);
    if (fromEl) fly(fromEl); else bumpCart();
  }

  function share() {
    const url = location.href.split("#")[0];
    const data = { title: CFG.nameAr + " | " + CFG.nameEn, text: t("shareText"), url: url };
    if (navigator.share) { navigator.share(data).catch(() => {}); return; }
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(() => toast(t("linkCopied")), () => {});
  }

  function setLang(l) {
    state.lang = l;
    store.set(KEY.lang, l);
    renderAll();
    if (state.sheet === "cartSheet") renderCart();
    if (state.sheet === "catsSheet") renderCats();
  }

  /* ---------- 15. One click handler for the whole page ---------- */
  function act(a, n) {
    const d = state.detail;
    switch (a) {
      case "open-cart":
      case "back-cart":
        renderCart();
        openSheet("cartSheet");
        break;
      case "checkout":
        if (!state.cart.length) return;
        renderCheckout();
        openSheet("checkoutSheet");
        $("#coBody").scrollTop = 0;
        break;
      case "close":
        closeSheet();
        break;
      case "clear-cart":
        if (window.confirm(t("confirmClear"))) { state.cart = []; saveCart(); renderCartUI(); }
        break;
      case "send":
        sendOrder();
        break;
      case "locate":
        locate(n);
        break;
      case "open-cats":
        renderCats();
        openSheet("catsSheet");
        break;
      case "lang":
        setLang(state.lang === "ar" ? "en" : "ar");
        break;
      case "share":
        share();
        break;
      case "to-top":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "clear-search":
        el.search.value = "";
        runSearch("", false);
        break;
      case "d-inc":
        if (d) { d.qty = Math.min(99, d.qty + 1); updateDetailFoot(); }
        break;
      case "d-dec":
        if (d) { d.qty = Math.max(1, d.qty - 1); updateDetailFoot(); }
        break;
      case "d-add": {
        if (!d) return;
        const it = ITEMS.get(d.key);
        if (it.sizes.length && !d.size) return;
        addLine(it, d.size, d.extras.slice(), d.note, d.qty);
        closeSheet(() => feedback(it));
        break;
      }
      default:
        break;
    }
  }

  document.addEventListener("click", (e) => {
    const x = e.target;
    if (!x || !x.closest) return;
    let n;
    if ((n = x.closest("[data-add]"))) { quickAdd(n.getAttribute("data-add"), n); return; }
    if ((n = x.closest("[data-inc]"))) { stepSimple(n.getAttribute("data-inc"), 1); return; }
    if ((n = x.closest("[data-dec]"))) { stepSimple(n.getAttribute("data-dec"), -1); return; }
    if ((n = x.closest("[data-line-inc]"))) { const i = +n.getAttribute("data-line-inc"); if (state.cart[i]) setQty(i, state.cart[i].qty + 1); return; }
    if ((n = x.closest("[data-line-dec]"))) { const i = +n.getAttribute("data-line-dec"); if (state.cart[i]) setQty(i, state.cart[i].qty - 1); return; }
    if ((n = x.closest("[data-line-del]"))) { setQty(+n.getAttribute("data-line-del"), 0); return; }
    if ((n = x.closest("[data-type]"))) { state.type = n.getAttribute("data-type"); syncType(); return; }
    if ((n = x.closest("[data-go]"))) {
      const id = n.getAttribute("data-go");
      if (state.sheet) closeSheet(() => goTo(id)); else goTo(id);
      return;
    }
    if (x.closest("[data-stop]")) return;
    if ((n = x.closest("[data-act]"))) { act(n.getAttribute("data-act"), n); return; }
    if ((n = x.closest("[data-open]"))) openItem(n.getAttribute("data-open"));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && state.sheet) { closeSheet(); return; }
    const x = e.target;
    if ((e.key === "Enter" || e.key === " ") && x && x.matches && x.matches("[data-open]")) {
      e.preventDefault();
      openItem(x.getAttribute("data-open"));
    }
  });

  // A missing photo simply disappears instead of showing a broken image
  document.addEventListener("error", (e) => {
    const img = e.target;
    if (img && img.tagName === "IMG" && img.hasAttribute("data-fallback")) {
      const box = img.parentNode;
      if (box && box.parentNode) box.parentNode.removeChild(box);
    }
  }, true);

  /* ---------- 16. Start ---------- */
  if (history.state && history.state.szSheet) {
    try { history.replaceState(null, ""); } catch (e) { /* ignore */ }
  }
  loadCart();
  renderAll();
  $$(".sheet").forEach(enableDrag);
  spy();
  setInterval(renderStatus, 60000);

  /* ---------- Shown only if menu-data.js has a mistake ---------- */
  function showDataError() {
    const box = document.createElement("div");
    box.className = "data-error";
    box.innerHTML = "<h2>⚠️ يوجد خطأ في ملف القائمة</h2>" +
      "<p>تعذرت قراءة الملف <b>js/menu-data.js</b>. السبب غالباً فاصلة ناقصة أو علامة تنصيص غير مغلقة في آخر تعديل. راجع التعديل الأخير وصححه.</p>" +
      '<p dir="ltr" style="text-align:left">The file js/menu-data.js could not be read. This is usually a missing comma or quote in the last edit.</p>';
    const main = document.getElementById("menu");
    (main || document.body).prepend(box);
  }
})();
