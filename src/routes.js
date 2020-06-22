import Store from './components/Store.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import ProductDetails from './components/ProductDetails.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import About from './components/about.vue';
import Contact from './components/contact/contact.vue';
import Recipes from './components/recipes.vue';

export const routes = [
	{path: '/', component: Store, name: 'mainpage'},
	{path: '/product/:id', component: ProductDetails, name: 'product'},
	{path: '/cart', component: ShoppingCart, name: 'shoppingcart'},
	{path: '/login', component: Login, name: 'login', onlyGuest: true },
	{path: '/register', component: Register, name: 'register', onlyGuest: true},
	{path: '/about', component: About, name: 'about'},
	{path: '/contact', component: Contact, name: 'contact'},
	{path: '/recipes', component: Recipes, name: 'recipes'},
	{path: '*', redirect: '/' }
];