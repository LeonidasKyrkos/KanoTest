<template>
<div>
	<header class="header">
		<logo class="header__logo"></logo>
		<h1 class="alpha header__title">Latest 100 shares</h1>
	</header>
	<div class="contentwrap">
		<search v-bind:value="searchString" v-on:input="searchString = $event"></search>
		<span class="alpha" v-if="searchString.length && entries.length === 0">No results found. Please try another search</span>
		<div class="gallery__sorting">
			<button class="gallery__tab" :class="{ active: sortEntries === defaultSort }" @click="sortEntries = defaultSort">Time</button>
			<button class="gallery__tab" :class="{ active: sortEntries === likesSort }" @click="sortEntries = likesSort">Likes</button>
			<button class="gallery__tab" :class="{ active: sortEntries === titleSort }" @click="sortEntries = titleSort">Title</button>
		</div>
		<ul class="gallery">
			<li v-for="entry in entries" :key="entry.id" class="gallery__item-wrap">
				<router-link class="gallery__item" :to="`/entries/${entry.id}`">
					<article>
						<img class="gallery__image" :src="entry.attachments.cover_url" :alt="entry.title">
						<h1 class="alpha gallery__title">{{ entry.title }}</h1>
						<h2 class="beta">{{ entry.user.username }}</h2>
						<span>{{ entry.likes.length }}</span>
					</article>
				</router-link>			
			</li>
		</ul>
	</div>
</div>
</template>

<script>
import Logo from "@components/Logo/Logo";
import Search from "./Search";

export default {
	name: "Gallery",
	components: {
		Logo,
		Search,
	},
	data() {
		return {
			searchString: "",
			sortEntries: entries => entries,
		};
	},
	computed: {
		entries() {
			const entries = this.searchString.length
				? this.filterEntries()
				: [...this.$root.entries];

			return this.sortEntries(entries);
		},
	},
	mounted() {
		this.sortEntries = this.defaultSort;
	},
	methods: {
		filterEntries() {
			return this.$root.entries.filter(entry =>
				entry.title.toLowerCase().includes(this.searchString.toLowerCase())
			);
		},
		defaultSort(entries) {
			return entries;
		},
		titleSort(entries) {
			return entries.sort((a, b) => {
				const titleA = a.title.toLowerCase();
				const titleB = b.title.toLowerCase();

				if (titleA < titleB) {
					return -1;
				}

				if (titleA > titleB) {
					return 1;
				}

				return 0;
			});
		},
		likesSort(entries) {
			return entries.sort((a, b) => {
				return b.likes.length - a.likes.length;
			});
		},
	},
};
</script>

<style lang="scss" type="text/scss" scoped>
$module: "gallery";

.#{$module} {
	display: flex;
	flex-flow: row wrap;

	&__item-wrap {
		width: (100 / 3) * 1%;
		display: flex;

		@include mqMax(s-m) {
			width: 50%;
		}

		@include mqMax(s) {
			width: 100%;
			display: block;
		}
	}

	&__item {
		margin: 0 em(20) em(30);
		flex-flow: column wrap;
		display: flex;
		flex-flow: column wrap;
		padding: em(20);
		box-shadow: 2px 2px 5px 1px rgba(black, 0.2);
		border-radius: em(10);

		@include mqMax(s) {
			display: block;
		}
	}

	&__image {
		width: 100%;
		height: em(150);
		object-fit: cover;
		margin-bottom: em(15);
	}

	&__title {
		flex-grow: 1;
	}

	&__filter {
		width: em(500);
		display: block;
	}

	&__sorting {
		text-align: right;
		margin-bottom: em(20);
	}

	&__tab {
		display: inline-block;
		vertical-align: bottom;
		padding-bottom: em(5);
		border: 0;
		border-bottom: 1px solid transparent;
		text-transform: uppercase;
		background-color: transparent;
		outline: 0;

		&.active {
			border-bottom: 1px solid $color5;
		}
	}
}
</style>