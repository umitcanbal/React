import React from 'react';





export const App = ({name}) => {

        return(
            
            <div>
                <p>heyy</p>
                <p>{name}</p>
            </div>
        );
}

export default App;


//Eğer yukarıdaki gibi export yapmazsan da 7. satıra gidip "export const App" yazarsan çalışmıyo, niye bilmiyorum.