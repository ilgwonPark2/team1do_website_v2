<template lang="html">
  <div class="">
    <!-- header -->
    <section class="row bus_stop_header">
      <div class="bus_container_content">
        <div class="col-sm-6" id="bus_stop_name">한이음버스환승센터</div>
        <div class="col-sm-2" id="bus_stop_id">12-345</div>
        <div class="col-sm-2" id="bus_stop_system">
            저상버스<br/>
            예약시스템
        </div>
        <div class="col-sm-2"><img id="img_disabled" src="../../static/image/disabled_man.png" alt="disabled_man"></div>
      </div>
    </section>
    <!--main body-->
    <section>
      <div class="row bus_container">
        <div class="col-sm-6 bus_container_border_general bus_container_border_town">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class="button" href="#popup1" @click="change_confirm_popup('마을', '마을 01')">마을 01</a>
          </div>
          <div class="col-sm-5 bus_container_background_general" id="est_bus_1">
            17분
          </div>
        </div>
        <div class="col-sm-6 bus_container_border_general bus_container_border_blue">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" href="#popup1" >105</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            41분
          </div>
        </div>
      </div>
      <div class="row bus_container">
        <div class="col-sm-6 bus_container_border_general bus_container_border_town">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" href="#popup1" @click="change_confirm_popup('마을', '마을 02')">마을 02</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            27분
          </div>
        </div>
        <div class="col-sm-6 bus_container_border_general bus_container_border_blue">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" href="#popup1">106</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            15분
          </div>
        </div>
      </div>
      <div class="row bus_container">
        <div class="col-sm-6 bus_container_border_general bus_container_border_blue">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" href="#popup1">101</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            38분
          </div>
        </div>
        <div class="col-sm-6 bus_container_border_general bus_container_border_green">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" href="#popup1">1001</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            19분
          </div>
        </div>
      </div>
      <div class="row bus_container">
        <div class="col-sm-6 bus_container_border_general bus_container_border_blue">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" href="#popup1">102</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            7분
          </div>
        </div>
        <div class="col-sm-6 bus_container_border_general bus_container_border_green">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" href="#popup1">1002</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            24분
          </div>
        </div>
      </div>
      <div class="row bus_container">
        <div class="col-sm-6 bus_container_border_general bus_container_border_blue">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" href="#popup1">103</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            54분
          </div>
        </div>
        <div class="col-sm-6 bus_container_border_general bus_container_border_green">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" href="#popup1">1003</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            31분
          </div>
        </div>
      </div>
      <div class="row bus_container">
        <div class="col-sm-6 bus_container_border_general bus_container_border_blue">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" href="#popup1">104</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            12분
          </div>
        </div>
        <div class="col-sm-6 bus_container_border_general bus_container_border_red">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" href="#popup1">9001</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            42분
          </div>
        </div>
      </div>
    </section>


    <div id="popup1" class="overlay">
	     <div class="popup">
           <div class="col-sm-6 popup_container_border_top">
             <div class="row popup_container_top_top">
               <div class="col-sm-8">
                 <h2>{{bus_num}}</h2>
               </div>
               <div class="col-sm-4">
                 <h5>
                   {{bus_num}}<br/>
                   청량리행
                 </h5>
               </div>
             </div>
             <div class="row popup_container_top_bottom">
               <div class="col-sm-12">
                 <h5>
                    저상버스 승차를 예약하시겠습니까?
                 </h5>
               </div>
             </div>
           </div>
           <div class="col-sm-6 popup_container_bottom">
             <div class="col-sm-6 popup_container_bottom_left">
               <a class="confirm" href="#" style="padding-left:10vh; color:black;" @click="send_signal_bus()">예</a>
             </div>
             <div class="col-sm-6 popup_container_bottom_right">
               <a class="cancel" href="#" style="padding-left:6vh; color:black;">아니오</a>
             </div>
           </div>
	    </div>
    </div>
  </div>
</template>

<script>
import axios from '../../static/scripts/axios.min.js';
export default {
  data: function() {
    return {
      bus_type: "",
      bus_num: "",
      errors: []
    }
  },
  methods: {
    change_confirm_popup: function(bus_type, bus_num) {
      this.bus_type = bus_type;
      this.bus_num = bus_num;

    },
    send_signal_bus: function() {
      axios.get('/api/send_data')
        .then(response => {
          console.log("sent")

        })
        .catch(e =>
          this.errors.push(e)
        )
    }
  }
}

var xmlParser = new DOMParser();
var xml_data = "";
var xml_data_websocket = "";
var xmlDoc = "";
var xmlDoc_websocket = "";
var arrmsg1 = "";
var arrmsg2 = "";
var plainNo1 = "";
var plainNo2 = "";
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
</script>

<style lang="css">
</style>
