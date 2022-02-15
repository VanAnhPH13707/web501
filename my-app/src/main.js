import Navigo from "navigo";
import HomePage from "./Pages/home";
import AboutPage from "./Pages/about";
import ProductPage from "./Pages/products";
import Header from "./components/header";
import Footer from "./components/footer";
import AdminPosts from "./Pages/posts";
import AdminAddPosts from "./Pages/posts/add";
import AdminEditposts from "./Pages/posts/edit";
import Signup from "./Pages/signup";
import Signin from "./Pages/signin";
import ProductDetailPage from "./Pages/products/detail";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before: (done) => {
        if (localStorage.getItem("user")) {
            console.log("ahihi");
            const userId = JSON.parse(localStorage.getItem("user")).id;
            if (userId === 1) {
                done();
            } else {
                document.location.href = "/";
            }
        }
    },
});
router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/products": () => print(ProductPage),
    "/products/:id": ({ data }) => print(ProductDetailPage, data.id),
    "/admin/posts": () => print(AdminPosts),
    "/admin/posts/add": () => print(AdminAddPosts),
    "/admin/posts/:id/edit": ({ data }) => print(AdminEditposts, data.id),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
});
router.resolve();

// const a = 10;
// const b = 20;

// function sum(a,b, callback){
//     callback(a + b);
// }
// sum(a,b, function(result){
//     document.getElementById('app').innerHTML = result;
// });

// function loadScript(src, callback){
//     const script = document.createElement('script');
//     script.src = src;
//     script.onload = () => {
//         callback(null, script)
//     }
//     script.onerror = () => {
//         callback(new Error("Lỗi kết nối"));
//     }
//     document.head.append(script);
// }
// loadScript('https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif', function(error, script){
//     if(error){
//         console.log(error);
//     } else {
//         console.log(script);
//     }
// });

// Promise
// function loadScript(src) {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement("script");
//         script.src = src;
//         script.onload = () => {
//             resolve(script);
//         };
//         script.onerror = () => {
//             reject(new Error("Lỗi kết nối"));
//         };
//         document.head.append(script);
//     });
// }
// loadScript('https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif')
//     .then(script => console.log(script))
//     .catch(error => console.log(error))

// async/await
// async function asyncFunction() {
//     try {
//         const result = await loadScript("https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif");
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
// asyncFunction();