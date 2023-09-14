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
    fetch('https://www.balldontlie.io/api/v1/players')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          reject(`Error fetching data. Status: ${response.status}`);
        }
      })
      .then(player => {
        const cardRow = document.getElementById('row');
        player.data.forEach(player1 => {
            const cardcol = document.createElement('div');
            cardcol.className='col-lg-4 col-sm-12'; 
            
            const card = document.createElement('div');
            card.className='card ';
            card.id='cardsty';
        
            const cardbody = document.createElement('div');
            cardbody.className = 'card-body';
            cardbody.id='c-body'
        
            const cardheader = document.createElement('div')
            const h5=document.createElement('p');
            h5.id="name"
            cardheader.className = 'card-title';
            cardheader.id='c-title'
            h5.innerHTML=`PLAYER NAME - ${player1.first_name} ${player1.last_name}`
        
            const text1 = document.createElement('p');
            text1.classname='text1';
            text1.id='t1'
            text1.innerHTML=`POSITION - ${player1.position}`;

            const text2 = document.createElement('p');
            text2.classname='text1';
            text2.id='t2'
            text2.innerHTML=`TEAM - ${player1.team.full_name}`;

            const text3 = document.createElement('p');
            text3.classname='text1';
            text3.id='t3'
            text3.innerHTML=`CITY - ${player1.team.city}`;

        
            cardRow.appendChild(cardcol);
            cardcol.appendChild(card);
            card.appendChild(cardbody);
            cardheader.appendChild(h5);
            cardbody.appendChild(cardheader);
            cardbody.appendChild(text1);
            cardbody.appendChild(text2);
            cardbody.appendChild(text3);
            
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