import PublicLayout from '@/layouts/PublicLayout';
import PageTitle from '@/components/PageTitle'; 
import BackToHome from '@/app/NotFound/components/BackToHome';


const Index = () => {
    return (
        <PublicLayout>
            <div className="not-found-page">
                <PageTitle pageTitle="Page Not Found" pageRoute="/" pageRouteLabel="Home" />
                <BackToHome/>
            </div>
        </PublicLayout>
    )
}

export default Index