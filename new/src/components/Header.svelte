<header>
	<a href="/">&lt;Nick Latcham /&gt;</a>
	<nav>
		<ul>
			<li>
				<a href="/about">About</a>
			</li>
			<li><a href="/projects">Projects</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		width: 100%;
		margin-top: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	ul {
		display: flex;
	}

	li a {
		padding-inline: 0.5rem;
		font-size: clamp(1em, 1.25em, 1vw);
		color: #ffffff80;
	}
	li a:hover,
	li a:active {
		filter: drop-shadow(0 0 0.25rem white);
		color: #ffffff;
		transition: ease-in-out 10ms;
	}

	li a:active {
		filter: drop-shadow(0 0 1rem white);
	}

	header > a {
		font-size: clamp(1.5rem, 2.5vw, 3vw);
		font-weight: 700;
		padding-inline: 0.5rem;
	}

	header > a:hover,
	a:active {
		background: linear-gradient(to right, #ff0094 0%, #ffec00 100%);
		background-clip: text;
		color: transparent;
		animation: gradient 5s ease-in-out infinite;
	}

	header > a:active {
		transition: ease-in 10ms;
		scale: 0.95;
	}

	@keyframes gradient {
		0% {
			background-position: 0 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
