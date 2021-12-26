const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'

const fetchRepo = async () => {
    const response = await fetch(url);
    const data = await response.json();
    //use reduce to make total repository on Languages from api.
    const newData = data.reduce((total, repo) => {
        const {language} = repo
        if(language){
            if(total[language]){
                (total[language]) = (total[language]) + 1
            }else{
                (total[language]) = 1
            }
        }
        
        return total
    }, {} )

    // need to resolve this ..
   // const display = document.querySelector('#result');
   // display.innerHTML = newData;
}

fetchRepo()