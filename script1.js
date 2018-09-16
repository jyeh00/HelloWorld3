function eBayPrices() {
  var request = new XMLHttpRequest();
  var isbn = document.getElementById("isbn").value;
  request.open("GET", "https://cors-anywhere.herokuapp.com/http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByProduct&SECURITY-APPNAME=Bhargavi-BoilerBo-PRD-0820bcb7d-4ab47624&RESPONSE-DATA-FORMAT=XML&REST-PAYLOAD&productId.@type=UPC&productId=".concat(isbn), false);
  request.send();
  var xml = request.responseXML; console.log(xml);
  var price = xml.getElementsByTagName("findItemsByProductResponse")[0].getElementsByTagName("searchResult")[0].getElementsByTagName("item")[0].getElementsByTagName("sellingStatus")[0].getElementsByTagName("convertedCurrentPrice")[0].textContent;
  console.log("eBay: " + price);

}

function walmartPrices () {
  var request = new XMLHttpRequest();
  var isbn = document.getElementById("isbn").value;
  request.open("GET", "https://cors-anywhere.herokuapp.com/http://api.walmartlabs.com/v1/items/12417832?apiKey=crw69vuvvfn9carv93j7mzgu".concat(isbn), false);
  request.send();
  var walmartResponse = request.responseText; console.log(json);
  //var price = xml.getElementsByTagName("findItemsByProductResponse")[0].getElementsByTagName("searchResult")[0].getElementsByTagName("item")[0].getElementsByTagName("sellingStatus")[0].getElementsByTagName("convertedCurrentPrice")[0].textContent;
  var walmartJson = JSON.parse(walmartResponse);
  console.log("eBay: " + price);
}

function googleBooksPrices() {

  var request = new XMLHttpRequest();
  var isbn = document.getElementById("isbn").value;
  request.open("GET", "https://www.googleapis.com/books/v1/volumes?key=AIzaSyA4S-VOm15Z5gq-x-uF6Zalp_T9rYRo3nM&q=".concat(isbn), false);
  request.send();
  var googleBooksResponse = request.responseText; console.log(json);
  var googleBooksJson = JSON.parse(googleBooksResponse);
  console.log("Google Books: " + price);



}

/* function rakutenPrices() {
  var request = new XMLHttpRequest();
  var isbn = document.getElementById("isbn").value;
  request.open("GET", "https://app.rakuten.co.jp/services/api/BooksBook/Search/20130522?applicationId=1076107261949433349&format=xml&isbn=".concat(isbn), false); //doesn't work
  request.send();
  var xml = request.responseXML;
  var price = xml.getElementsByTagName("Items")[0].getElementsByTagName("Item")[0].getElementsByTagName("itemPrice")[0].textContent;
  console.log("Rakuten: " + price);
//   $.ajax({
//    url: 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20130522',
//    data: {
//      "applicationId": 1076107261949433349,
//      "isbn": isbn,
//    },
//    error: function() {
//       $('#info').html('<p>An error has occurred</p>');
//    },
//    success: function(data) {
//      console.log(data);
//    },
//    type: 'GET'
// });

}

//function wrapperFunction() {
//  rakutenPrices();
//  eBayPrices();


//}
