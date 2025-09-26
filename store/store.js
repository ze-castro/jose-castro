//// EVENT LISTENERS ////
// products breadcrumbs buttons
const productsBreadcrumbs = document.querySelector('.products-breadcrumbs');
const productsBreadcrumbsButtons = productsBreadcrumbs.getElementsByTagName('button');

//// RENDER CARS ////
// array of product data
const products = [
  {
    id: 1,
    brand: 'Apple',
    title: 'MacBook Pro 13" (2020)',
    details: 'Apple M1, 8GB RAM, 256GB SSD',
    rating: 'A',
    category: 'sold',
    image:
      'https://images1.vinted.net/t/04_01f07_pqpLd6zkotvqKxMhfJ55HdH8/f800/1750082598.jpeg?s=b72fae1f109b0984d61d34264536f0c6bb0f51f3',
    link: 'https://www.vinted.pt/items/6008479250-macbook-pro-13-m1-8gb-256gb-com-caixa',
  },
  {
    id: 2,
    brand: 'Apple',
    title: 'Magic Keyboard (2021)',
    details: 'Layout Português (PT) c/ Caixa Original',
    rating: 'A',
    category: 'sold',
    image:
      'https://images1.vinted.net/t/04_005d0_UUJP8WVhbr1VQfBxMCrDv5BS/f800/1753912796.jpeg?s=8f10e33444e9e74f5cfdd88c78c69c1130a6d15e',
    link: 'https://www.vinted.pt/items/6725535100-apple-magic-keyboard-2021-a2450-layout-pt',
  },
  {
    id: 3,
    brand: 'Apple',
    title: 'Magic Mouse 2 (2023)',
    details: 'c/ Caixa Original',
    rating: 'A',
    category: 'sold',
    image:
      'https://images1.vinted.net/t/02_0179c_nVM5cjonExfuFSwgW52aRTig/f800/1757433402.jpeg?s=dba2abf3b2295a5f12e4d5b07a7b645e72f582f4',
    link: 'https://www.vinted.pt/items/7049322114-rato-apple-magic-mouse-2',
  },
  {
    id: 4,
    brand: 'Acer',
    title: 'Tablet 7" Acer Iconia B1-710',
    details: 's/ Caixa',
    rating: 'C',
    category: 'sold',
    image:
      'https://images1.vinted.net/t/04_0050e_ds99dy7pUjtKQBbsyYAHKASi/f800/1753275914.jpeg?s=8f032644ad06a8baf3b28ce0838bd9c4d7d1aef3',
    link: 'https://www.vinted.pt/items/6736298265-tablet-7-acer-iconia-b1-710',
  },
  {
    id: 5,
    brand: 'WD',
    title: 'WD Red 2Tb',
    details: 'Discos de 3.5" para NAS, com poucas horas de uso',
    rating: 'A',
    category: 'sold',
    image:
      'https://images1.vinted.net/t/04_01e6a_zDb5jbSVTfBNV4SPHkJ4ZUSZ/f800/1751905795.jpeg?s=d2046ac2e1ef059a8787414d41f3a425a8d98db4',
    link: 'https://www.vinted.pt/items/6642482962-hdd-wd-red-2tb',
  },
  {
    id: 6,
    brand: 'Logitech',
    title: 'Rato Logitech g304 wireless',
    details: 'Selado na caixa',
    rating: 'A',
    category: 'sold',
    image:
      'https://images1.vinted.net/t/04_01135_48hH7kpsgAUGyiX9SjSuP1Su/f800/1751902447.jpeg?s=b26452cf6907e2bddfb099425f6378346b43e827',
    link: 'https://www.vinted.pt/items/6642020775-rato-logitech-g304-wireless-selado-na-caixa',
  },
  {
    id: 7,
    brand: 'Sem marca',
    title: 'Adaptador Mini Displayport para HDMI (fêmea)',
    details: 's/ Caixa',
    rating: 'B',
    category: 'sold',
    image:
      'https://images1.vinted.net/t/04_01537_QpUY4ZhLhpF6cuhw55oFkqBB/f800/1750356958.jpeg?s=fe61ff11c03edbc856de8065bd8872330818d48b',
    link: 'https://www.vinted.pt/items/6543277534-adaptador-mini-displayport-para-hdmi-femea',
  },
  {
    id: 8,
    brand: 'Xiaomi',
    title: 'Tapete de Rato Xiaomi',
    details: 's/ embalagem original',
    rating: 'A',
    category: 'accessories',
    image:
      'https://images1.vinted.net/t/04_00758_LATfyKbcUTWaGJsjodGHLbC6/f800/1737141201.jpeg?s=d98517889b0b463efff31ee8dcdc348e80dc744d',
    link: 'https://www.vinted.pt/items/5668164610-tapete-de-rato-xiaomi',
  },
  {
    id: 8,
    brand: 'Sem marca',
    title: 'Kit Superlight para Logitech G305 (41g)',
    details:
      'Inclui 2x Parafusos extra, 1x Suporte para pilha AAA, 2x Suportes para botão de clique e 1x Shell principal',
    rating: 'A',
    category: 'other',
    image:
      'https://images1.vinted.net/t/02_02471_hNVms948sca1x59SnKHWGioL/f800/1752696876.jpeg?s=83f0b1f0be4c10a6ca544fd1f6d12a7fbe13e38d',
    link: 'https://www.vinted.pt/items/6669588554-kit-superlight-para-logitech-g305-41g',
  },
  {
    id: 9,
    brand: 'Sem marca',
    title: 'Cabo MicroUSB para Logitech G Pro X Superlight 1',
    details: 'c/ embalagem original',
    rating: 'A',
    category: 'other',
    image:
      'https://images1.vinted.net/t/03_00e3d_awmMjWuQZxFdzqQ1vBbGCcgQ/f800/1752927032.jpeg?s=d16a132d061a56cf7f8a2a0e909394f66af1e391',
    link: 'https://www.vinted.pt/items/6710337399-cabo-microusb-para-logitech-g-pro-x-superlight-1',
  },
  {
    id: 10,
    brand: 'Sem marca',
    title: 'Caixa para Raspberry Pi 5 de metal',
    details: 'c/ embalagem original',
    rating: 'A',
    category: 'other',
    image:
      'https://images1.vinted.net/t/02_001ce_yaTy7vGJuDzaBioASXE5s2Ut/f800/1753912976.jpeg?s=82cda2203d81e6741bd2b3bd1f4c79da6cd77df6',
    link: 'https://www.vinted.pt/items/6766388588-caixa-para-raspberry-pi-5-de-metal-arrefecimento-passivo',
  },
  {
    id: 11,
    brand: 'Sem marca',
    title: 'E-Reader Tagus Gea (2019) [Avariado]',
    details: 's/ caixa, ecrã funciona, mas sistema operativo não arranca',
    rating: 'B',
    category: 'other',
    image:
      'https://images1.vinted.net/t/03_01f73_CQZMdtDFZSSWPahJ3WcSqDoW/f800/1758036606.jpeg?s=7f531828b0a903fc1f61b56700258e6d968920eb',
    link: 'https://www.vinted.pt/items/7102363717-e-reader-tagus-gea-2019-avariado',
  },
  {
    id: 12,
    brand: 'Apple',
    title: 'Magic Mouse 2 (2020)',
    details: 's/ Caixa',
    rating: 'C',
    category: 'accessories',
    image:
      'https://images1.vinted.net/t/04_00c73_CLsdDA5XiizRFBe7PBT22sha/f800/1758920123.jpeg?s=6bfbba9669af0ce79177ec8054ba3a87f157fd56',
    link: 'https://www.vinted.pt/items/7175050228-rato-apple-magic-mouse-2-ler-descricao',
  },
  {
    id: 13,
    brand: 'Apple',
    title: 'Magic Keyboard (2020)',
    details: 'c/ Caixa e Cabo originais, tem sinais de uso na parte inferior',
    rating: 'B',
    category: 'accessories',
    image:
      'https://images1.vinted.net/t/04_01631_HARs1PMfaLJ7vahHvAJhuAGY/f800/1758895367.jpeg?s=a2ba62fd214b10e7c5e422a6c093c3319f29d7b0',
    link: 'https://www.vinted.pt/items/7172276724-teclado-apple-magic-keyboard-ler-descricao',
  },
];

