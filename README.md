![Logo](./public/logo.png)

iWeather, kullanıcıların konum izni vererek anlık olarak hava durumu bilgisini görüntüleyebilecekleri bir web uygulamasıdır. Kullanıcılar, arama yapmak istedikleri şehrin adını girerek o şehre ait güncel hava durumu ile bir sonraki güne ait tahmini hava durumu bilgilerine erişebilirler.


## Gereksinimler 
- Node.js
- npm veya yarn 

## Projeyi Çalıştırma
1. Projeyi klonlayın: `git clone <https://github.com/sultantekru/iWeather.git>`
2. Proje dizinine gidin: `cd iWeather`
3. Gerekli paketleri yükleyin:
   - npm kullanarak: `npm install`
   - yarn kullanarak: `yarn install`
4. Uygulamayı başlatın:
   - npm kullanarak: `npm start`
   - yarn kullanarak: `yarn start`
5. Tarayıcınızda uygulamayı görüntülemek için: `http://localhost:5173` adresine gidin.


## Kullanılan Teknolojiler 
- CSS
- TypeScript
- React
- Vite 
- Axios

## Proje Dizin Yapısı:
- **src/**
  - **app/**
  - **components/**
  - **core/**
  - **data/**
    - **repositories/**
    - **services/**
  - **icons/**
  - **pages/**
  - **types/**
  - **utils/**

## Konum İzni ve Şehir Arama
iWeather, kullanıcıların bulundukları konuma göre hava durumu bilgilerini göstermek için GeoLocation özelliğini kullanır. Kullanıcılar, konum izni vererek cihazlarının bulunduğu konuma göre hava durumu bilgisini anlık olarak görebilirler.

Konum izni vermek ve şehir aramak için:
1. Uygulamayı başlattıktan sonra, tarayıcınız kullanıcı konumunu almak için izin isteyecektir. İzin vermek için tarayıcınızın istediği izni kabul edin.
2. İzin verildikten sonra, uygulama konumunuza göre hava durumu bilgisini anlık olarak gösterecektir.
3. Konum iznini kabul etmediğinizde veya tarayıcınız konum bilgisine erişemezse, varsayılan olarak daha önceden girdiğiniz hava durumu bilgileri gösterilecektir.

## Özellikler 
1. iWeather, responsive tasarımıyla farklı cihazlarda düzgün çalışır.
2. React component'leri functional components ile oluşturuldu.
3. Component'ler arasında veri iletişimi için props kullanıldı.
4. React'te state yönetimi için useState ve useEffect hook'ları kullanıldı.
5. API çağrıları için Axios kullanıldı.
6. Kullanıcıya hava durumu bilgisi dinamik ikonlarla gösterildi.
7. Kullanıcıların tercihlerini hatırlamak için yerel depolama (LocalStorage) kullanıldı.
8. GeoLocation özelliği kullanıldı.