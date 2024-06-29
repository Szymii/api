import { html } from "hono/html";

export const view = () => (
	<html lang="en">
		<head>
			<script src="https://cdn.tailwindcss.com" />
			<title>Home</title>
		</head>
		<body class="bg-gray-900 text-white">
			<main class="container m-auto mt-12">
				<h1 class="text-2xl font-bold">Hello</h1>
				<div class="absolute bottom-2 right-2" id="now-time" />
				{html`
          <script>
            const ws = new WebSocket("ws://localhost:3000/ws");
            const $nowTime = document.getElementById("now-time");
            ws.onmessage = (event) => {
              $nowTime.textContent = event.data;
            };
          </script>
        `}
				<script />
			</main>
		</body>
	</html>
);
