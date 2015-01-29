"use strict";angular.module("jschannel",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ngRoute","ui.bootstrap","duScroll"]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"app/main/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("jschannel").directive("subscription",["$q","$http",function(e,s){return{restrict:"AE",scope:{user:{}},templateUrl:"components/subscription/subscription.html",link:function(e,i){e.subscribeUser=function(){if(console.log("submitted",user.email),console.log("element",i),void 0!==e.user.email){var a="http://localhost:5000/api/users/subscribe";e.submitting=!0,s.post(a,{email:user.email}).success(function(){e.submitting=!1}).error(function(){e.submitting=!1})}}}}}]),angular.module("jschannel").directive("navbar",["$rootScope",function(e){return{restrict:"AE",scope:{},templateUrl:"components/navbar/navbar.html",link:function(s){s.hideMenuList=!1,s.toggleMenuBar=function(){s.hideMenuList=!s.hideMenuList},e.$on("duScrollspy:becameActive",function(){s.hideMenuList=!1})}}}]),angular.module("jschannel").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("jschannel").controller("ModalInstanceCtrl",["$scope","$modalInstance",function(e,s){e.ok=function(){s.close(e.selected.item)},e.closeModal=e.cancel=function(){s.dismiss("cancel")}}]),angular.module("jschannel").service("MeetupService",["$q","$http",function(e,s){function i(){var i=e.defer(),a="/api/meetups";return s.get(a).then(function(e){i.resolve(e.data)},function(e){i.reject(e)}),i.promise}function a(i){var a=e.defer(),t="/api/meetups/:group_name";return t=t.replace(":group_name",i.group_name),s.get(t).then(function(e){a.resolve(e.data)},function(e){a.reject(e)}),a.promise}return{all:i,events:a}}]),angular.module("jschannel").controller("MeetupController",["MeetupService","$scope",function(e,s){function i(){console.log("Initialized"),e.all().then(function(e){s.meetups=e},function(){s.meetups=[]})}i()}]),angular.module("jschannel").controller("FooterCtrl",function(){}),angular.module("jschannel").directive("navShrink",["$timeout",function(e){return{link:function(s,i){s.initScroll=function(i){window.addEventListener("scroll",function(){i.didScroll||(i.didScroll=!0,e(function(){s.scrollPage(i)},250))},!1)},s.scrollPage=function(e){function s(){return window.pageYOffset||document.documentElement.scrollTop}var i=s();i>=300?(e.addClass("navbar-shrink"),angular.element("#back-top").removeClass("hidden")):(e.removeClass("navbar-shrink"),angular.element("#back-top").addClass("hidden")),e.didScroll=!1},s.initScroll($(i))}}}]),angular.module("jschannel").controller("MainCtrl",["$scope","$document","$modal",function(e,s,i){var a=null;e.associations=[{url:"http://www.github.com",hasImg:!0},{url:"http://jsconf.com",text:"JSConf"},{url:"http://communityjs.org",text:"CommunityJS.org"},{url:"http://bangalorejs.org",hasImg:!0}],e.members=[{name:"Amit Anand",twitter:"https://twitter.com/iamitanand",facebook:"https://www.facebook.com/aanand388",linkedin:"http://au.linkedin.com/in/iamitanand",title:"Digital Engagement Manager"},{name:"Amit Kumar",twitter:"https://twitter.com/toamit",facebook:"https://www.facebook.com/toamitkumar",linkedin:"https://www.linkedin.com/in/toamitkumar",title:"Digital Expert"},{name:"Naresh Sharma",twitter:"",facebook:"",linkedin:"",title:""},{name:"Niraj Bhandari",twitter:"https://twitter.com/nirajkbhandari ",facebook:"https://www.facebook.com/nirajkbhandari",linkedin:"http://in.linkedin.com/in/nirajbhandari",title:"Product Manager"},{name:"Suman Paul",twitter:"https://twitter.com/sumankpaul",facebook:"https://www.facebook.com/paul.sumank",linkedin:"https://in.linkedin.com/in/skeep/",title:"Senior Digital Analyst"}],e.scrollToTop=function(){s.scrollTop(0,5e3)},e.openModal=function(e){switch(e){case"conference":a=i.open({templateUrl:"components/modals/conference.html",controller:"ModalInstanceCtrl",size:"lg"});break;case"meetup":a=i.open({templateUrl:"components/modals/meetup.html",controller:"MeetupController",size:"lg"});break;case"conduct":a=i.open({templateUrl:"components/modals/codeofconduct.html",controller:"ModalInstanceCtrl",size:"lg"})}}}]),angular.module("jschannel").run(["$templateCache",function(e){e.put("app/main/main.html",'<navbar></navbar><header class="parallax"><div class="container"><div class="row"><div class="col-sm-2">&nbsp;</div><div class="col-sm-8 embeded-video"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="//www.youtube.com/embed/eNgOPgZ1aGw" width="300" height="200"></iframe></div></div><div class="col-sm-2">&nbsp;</div></div><div class="row"><div class="col-lg-12 intro-text"><div class="intro-heading">We, The JavaScript People</div></div></div><div class="row"><subscription></subscription><div class="col-md-5 book-ticket"><a href="http://2015.jschannel.com" target="_blank" class="page-scroll btn btn-primary button-shadow">&nbsp;&nbsp;&nbsp;&nbsp;Book Tickets&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a> <a href="assets/docs/JSChannel_Sponsorship_2015.pdf" target="_blank" class="page-scroll btn btn-primary button-shadow">Want to Sponsor?</a></div></div></div></header><section id="events"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">Events</h2><h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3></div></div><div class="row text-center"><div class="col-md-4"><img ng-click="openModal(\'conference\')" class="img-centered img-circle img-responsive" src="assets/images/icons/conference.png" alt=""><h4 class="service-heading">Conferences</h4><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p></div><div class="col-md-4"><img ng-click="openModal(\'meetup\')" class="img-centered img-circle img-responsive" src="assets/images/icons/meetup-icon.png" alt=""><h4 class="service-heading">Meet-ups</h4><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p></div><div class="col-md-4"><img data-toggle="modal" data-target="training" class="img-centered img-circle img-responsive" src="assets/images/icons/js-training.png" alt=""><h4 class="service-heading">Trainings</h4><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p></div></div></div></section><section id="about" class="bg-darkest-gray"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">About</h2><h3 class="section-subheading text-muted">See JavaScript, like never seen before.</h3></div></div><div class="row"><div class="col-lg-12"><ul class="timeline"><li><div class="timeline-image"><img class="img-circle img-responsive" src="assets/images/about/1.jpg" alt=""></div><div class="timeline-panel"><div class="timeline-heading"><h4>2013</h4><h4 class="subheading">Our Humble Beginnings</h4></div><div class="timeline-body"><p class="text-muted">Our first meetup in NCR!</p></div></div></li><li class="timeline-inverted"><div class="timeline-image"><img class="img-circle img-responsive" src="assets/images/about/2.jpg" alt=""></div><div class="timeline-panel"><div class="timeline-heading"><h4>7 Sept 2013</h4><h4 class="subheading">A Community is Born</h4></div><div class="timeline-body"><p class="text-muted">Our first conference in NCR!</p></div></div></li><li><div class="timeline-image"><img class="img-circle img-responsive" src="assets/images/about/3.jpg" alt=""></div><div class="timeline-panel"><div class="timeline-heading"><h4>16 Nov 2013</h4><h4 class="subheading">Transition to Full Service</h4></div><div class="timeline-body"><p class="text-muted">We run our first conference in Bengaluru!</p></div></div></li><li class="timeline-inverted"><div class="timeline-image"><img class="img-circle img-responsive" src="assets/images/about/3.jpg" alt=""></div><div class="timeline-panel"><div class="timeline-heading"><h4>18-19 July 2014</h4><h4 class="subheading">Next big leap</h4></div><div class="timeline-body"><p class="text-muted">We ran India\'s largest JS conference in Bengaluru!</p></div></div></li><li><div class="timeline-image"><h4>Be Part<br>Of Our<br>Story!</h4></div><div class="timeline-panel"><div class="timeline-heading"><h4>17-18 July 2015</h4><h4 class="subheading">Our next chapter</h4></div><div class="timeline-body"><p class="text-muted">Next conference in Bengaluru!</p></div></div></li></ul></div></div></div></section><aside class="partners" id="partners"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">Big thanks to our partners</h2></div></div><div class="row"><div class="col-md-3 col-sm-6"><a href="http://www.mckinsey.com/client_service/mckinsey_digital/expertise/digital_labs"><span><h1 class="mdl">McKinsey Digital Labs</h1></span></a></div><div class="col-md-3 col-sm-6"><a href="https://www.github.com"><img ng-src="assets/images/associations/1.png" class="img-responsive img-centered" alt=""></a></div><div class="col-md-3 col-sm-6"><a href="http://jsconf.com"><span><h1 class="jsconf">JSConf<sup>TM</sup></h1></span></a></div><div class="col-md-3 col-sm-6"><a href="http://jsconf.com"><span><h1>CommunityJS.org</h1></span></a></div></div><div class="row"><div class="col-md-3 col-sm-6"><a href="https://www.github.com"><img ng-src="assets/images/associations/4.png" class="img-responsive img-centered bangalorejs" alt=""></a></div></div></div></aside><section id="team" class="bg-darkest-gray"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">Our Amazing Team</h2><h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3></div></div><div class="row"><div class="col-sm-3" ng-repeat="member in members"><div class="team-member"><a ng-href="{{member.twitter}}" target="_blank"><img ng-src="assets/images/members/{{$index+1}}.jpg" class="img-responsive img-circle" alt=""></a><h4>{{member.name}}</h4><p class="text-muted">{{member.title}}</p><ul class="list-inline social-buttons"><li><a ng-href="{{member.twitter}}" target="_blank"><i class="fa fa-twitter"></i></a></li><li><a ng-href="{{member.facebook}}" target="_blank"><i class="fa fa-facebook"></i></a></li><li><a ng-href="{{member.linkedin}}" target="_blank"><i class="fa fa-linkedin"></i></a></li></ul></div></div></div><div class="row"><div class="col-lg-8 col-lg-offset-2 text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div></div></div></section><ng-include src="\'components/footer/footer.html\'"></ng-include>'),e.put("components/footer/footer.html",'<footer ng-controller="FooterCtrl"><div class="container"><div class="row"><div class="col-md-4"><span class="copyright">Copyright &copy; JSChannel 2013-2015</span></div><div class="col-md-4"><ul class="list-inline social-buttons"><li><a href="mailto:info@jschannel.com?Subject=Hello JSChannel Team"><i class="fa fa-envelope"></i></a></li><li><a href="https://twitter.com/js_channel/"><i class="fa fa-twitter"></i></a></li><li><a href="https://www.facebook.com/javascriptchannel" target="_blank"><i class="fa fa-facebook"></i></a></li><li><a href="https://plus.google.com/111069083279946389343/"><i class="fa fa-google-plus"></i></a></li><li><a href="http://www.linkedin.com/groups?home=&gid=5112841"><i class="fa fa-linkedin"></i></a></li><li><a href="https://www.youtube.com/channel/UCdf_Ezv2lcB9OKE_4N23w1A"><i class="fa fa-youtube"></i></a></li><li><a href="https://www.flickr.com/photos/100543192@N08/sets/72157646036037789/"><i class="fa fa-flickr"></i></a></li></ul></div><div class="col-md-4"><ul class="list-inline quicklinks"><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Use</a></li><li><a href="javascript:void(0)" ng-click="openModal(\'conduct\')">Code of Conduct</a></li></ul></div></div></div></footer><p id="back-top" class="hidden" ng-click="scrollToTop()"><a href="#page-top" du-scrollspy="page-top" offset="30" du-smooth-scroll="">Back to Top</a></p>'),e.put("components/modals/codeofconduct.html",'<div class="container jsc-modal"><div class="row"><div class="col-lg-12"><h2 class="text-muted">Code of Conduct</h2><div class="close-modal" ng-click="closeModal()"><div class="lr"><div class="rl"></div></div></div></div></div><div class="row"><div class="col-lg-12"><div class="modal-body"><div class="code-conduct code-conduct-info"><h4>tl;dr: Be excellent with each other</h4><p>All attendees, speakers, sponsors and volunteers at our conference are required to agree with the following code of conduct. Organisers will enforce this code throughout the event. We are expecting cooperation from all participants to help ensuring a safe environment for everybody.</p></div><div class="code-conduct code-conduct-info-shorter"><h4>The Quick Version</h4><p>Our conference is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, age, sexual orientation, disability, physical appearance, body size, race, or religion (or lack thereof). We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks, workshops, parties, Twitter and other online media. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organisers.</p></div><div class="code-conduct code-conduct-info-longer"><h4>The Less Quick Version</h4><p>Harassment includes offensive verbal comments related to gender, age, sexual orientation, disability, physical appearance, body size, race, religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention. Participants asked to stop any harassing behavior are expected to comply immediately. Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualised images, activities, or other material. Booth staff (including volunteers) should not use sexualised clothing/uniforms/costumes, or otherwise create a sexualised environment. If a participant engages in harassing behavior, the conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund. If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately. Conference staff can be identified as they\'ll be wearing branded t-shirts. Conference staff will be happy to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.We expect participants to follow these rules at conference and workshop venues and conference-related social events.</p></div><div class="panel panel-info"><div class="panel-heading"><h3 class="panel-title">Need Help?</h3></div><div class="panel-body">Amit Kumar&nbsp;&nbsp;<i class="fa fa-mobile-phone">+91 9619483353</i><br>Niraj Bhandari&nbsp;&nbsp;<i class="fa fa-mobile-phone">+91 9663411944</i><br>Naresh Sharma&nbsp;&nbsp;<i class="fa fa-mobile-phone">+91 9741594633</i><br>Suman Paul&nbsp;&nbsp;<i class="fa fa-mobile-phone">+91 9945458300</i></div></div><div class="closemodal-button"><button type="button" class="btn btn-primary" ng-click="closeModal()"><i class="fa fa-times"></i> Close Project</button></div></div></div></div></div>'),e.put("components/modals/conference.html",'<div class="container jsc-modal"><div class="row"><div class="col-md-8"><h2 class="text-muted">Conferences</h2></div><div class="col-md-4"><div class="close-modal" ng-click="closeModal()"><div class="lr"><div class="rl"></div></div></div></div></div><div class="row"><div class="col-lg-12"><div class="modal-body"><div class="timeline-container clearfix"><div id="time-line"></div><div class="time-to-filter clearfix" id="2014"><p class="timeline-filter"><span>2014</span></p><span class="top-ring"></span> <span class="bottom-ring"></span></div><article class="timeline-item standard-post clearfix"><div class="timeline-icon"><div><p data-icon=""></p></div><span class="dotted-horizon"></span> <span class="vertical-line"></span> <span class="circle-outer"></span> <span class="circle-inner"></span></div><div class="entry-body clearfix"><div class="kp-thumb hover-effect"><img src="assets/images/modal/2014-conf.jpg" alt=""></div><div><h3 class="entry-title"><a href="#">JS Conference 2014</a></h3><span class="entry-date"><span class="icon-clock-4 entry-icon" aria-hidden="true"></span><span>July 18-19, 2014</span></span></div><p>Autem sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinci laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci</p><a href="http://2014.jschannel.com" target="_blank" class="more-link">Know more&nbsp;<i class="fa fa-chevron-circle-right"></i></a></div></article><div class="time-to-filter clearfix" id="october"><p class="timeline-filter"><span>2013</span></p><span class="top-ring"></span> <span class="bottom-ring"></span></div><article class="timeline-item standard-post clearfix"><div class="timeline-icon"><div><p data-icon=""></p></div><span class="dotted-horizon"></span> <span class="vertical-line"></span> <span class="circle-outer"></span> <span class="circle-inner"></span></div><div class="entry-body clearfix"><div class="kp-thumb hover-effect"><img src="placeholders/post-image/post-1.jpg" alt=""></div><div><h3 class="entry-title"><a href="#">JS Conference 2013 - BLR</a></h3><span class="entry-date"><span class="icon-clock-4 entry-icon" aria-hidden="true"></span><span>November 7, 2013</span></span></div><p>Autem sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinci laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci</p><a href="http://2013.jschannel.com" target="_blank" class="more-link">Know more&nbsp;<i class="fa fa-chevron-circle-right"></i></a></div></article><article class="timeline-item standard-post clearfix"><div class="timeline-icon"><div><p data-icon=""></p></div><span class="dotted-horizon"></span> <span class="vertical-line"></span> <span class="circle-outer"></span> <span class="circle-inner"></span></div><div class="entry-body clearfix"><div class="kp-thumb hover-effect"><img src="placeholders/post-image/post-1.jpg" alt=""></div><div><h3 class="entry-title"><a href="#">JS Conference 2013 - NCR</a></h3><span class="entry-date"><span class="icon-clock-4 entry-icon" aria-hidden="true"></span><span>September 7, 2013</span></span></div><p>Autem sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinci laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci</p><a href="http://2013.jschannel.com" target="_blank" class="more-link">Know more&nbsp;<i class="fa fa-chevron-circle-right"></i></a></div></article><a href="#" class="load-more kp-tooltip" data-toggle="tooltip" data-original-title="Load More"><i class="icon-plus"></i></a></div><div class="closemodal-button"><button type="button" class="btn btn-primary" ng-click="closeModal()"><i class="fa fa-times"></i> Close Project</button></div></div></div></div></div>'),e.put("components/modals/meetup.html",'<div class="container jsc-modal"><div class="row"><div class="col-md-8"><h2 class="text-muted">Meetups</h2></div><div class="col-md-4"><div class="close-modal" ng-click="closeModal()"><div class="lr"><div class="rl"></div></div></div></div></div><div class="row"><div class="col-lg-12"><div class="modal-body"><accordion close-others="oneAtATime"><accordion-group ng-repeat="meetup in meetups" is-open="status.isFirstOpen" is-disabled="status.isFirstDisabled"><accordion-heading><div class="row"><img class="img-circle img-responsive" src="assets/images/icons/conference.png" alt="">{{meetup.name}} <i class="pull-right glyphicon" ng-class="{\'glyphicon-chevron-down\': status.open, \'glyphicon-chevron-right\': !status.open}"></i></div></accordion-heading>This content is straight in the template.</accordion-group></accordion><div class="closemodal-button"><button type="button" class="btn btn-primary" ng-click="closeModal()"><i class="fa fa-times"></i> Close Project</button></div></div></div></div></div>'),e.put("components/modals/myModalContent.html",'<div ng-controller="ModalDemoCtrl"><script type="text/ng-template" id="myModalContent.html"><div class="modal-header"> <h3 class="modal-title">I am a modal!</h3> </div> <div class="modal-body"> <ul> <li ng-repeat="item in items"> <a ng-click="selected.item = item">{{ item }}</a> </li> </ul> Selected: <b>{{ selected.item }}</b> </div> <div class="modal-footer"> <button class="btn btn-primary" ng-click="ok()">OK</button> <button class="btn btn-warning" ng-click="cancel()">Cancel</button> </div></script><button class="btn btn-default" ng-click="open()">Open me!</button> <button class="btn btn-default" ng-click="open(\'lg\')">Large modal</button> <button class="btn btn-default" ng-click="open(\'sm\')">Small modal</button><div ng-show="selected">Selection from a modal: {{ selected }}</div></div>'),e.put("components/navbar/navbar.html",'<nav nav-shrink="" class="navbar navbar-default navbar-fixed-top" ng-controller="NavbarCtrl"><div class="container"><div class="navbar-header page-scroll col-md-4"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" ng-click="toggleMenuBar()"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button><a href="#page-top" class="navbar-brand page-scroll logo" title="Javascript Enthusiasts Community" du-scrollspy="page-top" offset="30" du-smooth-scroll=""><img src="assets/images/jslogo.png" alt="JSCHANNEL."></a><br><br><span class="nav-text"><a href="http://2015.jschannel.com">17-18 JULY 2015, Bangalore, India <i class="fa fa-chevron-circle-right"></i></a></span></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1 col-md-8" ng-class="hideMenuList ? \'in\' : \'out\'"><ul class="nav navbar-nav navbar-right"><li class="hidden"><a href="#page-top" du-scrollspy="page-top" offset="30" du-smooth-scroll=""></a></li><li du-scrollspy="events" offset="30" du-smooth-scroll=""><a class="page-scroll" href="#events" du-scrollspy="events" offset="30" du-smooth-scroll="">Events</a></li><li du-scrollspy="about" offset="30" du-smooth-scroll=""><a class="page-scroll" href="#about" du-scrollspy="about" offset="30" du-smooth-scroll="">About</a></li><li du-scrollspy="partners" offset="30" du-smooth-scroll=""><a class="page-scroll" href="#partners" du-scrollspy="partners" offset="30" du-smooth-scroll="">Partners</a></li><li du-scrollspy="team" offset="30" du-smooth-scroll=""><a class="page-scroll" href="#team" du-scrollspy="team" offset="30" du-smooth-scroll="">Team</a></li></ul></div></div></nav>'),e.put("components/subscription/subscription.html",'<div class="col-md-7 book-ticket" id="book-ticket"><form ng-submit="subscribeUser()" method="post" class="horizontal-form" novalidate=""><div class="inline-block"><div class="silver"><input type="email" ng-model="user.email" name="email" placeholder="Enter your email address" class="block-input margin-right"> <button type="submit" ng-disabled="user.submitting" class="btn btn-primary button-shadow" id="subscribe" target="_blank">Subscribe to updates</button></div></div></form><h4 class="subscripition hidden">Thanks for subscribing to our Newsletter!</h4></div>')}]);