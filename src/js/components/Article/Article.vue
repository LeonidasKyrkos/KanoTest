<template>
	<article class="article">
		<div class="article__top">
			<header class="header--article">
				<router-link to="/" class="header__go-back"><arrow class="header__go-back-arrow"></arrow>Go back</router-link>
				<logo class="header__logo"></logo>
			</header>
			<img class="article__cover" :src="entry.cover_url" alt="Article cover image">
			<span class="article__likes"><heart></heart><span class="article__likes-text">{{ entry.likes.length }}</span></span>
		</div>
		<div class="article__bottom">
			<div class="contentwrap">
				<img class="article__avatar" v-if="entry.user.avatar.urls.character" :src="entry.user.avatar.urls.character" alt="user avatar">
				<h1 class="beta article__title">{{ entry.title }}</h1>
				<h2 class="gamma article__user">by {{ entry.user.username }}</h2>
				<p class="article__description">{{ entry.description }}</p>
			</div>			
		</div>
	</article>
</template>

<script>
import Arrow from "@components/Arrow/Arrow";
import Heart from "@components/Heart/Heart";
import Logo from "@components/Logo/Logo";

export default {
	name: "Article",
	components: {
		Arrow,
		Heart,
		Logo,
	},
	data() {
		return {
			entry: this.$root.entries.find(entry => entry.id === this.$route.params.id),
		};
	},
};
</script>

<style lang="scss" type="text/scss">
$module: "article";

.#{$module} {
	&__top {
		background-color: $color3;
		color: white;
		padding-bottom: em(50);
		position: relative;
	}

	&__bottom {
		background-color: $color4;
		padding: em(50) em(20) em(20);
	}

	&__cover {
		display: block;
		margin: 0 auto;
	}

	&__avatar {
		display: block;
		max-height: em(90);
		margin-bottom: em(20);
	}

	&__title {
		margin-bottom: rem(5);
	}

	&__user {
		font-size: rem(14);
		color: lighten($color3, 15%);
	}

	&__likes {
		position: absolute;
		bottom: em(-40);
		width: em(80);
		height: em(80);
		background-color: $color5;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 100%;
		right: 0;
	}

	&__likes-text {
		position: absolute;
		bottom: em(-30);
		left: 0;
		right: 0;
		text-align: center;
		color: lighten(black, 20%);
	}
}
</style>