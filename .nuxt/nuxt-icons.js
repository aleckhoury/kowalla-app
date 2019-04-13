export default async function (ctx, inject) {
  const moduleOptions = {"accessibleIcons":true,"iconProperty":"$icon","icons":{"64":"\u002F_nuxt\u002Ficons\u002Ficon_64.8408w000280.png","120":"\u002F_nuxt\u002Ficons\u002Ficon_120.8408w000280.png","144":"\u002F_nuxt\u002Ficons\u002Ficon_144.8408w000280.png","152":"\u002F_nuxt\u002Ficons\u002Ficon_152.8408w000280.png","192":"\u002F_nuxt\u002Ficons\u002Ficon_192.8408w000280.png","384":"\u002F_nuxt\u002Ficons\u002Ficon_384.8408w000280.png","512":"\u002F_nuxt\u002Ficons\u002Ficon_512.8408w000280.png"}}
  inject(moduleOptions.iconProperty.replace('$', ''), retrieveIcons(moduleOptions.icons))
}

const retrieveIcons = icons => size => icons[size] || ''
