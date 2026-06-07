// Konfigurasi
const OWNER_WA_NUMBER = "6281328086659";

// Data produk (lengkap)
const products = [
    {id:'c1',name:'Americano',price:10000,category:'coffee',color:'white',images:['image/Americano.png','image/Americano.png'],desc:'Espresso shot murni dengan tambahan air.'},
    {id:'c2',name:'Butterscotch Coffee',price:18000,category:'coffee',color:'white',images:['image/ButterscotchCoffee.png','image/ButterscotchCoffee.png'],desc:'Perpaduan espresso, susu, dan sirup butterscotch.'},
    {id:'c3',name:'Caramel Coffee',price:18000,category:'coffee',color:'white',images:['image/CaramelCoffee.png','image/CaramelCoffee.png'],desc:'Kopi dengan sirup karamel.'},
    {id:'c4',name:'Coconut Coffee',price:18000,category:'coffee',color:'white',images:['image/CoconutCoffee.png','image/CoconutCoffee.png'],desc:'Espresso dan ekstrak kelapa.'},
    {id:'c5',name:'Gula Aren Coffee',price:15000,category:'coffee',color:'white',images:['image/GulaArenCoffe.png','image/GulaArenCoffe.png'],desc:'Kopi susu gula aren.'},
    {id:'c6',name:'Hazelnut Coffee',price:18000,category:'coffee',color:'white',images:['image/HazelnutCoffee.png','image/HazelnutCoffee.png'],desc:'Espresso dengan sirup hazelnut.'},
    {id:'c7',name:'Kopi Susu (Kopsu)',price:12000,category:'coffee',color:'white',images:['image/Kopsu.png','image/Kopsu.png'],desc:'Kopi susu klasik.'},
    {id:'c8',name:'Kopsu Regal',price:16000,category:'coffee',color:'white',images:['image/KopsuRegal.png','image/KopsuRegal.png'],desc:'Kopi susu dengan topping Regal.'},
    {id:'c9',name:'Vanilla Coffee',price:18000,category:'coffee',color:'white',images:['image/VanillaCoffee.png','image/VanillaCoffee.png'],desc:'Kopi dengan sirup vanilla.'},
    {id:'m1',name:'Blueberry Matcha',price:20000,category:'matcha',color:'green',images:['image/BlueberryMatcha.png','image/BlueberryMatcha.png'],desc:'Matcha dengan lapisan blueberry.'},
    {id:'m2',name:'Choco Matcha',price:20000,category:'matcha',color:'green',images:['image/ChocoMatcha.png','image/ChocoMatcha.png'],desc:'Matcha cokelat.'},
    {id:'m3',name:'Coconut Matcha',price:20000,category:'matcha',color:'green',images:['image/CoconutMatcha.png','image/CoconutMatcha.png'],desc:'Matcha dengan kelapa.'},
    {id:'m4',name:'Dirty Matcha',price:22000,category:'matcha',color:'green',images:['image/DirtyMatcha.png','image/DirtyMatcha.png'],desc:'Matcha latte + espresso.'},
    {id:'m5',name:'Matcha Latte',price:18000,category:'matcha',color:'green',images:['image/MatchaLatte.png','image/MatchaLatte.png'],desc:'Matcha klasik dengan susu.'},
    {id:'m6',name:'Oreo Matcha',price:20000,category:'matcha',color:'green',images:['image/OreoMatcha.png','image/OreoMatcha.png'],desc:'Matcha dengan Oreo.'},
    {id:'m7',name:'Redvelvet Matcha',price:20000,category:'matcha',color:'red',images:['image/RedvelvetMatcha.png','image/RedvelvetMatcha.png'],desc:'Layer red velvet dan matcha.'},
    {id:'m8',name:'Strawberry Matcha',price:20000,category:'matcha',color:'red',images:['image/StrawberryMatcha.png','image/StrawberryMatcha.png'],desc:'Strawberry dan matcha.'},
    {id:'n1',name:'Blueberry Jam',price:15000,category:'non-coffee',color:'white',images:['image/BlueberryJam.png','image/BlueberryJam.png'],desc:'Susu dengan selai blueberry.'},
    {id:'n2',name:'Coklat Susu',price:15000,category:'non-coffee',color:'white',images:['image/CoklatSusu.png','image/CoklatSusu.png'],desc:'Cokelat susu.'},
    {id:'n3',name:'Redvelvet',price:15000,category:'non-coffee',color:'red',images:['image/Redvelvet.png','image/Redvelvet.png'],desc:'Minuman red velvet.'},
    {id:'n4',name:'Regal Susu',price:14000,category:'non-coffee',color:'white',images:['image/RegalSusu.png','image/RegalSusu.png'],desc:'Susu dengan Regal.'},
    {id:'n5',name:'Strawberry Jam',price:15000,category:'non-coffee',color:'red',images:['image/StrawberryJam.png','image/StrawberryJam.png'],desc:'Susu dengan selai strawberry.'},
    {id:'n6',name:'Tiramisu',price:15000,category:'non-coffee',color:'white',images:['image/Tiramisu.png','image/Tiramisu.png'],desc:'Minuman rasa tiramisu.'},
    {id:'n7',name:'Air Mineral',price:5000,category:'non-coffee',color:'white',images:['image/AirMineral.png','image/AirMineral.png'],desc:'Air mineral.'},
    {id:'s1',name:'Cookies',price:8000,category:'snack',color:'snack',images:['image/Cookies.png','image/Cookies.png'],desc:'Kue kering choco chips.'},
    {id:'s2',name:'French Fries',price:12000,category:'snack',color:'snack',images:['image/FrenchFries.png','image/FrenchFries.png'],desc:'Kentang goreng.'},
    {id:'s3',name:'Mix Platter',price:18000,category:'snack',color:'snack',images:['image/MixPlatter.png','image/MixPlatter.png'],desc:'Campuran snack.'},
    {id:'s4',name:'Nugget',price:12000,category:'snack',color:'snack',images:['image/Nuget.png','image/Nuget.png'],desc:'Nugget ayam.'},
    {id:'s5',name:'Piscok',price:10000,category:'snack',color:'snack',images:['image/Piscok.png','image/Piscok.png'],desc:'Pisang cokelat.'},
    {id:'s6',name:'Singkong Balado',price:12000,category:'snack',color:'snack',images:['image/SingkongBalado.png','image/SingkongBalado.png'],desc:'Singkong bumbu balado.'},
    {id:'s7',name:'Singkong Keju',price:14000,category:'snack',color:'snack',images:['image/SingkongKeju.png','image/SingkongKeju.png'],desc:'Singkong keju.'},
    {id:'s8',name:'Singkong Original',price:10000,category:'snack',color:'snack',images:['image/SingkongOri.png','image/SingkongOri.png'],desc:'Singkong goreng.'},
    {id:'s9',name:'Sosis',price:12000,category:'snack',color:'snack',images:['image/Sosis.png','image/Sosis.png'],desc:'Sosis bakar.'}
];

