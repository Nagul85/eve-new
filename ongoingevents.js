/*carousel*/
const divs = document.querySelectorAll('.trending');
    let index = 0;
    function showDiv() {
        divs.forEach(div => div.classList.remove('show'));
        divs[index].classList.add('show');
        index = (index + 1) % divs.length;
    }

    setInterval(showDiv, 3000);

    /*ongoing events*/
    var x = window.matchMedia('(min-width:450px)')
    if(x.matches){
    document.getElementById('flex1').addEventListener('mouseenter', function() {
        document.getElementById('flex2').style.height = '200px';
        document.getElementById('flex1').style.height = '600px';
        document.getElementById('long1').style.display = 'block';
        document.getElementById('short1').style.display = 'none';
        document.getElementById('normal1').style.display = 'none';
        document.getElementById('long2').style.display = 'none';
        document.getElementById('short2').style.display = 'block';
        document.getElementById('normal2').style.display = 'none';
      });
      
      document.getElementById('flex1').addEventListener('mouseleave', function() {
        document.getElementById('flex1').style.height = '400px';
        document.getElementById('flex2').style.height = '400px';
        document.getElementById('long1').style.display = 'none';
        document.getElementById('short1').style.display = 'none';
        document.getElementById('normal1').style.display = 'block';
        document.getElementById('long2').style.display = 'none';
        document.getElementById('short2').style.display = 'none';
        document.getElementById('normal2').style.display = 'block';
      });


    document.getElementById('flex2').addEventListener('mouseenter', function() {
        document.getElementById('flex1').style.height = '200px';
        document.getElementById('flex2').style.height = '600px';
        document.getElementById('long2').style.display = 'block';
        document.getElementById('short2').style.display = 'none';
        document.getElementById('normal2').style.display = 'none';
        document.getElementById('long1').style.display = 'none';
        document.getElementById('short1').style.display = 'block';
        document.getElementById('normal1').style.display = 'none';
      });
      
      document.getElementById('flex2').addEventListener('mouseleave', function() {
        document.getElementById('flex1').style.height = '400px';
        document.getElementById('flex2').style.height = '400px';
        document.getElementById('long2').style.display = 'none';
        document.getElementById('short2').style.display = 'none';
        document.getElementById('normal2').style.display = 'block';
        document.getElementById('long1').style.display = 'none';
        document.getElementById('short1').style.display = 'none';
        document.getElementById('normal1').style.display = 'block';
      });

      document.getElementById('flex3').addEventListener('mouseenter', function() {
        document.getElementById('flex4').style.height = '200px';
        document.getElementById('flex3').style.height = '600px';
        document.getElementById('long3').style.display = 'block';
        document.getElementById('short3').style.display = 'none';
        document.getElementById('normal3').style.display = 'none';
        document.getElementById('long4').style.display = 'none';
        document.getElementById('short4').style.display = 'block';
        document.getElementById('normal4').style.display = 'none';
      });
      
      document.getElementById('flex3').addEventListener('mouseleave', function() {
        document.getElementById('flex3').style.height = '400px';
        document.getElementById('flex4').style.height = '400px';
        document.getElementById('long3').style.display = 'none';
        document.getElementById('short3').style.display = 'none';
        document.getElementById('normal3').style.display = 'block';
        document.getElementById('long4').style.display = 'none';
        document.getElementById('short4').style.display = 'none';
        document.getElementById('normal4').style.display = 'block';
      });

      document.getElementById('flex4').addEventListener('mouseenter', function() {
        document.getElementById('flex3').style.height = '200px';
        document.getElementById('flex4').style.height = '600px';
        document.getElementById('long4').style.display = 'block';
        document.getElementById('short4').style.display = 'none';
        document.getElementById('normal4').style.display = 'none';
        document.getElementById('long3').style.display = 'none';
        document.getElementById('short3').style.display = 'block';
        document.getElementById('normal3').style.display = 'none';
      });
      
      document.getElementById('flex4').addEventListener('mouseleave', function() {
        document.getElementById('flex3').style.height = '400px';
        document.getElementById('flex4').style.height = '400px';
        document.getElementById('long4').style.display = 'none';
        document.getElementById('short4').style.display = 'none';
        document.getElementById('normal4').style.display = 'block';
        document.getElementById('long3').style.display = 'none';
        document.getElementById('short3').style.display = 'none';
        document.getElementById('normal3').style.display = 'block';
      });
    }