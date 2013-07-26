// JavaScript Document

(function($){
	$(document).ready(function() {
		var cd = new Date();

		var ref = cd.setHours(0, 0, 0, 0);
		var sunday = 0

		while(cd.getDay() != sunday) {
		    cd.setDate(cd.getDate() + 1);
		}

		//cd is now set for Sunday


		var ts = cd.getTime() + 10*60*60*1000; //10am

		//only want to show timer 30 minutes before start of each service
		//if services are 9am & 11am, timers start at 8:30am & 10:30am
		//between the two times, a live link should appear


			
		$('#countdown').countdown({
			timestamp	: ts,
			callback	: function(days, hours, minutes, seconds){
				if(days == 0 && hours == 0 && minutes == 0 && seconds == 0){
					//hide and display live!
					
				}
			}
		});

    });	
})(jQuery);