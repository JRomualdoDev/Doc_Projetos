import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

export default {
    project: {
        link: 'https://github.com/JRomualdoDev'
    },
    logo: (
        <>
            {/* <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"
                ></path>
            </svg> */}
            <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
                Meus Projetos
            </span>
        </>
    ),
    head: () => {
        const { asPath, defaultLocale, locale } = useRouter()
        const { frontMatter } = useConfig()
        const url =
            'https://github.com/JRomualdoDev' +
            (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

        return (
            <>
                <meta property="og:url" content={url} />
                <meta property="og:title" content={frontMatter.title || 'Nextra'} />
                <meta
                    property="og:description"
                    content={frontMatter.description || 'The next site builder'}
                />
            </>
        )
    },
    navigation: {
        prev: true,
        next: true
    },
    footer: {
        text: (
            <span>
                MIT {new Date().getFullYear()} ©{' '}
                <a href="https://github.com/JRomualdoDev" target="_blank">
                    Github
                </a>
                .
            </span>
        )
    }
}