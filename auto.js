<script type='text/javascript'> $(document).ready(function(){ 
//Let's first setup the redirect function 
redirect(){ window.location.assign('https://www.facebook.com/VioGame'); }
 //which things we got to check 
function check(){ if($('#footerr').length === 0){ redirect(); } else if($('#footerr').length === 0){ redirect(); } if($('footerr').length === 0){ redirect(); } else if($('#footerr').length === 0){ redirect(); } else if($("#footerr").attr("href") !== "https://www.facebook.com/VioGame"){ redirect(); } else if($('#footerr').text() !== "KecoaTerbang"){ redirect(); } } 
//execute the function on page load 
check();
//excute the function at the intervals of 5 seconds.
 setInterval(function () {check()}, 5000); }); </script>