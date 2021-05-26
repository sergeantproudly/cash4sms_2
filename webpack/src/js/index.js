import "../sass/main.sass";
let SmoothScroll = require("smooth-scroll");

comment = `Плавный скролл по якорю"`
  try {
    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 500,
      speedAsDuration: true,
      offset: function (anchor, toggle) {
        return 0; // 30
      },
    });
  } catch (error) {
    console.error(`Не работает: ${comment}`)
  }


let comment = `FAQ`
try {
    let questions = document.querySelectorAll('.faq__question');
    function questionsInit() {
        for (let index = 0; index < questions.length; index++) {
        const question = questions[index];

        let answer = question.querySelector('.faq__question__answer');
        let heightAnswer = answer.offsetHeight;
        answer.style.height = `0px`
        
        question.addEventListener('click', ()=>{
            if (question.classList.contains('faq__question_hidden')) {
            answer.style.height = `0px`
            return question.classList.remove("faq__question_hidden");
            }
            answer.style.height = `${heightAnswer}px`
            question.classList.add("faq__question_hidden")
        })

        // handle event
        window.addEventListener("optimizedResize", function() {
            answer.style.height = `auto`
            heightAnswer = answer.offsetHeight;
            if (!question.classList.contains('faq__question_hidden')) {
            answer.style.height = `0px`
            return;
            }
            answer.style.height = `${heightAnswer}px`
        });
        }
    }
    questionsInit()
} catch (error) {
    console.error(`Не работает: ${comment}`)
}

