import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet'
import { Toaster, ToastBar } from "react-hot-toast"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div>
            <Helmet>
                <meta charSet='utf-8'></meta>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <meta name='author' content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: "90vh" }}>
                <ToastContainer />
                <Toaster>
                    {(t) => (
                        <ToastBar
                            toast={t}
                            style={{
                                ...t.style,
                                animation: t.visible ? 'custom-enter 10s ease' : 'custom-exit 10s ease',
                            }}
                        />
                    )}
                </Toaster>
                {children}

            </main>
            <Footer />
        </div>
    )
}
Layout.defaultProps = {
    title: "VeggieHub",
    description: "mern stack project",
    keywords: "mern,react,node,mongodb",
    author: "VeggieHub"

}

export default Layout