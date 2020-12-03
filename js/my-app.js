// Initialize your app
var myApp = new Framework7({
    modalTitle: 'happyfly',
    // If it is webapp, we can enable hash navigation:
    pushState: true,
    material: true,
	animatePages:true,
	
    cache: false,
	panel: {
		swipe: 'left',
	},
	
	routes: [
    {
	  name: 'search-car',	
      path: 'search-car',
      url: 'search-car.html',
    },
	{
	  path: '/',
	  url: 'index.html',
    },
	{
      path: '(.*)',
      url: './pages/404.html',
    },
  ],
	
    // Hide and show indicator during ajax requests
    onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    },

});

// Export selectors engine
var $$ = Dom7;
// Add view
var mainView = myApp.addView('.view-main', {
   domCache: true,
});


var RequestURL ='https://www.adivaha.com/demo/MobAppRequest';
var TPHotelUrl ='https://flight-images.adivaha.com/hotels';
var TPFlightUrl ='https://apptravelpayouts.adivaha.com/flights';
var marker='40247';

myApp.onPageInit('index', function (page) {
$$('.pageFlashLoaderKK').show();	


setTimeout(function(){ $$('.pageFlashLoaderKK').hide('slow'); }, 3000);	


var weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];	

var strDate =new Date();	
var enrDate =new Date();
strDate.setDate(strDate.getDate() + 1);
enrDate.setDate(enrDate.getDate() + 2);


//var sMonth =start.getMonth() < 12 ? start.getMonth() + 1 : 1;
//var eMonth =end.getMonth() < 12 ? start.getMonth() + 1 : 1;

var checkIn = strDate.getFullYear()+"-"+ (strDate.getMonth()+1) + "-" + strDate.getDate();
var checkOut = enrDate.getFullYear()+"-"+ (enrDate.getMonth()+1) + "-" + enrDate.getDate();


var startDate_txt = weekday[strDate.getDay()]+', '+strDate.getDate()+' '+monthNames[(strDate.getMonth()+1)]+' '+strDate.getFullYear().toString().substr(-2);
var endDate_txt = weekday[enrDate.getDay()]+', '+enrDate.getDate()+' '+monthNames[(enrDate.getMonth()+1)]+' '+enrDate.getFullYear().toString().substr(-2);


var htmlHotel ='<div class="history-home-page-main-left"><i class="fa fa-home"></i></div><a href="'+TPHotelUrl+'?marker='+marker+'&destination=New Delhi&checkIn='+checkIn+'&checkOut='+checkOut+'&adults=2&children=&language=en&currency=USD&&cityId=24077" class="link external"><div class="history-home-page-main-right"><div class="history-home-text">New Delhi</div><div class="history-home-text1">'+startDate_txt+' - '+endDate_txt+'</div><div class="history-home-text2"><i class="fa fa-user"></i> 2 Guests </div><div class="history-home-text3"><i class="fa fa-bed"></i>1 Room </div></a></div>';
$$('#storeHotelLists').html(htmlHotel);

var htmlFlight ='<div class="history-home-page-main-left">'+
					'<i class="fa fa-plane"></i>'+
				'</div>'+
				'<div class="history-home-page-main-right">'+
				  '<div class="history-recents">'+
						'<div class="history-recents-left">'+
						 '<a href="'+TPFlightUrl+'?marker='+marker+'&origin_name=Delhi,%20India&origin_iata=DEL&destination_name=Goa,%20India&destination_iata=GOI&depart_date='+checkIn+'&return_date=&Flights_Return_direct=enable&with_request=true&adults=1&children=0&infants=0&trip_class=0&currency=USD&locale=en&one_way=true&ct_guests=1passenger&ct_rooms=1" class="link external"><div class="deltopatfri">'+
							'<div class="deltopatfri1">'+
								'<span>DEL</span> <span><i class="fa fa-arrow-right"></i></span> <span>GOI</span>'+
								'</div>'+
									'<div class="deltopatfri2">'+
								'<span>'+startDate_txt+'</span>'+
							'</div>'+
							'</div></a>'+
							'<a href="'+TPFlightUrl+'?marker='+marker+'&origin_name=Delhi,%20India&origin_iata=DEL&destination_name=Mumbai,%20India&destination_iata=BOM&depart_date='+checkIn+'&return_date=&Flights_Return_direct=enable&with_request=true&adults=1&children=0&infants=0&trip_class=0&currency=USD&locale=en&one_way=true&ct_guests=1passenger&ct_rooms=1" class="link external"><div class="deltopatfri">'+
							'<div class="deltopatfri1">'+
								'<span>DEL</span> <span><i class="fa fa-arrow-right"></i></span> <span>BOM</span>'+
								'</div>'+
									'<div class="deltopatfri2">'+
								'<span>'+startDate_txt+'</span>'+
							'</div>'+
							'</div></a>'+
					'</div>'+
					'</div>'+
				'<div class="history-home-text2"><i class="fa fa-briefcase"></i>  Economy<span class="economyadlet">1 <i class="fa fa-male"></i> </span> </div>'+
			   '</div>';
$$('#storeFlightLists').html(htmlFlight);

}).trigger();


