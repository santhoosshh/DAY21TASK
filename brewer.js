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
    fetch('https://api.openbrewerydb.org/v1/breweries')
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
            cardcol.className='col-lg-3 col-sm-12'; 
            
            const card = document.createElement('div');
            card.className='card ';
            card.id='cardsty';
        
            const cardbody = document.createElement('div');
            cardbody.className = 'card-body';
            cardbody.id='c-body'
        
            const cardheader = document.createElement('div')
            const h5=document.createElement('p');
            h5.id="beername"
            cardheader.className = 'card-title';
            cardheader.id='c-title'
            h5.innerHTML=`${beer.name}`
        
            const text1 = document.createElement('p');
            text1.classname='text1';
            text1.id='t1'
            text1.innerHTML=`TYPE - ${beer.brewery_type}`;

            const text2 = document.createElement('p');
            text2.classname='text1';
            text2.id='t2'
            text2.innerHTML=`ADDRESS - ${beer.address_1}`;

            const text3 = document.createElement('p');
            text3.classname='text1';
            text3.id='t3'
            text3.innerHTML=`CITY - ${beer.city}`;

            const text4 = document.createElement('p');
            text4.classname='text1';
            text4.id='t4'
            text4.innerHTML=`COUNTRY - ${beer.country}`;

            const text5 = document.createElement('p');
            text5.classname='text1';
            text5.id='t5'
            text5.innerHTML=`Calories - ${beer.phone}`;
        
            cardRow.appendChild(cardcol);
            cardcol.appendChild(card);
            card.appendChild(cardbody);
            cardheader.appendChild(h5);
            cardbody.appendChild(cardheader);
            cardbody.appendChild(text1);
            cardbody.appendChild(text2);
            cardbody.appendChild(text3);
            cardbody.appendChild(text4);
            cardbody.appendChild(text5);
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