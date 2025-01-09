const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61Vy4rr2BX9lcuZ2ret98NQED39fqpkyU6HRmUdycd6+uhIsnwp6EnIIOQHQo8aetKzQH1DyP2CjGuarwiyq7hFOn27AhEaiCNp7bX3XnvtTyDNUAEnsAH9TyDHqPIIbB9Jk0PQB2oZBBCDLvA94oE+cMzONFPXnQNTkWK04wbV9szxS/eeXpa6wKieuqy47cNGTsI78NgFefkQo/1XAPeG5vFJMZgdfc0qEBNy7pSuxeGELrbx4MEZyQPaOsfuwDHuwGOL6CGM0tDIDzCB2IsnsFl6CL+PvmYkqBgl2oWynbmAV5qK40lHrmW2XHlj1hWa6fm4K8bWe+lXOb1l/c2uieB6HViLeR5G+qETqmM1C235KO44R93Jl0GzvdEvUJhCf+TDlCDSvLvu3kSYR2hpFNvxYtIg3OuNHdtb147Vc3qU8oAXeY5PuqEm3PuI86Vw4d15OT1dnOK4Mirdhqa/iMZQp6TAzdFs4apT2p0q9VviS/yqleh/qTs1iDcjdljYuzk+oiLvnM6rpXDZ2SuFqyO9tzqUMKmThtjR++ibeW/Bx7Ayw00s2s5es3LdJK4ppdbJty/SkhZYe71FY/tN3T1S4q+xpC3rssLb2mHoS87mwtaJ8Qr7myDKdYVeuHZ9kHYKfXQmYcPy+XyEh5S4XfV4bg93okzl1smQ9N4sM2pmk7rKPthIinJ3zSiCzcgHffqxCzAMUUGwR1CWtmcy0wWeX1lwjyG5VhcsSiRko5XM3WfjlCNxakfqcl2HyoHBBLmpdxHwpT6v/Di8A12Q42wPiwL6Q1SQDDczWBReCAvQ//21UW3OGCYZgWPkgz6QGZZiRVbkKFr8XfFNffBI4eX5NykkoAsCnCUzCPoEl7ALrj8ICqNpEmsqpqFSssgyqkGLDM0JHG/ypqy2GSa3oPcogQXxkhz0aZEVWEnmWeqx+3/iQZkUz6uSLjCiaVA0K2uGIQkqQ8uKyhq/zeMPXZDCM7nJuC0+S3dBgHBB7LTM48zzXzX++tLb77MyJVaT7rX2AWLQf3MMCUFpWLSZlamH9wdUQa3NA/QDLy7gYxf4sEJ72OKBhv9OPSoT936XrDdLXOjyd4vRqu3gIUtvn1CQCYRA9D+KFMN85JhA+ChBmf4oM5y09wV2LwU+aMtxc5D2n18VdFydVpNSLfhtMMiacjORkHkYVtXxMLqK8qZEiKH/WuUHbx+V+X0WwfQruCtxd6+SODurvRzKIrOZsOykvBRaHL3BvSkc9D99cW0t81u8NS+qiiDNQNutNs4v1NCnf6mH1Gs/Bp9//vtfvwX/+OnD89Nfnp/+9OFb8M/vPzw//fnzz5+fPv/44V8//O356Yfnpz9e7+9bOi+9agP5kHgoLtpVMB+S3o7SjRFOe9NiMFCMUNFCBXzp7atl3GaSmo/V44O3DhTVCvUzt8BRpdUzu0IHQRFGbsLa2DeWWsNeZ/I/QUAfhGmCs+GcFoxqpk1GM+6EhKMQxokF53UVb0x87MCxMx71PJnMJ8u4rk/UuTcNzOH9eFLVLuI5T8OMtRDGQ282FIcPjhbetdFuGnsbjF9l1bkjjNEynFrz8YjudfjdaX6xHmRj3cgTV5Jtp3cgm5A5MVunXCE/P22kQ7JYDqYbW470sBNdKH2n0jAqGnV8YXn9xcyuZhq/LDH04jM3RQYIXnfCS7N+q6dfZoN67L6BeFkyv6I/1det1ZZhIrdW7EyRoH7ip3Whm1Mug+ECmTyhJ+xarwvCgcd26PPYI0GGk3aVpj7OUDtDsVcQ5ct4/xfHYKQuSBolzy3ikVdXAEp7LYYKePw3JJ7XDj8JAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

