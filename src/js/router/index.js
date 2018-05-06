import Vue from "vue";
import Router from "vue-router";

import Article from "@components/Article/Article";
import Gallery from "@components/Gallery/Gallery";

Vue.use(Router);

export default new Router({
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