$$(document).on('pageInit',function(e){
 var page =e.detail.page;


if(page.name=='search-hotels'){ 
	var hotelType =page.query.hotelType;
	
	//=== Set default date ===/
	var strDate =new Date();
	var enrDate =new Date();
    strDate.setDate(strDate.getDate() + 1);
	enrDate.setDate(enrDate.getDate() + 3);
	
	var startDate = (strDate.getMonth()+1) + "/" + strDate.getDate() + "/" +strDate.getFullYear();
	var enDate = (enrDate.getMonth()+1) + "/" + enrDate.getDate() + "/" +enrDate.getFullYear();
	var startRange =strDate.getFullYear()+', '+(strDate.getMonth()+1)+', '+strDate.getDate();
	var endRange =enrDate.getFullYear()+', '+(enrDate.getMonth()+1)+', '+enrDate.getDate();
	

	$$('#startDate').val(startDate);
	$$('#endDate').val(enDate);
  /*===== Calendar =====*/
    var weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	
    var today =new Date();
	var calendarRange = myApp.calendar({
    input: '#appCalendar',
    dateFormat: 'M dd yyyy',
    rangePicker: true,
	minDate: today,
	//value: [new Date(2018, 5, 11), new Date(2018, 5, 15)],
	value: [new Date(startRange), new Date(endRange)],
	onChange: function (p, values, displayValues){  
		var start =values[0];
		var end =values[1];
		
		var sMonth =start.getMonth() < 12 ? start.getMonth() + 1 : 1;
		var eMonth =end.getMonth() < 12 ? start.getMonth() + 1 : 1;
		
		var startDate = sMonth+'/'+start.getDate()+'/'+start.getFullYear(); 
		var endDate =eMonth+'/'+end.getDate()+'/'+end.getFullYear();
		var startDate_txt = weekday[start.getDay()]+', '+start.getDate()+' '+monthNames[start.getMonth()]+' '+start.getFullYear().toString().substr(-2);
		var endDate_txt = weekday[end.getDay()]+', '+end.getDate()+' '+monthNames[end.getMonth()]+' '+end.getFullYear().toString().substr(-2);
		
		$$('#startDate').val(startDate);
		$$('#endDate').val(endDate);
		$$('#startDate_txt').html(startDate_txt);
		$$('#endDate_txt').html(endDate_txt);
		
	   }
    });

   
   var glob =0;
   $$('.addMoreRooms').on('click', function () {
	  var numRooms = $$('.roomListcls').length;
	  var n =parseInt(numRooms)+1;
	  $$('#number_of_rooms').val(n);
	  glob++;
	  var pacHtml='';
      pacHtml+='<div class="card ks-facebook-card roomListcls">'+
	            '<input type="hidden" name="adults[]" id="adults_'+glob+'" value="1"><input type="hidden" name="childs[]" id="childs_'+glob+'" value="0">'+
			'<div class="card-footer no-border"><a href="#" class="link rooming">Room '+n+'</a><a href="#" class="link deleteRooms" ><i class="material-icons">delete</i></a></div>'+
				'<div class="card-content">'+
				 '<div class="content-block">'+ 
					'<div class="roomPagePadding">'+ 
						'<div class="row margin_br">'+
							'<div class="col-60">'+ 
								'<div class="roomPageTitle">Adults</div>'+
								'<div class="roomPageTitleBottom">Above 12 yrs</div>'+
							'</div>'+
							'<div class="col-40">'+
								'<div class="row roomPagePaddingBottom">'+
									'<div class="col-33">'+
										'<a href="#" class="link left pack_circle minusAdults" rel="'+glob+'"><i class="material-icons">remove</i></a>'+
									'</div>'+
									'<div class="col-33">'+
										'<a href="#" class="link center" id="countAdults_'+glob+'">1</a>'+ 
									'</div>'+
									'<div class="col-33">'+
										'<a href="#" class="link right pack_circle plusAduls" rel="'+glob+'"><i class="material-icons">add</i></a>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="roomPagePadding">'+
						'<div class="row">'+
							'<div class="col-60 marginbr"> '+
								'<div class="roomPageTitle">Children</div>'+
								'<div class="roomPageTitleBottom">0-12 yrs</div>'+
							'</div>'+
							'<div class="col-40">'+
								'<div class="row roomPagePaddingBottom">'+
									'<div class="col-33">'+
										'<a href="#" class="link left pack_circle minusChilds" rel="'+glob+'"><i class="material-icons">remove</i></a>'+
									'</div>'+
									'<div class="col-33">'+
										'<a href="#" class="link center" id="countChilds_'+glob+'">0</a>'+
									'</div>'+
									'<div class="col-33">'+
										'<a href="#" class="link right pack_circle plusChilds" rel="'+glob+'"><i class="material-icons">add</i></a>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="row"><div class="col-30">&nbsp;</div><div class="col-70 childAgeCls" id="childAgeList_'+glob+'"></div></div>'+
					'</div>'+
				'</div>'+
			'</div>'+
		'</div>';	 
	 $$('#roomspacksDetails').append(pacHtml);
	 
	 if(n==3){ $$('.addMoreRooms').hide();}
	 else{$$('.addMoreRooms').show();}
	  
	 deleteRooms();
	 roomAndGuestCount();
	});
  
  function deleteRooms(){
	$$('.deleteRooms').on('click',function(e){
	  e.preventDefault();
	  $$(this).closest('.roomListcls').remove();
	  var numRooms = $$('.roomListcls').length;
	  $$('#number_of_rooms').val(numRooms);
	  $$('.addMoreRooms').show();
	  
	  var v=1;
	  $$(".rooming").each(function() {
		  $$(this).html('Room '+v);
		  v++;
	   });
    })  
  }
  
  
  $$("body").on("click", ".plusAduls", function(e){
	 e.preventDefault(); 
     var rel = $$(this).attr('rel');
	 var adt =$$('#countAdults_'+rel).html();
	 var adult= parseInt(adt)+1;
	 if(adult<=4){
	  $$('#countAdults_'+rel).html(adult);
	  $$('#adults_'+rel).val(adult);
	  roomAndGuestCount();
	 }
  });
  $$("body").on('click','.minusAdults',function(e){
	e.preventDefault();	
	var rel = $$(this).attr('rel');
	var adt =$$('#countAdults_'+rel).html();
	var adult= parseInt(adt)-1;
	if(adult>=1){
	 $$('#countAdults_'+rel).html(adult);
	 $$('#adults_'+rel).val(adult);
	 roomAndGuestCount();
	}
  });
  
  $$("body").on('click','.plusChilds',function(e){
	e.preventDefault();	
	var rel = $$(this).attr('rel');
	var adt =$$('#countChilds_'+rel).html();
	var child= parseInt(adt)+1;
	if(child<=3){
	$$('#countChilds_'+rel).html(child);
	$$('#childs_'+rel).val(child);
	 manageChildAge(child,rel);
	 roomAndGuestCount();
	}
  });
  
  $$("body").on('click','.minusChilds',function(e){
	e.preventDefault();	
	var rel = $$(this).attr('rel');
	var adt =$$('#countChilds_'+rel).html();
	var child= parseInt(adt)-1;
	if(child>=0){
	$$('#countChilds_'+rel).html(child);
	$$('#childs_'+rel).val(child);
	manageChildAge(child,rel);
	roomAndGuestCount();
	}
  });
  
  function manageChildAge(child,rel){
	 var ageHtml ='';
	 for(var i=0;i<child;i++){
	   ageHtml+='<select name="childAge['+rel+'][]" relKey='+rel+'><option value="0"> < 1 </option><option value="1"> 1 </option><option value="2"> 2 </option></select>';	 
	 }
	 $$("#childAgeList_"+rel).html(ageHtml);
  }
  
  function roomAndGuestCount(){
	var adts  = document.getElementsByName('adults[]');
	var chds  = document.getElementsByName('childs[]');
	var guest=0;
    for (var i = 0; i <adts.length; i++) {
	  var adt=adts[i].value;
	  guest =parseInt(guest)+parseInt(adt);
	}
	
	for (var c = 0; c <chds.length; c++) {
	  var chd=chds[c].value;
	  guest =parseInt(guest)+parseInt(chd);
	}
	
	var rooms =$$('#number_of_rooms').val();
   	$$('#roomGuestTxt').html(rooms+' Rooms, '+guest+' Guests ');
	$$('#selectedDest_adults').html(guest+' Guests, '+rooms+' Rooms');
  }
  
  
  /*=== Auto suggetion ===*/
  var autocompleteDropdownAjax = myApp.autocomplete({
	opener: $$('#autocomplete-standalone-popup'),
    openIn: 'popup',
	backOnSelect: true,
    preloader: true, 
    valueProperty: 'fullname', 
    textProperty: 'fullname', 
    limit: 20, 
	autoFocus: true,
    dropdownPlaceholderText: 'Try "JavaScript"',
    expandInput: true, 
    source: function (autocomplete, query, render) {
        var results = [];
        if (query.length === 0) {
            render(results);
            return;
        }
        autocomplete.showPreloader();
        $$.ajax({
            url: 'https://yasen.hotellook.com/autocomplete',
            method: 'GET',
            dataType: 'json',
            data: {
                term: query,
				action: "Location_Fetch",
				lang: 'en',
				limit: 5
            },
            success: function (data) {
				var myData =data.cities; 
                for (var i = 0; i < myData.length; i++) {
                   if (myData[i].fullname.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(myData[i]);
                }
                autocomplete.hidePreloader();
                render(results);
            }
        });
    },
	onChange: function (autocomplete, value) { 
	 var dataObj =value[0];
	 $$('#destination').val(dataObj.latinFullName);	
     $$('#selectedDest').html(dataObj.latinFullName);	 	 
     $$('#latitude').val(dataObj.location.lat);
     $$('#longitude').val(dataObj.location.lon);
	 $$('#region_id').val(dataObj.id);
	}
	
   });

  
  
  
  
   var hotelObject = [];
  
   $$('.findHotelResults').on('click', function(e){ 
	   var formData = myApp.formToData('#searchHotel_frm');
	   //myApp.formStoreData('HotelRequestData',formData);
	 var adults =$$('#adults_0').val(); 
	 var childs =$$('#childs_0').val();
	 var childAgeArr= new Array;
	 $$('.childAgeCls select').each(function(){ 
		   var relKey =$$(this).attr('relKey');
		   childAgeArr.push([relKey, $$(this).val()]); 
		});
	 
	 
	  var startDate =$$('#startDate').val();
      var startDateArr =startDate.split('/');
      var endDate =$$('#endDate').val();
      var endDateArr =endDate.split('/');
	  
	  var m =startDateArr[0];
	  var d =startDateArr[1];
	  if(d<10){d ='0'+d; }
	  if(m<10){m ='0'+m; }
	  
	  var rm =endDateArr[0];
	  var rd =endDateArr[1];
	  if(rd<10){rd ='0'+rd; }
	  if(rm<10){rm ='0'+rm; }
	  
      //var checkIn =startDateArr[2]+'-'+startDateArr[0]+'-'+startDateArr[1];
	  //var checkOut =endDateArr[2]+'-'+endDateArr[0]+'-'+endDateArr[1];
	  
	  var checkIn =startDateArr[2]+'-'+m+'-'+d;
	  var checkOut =endDateArr[2]+'-'+rm+'-'+rd;
	
	  var cityid = $$('#latitude').val()+'_'+$$('#longitude').val();
	  
	  
	  var url ='search-results.html?mt=result&dest='+$$('#destination').val()+'&cityId='+cityid+'&checkIn='+checkIn+'&checkOut='+checkOut+'&currency=USD&language=en&hotelType=1&rooms='+$$('#number_of_rooms').val()+'&adults=1&childs=&childAge=';
	
	  mainView.router.loadPage(url);
	 
   })
  
}

/*=== Search Result page ====*/

// alert(page.name);
if(page.name=='search-results')
{
	
var mt =page.query.mt;

$$('.pageFlashLoaderKK').show();	


setTimeout(function(){
	$$('.pageFlashLoaderKK').hide('slow'); 
}, 3000);	

var destination =page.query.dest;
var latitude =page.query.latitude;	 
var longitude =page.query.longitude;	 
var checkIn =page.query.checkIn;
var checkOut =page.query.checkOut;
var Cri_currency =page.query.currency;
var Cri_language =page.query.language;
var checkOut =page.query.checkOut;
var rooms =page.query.rooms;
var adults = page.query.adults;
var childs = page.query.childs;
var childAge = page.query.childAge;

if(childs=='' &&  childAge==''){
	var childs = 0;
	var childAge = 0;
}

var cityId =page.query.cityId;



/* query */
var queryobj = page.query;
var i;
var qryVal = Object.values(queryobj);
var qryKey = Object.keys(queryobj);
var queryUrl = '';
for(i=0; i<qryKey.length; i++){
	  queryUrl +=	'&'+qryKey[i]+'='+qryVal[i];
}

//$$('#iFrameResizer0').attr('src','');
// alert('mt'+mt);

if(mt=='result'){
	// alert('result');
$$('.search-resultspage').find('.search-resultsPageNavbarTitle').html(destination);
$$('.search-resultspage').find('.search-resultsPageNavbarTitlef').html('CheckIn: '+checkIn+' | CheckOut: '+checkOut+' | Rooms: '+rooms);
var frameSrc ='https://www.abengines.com/search-results/?version=v2&pid=77A758&mid=HBDS5C437514F0404&device=app&mt=result&dest='+destination+'&checkIn='+checkIn+'&checkOut='+checkOut+'&rooms='+rooms+'&adults='+adults+'&children='+childs+'&childAge='+childAge+'&language='+Cri_language+'&currency=USD&cityId='+cityId+'&hotel_name=&datatype=&IsApp=Yes';
}
if(mt=='detail'){
 var frameSrc ='https://www.abengines.com/search-results/?version=v2&pid=77A758&mid=HBDS5C437514F0404&device=app'+queryUrl;
 //alert('detail');

}

if(mt=='booking'){
var frameSrc ='https://www.abengines.com/search-results/?version=v6&pid=77A758&mid=HBDS5C437514F0404&device=app'+queryUrl;
//alert('booking');

}
if(mt=='confirmation'){
var frameSrc ='https://www.abengines.com/search-results/?version=v6&pid=77A758&mid=HBDS5C437514F0404&device=app'+queryUrl;
//alert('confirmation');
}




$$('#iFrameResizer0').attr('src',frameSrc);

window.onhashchange = function() { 

console.log('urlchanged');
// alert('mt==='+mt);
  var browurl =window.location.href;
	/* window.location.href = browurl;
	  mainView.router.loadPage(browurl);
		mainView.router.refreshPage() */;

		$$(".views").addClass("abhishek");
		$$(".abhishek").attr("id","addpagecustom");
		
		var url = window.location.href;
		var url1 = url.split("?");
		var url2 = url1[1];
		
		/* if(url2=="hotelType=1"){
			window.location.reload()
		} */
		var url3 = url2.split("&");
		console.log(url3);
		// alert(url3);
		var i;
		var urlquery='';
		
		for(i=0;i<url3.length;i++){
			
			urlquery += '&'+url3[i];
		}
		if(url3[0]=="mt=result"){
				urlquery += '&childAge=0&children=0';
				// alert('back-mt-reusult')
			}
			// alert(urlquery);
		
		var url4 = url3[0].split("=");
		
		/* alert('test1'); */
		if(url4[1]!=''){
			var frameSrc ='https://www.abengines.com/search-results/?version=v2&pid=77A758&mid=HBDS5C437514F0404&device=app'+urlquery;
		var htmlifrm = "<div data-distance='50' id='searchpageContentDiv' class='iframecustom page-content padding-top-56'><iframe src='"+frameSrc+"' scrolling='no' frameborder='0' style='width: 100%; overflow: hidden; height: 1320px;' id='iFrameResizer0'></iframe></div>";
		
	
		
		/* $(window).on('popstate', function(event) {
			history.back(); 
		}); */
		
		$$("#searchpageContentDiv").remove();
		$$(".abhishek").append(htmlifrm);
		$$('#addpagecustom').find("#iFrameResizer0").attr('src',frameSrc);
		$$("#searchpageContentDiv").css("z-index","99999");
		$$("#searchpageContentDiv").css("position","inherit");
		// $$(".iframecustom").css("position","inherit");
		
		$$(".view").hide();
		}

		

	
		 
}

}





/*=== detail page ====*/
/* 
if(page.name=='hotel-detail'){
$$('.pageFlashLoaderKK').show();	

setTimeout(function(){ $$('.pageFlashLoaderKK').hide('slow'); }, 3000);	
var hotelid =page.query.hotelid;
var hotelname =page.query.hotelname;
var dest =page.query.dest;	
var cityId  =page.query.cityId;

if(typeof cityId!='undefined' && cityId!=''){
var latlongArr =cityId.split('_');
var latitude =latlongArr[0];
var latitude =latlongArr[0];
}

var search_Session_Id =page.query.search_Session_Id;
var checkIn =page.query.checkIn;
var checkOut =page.query.checkOut;
var rooms =page.query.rooms;
var adults = page.query.adults;
var children = page.query.children;
var childAge = page.query.childAge;
var language =page.query.language;
var currency =page.query.currency;

var ratecode =page.query.ratecode;
var itineraryId	= page.query.itineraryId;
var mt =page.query.mt;


$$('.hotel-detailpage').find('.search-resultsPageNavbarTitle').html(hotelname);
$$('.hotel-detailpage').find('.search-resultsPageNavbarTitlef').html('<span>CheckIn: '+checkIn+' | CheckOut: '+checkOut+' | Rooms: '+rooms+'</span>');


var queryobj = page.query;
var i;
var qryVal = Object.values(queryobj);
var qryKey = Object.keys(queryobj);
var queryUrl = '';
for(i=0; i<qryKey.length; i++){
	  queryUrl +=	'&'+qryKey[i]+'='+qryVal[i];
}

if(mt=='detail'){
var frameSrc ='https://www.abengines.com/search-results/?version=v2&pid=77A758&mid=HBDS5C437514F0404&device=app'+queryUrl;
alert('detail');
$$('.hotel-detailpage').find('iframe').attr('src',frameSrc);
 }

} */




/*=== Flight Modules ====*/ 
if(page.name=='search-flights'){ 
	//=== Set default date ===/
	var strDate =new Date();
	var enrDate =new Date();
    strDate.setDate(strDate.getDate() + 1);
	enrDate.setDate(enrDate.getDate() + 1);
	
	var startDate = (strDate.getMonth()+1) + "/" + strDate.getDate() + "/" +strDate.getFullYear();
	var enDate = (enrDate.getMonth()+1) + "/" + enrDate.getDate() + "/" +enrDate.getFullYear();
	var startRange =strDate.getFullYear()+', '+(strDate.getMonth()+1)+', '+strDate.getDate();
	var endRange =enrDate.getFullYear()+', '+(enrDate.getMonth()+1)+', '+enrDate.getDate();
	
	$$('#startDate').val(startDate);
	$$('#endDate').val(enDate);
	
	
 
   /*===== Calendar ===== */
    var weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var today =new Date();
	var calendarRange = myApp.calendar({
	input: '#appCalendar',
	dateFormat: 'M dd yyyy',
	rangePicker: true,
	minDate: today,
	value: [new Date(startRange), new Date(endRange)],
	onChange: function (p, values, displayValues){  
		var start =values[0];
		var end =values[1];
		
		var sMonth =start.getMonth() < 12 ? start.getMonth() + 1 : 1;
		var eMonth =end.getMonth() < 12 ? start.getMonth() + 1 : 1;
		
		var startDate = sMonth+'/'+start.getDate()+'/'+start.getFullYear(); 
		var endDate =eMonth+'/'+end.getDate()+'/'+end.getFullYear();
		var startDate_txt = weekday[start.getDay()]+', '+start.getDate()+' '+monthNames[start.getMonth()]+' '+start.getFullYear().toString().substr(-2);
		var endDate_txt = weekday[end.getDay()]+', '+end.getDate()+' '+monthNames[end.getMonth()]+' '+end.getFullYear().toString().substr(-2);
		
		$$('#startDate').val(startDate);
		$$('#endDate').val(endDate);
		$$('#startDate_txt').html(startDate_txt);
		$$('#endDate_txt').html(endDate_txt);
	   }
	});	
   /*=== Activity Auto suggetion ===*/	
   var autocompleteDropdownAjax = myApp.autocomplete({
	opener: $$('#autocomplete-standalone-popup'),
	openIn: 'popup',
	backOnSelect: true,
	preloader: true, 
	valueProperty: 'city_code', 
	textProperty: 'city_fullname', 
	limit: 20, 
	autoFocus: true,
	dropdownPlaceholderText: 'Try "JavaScript"',
	expandInput: true, 
	source: function (autocomplete, query, render) {
		var results = [];
		if (query.length === 0) {
			render(results);
			return;
		}
		autocomplete.showPreloader();
		$$.ajax({
			url: 'https://www.jetradar.com/autocomplete/places',
			method: 'GET',
			dataType: 'json',
			data: {
				q: query,
				with_countries: "false",
				locale: 'en',
				limit: 5
			},
			success: function (data) {
				var myData =data; 
				for (var i = 0; i < myData.length; i++) {
				   if (myData[i].city_fullname.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(myData[i]);
				}
				autocomplete.hidePreloader();
				render(results);
			}
		});
	},
	onChange: function (autocomplete, value) { 
	 var dataObj =value[0];
	 $$('#flight_from').val(dataObj.city_fullname);
	 $$('#flight_locationId').val(dataObj.city_code);
     $$('#selectedDest').html(dataObj.city_fullname);	 	 
	}
  });

  var autocompleteDropdownAjax = myApp.autocomplete({
	opener: $$('#autocomplete-standalone-popup-to'),
	openIn: 'popup',
	backOnSelect: true,
	preloader: true, 
	valueProperty: 'city_code', 
	textProperty: 'city_fullname', 
	limit: 20, 
	autoFocus: true,
	dropdownPlaceholderText: 'Try "JavaScript"',
	expandInput: true, 
	source: function (autocomplete, query, render) {
		var results = [];
		if (query.length === 0) {
			render(results);
			return;
		}
		autocomplete.showPreloader();
		$$.ajax({
			url: 'https://www.jetradar.com/autocomplete/places',
			method: 'GET',
			dataType: 'json',
			data: {
				q: query,
				with_countries: "false",
				locale: 'en',
				limit: 5
			},
			success: function (data) {
				var myData =data; 
				for (var i = 0; i < myData.length; i++) {
				   if (myData[i].city_fullname.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(myData[i]);
				}
				autocomplete.hidePreloader();
				render(results);
			}
		});
	},
	onChange: function (autocomplete, value) { 
	 var dataObj =value[0];
	 $$('#flight_to').val(dataObj.city_fullname);
	 $$('#flight_to_locationId').val(dataObj.city_code);	
     $$('#selectedToDest').html(dataObj.city_fullname);	 	 
	}
  });  
	
  $$('.managePassenger').on('click', function () {
	  var adults =$$('#adults').val();
	  var childs =$$('#childs').val();
	  var infants =$$('#infants').val();
	  var mType =$$(this).attr('mType');
	  var aType =$$(this).attr('aType');
	  if(aType=='add'){
		 if(mType=='adults'){ 
		   adults =parseInt(adults)+1;
		   $$('#adults').val(adults);
		   $$('#countAdults').html(adults);
		 }
		 if(mType=='childs'){ 
		   childs =parseInt(childs)+1;
		   $$('#childs').val(childs);
		   $$('#countChilds').html(childs);
		 }
		 if(mType=='infants'){ 
		   infants =parseInt(infants)+1;
		   $$('#infants').val(infants);
		   $$('#countInfants').html(infants);
		 }
	  }
	 if(aType=='remove'){
		 if(mType=='adults'){ 
		   if(adults>1){
		   adults =parseInt(adults)-1;
		   $$('#adults').val(adults);
		   $$('#countAdults').html(adults);
		   }
		 }
		 if(mType=='childs'){ 
		   if(childs>0){
		   childs =parseInt(childs)-1;
		   $$('#childs').val(childs);
		   $$('#countChilds').html(childs);
		   }
		 }
		 if(mType=='infants'){ 
		    if(infants>0){ 
		    infants =parseInt(infants)-1;
		    $$('#infants').val(infants);
		    $$('#countInfants').html(infants);
			}
		 }
	  } 
	  
	  var passenger =parseInt(adults)+parseInt(childs)+parseInt(infants);
	  $$('#roomGuestTxt').html(passenger +' Passengers' );
	  $$('#selectedPassengers').html(passenger+' Passengers');
  });
  
  $$('.tripType').on('click', function (e) {
	 $$('.tripType').removeClass('active');
	 $$(this).addClass('active');
	 var rel =$$(this).attr('rel');
	 if(rel=='round'){
		$$('#one_way').val('false'); 
		$$('.endDatecss').removeClass('disabledClass'); 
	 }else{
	   $$('#one_way').val('true'); 	 
	   $$('.endDatecss').addClass('disabledClass');
	 }
  });
  
  $$('.findFlightResults').on('click', function (e) {
   var result =$$('input[name=result]:checked').val();	 
   var trip_class =0;
   if(result=='Business'){ trip_class=1;  }
   
   var one_way =$$('#one_way').val();
   
   var startDate =$$('#startDate').val();
   var startDateArr =startDate.split('/');
   var endDate =$$('#endDate').val();
   var endDateArr =endDate.split('/');
   var departDate =startDateArr[2]+'-'+startDateArr[0]+'-'+startDateArr[1];
   /*
   if(one_way=='false'){ 
    var returnDate =endDateArr[2]+'-'+endDateArr[0]+'-'+endDateArr[1];
   }else{ 
	var returnDate ='';   
   }*/
   var returnDate =endDateArr[2]+'-'+endDateArr[0]+'-'+endDateArr[1];
   
   if(one_way=='true'){
	one_way='Yes';   
   }
   else{
	one_way='No';   
   }
   
   var adults =$$('#adults').val();
   var childs =$$('#childs').val();
   var infants =$$('#infants').val();
   var passenger =parseInt(adults)+parseInt(childs)+parseInt(infants);
   
   var ct_guests =passenger+'passenger';
   var Flights_Return_direct ='enable';
   
 
   var from_iata_name =$$('#flight_from').val();
   var fromArr =from_iata_name.split(",");
   var from_country =fromArr[fromArr.length-1].trim();
   var to_iata_name =$$('#flight_to').val();
   var toArr =to_iata_name.split(",");
   var to_country =toArr[toArr.length-1].trim();	
	
   if( (from_country=='India') && (to_country=='India')){
	 var isDomestic ='Yes';	
	}
	else{
	 var isDomestic ='No';	
	}
   
   var url ='search-flight-results.html?mt=result&origin_name='+$$('#flight_from').val()+'&origin_iata='+$$('#flight_locationId').val()+'&destination_name='+$$('#flight_to').val()+'&destination_iata='+$$('#flight_to_locationId').val()+'&depart_date='+departDate+'&return_date='+returnDate+'&adults='+$$('#adults').val()+'&children='+$$('#childs').val()+'&infants='+$$('#infants').val()+'&cabin='+trip_class+'&currency=INR&locale=en&one_way='+one_way+'&isDomestic='+isDomestic; 
   

   mainView.router.loadPage(url);
   
  })
}

/*=== Search Result page ====*/
if(page.name=='search-flight-results')
{$$('.pageFlashLoaderKK').show();	


setTimeout(function(){ $$('.pageFlashLoaderKK').hide('slow'); }, 3000);	
var origin_name =page.query.origin_name;
var origin_iata =page.query.origin_iata;	 
var destination_name =page.query.destination_name;	 
var destination_iata =page.query.destination_iata;
var depart_date =page.query.depart_date;
var return_date =page.query.return_date;
var adults = page.query.adults;
var children = page.query.children;
var infants = page.query.infants;
var currency = page.query.currency;
var locale = page.query.locale;
var one_way = page.query.one_way;
var cabin = page.query.cabin;
var isDomestic = page.query.isDomestic;
var mt = page.query.mt;

/* query */
var queryobj = page.query;
var i;
var qryVal = Object.values(queryobj);
var qryKey = Object.keys(queryobj);
var queryUrl = '';
for(i=0; i<qryKey.length; i++){
	  queryUrl +=	'&'+qryKey[i]+'='+qryVal[i];
}

$$('.item-title').html(origin_name+' ('+origin_iata+') To '+destination_name+' ('+destination_iata+')');
//$$('#iFrameResizer0').attr('src','');


//var frameSrc ='https://www.abengines.com/search-results/?version=v6&pid=77A758&mid=ADIM5C66A1BF561B1&mt='+mt+'&aid=&origin_name='+origin_name+'&origin_iata='+origin_iata+'&destination_name='+destination_name+'&destination_iata='+destination_iata+'&depart_date='+depart_date+'&return_date='+return_date+'&one_way='+one_way+'&adults='+adults+'&children='+children+'&infants='+infants+'&currency='+currency+'&language='+locale+'&isDomestic='+isDomestic+'&cabin='+cabin;



if(mt=="result"){
	var frameSrc ='https://www.abengines.com/search-results/?version=v6&pid=77A758&mid=ADIM5C66A1BF561B1'+queryUrl;
	$$('#iFrameResizer0').attr('src',frameSrc);
}


window.onhashchange = function() {
	
	
	//alert('changeurl');
	
	$$(".view").hide();

		var url = window.location.href;
		var url1 = url.split("?");
		var url2 = url1[1];
		
		/* if(url2=="hotelType=1"){
			window.location.reload()
		} */
		var url3 = url2.split("&");
		console.log(url3);
		// alert(url3);
		var i;
		var urlquery='';
		
		for(i=0;i<url3.length;i++){
			
			urlquery += '&'+url3[i];
		}
		/* if(url3[0]=="mt=result"){
				urlquery += '&childAge=0&children=0';
				
			} */
			// alert(urlquery);
		
		var url4 = url3[0].split("=");
		
		/* alert('test1'); */
		if(url4[1]!=''){
			var frameSrc ='https://www.abengines.com/search-results/?version=v6&pid=77A758&mid=ADIM5C66A1BF561B1'+urlquery;
	
	var htmlifrm = "<div data-distance='50' id='searchpageContentDiv' class='iframecustom page-content padding-top-56'><iframe src='"+frameSrc+"' scrolling='no' frameborder='0' style='width: 100%; overflow: hidden; height: 1320px;' id='iFrameResizer0'></iframe></div>";
		
		/* $(window).on('popstate', function(event) {
			history.back(); 
		}); */
		
		// $$('#iFrameResizer0').attr('src',frameSrc);
		  $$(".iframecustom").remove();
		 $$("#pageContentDiv").remove();
		$$(".views").append(htmlifrm); 
		
		 /* 		
		$$(".abhishek").append(htmlifrm);
		$$('#addpagecustom').find("#iFrameResizer0").attr('src',frameSrc);
		$$("#searchpageContentDiv").css("z-index","99999");
		$$("#searchpageContentDiv").css("position","inherit"); */
		
		}

};

/*
$$("#pageContentDiv").html('<iframe src="'+frameSrc+'" scrolling="no" frameborder="0" style="width: 100%; overflow: hidden;" id="iFrameResizer0"></iframe>');
*/

}
if(page.name=='contact-us')
{
  var pageContainer = $$(page.container);
  pageContainer.find('.list-button').on('click', function () {
    var username = pageContainer.find('input[name="username"]').val();
    var email = pageContainer.find('input[name="email"]').val();
    // Handle username and password
    myApp.alert('Username: ' + username + ', email: ' + password, function () {
      mainView.goBack();
    });
  });
}
if(page.name=='login-page')
{
$$('.pageFlashLoaderKK').show();	


setTimeout(function(){ $$('.pageFlashLoaderKK').hide('slow'); }, 3000);	


var frameSrc ='https://www.abengines.com/user-management/?version=v6&pid=77A758&mid=USERMANAGEMENT&mt=login&aid=&action=logout&ParentRestParam=';
$$('#iFrameResizer0').attr('src',frameSrc);
/*
$$("#pageContentDiv").html('<iframe src="'+frameSrc+'" scrolling="no" frameborder="0" style="width: 100%; overflow: hidden;" id="iFrameResizer0"></iframe>');
*/

}


if(page.name=='my-booking')
{
$$('.pageFlashLoaderKK').show();	


setTimeout(function(){ $$('.pageFlashLoaderKK').hide('slow'); }, 3000);	


var frameSrc ='https://www.abengines.com/my-booking/?version=v6&pid=77A758&mid=USERMANAGEMENT&mt=mt&aid=7&&ParentRestParam=';
$$('#iFrameResizer0').attr('src',frameSrc);
/*
$$("#pageContentDiv").html('<iframe src="'+frameSrc+'" scrolling="no" frameborder="0" style="width: 100%; overflow: hidden;" id="iFrameResizer0"></iframe>');
*/

}
});


