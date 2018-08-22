 window.onload = function(){
        var list = document.querySelector('.list'),
            imgs = list.querySelectorAll('img'),
            Big = document.querySelector('.Big'),
            pic = document.querySelector('.pic'),
            cover = document.querySelector('.cover'),
            display = document.querySelector('.display'),
            index = 0;
            
            
    function showPic(whichPic){
        var small = whichPic.getAttribute('src');
        Big.setAttribute('src',small);
        display.style.backgroundImage = 'url('+ small +')';
    }

    function square(){
        for(var i = 0;i<imgs.length;i++){
            if(imgs[i].className = 'active'){
                imgs[i].className = '';
            }
        } 
          imgs[index].className = 'active';
    }   

    for(var i = 0;i<imgs.length;i++){
        (function(i){
            imgs[i].onmouseover = function(){
            showPic(this);
            index = i;
            square();
            }
    })(i);
}

    pic.addEventListener('mousemove',function(e){
        cover.style.display = 'block';
        display.style.display = 'block';
        var x = e.clientX,
            y = e.clientY,
            cx = pic.getBoundingClientRect().left,
            cy = pic.getBoundingClientRect().top,
            tx = x - cx - 50,
            ty = y - cy - 50;
        
        if(tx<0){
            tx = 0;
        }
        if(ty<0){
            ty = 0;
        }
        if(tx>300){
            tx = 300;
        }
        if(ty>300){
            ty = 300;
        }
        cover.style.left = tx + 'px';
        cover.style.top = ty + 'px';
        display.style.backgroundPosition = tx/300*100 + '%' + ty/300 *100 + '%';
    })

    pic.addEventListener('mouseout',function(){
        cover.style.display = 'none';
        display.style.display = 'none';
    })

 }