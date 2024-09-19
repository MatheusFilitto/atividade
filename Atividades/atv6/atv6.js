        // Função criar elemento 
        function createElement(tag, styles = {}) {
            const element = document.createElement(tag);
            for (let property in styles) {
                element.style[property] = styles[property];
            }
            return element;
        }

        // Função atualizar o total
        function updateTotal() {
            const total = maleCount + femaleCount;
            totalElement.textContent = total;
        }

        // começar contadores
        let maleCount = 0;
        let femaleCount = 0;

        // Selecionar o contêiner principal
        const app = document.getElementById('app');

        // Estilização principal
        app.style.fontFamily = 'Arial, sans-serif';
        app.style.display = 'flex';
        app.style.marginLeft = '450px';
        app.style.flexDirection = 'column';
        app.style.alignItems = 'center';
        app.style.padding = '20px';
        app.style.backgroundColor = 'white';
        app.style.borderRadius = '10px';
        app.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        app.style.width = '350px';
        app.style.textAlign = 'center';

        // Criar título Total
        const totalContainer = createElement('div', {
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px'
        });
        const totalTitle = createElement('h2', {});
        totalTitle.textContent = 'Total';
        const totalElement = createElement('div', {
            fontSize: '24px',
            fontWeight: 'bold'
        });
        totalElement.textContent = '0';

        totalContainer.appendChild(totalTitle);
        totalContainer.appendChild(totalElement);

        // reset
        const resetButton = createElement('button', {
            width: '40px',
            height: '40px',
            fontSize: '18px',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            backgroundColor: '#f0f0f0'
        });
        resetButton.innerHTML = '&#x21bb;'; 
        resetButton.addEventListener('click', () => {
            maleCount = 0;
            femaleCount = 0;
            updateMaleCount();
            updateFemaleCount();
            updateTotal();
        });
        totalContainer.appendChild(resetButton);

        // Adicionar o container total ao app
        app.appendChild(totalContainer);

        //  atualizar contadores homens e mulheres
        function updateMaleCount() {
            maleCounter.textContent = maleCount;
        }

        function updateFemaleCount() {
            femaleCounter.textContent = femaleCount;
        }

        // homens
        const maleSection = createElement('div', {
            textAlign: 'center',
            flex: '1'
        });
        const maleImg = createElement('img', {
            width: '50px',
            height: '50px'
        });
        maleImg.src = 'imagem.png'; 

        const maleCounter = createElement('div', {
            marginTop: '5px',
            fontSize: '20px'
        });
        maleCounter.textContent = '0';

        const maleButtons = createElement('div', {
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '10px'
        });
        const maleAddButton = createElement('button', {
            width: '40px',
            height: '40px',
            fontSize: '18px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '50%',
            backgroundColor: 'green',
            color: 'white'
        });
        maleAddButton.textContent = '+';
        maleAddButton.addEventListener('click', () => {
            maleCount++;
            updateMaleCount();
            updateTotal();
        });

        const maleRemoveButton = createElement('button', {
            width: '40px',
            height: '40px',
            fontSize: '18px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '50%',
            marginRight: '5px',
            backgroundColor: 'red',
            color: 'white'
        });
        maleRemoveButton.textContent = '-';
        maleRemoveButton.addEventListener('click', () => {
            if (maleCount > 0) maleCount--;
            updateMaleCount();
            updateTotal();
        });

        maleButtons.appendChild(maleAddButton);
        maleButtons.appendChild(maleRemoveButton);

        const maleLabel = createElement('p', {});
        maleLabel.textContent = 'Homens';

        maleSection.appendChild(maleImg);
        maleSection.appendChild(maleCounter);
        maleSection.appendChild(maleButtons);
        maleSection.appendChild(maleLabel);

        // mulheres
        const femaleSection = createElement('div', {
            textAlign: 'center',
            flex: '1'
        });
        const femaleImg = createElement('img', {
            width: '50px',
            height: '50px'
        });
        femaleImg.src = 'imagem1.jpg'; 

        const femaleCounter = createElement('div', {
            marginTop: '5px',
            fontSize: '20px'
        });
        femaleCounter.textContent = '0';

        const femaleButtons = createElement('div', {
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '10px'
        });
        const femaleAddButton = createElement('button', {
            width: '40px',
            height: '40px',
            fontSize: '18px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '50%',
            marginLeft: '5px',
            backgroundColor: 'green',
            color: 'white'
        });
        femaleAddButton.textContent = '+';
        femaleAddButton.addEventListener('click', () => {
            femaleCount++;
            updateFemaleCount();
            updateTotal();
        });

        const femaleRemoveButton = createElement('button', {
            width: '40px',
            height: '40px',
            fontSize: '18px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '50%',
            backgroundColor: 'red',
            color: 'white'
        });
        femaleRemoveButton.textContent = '-';
        femaleRemoveButton.addEventListener('click', () => {
            if (femaleCount > 0) femaleCount--;
            updateFemaleCount();
            updateTotal();
        });

        femaleButtons.appendChild(femaleAddButton);
        femaleButtons.appendChild(femaleRemoveButton);

        const femaleLabel = createElement('p', {});
        femaleLabel.textContent = 'Mulheres';

        femaleSection.appendChild(femaleImg);
        femaleSection.appendChild(femaleCounter);
        femaleSection.appendChild(femaleButtons);
        femaleSection.appendChild(femaleLabel);

        
        const row = createElement('div', {
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '20px'
        });
        row.appendChild(maleSection);
        row.appendChild(femaleSection);

        
        app.appendChild(row);