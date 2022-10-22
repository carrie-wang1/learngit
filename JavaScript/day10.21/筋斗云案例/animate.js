function animate(obj, target,callback) {
    console.log(callback);
    clearInterval(obj.timer);

    obj.timer = setInterval(function () {
        //步长值写到定时器的里面
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if(callback){
                callback();
            }
        }
        //把每次加1这个步长值 改为一个慢慢变小的值 ，步长公式 :(目标值-现在的位置)/10
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}