comment = `slides - how it works`
try {
    function runSlides(node, typeEvent) {
        node.setAttribute('init', '1')
        let slides = node.querySelectorAll('[data-slides-slide]');
        let info = node.querySelector('[data-info-slide]');
        let dynamicHeight = node.querySelector('[data-dynamic-height]');
        let leftTab = node.querySelector('[slide-left-tab]');
        let rightTab = node.querySelector('[slide-right-tab]');
        let slidesLength = slides.length;
        let currentSlide = 0;
        let percent = 0;
        let height = 0;
        let heights = [];
        let otherCurrentSlide = 0;
        let run = true;
        leftTab.addEventListener('click', ()=>{
          changeSlide('prev')
        })
        rightTab.addEventListener('click', ()=>{
          changeSlide()
        })
        function setHeight() {
          heights = []
          info.style.transition = `0s`
          info.style.height = `auto`
          height = 0;
          otherCurrentSlide = 0;
          for (let i = 0; i < slidesLength; i++) {
            let attaches = node.querySelectorAll(`[data-attach-slide="${i}"]`);
            for (let ii = 0; ii < attaches.length; ii++) {
                const attach = attaches[ii];
                attach.style.display = "none";
            }
          }
          for (let i = 0; i < slidesLength; i++) {
              let attaches = node.querySelectorAll(`[data-attach-slide="${i}"]`);
              for (let ii = 0; ii < attaches.length; ii++) {
                const attach = attaches[ii];
                if (otherCurrentSlide == i) {
                  attach.style.display = "block";
                } else {
                  attach.style.display = "none";
                }
              }
              otherCurrentSlide += 1;
              heights.push(info.offsetHeight)
              if (height < info.offsetHeight) {
                height = info.offsetHeight
              }
              for (let ii = 0; ii < attaches.length; ii++) {
                const attach = attaches[ii];
                attach.style.display = "none";
              }
          }
          for (let i = 0; i < slidesLength; i++) {
              let attaches = node.querySelectorAll(`[data-attach-slide="${i}"]`);
              for (let ii = 0; ii < attaches.length; ii++) {
                const attach = attaches[ii];
                if (i == currentSlide) {
                  attach.style.display = "block";
                }
              }
          }
          info.style.height = `${height}px`
          dynamicHeight.style.height = `${heights[currentSlide]}px`
        }
        setHeight()
        window.addEventListener("resize", function() {
          setHeight()
        });
        let startPositionX = 0;
        let endPositionX = 0;
        let arrow = "";
        let currentAttaches = node.querySelectorAll(`[data-attach-slide="${currentSlide}"]`);
        node.addEventListener('touchstart', (event)=>{
          currentAttaches = node.querySelectorAll(`[data-attach-slide="${currentSlide}"]`);
          run = false;
          startPositionX = event.touches[0].clientX;
          endPositionX = event.touches[0].clientX;
        })
        node.addEventListener('touchmove', (event)=>{
          if (startPositionX > event.touches[0].clientX) {
            arrow = 'next'
          } else {
            arrow = 'prev'
          }
          endPositionX = event.touches[0].clientX;
          for (let i = 0; i < currentAttaches.length; i++) {
              const attach = currentAttaches[i];
              attach.style.transition = "0s";
              attach.style.transform = `translateX(${(endPositionX - startPositionX) * .25}rem)`;
          }
        })
        node.addEventListener('touchend', (event)=>{
          run = true;
          if (Math.abs(endPositionX - startPositionX) > 30) {
            changeSlide(arrow)
          } else {
            let attaches = node.querySelectorAll(`[data-attach-slide="${currentSlide}"]`);
            for (let i = 0; i < attaches.length; i++) {
                const attach = attaches[i];
                attach.style.transition = "0.3s";
                attach.style.transform = `translateX(0rem)`;
            }
          }
        })
        function changeSlide(arrow) {
          percent = 0;
          let attaches = node.querySelectorAll(`[data-attach-slide="${currentSlide}"]`);
          for (let i = 0; i < attaches.length; i++) {
              const attach = attaches[i];
              if (arrow == 'prev') {
                attach.style.transform = "translateX(0rem)";
                attach.style.opacity = "1";
                attach.style.transition = "0.3s";
                attach.style.transform = "translateX(40rem)";
              } else {
                attach.style.transform = "translateX(0rem)";
                attach.style.opacity = "1";
                attach.style.transition = "0.3s";
                attach.style.transform = "translateX(-40rem)";
              }
              attach.style.opacity = "0";
              setTimeout(()=>{
                  attach.style.display = "none";
              }, 300)
          }
          setTimeout(()=>{
              let newAttaches = node.querySelectorAll(`[data-attach-slide="${currentSlide}"]`);
              for (let i = 0; i < newAttaches.length; i++) {
                  const attach = newAttaches[i];
                  attach.style.display = "block";
                  if (arrow == 'prev') {
                    attach.style.transform = "translateX(-40rem)";
                    attach.style.transition = "0.2s";
                    attach.style.opacity = "0";
                    setTimeout(()=>{
                        attach.style.transform = "translateX(0rem)";
                        attach.style.opacity = "1";
                    }, 100)
                  } else {
                    attach.style.transform = "translateX(40rem)";
                    attach.style.transition = "0.2s";
                    attach.style.opacity = "0";
                    setTimeout(()=>{
                        attach.style.transform = "translateX(0rem)";
                        attach.style.opacity = "1";
                    }, 100)
                    
                  }
              }
              dynamicHeight.style.height = `${heights[currentSlide]}px`
          }, 300)

          if (arrow == 'prev') {
            if (currentSlide == 0) {
              currentSlide = slidesLength - 1;
            } else {
                --currentSlide
            }
          } else {
            if (currentSlide >= slidesLength - 1) {
                currentSlide = 0;
            } else {
                ++currentSlide
            }
          }

          for (let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            slide.querySelector('[data-slides-slide-percent]').style.width = `${0}%`;
          }
          for (let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            if (i <= currentSlide - 1) {
              slide.querySelector('[data-slides-slide-percent]').style.width = `${100}%`;
            }
          }
        }
        function changePercent() {
            render();
            if (percent > 99) {
                percent = 0;

                changeSlide()
            } else {
                if (run) {
                  percent += 0.6;
                }
            }
            requestAnimationFrame(changePercent)
        }
        function render() {
            slides[currentSlide].querySelector('[data-slides-slide-percent]').style.width = `${percent}%`;
        }
        changePercent()
    }

    let slidesNode = document.querySelectorAll('.how-it-works__block');
    for (let i = 0; i < slidesNode.length; i++) {
      let currentNode = slidesNode[i];
        function scrollInitSlide(typeEvent) {
          // Если страница открывается и проскроленно больше 100 пикселей, то порядок анимаций не будет(т.е. элементы не друг за другом открвываются  с задержкой)
          let windowScrollY = window.scrollY;
          if (windowScrollY > 100) {
            typeEvent = "scroll"
          }
          let windowInnerHeight = window.innerHeight;
          let offsetanimationTopOfWindow = currentNode.getBoundingClientRect().top;
          let percentOffsetanimationTopOfWindow = Math.floor(offsetanimationTopOfWindow / windowInnerHeight * 100);
          // Ели страница открывается, то показываются все элементы в области экрана. А при скролле анимируется только 75% от верха страницы, чтобы пользователь успел увидеть анимацию 
          let percentOfAnimationanimation = typeEvent == "scroll" ? 85 : 98;
          if (windowScrollY + windowInnerHeight > document.querySelector("body").getBoundingClientRect().height - 100) {
            percentOfAnimationanimation = 100
          }
          if (percentOffsetanimationTopOfWindow < percentOfAnimationanimation) {
            if (!currentNode.getAttribute('init')) {
              runSlides(currentNode)
            }
          }
        }
        window.addEventListener("scroll", function() {
          scrollInitSlide("scroll")
        });
        window.addEventListener("optimizedResize", function() {
          scrollInitSlide("scroll")
        });
        scrollInitSlide("load")
    }
} catch (error) {
    console.error(`${error}`)
    console.error(`Не работает: ${comment}`)
}