// product item component
function createProductItem(product) {
  return `
    <div class="product-item ${product.category}">
      <div class="product-image">
        <img src="${product.image}" alt="Imagem de ${product.title}" />
      </div>
      <div class="product-content">
        <p class="product-rating product-rating-${product.rating}">${product.rating}</p>
        <h3 class="product-title">${product.title}</h3>
        <p class="product-details">${product.details}</p>
        <a href="${product.link}" target="_blank" rel="noopener noreferrer" class="product-link" data-product-id="${product.id}">Ver mais</a>
      </div>
    </div>
  `;
}

// render all product items
async function renderProducts(products) {
  const productsList = document.querySelector('.products-list');
  productsList.innerHTML = '';

  const categoryButtons = document.querySelectorAll('.products-breadcrumbs li button');
  categoryButtons.forEach((btn) => (btn.disabled = true));

  if (products.length === 0) {
    productsList.innerHTML = '<p class="no-products">Nenhum artigo disponível no momento.</p>';
    categoryButtons.forEach((btn) => (btn.disabled = false));
    return;
  }

  await Promise.all(
    products.map(
      (product, index) =>
        new Promise((resolve) => {
          setTimeout(() => {
            productsList.insertAdjacentHTML('beforeend', createProductItem(product));
            resolve();
          }, index * 100);
        })
    )
  );

  categoryButtons.forEach((btn) => (btn.disabled = false));
}

// render products when the page loads
document.addEventListener('DOMContentLoaded', () => {
  // make sure that products show ordered by category: computers, accessories, other
  // also dont show sold products when the page loads and when "all" button is clicked
  renderProducts(
    products
      .sort((a, b) => {
        const categoryOrder = { computers: 1, accessories: 2, other: 3, sold: 4 };
        return categoryOrder[a.category] - categoryOrder[b.category];
      })
      .filter((product) => product.category !== 'sold')
  );

  Array.from(productsBreadcrumbsButtons).forEach((productButton) => {
    productButton.addEventListener('click', (event) => {
      event.preventDefault();
      const category = event.target.id;
      const filteredProducts = products
        .sort((a, b) => {
          const categoryOrder = { computers: 1, accessories: 2, other: 3, sold: 4 };
          return categoryOrder[a.category] - categoryOrder[b.category];
        })
        .filter((product) =>
          category === 'all' ? product.category !== 'sold' : product.category === category
        );

      // toggle products and button appearance
      renderProducts(filteredProducts);
      toggleButton(event.target);
    });
  });
});

// change button appearance when clicked
function toggleButton(button) {
  //only the button get by parameter will be active
  for (let i = 0; i < productsBreadcrumbsButtons.length; i++) {
    productsBreadcrumbsButtons[i].classList.remove('active');
  }
  button.classList.add('active');
}
