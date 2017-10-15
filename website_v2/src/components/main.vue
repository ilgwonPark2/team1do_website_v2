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
            <a class= "button" href="#popup1">마을 01</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            14분
          </div>
        </div>
        <div class="col-sm-6 bus_container_border_general bus_container_border_blue">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" href="#popup1">105</a>
          </div>
          <div class="col-sm-5 bus_container_background_general">
            41분
          </div>
        </div>
      </div>
      <div class="row bus_container">
        <div class="col-sm-6 bus_container_border_general bus_container_border_town">
          <div class="col-sm-7 bus_container_background_general bus_container_background_bus">
            <a class= "button" href="#popup1">마을 02</a>
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
		       <!-- <h2>Here i am</h2> -->
		       <!-- <a class="close" href="#">&times;</a> -->
		       <!-- <div class="content">
			       Thank to pop me out of that button, but now i'm done so you can close this window.
		       </div> -->
           <div class="col-sm-6 popup_container_border_top">
             <div class="row popup_container_top_top">
               <div class="col-sm-8">
                 <h2>마을 01</h2>
               </div>
               <div class="col-sm-4">
                 <h5>
                   마을버스<br/>
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
               <a class="confirm" href="#" style="padding-left:10vh; color:black;">예</a>
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
export default {


}
</script>

<style lang="css">
</style>
