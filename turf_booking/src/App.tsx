import {BrowserRouter,Route} from 'react-router-dom'

import Login from "./pages/login/login";

function App(){
    return(<>
        <BrowserRouter>
        {/* <Routes> */} 
            <Route path="/" element={<Login/>}/>
        {/* </Routes> */}
        </BrowserRouter>
            <Login/></>
    );
}
export default App;