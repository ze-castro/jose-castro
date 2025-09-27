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
    image: '/store/assets/1750082598.jpeg',
  },
  {
    id: 2,
    brand: 'Apple',
    title: 'Magic Keyboard (2021)',
    details: 'Layout Português (PT) c/ Caixa Original',
    rating: 'A',
    category: 'sold',
    image: '/store/assets/1753912796.jpeg',
  },
  {
    id: 3,
    brand: 'Apple',
    title: 'Magic Mouse 2 (2023)',
    details: 'c/ Caixa Original',
    rating: 'A',
    category: 'sold',
    image: '/store/assets/1757433402.jpeg',
  },
  {
    id: 4,
    brand: 'Acer',
    title: 'Tablet 7" Acer Iconia B1-710',
    details: 's/ Caixa',
    rating: 'C',
    category: 'sold',
    image: '/store/assets/1753275914.jpeg',
  },
  {
    id: 5,
    brand: 'WD',
    title: 'WD Red 2Tb',
    details: 'Discos de 3.5" para NAS, com poucas horas de uso',
    rating: 'A',
    category: 'sold',
    image: '/store/assets/1751905795.jpeg',
  },
  {
    id: 6,
    brand: 'Maivo',
    title: 'Caixa para HDD/SSD 3.5" ou 2.5"',
    details: 'c/ cabo USB e adaptador de corrente',
    rating: 'A',
    category: 'sold',
    image: '/store/assets/1752101101.jpeg',
  },
  {
    id: 7,
    brand: 'Logitech',
    title: 'Rato Logitech g304 wireless',
    details: 'Selado na caixa',
    rating: 'A',
    category: 'sold',
    image: '/store/assets/1751902447.jpeg',
  },
  {
    id: 8,
    brand: 'Logitech',
    title: 'Rato Logitech G Pro X Superlight',
    details: 's/ Caixa',
    rating: 'C',
    category: 'sold',
    image: '/store/assets/1751033567.jpeg',
  },
  {
    id: 9,
    brand: 'Sem marca',
    title: 'Adaptador Mini Displayport para HDMI (fêmea)',
    details: 's/ Caixa',
    rating: 'B',
    category: 'sold',
    image: '/store/assets/1750356958.jpeg',
  },
  {
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
    brand: 'Apple',
    title: 'Magic Mouse 2',
    details: 's/ Caixa',
    rating: 'C',
    category: 'accessories',
    image:
      'https://images1.vinted.net/t/04_00c73_CLsdDA5XiizRFBe7PBT22sha/f800/1758920123.jpeg?s=6bfbba9669af0ce79177ec8054ba3a87f157fd56',
    link: 'https://www.vinted.pt/items/7175050228-rato-apple-magic-mouse-2-ler-descricao',
  },
  {
    id: 16,
    brand: 'Apple',
    title: 'Magic Keyboard',
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
        ${
          product.link ?
          `<a href="${product.link}" target="_blank" rel="noopener noreferrer" class="product-link" data-product-id="${product.id}">Ver mais</a>`
        : ''
        }
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