// State
let cart = [];
let wishlist = [];
let activeCategory = 'semua';
let activeColor = 'semua';
let currentModalProductId = null;

// Rating
function getRating(id) { return parseFloat(localStorage.getItem(`rating_${id}`)) || 4.5; }
function setRating(id, val) { localStorage.setItem(`rating_${id}`, val); renderProducts(); if (currentModalProductId === id) updateModalRating(id); showToast(`Rating ${val} bintang`); }
function renderStars(r) { let s=''; for(let i=1;i<=5;i++) s+= (i<=r) ? '<i class="fa-solid fa-star text-amber-400"></i>' : '<i class="fa-regular fa-star text-amber-400"></i>'; return s; }
function renderInteractiveStars(r, id) { let s=''; for(let i=1;i<=5;i++) s+= `<i class="fa-${i<=r?'solid':'regular'} fa-star text-2xl text-amber-400 rating-star" onclick="setRating('${id}',${i})"></i>`; return s; }
function updateModalRating(id) { let r=getRating(id); document.getElementById('modal-rating-stars').innerHTML=renderStars(r); document.getElementById('interactive-rating-stars').innerHTML=renderInteractiveStars(r,id); document.getElementById('rating-feedback').innerHTML=`⭐ ${r.toFixed(1)} / 5`; }

