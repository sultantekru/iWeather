![Logo](./public/logo.png)

iWeather, kullanıcıların konum izni vererek anlık olarak hava durumu bilgisini görüntüleyebilecekleri bir web uygulamasıdır. Kullanıcılar, arama yapmak istedikleri şehrin adını girerek o şehre ait güncel hava durumu ile bir sonraki güne ait tahmini hava durumu bilgilerine erişebilirler.

## Gereksinimler 

Projeyi çalıştırmak için aşağıdaki yazılımların yüklü olması gerekmektedir:

- Node.js
- npm veya yarn 

## Vite ile React Projesi Oluşturma

1. **npm create vite@latest** komutu kullanılır: Bu komut, en son vite şablonunu indirir ve oluşturur. Bu adım, Vite'in en son sürümünü kullanarak bir proje oluşturmak için gereklidir. 
2. **Proje adı oluşturulur**: Proje şablonu oluşturulduktan sonra, proje adınızı girmeniz istenir. Örneğin, "vite-project" gibi.
3. **Kullanılacak kütüphane seçeneği seçilir**: Proje adı oluşturulduktan sonra, hangi dil kullanacağınıza karar vermeniz gerekmektedir. Örneğin(Vue, React, Angular, TypeScript vb.) seçenklerinden birini seçmelisiniz.
4. **cd vite-project**: Oluşturulan projenin dizinine gidilir. "vite-project" adını verdiğimiz bir klasör oluşturulur ve bu komutla bu klasöre girilir.
5. **cd vite-project**: Bu komut, proje için gerekli olan tüm paketleri indirir ve yükler.
6. **npm run dev**: Projenizi tarayıcıda görüntülemek için kullanılır.

## Kullanılan Teknolojiler 

- CSS
- TypeScript
- React
- Vite 
- Axios

## Özellikler 

1. iWeather, responsive tasarımıyla farklı cihazlarda düzgün çalışır.
2. React component'leri arrow function ile oluşturuldu.
3. Component'ler arasında veri iletişimi için props kullanıldı.
4. Veri tip kontrolü için interface'ler kullanıldı.
5. React'te state yönetimi için useState ve useEffect hook'ları kullanıldı.
6. API çağrıları için Axios kullanıldı.