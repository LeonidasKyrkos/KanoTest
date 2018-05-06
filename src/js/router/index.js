import Vue from "vue";
import Router from "vue-router";

import Article from "@components/Article/Article";
import Gallery from "@components/Gallery/Gallery";

Vue.use(Router);

const router = new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "Gallery",
			component: Gallery,
		},
		{
			path: "/entries/:id",
			name: "Article",
			component: Article,
		},
	],
});

router.afterEach((to, from) => {
	window.scrollTo(0, 0);
});

export default router;