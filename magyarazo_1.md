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
