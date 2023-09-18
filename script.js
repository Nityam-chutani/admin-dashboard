function addData() {
    const dataInput = document.getElementById('dataInput');
    const data = dataInput.value;
    
    if (data) {

        const existingData = localStorage.getItem('dashboardData') ? JSON.parse(localStorage.getItem('dashboardData')) : [];
        

        existingData.push(data);
        

        localStorage.setItem('dashboardData', JSON.stringify(existingData));
        

        dataInput.value = '';
        

        displayData();
    }
}

function deleteData(index) {
    const existingData = localStorage.getItem('dashboardData') ? JSON.parse(localStorage.getItem('dashboardData')) : [];
    

    existingData.splice(index, 1);
    

    localStorage.setItem('dashboardData', JSON.stringify(existingData));
    

    displayData();
}


function displayData() {
    const dataList = document.getElementById('dataList');
    

    const storedData = localStorage.getItem('dashboardData');
    
    if (storedData) {
        const dataArr = JSON.parse(storedData);
        dataList.innerHTML = '';
        

        dataArr.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${index + 1}. ${item}`;
            

            const deleteButton = document.createElement('span');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-button';
            deleteButton.onclick = () => deleteData(index);
            
            listItem.appendChild(deleteButton);
            dataList.appendChild(listItem);
        });
    }
}


displayData();