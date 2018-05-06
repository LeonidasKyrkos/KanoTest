// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import globalStyles from "@styles/global.scss";
import { API_ENDPOINT } from "./constants";

Vue.config.productionTip = false;

getData(API_ENDPOINT)
	.then(parseData)
	.then(initialise);

function getData (url) {
	return fetch(url);
}

function parseData (res) {
	return res.json();
}

function initialise (data) {
	/* eslint-disable no-new */
	new Vue({
		el: "#app",
		router,
		template: "<App/>",
		components: {
			App,
		},
		data() {
			return {
				entries: data["entries"],
			};
		},
	});
}