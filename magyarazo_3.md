# Leírás

1. **MERN** - _Mongo_, _Express_, _React_ és _Node_
2. **Stack** - Eszközök (nyelvek, könyvtárak, keretrendszerek stb.), melyek egy alkalmazás elkészítéséhez kellenek.
3. **Full Stack** - Minden eszköz adott az alkalmazás teljes elkészítéséhez. Nem kell részekben gondolkodni. (_Frontend_ és _Backend_ egyben)
4. **REST API** - Egy interfész, mely segítségével két számítógéprendszer biztonságosan kommunikálni (adatokat cserélni) tud a hálózaton keresztül. _RESTful API_-ként is ismert. Backend alkalmazás, ami a szerveren fut.
5. **CRUD** - _Create_, _Read_, _Update_ és _Delete_, a négy alapvető Http request metódusnak (_post_, _get_, _put/patch_, _delete_) megfelelő elnevezés.

---

# Beállítások

1. `.gitignore` állomány létrehozása, azon mappáknak és állományoknak a nevének az eltárolására, amit nem akarunk feltölteni a _github_-ra.
2. **backend** és **frontend** mappa létrehozása
3. A **backend** mappában a parancssorban kiadni a `git init -y` utasítást.
4. A **backend** mappában a parancssorban kiadni az `npm install express` utasítást.
5. A **backend** mappában a parancssorban kiadni az `npm install -D nodemon` utasítást.
6. A létrejövő `package.json` állományban a szükséges beállítások elvégzése.
7. A `.gitignore` állomány módosítása.
8. Létrehozni a **backend** mappában a `server.js` állományt a szerver oldali alkalmazás számára.
9. `.env` állomány létrehozása azon adatoknak, amelyek beállítják annak a rendszernek a környezeti változóit, ahol az alkalmazás majd futni fog.
10. Egy `public` nevű mappa létrehozása a statikus állományoknak. Minden egyes _route_-nak lehet külön mappája ezen mappán belül.
11. Egy `css` mappa, majd azon belül egy `stilus.css` állomány létrehozása a `public` mappában. A _root_ route stílus információi itt lesznek megadva.
12. Egy `routes` nevű mappa létrehozása a _route_-oknak. Minden egyes _route_-nak külön állománya lesz.
13. Egy `views` nevű mappa létrehozása a böngészőnek küldendő `.html` állományoknak.
14. A nem létező _route_-ok kezelése: `app.all('*', (req, res) => {})`.

---

# Middleware-k

1. Függvények a **HTTP request** (_frontend_) és az **API response** (_backend_) között.
2. Előzetes **request** "feldolgozás".
3. Plusz funkcionalitások, tulajdonságok hozzáadása az **API**-hoz.
4. Főleg a következő utasításoknál használjuk:
    - `app.use(...);`
    - `app.set(...);`
    - `app.get(...);` stb. **HTTP request**
5. Háromfajta **middleware** létezik:
    - Beépített (_built-in_)
    - Harmadik féltől származó (_third-party_)
        - `express.static()` => `app.use(express.static());`
        - `express.json()` => `app.use(express.json());`,
        - `cookieParser()` => `app.use(cookieParser());`
    - Egyéni (_custom_)
6. A **backend** mappában a parancssorban kiadni az `npm install dotenv date-fns uuid` utasítást.
7. Egy `logs` nevű mappa létrehozása az alkalmazás futása során történő események naplózásához.
8. Egy `middlewares` nevű mappa létrehozása az egyéni (_custom_) **middleware**-k számára.
9. A `middlewares` nevű mappában létrehozni a `logger.js` nevű állományt a naplózáshoz.
10. A `middlewares` nevű mappában létrehozni az `errorHandler.js` nevű állományt a hibaesemények naplózásához.
11. A **backend** mappában a parancssorban kiadni az `npm install cookie-parser cors` utasítást.
12. Egy `config` nevű mappa létrehozása az alkalmazás "környezetének" beállításához.
13. A `config` nevű mappában létrehozni az `allowedOrigins.js` nevű állományt azon **URL**-k számára, amiknek megengedjük, hogy hozzáférjenek az alkalmazásunkhoz.
14. A `config` nevű mappában létrehozni a `corsOptions.js` nevű állományt, amelyben lekezeljük a **CORS**-szal kapcsolatos problémákat.
15. A `server.js` állományban a megfelelő beállítások elvégzése.

---

# MongoDB és Mongoose

1. A **MongoDB** egy _NoSQL_ adatbázis, azaz itt gyűjtemények (_collection_) és dokumentumok (_document_) vannak.
2. A **backend** mappában a parancssorban kiadni az `npm install mongoose` utasítást.
3. Egy `models` nevű mappa létrehozása az adatbázisban szereplő gyűjteményekhez (_collection_).
4. A `models` mappában létrehozni egy `User.js` nevű állományt az alkalmazásunkat használóknak (eladók, vásárlók stb.).
5. A **backend** mappában a parancssorban kiadni az `npm install validator` utasítást. Ezt a `user` objektum különböző tulajdonságainak igazolásához fogjuk használni.
6. A `models` mappában létrehozni egy `Good.js` nevű állományt a termékeknek.
7. A `models` mappában létrehozni egy `Type.js` nevű állományt a terméktípusoknak.
8. A `models` mappában létrehozni egy `Buying.js` nevű állományt a vásárlásoknak.
9. A **backend** mappában a parancssorban kiadni az `npm install mongoose-sequence` utasítást. Ezt a `buying` objektumok automatikus számozásához fogjuk használni.
10. A `config` mappában létrehozni egy `dbConnect.js` nevű állományt az adatbázishoz való csatlakozáshoz.
11. A `server.js` állományban a megfelelő beállítások elvégzése.
