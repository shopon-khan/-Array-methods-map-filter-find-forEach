const numbers = [2, 3, 4, 5, 6];
const friends = ['Rafiq', 'Jabbar', 'Aninul'];
const products = [
    {id:1, name:'laptop', price:200},
    {id:2, name: 'Mobile', price:300},
    {id:3,name:'watch', price:40},
    {id:4, name:'tablet', price:80},
];

// map
// when map use, jokon amar kache onek boro akti array takbe bitor onekgolo property takbe tarteke akti peoperty ney kecho akta korte chi tokon map use korbo.

// collect product name
const names = products.map(product => product.name);
const prices = products.map(product => product.price);
// multiline a map use korle automatic return hoyna. take leke return korte hoy.jamon
const prices2 = products.map(
    pd =>{
        return pd.price;
    
}) 
console.log(prices2);
// forEach a ak line map use korle take return korte hoy na she aklai return hoya jai. r jodi {} second braket use kora hoy akadik kajer jonno tahole must be return kore dete hobe.

// forEach use when kuno objects return korte hobena tokon forEach use korte hoy. jamon kuno akti object ar name golo neya kecho atka korte chi tokon forEach use korbo.
// forEach use korle tar result ta array hoy ashe na 
// products.forEach(product => console.log(product.name));

// filter holo kesu jenish nebo ar kecho jenish nebo na
