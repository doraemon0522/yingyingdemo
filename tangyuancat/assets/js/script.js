//$(function(){
//-----------------------------------
    // 获取当前浏览器的transition end event
    // 也可以用来检测是否支持transition
    function getTstEndEvent(){
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
          'transition':'transitionend',
          'OTransition':'oTransitionEnd',
          'MozTransition':'transitionend',
          'WebkitTransition':'webkitTransitionEnd'
        }
        for(t in transitions){
            if( el.style[t] !== undefined ){
                return transitions[t];
            }
        }
        return false;
    }
    
    // 实现一个Flip类
    var Flip = function(el){
        this.el = el;
        var self = this;
        el.addEventListener(getTstEndEvent(), function(){
            // 完成turnFront后去除两个class
            // 以便继续旋转
            if(self.el.classList.contains('front')){
                self.el.classList.remove('front');
                // el.classList.remove('back');
            }
        });
        return this;
    }
    // 提供两个方法
    Flip.prototype.turnBack = function() {
        this.el.classList.add('back');
    };
    Flip.prototype.turnFront = function() {
        this.el.classList.add('front');
        this.el.classList.remove('back');
    };
    // 实例化一个card
    var flip = new Flip(document.querySelector('.flip'));
//});


    