// Filter warna
function matchColor(p, col) {
    if (col === 'semua') return true;
    if (col === 'putih') return (p.category === 'non-coffee') || (p.category === 'coffee' && ['Kopi Susu (Kopsu)','Kopsu Regal','Gula Aren Coffee','Caramel Coffee','Vanilla Coffee','Hazelnut Coffee','Butterscotch Coffee','Coconut Coffee'].includes(p.name));
    if (col === 'coklat') return p.category === 'coffee';
    if (col === 'hijau') return p.category === 'matcha';
    if (col === 'merah') return p.name.toLowerCase().includes('redvelvet') || p.name.toLowerCase().includes('strawberry');
    return false;
}

// Render produk
function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const filtered = products.filter(p => (activeCategory === 'semua' || p.category === activeCategory) && matchColor(p, activeColor));
    if (!filtered.length) { grid.innerHTML = '<div class="col-span-full text-center py-12">Tidak ada produk</div>'; return; }
    filtered.forEach(p => {
        const r = getRating(p.id);
        const inWish = wishlist.some(i => i.id === p.id);
        const card = document.createElement('div');
        card.className = 'bg-white rounded-2xl border p-4 hover:shadow-xl transition';
        card.innerHTML = `
            <div class="relative aspect-square rounded-xl overflow-hidden cursor-pointer" onclick="openProductModal('${p.id}')">
                <img src="${p.images[0]}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/400x400'">
                <button onclick="event.stopPropagation(); toggleWishlist('${p.id}')" class="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full"><i data-lucide="heart" class="w-4 h-4 ${inWish ? 'fill-red-500 text-red-500' : ''}"></i></button>
                <span class="absolute bottom-2 left-2 bg-matcha-900 text-white text-[10px] px-2 py-0.5 rounded-full">${p.category}</span>
            </div>
            <div class="mt-3 cursor-pointer" onclick="openProductModal('${p.id}')">
                <h3 class="font-bold text-lg">${p.name}</h3>
                <div class="flex justify-between items-center mt-1"><span class="font-bold text-matcha-800">Rp${p.price.toLocaleString()}</span><div class="flex items-center gap-1 text-xs">${renderStars(r)}<span>${r.toFixed(1)}</span></div></div>
            </div>
            <button onclick="addToCart('${p.id}')" class="w-full mt-3 bg-matcha-50 hover:bg-matcha-600 hover:text-white py-2 rounded-xl text-sm font-semibold transition">Tambah ke Keranjang</button>
        `;
        grid.appendChild(card);
    });
    lucide.createIcons();
}

// Modal
function openProductModal(id) {
    currentModalProductId = id;
    const p = products.find(x => x.id === id);
    if (!p) return;
    document.getElementById('modal-product-cat').innerText = p.category.toUpperCase();
    document.getElementById('modal-product-name').innerText = p.name;
    document.getElementById('modal-product-price').innerText = `Rp${p.price.toLocaleString()}`;
    document.getElementById('modal-product-desc').innerText = p.desc;
    const carousel = document.getElementById('modal-image-carousel');
    carousel.innerHTML = '';
    p.images.forEach(img => {
        const slide = document.createElement('div');
        slide.className = 'w-full h-full flex-shrink-0';
        slide.innerHTML = `<img src="${img}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/400x400'">`;
        carousel.appendChild(slide);
    });
    const dots = document.getElementById('carousel-dots');
    dots.innerHTML = '';
    p.images.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `h-2 rounded-full transition-all ${idx===0 ? 'bg-matcha-600 w-6' : 'bg-matcha-300 w-2'}`;
        dot.onclick = () => { carousel.style.transform = `translateX(-${idx*100}%)`; updateDots(idx); };
        dots.appendChild(dot);
    });
    function updateDots(idx) { document.querySelectorAll('#carousel-dots button').forEach((d,i)=>{ if(i===idx){d.classList.add('bg-matcha-600','w-6');d.classList.remove('bg-matcha-300','w-2');} else {d.classList.remove('bg-matcha-600','w-6');d.classList.add('bg-matcha-300','w-2');} }); }
    document.getElementById('modal-cart-btn').onclick = () => { addToCart(p.id); closeProductModal(); };
    const inWish = wishlist.some(i=>i.id===p.id);
    const wbtn = document.getElementById('modal-wishlist-btn');
    wbtn.className = `p-4 rounded-2xl border-2 transition-colors ${inWish ? 'text-red-500 border-red-200 bg-red-50' : 'border-matcha-200'}`;
    wbtn.onclick = () => { toggleWishlist(p.id); openProductModal(p.id); };
    const related = products.filter(x => x.category === p.category && x.id !== p.id).slice(0,3);
    const relDiv = document.getElementById('modal-related');
    relDiv.innerHTML = '';
    related.forEach(rel => {
        const d = document.createElement('div');
        d.className = 'cursor-pointer text-center';
        d.onclick = () => openProductModal(rel.id);
        d.innerHTML = `<img src="${rel.images[0]}" class="w-full aspect-square object-cover rounded-lg"><p class="text-[10px] font-bold truncate">${rel.name}</p>`;
        relDiv.appendChild(d);
    });
    updateModalRating(id);
    document.getElementById('product-modal').style.display = 'block';
    lucide.createIcons();
}
function closeProductModal() { document.getElementById('product-modal').style.display = 'none'; currentModalProductId = null; }

