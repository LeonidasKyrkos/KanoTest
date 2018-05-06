<template>
	<form class="search" @submit="onSubmit">
		<label for="search">
			<span class="search__label">Search by title</span>
			<input type="text" class="search__input" v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
		</label>
	</form>
</template>

<script>
export default {
	name: "Search",
	props: {
		value: {
			type: String,
			required: false,
		},
	},
	methods: {
		onSubmit(e) {
			e.preventDefault();
		},
	},
};
</script>

<style lang="scss" type="text/scss">
.search {
	margin-bottom: em(30);

	&__input {
		border: 1px solid black;
	}
}
</style>