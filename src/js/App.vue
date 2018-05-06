<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
import Logo from "@components/Logo/Logo";

export default {
	name: "app",
	components: {
		Logo,
	},
};
</script>
