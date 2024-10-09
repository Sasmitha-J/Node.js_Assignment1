//4.DNS Module

const dns = require('dns');

dns.lookup('google.com', (err, address, family) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('IP Address:', address);
    console.log('Address Family:', family);
});


//OUTPUT:

/*
IP Address: 142.250.64.78
Address Family: 4

*/