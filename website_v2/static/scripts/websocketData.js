// javascript codes
// fetch data from server via WebSocket and transform innerHTML
var xmlParser = new DOMParser();
var xml_data = "";
var xml_data_websocket = "";
var xmlDoc = "";
var xmlDoc_websocket = "";
var arrmsg1 = "";
var plainNo1 = "";
var ws = new WebSocket("ws://localhost:8081");

ws.onmessage = function(message) {
  console.log(message);
  // console.log(message.data);
  var data = JSON.parse(message.data);
  var xml_data_websocket = data.est_bus_1;
  console.log("xml_data_websocket: " + xml_data_websocket);
  var xmlDoc_websocket = xmlParser.parseFromString(xml_data_websocket, "text/xml");
  console.log("xmlParser : " + xmlDoc_websocket);
  console.log("xmlParserID : " + xmlDoc_websocket.getElementsByTagName("arrmsg1")[0]);
  // Expected arriving time 1
  arrmsg1 = xmlDoc_websocket.getElementsByTagName("arrmsg1")[0].innerHTML;
  // Expected arriving time 2
  // arrmsg2 = xmlDoc_websocket.getElementsByTagName("arrmsg2")[0].innerHTML;
  // vehicle No which is planned to arrive first
  // plainNo1 = xmlDoc_websocket.getElementsByTagName("plainNo1")[0].innerHTML;
  // vehicle No which is planned to arrive first
  // plainNo2 = xmlDoc_websocket.getElementsByTagName("plainNo2")[0].innerHTML;
  console.log(arrmsg1);
  var idx = arrmsg1.indexOf("분");
  console.log(idx);
  arrmsg1 = arrmsg1.substring(0, idx + 1);
  console.log(arrmsg1);
  document.getElementById("est_bus_1").innerHTML = arrmsg1;
};
