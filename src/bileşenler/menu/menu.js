import './Menu.less'

// Kullanacağımız veri bu, üzerinde çalışın ama henüz hiçbir şeyi değiştirmeyin.
let menuElemanlari = [
  'Gündem',
  'Dünya',
  "Ekonomi",
  'Yazarlar',
  'Burç Yorumları',
  'Diğer'
];

/*
  Adım 1: Aşağıdaki etiketlee gibi bir menü oluşturmak için 'menuYapici' adlı bir bileşen yazın:

  <div class="menu">
    <ul>
      {tüm menü elemanları <li> içlerine}
    </ul>
  </div>

  'menuYapici' fonksiyonu tek argümanı olarak bir menü elemanları dizisini alır (birinci parametre).

  Adım 2: Fonksiyonun içinde, dizideki her öğe için bir liste <li> öğesi oluşturarak dizi üzerinde yineleme yapın.
  Tüm bu öğeleri <ul>'a ekleyin

  Adım 3: Hala fonksiyon içindeyiz, DOM'dan menü düğmesini seçin ('menu-button' sınıfına(class) sahip öğe).

  Adım 4: Menü butonuna bir `click` event dinleyicisi ekleyin. 
  Butona her tıklanıldığında div.menu classına `menu--open`('menu' class'ına sahip olan div) ekleyip/silecek(toogle).
  
  İPUCU: Javascript'te toogle metotları bir öğeyi bir elemana ekleyip/çıkarmaya yarar. 
  Örnek olarak bir öğeye tıklandığında bir class toogle'ı kullanıldığında,
   o öğreye tıklandığında eğer o class ismi öğede yoksa ekler, eğer o class ismi öğede varsa siler. Toogle - aç kapa manasına da gelir.

  Adım 5: Oluştrulan div.menu 'yü döndürmeyi unutmayın.

  Adım 6: 'menuYapici' fonksiyonunu ve 'menuElemanlari' dizisini kullanarak menüyü oluşturun, ve döndürülen menüyü header'e ekleyin.
*/
const menuMaker = (elementsOfMenu) => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu');
  
  const unordered = document.createElement('ul');
  menuItem.append(unordered);
  
  
  for(const element of elementsOfMenu){
    const listMenu = document.createElement('li');
    /* listMenu.textContent(element); */
    let textMenuNode = document.createTextNode(element);
    listMenu.appendChild(textMenuNode);
    
    unordered.append(listMenu);
    
  }
  
  
  

  const menuBtn = document.querySelector('.menu-button');
  menuBtn.addEventListener('click', () => {
    menuItem.classList.toggle("menu--open")
  })
  return menuItem;
 

}
const appedMenuIntoContainer = () => {
  const headerContainer = document.querySelector('.header');
  const menuItem = menuMaker(menuElemanlari);
  headerContainer.append(menuItem);

}
appedMenuIntoContainer();