var openMenu, closeMenu;
comment = `Мобильное меню"`
try {
    let burger = document.querySelector(".header__burger__lines");
    let burgerBack = document.querySelector(".header__burger__back");
    let burgerMenu = document.querySelector(".header__burger__menu");

    openMenu = () => {
        burger.classList.add("header__burger__lines_active-1")
        burgerBack.classList.add("header__burger__back_1")
        burgerMenu.classList.add("header__burger__menu_1")
        setTimeout(()=>{
            burger.classList.add("header__burger__lines_active-2")
            burgerBack.classList.add("header__burger__back_2")
            burgerMenu.classList.add("header__burger__menu_2")
        }, 300)

        document.querySelector("body").style.overflow = "hidden";
        document.querySelector("html").style.overflow = "hidden";
    }

    closeMenu = () => {
        if (burger.classList.contains("header__burger__lines_active-2")) {
            burger.classList.remove("header__burger__lines_active-1")
            burgerBack.classList.remove("header__burger__back_1")
            burgerMenu.classList.remove("header__burger__menu_1")
            setTimeout(()=>{
                burger.classList.remove("header__burger__lines_active-2")
                burgerBack.classList.remove("header__burger__back_2")
                burgerMenu.classList.remove("header__burger__menu_2")
            }, 300)
        }

        document.querySelector("body").removeAttribute("style");
        document.querySelector("html").removeAttribute("style");
    }

    burger.addEventListener("click", () => {
        if (burger.classList.contains("header__burger__lines_active-2")) {
            closeMenu()
        } else {
            openMenu()
        }
    })

} catch (error) {
    console.error(`Не работает: ${comment}`)
}

