import Head from "next/head"
import Header from '../../widget/Header/Header'
import {ScrollUp} from '../../shared/ScrollUp/ScrollUp'
import {Footer} from '../../widget/Footer/ui/Footer'

type MainContainerType = {
    children? : any
    keywords? : any
    title? : any
    city? : any
    personalAccount? : any
    footerColor? : "nude" | "accent"
    refs? : any
}

export const MainContainer = ({children, keywords, title, city, personalAccount, footerColor, refs}: MainContainerType) => {
    
    return (
        <>
            <Head>
                <meta name="keywords" content={keywords}></meta>
                <title>{title}</title>
                <link rel="icon" type="image/svg+xml" href="%PUBLIC_URL%/LogoIcon.svg" />
            </Head>
            <Header city={city} personalAccount={personalAccount}/>
            <div>
                {children}
            </div>
            {footerColor && <Footer color={footerColor}/>}
            <ScrollUp refs={refs}/>
        </>
    );
};
