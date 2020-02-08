
const input = document.querySelector('input[type="number"]');
const sectionGrid = document.querySelector('.grid');
const btn = document.querySelector('button');
btn.addEventListener('click', getJks);
function getJks(e) {
   const number = input.value;
   const xhr = new XMLHttpRequest();

   xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

     xhr.onload = function () {
      if (this.status === 200) {
         const res = JSON.parse(this.responseText);
         let output = '';

         if (res.type === 'success') {
            res.value.forEach(function (joke) {
               output += `
                  <article class="card">
                     <p class="joke">${joke.joke}</p>
                  </article>
               `;
            });
         } else {
            output += '<p>error</p>';
         }

         sectionGrid.innerHTML = output;
      }
   }

   xhr.send();

   e.preventDefault();
}