(function(){
    const newYear = {};
   app.countDown = function (){
        newYear.year = document.getElementById("year");
        newYear.days = document.getElementById("days");
        newYear.hours = document.getElementById("hours");
        newYear.minutes = document.getElementById("minutes");
        newYear.seconds = document.getElementById("seconds");
        
        newYear.year = new Date("Jan 1, 2026 00:00:00").getTime()
        
        updatedTime();
        function updatedTime(){
            const now = new Date().getTime();
            const gap = newYear.year - now;
            
            const second = 1000;
            const minute = 1000 * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const d = Math.floor(gap / day);
            const h = Math.floor((gap % day) / hour);
            const m = Math.floor((gap % hour)/minute);
            const s = Math.floor((gap % minute)/ second);

            newYear.days.innerText = d;
            newYear.hours.innerText = h;
            newYear.minutes.innerText = m;
            newYear.seconds.innerText = s;

            setTimeout(updatedTime,1000)

         }
    }
})(window.app = window.app || {});