comment = `Анимация тего с атрибутом animation"`
try {
  let animations = document.querySelectorAll("[animation]")
  let settimeout = 0;
  let initGrayScale = (animation, typeEvent) => {
    // Если элемент скрыт, то для него пока не показывать анмации. Это в том случае если элемент на десткопе есть, а на мобильном скрыт
    if (animation.hidden) {
      return;
    }
    // Если страница открывается и проскроленно больше 100 пикселей, то порядок анимаций не будет(т.е. элементы не друг за другом открвываются  с задержкой)
    let windowScrollY = window.scrollY;
    if (windowScrollY > 100) {
      typeEvent = "scroll"
    }
    let windowInnerHeight = window.innerHeight;
    let offsetanimationTopOfWindow = animation.getBoundingClientRect().top;
    let percentOffsetanimationTopOfWindow = Math.floor(offsetanimationTopOfWindow / windowInnerHeight * 100);
    // Ели страница открывается, то показываются все элементы в области экрана. А при скролле анимируется только 75% от верха страницы, чтобы пользователь успел увидеть анимацию 
    let percentOfAnimationanimation = typeEvent == "scroll" ? 85 : 98;
    if (windowScrollY + windowInnerHeight > document.querySelector("body").getBoundingClientRect().height - 100) {
      percentOfAnimationanimation = 100
    }
    if (percentOffsetanimationTopOfWindow < percentOfAnimationanimation) {
      if (animation.getAttribute("animation") != null) {
        let animationScale = animation.getAttribute("animation-scale") != null;
        let animationArrow = animation.getAttribute("animation-arrow");
        let animationSettimeout = animation.getAttribute("animation-settimeout");
        let animationDuration = animation.getAttribute("animation-duration");
        let animationBulba = typeof animation.getAttribute("animation-bulba") == "string";
        if (!animationSettimeout) {
          animationSettimeout = 200
        } else {
          animationSettimeout = +animationSettimeout
        }
        if (animationScale) {
          animation.style.transform = "scale(0.9)"
        }
        if (animationArrow) {
          let arrow = ""
          if (animationArrow == "bottom") {
            arrow = `0, 20rem`
          } else if (animationArrow == "top") {
            arrow = `0, -20rem`
          } else if (animationArrow == "left") {
            arrow = `-20rem, 0`
          } else if (animationArrow == "right") {
            arrow = `20rem, 0`
          }
          animation.style.transform = `translate(${arrow})`
        }
        if (animationSettimeout) {
          settimeout = settimeout+Number(animationSettimeout)
        }
        setTimeout(()=>{
          animation.style.transitionTimingFunction = "cubic-bezier(.19,1,.22,1)"
          if (animationDuration) {
            animation.style.transitionDuration = `${animationDuration}s`
          } 
          if (!animationBulba) {
            animation.style.transitionDuration = "1s"
          }
          
          if (animationScale) {
            animation.style.transform = "scale(1)"
          }
          if (animationArrow) {
            animation.style.transform = "translate(0, 0)"
          }
          animation.style.opacity = "1"


          if (animationBulba) {
            animation.style.transitionTimingFunction = "ease"
            setTimeout(()=>{
              animation.style.transitionDuration = "0.3s"
              animation.style.transform = "scale(1.20)"
            }, 100)
            setTimeout(()=>{
              animation.style.transform = "scale(1)"
            }, 300)
          }
        
          // Удаялем атрибут на всякий случай
          animation.removeAttribute("animation")
          // Перезаписываем новые элементы, чтобы не анимировать предыдущие 
          animations = document.querySelectorAll("[animation]")
          setTimeout(()=>{
            // Удаялем стили на всякий случай
            if (!animationBulba) {
              animation.removeAttribute("style")
            }
          }, animationDuration ? animationDuration*1000 : 1000)
        }, typeEvent == "scroll" ? 0 : settimeout)
      }
    }
  }
  window.addEventListener("scroll", function() {
    for (let i = 0; i < animations.length; i++) {
      let animation = animations[i];
      initGrayScale(animation, "scroll")
    }
  });
  window.addEventListener("optimizedResize", function() {
    for (let i = 0; i < animations.length; i++) {
      let animation = animations[i];
      initGrayScale(animation, "scroll")
    }
  });
  for (let i = 0; i < animations.length; i++) {
    let animation = animations[i];
    initGrayScale(animation, "load")
  }
} catch (error) {
  // Удалим атрибут если выскочет ошибка, потому что на атрибут в стилях повешан стиль прозрачности
  let animations = document.querySelectorAll("[animation]")
  for (let i = 0; i < animations.length; i++) {
    let animation = animations[i];
    animation.removeAttribute("animation")
  }
  console.error(`Не работает: ${comment}`)
}