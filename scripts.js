const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navLinks.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});




// var yahooFinance = require('./lib/yahoo-finance');

// yahooFinance.historical({
//   symbol: 'AAPL',
//   from: '2012-01-01',
//   to: '2012-12-31',
//   // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
// }, function (err, quotes) {
//   //...
// });

// // This replaces the deprecated snapshot() API
// yahooFinance.quote({
//   symbol: 'AAPL',
//   modules: [ 'price', 'summaryDetail' ] // see the docs for the full list
// }, function (err, quotes) {
//   // ...
// });
