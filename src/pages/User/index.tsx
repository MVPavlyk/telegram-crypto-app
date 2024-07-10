import PageLayout from "../../components/layouts/PageLayout";
import WebApp from '@twa-dev/sdk'

const UserPage = () => {
    // @ts-ignore
    const {first_name, last_name, id} = WebApp?.initDataUnsafe?.user || {}

    console.log(WebApp)


    return (
        <PageLayout>
            Hello {first_name} {last_name}
        </PageLayout>
    );
};

export default UserPage;