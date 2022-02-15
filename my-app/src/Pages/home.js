import Banner from "../components/banner";
import NewList from "../components/newsList";
import Footer from "../components/footer";
import Header from "../components/header";

const HomePage = {
    render() {
        return `

        <div class="max-w-5xl mx-auto">
            <div id="header">
                ${Header.render()}
            </div>
            <div class="banner">
                ${Banner.render()}
            </div>
            <div class="news">
                ${NewList.render()}
            </div>
            ${Footer.render()}
        </div>
    `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;