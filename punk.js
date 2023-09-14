const container = document.createElement('div');
container.className='container';
container.id='background'
document.body.appendChild(container);

const cardRow = document.createElement('div');
cardRow.className='row g-5 ';
cardRow.id="row";
container.appendChild(cardRow);

function fetchPunkApiData() {
  return new Promise((resolve, reject) => {
    fetch('https://api.punkapi.com/v2/beers')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          reject(`Error fetching data. Status: ${response.status}`);
        }
      })
      .then(data => {
        const cardRow = document.getElementById('row');
        data.forEach(beer => {
            const cardcol = document.createElement('div');
            cardcol.className='col-lg-4 col-sm-12'; 
            
            const card = document.createElement('div');
            card.className='card ';
            card.id='cardsty';
            const img = document.createElement('img');
            img.src=beer.image_url;
        
            const cardbody = document.createElement('div');
            cardbody.className = 'card-body';
            cardbody.id='c-body'
        
            const cardheader = document.createElement('div')
            const h5=document.createElement('h5');
            h5.id="beername"
            cardheader.className = 'card-title';
            cardheader.id='c-title'
            h5.innerHTML=beer.name
        
            const text1 = document.createElement('p');
            text1.classname='text1';
            text1.id='t1'
            text1.innerHTML=beer.description;
        
            cardRow.appendChild(cardcol);
            cardcol.appendChild(card);
            card.appendChild(img);
            card.appendChild(cardbody);
            cardheader.appendChild(h5);
            cardbody.appendChild(cardheader);
            cardbody.appendChild(text1);
        });
        resolve();
      })
      .catch(error => {
        reject(error.message);
      });
  });
}

fetchPunkApiData()
  .then(() => {
    console.log('Cards created successfully');
  })
  .catch(error => {
    console.error('Error:', error);
  });