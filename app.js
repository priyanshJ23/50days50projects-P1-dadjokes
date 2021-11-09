const jokeel = document.getElementById('joke')
const jokebtn = document.getElementById('jokebtn')
jokebtn.addEventListener('click', generatejoke)
generatejoke();

function generatejoke()
{
  const config =
  {
    headers: {
        Accept : 'application/json',
    },

  }


  fetch( 'https://icanhazdadjoke.com' , config)
  .then((res) => res.json())
  .then((data) =>
  {
    jokeel.innerHTML  = data.joke
  }
   )

}
