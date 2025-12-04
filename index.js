 var obj = {
  1: 'Instagram',
  2: 'Cristiano Ronaldo',
  3: 'Ariana Grande',
  4: 'Dwayne Johnson',
  5: 'Selena Gomez',
  6: 'Kylie Jenner',
  7: 'Kim Kardashian',
  8: 'Lionel Messi',
  9: 'Beyoncé',
  10: 'Neymar',
  11: 'National Geographic',
  12: 'Justin Bieber',
  13: 'Taylor Swift',
  14: 'Kendall Jenner',
  15: 'Jennifer Lopez',
  16: 'Nicki Minaj',
  17: 'Nike',
  18: 'Khloé Kardashian',
  19: 'Miley Cyrus',
  20: 'Katy Perry',
  21: 'Kourtney Kardashian',
  22: 'Kevin Hart',
  23: 'Ellen DeGeneres',
  24: 'Real Madrid CF',
  25: 'FC Barcelona',
  26: 'Rihanna',
  27: 'Demi Lovato',
  28: "Victoria's Secret",
  29: 'Zendaya',
  30: 'Shakira',
  31: 'Drake',
  32: 'Chris Brown',
  33: 'LeBron James',
  34: 'Vin Diesel',
  35: 'Cardi B',
  36: 'David Beckham',
  37: 'Billie Eilish',
  38: 'Justin Timberlake',
 }
let a=Math.floor(((Math.random())*38)+1);
let b=Math.floor(((Math.random())*38)+1);


let score=0;
$(".h").click(f1);
$(".l").click(f2);
function f1(){
    if (a>b){
       correct();
       a=b;
       b=Math.floor(((Math.random())*38)+1);
       $("#h1").html(obj[b]);
       $("#h2").html(obj[a]);
       score=score+1;
       $("#h3").html("Score: "+score);
    }
    else{
        wrong();
        $("#imgg").attr("src","./wrong-not.gif");
        $(".container").remove();
        $(".container1").remove();
        $("#h3").html("...");
        $("#h11").html("❌ Oops! You're wrong.");
        $("#h22").html("Your total score: " + score);
        $("#msg").html("🔄 Refresh the page to play again!");
    }

}

function f2(){
    if (b>a){
       correct();
       a=b;
       b=Math.floor(((Math.random())*38)+1);
       $("#h1").html(obj[b]);
       $("#h2").html(obj[a]);
       score=score+1;
       $("#h3").html("Score: "+score);
    }
    else{
        wrong();
        $("#imgg").attr("src","./wrong-not.gif");
        $(".container").remove();
        $(".container1").remove();
        
        $("#h11").html("❌ Oops! You're wrong.");
        $("#h22").html("Your total score: " + score);
        $("#h3").html("...");
        $("#msg").html("🔄 Refresh the page to play again!");
    }
}

function correct(){
    $("#img").attr("src","./neon-green-color-solid-background-1920x1080.png");
       $("#img").addClass("correct");
       setTimeout(function(){
       $("#img").attr("src","./istockphoto-1459545409-612x612.jpg");
       $("#img").removeClass("correct");
       },750);
}
function wrong(){
       $("#img").attr("src","./red-paper-background-elegant-scarlet-background-holiday-decoration-web-design-paper-texture_166373-2152.avif");
       $("#img").addClass("correct");
       setTimeout(function(){
       $("#img").attr("src","./istockphoto-1459545409-612x612.jpg");
       $("#img").removeClass("correct");
       },750);
}
 $("#h1").html(obj[b]);
 $("#h2").html(obj[a]);

