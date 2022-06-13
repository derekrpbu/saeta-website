**Contact Form**

Past form:

```html
<form action="mailto:info@saetacostarica.com" method="post" enctype="text/plain">
```

Tutorial 1: https://www.youtube.com/watch?v=zx2YoBMfflM

Tutorial 2: https://www.youtube.com/watch?v=Mkws64UmyI8

Tutorial3: https://www.youtube.com/watch?v=i2eXkSKjl0A&t=318s



**When you want to target an element inside another**

```css
ul {					'Targets unordered list
    
}

ul li {					'Trgets list item inside unordered list
    
}

ul li a {				'targets anchor tag inside list item inside unordered list
    
}
```



*Eldar Gesalov - SEO Youtube*

**Image Optimization** 

<u>Software:</u> GIMP, Photoshop Express

<u>File type:</u> JPG, PNG

<u>Names:</u> altamonte_casa1

<u>Aspect Ratio:</u> 

- Wide: 16:9, 4:3, 3:2
- Portrait: 3:4, 2:3

<u>Resolution</u>: 

- Banner images Max width: 2500px
- Regular/Gallery images Max width: 1500px

<u>Size:</u> Max 500kb

## Cropping Images

**Carousel:** 

Standard LX Banner: 1540x772 (1.99:1)

Alejandro Radulovich: w5048 x h2256 (2.2:1)

Mauricio Mora: 1920x875 (2.2:1)

**Tarjetas:**

Standard LX Tarjetas: 1277x640 (1.99:1)

SAETA: 1280x640



---

## Directory Parenting

---



```html
<img src="picture.jpg">            In your folder with you, like a sibling
<img src="images/picture.jpg">     In your child's folder, under you
<img src="../picture.jpg">         In your parent's folder, above you
<img src="/images/picture.jpg">    In your cousin's folder
```



---

## Saeta Team Cards

---

**HTML:**

```html
<section id="team-cards">

    <div class="row">

      <div class="pricing-column cl-lg-4 cl-md-6">
        <div class="card">
          <div class="card-header">
            <h3>Esther Penrod</h3>
          </div>
          <img src="images/estherSaeta.jpg" class="esther-card" alt="derek-img">
          <div class="card-body">
            <p class="card-text">Click for more</p>
          </div>
          <a href="esther.html">
          <div class="card-overlay">
            <div class="overlay-text">More About Esther</div>
          </div>
          </a>
        </div>
      </div>

      <div class="pricing-column cl-lg-4 cl-md-6">
        <div class="card">
          <div class="card-header">
            <h3>Alexa Robert</h3>
          </div>
          <img src="images/alexaSaeta.jpg" class="alexa-card" alt="derek-img">
          <div class="card-body">
            <p class="card-text">Click for more</p>
          </div>
          <a href="alexa.html">
          <div class="card-overlay">
            <div class="overlay-text">More About Alexa</div>
          </div>
          </a>
        </div>
      </div>

      <div class="pricing-column cl-lg-4 cl-md-6">
        <div class="card">
          <div class="card-header">
            <h3>Derek Robert</h3>
          </div>
          <img src="images/derekSaeta.jpg" class="derek-card" alt="derek-img">
          <div class="card-body">
            <p class="card-text">Click for more</p>
          </div>
          <a href="derek.html">
          <div class="card-overlay">
            <div class="overlay-text">More About Derek</div>
          </div>
          </a>
        </div>
      </div>

    </div>

  </section>
```

**CSS:**

```css
/* Team Cards */

#team-cards {
  padding: 0 100px 100px;
}

.row{
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.pricing-column {
  padding: 3% 2%;
  text-align: center;
}

.derek-card {
  height: 397px;
  width: 340px;
}

.esther-card {
  height: 397px;
  width: 365px;
}

.alexa-card {
  height: 397px;
  width: 320px;
}

.card-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #CBAF87;
}

.card:hover .card-overlay {
  opacity: 1;
}

.overlay-text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
```



---

## Image lightSlider jQuery

---



http://sachinchoolur.github.io/lightslider/

https://codepen.io/sachinchoolur/pen/Ihoev

https://www.youtube.com/watch?v=OPeE1IUzvPI



HTML

```html
 <div class="banner">
   <ul id="lightSlider">
     <li><img class="lightSliderPhoto"src="../images/casas/este/curridabat/margot_vasquez/mv1.jpg" alt=""></li>
     <li><img class="lightSliderPhoto"src="../images/casas/este/curridabat/margot_vasquez/mv2.jpg" alt=""></li>
     <li><img class="lightSliderPhoto"src="../images/casas/este/curridabat/margot_vasquez/mv1.jpg" alt=""></li>
     <li><img src="" alt=""></li>
     <li><img src="" alt=""></li>
   </ul>
 </div>
```

CSS

```CSS
.banner {
  margin: auto;
  width: 50rem;
}

.lightSliderPhoto {
  width: 50rem;
}
```

JS

```javascript
$(document).ready(function(){
  $("#lightSlider").lightSlider({
    item: 1,
    auto: true,
    loop: true,
    speed: 1000,
    pause: 4000
  });
});
```



## #2 Tiny Slideshow