<template>
  <div>
    <div class="slideshow-container">
      <div class="mySlides fade">
        <div class="numbertext">
          1 / 3
        </div>
        <img src="https://mkt.trato.io/wp-content/uploads/2021/06/kaitlyn-baker-vZJdYl5JVXY-unsplash-2048x1365.jpg" style=" max-width: 100%; height: auto;">
        <div class="text">
          Bienvenido a FusaNest!
        </div>
      </div>

      <div class="mySlides fade">
        <div class="numbertext">
          2 / 3
        </div>
        <img src="https://mkt.trato.io/wp-content/uploads/2017/04/imagen-blog-14-1.jpeg" style="width:100%">
        <div class="text">
          Bienvenido a FusaNest!
        </div>
      </div>

      <div class="mySlides fade">
        <div class="numbertext">
          3 / 3
        </div>
        <img src="https://www.pandasecurity.com/es/mediacenter/src/uploads/2020/11/pandasecurity-inteligencia-artificial.jpg" style="width:100% ">
        <div class="text">
          Bienvenido a FusaNest!
        </div>
      </div>

      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br>

    <div style="text-align:center">
      <span class="dot" onclick="currentSlide(1)" />
      <span class="dot" onclick="currentSlide(2)" />
      <span class="dot" onclick="currentSlide(3)" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    /* slideIndex = 1,
        showSlides(slideIndex)

        function plusSlides(n): {
            showSlides(slideIndex += n)
        }

        function currentSlide(n) {
            showSlides(slideIndex = n)
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides")
            var dots = document.getElementsByClassName("dot")
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none"
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block"
            dots[slideIndex - 1].className += " active"
        } */
  },
}
</script>

<style>
    .slideshow-container {
        max-width: 100%;
        max-height: 56.25%;
        position: relative;
        margin: auto;
    }

    .myslydes {
        display: none;
    }

.myslydes:first-child {
    display: block;
}

.prev, .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: ghostwhite;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
}

.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
    background-color: #2c3443;
}

.text {
    color: ghostwhite;
    font-size: 25px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
    font-weight: 900;
}

.numbertext {
    color: ghostwhite;
    font-size: 17px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
}

.dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #2c3443;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}

    .active, .dot:hover {
        background-color: #717171;
    }

.fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
}

@-webkit-keyframes fade {
    from {
        opacity: .4
    }

    to {
        opacity: 1
    }
}

@keyframes fade {
    from {
        opacity: .4
    }

    to {
        opacity: 1
    }
}
</style>
