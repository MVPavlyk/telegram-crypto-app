import {Outlet} from "react-router-dom";

import WebApp from '@twa-dev/sdk'
function App() {

    console.log(WebApp);

    return (
        <section>
            <Outlet/>
        </section>
    )
}

export default App
