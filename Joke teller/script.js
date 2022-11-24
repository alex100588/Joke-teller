const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// Disable/Enable Button
function toggleButton() {
  button.disabled = !button.disabled;
}


const tellMe = (joke) =>{
    console.log('tell me ', joke);
    // VoiceRSS Speech 
    VoiceRSS.speech({
      key: 'b2f228950ccb4ca691109346bd8b4308',
      src: joke,
      hl: 'en-us',
      r: 0,
      c: 'mp3',
      f: '44khz_16bit_stereo',
      ssml: false,
    });
}

// fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart')
// .then(res => res.json())
// .then(data => console.log(data))

async function getJokes(){
    let joke = ''
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart')
        const data = await response.json()
        if(data.setup){
            joke = `hi, I am Alex and the joke is ${data.setup} ... ${data.delivery}`
        }else{
            joke = data.joke
        }
        
    } catch (error) {
        alert('Conectare la api nereusita' + error);
    }
    // console.log(joke);
    // console.log(resp);
    tellMe(joke)
}


button.addEventListener('click', ()=>{
    getJokes()
})