// Cart
function toggleCart() { document.getElementById('cart-panel').classList.toggle('translate-x-full'); }
function addToCart(id) { let p=products.find(x=>x.id===id); let item=cart.find(i=>i.product.id===id); if(item) item.qty++; else cart.push({product:p,qty:1}); saveCart(); renderCart(); showToast(`${p.name} ditambahkan`); }
function updateQty(id, delta) { let item=cart.find(i=>i.product.id===id); if(item){ item.qty+=delta; if(item.qty<=0) cart=cart.filter(i=>i.product.id!==id); saveCart(); renderCart(); } }
function renderCart() {
    let container=document.getElementById('cart-items'), subtotal=0, totalItems=0;
    container.innerHTML='';
    cart.forEach(item=>{ let tot=item.product.price*item.qty; subtotal+=tot; totalItems+=item.qty; container.innerHTML+=`<div class="flex gap-3 bg-matcha-50 p-2 rounded-xl"><img src="${item.product.images[0]}" class="w-16 h-16 object-cover rounded"><div class="flex-1"><div class="font-bold">${item.product.name}</div><div class="flex justify-between items-center"><div class="flex border rounded"><button onclick="updateQty('${item.product.id}',-1)" class="px-2">-</button><span class="px-2">${item.qty}</span><button onclick="updateQty('${item.product.id}',1)" class="px-2">+</button></div><span>Rp${tot.toLocaleString()}</span></div></div></div>`; });
    if(cart.length===0) container.innerHTML='<div class="text-center py-8">Keranjang kosong</div>';
    document.getElementById('cart-count').innerText=totalItems;
    let delivery=document.getElementById('order-delivery').value, shipping=delivery==='cod'?3000:0, grand=subtotal+shipping;
    document.getElementById('subtotal-calc').innerText=`Rp${subtotal.toLocaleString()}`;
    document.getElementById('shipping-calc').innerText=`Rp${shipping.toLocaleString()}`;
    document.getElementById('total-calc').innerText=`Rp${grand.toLocaleString()}`;
    lucide.createIcons();
}
function saveCart(){localStorage.setItem('cart',JSON.stringify(cart));}
function loadCart(){let s=localStorage.getItem('cart'); if(s){cart=JSON.parse(s); renderCart();}}

// Wishlist
function toggleWishlistModal(){document.getElementById('wishlist-modal').classList.toggle('hidden');renderWishlist();}
function toggleWishlist(id){let p=products.find(x=>x.id===id); let idx=wishlist.findIndex(i=>i.id===id); if(idx!==-1) wishlist.splice(idx,1); else wishlist.push(p); saveWishlist(); renderWishlist(); renderProducts(); showToast(idx!==-1?`${p.name} dihapus`:`${p.name} ditambahkan ke wishlist`);}
function renderWishlist(){let c=document.getElementById('wishlist-items'); c.innerHTML=''; wishlist.forEach(p=>{c.innerHTML+=`<div class="flex justify-between items-center p-2 border rounded"><div class="flex gap-2 cursor-pointer" onclick="openProductModal('${p.id}');toggleWishlistModal()"><img src="${p.images[0]}" class="w-12 h-12 object-cover rounded"><div><div class="font-bold">${p.name}</div><div>Rp${p.price.toLocaleString()}</div></div></div><button onclick="toggleWishlist('${p.id}')" class="text-red-500"><i data-lucide="trash-2" class="w-4 h-4"></i></button></div>`;}); if(wishlist.length===0) c.innerHTML='<div class="text-center py-6">Wishlist kosong</div>'; document.getElementById('wishlist-count').innerText=wishlist.length; if(wishlist.length>0) document.getElementById('wishlist-count').classList.remove('hidden'); else document.getElementById('wishlist-count').classList.add('hidden'); lucide.createIcons();}
function saveWishlist(){localStorage.setItem('wishlist',JSON.stringify(wishlist));}
function loadWishlist(){let s=localStorage.getItem('wishlist'); if(s){wishlist=JSON.parse(s); renderWishlist();}}

