
// secret use - 8ac613dab743f4df95719988eb93229b

// secret admin = 6652589ed23b9d70c418bba0bc74bcb6

// djJ8MzIxOTExM3zeWGccAyRZt0WDLozU90zTloQuOs_ffF4ZccSsP2Ahz_c8Xy2CLZwRq5L5xWb3gdMCzGmFpB5xLMGgsWNyvfspovq7h7Ha40UoRrVaVKH-WDjhGxKo3dnOXbNPeJtHI2I=


const kaltura = require('kaltura-client');
const config = new kaltura.Configuration();
config.serviceUrl = 'https://www.kaltura.com';
const client = new kaltura.Client(config);
let loginId = "leeyahav018@gmail.com";
let password = "***********";
let partnerId = "3219113";
let expiry = 86400;
let privileges = "*";
let otp = "";

kaltura.services.user.loginByLoginId(loginId, password, partnerId, expiry, privileges, otp)
.execute(client)
.then(result => {
    console.log(result);
});



const kaltura = require('kaltura-client');
const config = new kaltura.Configuration();
config.serviceUrl = 'https://www.kaltura.com';
const client = new kaltura.Client(config);
kaltura.services.session.start(
    "6652589ed23b9d70c418bba0bc74bcb6",
    "leeyahav018@gmail.com",
    kaltura.enums.SessionType.ADMIN,
    3219113)
.completion((success, ks) => {
    if (!success) throw new Error(ks.message);
    client.setKs(ks);
    let filter = new kaltura.objects.MediaEntryFilter();
    let pager = new kaltura.objects.FilterPager();

    kaltura.services.media.listAction(filter, pager)
    .execute(client)
    .then(result => {
        console.log(result);
    });

})
.execute(client);