let randomNumber = Math.trunc(Math.random() * 10) + 1 ;
console.log(randomNumber);

let score = 9 ;
let highscore = 0 ;

document.querySelector('.check').addEventListener('click', function () {
    const myguess = Number(document.querySelector('.guess').value); 
    
    //when no user input

    if (!myguess) {
        document.querySelector('.message').textContent = ' no number! '  ;   
    }

    //when guess is correct

    else if (myguess === randomNumber) {
        document.querySelector('.message').textContent = ' correct number ! ' ; 
        document.querySelector('body').style.backgroundColor = '#008B8B';
        document.querySelector('.number').textContent = randomNumber ;
        document.querySelector('.highscore').textContent = score + 1 ;
        document.querySelector('.again').textContent = 'click here ! '

        if (score > highscore) {
            highscore = score ;
            document.querySelector('.highscore').textContent = score + 1 ;
        }
        setTimeout(function(){confirm("Press 'Click here!' Button Now");}, 2000);
        
    }

    //when guess is higher

    else if (myguess > randomNumber) {
        if (score >= 1) {
            document.querySelector('.message').textContent = ' no match! higher guess '  ;
            document.querySelector('.score').textContent = score-- ;
        }else{
            document.querySelector('.message').textContent = 'boom you suck! game lost...😑' ;
            document.querySelector('.score').textContent = 0 ;
            document.querySelector('body').style.backgroundColor = '#DC143C';         
        }
        
    }

    //when guess is lower

    else if (myguess < randomNumber) {
        if (score >= 1) {
            document.querySelector('.message').textContent = ' no match! lower guess '  ;
            document.querySelector('.score').textContent = score-- ;
        }else{
            document.querySelector('.message').textContent = 'boom you suck! game lost...😑' ;
            document.querySelector('.score').textContent = 0 ;
            document.querySelector('body').style.backgroundColor = '#DC143C';  
        }
        
    }

})

// play again {again button}

document.querySelector('.again').addEventListener('click', function(){
    
    score = 9 ;
    randomNumber = Math.trunc(Math.random() * 10) + 1 ;
    document.querySelector('body').style.backgroundColor = 'rgb(53, 60, 65)';
    document.querySelector('.number').textContent = '?' ;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = '00' ;
    document.querySelector('.guess').value = '';

})