// Lainnya
function toggleDeliveryFields(){let m=document.getElementById('order-delivery').value; document.getElementById('field-table').style.display=m==='dine-in'?'block':'none'; document.getElementById('field-address').style.display=m==='cod'?'block':'none'; renderCart();}
function showToast(msg){let t=document.getElementById('toast'); t.innerText=msg; t.classList.remove('opacity-0','translate-y-10'); setTimeout(()=>t.classList.add('opacity-0','translate-y-10'),2000);}
function submitOrder(e){e.preventDefault(); if(cart.length===0){showToast('Keranjang kosong');return;} let name=document.getElementById('order-name').value, wa=document.getElementById('order-whatsapp').value, delivery=document.getElementById('order-delivery').value, notes=document.getElementById('order-notes').value||'-', payment=document.querySelector('input[name="payment"]:checked').value, detail='', shipping=0; if(delivery==='dine-in') detail=`Meja ${document.getElementById('order-table').value}`; else if(delivery==='cod'){detail=`Alamat: ${document.getElementById('order-address').value}`; shipping=3000;} else detail='Take Away'; let subtotal=0, items=''; cart.forEach((item,i)=>{let tot=item.product.price*item.qty; subtotal+=tot; items+=`${i+1}. ${item.product.name} x${item.qty} = Rp${tot.toLocaleString()}\n`;}); let total=subtotal+shipping, msg=`*DuoMatcha Order*\nNama: ${name}\nWA: ${wa}\nMetode: ${delivery.toUpperCase()} (${detail})\nPembayaran: ${payment}\nCatatan: ${notes}\n\n${items}\nSubtotal: Rp${subtotal.toLocaleString()}\nOngkir: Rp${shipping.toLocaleString()}\nTotal: Rp${total.toLocaleString()}`; let link=`https://api.whatsapp.com/send?phone=${OWNER_WA_NUMBER}&text=${encodeURIComponent(msg)}`; cart=[]; saveCart(); renderCart(); document.getElementById('checkout-form').reset(); toggleCart(); window.open(link,'_blank'); showToast('Pesanan dikirim');}
function handleContactSubmit(e){e.preventDefault(); let name=document.getElementById('contact-name').value, msg=document.getElementById('contact-message').value; window.open(`https://api.whatsapp.com/send?phone=${OWNER_WA_NUMBER}&text=${encodeURIComponent(`Kritik & Saran\nNama: ${name}\nPesan: ${msg}`)}`,'_blank'); showToast('Terima kasih'); document.getElementById('contact-name').value=''; document.getElementById('contact-message').value='';}
function toggleMobileMenu(){document.getElementById('mobile-menu').classList.toggle('hidden');}
function filterCategory(event, cat){activeCategory=cat; document.querySelectorAll('#category-filters button').forEach(btn=>{btn.classList.remove('bg-matcha-100','border-matcha-200','text-matcha-800');btn.classList.add('bg-white');}); event.currentTarget.classList.add('bg-matcha-100','border-matcha-200','text-matcha-800'); renderProducts();}
function filterColor(event, col){activeColor=col; document.querySelectorAll('#color-filters button').forEach(btn=>{btn.classList.remove('bg-matcha-50','border-matcha-200','text-matcha-800');btn.classList.add('bg-white');}); event.currentTarget.classList.add('bg-matcha-50','border-matcha-200','text-matcha-800'); renderProducts();}

window.addEventListener('DOMContentLoaded',()=>{lucide.createIcons(); renderProducts(); loadWishlist(); loadCart(); toggleDeliveryFields();});