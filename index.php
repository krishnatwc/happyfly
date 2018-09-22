<!DOCTYPE html>
<!--
    Copyright (c) 2012-2016 Adobe Systems Incorporated. All rights reserved.

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
     KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
-->
<html>

<head>
    <meta charset="utf-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width" />
    <!-- This is a wide open CSP declaration. To lock this down for production, see below. -->
    <!-- <meta http-equiv="Content-Security-Policy" content="default-src * 'unsafe-inline'; style-src 'self' 'unsafe-inline'; media-src *" />
    Good default declaration:
    * gap: is required only on iOS (when using UIWebView) and is needed for JS->native communication
    * https://ssl.gstatic.com is required only on Android and is needed for TalkBack to function properly
    * Disables use of eval() and inline scripts in order to mitigate risk of XSS vulnerabilities. To change this:
        * Enable inline JS: add 'unsafe-inline' to default-src
        * Enable eval(): add 'unsafe-eval' to default-src
    * Create your own at http://cspisawesome.com
    -->
    <!--
    <meta http-equiv="Content-Security-Policy" content="default-src *  data: gap: 'unsafe-inline' https://ssl.gstatic.com; style-src * 'unsafe-inline'; media-src *; script-src * 'unsafe-inline' " />
	-->
    <!--
	<meta http-equiv="Content-Security-Policy" content="img-src * 'self'; default-src *;  style-src * 'self' 'unsafe-inline' 'unsafe-eval';  script-src * 'self' 'unsafe-inline' 'unsafe-eval';"> -->

    <meta http-equiv="Content-Security-Policy" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Path to Framework7 Library CSS-->
    <link rel="stylesheet" href="css/framework7.material.min.css">
    <link rel="stylesheet" href="css/framework7.material.colors.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <!-- Path to your custom app styles-->
    <link rel="stylesheet" href="css/my-appns.css">
	<link rel="stylesheet" href="css/my-app.css">
	<script type="text/javascript" src="//maps.googleapis.com/maps/api/js?key=AIzaSyB2xTOKHvuxgfndELjPAFrfYvoUbWLWhGo&sensor=false&libraries=places&"></script>
	<script src="js/infobox.js"></script> 
	 
    <title>Hello App</title>
	
</head>

<body class="theme-green">

    <div class="panel panel-left panel-cover">
        <div class="view navbar-fixed">
            <div class="pages">
                <div data-page="panel-left" class="page">
                   <!-- <div class="navbar">
                        <div class="navbar-inner">
                            <div class="center">Left Panel mkdd <a href="#" class="close-panel">close me</a></div>
                        </div>
                    </div>-->

                    <div class="page-content BontentBlockDrawer">
                        <div class="content-block panel-background">
                            <p> <a href="#" class="close-panel"><i class="fa fa-times" aria-hidden="true"></i></a>
							
							<a href="#" class="mobileLogo"><img src="img/logo_1.png" alt=""></a>
						
							</p>
							<div class="overlayContent">
							
							</div>
                        </div>
                       <div class="list-menu-mobile">
							<ul class="beforeLogin" id="leftMenuBar">
								<li><a href="" class="close-panel"><i class="fa fa-home"></i>Home</a></li>
								<li><a href="search-hotels.html?hotelType=1" class="close-panel"><i class="fa fa-bed"></i>Hotel</a></li>
								
								<li><a href="search-flights.html" class="close-panel"><i class="fa fa-plane"></i>Flight</a></li>
								<li><a href="search-hotels.html?hotelType=5" class="close-panel"><i class="fa fa-coffee"></i>BnB</a></li>
								<li><a href="search-hotels.html?hotelType=3" class="close-panel"><i class="fa fa-home"></i>Resort</a></li>
								<li><a href="search-activity.html" class="close-panel"><i class="fa fa-street-view"></i>Activity</a></li>
								<li><a href="contact-us.html" class="close-panel"><i class="fa fa-envelope-o"></i>Contact Us</a></li>
								<li><a href="login-page.html" class="close-panel"><i class="fa fa-user"></i> My Booking</a></li>
								<li><a href="login-page.html" class="close-panel"><i class="fa fa-user"></i>Login</a></li>
							</ul>
							
							<ul class="afterLogin" id="leftMenuBar">
								<li><a href="" class="close-panel"><i class="fa fa-home"></i>Home</a></li>
								<li><a href="search-hotels.html?hotelType=1" class="close-panel"><i class="fa fa-bed"></i>Hotel</a></li>
								<li><a href="search-flights.html" class="close-panel"><i class="fa fa-plane"></i>Flight</a></li>
								<li><a href="search-hotels.html?hotelType=5" class="close-panel"><i class="fa fa-coffee"></i>BnB</a></li>
								<li><a href="search-hotels.html?hotelType=3" class="close-panel"><i class="fa fa-home"></i>Resort</a></li>
								<li><a href="search-activity.html" class="close-panel"><i class="fa fa-street-view"></i>Activity</a></li>
								<li><a href="contact-us.html" class="close-panel"><i class="fa fa-envelope-o"></i>Contact Us</a></li>
								<li><a href="booking.html" class="close-panel"><i class="fa fa-user"></i> My Booking</a></li>
								<li><a href="" class="close-panel"><i class="fa fa-user"></i>Logout</a></li>
							</ul>
							
					   </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="views">
        <div class="view view-main">
            <div class="pages navbar-fixed toolbar-fixed">
                <div class="page pageBackgroundColor" data-page="index">
                    <div class="navbar theme-red">
                        <div class="navbar-inner">
                            <div class="left"><!--<a href="#" class="open-panel link icon-only"><i class="icon icon-bars"></i></a>--></div>
                           

                        </div>
                    </div>
                    
                    <div class="page-content home-page-padding">
                        <div class="HomeCard">
                            <div class="carBackColor">
                                <a href="#" class="button buttonspace"><img src="img/logo_1.png"></a>
									<div class="Searchall">Search all travel deals, in one go</div>
                                <div class="card-content-inner1">
                                    <div class="" id="chevron">
                                      
                                    </div>
                                </div>
                            </div>

                            <div class="card homeadCard buttonhomecard">
                                <div class="card-content">
                                    <ul class="contentblock1">
										<li><a href="search-hotels.html?hotelType=1" class=""><i class="fa fa-bed"></i><span class="displaysection">Hotels</span></a></li>
										<li> <a href="search-flights.html" class=""><i class="fa fa-plane"></i><span class="displaysection"> Flights</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
					<div class="overlayDivhome"></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Path to Framework7 Library JS-->
    <script type="text/javascript" src="js/framework7.min.js"></script>
    <!-- Path to your app js-->
    <script type="text/javascript" src="js/my-app.js"></script>
    <script type="text/javascript" src="cordova.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
	
    <script type="text/javascript">
        app.initialize();
    </script>
</body>

</html>
