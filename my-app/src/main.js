import Navigo from "navigo";
import HomePage from "./Pages/home";
import AboutPage from "./Pages/about";
import ProductPage from "./Pages/product";
import SignUpPage from "./Pages/sign_up";
import SignInPage from "./Pages/sign_in";
import Header from "./components/header";
import Footer from "./components/footer";
import DetailNewsPage from "./Pages/detailNews";
import DashBoardPage from "./Pages/admin/dashboard";
import AddNewsPage from "./Pages/admin/news/add";
import AdminNewsPage from "./Pages/admin/news";
import EditNewsPage from "./Pages/admin/news/edit";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    // document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    // document.getElementById("footer").innerHTML = Footer.render();
};
router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/sign_up": () => {
        print(SignUpPage.render());
    },
    "/sign_in": () => {
        print(SignInPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewsPage.render(id));
    },
    "/admin/dashboard": () => {
        print(DashBoardPage.render());
    },
    "/admin/news": () => {
        print(AdminNewsPage.render());
    },
    "/admin/news/add": () => {
        console.log("12");
        print(AddNewsPage.render());
    },
    "/admin/news/edit": () => {
        print(EditNewsPage.render());
    },
});
router.resolve();