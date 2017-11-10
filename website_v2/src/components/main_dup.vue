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
        <div class="col-sm-6 bus_container_border_general bus_container_border_blue">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class="button"  @click="load_popup('마을', '마을 01', 'main')">마을 01</a>
          </div>
          <div class="col-sm-5 bus_container_background_general" id="est_bus_1">
            17분
          </div>
        </div>
        <div class="col-sm-6 bus_container_border_general bus_container_border_blue">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" @click="load_popup('', '105')">105</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            41분
          </div>
        </div>
      </div>
      <div class="row bus_container">
        <div class="col-sm-6 bus_container_border_general bus_container_border_blue">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button"  @click="load_popup('마을', '마을 02')">마을 02</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            27분
          </div>
        </div>
        <div class="col-sm-6 bus_container_border_general bus_container_border_blue">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" @click="load_popup('', '106')">106</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            15분
          </div>
        </div>
      </div>
      <div class="row bus_container">
        <div class="col-sm-6 bus_container_border_general bus_container_border_blue">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" @click="load_popup('', '101')">101</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            38분
          </div>
        </div>
        <div class="col-sm-6 bus_container_border_general bus_container_border_blue">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" @click="load_popup('', '1001')">1001</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            19분
          </div>
        </div>
      </div>
      <div class="row bus_container">
        <div class="col-sm-6 bus_container_border_general bus_container_border_blue">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" @click="load_popup('', '102')">102</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            7분
          </div>
        </div>
        <div class="col-sm-6 bus_container_border_general bus_container_border_blue">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" @click="load_popup('', '1002')">1002</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            24분
          </div>
        </div>
      </div>
      <div class="row bus_container">
        <div class="col-sm-6 bus_container_border_general bus_container_border_blue">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" @click="load_popup('', '103')">103</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            54분
          </div>
        </div>
        <div class="col-sm-6 bus_container_border_general bus_container_border_blue">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" @click="load_popup('', '1003')">1003</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            31분
          </div>
        </div>
      </div>
      <div class="row bus_container">
        <div class="col-sm-6 bus_container_border_general bus_container_border_blue">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" @click="load_popup('', '104')">104</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            12분
          </div>
        </div>
        <div class="col-sm-6 bus_container_border_general bus_container_border_blue">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" @click="load_popup('', '9001')">9001</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            42분
          </div>
        </div>
      </div>
    </section>

    <!-- popup -->
    <div id="popupMain" class="overlay" >
	     <div class="popup popup_main">
           <div class="col-sm-6 popup_container_border_top popup_container_border_top_main">
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
           </div>
           <div class="col-sm-6 popup_container_bottom">
             <div class="col-sm-6 popup_container_bottom_left">
               <a class="confirm" style="padding-left:7vh; color:black;" @click="load_popup(bus_type, bus_num, 'reserve')">예약</a>
             </div>
             <div class="col-sm-6 popup_container_bottom_right">
               <a class="cancel" style="padding-left:4vh; color:black;" @click="load_popup(bus_type, bus_num, 'cancel' )">예약취소</a>
             </div>
           </div>
	    </div>
    </div>

    <!--Container popupReserve-->
    <div id="popupReserve" class="overlay" >
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
                    저상버스를 예약하시겠습니까?
                 </h5>
               </div>
             </div>
           </div>
           <div class="col-sm-6 popup_container_bottom">
             <div class="col-sm-6 popup_container_bottom_left">
               <a class="confirm" style="padding-left:10vh; color:black;">예</a>
             </div>
             <div class="col-sm-6 popup_container_bottom_right">
               <a class="cancel" style="padding-left:6vh; color:black;">아니오</a>
             </div>
           </div>
	    </div>
    </div>

    <!--Container popupReserved-->
    <div id="popupReserved" class="overlay" >
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
                    {{bus_num}}이 이미 예약되었습니다.<br/>
                    다음 버스를 예약하시겠습니까?
                 </h5>
               </div>
             </div>
           </div>
           <div class="col-sm-6 popup_container_bottom">
             <div class="col-sm-6 popup_container_bottom_left">
               <a class="confirm" style="padding-left:10vh; color:black;">예</a>
             </div>
             <div class="col-sm-6 popup_container_bottom_right">
               <a class="cancel" style="padding-left:6vh; color:black;">아니오</a>
             </div>
           </div>
      </div>
    </div>

    <!--Container popupResvationCancellation-->
    <div id="popupCancel" class="overlay" >
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
                    {{bus_num}}를 취소하시겠습니까?
                 </h5>
               </div>
             </div>
           </div>
           <div class="col-sm-6 popup_container_bottom">
             <div class="col-sm-6 popup_container_bottom_left">
               <a class="confirm" style="padding-left:10vh; color:black;" @click="send_data_server()">예</a>
             </div>
             <div class="col-sm-6 popup_container_bottom_right">
               <a class="cancel" style="padding-left:6vh; color:black;">아니오</a>
             </div>
           </div>
      </div>
    </div>

  </div>
</template>

<script>
// Vue scripts
import axios from '../../static/scripts/axios.min.js';
export default {
  data: function() {
    return {
      bus_type: "",
      bus_num: "",
      errors: [],
      // isReserved: false,
      busList:[],
      toHash:''
    }
  },
  methods: {
    load_popup: function(bus_type, bus_num, popup_type) {
      this.bus_type = bus_type;
      this.bus_num = bus_num;
      switch (popup_type){
          case 'main':
            this.toHash="#popupMain";
            break;
          case 'reserve':
            if(this.isReserved){
              this.toHash="#popupReserve";
            }else{
              this.toHash="#popupReserved";
            }
            break;
          case 'cancel':
            this.toHash="#popupCancel";
            break;
      }
      window.location.hash=this.toHash;
    },
    send_data_server: function() {
      // axios.get('/api/send_data')
      //   .then(response => {
      //     console.log("sent");
      //   })
      //   .catch(e =>
      //     this.errors.push(e)
      //   )
        this.$router.go(-1);
        this.isReserved=true;
    }
  }
}
</script>

<style lang="css">
</style>
