function locomotiveAnim(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

locomotiveAnim()


var page1Text = document.querySelectorAll(".page1-text h1")
page1Text.forEach(function(elem){
  cluter = ""
  var text = elem.textContent
  var splitted = text.split("")
  var clutter =""
  splitted.forEach(function(e){
    clutter += `<span>${e}</span>`
  })
 elem.innerHTML = clutter
})


gsap.from(".page1-text h1 span",{
  y:300,
  opacity:0,
  duration:0.5,
  delay:0.5,
  stagger:0.1
})