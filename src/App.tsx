import {Outlet} from "react-router-dom";

import WebApp from '@twa-dev/sdk'
import NavBar from './components/modules/NavBar';

function App() {

    console.log(WebApp);

    return (
        <section>
            <Outlet/>
            <NavBar/>
        </section>
    )
}

export default App
