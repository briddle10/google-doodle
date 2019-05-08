function animatePlanet(planet) {
    planet.removeClass('planetsAppear').addClass('planetsBounce');
  };
  
  function animateSaturn(planet) {;
    planet.removeClass('planetsAppear').addClass('saturnFlip');
  };
  
  $(document).ready(function() {
    var earth = $("#earth");
    $(earth).mouseenter(function() {
      animatePlanet(earth);
    });
    
    $(earth).mouseleave(function() {
      earth.removeClass('planetsBounce')
    });
  });
  
  $(document).ready(function() {
    var mars = $("#mars");
    $(mars).mouseenter(function() {
      animatePlanet(mars);
    });
    
    $(mars).mouseleave(function() {
      mars.removeClass('planetsBounce')
    });
  });
  
  $(document).ready(function() {
    var saturn = $("#saturn");
    $(saturn).mouseenter(function() {
      animateSaturn(saturn);
    });
    
    $(saturn).mouseleave(function() {
      saturn.removeClass('saturnFlip')
    });
  });
  
  $(document).ready(function() {
    var pluto = $("#pluto");
    $(pluto).mouseenter(function() {
      animatePlanet(pluto);
    });
    
    $(pluto).mouseleave(function() {
      pluto.removeClass('planetsBounce')
    });
  });
  
  $(document).ready(function() {
    var moon = $("#moon");
    $(moon).mouseenter(function() {
      animatePlanet(moon);
    });
    
    $(moon).mouseleave(function() {
      moon.removeClass('planetsBounce')
    });
  });
  
  
  
  function animateRocket() {
    var rocket = $('#rocket');
    if (rocket.hasClass('rocketFirst')) {
      console.log('no');
      rocket.removeClass('rocketFirst').addClass('rocketDown');
      
    } else if (rocket.hasClass('rocketUp')) {
      console.log('oof');
      rocket.removeClass('rocketUp').addClass('rocketDown');
      
    } else if (rocket.hasClass('rocketDown')) {
      console.log('ug');
      rocket.removeClass('rocketDown').addClass('rocketUp');
      
    } else {
         console.log('ooh');
      rocket.addClass('rocketFirst');
   
    }
  };
  
  $(document).ready(function() {
    $("#rocket").on("click", function() {
      animateRocket();
    });
  });
  
  
  function redo(element) {
    if (element.hasClass('rocketFirst')){
      console.log('no');
      element.addClass('disappear');
      
    } else if (element.hasClass('rocketUp')) {
      console.log('oof');
      element.addClass('disappear');
      
    } else if (element.hasClass('rocketDown')) {
      console.log('ug');
      element.addClass('disappear');
      
    } else if (element.hasClass('planetsAppear')) {
      console.log('ug');
      element.addClass('disappear');
      
    }  else {
         console.log('ah');
      element.addClass('disappear');
    }
  };
  
  function planetsAppear(element) {
    if (element.hasClass('disappear')){
      console.log('no');
      element.removeClass('disappear').addClass('planetsAppear');
      
    } else {
         console.log('ah');
      element.addClass('planetsAppear');
    }
  };
  
  
  
  $(document).ready(function() {
    var earth = $("#earth");
      var mars = $("#mars");
      var saturn = $("#saturn");
      var pluto = $("#pluto");
      var moon = $("#moon");
      var rocket = $('#rocket');
      var google = $('#google');
      
      $("#redo").on("click", function() {
        
        if (earth.hasClass('disappear')){
          console.log('disappear');
          planetsAppear(earth);
          planetsAppear(mars);
          planetsAppear(saturn);
          planetsAppear(pluto);
          planetsAppear(moon);
          planetsAppear(rocket);
          redo(google);
       
        }
      else {
        console.log('redo');
        redo(earth);
        redo(mars);
        redo(saturn);
        redo(pluto);
        redo(moon);
        redo(rocket);
        planetsAppear(google);
      }
    
    });
  });