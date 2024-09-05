import Sidebar from "~/layouts/components/Sidebar";
import Header from "~/layouts/components/Header";
import { Fragment } from "react";
function Home() {
    return (
        <Fragment>
            <Header />
            <Sidebar />
            <h2>Home page</h2>
        </Fragment>

    )
}

export default Home;